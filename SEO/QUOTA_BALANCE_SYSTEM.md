# Quota & Balance System

This document describes the quota-based balance system used by WebLeads for searches, DM unlocks, and email verifications. It replaced the previous credit-based pricing model.

## Overview

FOR NOW IGNORE ALL TOP UPS - WE ARE NOT USING THEM!!

Users have a **balance allocation** with three independent quotas:

1. **Searches** – Daily limit from the subscription plan. Resets every 24 hours (except for Discover plan).
2. **DM unlocks** – Monthly included amount from the plan plus optional purchased topups. Resets on subscription period (except for Discover plan).
3. **Email verifications** – Monthly included amount from the plan plus optional purchased topups. Resets on subscription period (except for Discover plan).

Each action (run a search, unlock a DM, verify an email) consumes from the corresponding quota. Usage is recorded in **balance transactions** for history and reporting.

### Discover Plan (Trial)

The **Discover** plan is a special trial plan with **lifetime limits** instead of resetting quotas:
- **2 searches total** (not per day) with max 500 results per search
- **100 DM unlocks total** (not per month)
- **200 email verifications total** (not per month)
- All features enabled (email discovery, verification, DM unlocks)
- Once lifetime limits are exhausted, users must upgrade to a paid plan

The system skips daily/monthly resets for Discover plan users automatically.

### Paid plans: searches quota and results cap

| Tier    | Daily searches | Results cap (max results per search) |
|---------|----------------|--------------------------------------|
| Starter | 1              | 800                                  |
| Growth  | 3              | 1,500                                |
| Scale   | 7              | 2,500                                |

Daily search limit is defined per plan via `daily_searches`. The results cap limits how many places/results a single search can return.

### Paid plans: DM unlocks and email verification quotas

Monthly included amounts per plan:

| Tier    | Price / month | DM Unlocks / month | Email Verifications / month |
|---------|---------------|--------------------|-----------------------------|
| Starter | $29.00        | 500                | 3,000                       |
| Growth  | $79.00        | 3,000              | 15,000                      |
| Scale   | $199.00       | 7,000              | 30,000                      |

DM unlock and email verification quotas reset on the subscription billing period. Unused included amounts do not roll over.

## Key Concepts

| Concept | Description |
|--------|-------------|
| **Balance allocation** | Per-user record holding current quotas and usage (one row per user in `balance_allocation`). |
| **Included** | Allowance from the subscription plan (e.g. `monthly_dm_unlocks`, `daily_searches`). |
| **Purchased** | Topups bought via Stripe; stored in `balance_topups` and aggregated on the allocation. |
| **Balance transaction** | Immutable log entry for each consume/refund/topup (table `balance_transactions`). |

## Data Model

### SubscriptionPlan (quota source)

Plan defines limits and pricing:

- `daily_searches` – Max searches per 24-hour window.
- **Results cap** – Max results per search (Starter: 800, Growth: 1,500, Scale: 2,500; Discover: 500).
- `monthly_dm_unlocks` / `included_dm_unlocks` – DM unlocks per billing period.
- `monthly_email_verifications` / `included_email_verifications` – Email verifications per billing period.
- `dm_unlock_price_cents`, `email_verification_price_cents` – Used for topup pricing.

### BalanceAllocation

One row per user. Tracks:

- **Searches:** `searches_used_today`, `search_quota_date` (start of current 24h window). Daily limit is read from the user’s current plan at read time.
- **DM unlocks:** `included_dm_unlocks`, `purchased_dm_unlocks`.
- **Email verifications:** `included_email_verifications`, `purchased_email_verifications`.
- **Reset:** `last_reset_at`, `next_reset_at` for monthly included allowances.

### BalanceTopup

Purchased topup (e.g. Stripe one-off). Fields include:

- `user_id`, `balance_type` (`searches`, `dm_unlocks`, `email_verifications`)
- `amount_purchased`, `amount_remaining`
- `stripe_payment_intent_id`, `price_cents`, `expires_at` (top-up lifetime: **6 months** from purchase)

