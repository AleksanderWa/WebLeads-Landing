export const PUBLIC_PLAN_COPY = {
  trial: {
    name: "Trial",
    price: "$0",
    sub: "No credit card · one-time",
    limits: [
      "2 searches",
      "up to 500 businesses per search",
      "automatic decision-maker email lookups on a small sample",
    ],
    includes: [
      "Business details and decision makers",
      "CSV / Excel export",
      "Upgrade for Website Match",
    ],
    cta: "Start free, no card needed",
  },
  starter: {
    name: "Starter",
    price: "$24",
    sub: "For solo freelancers",
    limits: [
      "2 searches/day",
      "up to 800 results per search",
      "1,000 decision-maker email lookups /mo",
      "3,000 email verifications /mo",
    ],
    includes: ["Website Match", "1 active search", "Decision makers", "CSV / Excel export"],
    cta: "Start prospecting",
  },
  growth: {
    name: "Growth",
    price: "$69",
    sub: "For agencies & sales teams",
    limits: [
      "3 searches/day",
      "up to 1,500 results per search",
      "2,500 decision-maker email lookups /mo",
      "10,000 email verifications /mo",
    ],
    includes: ["Everything in Starter", "Website Match", "Higher limits", "Priority support"],
    cta: "Choose Growth",
  },
  scale: {
    name: "Scale",
    price: "$199",
    sub: "For high-volume agencies",
    limits: [
      "7 searches/day",
      "up to 2,500 results per search",
      "7,000 decision-maker email lookups /mo",
      "30,000 email verifications /mo",
    ],
    includes: ["Everything in Growth", "Website Match", "Up to 2 active searches", "2x higher limits"],
    cta: "Go Scale",
  },
} as const;

export const LOOKUP_PROMISE = {
  headline: "Only successful lookups count.",
  body: "Business searches use your search limit. Decision-maker email lookups only use your allowance when we find a verified email.",
  badge: "No verified email found? It does not use your lookup limit.",
} as const;
