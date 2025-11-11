# Stripe Payment Integration - Product Requirements Document

## 1. Executive Summary

### Overview
This document outlines the implementation of a **credit-based payment system** for WebLeads using Stripe. The system uses a simple, transparent model:

**🎯 1 credit = 1 Place (Company/Lead)**

Users get **unlimited searches** but consume credits **when search completes** based on Places found. Users can only view/access Places up to their available credit balance. This aligns perfectly with the core value proposition: users pay for the leads they can access, with full visibility control.

### Business Goals
- Monetize the WebLeads platform through credit-based subscriptions
- Provide unlimited searches for all users (even Free tier)
- Simple, transparent pricing: pay per Place (company) found
- Enable flexible top-ups for additional credits
- Monthly billing for predictable revenue
- Prevent data extraction without payment through access control

### Why Credit-Based Model? 🚀

**Advantages over search-limit model:**
1. **Simpler to understand**: "You get X companies per month" vs. "You get Y searches per week with Z decision-makers each"
2. **Better value perception**: Users pay for what matters (companies with contacts), not attempts (searches)
3. **Pay upfront for results**: Credits charged when search finds Places, preventing free data extraction
4. **Industry standard**: Most lead gen tools charge per company/lead, not per search
5. **Flexible usage**: Power users can add top-ups as needed
6. **Clear access control**: Users see only Places they have credits for, rest are locked
7. **Better UX**: Clear credit balance, predictable costs, no surprise charges

### 📊 TL;DR - How It Works

1. **User creates search** → Search starts processing (unlimited searches allowed, requires min 10 credits)
2. **Search completes** → System finds 2,000 Places (companies)
3. **Credit check** → User has 100 credits remaining
4. **Automatic charge** → System charges 100 credits (all available)
5. **Access control** → User can see/access **100 Places** (unlocked), **1,900 Places locked**
6. **Results page** → Shows 100 unlocked Places (full data) + 1,900 locked/blurred with "🔒 Upgrade to unlock"
7. **Export** → User can export 100 unlocked Places (no additional charge)
8. **Buy credits** → User purchases 1,000 credits top-up ($2.00)
9. **Partial unlock** → System automatically unlocks 1,000 more Places (charges 1,000 credits)
10. **Partial access** → User now sees 1,100 Places unlocked, **900 still locked**, 0 credits remaining
11. **Buy more** → User purchases 5,000 credits top-up ($10.00)
12. **Full access** → System unlocks remaining 900 Places + user has 4,100 credits remaining

### ✨ Key Features

- **Pay per Place (Company)**: 1 credit = 1 Place, not 1 person
- **Charge on Completion**: Credits charged when search finds results
- **Minimum Credit Requirement**: Need 10+ credits to create new searches
- **Access Control**: Only see Places you have credits for
- **Locked Results**: Remaining Places are blurred with upgrade CTA
- **Partial Unlocking**: Buy credits incrementally, unlock Places gradually
- **No Export Fees**: Export is free (already paid on search)
- **Persistent Access**: Unlocked Places stay unlocked forever
- **Auto-Unlock**: Buy credits → locked Places unlock automatically

---

## 2. Subscription Plans

### Core Concept

**1 credit = 1 Place (Company)**

- **Unlimited searches** for all users (even Free)
- Credits are **consumed when search completes**, based on Places found
- Users can only **view/access Places up to their credit balance**
- If search finds 2,000 Places but user has 100 credits:
  - User sees first 100 Places (unlocked, full data visible)
  - Remaining 1,900 Places are **locked/blurred** with upgrade modal
- Export is limited to unlocked Places only
- Paid plans include monthly credit allocations (renew monthly)
- Additional credits available via top-up packs (one-time purchases)

### Main Subscription Plans

| Plan | Price/Month | Included Credits | **💰 Price per 1,000 Leads** | Cost Per Lead | Features |
|------|-------------|------------------|------------------------------|---------------|----------|
| **Free** | $0 | 1,000 credits | - | - | Test pack, unlimited searches, 1 active search at a time |
| **Starter** | $3.99 | 3,000 credits | **$1.33 / 1K leads** | $0.00133 | Unlimited searches, 1 active search at a time |
| **Growth ⭐** | $7.99 | 8,000 credits | **$1.00 / 1K leads** | $0.001 | Unlimited searches, 1 active search at a time, priority support |
| **Scale** | $21.99 | 24,000 credits | **$0.916 / 1K leads** | $0.000916 | Unlimited searches, 1 active search at a time, priority support, dedicated account manager |

### Credit Top-Up Packs (One-Time Purchase)

Additional credit packs available for one-time purchase when users run low:

**💰 Top-Up Pricing: ~$0.00167 per credit** (or **$1.67 per 1,000 leads** average)

| Credits | Price (One-Time) | **Price per 1,000 Leads** | Cost Per Lead |
|---------|------------------|---------------------------|---------------|
| **500** | $1.00 | $2.00 / 1K leads | $0.002 |
| **1,200** | $2.00 | $1.67 / 1K leads | $0.00167 |
| **6,000** | $10.00 | $1.67 / 1K leads | $0.00167 |
| **14,000** | $20.00 | $1.43 / 1K leads | $0.00143 |

**Top-Up Notes**:
- **One-time purchase** (NOT recurring subscriptions)
- Credits added immediately to current month's balance
- Purchased credits do NOT expire until end of current billing period
- Users can purchase multiple packs as needed
- Top-up credits stack with plan credits
- Credits reset monthly along with plan credits (no rollover)

### Key Requirements
- Credits reset every month on billing date
- Unused credits do NOT roll over to next billing period
- Users can upgrade/downgrade at any time
- Billing is monthly for main plans
- Pro-rated refunds for downgrades (Stripe handles this)
- Searches are unlimited, credits consumed when search completes
- Users see only Places (companies) they have credits for
- Locked Places are blurred/hidden with upgrade modal
- Export limited to unlocked Places only

### Plan Differentiators

| Feature | Free | Starter | Growth ⭐ | Scale |
|---------|------|---------|-----------|-------|
| **Searches** | Unlimited | Unlimited | Unlimited | Unlimited |
| **Credits/Month** | 1,000 | 3,000 | 8,000 | 24,000 |
| **Price per 1K Leads** | - | **$1.33** | **$1.00** | **$0.916** |
| **Cost Per Lead** | - | $0.00133 | $0.001 | $0.000916 |
| **Queued Searches** | 1 at a time | 1 at a time | 1 at a time | 1 at a time |
| **Support** | Community | Email | Priority | Priority + Account Manager |
| **Top-Ups** | No | Yes | Yes | Yes |

**Notes**:
- 🔄 **Multiple queued searches**: Feature available in code, may be enabled per-plan in future updates
- All plans currently limited to 1 active search at a time

**Key Value Props**:
- **Free → Starter**: 3x more credits (3,000), top-up capability, only $1.33 per 1K leads
- **Starter → Pro**: 2.7x more credits (8,000), priority support, **25% lower per-lead cost** ($1.00/1K)
- **Pro → Agency**: 3x more credits (24,000), dedicated support, **8% lower per-lead cost** ($0.916/1K)

---

## 3. Technical Architecture

### 3.1 Database Schema Changes

#### New Tables

##### `subscription_plans` Table
```python
class SubscriptionPlan(Base):
    __tablename__ = "subscription_plans"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)  # "free", "starter", "pro", "agency"
    display_name = Column(String, nullable=False)  # "Free", "Starter", "Pro ⭐", "Agency"
    stripe_price_id = Column(String, unique=True, nullable=True)  # Stripe Price ID
    stripe_product_id = Column(String, nullable=True)  # Stripe Product ID
    credits_per_month = Column(Integer, nullable=False)  # 1000, 18000, 35000, 70000
    price_cents = Column(Integer, nullable=False)  # 0, 899, 1499, 2499
    billing_interval = Column(String, nullable=True)  # "month", null for free
    allow_multiple_queued_searches = Column(Boolean, default=False)  # false for free only
    allow_topups = Column(Boolean, default=False)  # false for free, true for paid
    priority_support = Column(Boolean, default=False)  # true for pro/agency
    dedicated_support = Column(Boolean, default=False)  # true for agency only
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
```

##### `credit_topup_packs` Table
```python
class CreditTopupPack(Base):
    __tablename__ = "credit_topup_packs"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)  # "500 Credits", "1,000 Credits", etc.
    credits = Column(Integer, nullable=False)  # 500, 1000, 5000, 10000
    price_cents = Column(Integer, nullable=False)  # 250, 500, 2500, 5000
    stripe_price_id = Column(String, unique=True, nullable=False)  # Stripe Price ID
    stripe_product_id = Column(String, nullable=False)  # Stripe Product ID
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
```

