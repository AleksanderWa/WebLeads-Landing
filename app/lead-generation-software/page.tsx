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
  Globe,
} from "lucide-react"
import Link from "next/link"
import { StatsBar } from "@/components/landing/stats-bar"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { HowItWorksLanding } from "@/components/landing/how-it-works-landing"
import { UseCasesGrid } from "@/components/landing/use-cases-grid"
import { FAQSection } from "@/components/landing/faq-section-landing"
import { pricingLinkedFaqs } from "@/lib/pricing-linked-faqs"

export const metadata: Metadata = {
  title: "Lead Generation Software for Local Prospecting | WebLeads",
  description: "Find local businesses in any city with verified emails and decision maker contacts. Real time data, not a stale database. Starts at $24/mo.",
  keywords: "lead generation software, local lead generation, lead gen tools, local business leads, sales prospecting software",
  openGraph: {
    title: "Lead Generation Software for Local Prospecting | WebLeads",
    description: "Find local businesses in any city with verified emails and decision maker contacts. Real time data, not a stale database. Starts at $24/mo.",
    url: "https://www.webleads.site/lead-generation-software",
    type: "website",
    images: [{
      url: "/images/lead-generation-software-og.jpg",
      width: 1200,
      height: 630,
      alt: "Lead Generation Software for Local Prospecting — WebLeads"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Lead Generation Software for Local Prospecting | WebLeads",
    description: "Find local businesses in any city with verified emails and decision maker contacts. Real time data, not a stale database.",
    images: ["/images/lead-generation-software-og.jpg"]
  },
  alternates: {
    canonical: "https://www.webleads.site/lead-generation-software"
  }
}

export default function LeadGenerationSoftwarePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "WebLeads: Lead Generation Software for Local Prospecting",
    "description": "WebLeads finds local businesses on Google Maps with verified emails, phone numbers, and decision maker names. Built for agencies, freelancers, and sales teams doing local prospecting.",
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
        "name": "What is lead generation software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lead generation software helps you find potential customers and their contact details. For local prospecting, that means finding businesses in a specific city and getting the owner name, role, and a working email. WebLeads does this by searching Google Maps in real time and running SMTP verification on every email."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best lead generation software for local businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For local business prospecting, tools like Apollo and ZoomInfo have thin coverage because local owners are rarely on LinkedIn. WebLeads was built specifically for local: it pulls fresh data from Google Maps, finds the decision maker, and verifies the email. Starts at $24/mo."
        }
      },
      {
        "@type": "Question",
        "name": "How is WebLeads different from Apollo or ZoomInfo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apollo and ZoomInfo index LinkedIn and corporate databases. They work well for enterprise sales but have thin coverage for local businesses. WebLeads searches Google Maps at query time, returns real time results, and verifies decision maker emails directly."
        }
      },
      {
        "@type": "Question",
        "name": "Does WebLeads work outside the US?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. WebLeads works anywhere Google Maps has local business coverage, including the UK, Canada, Australia, and most of Europe."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in the free plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The free Discover tier gives you 2 searches with up to 100 results each, 100 people enrichments, and 200 email verifications. Lifetime limits, not monthly resets. No credit card required."
        }
      },
      {
        "@type": "Question",
        "name": "Can I export leads to my CRM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every search result can be exported to CSV or Excel and imported directly into your CRM or cold email tool. Export is included at every plan level."
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
              Lead Generation Software · Built for Local Prospecting
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight tracking-tight">
              Lead Generation Software Built for Local Businesses
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              WebLeads searches Google Maps in real time and returns every matching business with verified contact details. Built for agencies, freelancers, and sales teams prospecting local businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-6 sm:mb-8">
              <Button
                size="lg"
                asChild
                className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl w-full sm:w-auto"
              >
                <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                  Find Local Leads Free
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
              ✓ No credit card required &nbsp; ✓ Fresh data on every search &nbsp; ✓ Decision makers with verified emails
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
              Why Most Lead Generation Software Fails for Local Prospecting
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Enterprise Tools Miss Local Businesses",
                bullets: [
                  "Local business owners are rarely on LinkedIn. These tools index LinkedIn profiles and corporate databases.",
                  "Coverage of restaurants, contractors, clinics, and retail shops is thin or missing entirely.",
                  "You pay enterprise prices for data that does not cover your market.",
                  "Searching for 'plumbers in Phoenix' returns fewer than a dozen results when there are hundreds."
                ]
              },
              {
                title: "Stale Data Means Bounced Emails",
                bullets: [
                  "Businesses close, move, or change ownership. The database does not know yet.",
                  "Info@ addresses get recycled and abandoned. Direct contacts change roles.",
                  "Bounced emails damage your sender score and get you flagged as spam.",
                  "By the time a lead list reaches you, some of it is already wrong."
                ]
              },
              {
                title: "A Business Address Is Not a Lead",
                bullets: [
                  "You need the owner's name, their role, and a working direct email.",
                  "Most tools return business data only. Finding the right person requires a separate tool.",
                  "Unverified emails mean your outreach bounces before it lands.",
                  "Without a name and role, personalization is guesswork."
                ]
              }
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl border border-brand-primary/10 shadow-sm p-6 sm:p-8 flex flex-col gap-4"
              >
                <div className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg sm:text-xl font-semibold text-brand-secondary">{card.title}</h3>
                </div>
                <ul className="space-y-3">
                  {card.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm sm:text-base text-gray-600 leading-relaxed flex gap-2">
                      <span className="text-brand-primary mt-1 flex-shrink-0">•</span>
                      <span>{bullet}</span>
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
                Lead generation software built for local.
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                WebLeads searches Google Maps at the moment you run a query. Every result includes the business name, address, phone, email, social profiles, reviews, and ratings. Add a people enrichment to unlock the owner's name, role, and a verified professional email. One tool. No bounces. No separate verification step.
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
                { icon: <TrendingUp className="h-6 w-6" />, stat: "Real time data", label: "Pulled fresh from Google Maps on every search, not from a database built months ago." },
                { icon: <Users className="h-6 w-6" />, stat: "Decision makers included", label: "Owner name and role included. Verified professional email with one click." },
                { icon: <Shield className="h-6 w-6" />, stat: "SMTP verified emails", label: "Every email confirmed deliverable before you see it. No bounces." },
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

      {/* How It Works */}
      <HowItWorksLanding
        steps={[
          {
            number: 1,
            title: "Search by business type and city",
            description: "Type a business type and a city, or draw your search area directly on the map. WebLeads pulls every matching business from Google Maps in real time.",
            icon: <Search className="h-6 w-6" />
          },
          {
            number: 2,
            title: "Get every business with full contact data",
            description: "Every result includes name, address, phone, email, social profiles, reviews, and ratings. No filtering required. No incomplete rows.",
            icon: <Building2 className="h-6 w-6" />
          },
          {
            number: 3,
            title: "Unlock the decision maker with one click",
            description: "Add a people enrichment to get the owner's name, role, and a verified professional email. SMTP-verified before it reaches you.",
            icon: <Users className="h-6 w-6" />
          },
          {
            number: 4,
            title: "Export and start outreach",
            description: "Download as CSV or Excel. Import directly into your cold email tool or CRM. Ready to send.",
            icon: <Download className="h-6 w-6" />
          }
        ]}
        title="How It Works"
      />

      {/* Features Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-brand-light to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              What Good Lead Generation Software Actually Does
            </h2>
          </div>
          <FeaturesGrid
            features={[
              {
                icon: <Search className="h-8 w-8" />,
                title: "Real Time Google Maps Data",
                description: "Every search pulls fresh data from Google Maps. Not a database built months ago. Current businesses, current contacts."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Decision Maker Discovery",
                description: "We find the business owner's name and role, then locate and verify their professional email. Not info@. The actual person."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Built-In Email Verification",
                description: "SMTP verification is included. No third-party tool needed. Every email is confirmed deliverable before you export."
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Map Radius Search",
                description: "Draw your search area on the map and find every business inside it. No other lead generation tool offers this."
              },
              {
                icon: <Download className="h-8 w-8" />,
                title: "Export to CSV or Excel",
                description: "Import directly into your email tool or CRM. Export is included at every plan level."
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Works Globally",
                description: "WebLeads works anywhere Google Maps covers local businesses. US, UK, Canada, Australia, and beyond."
              }
            ]}
          />
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              WebLeads vs Other Lead Generation Software
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Not all lead generation software targets the same market. Here is how the tools compare for local prospecting.
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
                        <span className="text-xs text-brand-accent font-normal">Local Focus</span>
                      </div>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Apollo</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">ZoomInfo</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Outscraper</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">LeadSwift</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Local business search", webleads: "✅ Built for local", apollo: "❌ Thin coverage", zoominfo: "❌ Thin coverage", outscraper: "✅ Good", leadswift: "✅ Good" },
                    { feature: "Map radius search", webleads: "✅ Draw on map", apollo: "❌", zoominfo: "❌", outscraper: "❌", leadswift: "❌" },
                    { feature: "Real time data (not a database)", webleads: "✅ Every search", apollo: "❌ Database", zoominfo: "❌ Database", outscraper: "✅", leadswift: "✅" },
                    { feature: "Decision maker emails", webleads: "✅ Name + role + verified", apollo: "LinkedIn-based only", zoominfo: "LinkedIn-based only", outscraper: "❌ Paid add-on", leadswift: "Names only" },
                    { feature: "Built-in email verification", webleads: "✅ SMTP", apollo: "✅", zoominfo: "✅", outscraper: "✅ Paid add-on", leadswift: "Requires setup" },
                    { feature: "Starting price", webleads: "✅ $24/mo", apollo: "$59/mo", zoominfo: "$10,000+/year", outscraper: "Pay per use", leadswift: "$24.99/mo" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}>
                      <td className="p-4 sm:p-5 font-semibold text-gray-700">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-center bg-brand-primary/5 border-x-2 border-brand-primary/20 font-medium text-gray-800">{row.webleads}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.apollo}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.zoominfo}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.outscraper}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.leadswift}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-5 sm:p-6 border-t bg-gray-50">
              <p className="text-xs sm:text-sm text-gray-500 text-center max-w-2xl mx-auto">
                Prices as of March 2026. WebLeads Starter: 1 search/day, 800 results, 500 people enrichments, 3,000 email verifications per month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <UseCasesGrid
        title="Who Uses WebLeads"
        subtitle="Lead generation software built for local prospecting"
        cases={[
          {
            icon: <Users className="h-8 w-8" />,
            title: "Marketing Agencies",
            description: "You need owner contacts, not LinkedIn VPs.",
            benefits: ["Search any niche and city", "Owner name and role included", "Fresh data on every run"]
          },
          {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Freelancers",
            description: "Volume without enterprise pricing. Starts at $24/mo.",
            benefits: ["Export to CSV included", "Decision maker contacts built in", "No per-lead fees"]
          },
          {
            icon: <Building2 className="h-8 w-8" />,
            title: "Sales Teams",
            description: "Apollo was built for enterprise. WebLeads was built for local.",
            benefits: ["Up to 2,500 results per search", "Verified emails prevent bounces", "Works in any city globally"]
          },
          {
            icon: <Search className="h-8 w-8" />,
            title: "Lead Gen Specialists",
            description: "Build niche lists by city for clients. No extra tools needed.",
            benefits: ["Batch export across searches", "Decision maker data included", "SMTP-verified before delivery"]
          }
        ]}
      />

      {/* Pricing Section */}
      <div id="pricing" className="scroll-mt-20">
        <PricingSection />
      </div>

      {/* FAQ Section */}
      <FAQSection
        title="Common Questions About Lead Generation Software"
        faqs={[
          {
            question: "What is lead generation software?",
            answer: "Lead generation software helps you find potential customers and their contact details. For local prospecting, that means finding businesses in a specific city and getting the owner name, role, and a working email. WebLeads does this by searching Google Maps in real time and running SMTP verification on every email."
          },
          {
            question: "What is the best lead generation software for local businesses?",
            answer: "For local business prospecting, tools like Apollo and ZoomInfo have thin coverage because local owners are rarely on LinkedIn. WebLeads was built specifically for local: it pulls fresh data from Google Maps, finds the decision maker, and verifies the email. Starts at $24/mo."
          },
          {
            question: "How is WebLeads different from Apollo or ZoomInfo?",
            answer: "Apollo and ZoomInfo index LinkedIn and corporate databases. They work well for enterprise sales but have thin coverage for local businesses. WebLeads searches Google Maps at query time, returns real time results, and verifies decision maker emails directly."
          },
          {
            question: "Does WebLeads work outside the US?",
            answer: "Yes. WebLeads works anywhere Google Maps has local business coverage, including the UK, Canada, Australia, and most of Europe."
          },
          {
            question: "What is included in the free plan?",
            answer: "The free Discover tier gives you 2 searches with up to 100 results each, 100 people enrichments, and 200 email verifications. Lifetime limits, not monthly resets. No credit card required."
          },
          {
            question: "Can I export leads to my CRM?",
            answer: "Yes. Every search result can be exported to CSV or Excel and imported directly into your CRM or cold email tool. Export is included at every plan level."
          },
          ...pricingLinkedFaqs,
        ]}
      />

      {/* Blog cross-link */}
      <section className="py-8 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center text-gray-500 text-sm">
          Want a full tool-by-tool breakdown?{" "}
          <a href="/blog/lead-generation-software" className="text-brand-primary underline hover:text-brand-secondary">
            Read the guide to the best lead generation software for local prospecting
          </a>
          .
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#1e2330] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-24 overflow-hidden text-center shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e2330] via-[#2d3142] to-[#1e2330] opacity-100" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-brand-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight tracking-tight px-2">
                Start Generating Local Leads Today
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
                WebLeads searches Google Maps in real time and returns every matching business with verified owner contacts. No enterprise pricing, no stale databases, no bounced emails.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2 mb-8 sm:mb-12">
                <Button
                  size="lg"
                  asChild
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border border-white/10 w-full sm:w-auto"
                >
                  <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                    Find Local Leads Free
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
                  <span>Fresh data on every search</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Decision makers included</span>
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
