const formatUsd = (amount: number): string =>
  `$${Number.isInteger(amount) ? amount.toLocaleString("en-US") : amount.toFixed(2)}`

const formatCount = (count: number): string => count.toLocaleString("en-US")

export const TRIAL_DAYS = 5
export const TRIAL_CHARGE_DAY = TRIAL_DAYS + 1

export type PlanKey = "starter" | "growth" | "scale"

export const PLAN_PRICING = {
  starter: {
    name: "Starter",
    monthly: 39,
    yearlyTotal: 372,
    yearlyPerMonth: 31,
    trialFee: 4.99,
    limits: { searchesPerDay: 2, resultsPerSearch: 800, decisionMakerUnlocksPerMonth: 1000, emailVerificationsPerMonth: 3000 },
  },
  growth: {
    name: "Growth",
    monthly: 99,
    yearlyTotal: 948,
    yearlyPerMonth: 79,
    trialFee: 9.99,
    limits: { searchesPerDay: 3, resultsPerSearch: 1500, decisionMakerUnlocksPerMonth: 2500, emailVerificationsPerMonth: 10000 },
  },
  scale: {
    name: "Scale",
    monthly: 249,
    yearlyTotal: 2388,
    yearlyPerMonth: 199,
    trialFee: null,
    limits: { searchesPerDay: 7, resultsPerSearch: 2500, decisionMakerUnlocksPerMonth: 7000, emailVerificationsPerMonth: 30000 },
  },
} as const

export const PRICE_LABEL = {
  starter: formatUsd(PLAN_PRICING.starter.monthly),
  growth: formatUsd(PLAN_PRICING.growth.monthly),
  scale: formatUsd(PLAN_PRICING.scale.monthly),
} as const

export const TRIAL_FEE_LABEL = {
  starter: formatUsd(PLAN_PRICING.starter.trialFee),
  growth: formatUsd(PLAN_PRICING.growth.trialFee),
} as const

const limitLabels = (planKey: PlanKey) => {
  const { limits } = PLAN_PRICING[planKey]
  return {
    searchesPerDay: formatCount(limits.searchesPerDay),
    resultsPerSearch: formatCount(limits.resultsPerSearch),
    decisionMakerUnlocksPerMonth: formatCount(limits.decisionMakerUnlocksPerMonth),
    emailVerificationsPerMonth: formatCount(limits.emailVerificationsPerMonth),
  }
}

export const LIMIT_LABEL = {
  starter: limitLabels("starter"),
  growth: limitLabels("growth"),
  scale: limitLabels("scale"),
} as const

export const YEARLY_SAVING = {
  starter: PLAN_PRICING.starter.monthly * 12 - PLAN_PRICING.starter.yearlyTotal,
  growth: PLAN_PRICING.growth.monthly * 12 - PLAN_PRICING.growth.yearlyTotal,
  scale: PLAN_PRICING.scale.monthly * 12 - PLAN_PRICING.scale.yearlyTotal,
} as const

export const MAX_YEARLY_SAVING = Math.max(YEARLY_SAVING.starter, YEARLY_SAVING.growth, YEARLY_SAVING.scale)

export const YEARLY_LABEL = {
  starter: { perMonth: formatUsd(PLAN_PRICING.starter.yearlyPerMonth), total: formatUsd(PLAN_PRICING.starter.yearlyTotal), saving: formatUsd(YEARLY_SAVING.starter) },
  growth: { perMonth: formatUsd(PLAN_PRICING.growth.yearlyPerMonth), total: formatUsd(PLAN_PRICING.growth.yearlyTotal), saving: formatUsd(YEARLY_SAVING.growth) },
  scale: { perMonth: formatUsd(PLAN_PRICING.scale.yearlyPerMonth), total: formatUsd(PLAN_PRICING.scale.yearlyTotal), saving: formatUsd(YEARLY_SAVING.scale) },
} as const

export const YEARLY_FROM_LABEL = {
  starter: `${YEARLY_LABEL.starter.perMonth}/mo billed yearly`,
  growth: `${YEARLY_LABEL.growth.perMonth}/mo billed yearly`,
  scale: `${YEARLY_LABEL.scale.perMonth}/mo billed yearly`,
} as const

export const YEARLY_FIRST_LABEL = {
  starter: `${YEARLY_FROM_LABEL.starter} (or ${PRICE_LABEL.starter} monthly)`,
  growth: `${YEARLY_FROM_LABEL.growth} (or ${PRICE_LABEL.growth} monthly)`,
  scale: `${YEARLY_FROM_LABEL.scale} (or ${PRICE_LABEL.scale} monthly)`,
} as const

export const MAX_YEARLY_SAVING_LABEL = formatUsd(MAX_YEARLY_SAVING)

const planKeys: PlanKey[] = ["starter", "growth", "scale"]
const limitKeys = ["searchesPerDay", "resultsPerSearch", "decisionMakerUnlocksPerMonth", "emailVerificationsPerMonth"] as const

export const PRICING_TOKENS: Record<string, string> = {
  "trial.days": String(TRIAL_DAYS),
  "trialFee.starter": TRIAL_FEE_LABEL.starter,
  "trialFee.growth": TRIAL_FEE_LABEL.growth,
  ...Object.fromEntries(planKeys.map((planKey) => [`price.${planKey}`, PRICE_LABEL[planKey]])),
  ...Object.fromEntries(planKeys.map((planKey) => [`priceAmount.${planKey}`, String(PLAN_PRICING[planKey].monthly)])),
  ...Object.fromEntries(planKeys.map((planKey) => [`yearlyTotal.${planKey}`, formatUsd(PLAN_PRICING[planKey].yearlyTotal)])),
  ...Object.fromEntries(planKeys.map((planKey) => [`yearlyPerMonth.${planKey}`, formatUsd(PLAN_PRICING[planKey].yearlyPerMonth)])),
  ...Object.fromEntries(planKeys.map((planKey) => [`priceFromYearly.${planKey}`, YEARLY_FROM_LABEL[planKey]])),
  ...Object.fromEntries(planKeys.map((planKey) => [`priceYearlyFirst.${planKey}`, YEARLY_FIRST_LABEL[planKey]])),
  ...Object.fromEntries(planKeys.map((planKey) => [`yearlyIfMonthly.${planKey}`, formatUsd(PLAN_PRICING[planKey].monthly * 12)])),
  ...Object.fromEntries(
    planKeys.flatMap((planKey) => limitKeys.map((limitKey) => [`limit.${planKey}.${limitKey}`, LIMIT_LABEL[planKey][limitKey]])),
  ),
}

export class UnknownPricingTokenError extends Error {
  constructor(token: string, source: string) {
    super(`Unknown pricing token "{{${token}}}" in ${source}`)
  }
}

export const resolvePricingTokens = (text: string, source: string): string =>
  text.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_match, token: string) => {
    const value = PRICING_TOKENS[token]
    if (value === undefined) throw new UnknownPricingTokenError(token, source)
    return value
  })
