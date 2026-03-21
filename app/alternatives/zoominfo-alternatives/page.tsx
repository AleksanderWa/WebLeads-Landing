import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PricingSection } from "@/components/pricing-section"
import {
  MapPin,
  Users,
  Download,
  Search,
  CheckCircle2,
  ArrowRight,
  Building2,
  TrendingUp,
  Shield,
  DollarSign,
  XCircle,
} from "lucide-react"
import Link from "next/link"
import { StatsBar } from "@/components/landing/stats-bar"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { HowItWorksLanding } from "@/components/landing/how-it-works-landing"
import { UseCasesGrid } from "@/components/landing/use-cases-grid"
import { FAQSection } from "@/components/landing/faq-section-landing"
import { pricingLinkedFaqs } from "@/lib/pricing-linked-faqs"

export const metadata: Metadata = {
  title: "Best ZoomInfo Alternatives in 2026 (Free & Paid) | WebLeads",
  description: "Looking for ZoomInfo alternatives? WebLeads finds local businesses with verified decision maker emails for $24/month. No $10K contract, no sales call. Free to try.",
  keywords: "zoominfo alternatives, zoominfo alternative, cheap zoominfo alternative, free zoominfo alternative, local lead generation, google maps leads, local business leads, affordable lead gen",
  openGraph: {
    title: "Best ZoomInfo Alternatives in 2026 (Free & Paid) | WebLeads",
    description: "Looking for ZoomInfo alternatives? WebLeads finds local businesses with verified decision maker emails for $24/month. No $10K contract, no sales call. Free to try.",
    url: "https://www.webleads.site/alternatives/zoominfo-alternatives",
    type: "website",
    images: [{
      url: "/images/zoominfo-alternative-og.jpg",
      width: 1200,
      height: 630,
      alt: "Best ZoomInfo Alternatives. WebLeads for Local Lead Generation"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Best ZoomInfo Alternatives in 2026 (Free & Paid) | WebLeads",
    description: "ZoomInfo costs $10,000+/year and is built for enterprise sales teams. WebLeads finds local businesses with verified decision maker emails for $24/month.",
    images: ["/images/zoominfo-alternative-og.jpg"]
  },
  alternates: {
    canonical: "https://www.webleads.site/alternatives/zoominfo-alternatives"
  }
}

export default function ZoomInfoAlternativePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "WebLeads. ZoomInfo Alternative for Local Lead Generation",
    "description": "WebLeads finds local businesses on Google Maps with verified emails, phone numbers, and decision maker names. Built for agencies and freelancers, not enterprise sales teams paying $10K+/year.",
    "brand": {
      "@type": "Brand",
      "name": "WebLeads"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "199",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is WebLeads a good ZoomInfo alternative for small agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ZoomInfo requires a $10,000+/year annual contract and is built for enterprise sales teams with CRM integrations, intent signals, and company intelligence. If your prospects are local businesses (restaurants, contractors, clinics), ZoomInfo is overkill. WebLeads starts at $24/month and is purpose-built for local prospecting."
        }
      },
      {
        "@type": "Question",
        "name": "Does WebLeads have the same data quality as ZoomInfo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For local businesses, WebLeads is often more accurate. ZoomInfo's strength is enterprise contacts sourced from corporate databases and LinkedIn. Local business owners are frequently missing or outdated in those sources. WebLeads pulls fresh data from Google Maps on every search. Current business info, phone, owner name, and SMTP-verified email."
        }
      },
      {
        "@type": "Question",
        "name": "Why is WebLeads so much cheaper than ZoomInfo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ZoomInfo charges for a full enterprise intelligence platform: intent data, company technographics, CRM sync, compliance, and account-level insights. WebLeads is a focused tool for local business prospecting. You pay for exactly what you need. No enterprise features you'll never use."
        }
      }
    ]
  }

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-b from-white to-brand-light overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float-blob-1" />
          <div className="absolute top-40 right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-brand-accent/15 rounded-full blur-3xl animate-float-blob-2" />
          <div className="absolute bottom-20 left-1/3 w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-brand-primary/6 rounded-full blur-3xl animate-float-blob-3" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <Badge className="mb-4 sm:mb-6 bg-brand-secondary text-white text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 animate-in fade-in zoom-in duration-500">
              ZoomInfo Alternative · No $10K Annual Contract Required
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight tracking-tight">
              ZoomInfo Is Built for Enterprise. Your Clients Are Local Businesses.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              ZoomInfo is built for enterprise sales teams at $10,000+/year. If your prospects are local contractors, restaurants, or clinics, WebLeads gives you fresh data and verified owner emails starting at $24/month. No sales call. No annual lock-in.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-6 sm:mb-8">
              <Button
                size="lg"
                asChild
                className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl w-full sm:w-auto"
              >
                <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                  Find My First 100 Local Leads
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 h-auto border-2 border-brand-primary text-brand-primary hover:bg-brand-light transition-all rounded-xl w-full sm:w-auto"
              >
                <Link href="#pricing">
                  See Pricing
                </Link>
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-gray-600">
              ✓ No credit card required &nbsp; ✓ No annual contract &nbsp; ✓ Fresh local data, not a decaying enterprise database
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar
        stats={[
          { value: "452k+", label: "Businesses found", icon: <Building2 className="h-6 w-6" /> },
          { value: "42k+", label: "Decision makers found", icon: <Users className="h-6 w-6" /> },
          { value: "640+", label: "Searches done", icon: <Search className="h-6 w-6" /> },
          { value: "$24/mo", label: "Starting price", icon: <DollarSign className="h-6 w-6" /> },
        ]}
      />

      {/* Pain Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              The ZoomInfo Problem for Local Agencies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "$10,000+ Annual Commitment",
                body: "ZoomInfo requires a $10K+/year contract with annual lock-in. No month-to-month, no self-serve signup, no free trial. You book a sales call before you see pricing."
              },
              {
                title: "Built for Corporate B2B, Not Local",
                body: "ZoomInfo's database covers enterprise contacts via corporate filings and LinkedIn. Local business owners are sparse or missing entirely."
              },
              {
                title: "You Pay for What You Don't Need",
                body: "Intent signals, technographics, CRM integrations. ZoomInfo is packed for enterprise cycles. Local prospecting needs none of it."
              }
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl border border-brand-primary/10 shadow-sm p-6 sm:p-8 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold text-brand-secondary">{card.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Bridge */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-brand-primary to-brand-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left: statement */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                WebLeads is built for local. No enterprise contract required.
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                Search by business type and city. Get every matching local business with contact info and verified decision maker emails in one click. No annual contract, no sales call, no minimum.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-white text-brand-primary hover:bg-white/90 text-base sm:text-lg px-8 py-5 sm:py-6 h-auto shadow-lg transition-all duration-300 rounded-xl"
              >
                <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                  Try WebLeads Free
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
            {/* Right: 3 stat blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
              {[
                { icon: <DollarSign className="h-6 w-6" />, stat: "$24/month", label: "No annual contract. Cancel anytime." },
                { icon: <TrendingUp className="h-6 w-6" />, stat: "Real-time data", label: "Fresh from Google Maps every search, not a decaying database." },
                { icon: <Shield className="h-6 w-6" />, stat: "SMTP verified", label: "Every email confirmed before delivery. No bounces." },
              ].map((item) => (
                <div key={item.stat} className="flex items-start gap-4 bg-white/10 rounded-xl p-4 sm:p-5">
                  <div className="text-white mt-0.5 flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-white font-bold text-lg sm:text-xl">{item.stat}</p>
                    <p className="text-white/75 text-sm leading-snug">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              WebLeads vs ZoomInfo vs Other Tools
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              ZoomInfo is the right tool for enterprise B2B teams. For local business prospecting, here is how the tools compare.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 bg-gray-50">
                    <th className="p-4 sm:p-5 text-gray-700 font-semibold min-w-[160px]">Feature</th>
                    <th className="p-4 sm:p-5 text-center bg-brand-primary/5 border-x-2 border-brand-primary/20 min-w-[120px] border-t-4 border-t-brand-primary">
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-brand-primary text-base sm:text-lg">WebLeads</span>
                        <span className="text-xs text-brand-accent font-normal">Local Prospecting</span>
                      </div>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">ZoomInfo</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Apollo</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Lusha</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Local business search", webleads: "✅ Purpose-built", zoominfo: "❌ Thin coverage", apollo: "❌ Thin coverage", lusha: "❌ LinkedIn only" },
                    { feature: "Map radius search", webleads: "✅ Draw on map", zoominfo: "❌ Not available", apollo: "❌ Not available", lusha: "❌ Not available" },
                    { feature: "Data freshness", webleads: "✅ Real-time", zoominfo: "⚠️ Database", apollo: "⚠️ Database", lusha: "⚠️ Database" },
                    { feature: "Decision maker emails", webleads: "✅ Built-in pipeline", zoominfo: "✅ Large database", apollo: "⚠️ LinkedIn guessing", lusha: "⚠️ LinkedIn profiles" },
                    { feature: "Phone numbers", webleads: "✅ Included", zoominfo: "✅ Included", apollo: "⚠️ Limited", lusha: "⚠️ Limited" },
                    { feature: "Verified emails", webleads: "✅ SMTP verified", zoominfo: "✅ Yes", apollo: "✅ Yes", lusha: "⚠️ Confidence score" },
                    { feature: "Self-serve signup", webleads: "✅ Instant", zoominfo: "❌ Sales call required", apollo: "✅ Yes", lusha: "✅ Yes" },
                    { feature: "Monthly billing option", webleads: "✅ Yes", zoominfo: "❌ Annual contract only", apollo: "✅ Yes", lusha: "✅ Yes" },
                    { feature: "Starting price (March 2026)", webleads: "✅ $24/mo", zoominfo: "❌ $10,000+/year", apollo: "⚠️ $59/mo", lusha: "⚠️ $49.90/mo" },
                    { feature: "Best for", webleads: "Local B2B", zoominfo: "Enterprise sales", apollo: "Enterprise B2B", lusha: "LinkedIn enrichment" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}>
                      <td className="p-4 sm:p-5 font-semibold text-gray-700">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-center bg-brand-primary/5 border-x-2 border-brand-primary/20 font-medium text-gray-800">{row.webleads}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.zoominfo}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.apollo}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.lusha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-5 sm:p-6 border-t bg-gray-50">
              <p className="text-xs sm:text-sm text-gray-500 text-center max-w-2xl mx-auto">
                Note: WebLeads&apos; starting price ($24/mo Starter) includes 1 search/day, 800 results/search, 500 people enrichments and 3,000 email verifications per month. ZoomInfo pricing starts at approximately $10,000+/year with mandatory annual contracts and requires a sales call for access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorksLanding
        steps={[
          {
            number: 1,
            title: "Type business type + city",
            description: "Search Google Maps in real time. Get every matching local business instantly.",
            icon: <Search className="h-6 w-6" />
          },
          {
            number: 2,
            title: "Get full contact profiles",
            description: "Each result includes name, address, phone, email, owner name, and role. All the details you need.",
            icon: <Users className="h-6 w-6" />
          },
          {
            number: 3,
            title: "Verified personal emails with people enrichment",
            description: "One click generates and SMTP-verifies email patterns. Get the confirmed address, not a stale database entry.",
            icon: <Shield className="h-6 w-6" />
          },
          {
            number: 4,
            title: "Export and send",
            description: "Download CSV. Import into your cold email tool. Start outreach today.",
            icon: <Download className="h-6 w-6" />
          }
        ]}
        title="From Signup to First Outreach in Under an Hour"
      />

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              What Our Users Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "WebLeads has proven to be a powerful lead generation tool.",
                name: "Perry",
                role: "Growth Advisor, US"
              },
              {
                quote: "Before WebLeads it took me plenty of time and effort… now I am just a few clicks away from that result.",
                name: "Market Researcher",
                role: "India"
              },
              {
                quote: "Hands-free, accurate data without any effort at a great price.",
                name: "Farhan",
                role: "India"
              }
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl border border-brand-primary/10 shadow-sm p-6 sm:p-8 flex flex-col gap-4"
              >
                <span className="text-4xl font-serif text-brand-primary leading-none">&ldquo;</span>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">{t.quote}</p>
                <div>
                  <p className="font-semibold text-brand-secondary text-sm sm:text-base">{t.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-brand-light to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              What ZoomInfo Can&apos;t Do for Local
            </h2>
          </div>
          <FeaturesGrid
            features={[
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Location-First Search",
                description: "Search by city, neighborhood, or radius on the map. ZoomInfo has no map integration and thin local coverage."
              },
              {
                icon: <Search className="h-8 w-8" />,
                title: "Real-Time Data from Google Maps",
                description: "Local businesses live on Google Maps, not old corporate databases. WebLeads pulls fresh data every search."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Owner-Level Decision Makers",
                description: "WebLeads finds the actual owner with name, role, and verified email. ZoomInfo covers VP-level enterprise contacts only."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "SMTP Verification on Every Email",
                description: "Every email is verified before you see it. No bounces, no sender damage. ZoomInfo verifies against its database. WebLeads verifies against the mail server."
              },
              {
                icon: <DollarSign className="h-8 w-8" />,
                title: "No $10K Contract Required",
                description: "Starts at $24/month. No commitment, no minimum, no sales call. Sign up in two minutes. Cancel anytime."
              },
              {
                icon: <Download className="h-8 w-8" />,
                title: "Instant CSV Export",
                description: "Export businesses, phones, emails, and owner names in one CSV. No enterprise onboarding needed."
              }
            ]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing" className="scroll-mt-20">
        <PricingSection />
      </div>

      {/* Use Cases */}
      <UseCasesGrid
        title="Who Uses WebLeads Instead of ZoomInfo"
        subtitle="Built for agencies and freelancers who prospect local businesses, not enterprise sales teams"
        cases={[
          {
            icon: <Users className="h-8 w-8" />,
            title: "Marketing Agencies",
            description: "You pitch local businesses on SEO, ads, and web design. ZoomInfo skips most local owners. WebLeads finds every HVAC contractor in Phoenix with verified email.",
            benefits: ["Search any niche + city", "Owner name and role included", "Fresh data per run"]
          },
          {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "SEO & Web Design Freelancers",
            description: "You need fresh prospects daily. ZoomInfo costs $10K/year. WebLeads starts at $24/month with no annual lock-in.",
            benefits: ["Starts at $24/mo", "No annual contract", "CSV export included"]
          },
          {
            icon: <Search className="h-8 w-8" />,
            title: "Lead Generation Specialists",
            description: "Your job is building lists by niche and city. ZoomInfo is for account-based enterprise sales. WebLeads is built exactly for local list building.",
            benefits: ["Up to 2,500 results per search", "Batch export", "Decision maker data"]
          },
          {
            icon: <Building2 className="h-8 w-8" />,
            title: "Cold Email Agencies",
            description: "Bounces damage sender reputation. WebLeads SMTP-verifies every email before delivery. Fresh data. Confirmed addresses. Ready to send.",
            benefits: ["SMTP-verified emails", "Fresh per-search data", "Transparent sourcing"]
          }
        ]}
      />

      {/* FAQ Section */}
      <FAQSection
        title="ZoomInfo vs WebLeads: Common Questions"
        faqs={[
          {
            question: "Is WebLeads a good ZoomInfo alternative for small agencies?",
            answer: "Yes. ZoomInfo requires $10K+/year with annual lock-in and is built for enterprise sales. If your prospects are local businesses, ZoomInfo is overkill. WebLeads starts at $24/month for local prospecting."
          },
          {
            question: "Does WebLeads have the same data quality as ZoomInfo for local businesses?",
            answer: "For local, WebLeads is often better. ZoomInfo covers enterprise contacts via corporate databases and LinkedIn. Local owners are sparse or outdated there. WebLeads pulls fresh Google Maps data every search."
          },
          {
            question: "Why is WebLeads so much cheaper than ZoomInfo?",
            answer: "ZoomInfo is a full enterprise intelligence platform with intent data, technographics, and CRM sync. WebLeads is a focused local prospecting tool. You pay for what you use."
          },
          {
            question: "What does the free Discover tier actually give me?",
            answer: "Two real searches, up to 500 results each. Plus 100 people enrichments and 200 email verifications. Lifetime limits. Enough to test before paying."
          },
          {
            question: "Does WebLeads work outside the US?",
            answer: "Yes. Google Maps is global. WebLeads works anywhere with Google Maps coverage (UK, Canada, Australia, and beyond)."
          },
          {
            question: "Can I use WebLeads alongside ZoomInfo?",
            answer: "Yes. Use WebLeads for discovery, ZoomInfo for deeper enrichment. Many agencies use both for different workflows."
          },
          ...pricingLinkedFaqs,
        ]}
      />

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#1e2330] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-24 overflow-hidden text-center shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e2330] via-[#2d3142] to-[#1e2330] opacity-100" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-brand-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight tracking-tight px-2">
                Stop Paying $10K to Find Local Businesses
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
                Find local businesses with verified owner emails and phone numbers. Starts at $24/month. No annual contract. Cancel anytime.
              </p>
              <p className="text-sm text-blue-100/60 mb-8 sm:mb-12">
                Want a detailed side-by-side? Read the{" "}
                <Link href="/blog/zoominfo-alternatives" className="underline text-blue-100/80 hover:text-white transition-colors">
                  ZoomInfo alternatives guide
                </Link>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2 mb-8 sm:mb-12">
                <Button
                  size="lg"
                  asChild
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border border-white/10 w-full sm:w-auto"
                >
                  <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                    Find My First 100 Local Leads
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto border-2 border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white/40 transition-all rounded-xl w-full sm:w-auto"
                >
                  <Link href="#pricing">
                    View Pricing
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-blue-100/75 px-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>No annual contract</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Fresh data, not an enterprise database</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