Consumption uses FIFO: included first, then purchased (oldest first). Expired topups are zeroed and removed from `purchased_*` totals.

### BalanceTransaction

Audit log for balance changes:

- `user_id`, `transaction_type`, `balance_type`
- `amount` (negative for consumption, positive for refund/topup)
- `description`, `reference_id`, `reference_type` (e.g. search_id, person_id)
- `created_at`

## Topup Packs

Users can purchase one-time topup packs via Stripe to supplement their monthly subscription allowances. Purchased quotas are consumed after included allowances. **Credits top-up lifetime is 6 months**—after that, unused purchased balance expires.

### Pricing Philosophy

- **Base Unit Pricing**: Set in `SubscriptionPlan` model
  - DM Unlock: $0.25/unlock (25¢)
  - Email Verification: $0.10/verification (10¢)
- **Volume Discounts**: Larger packs offer better per-unit pricing
- **Separate Products**: DM unlocks and email verifications are separate topup products
- **Top-up lifetime**: Purchased quotas expire 6 months after purchase (unlike monthly included amounts, which reset each period)

### DM Unlock Topup Packs

| Pack Name | Amount | Price | Per-Unit Cost | Discount vs Base |
|-----------|--------|-------|---------------|------------------|
| **10 DM Unlocks** | 10 | $2.00 | $0.20 | 20% off |
| **50 DM Unlocks** | 50 | $10.00 | $0.20 | 20% off |
| **100 DM Unlocks** | 100 | $18.00 | $0.18 | 28% off |
| **250 DM Unlocks** | 250 | $40.00 | $0.16 | 36% off |

**Rationale:**
- **Small Pack (10)**: Quick top-up for users who run out mid-month
- **Medium Pack (50)**: Matches Starter plan's monthly allocation
- **Large Pack (100)**: For power users, slightly better discount
- **Enterprise Pack (250)**: Best per-unit rate for heavy users

### Email Verification Topup Packs

| Pack Name | Amount | Price | Per-Unit Cost | Discount vs Base |
|-----------|--------|-------|---------------|------------------|
| **50 Email Verifications** | 50 | $4.00 | $0.08 | 20% off |
| **200 Email Verifications** | 200 | $15.00 | $0.075 | 25% off |
| **500 Email Verifications** | 500 | $35.00 | $0.07 | 30% off |
| **1,000 Email Verifications** | 1,000 | $65.00 | $0.065 | 35% off |

**Rationale:**
- **Small Pack (50)**: Quick top-up for occasional verification needs
- **Medium Pack (200)**: Matches Growth plan's monthly allocation
- **Large Pack (500)**: For active verifiers, good discount
- **Enterprise Pack (1,000)**: Best per-unit rate for bulk verification

### Topup Pack Implementation

**Database Schema** - `CreditTopupPack` model supports quota-based topups:

```python
class CreditTopupPack(Base):
    balance_type: str  # 'dm_unlocks' or 'email_verifications'
    amount: int  # Total quota amount
    dm_unlocks_amount: int | None  # Specific for DM unlocks
    email_verifications_amount: int | None  # Specific for verifications
    price_cents: int  # Price in cents
    stripe_price_id: str  # Stripe Price ID
    stripe_product_id: str  # Stripe Product ID
```

**Stripe Setup** - Each topup pack requires:
1. **Stripe Product** - One product per balance_type:
   - "DM Unlock Topups"
   - "Email Verification Topups"
2. **Stripe Prices** - One price per pack tier (8 total prices)

**Seed Data** - Create a migration or seed script to populate these packs:

