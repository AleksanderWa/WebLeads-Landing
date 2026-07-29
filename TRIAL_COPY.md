# Trial Copy Guide

**Scope:** every string on this site that mentions the trial, the price, the card, or getting started.
**Status:** authoritative. Overrides any older phrasing found in the repo.
**Read this before editing copy in `app/`, `components/`, or `content/`.**

---

## 1. The offer (facts, do not restate them inaccurately)

- Every paid plan — Starter $24, Growth $69, Scale $199 — starts with a **7-day free trial**.
- The user **picks the plan at signup** and gets that plan's full quota during the trial.
- A **payment method is required at signup**. The subscription converts automatically on day 8 at the plan's normal rate unless cancelled.
- A reminder email goes out **before** the trial ends (`trial_ending`, ~day 4).
- **Discover** (the $0 lifetime tier) still exists but is **not** a public offer. It is an in-app fallback at trial end / cancel. Do not put it in the pricing grid, hero, FAQ, or metadata.

---

## 2. The canonical trust line

```
Free Trial · No sales call · Cancel anytime
```

Use this under primary CTAs — hero, final CTA, blog CTAs, sticky CTA. Three beats, all positive, no numbers, no mechanics.

Approved substitutions for the **middle** beat only, when page context calls for it:

| Context | Middle beat |
|---|---|
| Default / homepage | `No sales call` |
| vs. enterprise tools (ZoomInfo, Apollo, Lusha) | `No annual contract` |
| vs. scrapers (Outscraper, PhantomBuster) | `No setup, no config` |
| Data-quality pages (email finder, verifier) | `Any niche, any city` |

Never change beat 1 or beat 3. Never add a fourth beat.

---

## 3. The disclosure ladder — where the charge language lives

The single biggest error in the previous pass was putting the charge disclosure everywhere. It belongs at exactly one rung, and gets more explicit as intent rises:

| Rung | Surface | What it says about money |
|---|---|---|
| 1 | Hero, CTAs, badges, meta descriptions | **Nothing about the charge.** Trust line only. |
| 2 | Pricing card, directly under the price | `$24/mo · 7 days free` — a fact about the plan, neutral voice |
| 3 | Trial FAQ answer | Full mechanics, plainly stated, once |
| 4 | Card form / checkout (app repo) | Fully explicit, unmissable, in the user's frame |
| 5 | `trial_ending` email + `/terms` | Legally complete |

**Rule: rung 1 never carries a charge disclosure.** The hero's job is to earn a click. The disclosure's job is to prevent a dispute. Different jobs, different moments. Being coy at rung 4 is what creates chargebacks; being blunt at rung 1 just loses the click without protecting anything.

---

## 4. Banned phrasings

| Never write | Why | Write instead |
|---|---|---|
| `charged day 8` | Threat framing as a trust badge. Currently in the repo 17×. | Omit at rung 1. At rung 2: `7 days free` |
| `we charge your card…` | Subject *we*, verb *charge*, object *your card*. Reads as a warning. | `Converts to $24/mo on day 8 unless you cancel` (rung 3+ only) |
| `full limits` / `full plan limits` | "Limits" is a word about what you *can't* do. Internal vocabulary. | `Everything the plan includes` · `Full access` |
| `no credit card` / `no card needed` | **False.** A card is required. | Delete. Do not replace with a softer card claim. |
| `free forever` / `no monthly limits` | False. | Delete. |
| `unless you cancel first` | The word *first* implies a race. | `unless you cancel` |
| `Live in 5 minutes` / `in under five minutes` | **We measured 40–85 min to first search.** Do not make a speed claim. | `No sales call` · `No list to upload` |
| `free tier` / `Discover` in public copy | Not a public offer any more. | Omit |
| `Try WebLeads free` | Ambiguous now that free ≠ free tier | `Start your free trial` |

---

## 5. CTA labels

- Primary: **`Start free trial`** (nav, hero button may keep `Find My First Leads`)
- Secondary / long-form: **`Start your 7-day free trial`**
- Never: `Get Started Free`, `Start free, no card needed`, `Try WebLeads Free`

---

## 6. Approved blocks — copy these verbatim

**Hero sub-CTA line**
```
Free Trial · No sales call · Cancel anytime
```

**Pricing card, under the price**
```
7 days free, then $24/mo
```

**Trial FAQ (the one place the mechanics are spelled out)**
> **How does the free trial work?**
> Pick a plan and use everything it includes for 7 days. You add a payment method at signup, and the plan starts billing at its normal rate on day 8 — we email you a few days before that happens. Cancel any time during the trial from your account settings and nothing is charged.

**Final CTA sub-line**
```
Free Trial · No sales call · Cancel anytime
```

**Blog CTA box**
```
Start your free trial → Free Trial · No sales call · Cancel anytime
```

---

## 7. Tone rules that produced the bad pass

1. **One idea per line.** `7-day free trial with full limits, charged day 8 unless you cancel` is three ideas fighting. Split them across rungs.
2. **Positive verbs only at rung 1.** If the sentence's main verb is something *we* do *to* the user (`charge`, `require`, `bill`), it does not belong in a hero.
3. **No mechanics in metadata.** Meta descriptions sell the click. `7-day free trial, charged day 8 unless you cancel` in a SERP snippet is self-sabotage.
4. **Don't repeat a disclosure to feel safe.** Saying it once, in the right place, is more protective than saying it nine times in the wrong ones.
5. **Every claim must match something measured.** See `feedback-claims-must-match-measurement`. If you can't point at the number, don't write the sentence.

---

## 8. Before you commit

```bash
# must all return zero results
grep -rniE "charged day 8|we charge you|full (plan )?limits" --include="*.tsx" --include="*.ts" --include="*.md" app components lib content
grep -rniE "no credit card|no card needed|free forever" --include="*.tsx" --include="*.ts" --include="*.md" app components lib content
grep -rniE "free tier|Discover plan|5 minutes" --include="*.tsx" --include="*.ts" app components lib
```

Then: `npm run dev`, load the homepage and one niche page, read the hero and the pricing card out loud. If any line sounds like a warning, it's at the wrong rung.