##### `user_subscriptions` Table
```python
class UserSubscription(Base):
    __tablename__ = "user_subscriptions"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    subscription_plan_id = Column(Integer, ForeignKey("subscription_plans.id"), nullable=False)
    stripe_subscription_id = Column(String, unique=True, nullable=True)  # Stripe Subscription ID
    stripe_customer_id = Column(String, nullable=True)  # Stripe Customer ID
    status = Column(String, nullable=False)  # "active", "canceled", "past_due", "trialing"
    current_period_start = Column(DateTime, nullable=True)
    current_period_end = Column(DateTime, nullable=True)
    cancel_at_period_end = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    user = relationship("User", back_populates="subscriptions")
    plan = relationship("SubscriptionPlan")
```

##### `credit_topup_purchases` Table
```python
class CreditTopupPurchase(Base):
    __tablename__ = "credit_topup_purchases"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    topup_pack_id = Column(Integer, ForeignKey("credit_topup_packs.id"), nullable=False)
    stripe_payment_intent_id = Column(String, unique=True, nullable=False)  # Stripe Payment Intent ID
    credits_purchased = Column(Integer, nullable=False)  # Number of credits in this purchase
    amount_paid_cents = Column(Integer, nullable=False)  # Amount paid in cents
    status = Column(String, nullable=False)  # "succeeded", "processing", "failed"
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    user = relationship("User", back_populates="topup_purchases")
    topup_pack = relationship("CreditTopupPack")
```

##### `credit_usage` Table
```python
class CreditUsage(Base):
    __tablename__ = "credit_usage"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    search_id = Column(Integer, ForeignKey("searches.id", ondelete="SET NULL"), nullable=True)
    credits_used = Column(Integer, nullable=False)  # Number of credits consumed (= number of Places unlocked)
    usage_type = Column(String, nullable=False)  # "search_completion" or "export"
    places_unlocked = Column(Integer, nullable=False)  # Number of Places unlocked
    billing_period_start = Column(DateTime, nullable=False, index=True)  # Start of billing period
    billing_period_end = Column(DateTime, nullable=False, index=True)  # End of billing period
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    user = relationship("User", back_populates="credit_usage")
    search = relationship("Search")
    
    __table_args__ = (
        Index("idx_user_period", "user_id", "billing_period_start", "billing_period_end"),
    )
```

##### `search_result_access` Table
```python
class SearchResultAccess(Base):
    __tablename__ = "search_result_access"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    search_id = Column(Integer, ForeignKey("searches.id", ondelete="CASCADE"), nullable=False)
    total_places_found = Column(Integer, nullable=False)  # Total Places found by search
    places_unlocked = Column(Integer, nullable=False)  # Places user can access (limited by credits)
    credits_charged = Column(Integer, nullable=False)  # Credits consumed for this search
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    user = relationship("User")
    search = relationship("Search")
    
    __table_args__ = (
        Index("idx_user_search", "user_id", "search_id"),
        UniqueConstraint("user_id", "search_id", name="uq_user_search_access"),
    )
```

##### `credit_balance` Table
```python
class CreditBalance(Base):
    __tablename__ = "credit_balance"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False, unique=True)
    total_credits = Column(Integer, nullable=False, default=0)  # Total credits available this month
    used_credits = Column(Integer, nullable=False, default=0)  # Credits consumed this month
    remaining_credits = Column(Integer, nullable=False, default=0)  # Remaining credits
    last_reset_at = Column(DateTime, nullable=False)  # Last time credits were reset (monthly)
    next_reset_at = Column(DateTime, nullable=False)  # Next credit reset date
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    user = relationship("User", back_populates="credit_balance", uselist=False)
```

##### `stripe_events` Table (for idempotency and audit)
```python
class StripeEvent(Base):
    __tablename__ = "stripe_events"
    
    id = Column(Integer, primary_key=True, index=True)
    stripe_event_id = Column(String, unique=True, nullable=False, index=True)
    event_type = Column(String, nullable=False)  # "customer.subscription.updated", etc.
    payload = Column(JSON, nullable=False)
    processed = Column(Boolean, default=False)
    processed_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
```

#### Modified Tables

##### `users` Table - Add Fields
```python
# Add to existing User model:
stripe_customer_id = Column(String, unique=True, nullable=True, index=True)
current_subscription_id = Column(Integer, ForeignKey("user_subscriptions.id"), nullable=True)

# Relationships
subscriptions = relationship("UserSubscription", back_populates="user", 
                            foreign_keys="[UserSubscription.user_id]")
current_subscription = relationship("UserSubscription", 
                                   foreign_keys=[current_subscription_id],
                                   uselist=False)
topup_purchases = relationship("CreditTopupPurchase", back_populates="user")
credit_usage = relationship("CreditUsage", back_populates="user")
credit_balance = relationship("CreditBalance", back_populates="user", uselist=False)
```

---

### 3.2 API Endpoints

#### Subscription Management

##### `GET /api/subscriptions/plans`
- **Description**: Get all available subscription plans and top-up packs
- **Auth**: Optional (public)
- **Response**: 
```json
{
  "plans": [
    {
      "id": 1,
      "name": "free",
      "display_name": "Free",
      "credits_per_month": 1000,
      "price_cents": 0,
      "price_display": "$0",
      "cost_per_lead": null,
      "billing_interval": null,
      "allow_multiple_queued_searches": false,
      "allow_topups": false,
      "priority_support": false
    },
    {
      "id": 2,
      "name": "starter",
      "display_name": "Starter",
      "credits_per_month": 3000,
      "price_cents": 399,
      "price_display": "$3.99",
      "price_per_1k_leads": "$1.33",
      "cost_per_lead": "$0.00133",
      "billing_interval": "month",
      "allow_multiple_queued_searches": false,
      "allow_topups": true,
      "priority_support": false,
      "stripe_price_id": "price_xxx"
    },
    {
      "id": 3,
      "name": "pro",
      "display_name": "Pro ⭐",
      "credits_per_month": 8000,
      "price_cents": 799,
      "price_display": "$7.99",
      "price_per_1k_leads": "$1.00",
      "cost_per_lead": "$0.001",
      "billing_interval": "month",
      "allow_multiple_queued_searches": false,
      "allow_topups": true,
      "priority_support": true,
      "stripe_price_id": "price_xxx",
      "featured": true
    },
    {
      "id": 4,
      "name": "agency",
      "display_name": "Agency",
      "credits_per_month": 24000,
      "price_cents": 2199,
      "price_display": "$21.99",
      "price_per_1k_leads": "$0.916",
      "cost_per_lead": "$0.000916",
      "billing_interval": "month",
      "allow_multiple_queued_searches": false,
      "allow_topups": true,
      "priority_support": true,
      "dedicated_support": true,
      "stripe_price_id": "price_xxx"
    }
  ],
  "topup_packs": [
    {
      "id": 1,
      "name": "500 Credits",
      "credits": 500,
      "price_cents": 100,
      "price_display": "$1.00",
      "price_per_1k_leads": "$2.00",
      "cost_per_lead": "$0.002",
      "stripe_price_id": "price_xxx"
    },
    {
      "id": 2,
      "name": "1,000 Credits",
      "credits": 1000,
      "price_cents": 200,
      "price_display": "$2.00",
      "price_per_1k_leads": "$2.00",
      "cost_per_lead": "$0.002",
      "stripe_price_id": "price_xxx",
      "recommended": true
    },
    {
      "id": 3,
      "name": "5,000 Credits",
      "credits": 5000,
      "price_cents": 1000,
      "price_display": "$10.00",
      "price_per_1k_leads": "$2.00",
      "cost_per_lead": "$0.002",
      "stripe_price_id": "price_xxx"
    },
    {
      "id": 4,
      "name": "10,000 Credits",
      "credits": 10000,
      "price_cents": 2000,
      "price_display": "$20.00",
      "price_per_1k_leads": "$2.00",
      "cost_per_lead": "$0.002",
      "stripe_price_id": "price_xxx"
    }
  ]
}
```

##### `GET /api/subscriptions/current`
- **Description**: Get current user's subscription with credit balance
- **Auth**: Required
- **Response**:
```json
{
  "subscription": {
    "plan_name": "starter",
    "plan_display_name": "Starter",
    "status": "active",
    "current_period_start": "2025-10-01T00:00:00Z",
    "current_period_end": "2025-11-01T00:00:00Z",
    "cancel_at_period_end": false,
    "allow_multiple_queued_searches": false,
    "allow_topups": true
  },
  "credits": {
    "total_credits": 4000,
    "used_credits": 1430,
    "remaining_credits": 2570,
    "plan_credits": 3000,
    "purchased_credits_this_month": 1000,
    "last_reset": "2025-10-01T00:00:00Z",
    "next_reset": "2025-11-01T00:00:00Z"
  }
}
```

