import { PUBLIC_PLAN_COPY } from "./public-plan-copy"
import { TRIAL_CHARGE_DAY, TRIAL_DAYS, TRIAL_FEE_LABEL, type PlanKey } from "./pricing"

export type { PlanKey }

export const TRIAL_PRICING = {
  starter: { trialPrice: TRIAL_FEE_LABEL.starter, planPrice: PUBLIC_PLAN_COPY.starter.price },
  growth: { trialPrice: TRIAL_FEE_LABEL.growth, planPrice: PUBLIC_PLAN_COPY.growth.price },
} as const

export const OFFER = {
  trialDays: TRIAL_DAYS,
  chargeDay: TRIAL_CHARGE_DAY,
  ctaPrimary: "Start trial",
  ctaLong: `Start your ${TRIAL_DAYS}-day trial`,
  trustLine: (middle: string = "No sales call") => `Trial · ${middle} · Cancel anytime`,
  pricingCardLine: (planKey: PlanKey): string | null => {
    if (planKey === "scale") return null
    const pricing = TRIAL_PRICING[planKey]
    return `${TRIAL_DAYS}-day trial for ${pricing.trialPrice}, then ${pricing.planPrice}/mo`
  },
  faqQuestion: "How does the trial work?",
  faqAnswer:
    `Pick Starter or Growth and use everything the plan includes for ${TRIAL_DAYS} days. The trial costs ${TRIAL_PRICING.starter.trialPrice} on Starter and ${TRIAL_PRICING.growth.trialPrice} on Growth, and a card is required at signup. On day ${TRIAL_CHARGE_DAY} the plan renews automatically at its full price (${TRIAL_PRICING.starter.planPrice}/mo for Starter, ${TRIAL_PRICING.growth.planPrice}/mo for Growth) unless you cancel. We email you before the trial ends. Cancel any time from your account settings and you won't be charged the full plan price. Scale (${PUBLIC_PLAN_COPY.scale.price}/mo) has no trial and is billed in full from the start.`,
} as const;
