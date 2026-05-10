import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, XCircle, MinusCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Best Lead Generation Tools in 2026: Ranked for Your Use Case',
  description: 'Compare WebLeads, Apollo, Hunter.io, ZoomInfo and more. Real pricing, honest pros/cons, and a 4-question quiz to find the right tool for your business.',
  alternates: {
    canonical: 'https://www.webleads.site/tools/lead-gen-comparison',
  },
  openGraph: {
    title: 'Best Lead Generation Tools in 2026: Ranked for Your Use Case',
    description: 'Compare WebLeads, Apollo, Hunter.io, ZoomInfo and more. Real pricing, honest pros/cons, and a 4-question quiz to find the right tool for your business.',
    url: 'https://www.webleads.site/tools/lead-gen-comparison',
    siteName: 'WebLeads',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.webleads.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Best Lead Generation Tools Comparison 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aleksanderwco',
    title: 'Best Lead Generation Tools in 2026: Ranked for Your Use Case',
    description: 'Compare WebLeads, Apollo, Hunter.io, ZoomInfo and more. Real pricing, honest pros/cons, and a 4-question quiz.',
    images: ['https://www.webleads.site/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best lead generation tool for local businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For finding local SMBs (plumbers, agencies, contractors, etc.), WebLeads and D7 Lead Finder are the best options. Both pull fresh data from Google Maps instead of relying on stale databases. WebLeads adds decision maker emails with SMTP verification. Apollo and ZoomInfo are better for targeting named companies in corporate B2B.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is WebLeads different from Apollo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Apollo is a static B2B database of ~275 million contacts. It\'s strong for finding decision makers at named companies. WebLeads finds businesses from scratch using live Google Maps searches, so it\'s better when you don\'t have a target list and want to prospect local businesses by niche and location. Apollo is better for enterprise outreach; WebLeads is better for local prospecting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which lead generation tool is cheapest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WebLeads starts free (2 lifetime searches), then $24/mo for Starter. D7 Lead Finder starts at $24.99/mo. Hunter.io starts at €49/mo. Apollo starts at $59/user/mo. ZoomInfo is enterprise-only and runs $10,000+/year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an account to use this comparison tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. This page and the interactive quiz are completely free. No signup required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which lead gen tool is best for agencies doing cold outreach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For agencies prospecting local businesses (their most common use case), WebLeads is the strongest fit. You search by business type and city, get businesses with phone, email, and decision maker names, and export directly. Hunter.io and Apollo are better if you already have a list of company names and need to find emails for specific contacts.',
      },
    },
  ],
}

type CheckStatus = 'yes' | 'no' | 'partial'

const Check = ({ status }: { status: CheckStatus }) => {
  if (status === 'yes') return <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
  if (status === 'no') return <XCircle className="h-5 w-5 text-red-400 mx-auto" />
  return <MinusCircle className="h-5 w-5 text-yellow-400 mx-auto" />
}