##### `POST /api/subscriptions/create-checkout-session`
- **Description**: Create Stripe checkout session for subscription
- **Auth**: Required
- **Request**:
```json
{
  "plan_id": 2,
  "success_url": "https://app.webleads.com/subscription/success",
  "cancel_url": "https://app.webleads.com/subscription/cancel"
}
```
- **Response**:
```json
{
  "checkout_url": "https://checkout.stripe.com/c/pay/cs_xxx"
}
```

##### `POST /api/subscriptions/create-portal-session`
- **Description**: Create Stripe customer portal session for managing subscription
- **Auth**: Required
- **Request**:
```json
{
  "return_url": "https://app.webleads.com/settings"
}
```
- **Response**:
```json
{
  "portal_url": "https://billing.stripe.com/p/session/xxx"
}
```

##### `POST /api/subscriptions/cancel`
- **Description**: Cancel subscription at period end
- **Auth**: Required
- **Response**:
```json
{
  "success": true,
  "message": "Subscription will cancel at period end",
  "cancel_at": "2025-10-08T00:00:00Z"
}
```

##### `POST /api/subscriptions/reactivate`
- **Description**: Reactivate a canceled subscription
- **Auth**: Required
- **Response**:
```json
{
  "success": true,
  "message": "Subscription reactivated"
}
```

#### Top-Up Pack Management

##### `POST /api/topups/purchase`
- **Description**: Create Stripe checkout for one-time credit top-up purchase
- **Auth**: Required
- **Request**:
```json
{
  "topup_pack_id": 2,
  "success_url": "https://app.webleads.com/topup/success",
  "cancel_url": "https://app.webleads.com/topup/cancel"
}
```
- **Response**:
```json
{
  "checkout_url": "https://checkout.stripe.com/c/pay/cs_xxx",
  "session_id": "cs_xxx"
}
```

##### `GET /api/topups/packs`
- **Description**: Get all available top-up packs
- **Auth**: Optional (public)
- **Response**:
```json
{
  "packs": [
    {
      "id": 1,
      "name": "500 Credits",
      "credits": 500,
      "price_cents": 250,
      "price_display": "$2.50"
    },
    {
      "id": 2,
      "name": "1,000 Credits",
      "credits": 1000,
      "price_cents": 500,
      "price_display": "$5.00",
      "recommended": true
    }
  ]
}
```

##### `GET /api/topups/purchase-history`
- **Description**: Get user's credit top-up purchase history
- **Auth**: Required
- **Response**:
```json
{
  "purchases": [
    {
      "id": 1,
      "pack_name": "1,000 Credits",
      "credits_purchased": 1000,
      "amount_paid": "$5.00",
      "status": "succeeded",
      "purchased_at": "2025-10-15T14:32:00Z"
    },
    {
      "id": 2,
      "pack_name": "5,000 Credits",
      "credits_purchased": 5000,
      "amount_paid": "$25.00",
      "status": "succeeded",
      "purchased_at": "2025-10-20T09:15:00Z"
    }
  ],
  "total_credits_purchased": 6000,
  "total_spent": "$30.00"
}
```

#### Webhook Endpoint

##### `POST /api/webhooks/stripe`
- **Description**: Handle Stripe webhook events
- **Auth**: Stripe signature verification
- **Events to Handle**:
  
  **Subscription Events (Monthly Plans)**:
  - `customer.subscription.created` - Create/update subscription
  - `customer.subscription.updated` - Update subscription status
  - `customer.subscription.deleted` - Handle cancellation
  - `invoice.payment_succeeded` - Confirm monthly payment, reset credits
  - `invoice.payment_failed` - Handle failed monthly payment
  
  **Payment Events (One-Time Top-Ups)**:
  - `payment_intent.succeeded` - Add purchased credits to balance
  - `payment_intent.payment_failed` - Handle failed top-up purchase
  
  **Customer Events**:
  - `customer.created` - Store customer ID
  - `customer.updated` - Update customer info

#### Credit Usage Tracking

##### `GET /api/credits/balance`
- **Description**: Get current credit balance
- **Auth**: Required
- **Response**:
```json
{
  "total_credits": 20000,
  "used_credits": 5430,
  "remaining_credits": 14570,
  "plan_credits": 18000,
  "topup_credits": 2000,
  "last_reset": "2025-10-01T00:00:00Z",
  "next_reset": "2025-11-01T00:00:00Z",
  "days_until_reset": 25
}
```

##### `POST /api/credits/unlock-places`
- **Description**: Unlock additional Places for a search (when user buys more credits)
- **Auth**: Required
- **Request**:
```json
{
  "search_id": 123
}
```
- **Response**:
```json
{
  "success": true,
  "total_places_found": 2000,
  "places_previously_unlocked": 100,
  "places_now_unlocked": 2000,
  "additional_places_unlocked": 1900,
  "credits_consumed": 1900,
  "remaining_credits": 3100
}
```
- **Note**: This endpoint is called automatically after successful credit top-up purchase

##### `GET /api/credits/usage-history`
- **Description**: Get credit usage history
- **Auth**: Required
- **Query Params**: `?start_date=2025-09-01&end_date=2025-10-01`
- **Response**:
```json
{
  "usage_history": [
    {
      "date": "2025-10-01",
      "search_id": 123,
      "search_query": "restaurants in NYC",
      "usage_type": "search_completion",
      "credits_used": 50,
      "places_unlocked": 50,
      "total_places_found": 50,
      "created_at": "2025-10-01T14:32:00Z"
    },
    {
      "date": "2025-10-02",
      "search_id": 124,
      "search_query": "lawyers in Boston",
      "usage_type": "search_completion",
      "credits_used": 100,
      "places_unlocked": 100,
      "total_places_found": 2000,
      "created_at": "2025-10-02T09:15:00Z"
    },
    {
      "date": "2025-10-03",
      "search_id": 124,
      "usage_type": "unlock_additional",
      "credits_used": 1900,
      "places_unlocked": 1900,
      "total_places_found": 2000,
      "created_at": "2025-10-03T11:22:00Z"
    }
  ],
  "total_credits_used": 5430,
  "total_searches": 42,
  "total_places_unlocked": 126500
}
```

---

### 3.3 Business Logic

#### Search Creation (Minimum Credit Check Required)

**Implementation in Search Creation Endpoint** (`POST /api/searches/`)

```python
@router.post("/", response_model=SearchResponse)
def create_search(
    search_data: SearchCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    subscription_service = SubscriptionService(db)
    credit_service = CreditService(db)
    
    subscription = subscription_service.get_current_subscription(current_user.id)
    
    # Check minimum credit balance (10 credits required)
    credit_balance = credit_service.get_balance(current_user.id)
    MINIMUM_CREDITS_REQUIRED = 10
    
    if credit_balance.remaining_credits < MINIMUM_CREDITS_REQUIRED:
        raise HTTPException(
            status_code=status.HTTP_402_PAYMENT_REQUIRED,
            detail={
                "message": f"Insufficient credits to create search. You need at least {MINIMUM_CREDITS_REQUIRED} credits.",
                "credits_available": credit_balance.remaining_credits,
                "credits_needed": MINIMUM_CREDITS_REQUIRED,
                "suggested_action": "buy_credits" if subscription.plan.allow_topups else "upgrade_plan",
                "current_plan": subscription.plan.name
            }
        )
    
    # Check for multiple queued searches (All plans restricted to 1 at a time currently)
    if not subscription.plan.allow_multiple_queued_searches:
        active_search = (
            db.query(Search)
            .filter(
                Search.user_id == current_user.id,
                Search.status.in_([SearchStatus.PENDING, SearchStatus.PROCESSING])
            )
            .first()
        )
        if active_search:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail={
                    "message": "You already have an active search.",
                    "current_search_id": active_search.id,
                    "current_plan": subscription.plan.name
                }
            )
    
    # Create search (credits consumed when search completes)
    new_search = Search(
        search_query=search_data.search_query,
        city_name=search_data.city_name,
        # ... other fields
        user_id=current_user.id,
        status=SearchStatus.PENDING
    )
    db.add(new_search)
    db.commit()
    
    # Trigger search task
    trigger_search_task(new_search.id)
    
    return new_search
```

#### Search Completion with Credit Charging

**Implementation in Search Finalization** (called when search completes)

