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
  title: "Marketing Agency Leads: Find Local Business Clients",
  description: "Marketing agencies use WebLeads to build prospect lists from Google Maps. Get owner names, verified emails, and fresh data on every search.",
  keywords: "marketing agency leads, leads for marketing agencies, marketing agency lead generation, how to get clients for marketing agency, marketing agency prospecting",
  openGraph: {
    title: "Marketing Agency Leads: Find Local Business Clients | WebLeads",
    description: "Marketing agencies use WebLeads to build prospect lists of local businesses from Google Maps. Get owner names, verified emails, and fresh data on every search.",
    url: "https://www.webleads.site/marketing-agency-leads",
    type: "website",
    images: [{
      url: "https://8rmdw9if1vt4amdl.public.blob.vercel-storage.com/blog_marketing_agency_leads.webp",
      width: 1200,
      height: 630,
      alt: "Marketing Agency Leads with WebLeads"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Marketing Agency Leads: Find Local Business Clients | WebLeads",
    description: "Marketing agencies use WebLeads to build prospect lists of local businesses from Google Maps. Get owner names, verified emails, and fresh data on every search.",
    images: ["https://8rmdw9if1vt4amdl.public.blob.vercel-storage.com/blog_marketing_agency_leads.webp"]
  },
  alternates: {
    canonical: "https://www.webleads.site/marketing-agency-leads"
  }
}

export default function MarketingAgencyLeadsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "WebLeads: Marketing Agency Lead Generation",
    "description": "WebLeads finds local businesses on Google Maps and online directories with verified emails, phone numbers, and decision maker names. Built for marketing agencies doing cold outreach to local business clients.",
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
        "name": "How does WebLeads help marketing agencies find clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebLeads searches Google Maps for any business type in any city and returns a full list of matching businesses with contact data. You can run people enrichments to find the owner name, role, and verified email for each result. Export to CSV and plug into your cold email tool."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of businesses can I find with WebLeads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Any business type that has a Google Maps presence: restaurants, contractors, gyms, dental practices, law firms, salons, HVAC companies, real estate agencies, and hundreds of other local business categories. If it shows up on Google Maps, WebLeads can find it."
        }
      },
      {
        "@type": "Question",
        "name": "How does WebLeads find decision maker emails?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We discover the business website domain, generate likely email patterns (firstname@, first.last@, firstname.lastname@), then SMTP-verify each until one confirms. You get the working email, not a guess."
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
              Built for Marketing Agencies · Local Business Prospecting
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight tracking-tight">
              Find Local Business Clients for Your Agency
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Stop spending days on prospect lists. Search any niche and city, get local businesses with owner names and verified emails.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-6 sm:mb-8">
              <Button
                size="lg"
                asChild
                className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl w-full sm:w-auto"
              >
                <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                  Find My First 1,000 Local Leads
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
              ✓ No credit card required &nbsp; ✓ Fresh data from Google Maps &nbsp; ✓ Owner emails verified via SMTP
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
              Why Agency Prospecting Breaks Down
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Most agencies spend more time hunting for clients than actually doing client work. Here is why.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Manual Google Search Doesn't Scale",
                intro: "Copying names from Google Maps into a spreadsheet takes 3 to 5 minutes per business:",
                bullets: [
                  "500 prospects = 25+ hours of data entry",
                  "No owner contact, just info@ addresses",
                  "No way to filter by rating or review count",
                  "Done once, stale within weeks"
                ]
              },
              {
                title: "Stale Databases Miss Real Businesses",
                intro: "Buying a list from a data broker means working with old records:",
                bullets: [
                  "Businesses open and close constantly",
                  "Owner info changes, emails bounce",
                  "20% to 30% of records invalid within a year",
                  "You pay for the list regardless of quality"
                ]
              },
              {
                title: "No Direct Decision Maker Contact",
                intro: "Reaching a business is easy. Reaching the owner who signs the check is not:",
                bullets: [
                  "info@ goes to staff who ignore it",
                  "Contact forms get deleted unread",
                  "LinkedIn has no coverage for local business owners",
                  "You pitch but never reach the decision maker"
                ]
              },
              {
                title: "Wasting Time on Bad Leads",
                intro: "Without filtering, you end up pitching the wrong businesses:",
                bullets: [
                  "Businesses too small to afford your services",
                  "Businesses already working with an agency",
                  "Contacts that have left the company",
                  "Emails that bounce and damage your sender score"
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
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{card.intro}</p>
                <ul className="flex flex-col gap-2">
                  {card.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{bullet}</span>
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
                WebLeads is built for agencies that sell to local businesses.
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                Search any business type in any city. Stop spending days on prospect lists. Get every matching business from Google Maps with owner name, role, and a verified direct email. No manual grind.
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
              WebLeads vs Manual Research vs ZoomInfo for Agency Prospecting
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              How the main approaches compare when your goal is filling an agency pipeline with local business clients.
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
                        <span className="text-xs text-brand-accent font-normal">For Agencies</span>
                      </div>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Manual Research</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">ZoomInfo</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Local business search", webleads: "✅ Purpose-built", manual: "⚠️ Google Maps, slow", zoominfo: "❌ B2B focus, weak local" },
                    { feature: "Data source", webleads: "✅ Google Maps live", manual: "⚠️ Maps + directories", zoominfo: "❌ Cached B2B database" },
                    { feature: "Owner name and role", webleads: "✅ Included", manual: "⚠️ Sometimes, manually", zoominfo: "⚠️ Enterprise contacts only" },
                    { feature: "Verified direct email", webleads: "✅ SMTP verified", manual: "❌ info@ or none", zoominfo: "⚠️ B2B emails, not local owners" },
                    { feature: "Data freshness", webleads: "✅ Real time per search", manual: "⚠️ Only when you check", zoominfo: "❌ Database, updated periodically" },
                    { feature: "Time to build 500 leads", webleads: "✅ No manual work", manual: "❌ 25 to 40 hours", zoominfo: "⚠️ Hours + setup" },
                    { feature: "Starting price", webleads: "✅ $24/mo", manual: "✅ Free", zoominfo: "❌ $15,000+/year" },
                    { feature: "Best for", webleads: "Local B2B agency clients", manual: "One-off research", zoominfo: "Enterprise sales teams" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}>
                      <td className="p-4 sm:p-5 font-semibold text-gray-700">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-center bg-brand-primary/5 border-x-2 border-brand-primary/20 font-medium text-gray-800">{row.webleads}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.manual}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.zoominfo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-5 sm:p-6 border-t bg-gray-50">
              <p className="text-xs sm:text-sm text-gray-500 text-center max-w-2xl mx-auto">
                WebLeads Starter ($24/mo) includes 1 search/day, 800 results/search, 500 people enrichments and 3,000 email verifications. ZoomInfo pricing is enterprise contract-based, typically $15,000+ per year.
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
            title: "Search business type and city",
            description: "Type a business type and city. We search Google Maps live. No stale database.",
            icon: <Search className="h-6 w-6" />
          },
          {
            number: 2,
            title: "Get every matching business with contact data",
            description: "Name, phone, website, Google rating, review count. Filter to find your best-fit prospects.",
            icon: <Building2 className="h-6 w-6" />
          },
          {
            number: 3,
            title: "Find the owner name and verified email",
            description: "Run people enrichments to get the owner name, role, and SMTP-verified direct email. No info@ addresses.",
            icon: <Users className="h-6 w-6" />
          },
          {
            number: 4,
            title: "Export and send your campaign",
            description: "Export to CSV and import into any cold email tool. Done.",
            icon: <Download className="h-6 w-6" />
          }
        ]}
        title="From Search Setup to Outreach-Ready List"
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
              Built for the Agency Prospecting Workflow
            </h2>
          </div>
          <FeaturesGrid
            features={[
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Search Any Niche and City",
                description: "Type any business type and any city. WebLeads returns every matching business from Google Maps with full contact data."
              },
              {
                icon: <Search className="h-8 w-8" />,
                title: "Filter by Rating and Reviews",
                description: "Sort prospects by Google rating or review count. Find businesses that need reputation work or prioritize established ones worth pitching."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Owner Name and Role",
                description: "People enrichment finds the decision maker for each business. Name, role, and verified direct email in one click."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "SMTP Email Verification",
                description: "Every email is verified via SMTP before delivery. Bounce rates under 3%. Your sender reputation stays clean."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Fresh Data on Every Search",
                description: "Data is pulled from Google Maps at search time, not from a database. New businesses show up. Closed ones disappear."
              },
              {
                icon: <Download className="h-8 w-8" />,
                title: "CSV Export at Every Plan",
                description: "Export your full list to CSV or Excel. Import into any cold email tool. No extra steps, no additional fees."
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
        title="Who Uses WebLeads for Agency Prospecting"
        subtitle="Marketing agencies and freelancers selling services to local businesses"
        cases={[
          {
            icon: <Building2 className="h-8 w-8" />,
            title: "SEO Agencies",
            description: "Search for restaurants, contractors, or gyms in any city. Find owners who have a website but no SEO presence. Export a verified list and start outreach the same day.",
            benefits: ["Any niche and city", "Filter by review count", "Owner emails verified"]
          },
          {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Paid Ads Agencies",
            description: "Find local businesses already spending money on ads but not getting results. Target by industry and location. Reach the owner directly with a specific pitch.",
            benefits: ["Google Maps live data", "Decision maker contact", "Fresh data every search"]
          },
          {
            icon: <Search className="h-8 w-8" />,
            title: "Web Design Freelancers",
            description: "Find businesses with outdated websites or no web presence. Prioritize by review count to find established businesses with budget. Start at $24/mo.",
            benefits: ["Starts at $24/mo", "800 results per search", "CSV export included"]
          },
          {
            icon: <Users className="h-8 w-8" />,
            title: "Full-Service Marketing Agencies",
            description: "Build prospect lists across multiple verticals in one tool. Run separate searches by niche and city. Get owner contacts for each segment.",
            benefits: ["Multiple searches per day", "Up to 2,500 results per search", "People enrichments included"]
          }
        ]}
      />

      {/* FAQ Section */}
      <FAQSection
        title="Marketing Agency Leads: Common Questions"
        faqs={[
          {
            question: "How does WebLeads help marketing agencies find clients?",
            answer: "WebLeads searches Google Maps for any business type in any city and returns every matching business with contact data. Setting up a search takes about 5 minutes. Results and enrichments are delivered within 1-2 hours depending on list size. Export to CSV and plug into your cold email tool."
          },
          {
            question: "What kind of businesses can I find with WebLeads?",
            answer: "Any business with a Google Maps presence: restaurants, contractors, gyms, dental practices, law firms, salons, HVAC companies, real estate agencies, and hundreds of other local categories. If it shows up on Google Maps, WebLeads can find it."
          },
          {
            question: "How does WebLeads find decision maker emails for local businesses?",
            answer: "We discover the business website domain, generate likely email patterns (firstname@, first.last@, firstname.lastname@), then SMTP-verify each until one confirms. You get a working email, not a guess. Most local business owners are not on LinkedIn, so this method produces far better coverage than LinkedIn-based tools."
          },
          {
            question: "How is this different from buying a business contact list?",
            answer: "Purchased lists are built from databases that decay over time. Businesses close, owners change, and emails go invalid. WebLeads pulls live data from Google Maps on every search, so you get current businesses with current contact info. Bounce rates on WebLeads lists are typically under 3%, compared to 15% to 20% for purchased lists."
          },
          {
            question: "Can I filter prospects by location or industry?",
            answer: "Yes. Every search is defined by business type and location. You can run separate searches for different niches (gyms in Chicago, restaurants in Austin) and filter results by Google rating or review count within each search. This lets you prioritize prospects by fit before you start outreach."
          },
          {
            question: "What cold email tool should I use with WebLeads?",
            answer: "WebLeads exports to CSV, which imports into any cold email tool. Commonly used options: Instantly, Smartlead, Lemlist, and Mailshake. WebLeads handles the list building and email verification. The cold email tool handles the sending and follow-up sequences."
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
                Stop Spending Hours Building Prospect Lists by Hand
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
                WebLeads finds local businesses in any city with verified owner emails. Built for marketing agencies. Starts at $24/month.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2 mb-8 sm:mb-12">
                <Button
                  size="lg"
                  asChild
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border border-white/10 w-full sm:w-auto"
                >
                  <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                    Find My First 1,000 Local Leads
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
                  <span>Fresh data from Google Maps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Owner emails verified via SMTP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center space-y-3">
          <p className="text-gray-600 text-sm">
            Want a detailed guide on agency prospecting with cold outreach?{" "}
            <Link href="/blog/marketing-agency-leads" className="text-brand-primary underline hover:text-brand-primary/80">
              Read our marketing agency leads guide →
            </Link>
          </p>
          <p className="text-gray-500 text-sm">
            Also useful:{" "}
            <Link href="/email-finder-tools" className="text-brand-primary underline hover:text-brand-primary/80">
              Email finder tools
            </Link>
            {" · "}
            <Link href="/google-maps-scraper" className="text-brand-primary underline hover:text-brand-primary/80">
              Google Maps scraper
            </Link>
            {" · "}
            <Link href="/local-lead-generation" className="text-brand-primary underline hover:text-brand-primary/80">
              Lead generation software
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
