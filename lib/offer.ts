export const TRIAL_PRICING = {
  starter: { trialPrice: "$4.99", planPrice: "$24" },
  growth: { trialPrice: "$9.99", planPrice: "$69" },
} as const

type TrialPlanKey = keyof typeof TRIAL_PRICING

export const OFFER = {
  trialDays: 5,
  chargeDay: 6,
  ctaPrimary: "Start trial",
  ctaLong: "Start your 5-day trial",
  trustLine: (middle: string = "No sales call") => `Trial · ${middle} · Cancel anytime`,
  pricingCardLine: (planKey: string): string | null => {
    const pricing = TRIAL_PRICING[planKey as TrialPlanKey]
    if (!pricing) return null
    return `5-day trial for ${pricing.trialPrice}, then ${pricing.planPrice}/mo`
  },
  faqQuestion: "How does the trial work?",
  faqAnswer:
    "Pick Starter or Growth and use everything the plan includes for 5 days. The trial costs $4.99 on Starter and $9.99 on Growth, and a card is required at signup. On day 6 the plan renews automatically at its full price ($24/mo for Starter, $69/mo for Growth) unless you cancel. We email you before the trial ends. Cancel any time from your account settings and you won't be charged the full plan price. Scale ($199/mo) has no trial and is billed in full from the start.",
} as const;