```python
def finalize_search(search_id: int, db: Session):
    """
    Called when search completes successfully.
    Charges credits based on Places found.
    """
    credit_service = CreditService(db)
    
    # Get search
    search = db.query(Search).filter(Search.id == search_id).first()
    if not search:
        return
    
    # Count total Places found
    total_places = (
        db.query(func.count(search_places.c.place_id))
        .filter(search_places.c.search_id == search_id)
        .scalar()
    )
    
    # Get user's credit balance
    credit_balance = credit_service.get_balance(search.user_id)
    
    # Determine how many Places user can unlock
    places_unlocked = min(total_places, credit_balance.remaining_credits)
    credits_to_charge = places_unlocked
    
    # Charge credits
    if credits_to_charge > 0:
        credit_service.consume_credits(
            user_id=search.user_id,
            search_id=search_id,
            credits_used=credits_to_charge,
            usage_type="search_completion",
            places_unlocked=places_unlocked
        )
    
    # Record access level
    access_record = SearchResultAccess(
        user_id=search.user_id,
        search_id=search_id,
        total_places_found=total_places,
        places_unlocked=places_unlocked,
        credits_charged=credits_to_charge
    )
    db.add(access_record)
    
    # Update search status
    search.status = SearchStatus.COMPLETED
    search.total_places = total_places
    search.places_accessible = places_unlocked
    
    db.commit()
    
    return {
        "total_places_found": total_places,
        "places_unlocked": places_unlocked,
        "credits_charged": credits_to_charge,
        "credits_remaining": credit_balance.remaining_credits - credits_to_charge
    }
```

#### Results Viewing with Access Control

**Implementation in Results Endpoint** (`GET /api/results/{search_id}`)

```python
@router.get("/{search_id}")
def get_search_results(
    search_id: int,
    skip: int = 0,
    limit: int = 50,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    # Get search
    search = db.query(Search).filter(
        Search.id == search_id,
        Search.user_id == current_user.id
    ).first()
    
    if not search:
        raise HTTPException(status_code=404, detail="Search not found")
    
    # Get access record
    access = db.query(SearchResultAccess).filter(
        SearchResultAccess.user_id == current_user.id,
        SearchResultAccess.search_id == search_id
    ).first()
    
    if not access:
        raise HTTPException(status_code=404, detail="Access record not found")
    
    # Get unlocked Places (user can access up to places_unlocked)
    unlocked_places = (
        db.query(Place)
        .join(search_places)
        .filter(search_places.c.search_id == search_id)
        .order_by(Place.id)  # Consistent ordering
        .limit(access.places_unlocked)
        .offset(skip)
        .limit(limit)
        .all()
    )
    
    return {
        "search_id": search_id,
        "total_places_found": access.total_places_found,
        "places_accessible": access.places_unlocked,
        "places_locked": access.total_places_found - access.places_unlocked,
        "credits_charged": access.credits_charged,
        "pagination": {
            "skip": skip,
            "limit": limit,
            "total_accessible": access.places_unlocked
        },
        "results": [serialize_place(place) for place in unlocked_places],
        "has_locked_results": access.total_places_found > access.places_unlocked,
        "upgrade_required": access.total_places_found > access.places_unlocked
    }
```

#### Export with Access Control

**Implementation in Export Endpoint** (`GET /api/results/{search_id}/export`)

```python
@router.get("/{search_id}/export")
def export_results(
    search_id: int,
    format: str = "csv",
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    # Get access record
    access = db.query(SearchResultAccess).filter(
        SearchResultAccess.user_id == current_user.id,
        SearchResultAccess.search_id == search_id
    ).first()
    
    if not access:
        raise HTTPException(status_code=404, detail="No access to this search")
    
    if access.places_unlocked == 0:
        raise HTTPException(
            status_code=status.HTTP_402_PAYMENT_REQUIRED,
            detail="No places unlocked. Purchase credits to unlock results."
        )
    
    # Get ONLY unlocked Places
    unlocked_places = (
        db.query(Place)
        .join(search_places)
        .filter(search_places.c.search_id == search_id)
        .order_by(Place.id)
        .limit(access.places_unlocked)
        .all()
    )
    
    # Generate export file
    file_content = generate_export(unlocked_places, format)
    
    return Response(
        content=file_content, 
        media_type="application/octet-stream",
        headers={
            "Content-Disposition": f"attachment; filename=search_{search_id}.{format}",
            "X-Places-Exported": str(access.places_unlocked),
            "X-Total-Places": str(access.total_places_found)
        }
    )
```

#### Monthly Credit Reset

**Celery Periodic Task** (runs daily, checks for users needing reset)

```python
@celery_app.task(name="reset_monthly_credits")
def reset_monthly_credits():
    """
    Reset credits for users whose billing period has ended.
    This runs daily and checks which users need their credits reset.
    
    Note: Top-up purchases are one-time and credits reset along with plan credits.
    """
    with DBManager.get_session() as db:
        # Find all credit balances where next_reset_at has passed
        balances_to_reset = (
            db.query(CreditBalance)
            .filter(CreditBalance.next_reset_at <= datetime.utcnow())
            .all()
        )
        
        for balance in balances_to_reset:
            # Calculate new credits from plan only (topups are one-time)
            subscription = balance.user.current_subscription
            plan_credits = subscription.plan.credits_per_month if subscription else 1000
            
            # Reset balance (purchased credits also reset monthly, no rollover)
            balance.total_credits = plan_credits
            balance.used_credits = 0
            balance.remaining_credits = plan_credits
            balance.last_reset_at = datetime.utcnow()
            balance.next_reset_at = datetime.utcnow() + timedelta(days=30)
            
        db.commit()
        return {"reset_count": len(balances_to_reset)}
```

**Important**: When a user purchases top-up credits, they are added to `purchased_credits_this_month` which is tracked separately but included in `total_credits`. All credits (plan + purchased) reset at the end of the billing period.

---

### 3.4 Stripe Integration Details

#### Configuration

**Environment Variables**:
```bash
# Backend .env
STRIPE_SECRET_KEY=sk_test_xxx  # or sk_live_xxx for production
STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Subscription Plans (Recurring Monthly)
STRIPE_STARTER_PRICE_ID=price_xxx   # Stripe Price ID for Starter plan
STRIPE_PRO_PRICE_ID=price_xxx       # Stripe Price ID for Pro plan
STRIPE_AGENCY_PRICE_ID=price_xxx    # Stripe Price ID for Agency plan

# Top-Up Packs (One-Time Payments) - stored in database, not env
# These are created as products with prices but used for one-time checkout

# Frontend .env
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
```

#### Stripe Objects Setup

**Main Subscription Plans** (create in Stripe Dashboard):

1. **Starter Plan**
   - Product Name: "WebLeads Starter"
   - Description: "3,000 credits per month - $1.33 per 1,000 leads"
   - Pricing: $3.99 per month (recurring subscription)
   - Billing: Monthly

2. **Pro Plan**
   - Product Name: "WebLeads Pro ⭐"
   - Description: "8,000 credits per month - $1.00 per 1,000 leads"
   - Pricing: $7.99 per month (recurring subscription)
   - Billing: Monthly

3. **Agency Plan**
   - Product Name: "WebLeads Agency"
   - Description: "24,000 credits per month - $0.916 per 1,000 leads"
   - Pricing: $21.99 per month (recurring subscription)
   - Billing: Monthly

**Credit Top-Up Packs** (one-time payment products):

**Note**: All top-ups priced at **$0.002 per credit** (or **$2.00 per 1,000 leads**)

1. **500 Credits**
   - Product Name: "500 Lead Credits"
   - Description: "One-time purchase of 500 additional credits - $2.00 per 1K"
   - Pricing: $1.00 (one-time payment)

2. **1,000 Credits**
   - Product Name: "1,000 Lead Credits"
   - Description: "One-time purchase of 1,000 additional credits - $2.00 per 1K"
   - Pricing: $2.00 (one-time payment)

3. **5,000 Credits**
   - Product Name: "5,000 Lead Credits"
   - Description: "One-time purchase of 5,000 additional credits - $2.00 per 1K"
   - Pricing: $10.00 (one-time payment)

4. **10,000 Credits**
   - Product Name: "10,000 Lead Credits"
   - Description: "One-time purchase of 10,000 additional credits - $2.00 per 1K"
   - Pricing: $20.00 (one-time payment)

**Important**: Top-up packs use **Checkout Sessions in payment mode** (not subscription mode). Store Price IDs in `credit_topup_packs` database table.

#### Webhook Configuration

**Webhook Endpoint**: `https://api.webleads.com/api/webhooks/stripe`

**Events to Subscribe**:

