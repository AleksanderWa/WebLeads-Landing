export type LeadSourceModel = 'fresh_per_search' | 'database' | 'hybrid'

export type LeadSourceRecord = {
  slug: string
  name: string
  websiteUrl: string
  pricingSummary: string
  entryPriceUsdApprox: number | null
  dataModel: LeadSourceModel
  localProspectingScore: number
  smbAgencyFitScore: number
  verifiedEmailDepthScore: number
  notes: string
}

export const leadSources: LeadSourceRecord[] = [
  {
    slug: 'webleads',
    name: 'WebLeads',
    websiteUrl: 'https://webleads.site',
    pricingSummary: 'Discover free tier, paid from $24/mo',
    entryPriceUsdApprox: 0,
    dataModel: 'fresh_per_search',
    localProspectingScore: 98,
    smbAgencyFitScore: 96,
    verifiedEmailDepthScore: 92,
    notes: 'Built for local niches. Fresh collection per search. Decision makers with roles when a website exists.',
  },
  {
    slug: 'leadswift',
    name: 'LeadSwift',
    websiteUrl: 'https://leadswift.com',
    pricingSummary: 'From about $25/mo (public pricing varies)',
    entryPriceUsdApprox: 25,
    dataModel: 'hybrid',
    localProspectingScore: 90,
    smbAgencyFitScore: 88,
    verifiedEmailDepthScore: 70,
    notes: 'Local lead gen focus. Compare caps and enrichment limits to your workflow.',
  },
  {
    slug: 'd7',
    name: 'D7 Lead Finder',
    websiteUrl: 'https://d7leadfinder.com',
    pricingSummary: 'One-time or subscription (varies by offer)',
    entryPriceUsdApprox: null,
    dataModel: 'hybrid',
    localProspectingScore: 82,
    smbAgencyFitScore: 80,
    verifiedEmailDepthScore: 62,
    notes: 'Local lists are common. Check how often data refreshes for your niche.',
  },
  {
    slug: 'apollo',
    name: 'Apollo.io',
    websiteUrl: 'https://www.apollo.io',
    pricingSummary: 'From about $59/user/mo (credits model)',
    entryPriceUsdApprox: 59,
    dataModel: 'database',
    localProspectingScore: 55,
    smbAgencyFitScore: 78,
    verifiedEmailDepthScore: 74,
    notes: 'Huge B2B database. Strong for titles and companies. Expect more stale rows for SMB local shops.',
  },
  {
    slug: 'hunter',
    name: 'Hunter.io',
    websiteUrl: 'https://hunter.io',
    pricingSummary: 'From about €49/mo (credit tiers)',
    entryPriceUsdApprox: 49,
    dataModel: 'database',
    localProspectingScore: 48,
    smbAgencyFitScore: 72,
    verifiedEmailDepthScore: 80,
    notes: 'Email discovery from domains. Great when you already know the company site.',
  },
  {
    slug: 'snov',
    name: 'Snov.io',
    websiteUrl: 'https://snov.io',
    pricingSummary: 'From about $39/mo (credit tiers)',
    entryPriceUsdApprox: 39,
    dataModel: 'database',
    localProspectingScore: 50,
    smbAgencyFitScore: 74,
    verifiedEmailDepthScore: 72,
    notes: 'Prospecting plus verification bundles. Less location-first than dedicated local tools.',
  },
  {
    slug: 'lusha',
    name: 'Lusha',
    websiteUrl: 'https://www.lusha.com',
    pricingSummary: 'From about $50/mo (low seat tiers)',
    entryPriceUsdApprox: 50,
    dataModel: 'database',
    localProspectingScore: 52,
    smbAgencyFitScore: 76,
    verifiedEmailDepthScore: 78,
    notes: 'Contact data for outbound. Strong for named roles, less about map-native local coverage.',
  },
  {
    slug: 'linkedin_sn',
    name: 'LinkedIn Sales Navigator',
    websiteUrl: 'https://business.linkedin.com/sales-solutions/sales-navigator',
    pricingSummary: 'Typically $80 to $120+/mo per seat',
    entryPriceUsdApprox: 99,
    dataModel: 'hybrid',
    localProspectingScore: 60,
    smbAgencyFitScore: 70,
    verifiedEmailDepthScore: 45,
    notes: 'Great for research and messaging on-platform. Email finding is usually a separate step.',
  },
  {
    slug: 'zoominfo',
    name: 'ZoomInfo',
    websiteUrl: 'https://www.zoominfo.com',
    pricingSummary: 'Enterprise contracts (often $10k+/year)',
    entryPriceUsdApprox: 900,
    dataModel: 'database',
    localProspectingScore: 58,
    smbAgencyFitScore: 40,
    verifiedEmailDepthScore: 88,
    notes: 'Powerful for large outbound teams. Heavy pricing and setup for solo agencies.',
  },
]

