import { PUBLIC_PLAN_COPY } from "./public-plan-copy"

export const TRIAL_PRICING = {
  starter: { trialPrice: "$4.99", planPrice: PUBLIC_PLAN_COPY.starter.price },
  growth: { trialPrice: "$9.99", planPrice: PUBLIC_PLAN_COPY.growth.price },
} as const

export type PlanKey = "starter" | "growth" | "scale"

export const OFFER = {
  trialDays: 5,
  chargeDay: 6,
  ctaPrimary: "Start trial",
  ctaLong: "Start your 5-day trial",
  trustLine: (middle: string = "No sales call") => `Trial · ${middle} · Cancel anytime`,
  pricingCardLine: (planKey: PlanKey): string | null => {
    if (planKey === "scale") return null
    const pricing = TRIAL_PRICING[planKey]
    return `5-day trial for ${pricing.trialPrice}, then ${pricing.planPrice}/mo`
  },
  faqQuestion: "How does the trial work?",
  faqAnswer:
    `Pick Starter or Growth and use everything the plan includes for 5 days. The trial costs ${TRIAL_PRICING.starter.trialPrice} on Starter and ${TRIAL_PRICING.growth.trialPrice} on Growth, and a card is required at signup. On day 6 the plan renews automatically at its full price (${TRIAL_PRICING.starter.planPrice}/mo for Starter, ${TRIAL_PRICING.growth.planPrice}/mo for Growth) unless you cancel. We email you before the trial ends. Cancel any time from your account settings and you won't be charged the full plan price. Scale (${PUBLIC_PLAN_COPY.scale.price}/mo) has no trial and is billed in full from the start.`,
} as const;