const tools = [
  {
    name: 'WebLeads',
    tagline: 'Best for local SMB prospecting',
    dataSource: 'Google Maps (live)',
    localSMB: 'yes' as CheckStatus,
    decisionMakers: 'yes' as CheckStatus,
    emailFinding: 'yes' as CheckStatus,
    freeTier: 'yes' as CheckStatus,
    entryPrice: '$0 / $24/mo',
    bestFor: 'Agencies prospecting local businesses by niche + city',
    highlight: true,
  },
  {
    name: 'Apollo',
    tagline: 'Best for B2B database outreach',
    dataSource: 'Static B2B database (~275M contacts)',
    localSMB: 'partial' as CheckStatus,
    decisionMakers: 'yes' as CheckStatus,
    emailFinding: 'yes' as CheckStatus,
    freeTier: 'yes' as CheckStatus,
    entryPrice: '$59/user/mo',
    bestFor: 'Finding contacts at named companies in corporate B2B',
    highlight: false,
  },
  {
    name: 'Hunter.io',
    tagline: 'Best for finding emails by domain',
    dataSource: 'Web crawl (domain-based)',
    localSMB: 'no' as CheckStatus,
    decisionMakers: 'partial' as CheckStatus,
    emailFinding: 'yes' as CheckStatus,
    freeTier: 'yes' as CheckStatus,
    entryPrice: '€49/mo',
    bestFor: 'Enriching a list where you already have company domains',
    highlight: false,
  },
  {
    name: 'ZoomInfo',
    tagline: 'Best for enterprise sales teams',
    dataSource: 'Curated B2B database (large enterprises)',
    localSMB: 'no' as CheckStatus,
    decisionMakers: 'yes' as CheckStatus,
    emailFinding: 'yes' as CheckStatus,
    freeTier: 'no' as CheckStatus,
    entryPrice: '$10,000+/year',
    bestFor: 'Enterprise teams with large budgets targeting Fortune 500',
    highlight: false,
  },
  {
    name: 'Lusha',
    tagline: 'Best for LinkedIn contact enrichment',
    dataSource: 'Crowdsourced B2B data',
    localSMB: 'no' as CheckStatus,
    decisionMakers: 'yes' as CheckStatus,
    emailFinding: 'yes' as CheckStatus,
    freeTier: 'yes' as CheckStatus,
    entryPrice: '$49.90/mo',
    bestFor: 'Finding direct dials and emails for LinkedIn contacts',
    highlight: false,
  },
  {
    name: 'D7 Lead Finder',
    tagline: 'Budget local lead gen tool',
    dataSource: 'Google Maps + directories',
    localSMB: 'yes' as CheckStatus,
    decisionMakers: 'no' as CheckStatus,
    emailFinding: 'partial' as CheckStatus,
    freeTier: 'no' as CheckStatus,
    entryPrice: '$24.99/mo',
    bestFor: 'Scraping local business contact info at low cost',
    highlight: false,
  },
  {
    name: 'Outscraper',
    tagline: 'Pay-as-you-go Google Maps scraper',
    dataSource: 'Google Maps (live scraping)',
    localSMB: 'yes' as CheckStatus,
    decisionMakers: 'no' as CheckStatus,
    emailFinding: 'no' as CheckStatus,
    freeTier: 'yes' as CheckStatus,
    entryPrice: '$3/1k records',
    bestFor: 'Developers who want raw Google Maps data via API',
    highlight: false,
  },
  {
    name: 'Snov.io',
    tagline: 'Combined email finder and drip tool',
    dataSource: 'Web crawl + email verification',
    localSMB: 'partial' as CheckStatus,
    decisionMakers: 'partial' as CheckStatus,
    emailFinding: 'yes' as CheckStatus,
    freeTier: 'yes' as CheckStatus,
    entryPrice: '$39/mo',
    bestFor: 'Teams that want email finding and drip sequences in one tool',
    highlight: false,
  },
]