```python
# DM Unlock Packs
dm_unlock_packs = [
    {"name": "10 DM Unlocks", "balance_type": "dm_unlocks", "amount": 10, "dm_unlocks_amount": 10, "price_cents": 200},
    {"name": "50 DM Unlocks", "balance_type": "dm_unlocks", "amount": 50, "dm_unlocks_amount": 50, "price_cents": 1000},
    {"name": "100 DM Unlocks", "balance_type": "dm_unlocks", "amount": 100, "dm_unlocks_amount": 100, "price_cents": 1800},
    {"name": "250 DM Unlocks", "balance_type": "dm_unlocks", "amount": 250, "dm_unlocks_amount": 250, "price_cents": 4000},
]

# Email Verification Packs
email_verification_packs = [
    {"name": "50 Email Verifications", "balance_type": "email_verifications", "amount": 50, "email_verifications_amount": 50, "price_cents": 400},
    {"name": "200 Email Verifications", "balance_type": "email_verifications", "amount": 200, "email_verifications_amount": 200, "price_cents": 1500},
    {"name": "500 Email Verifications", "balance_type": "email_verifications", "amount": 500, "email_verifications_amount": 500, "price_cents": 3500},
    {"name": "1,000 Email Verifications", "balance_type": "email_verifications", "amount": 1000, "email_verifications_amount": 1000, "price_cents": 6500},
]
```

### Value Comparison with Monthly Plans

**DM Unlocks Value Comparison:**

| Plan | Monthly Included | Effective Monthly Cost | Per-Unit Cost |
|------|------------------|------------------------|---------------|
| Discover (Free) | 5 | $0 | Free |
| Starter ($9.99) | 50 | $9.99 | $0.20 |
| Growth ($7.99) | 200 | $7.99 | $0.04 |
| Scale ($49.99) | 600 | $49.99 | $0.08 |
| **50 DM Unlock Topup** | - | **$10.00** | **$0.20** |
| **100 DM Unlock Topup** | - | **$18.00** | **$0.18** |

**Note**: Subscriptions offer better per-unit value for regular users. Topups are for overflow needs.

**Email Verifications Value Comparison:**

| Plan | Monthly Included | Effective Monthly Cost | Per-Unit Cost |
|------|------------------|------------------------|---------------|
| Discover (Free) | 10 | $0 | Free |
| Starter ($9.99) | 500 | $9.99 | $0.02 |
| Growth ($7.99) | 2,000 | $7.99 | $0.004 |
| Scale ($49.99) | 6,000 | $49.99 | $0.008 |
| **200 Verification Topup** | - | **$15.00** | **$0.075** |
| **500 Verification Topup** | - | **$35.00** | **$0.07** |

**Note**: Subscriptions offer significantly better value. Topups are for one-time burst needs.

### Topup API Endpoints

**Base path:** `/api/topups`

| Method | Path | Description |
|--------|------|-------------|
| GET | `/packs` | List all active topup packs, filtered by `balance_type` if provided. |
| POST | `/purchase` | Create Stripe checkout session for topup purchase. |
| GET | `/purchase-history` | User's topup purchase history. |

**Example: GET /topups/packs response:**

```json
{
  "packs": [
    {
      "id": 1,
      "name": "10 DM Unlocks",
      "balance_type": "dm_unlocks",
      "amount": 10,
      "dm_unlocks_amount": 10,
      "email_verifications_amount": null,
      "price_cents": 200,
      "price_display": "$2.00",
      "stripe_price_id": "price_xxx"
    }
  ]
}
```

### Frontend Topup UI

**Topup Modal - DM Unlocks:**

```
🔓 Buy More DM Unlocks
━━━━━━━━━━━━━━━━━━━━━━━━━

Your current plan includes 50 DM unlocks per month.
Add more with a one-time purchase (6-month validity):

┌─────────────────────────────────────┐
│ ⭐ BEST VALUE                       │
│ 250 DM Unlocks                      │
│ $40.00 ($0.16 each) • Save 36%     │
│ [Select]                            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 100 DM Unlocks                      │
│ $18.00 ($0.18 each) • Save 28%     │
│ [Select]                            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 50 DM Unlocks                       │
│ $10.00 ($0.20 each) • Save 20%     │
│ [Select]                            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 10 DM Unlocks                       │
│ $2.00 ($0.20 each) • Save 20%      │
│ [Select]                            │
└─────────────────────────────────────┘

💡 Credits top-up lifetime is 6 months
```