export type ComparisonAudience = 'local_smb' | 'mixed' | 'national_enterprise'

export type ComparisonEmailPriority = 'nice' | 'important' | 'critical'

export type ComparisonBudgetBand = 'under_50' | '50_150' | '150_plus'

export type ComparisonInputs = {
  audience: ComparisonAudience
  emailPriority: ComparisonEmailPriority
  budgetBand: ComparisonBudgetBand
}

export type RankedLeadSource = LeadSourceRecord & {
  score: number
}

function budgetMultiplier(entryPriceUsdApprox: number | null, budgetBand: ComparisonBudgetBand): number {
  if (entryPriceUsdApprox === null) {
    return 0.9
  }
  switch (budgetBand) {
    case 'under_50':
      if (entryPriceUsdApprox <= 30) {
        return 1.15
      }
      if (entryPriceUsdApprox <= 70) {
        return 1.0
      }
      return 0.65
    case '50_150':
      if (entryPriceUsdApprox <= 120) {
        return 1.05
      }
      return 0.75
    case '150_plus':
      return 1.0
    default:
      return 1.0
  }
}

function audienceWeights(audience: ComparisonAudience): { local: number; smb: number } {
  switch (audience) {
    case 'local_smb':
      return { local: 1.25, smb: 1.15 }
    case 'mixed':
      return { local: 1.0, smb: 1.0 }
    case 'national_enterprise':
      return { local: 0.75, smb: 0.85 }
    default:
      return { local: 1.0, smb: 1.0 }
  }
}

function emailWeights(emailPriority: ComparisonEmailPriority): number {
  switch (emailPriority) {
    case 'nice':
      return 0.85
    case 'important':
      return 1.0
    case 'critical':
      return 1.2
    default:
      return 1.0
  }
}

function freshnessBonus(dataModel: LeadSourceModel, audience: ComparisonAudience): number {
  if (dataModel !== 'fresh_per_search') {
    return 0
  }
  switch (audience) {
    case 'local_smb':
      return 8
    case 'mixed':
      return 6
    case 'national_enterprise':
      return 3
    default:
      return 0
  }
}

export function rankLeadSources(inputs: ComparisonInputs): RankedLeadSource[] {
  const audienceWeight = audienceWeights(inputs.audience)
  const emailWeight = emailWeights(inputs.emailPriority)
  const ranked = leadSources.map((source) => {
    const priceFactor = budgetMultiplier(source.entryPriceUsdApprox, inputs.budgetBand)
    const baseScore =
      source.localProspectingScore * audienceWeight.local * 0.45 +
      source.smbAgencyFitScore * audienceWeight.smb * 0.25 +
      source.verifiedEmailDepthScore * emailWeight * 0.3
    const score = Math.round(baseScore * priceFactor + freshnessBonus(source.dataModel, inputs.audience))
    return { ...source, score }
  })
  return ranked.sort((first, second) => second.score - first.score)
}