*Subscription Events (Monthly Plans)*:
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_succeeded`
- `invoice.payment_failed`

*One-Time Payment Events (Top-Ups)*:
- `payment_intent.succeeded`
- `payment_intent.payment_failed`

*Customer Events*:
- `customer.created`
- `customer.updated`

---

## 4. User Flows

### 4.1 New User Flow (Free Tier with Sufficient Credits)

1. User signs up → **Free tier automatically assigned**
2. User receives **1,000 credits** for the month
3. User creates search: "restaurants in NYC"
4. Search starts processing (status: PROCESSING)
5. **Search completes** → Found 50 Places
6. System charges **50 credits** automatically
7. User sees notification:
   - ✅ "Search complete! Found 50 companies"
   - "Credits used: 50"
   - "Credits remaining: 950"
8. User views results → sees all 50 Places (full data)
9. User can export all 50 Places to CSV
10. Credit balance: **950 credits remaining**

### 4.2 Search with Partial Access (Insufficient Credits)

1. User on **Free tier** with **100 credits remaining**
2. User searches "lawyers in Boston"
3. Search starts processing
4. **Search completes** → Found **2,000 Places**
5. System checks: `remaining_credits = 100 < 2000`
6. System charges **100 credits** (all available)
7. User sees notification:
   - ⚠️ "Search complete! Found 2,000 companies"
   - "You can access 100 companies (100 credits used)"
   - "🔒 1,900 companies locked - upgrade to unlock"
   - "Credits remaining: 0"
8. **Results page shows**:
   - First 100 Places: **Unlocked** (full data visible)
   - Remaining 1,900 Places: **Locked/Blurred** with overlay:
     - "🔒 1,900 more companies available"
     - "Buy credits or upgrade your plan to unlock"
     - [Buy Credits] [Upgrade Plan] buttons
9. User can only export the 100 unlocked Places

### 4.3 Search with No Credits

1. User on **Starter plan** with **0 credits remaining**
2. User searches "dentists in Seattle"  
3. Search starts processing
4. **Search completes** → Found **500 Places**
5. System checks: `remaining_credits = 0`
6. System charges **0 credits** (none available)
7. User sees notification:
   - 🚫 "Search complete! Found 500 companies"
   - "You have 0 credits remaining"
   - "All 500 companies are locked"
8. **Results page shows**:
   - All 500 Places: **Fully locked/blurred**
   - Large upgrade modal:
     - "🔒 500 companies found but locked"
     - "You need credits to access these results"
     - Current plan: Starter (0/18,000 credits used this month)
     - [Buy 1,000 Credits - $5.00] button
     - [Upgrade to Pro] button
9. User cannot export anything

### 4.4 Credit Top-Up with Partial Unlock

**Scenario: User buys enough to unlock only some locked Places**

1. User sees locked results (1,900 Places locked, 100 unlocked)
2. User clicks "Buy Credits" button
3. Top-up selection modal appears:
   - 500 credits - $1.00
   - 1,000 credits - $2.00 ⭐ Selected
   - 5,000 credits - $10.00 (Recommended to unlock all 1,900)
   - 10,000 credits - $20.00
4. User selects "1,000 credits" pack
5. Redirected to **Stripe Checkout** (one-time payment)
6. User completes payment ($2.00)
7. Stripe webhook `payment_intent.succeeded` fires
8. Backend adds 1,000 credits to balance immediately
9. User redirected back to search results
10. **System automatically unlocks 1,000 more Places** (partial unlock):
    - Previous: 100 Places unlocked, 1,900 locked
    - Now: **1,100 Places unlocked** (100 + 1,000), **900 still locked**
    - Credits charged: 1,000
    - Remaining: 0 credits
11. User can see/export 1,100 Places, but **900 still locked**
12. User can buy more credits to unlock remaining 900 Places

### 4.5 Credit Top-Up with Full Unlock

**Scenario: User buys enough to unlock all locked Places**

1. User sees locked results (1,900 Places locked, 100 unlocked)
2. User clicks "Buy Credits" button
3. User selects "5,000 credits" pack ($10.00)
4. Redirected to **Stripe Checkout** (one-time payment)
5. User completes payment ($10.00)
6. Stripe webhook `payment_intent.succeeded` fires
7. Backend adds 5,000 credits to balance immediately
8. User redirected back to search results
9. **System automatically unlocks all remaining Places**:
    - Previous: 100 Places unlocked, 1,900 locked
    - Now: **2,000 Places unlocked** (100 + 1,900), 0 locked
    - Credits charged: 1,900
    - Remaining: 3,100 credits
10. User can now see all 2,000 Places and export them
11. User has 3,100 credits remaining for future searches

### 4.6 Insufficient Credits to Create Search (<10 credits)

1. User on **Free plan** with **5 credits remaining**
2. User tries to create new search: "dentists in Miami"
3. **System blocks search creation**:
   - ❌ "Insufficient credits to create search"
   - "You need at least 10 credits to start a search"
   - "Current balance: 5 credits"
   - "You need: 10 credits"
4. Modal appears:
   - 💡 "Buy credits to continue searching"
   - [Buy 500 Credits - $1.00] button
   - [Buy 1,000 Credits - $2.00] button
   - [Upgrade to Starter ($3.99/month - 3,000 credits)] button
5. User purchases 500 credits ($1.00)
6. Balance updated: **505 credits**
7. User can now create searches again

### 4.7 Subscription Upgrade Flow

1. User on **Starter plan** (3,000 credits/month) with **300 credits remaining**
2. User sees locked results (needs 1,500 more credits)
3. Clicks "Upgrade Plan" instead of buying top-up
4. Sees upgrade options:
   - Pro: 8,000 credits/month for $7.99
   - Agency: 24,000 credits/month for $21.99
5. Selects "Pro" plan
6. Stripe handles proration automatically
7. Webhook updates subscription
8. **Credit balance recalculated**:
   - Old plan credits: 3,000
   - New plan credits: 8,000
   - Credits used so far: 2,700 (3,000 - 300)
   - New balance: 8,000 - 2,700 = **5,300 credits**
9. Next billing: $7.99/month (pro-rated for current month)
10. **System automatically unlocks previously locked Places**:
    - Credits now available: 5,300
    - Locked Places: 1,500
    - All 1,500 Places now unlocked automatically
    - Remaining credits: 3,800
11. User immediately sees all results

### 4.8 Monthly Credit Reset Flow

1. User on **Pro plan** (8,000 credits/month) subscribed on Oct 1st
2. Throughout October:
   - Search #1: 200 Places unlocked (200 credits)
   - Search #2: 1,500 Places unlocked (1,500 credits)  
   - Search #3: 4,800 Places unlocked (4,800 credits)
   - Total used: 6,500 credits
3. Balance shows: **1,500 credits remaining** (8,000 - 6,500)
4. User continues working until Oct 31st
5. **November 1st at midnight UTC**:
   - Stripe charges $7.99 for next month
   - Daily Celery task detects billing period reset
   - Credits reset: `balance.total_credits = 8,000`
   - Usage reset: `balance.used_credits = 0`
   - Remaining: `balance.remaining_credits = 8,000`
6. User wakes up with **full 8,000 credits** for November
7. Old usage history preserved in `credit_usage` table
8. **Previous searches remain accessible**:
   - October searches still show unlocked Places
   - User can re-export without additional charges
   - Access records preserved in `search_result_access`

### 4.9 Subscription Cancellation Flow

1. User on **Pro plan** with **4,200 credits remaining**
2. Clicks "Manage Subscription"
3. Opens **Stripe Customer Portal**
4. User clicks "Cancel subscription"
5. Stripe asks: "Cancel at period end or immediately?"
6. User selects "At period end" (Nov 1st)
7. Subscription marked as `cancel_at_period_end=true`
8. User **retains full access until Nov 1st**:
   - Can still use remaining 4,200 credits for new searches
   - Can still search (requires min 10 credits per search)
   - Previously unlocked Places remain accessible
9. **November 1st arrives**:
   - Subscription canceled (no charge)
   - Webhook fires: `customer.subscription.deleted`
   - User downgraded to **Free tier**
   - New balance: **1,000 credits/month**
   - Previous searches/unlocked Places remain accessible
10. User can resubscribe anytime

### 4.10 Payment Failure Flow

1. **Nov 1st**: Monthly payment fails for Pro subscription ($7.99)
2. Webhook receives `invoice.payment_failed`
3. Subscription status → `past_due`
4. User sees banner in app:
   - ⚠️ "Payment failed. Update payment method"
   - "You have 3 days before account suspension"
5. **Functionality during grace period**:
   - ✅ Can still search (with remaining credits, min 10 per search)
   - ✅ Previously unlocked Places remain accessible
   - ⚠️ Credits won't reset until payment succeeds
   - ⚠️ New searches will consume remaining credits
6. User opens Customer Portal → updates credit card
7. Stripe **automatically retries payment** → Success
8. Webhook: `invoice.payment_succeeded`
9. Subscription status → `active`
10. Credits reset to 8,000 for new billing period
11. User continues normal usage

### 4.11 Active Search Restriction Flow (Current: All Plans)

1. User with 500 credits creates search #1: "dentists in Seattle"
2. Search starts processing (status: PROCESSING)
3. User tries to create search #2: "lawyers in Portland"
4. System blocks with message:
   - ❌ "You already have an active search"
   - "Current search: 'dentists in Seattle' (45% complete)"
   - 💡 "Wait for current search to complete or cancel it"
5. User waits for search #1 to complete
6. **Search #1 completes**:
   - Found 300 Places
   - Charged 300 credits
   - Unlocked 300 Places
   - Status: COMPLETED
   - Remaining: 200 credits
7. User cannot create search #2 (needs min 10 credits, has 200) ✅
8. User creates search #2 successfully

**Note**: Multiple queued searches feature exists in code but disabled for all plans. May be enabled for paid tiers in future updates.

---

## 5. Frontend Implementation

### 5.1 New Components

#### `SubscriptionPlans.tsx`
- Display all available plans
- Highlight current plan
- "Upgrade" / "Current Plan" / "Downgrade" buttons
- Show features comparison
- Show credits per month for each plan

#### `CreditBalance.tsx`
- Show "X credits remaining" in header/navbar
- Progress bar (used/total)
- Next reset date countdown
- Quick link to buy credits

#### `SearchResultsWithLocking.tsx`
- Display unlocked Places (full data visible)
- Display locked Places with blur/overlay effect
- Show count: "Showing 100 of 2,000 companies"
- Inline upgrade CTA for locked results
- Filter/sort only available for unlocked Places

#### `LockedResultsOverlay.tsx`
- Blur effect on locked Places
- Lock icon overlay
- Message: "🔒 X more companies available"
- [Buy Credits] and [Upgrade Plan] buttons
- Tooltip showing how many credits needed

#### `SearchCompletionNotification.tsx`
- Toast notification when search completes
- Show: Places found, credits charged, credits remaining
- Different styles for:
  - Full access (all Places unlocked)
  - Partial access (some locked)
  - No access (all locked)

#### `UpgradeModal.tsx`
- Triggered when user clicks unlock on locked results
- Show current situation (X locked Places)
- Two options:
  - Buy top-up credits (one-time)
  - Upgrade subscription (monthly)
- Calculate exact cost to unlock
- Direct to Stripe Checkout

#### `SubscriptionSettings.tsx`
- Current plan details
- Credit usage this month
- "Manage Subscription" button → Stripe Portal
- Top-up purchase history
- Billing history
- Next billing date

### 5.2 UI/UX for Locked Results

#### Results Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│ Search: "Restaurants in NYC" - 2,000 companies found       │
│ ✅ 100 companies unlocked  🔒 1,900 companies locked        │
│ Credits used: 100 | Remaining: 0                           │
│ [Buy Credits to Unlock] [Upgrade Plan]                     │
├─────────────────────────────────────────────────────────────┤
│ UNLOCKED RESULTS (100 companies)                           │
│                                                             │
│ 1. Joe's Pizza                                             │
│    📍 123 Main St, NYC | ☎️ (212) 555-0100                │
│    👥 3 decision makers: John D. (Owner), Mary S. (GM)...  │
│    📧 contact@joespizza.com                                │
│    [View Details] [Export]                                 │
│                                                             │
│ 2. Tony's Italian Kitchen                                  │
│    📍 456 Broadway, NYC | ☎️ (212) 555-0200               │
│    👥 2 decision makers: Tony R. (Owner), Lisa M. (Chef)   │
│    📧 info@tonys.com                                       │
│    [View Details] [Export]                                 │
│                                                             │
│ ... (98 more unlocked results)                            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ 🔒 LOCKED RESULTS (1,900 companies)                        │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐│
│ │  🔒 1,900 more companies available                      ││
│ │                                                          ││
│ │  Unlock all results to access:                          ││
│ │  ✓ Full company contact information                     ││
│ │  ✓ Decision maker details                               ││
│ │  ✓ Export to CSV/Excel                                  ││
│ │                                                          ││
│ │  💰 Cost to unlock: 1,900 credits                       ││
│ │                                                          ││
│ │  [Buy 5,000 Credits - $25] [Upgrade to Pro]            ││
│ └─────────────────────────────────────────────────────────┘│
│                                                             │
│ [Blurred/obscured preview of locked companies below]       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Locked Result Card (Preview)

```
┌─────────────────────────────────────────────────────────────┐
│ 🔒 [Company Name Blurred]                                   │
│    📍 [Address Blurred] | ☎️ ●●●-●●●-●●●●                  │
│    👥 [X decision makers - locked]                         │
│    📧 [Email hidden]                                       │
│    [🔓 Unlock for 1 credit]                                │
└─────────────────────────────────────────────────────────────┘
```

### 5.3 UI/UX Considerations

**Credit Visibility**:
- Always show remaining credits in header
- Visual warning when credits low (<10%)
- Proactive top-up suggestions

**Search Completion**:
- Real-time notification when search completes
- Clear indication of credits charged
- Immediate feedback on locked/unlocked status

**Upgrade Triggers**:
- When user sees locked results
- Banner on dashboard if low credits
- Contextual upgrade CTAs throughout app
- Smart recommendations (top-up vs upgrade)

**Messaging**:
- Clear count of locked vs unlocked
- Transparent pricing (show exact cost)
- Friendly upgrade prompts (value-focused)
- No surprise charges (always show cost before search)

**Export Button Behavior**:
- Only export unlocked Places
- Show count: "Export 100 companies"
- Disabled if no unlocked Places
- Tooltip: "Unlock more results to export additional companies"

---

## 6. Security & Compliance

### 6.1 Security Measures

1. **Webhook Signature Verification**
   - Always verify Stripe webhook signatures
   - Reject unsigned/invalid requests

2. **Idempotency**
   - Store Stripe event IDs in `stripe_events` table
   - Prevent duplicate processing of webhooks

3. **Payment Data Handling**
   - NEVER store credit card details
   - Use Stripe Elements for PCI compliance
   - Store only Stripe IDs (customer, subscription)

4. **API Security**
   - JWT authentication for all subscription endpoints
   - Rate limiting on checkout creation
   - HTTPS only in production

### 6.2 Error Handling

**Payment Failures**:
- Retry logic (Stripe handles this)
- Clear user notifications
- Grace period before downgrade (optional: 7 days)

**Webhook Failures**:
- Retry mechanism (Stripe auto-retries)
- Manual reconciliation endpoint for admins
- Logging for all webhook events

---

## 7. Testing Strategy

### 7.1 Test Scenarios

**Subscription Lifecycle**:
- ✅ Create subscription (Free → Starter)
- ✅ Upgrade subscription (Starter → Pro)
- ✅ Upgrade subscription (Pro → Agency)
- ✅ Downgrade subscription (Agency → Pro)
- ✅ Downgrade subscription (Pro → Starter)
- ✅ Cancel subscription (Paid → Free at period end)
- ✅ Reactivate canceled subscription

**Weekly Search Limits**:
- ✅ Free user creates 7 searches in 7 days (success)
- ✅ Free user creates 8th search (blocked with "7/7 used")
- ✅ Starter user creates 14 searches in 2 days (success)
- ✅ Starter user creates 15th search (blocked)
- ✅ Pro user creates 28 searches in 4 days (success)
- ✅ Pro user creates 29th search (blocked)
- ✅ Agency user creates 42 searches in 1 day (success)
- ✅ Usage resets after 7 days from subscription start

**Export Limits (Free Tier)**:
- ✅ Free user exports 500 leads (success, shows 500/1000)
- ✅ Free user exports another 400 leads (success, shows 900/1000)
- ✅ Free user exports 200 leads (blocked at 1000 limit)
- ✅ Free user upgrades to Starter → unlimited exports
- ✅ Starter user downgrades to Free → 1000 limit applies again

**Decision-Maker Filtering**:
- ✅ Free user views results → sees all decision-makers (names/titles only)
- ✅ Starter user views results → sees 1 decision-maker per company
- ✅ Starter user exports CSV → only 1 decision-maker per company
- ✅ Pro user views results → sees all decision-makers per company
- ✅ Pro user exports CSV → all decision-makers included
- ✅ Agency user views results → sees all decision-makers per company

**Multiple Queued Searches (Agency)**:
- ✅ Free user creates search #1 → starts processing
- ✅ Free user tries search #2 → blocked (one at a time)
- ✅ Agency user creates search #1 → starts processing
- ✅ Agency user creates search #2 → queued successfully
- ✅ Agency user creates search #3 → queued successfully
- ✅ All searches process sequentially

**Payment Events**:
- ✅ Successful weekly payment (Starter: $8.99)
- ✅ Successful weekly payment (Pro: $14.99)
- ✅ Successful weekly payment (Agency: $20.99)
- ✅ Failed payment with retry
- ✅ Failed payment → grace period → downgrade
- ✅ Subscription cancellation

**Webhooks**:
- ✅ All webhook events processed correctly
- ✅ Idempotency (duplicate events ignored)
- ✅ Invalid signature rejected
- ✅ Subscription updated → usage limits updated immediately
- ✅ Payment failed → user notified
- ✅ Payment succeeded → subscription extended

### 7.2 Test Environment

- Use Stripe Test Mode
- Test cards provided by Stripe
- Test webhook forwarding with Stripe CLI
- Automated integration tests for critical flows

---

## 8. Admin & Monitoring

### 8.1 Admin Endpoints

##### `GET /api/admin/subscriptions`
- List all subscriptions
- Filter by status, plan
- Pagination

##### `POST /api/admin/subscriptions/{user_id}/override`
- Manually set user plan (for support)
- Bypass Stripe (internal only)

##### `GET /api/admin/revenue/stats`
- MRR (Monthly Recurring Revenue)
- ARR (Annual Recurring Revenue)
- Churn rate
- Plan distribution

### 8.2 Monitoring & Alerts

**Metrics to Track**:
- Active subscriptions by plan
- Churn rate
- Failed payments
- Webhook processing errors
- Daily search usage patterns

**Alerts**:
- High webhook failure rate
- Spike in failed payments
- Unusual cancellation rate

---

## 9. Migration Plan

### 9.1 Existing Users

**Option A: Grandfather Existing Users**
- All existing users get PRO plan free for X months
- Email notification about upcoming changes
- Clear migration timeline

**Option B: Free Tier for All**
- All existing users start on Free tier
- Email with special upgrade discount code
- Promotional period for early adopters

### 9.2 Database Migration Steps

1. Create new tables (`subscription_plans`, `user_subscriptions`, `search_usage`, `stripe_events`)
2. Seed `subscription_plans` with Free, Basic, PRO
3. Create Free subscription for all existing users
4. Backfill `search_usage` from existing `searches` table (optional)
5. Deploy new API endpoints
6. Deploy frontend changes
7. Enable Stripe webhooks
8. Monitor and iterate

---

## 10. Implementation Phases

### Phase 0: Pre-Implementation Setup (Before Week 1)
- [ ] Create Stripe account (test mode)
- [ ] Create 3 products in Stripe Dashboard:
  - [ ] Starter ($8.99/week)
  - [ ] Pro ($14.99/week)
  - [ ] Agency ($20.99/week)
- [ ] Copy Price IDs to environment variables
- [ ] Set up webhook endpoint URL in Stripe
- [ ] Install Stripe CLI for local testing

### Phase 1: Database & Backend Core (Week 1)
- [ ] Create Alembic migration for 5 new tables:
  - [ ] `subscription_plans`
  - [ ] `user_subscriptions`
  - [ ] `search_usage`
  - [ ] `export_usage`
  - [ ] `stripe_events`
- [ ] Add columns to `users` table (stripe_customer_id, current_subscription_id)
- [ ] Seed 4 subscription plans (Free, Starter, Pro, Agency)
- [ ] Create free subscriptions for all existing users
- [ ] Create subscription service (`app/services/subscription_service.py`)
- [ ] Create usage service (`app/services/usage_service.py`)
- [ ] Create export service (`app/services/export_service.py`)
- [ ] Write unit tests for services

### Phase 2: Stripe Integration (Week 1-2)
- [ ] Create Stripe integration module (`app/services/stripe_service.py`)
- [ ] Implement checkout session creation
- [ ] Implement customer portal session creation
- [ ] Implement webhook handler (`app/routes/webhooks.py`)
- [ ] Handle all 6 webhook events:
  - [ ] `customer.subscription.created`
  - [ ] `customer.subscription.updated`
  - [ ] `customer.subscription.deleted`
  - [ ] `invoice.payment_succeeded`
  - [ ] `invoice.payment_failed`
  - [ ] `customer.created`
- [ ] Implement idempotency checks
- [ ] Test webhooks with Stripe CLI
- [ ] Write integration tests

### Phase 3: Search & Export Limit Enforcement (Week 2)
- [ ] Update search creation endpoint with limit checks
- [ ] Implement weekly usage tracking
- [ ] Implement multiple queue check (Agency feature)
- [ ] Update export endpoint with limit checks
- [ ] Implement decision-maker filtering in results service
- [ ] Add export tracking on every export
- [ ] Test all limit scenarios
- [ ] Handle edge cases (concurrent requests, period boundaries)

### Phase 4: API Endpoints (Week 2)
- [ ] `GET /api/subscriptions/plans`
- [ ] `GET /api/subscriptions/current`
- [ ] `POST /api/subscriptions/create-checkout-session`
- [ ] `POST /api/subscriptions/create-portal-session`
- [ ] `POST /api/subscriptions/cancel`
- [ ] `POST /api/subscriptions/reactivate`
- [ ] `GET /api/usage/current-period`
- [ ] `GET /api/usage/export-limits`
- [ ] `POST /api/usage/track-export` (internal)
- [ ] `GET /api/usage/history`
- [ ] `POST /api/webhooks/stripe`
- [ ] Write API tests for all endpoints

### Phase 5: Frontend UI (Week 2-3)
- [ ] Install Stripe.js library
- [ ] Create `SubscriptionPlans.tsx` component
- [ ] Create `UsageIndicator.tsx` component (show X/Y searches used)
- [ ] Create `UpgradeModal.tsx` (triggered on limit)
- [ ] Create `SubscriptionSettings.tsx` page
- [ ] Update search page to show usage
- [ ] Update export button to check limits
- [ ] Add decision-maker count badge (Starter: "1 of 5", Pro: "All 5")
- [ ] Integrate Stripe Checkout redirect
- [ ] Integrate Customer Portal redirect
- [ ] Test all user flows

### Phase 6: Testing & Polish (Week 3)
- [ ] End-to-end testing (all subscription flows)
- [ ] Test all 4 plans thoroughly
- [ ] Test upgrade/downgrade proration
- [ ] Test export limit enforcement
- [ ] Test decision-maker filtering
- [ ] Test multiple queued searches (Agency)
- [ ] Stripe test mode validation (use test cards)
- [ ] Error handling refinement
- [ ] UI/UX polish (loading states, error messages)
- [ ] Performance optimization
- [ ] Update documentation

### Phase 7: Production Deployment (Week 4)
- [ ] Switch to Stripe live mode (update env vars)
- [ ] Verify webhook endpoint is publicly accessible
- [ ] Test webhook signature verification
- [ ] Run migration on production database
- [ ] Deploy backend changes
- [ ] Deploy frontend changes
- [ ] Verify all existing users have Free subscriptions
- [ ] Monitor Stripe dashboard for events
- [ ] Set up alerts (failed payments, webhook errors)
- [ ] Prepare support documentation
- [ ] Announce new pricing to users

### Quick Implementation Checklist

**Before You Start**:
- ✅ Pricing decided: Free ($0), Starter ($8.99), Pro ($14.99), Agency ($20.99)
- ✅ PRD complete and reviewed
- [ ] Stripe account created
- [ ] Products/Prices created in Stripe
- [ ] Environment variables configured

**Critical Path**:
1. Database migration (2-3 days)
2. Stripe integration + webhooks (3-4 days)
3. Limit enforcement logic (2-3 days)
4. API endpoints (2-3 days)
5. Frontend UI (4-5 days)
6. Testing (3-4 days)
7. Production deployment (1-2 days)

**Total Estimated Time**: 3-4 weeks

---

## 11. Success Metrics

### Launch Metrics (First 30 Days)
- Conversion rate (Free → Paid): Target 5-10%
- Churn rate: Target <10%
- Payment success rate: Target >95%
- Average revenue per user (ARPU)

### Long-term Metrics (90+ Days)
- Monthly Recurring Revenue (MRR) growth
- Customer Lifetime Value (CLV)
- Plan distribution (Basic vs PRO)
- Feature adoption by plan tier

---

## 12. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Webhook failures | High | Implement robust retry logic, manual reconciliation tool |
| Payment fraud | Medium | Use Stripe Radar, monitor for suspicious patterns |
| User churn due to limits | Medium | Clear value communication, trial periods, upgrade prompts |
| Stripe API downtime | High | Graceful degradation, queue webhook processing |
| Proration bugs | Medium | Thoroughly test upgrade/downgrade flows |
| Timezone edge cases | Low | Use UTC consistently, clear documentation |

---

## 13. Open Questions & Decisions Needed

1. ✅ **Pricing**: DECIDED - Free (1K), Starter ($3.99/3K), Pro ($7.99/8K), Agency ($21.99/24K)
2. ✅ **Top-Up Pricing**: DECIDED - $0.002 per credit ($2.00 per 1,000 leads)
3. ✅ **Price Display**: DECIDED - Prominently show "Price per 1,000 leads" for all plans
4. ✅ **Credit Model**: DECIDED - 1 credit = 1 Place, consumed on search completion
5. ✅ **Minimum Credits**: DECIDED - Require 10+ credits to create new searches
6. ✅ **Billing**: DECIDED - Monthly for all plans
7. ✅ **Search Limits**: DECIDED - Unlimited searches, credits charged when search completes
8. ✅ **Credit Rollover**: DECIDED - NO rollover, resets monthly
9. ✅ **Access Control**: DECIDED - Users see only Places they have credits for, rest are locked
10. ✅ **Partial Unlocking**: DECIDED - Users can buy credits incrementally, unlock Places gradually
11. ✅ **Export Charges**: DECIDED - NO charges for export (already paid on search completion)
12. ✅ **Persistent Access**: DECIDED - Once Places unlocked, they remain accessible forever
13. ✅ **Auto-Unlock on Top-Up**: DECIDED - Automatically unlock locked Places when user buys credits
14. **Grace Period**: Should there be a grace period (e.g., 3 days) for failed payments before account suspension?
15. **Trial Period**: Should new users get a 7-day free trial of Starter/Pro plans?
16. **Annual Plans**: Should we offer discounted annual plans later (e.g., 20% off)?
17. **Refund Policy**: What's the refund policy for cancellations mid-period?
18. **Selective Unlocking**: Should users be able to selectively unlock specific Places (e.g., cherry-pick 10 out of 1,900 locked)?
19. **Preview Data**: Should locked Places show any preview data (e.g., company name, industry) or be completely hidden?
20. **Credit Expiry on Downgrade**: What happens to unused credits when user downgrades mid-period?

---

## 14. Resources & References

### Stripe Documentation
- [Stripe Subscriptions](https://stripe.com/docs/billing/subscriptions/overview)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)
- [Stripe Customer Portal](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal)
- [Stripe Checkout](https://stripe.com/docs/payments/checkout)

### Implementation Examples
- [FastAPI + Stripe Example](https://github.com/stripe-samples/subscription-use-cases)
- [React + Stripe Checkout](https://stripe.com/docs/checkout/quickstart)

### Related Files in Codebase
- `/app/models.py` - Database models
- `/app/routes/auth.py` - Authentication system
- `/app/routes/search.py` - Search creation endpoint
- `/docs/SPECS.md` - Main specification document

---

## 15. Appendix

### A. Stripe Price IDs (To Be Created)

```
Development/Test:
- Starter ($8.99/week): price_test_xxx
- Pro ($14.99/week): price_test_xxx
- Agency ($20.99/week): price_test_xxx