**Topup Modal - Email Verifications:**

```
✉️ Buy More Email Verifications
━━━━━━━━━━━━━━━━━━━━━━━━━

Your current plan includes 2,000 verifications per month.
Add more with a one-time purchase (6-month validity):

┌─────────────────────────────────────┐
│ ⭐ BEST VALUE                       │
│ 1,000 Email Verifications           │
│ $65.00 ($0.065 each) • Save 35%    │
│ [Select]                            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 500 Email Verifications             │
│ $35.00 ($0.07 each) • Save 30%     │
│ [Select]                            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 200 Email Verifications             │
│ $15.00 ($0.075 each) • Save 25%    │
│ [Select]                            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 50 Email Verifications              │
│ $4.00 ($0.08 each) • Save 20%      │
│ [Select]                            │
└─────────────────────────────────────┘

💡 Credits top-up lifetime is 6 months
```

## Service: BalanceAllocationService

**Location:** `app/services/balance_allocation_service.py`

### Read / format

- `get_balance(user_id)` – Returns `BalanceAllocation` or `None`.
- `get_balance_dict(user_id)` – Returns API-shaped dict: `searches_used_today`, `daily_search_limit`, `searches_remaining_today`, `search_quota_resets_at`, `dm_unlocks_remaining`, `email_verifications_remaining`, `next_reset`, `days_until_reset`, etc. Creates allocation from plan if missing.

### Checks

- `has_sufficient_searches(user_id, count=1)` – Considers daily limit and current usage.
- `has_sufficient_dm_unlocks(user_id, count=1)`
- `has_sufficient_email_verifications(user_id, count=1)`

### Consumption

- `consume_searches(user_id, count=1)` – Increments `searches_used_today`; enforces daily limit from plan. Fails with `ValueError` if insufficient.
- `consume_dm_unlocks(user_id, count, person_id=None)` – Deducts from included then purchased (FIFO).
- `consume_email_verifications(user_id, count)` – Same pattern.

Callers are expected to create a `BalanceTransaction` when consuming (e.g. search completion, DM unlock, email verification).

### Refunds

- `refund_dm_unlocks(user_id, count)` – Adds back to `included_dm_unlocks`.
- `refund_email_verifications(user_id, count)` – Adds back to `included_email_verifications`.

### Lifecycle

- `create_balance_for_user(user_id, plan_name="discover")` – Creates initial allocation from plan allowances. Used on signup and when a user gets a subscription without an allocation.
- `reset_included_allowances(user_id, plan_name)` – Sets included DM unlocks and email verifications from plan; sets `last_reset_at` / `next_reset_at`. Used on plan change or period renewal.
- `_reset_search_quota_if_needed(balance)` – If 24 hours have passed since `search_quota_date`, resets `searches_used_today` and updates the date.
- `expire_old_topups(user_id)` – Zeroes expired topups and decreases `purchased_*` on the allocation.
- `add_purchased_balance(user_id, balance_type, amount, price_cents, stripe_payment_intent_id)` – Creates a `BalanceTopup` and increases the corresponding `purchased_*` field (e.g. from Stripe webhook).

Search quota uses a **24-hour rolling window** (`SEARCH_QUOTA_WINDOW`). DM and email verifications use **monthly resets** aligned to subscription period.

## API Endpoints

**Base path:** `/api/v1` (balance router is mounted at `/api/v1`).

| Method | Path | Description |
|--------|------|-------------|
| GET | `/balance/` | Current user balance (same shape as `get_balance_dict`). |
| GET | `/balance/history` | Balance transaction history. Query: `balance_type` (optional) = `searches`, `dm_unlocks`, `email_verifications`. |

Response for `GET /balance/` includes:

