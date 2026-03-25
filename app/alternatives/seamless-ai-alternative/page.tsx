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
  title: "Seamless.ai Alternative for Local Prospecting | WebLeads",
  description: "WebLeads finds local businesses by type and location with owner names and verified emails. No sales call to see pricing. Compare with Seamless.ai.",
  keywords: "seamless.ai alternative, seamless ai alternative, local lead generation, google maps leads, decision maker emails",
  openGraph: {
    title: "Seamless.ai Alternative for Local Prospecting | WebLeads",
    description: "WebLeads finds local businesses by type and location with owner names and verified emails. No sales call to see pricing. Compare with Seamless.ai.",
    url: "https://www.webleads.site/alternatives/seamless-ai-alternative",
    type: "website",
    images: [{
      url: "/images/seamless-ai-alternative-og.jpg",
      width: 1200,
      height: 630,
      alt: "Seamless.ai Alternative for Local Lead Generation"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Seamless.ai Alternative for Local Prospecting | WebLeads",
    description: "WebLeads finds local businesses by type and location with owner names and verified emails. No sales call to see pricing.",
    images: ["/images/seamless-ai-alternative-og.jpg"]
  },
  alternates: {
    canonical: "https://www.webleads.site/alternatives/seamless-ai-alternative"
  }
}

export default function SeamlessAiAlternativePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "WebLeads: Seamless.ai Alternative for Local Lead Generation",
    "description": "WebLeads finds local businesses on Google Maps with verified emails, phone numbers, and decision maker names. Built for agencies and freelancers doing local prospecting, not a cached database.",
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
        "name": "Is WebLeads a direct replacement for Seamless.ai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For local business prospecting, yes. For enterprise B2B sales intelligence with LinkedIn enrichment, they serve different use cases. WebLeads finds local businesses by type and location. Seamless.ai enriches contacts from professional databases."
        }
      },
      {
        "@type": "Question",
        "name": "How does WebLeads pricing compare to Seamless.ai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebLeads pricing is published: Starter at $24/mo, Growth at $69/mo, Scale at $199/mo. Seamless.ai's Single plan provides 250 credits per month, with Pro and Custom plans requiring a sales conversation to get a quote."
        }
      },
      {
        "@type": "Question",
        "name": "Can I try WebLeads before paying?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The free Discover plan gives you 2 lifetime searches and 10 people enrichments to test with real data before committing to a paid plan. No credit card required."
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
              Seamless.ai Alternative · Built for Local Prospecting
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight tracking-tight">
              Seamless.ai Finds LinkedIn Contacts. Your Clients Are Local Businesses.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Seamless.ai needs LinkedIn. WebLeads finds local business owners with verified emails straight from Google Maps — no login required.
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
              ✓ No credit card required &nbsp; ✓ Fresh data, not a cached database &nbsp; ✓ Pricing starts at $24/mo
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
              The Seamless.ai Problem for Local Prospecting
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Built for LinkedIn, Not Local",
                body: "Seamless.ai pulls data from LinkedIn and professional databases. Most local business owners, contractors, salon owners, and agency founders are not on LinkedIn. You will not find them there, regardless of how many credits you have."
              },
              {
                title: "Pricing That Requires a Phone Call",
                body: "Seamless.ai's paid plans are not listed publicly. You need to sign up or speak with sales to find out what you will pay. For agencies and freelancers evaluating tools on a budget, that creates friction before you have seen a single result."
              },
              {
                title: "No Location-Based Discovery",
                body: "Seamless.ai is an enrichment and search tool for known professional contacts. There is no way to type plumber in Houston and get a list. You need to already have a target in mind. That limits its usefulness for prospecting from scratch."
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
                WebLeads is built for local.
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                Every search pulls fresh data from Google Maps. Each result includes name, address, phone, email, reviews, social profiles, and the owner name and role. Get a verified direct email with people enrichment in one click.
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
                { icon: <DollarSign className="h-6 w-6" />, stat: "$24/mo", label: "Starter plan. No sales call required." },
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
              WebLeads vs Seamless.ai vs Other Contact Tools
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Seamless.ai is built for enterprise LinkedIn B2B. For local business discovery, here is how the tools stack up.
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
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Seamless.ai</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Apollo</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Hunter.io</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Local business search", webleads: "✅ Purpose-built", seamless: "❌ Not available", apollo: "❌ Thin coverage", hunter: "❌ No discovery" },
                    { feature: "Data source", webleads: "✅ Google Maps", seamless: "❌ LinkedIn/professional DB", apollo: "❌ LinkedIn cached", hunter: "❌ Professional DB" },
                    { feature: "Decision maker emails", webleads: "✅ Built-in pipeline", seamless: "⚠️ LinkedIn-inferred, enterprise focus", apollo: "⚠️ LinkedIn inferred", hunter: "❌ Not included" },
                    { feature: "Decision maker roles", webleads: "✅ Name + role", seamless: "⚠️ Job titles from LinkedIn", apollo: "⚠️ LinkedIn titles", hunter: "❌" },
                    { feature: "Built in email verification", webleads: "✅ SMTP verified", seamless: "✅ Built-in", apollo: "✅", hunter: "✅" },
                    { feature: "Data freshness", webleads: "✅ Real time", seamless: "⚠️ AI-refreshed database", apollo: "❌ Cached", hunter: "⚠️ Domain database" },
                    { feature: "Pricing transparency", webleads: "✅ Published plans", seamless: "❌ Requires sales contact", apollo: "✅ Published plans", hunter: "✅ Published plans" },
                    { feature: "Starting price (March 2026)", webleads: "✅ $24/mo", seamless: "Contact sales", apollo: "❌ $59/mo", hunter: "❌ €49/mo" },
                    { feature: "Best for", webleads: "Local B2B outreach", seamless: "Enterprise LinkedIn B2B", apollo: "Enterprise B2B", hunter: "Domain email finding" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}>
                      <td className="p-4 sm:p-5 font-semibold text-gray-700">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-center bg-brand-primary/5 border-x-2 border-brand-primary/20 font-medium text-gray-800">{row.webleads}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.seamless}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.apollo}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.hunter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-5 sm:p-6 border-t bg-gray-50">
              <p className="text-xs sm:text-sm text-gray-500 text-center max-w-2xl mx-auto">
                Note: WebLeads Starter ($24/mo) includes 1 search/day, 800 results/search, 500 people enrichments and 3,000 email verifications. Seamless.ai Single plan includes 250 credits per month. Pro and Custom plans require a sales conversation.
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
            description: "Type a business type and city. WebLeads searches Google Maps in real time, not from a database built months ago.",
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
              What Seamless.ai Can&apos;t Do for Local
            </h2>
          </div>
          <FeaturesGrid
            features={[
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Location-First Search",
                description: "Type a business type and city. WebLeads returns businesses that match right now, not from a database."
              },
              {
                icon: <Search className="h-8 w-8" />,
                title: "Google Maps as Data Source",
                description: "Local businesses live on Google Maps, not LinkedIn. WebLeads pulls directly from that directory on every search."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Decision Makers with Verified Emails",
                description: "We find the owner name and role, then run SMTP verification to confirm their direct email. Not a guess."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Published Pricing, No Sales Call",
                description: "You can see exactly what WebLeads costs before signing up. Starter is $24 per month. No conversation required."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Fresh Data on Every Search",
                description: "Seamless.ai uses a database that refreshes periodically. WebLeads collects fresh data at the time of your search."
              },
              {
                icon: <Download className="h-8 w-8" />,
                title: "Instant CSV Export",
                description: "Get your list into your cold email tool in minutes. Export included at every plan level. No extra steps."
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
        title="Who Uses WebLeads Instead of Seamless.ai"
        subtitle="Built for agencies and freelancers who prospect local businesses"
        cases={[
          {
            icon: <Users className="h-8 w-8" />,
            title: "Marketing Agencies",
            description: "You pitch local businesses on SEO, ads, and web work. Seamless.ai is built for LinkedIn-based enterprise prospecting. WebLeads finds every HVAC contractor in Dallas with the owner&apos;s verified email.",
            benefits: ["Search any niche and city", "Owner name and role included", "Fresh data on every run"]
          },
          {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "SEO and Web Design Freelancers",
            description: "You need 50 to 200 new contacts a day. Seamless.ai pricing is enterprise-focused and opaque. WebLeads starts at $24 per month with no sales call required.",
            benefits: ["Starts at $24/mo", "High daily search volume", "CSV export included"]
          },
          {
            icon: <Search className="h-8 w-8" />,
            title: "Lead Generation Specialists",
            description: "Your job is building lists by niche and city. Seamless.ai has no location-first search model. WebLeads was built for this exact workflow.",
            benefits: ["Up to 2,500 results per search", "Batch export", "Decision maker data included"]
          },
          {
            icon: <Building2 className="h-8 w-8" />,
            title: "Cold Email Agencies",
            description: "Bad data damages your sender reputation. WebLeads gives you SMTP-verified emails pulled fresh on every search. No AI-refreshed databases, no guessed addresses.",
            benefits: ["SMTP verified emails", "Fresh per-search data", "Transparent data sourcing"]
          }
        ]}
      />

      {/* FAQ Section */}
      <FAQSection
        title="Seamless.ai vs WebLeads: Common Questions"
        faqs={[
          {
            question: "Is WebLeads a direct replacement for Seamless.ai?",
            answer: "For local business prospecting, yes. For enterprise B2B sales intelligence with LinkedIn enrichment, they serve different use cases. WebLeads finds local businesses by type and location. Seamless.ai enriches contacts from professional databases."
          },
          {
            question: "Does WebLeads cover countries outside the US?",
            answer: "Yes. WebLeads uses Google Maps, which covers businesses worldwide. Coverage is strongest where Google Maps is most active, including the US, UK, Canada, and Australia."
          },
          {
            question: "How does WebLeads pricing compare to Seamless.ai?",
            answer: "WebLeads pricing is published: Starter at $24/mo, Growth at $69/mo, Scale at $199/mo. Seamless.ai&apos;s Single plan provides 250 credits per month, with Pro and Custom plans requiring a sales conversation to get a quote."
          },
          {
            question: "What happens when a business has no website?",
            answer: "Basic business data (name, address, phone, Google Maps info) is still returned. People enrichment requires a website domain to find decision maker emails. Businesses with no online presence cannot be enriched for contacts."
          },
          {
            question: "Can I try WebLeads before paying?",
            answer: "Yes. The free Discover plan gives you 2 lifetime searches and 10 people enrichments to test with real data before committing to a paid plan. No credit card required."
          },
          {
            question: "Which industries work best with WebLeads?",
            answer: "Any local business that appears on Google Maps. This includes contractors (HVAC, plumbing, electrical), agencies (marketing, web design, SEO), professional services (accounting, law), retail, restaurants, and more. If they have a Google Maps listing and a website, WebLeads can find them."
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
                Stop Waiting for a Sales Callback to Find Local Leads
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
                WebLeads finds local businesses in any city with verified emails and owner contacts. Pricing starts at $24 per month. No sales call required.
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
                  <span>Published pricing, no surprises</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Decision makers with verified emails</span>
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
            <Link href="/blog/seamless-ai-alternative" className="text-blue-600 underline hover:text-blue-800">
              Read our in-depth Seamless.ai alternatives guide →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
