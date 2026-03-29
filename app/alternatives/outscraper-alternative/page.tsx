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
  title: "Outscraper Alternative for Local Lead Gen | WebLeads",
  description: "Outscraper charges per enrichment. WebLeads finds local businesses with verified decision maker emails in one flat plan. Built for agencies doing cold outreach.",
  keywords: "outscraper alternative, outscraper alternatives, local lead generation, google maps leads, decision maker emails",
  openGraph: {
    title: "Outscraper Alternative for Local Lead Gen | WebLeads",
    description: "Outscraper charges per enrichment. WebLeads finds local businesses with verified decision maker emails in one flat plan. Built for agencies doing cold outreach.",
    url: "https://www.webleads.site/alternatives/outscraper-alternative",
    type: "website",
    images: [{
      url: "/images/outscraper-alternative-og.jpg",
      width: 1200,
      height: 630,
      alt: "Outscraper Alternative for Local Lead Generation"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Outscraper Alternative for Local Lead Gen | WebLeads",
    description: "Outscraper charges per enrichment. WebLeads finds local businesses with verified decision maker emails in one flat plan.",
    images: ["/images/outscraper-alternative-og.jpg"]
  },
  alternates: {
    canonical: "https://www.webleads.site/alternatives/outscraper-alternative"
  }
}

export default function OutscraperAlternativePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "WebLeads: Outscraper Alternative for Local Lead Generation",
    "description": "WebLeads finds local businesses on Google Maps with verified emails, phone numbers, and decision maker names. All included in a flat monthly plan, no enrichment stacking.",
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
        "name": "Is WebLeads better than Outscraper for local lead generation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For agencies and freelancers doing cold outreach, WebLeads is simpler and often better value. Outscraper is pay-as-you-go with excellent API access, but enrichment costs (emails, contacts, verification) stack quickly. WebLeads includes decision maker emails and SMTP verification in a flat monthly plan."
        }
      },
      {
        "@type": "Question",
        "name": "Does Outscraper find decision maker emails?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outscraper has a Contacts and Leads enrichment that finds general contacts for a domain. It does not specifically identify decision makers by name and role, and email verification is a separate additional cost. WebLeads runs a purpose-built pipeline to find owner names, roles, and verified emails in one step."
        }
      },
      {
        "@type": "Question",
        "name": "How does WebLeads pricing compare to Outscraper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outscraper base scraping is $2.85/1,000 businesses. Add Emails and Contacts ($3/1k), Contacts and Leads ($3/1k), and email verification and you are at $9 or more per 1,000 records. WebLeads Starter is $24/mo flat and includes 800 results per search, 500 people enrichments, and 3,000 email verifications."
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
              Outscraper Alternative · No Enrichment Stacking
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight tracking-tight">
              Outscraper Charges Per Enrichment. WebLeads Includes Everything.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Outscraper is pay-as-you-go with great API access. WebLeads bundles local business data, decision maker emails, and SMTP verification into one flat plan for agencies doing cold outreach.
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
              ✓ No credit card required &nbsp; ✓ Decision makers included, not extra &nbsp; ✓ Flat monthly pricing
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
              The Outscraper Problem for Cold Outreach
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Enrichment Costs Stack Fast",
                body: "Outscraper charges separately for every layer of data:",
                bullets: [
                  "Base scraping: $2.85 per 1,000 businesses",
                  "Emails and contacts: +$3/1k each",
                  "Email verification: additional cost on top",
                  "Full stack adds up to $9+ per 1,000 records — before daily volume",
                ]
              },
              {
                title: "No Decision Maker Data",
                body: "Outscraper finds domain-level contacts, not the person you need to reach:",
                bullets: [
                  "No owner name or job title in results",
                  "No SMTP verification to confirm emails work",
                  "Generic info@ addresses instead of direct contacts",
                ]
              },
              {
                title: "API-First for Developers",
                body: "Outscraper is built for programmatic access, not agency workflows:",
                bullets: [
                  "Requires API setup and enrichment configuration",
                  "No web interface for search-and-export workflows",
                  "Friction adds up when you prospect daily",
                ]
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
                <ul className="space-y-2">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm sm:text-base text-gray-600">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
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
                WebLeads is all-in-one for local outreach.
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                Every search pulls fresh data from Google Maps. Each result includes name, address, phone, reviews, and social profiles. People enrichment finds the owner name, role, and SMTP-verified professional email in one step.
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
                { icon: <TrendingUp className="h-6 w-6" />, stat: "Real time", label: "Data collected fresh on every search, not from a database" },
                { icon: <Users className="h-6 w-6" />, stat: "Decision makers", label: "Full contact profiles with name, role, and verified email" },
                { icon: <Shield className="h-6 w-6" />, stat: "Verified emails", label: "SMTP-verified before delivery to prevent bounces" },
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
              WebLeads vs Outscraper vs Other Local Tools
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Outscraper is excellent for API-first developers. For agencies doing daily local prospecting, here is how the tools compare.
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
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Outscraper</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Scrap.io</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">LeadSwift</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Local business search", webleads: "✅ Purpose-built", outscraper: "✅ Core feature", scrapio: "✅ Core feature", leadswift: "✅ Multi-source" },
                    { feature: "Data source", webleads: "✅ Google Maps", outscraper: "✅ Google Maps", scrapio: "✅ Google Maps", leadswift: "✅ Maps + YP + Bing" },
                    { feature: "Decision maker emails", webleads: "✅ Built-in pipeline", outscraper: "❌ Generic contacts only", scrapio: "❌ Not included", leadswift: "❌ Names only, no roles" },
                    { feature: "Decision maker roles", webleads: "✅ Name + role", outscraper: "❌ Not included", scrapio: "❌ Not included", leadswift: "❌ No roles" },
                    { feature: "Built-in email verification", webleads: "✅ SMTP verified", outscraper: "⚠️ Paid add-on", scrapio: "❌ Not included", leadswift: "⚠️ Third-party required" },
                    { feature: "Data freshness", webleads: "✅ Real time", outscraper: "✅ Real time", scrapio: "✅ Real time", leadswift: "✅ Real time" },
                    { feature: "Pricing model", webleads: "✅ Flat monthly quota", outscraper: "⚠️ Per-record + enrichments", scrapio: "⚠️ Credits reset monthly", leadswift: "✅ Flat monthly" },
                    { feature: "Starting price (March 2026)", webleads: "✅ $24/mo", outscraper: "✅ $2.85/1k (free tier available)", scrapio: "⚠️ $35/mo", leadswift: "⚠️ $24.99/mo" },
                    { feature: "Best for", webleads: "Local B2B cold outreach", outscraper: "Developer API use", scrapio: "Enterprise Maps scraping", leadswift: "Multi-source + automation" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}>
                      <td className="p-4 sm:p-5 font-semibold text-gray-700">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-center bg-brand-primary/5 border-x-2 border-brand-primary/20 font-medium text-gray-800">{row.webleads}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.outscraper}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.scrapio}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.leadswift}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-5 sm:p-6 border-t bg-gray-50">
              <p className="text-xs sm:text-sm text-gray-500 text-center max-w-2xl mx-auto">
                Note: WebLeads Starter ($24/mo) includes 1 search/day, 800 results/search, 500 people enrichments and 3,000 email verifications. Outscraper base scraping is $2.85/1k businesses; full enrichment stack (emails + contacts + verification) adds up to $9+/1k.
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
            description: "Type a business type and city. WebLeads searches Google Maps in real time. No API setup, no enrichment configuration, no stacking costs.",
            icon: <Search className="h-6 w-6" />
          },
          {
            number: 2,
            title: "Get every business with full contact data",
            description: "Every result includes name, address, phone, email, reviews, and social profiles. Owner name and role are included. Get a verified direct email with people enrichment in one click.",
            icon: <Users className="h-6 w-6" />
          },
          {
            number: 3,
            title: "Export your list",
            description: "Download as CSV or Excel. Import into your cold email tool. Ready to send.",
            icon: <Download className="h-6 w-6" />
          },
          {
            number: 4,
            title: "Land the client",
            description: "Real contacts, no bounces. Your pitch reaches the right person. More replies, more clients.",
            icon: <TrendingUp className="h-6 w-6" />
          }
        ]}
        title="From Search to Client Outreach"
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
                quote: "Before WebLeads it took me plenty of time and effort. Now I am just a few clicks away from that result.",
                name: "Market Researcher",
                role: "India"
              },
              {
                quote: "Hands free, accurate data without any effort at a great price.",
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
              What Outscraper Doesn&apos;t Include for Cold Outreach
            </h2>
          </div>
          <FeaturesGrid
            features={[
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Decision Maker Discovery",
                description: "Outscraper finds domain-level contacts. WebLeads finds the specific owner or manager, with name, role, and verified email in one step."
              },
              {
                icon: <Search className="h-8 w-8" />,
                title: "No Enrichment Stacking",
                description: "Outscraper charges separately for base scraping, emails, contacts, and verification. WebLeads bundles all of that into one monthly quota."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Web Interface for Non-Developers",
                description: "Outscraper is API-first. WebLeads is a web interface. Search, see results, enrich contacts, export. No API keys or configuration needed."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "SMTP Verification Included",
                description: "Outscraper email verification is a separate paid service. WebLeads includes SMTP verification in every plan, so your exported list is ready to send."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Predictable Monthly Budget",
                description: "Outscraper costs vary with usage. WebLeads is a flat monthly plan. You know what you pay before the month starts, not after."
              },
              {
                icon: <Download className="h-8 w-8" />,
                title: "Instant CSV Export",
                description: "Get your list into your cold email tool in minutes. Export included at every plan level. No additional steps or API calls."
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
        title="Who Switches from Outscraper to WebLeads"
        subtitle="Built for agencies and freelancers who prospect local businesses daily"
        cases={[
          {
            icon: <Users className="h-8 w-8" />,
            title: "Marketing Agencies",
            description: "You run searches daily by niche and city. Outscraper&apos;s per-record pricing is fine for occasional use, but daily usage adds up. WebLeads Starter at $24/mo covers one search a day with decision maker enrichments included.",
            benefits: ["Flat monthly pricing", "Owner name and role included", "Fresh data on every run"]
          },
          {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "SEO and Web Design Freelancers",
            description: "You need verified decision maker contacts, not generic info@ emails. Outscraper finds business-level data. WebLeads finds the specific person you want to reach and confirms their email works.",
            benefits: ["Starts at $24/mo", "Verified decision maker emails", "CSV export included"]
          },
          {
            icon: <Search className="h-8 w-8" />,
            title: "Lead Generation Specialists",
            description: "Building targeted lists by niche and location is your job. Outscraper requires API setup and enrichment configuration. WebLeads is a search form with instant results.",
            benefits: ["Up to 2,500 results per search", "Batch export", "No API required"]
          },
          {
            icon: <Building2 className="h-8 w-8" />,
            title: "Cold Email Agencies",
            description: "Bad data damages sender reputation. Outscraper email verification is a separate charge. WebLeads includes SMTP-verified emails in every plan, pulled fresh on every search.",
            benefits: ["SMTP verified emails", "Fresh per-search data", "All-in-one plan"]
          }
        ]}
      />

      {/* FAQ Section */}
      <FAQSection
        title="Outscraper vs WebLeads: Common Questions"
        faqs={[
          {
            question: "Is WebLeads better than Outscraper for local lead generation?",
            answer: "For agencies and freelancers doing cold outreach, WebLeads is simpler and often better value. Outscraper is excellent for API-driven workflows and pay-as-you-go flexibility, but enrichment costs stack quickly. WebLeads includes decision maker emails and SMTP verification in a flat monthly plan."
          },
          {
            question: "Does Outscraper find decision maker emails?",
            answer: "Outscraper has a Contacts and Leads enrichment that finds general contacts for a domain. It does not specifically identify decision makers by name and role. Email verification is a separate additional cost. WebLeads finds owner names, roles, and verified emails in one step."
          },
          {
            question: "How does WebLeads pricing compare to Outscraper?",
            answer: "Outscraper base scraping is $2.85 per 1,000 businesses. Add emails, contacts, and verification and you reach $9 or more per 1,000 records. WebLeads Starter is $24/mo flat and includes 800 results per search, 500 people enrichments, and 3,000 email verifications."
          },
          {
            question: "What does the free Discover tier give me?",
            answer: "Two real searches, up to 500 results each, plus 100 people enrichments and 200 email verifications. Lifetime limits that never reset. Enough to test WebLeads before committing to a paid plan."
          },
          {
            question: "Does WebLeads work outside the US?",
            answer: "Yes. Google Maps is global. WebLeads works anywhere with Google Maps coverage: UK, Canada, Australia, and beyond. Most users are US based."
          },
          {
            question: "When should I use Outscraper instead of WebLeads?",
            answer: "Outscraper is the better choice if you need API access for custom pipelines, have variable or sporadic usage (pay-as-you-go beats monthly plans), or need raw bulk data without the decision maker layer. WebLeads is better when you want a web interface, flat pricing, and decision maker emails included."
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
                Stop Stacking Enrichment Costs for Local Leads
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
                WebLeads finds local businesses in any city with verified emails and owner contacts. Decision makers included. Starts at $24/month.
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
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Decision makers included, not extra</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>SMTP verified emails on every plan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            Want a detailed written comparison?{" "}
            <Link href="/blog/outscraper-alternative" className="text-blue-600 underline hover:text-blue-800">
              Read our in-depth Outscraper alternatives guide &rarr;
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