- `searches_used_today`, `daily_search_limit`, `searches_remaining_today`, `search_quota_resets_at`
- `dm_unlocks_remaining`, `email_verifications_remaining`
- `next_reset`, `days_until_reset`, `last_reset`

`/subscriptions/current` also returns a `balance` object (same shape) for the current user.

## Where Quotas Are Used

| Flow | Service / route | Action |
|------|------------------|--------|
| Search completion | `SearchFinalizationService` | `consume_searches(user_id, 1)` + `BalanceTransaction` (type search). |
| DM unlock | `DMUnlockService` / `dm_unlock` routes | `consume_dm_unlocks(user_id, count)` + transaction. |
| Email verification | `EmailVerificationCreditService` + processor | `consume_email_verifications` on settle; `refund_email_verifications` on partial refund; transactions recorded. |
| New user signup | `auth` routes | `create_balance_for_user(user_id, "discover")` after creating free subscription. |
| Plan change / renewal | Webhooks (Stripe) | `reset_included_allowances(user_id, plan_name)` or `create_balance_for_user` if no allocation. |
| Topup purchase | Webhooks (Stripe `payment_intent.succeeded`) | `add_purchased_balance(...)` for `balance_type` and `amount` from metadata. |

Search start is gated by `has_sufficient_searches` in the search route; DM unlock and email verification routes gate with `has_sufficient_dm_unlocks` and `has_sufficient_email_verifications` respectively.

## Frontend

- **Balance:** `balanceApi.getBalance()` → `GET /api/v1/balance/` (see `src/api/balance.ts`).
- **History:** `balanceApi.getHistory(balanceType?)` → `GET /api/v1/balance/history`.
- **Subscription + balance:** `subscriptionsApi.getCurrentSubscription()` → `GET /api/subscriptions/current` returns `subscription` and `balance`.
- **Topup Packs:** `topupsApi.getTopupPacks()` → `GET /api/topups/packs`.
- **Purchase Topup:** `topupsApi.purchaseTopup(packId, successUrl, cancelUrl)` → `POST /api/topups/purchase`.
- **Purchase History:** `topupsApi.getPurchaseHistory()` → `GET /api/topups/purchase-history`.

UI components (e.g. header, CreditBalance, CreditHistory, modals) use these to show remaining searches, DM unlocks, and email verifications and to display usage history. Topup purchase modals use the topup APIs to display available packs and initiate Stripe checkout.

## Migration Note

The previous system used **credits** (`CreditService`, `CreditBalance`, `CreditUsage`, `CreditTopupPurchase`) and per-place unlock logic. The new system:

- Uses **daily search quota** instead of credits per search.
- Uses **DM unlock** and **email verification** quotas instead of a single credit pool.
- Replaces credit balance/usage with **BalanceAllocation** and **BalanceTransaction**.
- Replaces credit topups with **BalanceTopup** and `add_purchased_balance`.
- **Topup Packs**: Old credit-based topup packs should be marked as `is_active = False`. New quota-based topup packs (defined above) need to be created in Stripe and seeded into the database.

The legacy credit models and `CreditService` remain in the codebase only where still referenced (e.g. some tests, webhook handling for old topup records). New behaviour is implemented on the quota and balance system described above.

### Topup Migration Steps

1. **Create Stripe Products** (one-time setup):
   - DM Unlock Topups product
   - Email Verification Topups product

2. **Create Stripe Prices** (8 prices total):
   - 4 DM unlock pack prices
   - 4 email verification pack prices

3. **Seed Database**:
   - Run migration or seed script to populate `credit_topup_packs` table with quota-based packs
   - Mark old credit-based packs as `is_active = False`

4. **Update Frontend**:
   - Modify topup selection UI to show quota-based packs
   - Update purchase flow to use new `balance_type` parameter

5. **Stripe Webhook Handling**:
   - Already implemented in `BalanceAllocationService.add_purchased_balance()`
   - Metadata from Stripe checkout includes `balance_type` and `amount`
