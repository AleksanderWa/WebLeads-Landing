import { LIMIT_LABEL, PLAN_PRICING, PRICE_LABEL } from "./pricing"

export const PUBLIC_PLAN_COPY = {
  starter: {
    name: PLAN_PRICING.starter.name,
    price: PRICE_LABEL.starter,
    sub: "For solo freelancers",
    limits: [
      `${LIMIT_LABEL.starter.searchesPerDay} searches/day`,
      `up to ${LIMIT_LABEL.starter.resultsPerSearch} results per search`,
      `${LIMIT_LABEL.starter.decisionMakerUnlocksPerMonth} decision-maker email lookups /mo`,
      `${LIMIT_LABEL.starter.emailVerificationsPerMonth} email verifications /mo`,
    ],
    includes: ["Website Match", "1 active search", "Decision makers", "CSV / Excel export"],
    cta: "Start prospecting",
  },
  growth: {
    name: PLAN_PRICING.growth.name,
    price: PRICE_LABEL.growth,
    sub: "For agencies & sales teams",
    limits: [
      `${LIMIT_LABEL.growth.searchesPerDay} searches/day`,
      `up to ${LIMIT_LABEL.growth.resultsPerSearch} results per search`,
      `${LIMIT_LABEL.growth.decisionMakerUnlocksPerMonth} decision-maker email lookups /mo`,
      `${LIMIT_LABEL.growth.emailVerificationsPerMonth} email verifications /mo`,
    ],
    includes: ["Everything in Starter", "Website Match", "Higher limits", "Priority support"],
    cta: "Choose Growth",
  },
  scale: {
    name: PLAN_PRICING.scale.name,
    price: PRICE_LABEL.scale,
    sub: "For high-volume agencies",
    limits: [
      `${LIMIT_LABEL.scale.searchesPerDay} searches/day`,
      `up to ${LIMIT_LABEL.scale.resultsPerSearch} results per search`,
      `${LIMIT_LABEL.scale.decisionMakerUnlocksPerMonth} decision-maker email lookups /mo`,
      `${LIMIT_LABEL.scale.emailVerificationsPerMonth} email verifications /mo`,
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
