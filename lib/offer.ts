export const OFFER = {
  trialDays: 5,
  chargeDay: 6,
  ctaPrimary: "Start free trial",
  ctaLong: "Start your 5-day free trial",
  trustLine: (middle: string = "No sales call") => `Free Trial · ${middle} · Cancel anytime`,
  pricingCardLine: (price: string) => `5 days free, then ${price}/mo`,
  faqQuestion: "How does the free trial work?",
  faqAnswer:
    "Pick a plan and use everything it includes for 5 days. You add a payment method at signup, and the plan starts billing at its normal rate on day 6. We email you a few days before that happens. Cancel any time during the trial from your account settings and nothing is charged.",
} as const;
