import { LIMIT_LABEL, PLAN_PRICING, PRICE_LABEL } from "./pricing"

export const PUBLIC_PLAN_COPY = {
  starter: {
    name: PLAN_PRICING.starter.name,
    price: PRICE_LABEL.starter,
    sub: "For solo freelancers",
    limits: [
      `${LIMIT_LABEL.starter.searchesPerDay} searches/day`,
      `up to ${LIMIT_LABEL.starter.resultsPerSearch} results per search`,
      `up to ${LIMIT_LABEL.starter.decisionMakerUnlocksPerMonth} decision-maker emails /mo`,
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
      `up to ${LIMIT_LABEL.growth.decisionMakerUnlocksPerMonth} decision-maker emails /mo`,
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
      `up to ${LIMIT_LABEL.scale.decisionMakerUnlocksPerMonth} decision-maker emails /mo`,
      `${LIMIT_LABEL.scale.emailVerificationsPerMonth} email verifications /mo`,
    ],
    includes: ["Everything in Growth", "Website Match", "Up to 2 active searches", "2x higher limits"],
    cta: "Go Scale",
  },
} as const;

export const LOOKUP_PROMISE = {
  headline: "Failed lookups are free",
  body: "Business searches use your search limit. Your decision-maker email allowance only goes down when we find an email.",
  badge: "No email found? It costs you nothing.",
} as const;