export default function LeadGenComparisonPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Header />

      {/* Hero */}
      <section
        className="relative overflow-hidden text-center"
        style={{
          background: 'linear-gradient(160deg, #2D3142 0%, #3d4560 100%)',
          padding: 'clamp(64px, 10vw, 96px) 40px clamp(80px, 12vw, 112px)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.07,
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{ top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: '#8A3033', opacity: 0.12, filter: 'blur(80px)' }}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div
            className="inline-flex items-center gap-2 mb-8"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 99, padding: '6px 16px' }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
              8 tools compared with real pricing
            </span>
          </div>

          <h1
            className="font-bold text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-1.5px' }}
          >
            Best lead generation tools<br />
            <span style={{ color: '#f87171' }}>ranked for your use case</span>
          </h1>
          <p
            className="mb-10 max-w-2xl mx-auto"
            style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}
          >
            Apollo, Hunter, ZoomInfo, WebLeads and more. Side-by-side comparison with honest verdicts on which tool actually fits your situation. Plus a quick quiz to narrow it down.
          </p>

          <a
            href="#comparison-table"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-xl font-semibold hover:-translate-y-0.5 transition-all"
            style={{ boxShadow: '0 8px 32px rgba(138,48,51,0.5)', fontSize: 17 }}
          >
            See the comparison
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Quick verdict section */}
      <section className="py-12 px-4 sm:px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Quick verdict by use case</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <p className="text-sm font-semibold text-brand-primary mb-1">Prospecting local businesses (contractors, agencies, trades)</p>
              <p className="text-sm text-gray-700">Use <strong>WebLeads</strong> or <strong>D7 Lead Finder</strong>. Both pull live Google Maps data. WebLeads adds decision maker emails; D7 is cheaper but no people enrichment.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <p className="text-sm font-semibold text-brand-primary mb-1">Enriching a list of company names you already have</p>
              <p className="text-sm text-gray-700">Use <strong>Hunter.io</strong> or <strong>Apollo</strong>. Give them a domain or company name, get emails back. Not useful for finding companies from scratch.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <p className="text-sm font-semibold text-brand-primary mb-1">Enterprise B2B sales with large budget</p>
              <p className="text-sm text-gray-700">Use <strong>ZoomInfo</strong> or <strong>Apollo</strong>. Deep contact databases, CRM integrations, intent signals. Overkill for SMB prospecting.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <p className="text-sm font-semibold text-brand-primary mb-1">LinkedIn outreach and direct dial finding</p>
              <p className="text-sm text-gray-700">Use <strong>Lusha</strong>. Best for revealing phone numbers and emails from LinkedIn profiles. Works where others don't cover social data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison-table" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Full comparison: best lead generation tools 2026
          </h2>
          <p className="text-center text-gray-500 mb-10 text-sm">
            Pricing as of May 2026. <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> = yes</span> &nbsp; <span className="inline-flex items-center gap-1"><MinusCircle className="h-3.5 w-3.5 text-yellow-400" /> = partial</span> &nbsp; <span className="inline-flex items-center gap-1"><XCircle className="h-3.5 w-3.5 text-red-400" /> = no</span>
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 min-w-[140px]">Tool</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 min-w-[180px]">Data source</th>
                  <th className="text-center px-3 py-3 font-semibold text-gray-700 min-w-[90px]">Local SMBs</th>
                  <th className="text-center px-3 py-3 font-semibold text-gray-700 min-w-[120px]">Decision makers</th>
                  <th className="text-center px-3 py-3 font-semibold text-gray-700 min-w-[110px]">Email finding</th>
                  <th className="text-center px-3 py-3 font-semibold text-gray-700 min-w-[90px]">Free tier</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 min-w-[140px]">Entry price</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool, i) => (
                  <tr
                    key={tool.name}
                    className={`border-b border-gray-100 ${tool.highlight ? 'bg-brand-primary/5' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${tool.highlight ? 'text-brand-primary' : 'text-gray-900'}`}>{tool.name}</span>
                        {tool.highlight && (
                          <span className="text-xs bg-brand-primary text-white px-2 py-0.5 rounded-full">This site</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{tool.tagline}</p>
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-xs">{tool.dataSource}</td>
                    <td className="px-3 py-4"><Check status={tool.localSMB} /></td>
                    <td className="px-3 py-4"><Check status={tool.decisionMakers} /></td>
                    <td className="px-3 py-4"><Check status={tool.emailFinding} /></td>
                    <td className="px-3 py-4"><Check status={tool.freeTier} /></td>
                    <td className="px-4 py-4 font-medium text-gray-800">{tool.entryPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tool deep-dives */}
      <section className="py-8 pb-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">What each tool is actually good at</h2>
          <p className="text-center text-gray-500 mb-10">Skip the marketing copy. Here's the honest version.</p>

          {/* WebLeads */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-brand-primary/20 shadow-sm">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">WebLeads</h3>
                <p className="text-sm text-gray-500 mt-1">Best for: agencies prospecting local businesses</p>
              </div>
              <span className="text-xs bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full font-medium whitespace-nowrap">$0 to $199/mo</span>
            </div>
            <p className="text-gray-700 mb-4">
              You type in a business type and a city. WebLeads searches Google Maps in real time, collects matching businesses, and returns them with phone numbers, emails, and decision maker names and roles. No stale database. Every search pulls fresh data.
            </p>
            <p className="text-gray-700 mb-4">
              The decision maker email part is where it's different from most local lead tools: it finds the business website, generates email patterns (john@, jsmith@, etc.), and runs SMTP verification until one confirms. You get emails that actually work.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Good fit if:</p>
                <ul className="space-y-1 text-gray-600">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />You need businesses by city + niche</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />You want decision maker names and emails</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />Budget is under $100/mo</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />You want fresh data, not a list someone scraped last year</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Not great if:</p>
                <ul className="space-y-1 text-gray-600">
                  <li className="flex gap-2"><XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />You need CRM integration (not yet)</li>
                  <li className="flex gap-2"><XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />Your targets have no website (can't enrich emails)</li>
                  <li className="flex gap-2"><XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />You need enterprise/Fortune 500 contacts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Apollo */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Apollo</h3>
                <p className="text-sm text-gray-500 mt-1">Best for: B2B database outreach at named companies</p>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium whitespace-nowrap">$59/user/mo</span>
            </div>
            <p className="text-gray-700 mb-4">
              Apollo has a database of around 275 million contacts. You filter by job title, company size, industry, and location to pull a list. It's strong for corporate B2B outreach where you know what kind of company you're targeting. The data is pre-collected, which means it can be months or years old.
            </p>
            <p className="text-gray-700">
              Not well-suited for local SMB prospecting. The database skews toward larger companies with established web presence. If you're searching for "roofing contractors in Dallas," you'll get thin or zero results.
            </p>
          </div>

          {/* Hunter */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Hunter.io</h3>
                <p className="text-sm text-gray-500 mt-1">Best for: finding emails when you already have a domain</p>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium whitespace-nowrap">€49/mo</span>
            </div>
            <p className="text-gray-700">
              Hunter crawls websites and finds email patterns. Give it a domain like acmeplumbing.com and it returns known emails and guesses likely addresses. Solid for enriching a list you've already built. Useless for discovering companies you haven't identified yet.
            </p>
          </div>

          {/* ZoomInfo */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">ZoomInfo</h3>
                <p className="text-sm text-gray-500 mt-1">Best for: enterprise sales teams with large budgets</p>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium whitespace-nowrap">$10,000+/year</span>
            </div>
            <p className="text-gray-700">
              ZoomInfo is enterprise-grade B2B intelligence. Intent data, org charts, CRM sync, the works. If your average deal size is six figures and you have a full sales team, it makes sense. For anyone else, the price doesn't make sense.
            </p>
          </div>
        </div>
      </section>

      {/* CTA mid-page */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Not sure which one fits your situation?</h2>
          <p className="text-gray-600 mb-8">Answer 4 questions and get a ranked list tailored to your business type, location, and budget.</p>
          <Link
            href="https://app.webleads.site/comparison-tool"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-xl font-semibold hover:-translate-y-0.5 transition-all"
            style={{ boxShadow: '0 8px 32px rgba(138,48,51,0.4)', fontSize: 17 }}
          >
            Get your personalized recommendation
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="mt-3 text-sm text-gray-400">Free, no account needed, takes 2 minutes</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            Common questions
          </h2>

          <div className="space-y-5">
            {faqStructuredData.mainEntity.map((item) => (
              <details key={item.name} className="bg-white rounded-lg p-6 border border-gray-200 group cursor-pointer">
                <summary className="font-semibold text-gray-900 group-open:text-brand-primary list-none flex justify-between items-center">
                  {item.name}
                  <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform text-lg">+</span>
                </summary>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-8 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 text-center mb-4">Related pages</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/google-maps-scraper" className="text-brand-primary hover:underline">Google Maps scraper</Link>
            <Link href="/local-lead-generation" className="text-brand-primary hover:underline">Local lead generation</Link>
            <Link href="/email-finder-tools" className="text-brand-primary hover:underline">Email finder tools</Link>
            <Link href="/blog/best-sales-prospecting-tools" className="text-brand-primary hover:underline">Best sales prospecting tools</Link>
            <Link href="/blog/b2b-lead-generation-tools" className="text-brand-primary hover:underline">B2B lead generation tools</Link>
            <Link href="/blog/apollo-alternatives-local-lead-generation" className="text-brand-primary hover:underline">Apollo alternatives for local lead gen</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
