export const OFFER = {
  trialDays: 7,
  chargeDay: 8,
  ctaPrimary: "Start free trial",
  ctaLong: "Start your 7-day free trial",
  trustLine: (middle: string = "No sales call") => `Free Trial · ${middle} · Cancel anytime`,
  pricingCardLine: (price: string) => `7 days free, then ${price}/mo`,
  faqQuestion: "How does the free trial work?",
  faqAnswer:
    "Pick a plan and use everything it includes for 7 days. You add a payment method at signup, and the plan starts billing at its normal rate on day 8. We email you a few days before that happens. Cancel any time during the trial from your account settings and nothing is charged.",
} as const;