Production:
- Starter ($8.99/week): price_xxx
- Pro ($14.99/week): price_xxx
- Agency ($20.99/week): price_xxx
```

### B. Example Webhook Payload

```json
{
  "id": "evt_xxx",
  "type": "customer.subscription.updated",
  "data": {
    "object": {
      "id": "sub_xxx",
      "customer": "cus_xxx",
      "status": "active",
      "items": {
        "data": [{
          "price": {
            "id": "price_xxx"
          }
        }]
      }
    }
  }
}
```

### C. Sample Migration Script

```python
# alembic/versions/xxx_add_subscriptions.py
def upgrade():
    # Create subscription_plans table
    op.create_table('subscription_plans', ...)
    
    # Create user_subscriptions table
    op.create_table('user_subscriptions', ...)
    
    # Create search_usage table
    op.create_table('search_usage', ...)
    
    # Create export_usage table
    op.create_table('export_usage', ...)
    
    # Create stripe_events table
    op.create_table('stripe_events', ...)
    
    # Add columns to users table
    op.add_column('users', sa.Column('stripe_customer_id', sa.String(), nullable=True))
    op.add_column('users', sa.Column('current_subscription_id', sa.Integer(), nullable=True))
    
    # Seed subscription plans
    op.execute("""
        INSERT INTO subscription_plans 
        (name, display_name, searches_per_week, price_cents, billing_interval, 
         max_export_leads, decision_makers_per_company, allow_multiple_queued_searches, 
         priority_support, is_active)
        VALUES 
        ('free', 'Free', 7, 0, NULL, 1000, NULL, false, false, true),
        ('starter', 'Starter', 14, 899, 'week', NULL, 1, false, false, true),
        ('pro', 'Pro ⭐', 28, 1499, 'week', NULL, NULL, false, false, true),
        ('agency', 'Agency', 42, 2099, 'week', NULL, NULL, true, true, true)
    """)
    
    # Create free subscriptions for all existing users
    op.execute("""
        INSERT INTO user_subscriptions (user_id, subscription_plan_id, status, created_at)
        SELECT id, 1, 'active', NOW() FROM users
    """)
    
    # Update users to reference their free subscription
    op.execute("""
        UPDATE users 
        SET current_subscription_id = (
            SELECT id FROM user_subscriptions 
            WHERE user_subscriptions.user_id = users.id 
            LIMIT 1
        )
    """)
