# Trial Copy Guide

**Scope:** every string on this site that mentions the trial, the price, the card, or getting started.
**Status:** authoritative. Overrides any older phrasing found in the repo.
**Read this before editing copy in `app/`, `components/`, or `content/`.**

---

## 1. The offer (facts, do not restate them inaccurately)

Decision: Aleksander, 2026-10-31. **The trial is paid.**

- **5-day trial, card required at signup.** The plan auto-charges its full price at the end of the trial unless cancelled.
- **Starter:** $4.99 for the 5-day trial, then $24/mo.
- **Growth:** $9.99 for the 5-day trial, then $69/mo.
- **Scale ($199/mo) is not trial-eligible.** It bills in full from the start. Show no trial on Scale.
- The user picks the plan at signup and gets that plan's full quota during the trial.
- A reminder email goes out **before** the trial ends (`trial_ending`).
- **There is no free plan for new signups.** Discover is closed. Do not mention it in the pricing grid, hero, FAQ, metadata, or anywhere as an offer.
- Never describe the trial as free or $0. The trial has a price.
- Source of truth for strings: `lib/offer.ts` (`OFFER`, `TRIAL_PRICING`). Do not hardcode trial prices in pages; import them.

---

## 2. The canonical trust line

```
Trial · No sales call · Cancel anytime
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
| 2 | Pricing card, directly under the price | `5-day trial for $4.99, then $24/mo` (Starter), `5-day trial for $9.99, then $69/mo` (Growth). Scale: no line. |
| 3 | Trial FAQ answer | Full mechanics, plainly stated, once |
| 4 | Card form / checkout (app repo) | Fully explicit, unmissable, in the user's frame |
| 5 | `trial_ending` email + `/terms` | Legally complete |

**Rule: rung 1 never carries a charge disclosure.** The hero's job is to earn a click. The disclosure's job is to prevent a dispute. Different jobs, different moments. Being coy at rung 4 is what creates chargebacks; being blunt at rung 1 just loses the click without protecting anything.

---

## 4. Banned phrasings

| Never write | Why | Write instead |
|---|---|---|
| `charged day 6` | Threat framing as a trust badge. | Omit at rung 1. At rung 2: `5-day trial for $4.99, then $24/mo` |
| `we charge your card…` | Subject *we*, verb *charge*, object *your card*. Reads as a warning. | `Converts to $24/mo on day 6 unless you cancel` (rung 3+ only) |
| `full limits` / `full plan limits` | "Limits" is a word about what you *can't* do. Internal vocabulary. | `Everything the plan includes` · `Full access` |
| `no credit card` / `no card needed` | **False.** A card is required. | Delete. Do not replace with a softer card claim. |
| `free forever` / `no monthly limits` | False. | Delete. |
| `unless you cancel first` | The word *first* implies a race. | `unless you cancel` |
| `Live in 5 minutes` / `in under five minutes` | **We measured 40–85 min to first search.** Do not make a speed claim. | `No sales call` · `No list to upload` |
| `free tier` / `free plan` / `Discover` in public copy | Closed to new signups. | Omit |
| `Try WebLeads free` / `Get Started Free` / `Search X Free` | The trial is paid. | `Start your trial` |
| `try free` / `Free to try` / `Start free` | The trial is paid. | `Start your trial` |
| `5 days free` | The trial costs $4.99 / $9.99. | `5-day trial for $4.99` |
| `nothing is charged` (trial context) | False, the trial fee is charged. | `you won't be charged the full plan price` |
| `no subscriptions` | The product is a subscription. | `no annual contracts` |
| `free trial` / `Free Trial` | Do not label the trial as free in public copy. | `trial` / `Trial` |

---

## 5. CTA labels

- Primary: **`Start trial`** / **`Start your trial`** (nav, hero button may keep `Find My First Leads`)
- Secondary / long-form: **`Start your 5-day trial`**
- Never: `Get Started Free`, `Start free, no card needed`, `Try WebLeads Free`, `Search X Free`

---

## 6. Approved blocks — copy these verbatim

**Hero sub-CTA line**
```
Trial · No sales call · Cancel anytime
```

**Pricing card, under the price**
```
5-day trial for $4.99, then $24/mo      (Starter)
5-day trial for $9.99, then $69/mo      (Growth)
(Scale: no trial line)
```

**Trial FAQ (the one place the mechanics are spelled out)** (canonical text is `OFFER.faqAnswer` in `lib/offer.ts`)
> **How does the trial work?**
> Pick Starter or Growth and use everything the plan includes for 5 days. The trial costs $4.99 on Starter and $9.99 on Growth, and a card is required at signup. On day 6 the plan renews automatically at its full price ($24/mo for Starter, $69/mo for Growth) unless you cancel. We email you before the trial ends. Cancel any time from your account settings and you won't be charged the full plan price. Scale ($199/mo) has no trial and is billed in full from the start.

**Final CTA sub-line**
```
Trial · No sales call · Cancel anytime
```

**Blog CTA box**
```
Start your trial → Trial · No sales call · Cancel anytime
```

---

## 7. Tone rules that produced the bad pass

1. **One idea per line.** `5-day trial with full limits, charged day 6 unless you cancel` is three ideas fighting. Split them across rungs.
2. **Positive verbs only at rung 1.** If the sentence's main verb is something *we* do *to* the user (`charge`, `require`, `bill`), it does not belong in a hero.
3. **No mechanics in metadata.** Meta descriptions sell the click. `5-day trial, charged day 6 unless you cancel` in a SERP snippet is self-sabotage.
4. **Don't repeat a disclosure to feel safe.** Saying it once, in the right place, is more protective than saying it nine times in the wrong ones.
5. **Every claim must match something measured.** See `feedback-claims-must-match-measurement`. If you can't point at the number, don't write the sentence.

---

## 8. Before you commit

```bash
# must all return zero results
grep -rniE "charged day 6|we charge you|full (plan )?limits" --include="*.tsx" --include="*.ts" --include="*.md" app components lib content
grep -rniE "no credit card|no card needed|free forever|free trial|try (webleads )?free|get started free|free plan|no subscriptions|5 days free" --include="*.tsx" --include="*.ts" --include="*.md" app components lib content
grep -rniE "free tier|Discover plan|5 minutes" --include="*.tsx" --include="*.ts" app components lib
```

Then: `npm run dev`, load the homepage and one niche page, read the hero and the pricing card out loud. If any line sounds like a warning, it's at the wrong rung.