```

---

## Document Control

- **Version**: 4.2 (PRICING REFINEMENT)
- **Author**: AI Assistant
- **Date**: October 3, 2025
- **Status**: Ready for Implementation
- **Last Updated**: October 3, 2025 - Refined pricing structure for better value
- **Next Review**: After Stripe account setup and test mode validation

### Changelog

**v4.2 (October 3, 2025) - PRICING REFINEMENT** 💰
- 💰 **Updated Pricing**: Starter ($3.99/3K), Pro ($7.99/8K), Agency ($21.99/24K)
- 📊 **Price per 1K Leads**: Starter=$1.33, Pro=$1.00, Agency=$0.916
- 🎯 **Better Value**: Starter 20% cheaper ($3.99 vs $4.99), Pro 11% cheaper ($7.99 vs $8.99)
- 📈 **Agency Tier**: Higher volume option at $21.99 for 24K credits
- ✨ **Maintained**: Top-up pricing unchanged ($2.00 per 1K leads), minimum 10 credits to search

**v4.1 (October 3, 2025) - PRICING UPDATE + MINIMUM CREDITS** 💰
- 💰 **New Pricing**: Starter ($4.99/5K), Pro ($8.99/10K), Agency ($14.99/20K)
- 💰 **Top-Up Pricing**: $0.002/credit ($2.00 per 1,000 leads) - 500=$1, 1K=$2, 5K=$10, 10K=$20
- 📊 **Price Display**: Added prominent "Price per 1,000 leads" metric to all plans
- 🔒 **Minimum Credit Requirement**: Users need **10+ credits** to create new searches
- 🔓 **Partial Unlock Flow**: Users can buy credits incrementally (e.g., buy 1,000, unlock 1,000 of 1,900 locked)
- 📚 **Updated User Flows**: Added flow 4.4 (partial unlock), 4.5 (full unlock), 4.6 (insufficient credits)
- 🎨 **Better Value Messaging**: Clear cost per 1K leads shown across all pricing tiers

**v4.0 (October 3, 2025) - PAY-ON-SEARCH-COMPLETION** 🚀
- 🔥 **Core Model Change**: Credits charged **when search completes**, not on export
- 🎯 **1 credit = 1 Place (Company)**: Changed from 1 credit = 1 person to 1 credit = 1 Place
- 🔒 **Access Control**: Users can only view/access Places up to their credit balance
- 🔒 **Locked Results**: Remaining Places are locked/blurred with upgrade modal
- 🔒 **Partial Access**: If search finds 2,000 Places but user has 100 credits, they see 100 unlocked + 1,900 locked
- ⚡ **Automatic Charging**: Credits consumed automatically when search completes
- ⚡ **Automatic Unlocking**: When user buys credits, locked Places unlock automatically
- 🗄️ **New Table**: `search_result_access` to track unlocked Places per search
- 🗄️ **Modified Table**: `credit_usage` now tracks `usage_type` ("search_completion" or "export")
- 📊 **New Business Logic**: `finalize_search()` function charges credits and records access
- 🎨 **New UI Components**: Locked results overlay, blur effects, inline upgrade CTAs
- 🔓 **Persistent Access**: Once Places are unlocked, they remain accessible forever
- 💰 **No Export Charges**: Export is free for unlocked Places (already paid for)

**v3.1 (October 2, 2025)** - DEPRECATED
- Top-Ups changed to one-time purchases
- Search Queue limited to 1 at a time
- Credit Reset logic for purchased credits

**v3.0 (October 2, 2025)** - DEPRECATED
- Initial credit-based model
- Pay-per-lead on export
- Monthly billing introduced

**v2.0 (October 2, 2025)** - DEPRECATED
- Weekly search limits
- Decision-maker filtering

**v1.0 (October 1, 2025)** - DEPRECATED
- Initial draft

---

*This document represents v4.2 with refined pricing structure. Key changes: More competitive pricing (Starter at $3.99/3K credits, Pro at $7.99/8K credits, Agency at $21.99/24K credits), prominent "per 1K leads" pricing display, 10-credit minimum to create searches, and partial unlock support. The model prevents data extraction without payment, provides clear access control, and transparent value proposition. Next steps: Set up Stripe account with updated pricing (Starter=$3.99, Pro=$7.99, Agency=$21.99) + 4 top-up packs ($1-$20), and begin Phase 1 development.*

