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
  title: "Local Lead Generation Tool | Find Local Business Leads | WebLeads",
  description: "Find local business leads with verified decision maker emails. Fresh data from Google Maps, not a stale database. Built for agencies and freelancers. Start free.",
  keywords: "local lead generation, local business leads, how to generate local leads, local lead gen tools",
  openGraph: {
    title: "Local Lead Generation Tool | Find Local Business Leads | WebLeads",
    description: "Find local business leads with verified decision maker emails. Fresh data from Google Maps, not a stale database. Built for agencies and freelancers. Start free.",
    url: "https://www.webleads.site/local-lead-generation",
    type: "website",
    images: [
      {
        url: "/images/local-lead-generation-og.jpg",
        width: 1200,
        height: 630,
        alt: "Local Lead Generation Tool by WebLeads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Local Lead Generation Tool | Find Local Business Leads | WebLeads",
    description: "Find local business leads with verified decision maker emails. Fresh data from Google Maps, not a stale database.",
    images: ["/images/local-lead-generation-og.jpg"],
  },
  alternates: {
    canonical: "https://www.webleads.site/local-lead-generation",
  },
}

export default function LocalLeadGenerationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "WebLeads: Local Lead Generation Tool",
    description:
      "Find local business leads on Google Maps with verified decision maker emails. Fresh data collected on every search. Built for agencies, freelancers, and cold email teams who sell to local businesses.",
    brand: {
      "@type": "Brand",
      name: "WebLeads",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "199",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is local lead generation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local lead generation is the process of finding businesses in a specific city or area and collecting their contact information for outreach. It typically means finding business name, address, phone number, email, and the name of the person who makes buying decisions. WebLeads automates this using Google Maps data and email discovery, so you get a ready-to-use list instead of spending hours building one manually.",
        },
      },
      {
        "@type": "Question",
        name: "How does WebLeads find local business leads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You type a business type and location (for example, plumbers in Austin) and WebLeads searches Google Maps in real time. Every matching business is returned with its name, address, phone, email, website, reviews, and social profiles. To get the decision maker email, click people enrichment: WebLeads finds the business website domain, generates email patterns, and SMTP-verifies each one until a working email is confirmed.",
        },
      },
      {
        "@type": "Question",
        name: "Does WebLeads work outside the US?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WebLeads works anywhere Google Maps has coverage, which is most of the world. UK, Canada, Australia, and other countries are fully supported. Most current users are based in the US, but the tool works globally.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in the free plan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The free Discover plan gives you 2 lifetime searches with up to 10 results, plus 10 people enrichments. Limits never reset, but it is enough to run a real test before committing to a paid plan. No credit card required.",
        },
      },
      {
        "@type": "Question",
        name: "How is WebLeads different from Apollo or ZoomInfo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apollo and ZoomInfo are built for enterprise B2B sales using LinkedIn as a data source. Most local business owners (plumbers, dentists, contractors, restaurant owners) are not on LinkedIn, so coverage for local businesses is near zero. WebLeads uses Google Maps, which is where local businesses actually live. Data is collected fresh on each search, not pulled from a database that was built months ago.",
        },
      },
      {
        "@type": "Question",
        name: "Can I export leads to my CRM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Export to CSV or Excel from any plan. Import into any CRM that accepts CSV files, including HubSpot, Salesforce, Pipedrive, and Instantly. Export is available at every plan level, including Discover.",
        },
      },
    ],
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
              Built for Local Lead Generation
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight tracking-tight">
              Local Lead Generation Built for Local Business
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              WebLeads finds local businesses on Google Maps with verified decision maker emails. Built for agencies, freelancers, and cold email teams who sell to local businesses.
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
                <Link href="#pricing">See Pricing</Link>
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-gray-600">
              ✓ No credit card required &nbsp; ✓ Fresh data &nbsp; ✓ Decision makers with verified emails
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
              The Problem With Most Lead Gen Tools
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Stale Databases",
                body: "Most tools sell you data collected months ago:",
                bullets: [
                  "Businesses close, people move on, emails go dead",
                  "High bounce rates damage your sender reputation",
                  "You pay for a list that was outdated before you downloaded it",
                ],
              },
              {
                title: "Wrong Data Source",
                body: "Apollo, ZoomInfo, and similar tools are built on LinkedIn:",
                bullets: [
                  "Most local owners (plumbers, dentists, contractors) are not on LinkedIn",
                  "Local business coverage is near zero",
                  "Data that does exist is inferred, not verified",
                ],
              },
              {
                title: "Manual Work That Does Not Scale",
                body: "Copying from Google Maps one by one breaks down fast:",
                bullets: [
                  "Works for 10 leads, falls apart at 100",
                  "No shortcut to finding the owner's email",
                  "Hours of research per list — time you could spend on outreach",
                ],
              },
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
                WebLeads is built for local.
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                Type a business type and city. WebLeads searches Google Maps in real time and returns every matching business with full contact data. No manual work. No stale database. One search gives you a list that is ready to use.
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
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  stat: "Real time data",
                  label: "Collected fresh on every search, not pulled from a database built months ago",
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  stat: "Decision makers",
                  label: "Full contact profiles with name, role, and verified email for local business owners",
                },
                {
                  icon: <MapPin className="h-6 w-6" />,
                  stat: "Map radius search",
                  label: "Define a radius on the map and search exactly the area you want to cover",
                },
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
        title="From Search to Outreach in Minutes"
        steps={[
          {
            number: 1,
            title: "Type business type and city",
            description:
              "Enter a business type and city, or define a radius on the map. WebLeads searches Google Maps in real time across your chosen area.",
            icon: <Search className="h-6 w-6" />,
          },
          {
            number: 2,
            title: "Get every matching business",
            description:
              "Every result includes business name, address, phone, email, reviews, and social profiles. All collected fresh on this search.",
            icon: <Building2 className="h-6 w-6" />,
          },
          {
            number: 3,
            title: "Unlock decision maker name and email",
            description:
              "Click people enrichment on any business. WebLeads finds the owner or manager name, role, and SMTP-verified direct email.",
            icon: <Users className="h-6 w-6" />,
          },
          {
            number: 4,
            title: "Export and start outreach",
            description:
              "Download as CSV or Excel and import into your cold email tool. Real contacts, no bounces, ready to send.",
            icon: <Download className="h-6 w-6" />,
          },
        ]}
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
                role: "Growth Advisor, US",
              },
              {
                quote:
                  "Before WebLeads it took me plenty of time and effort. Now I am just a few clicks away from that result.",
                name: "Market Researcher",
                role: "India",
              },
              {
                quote: "Hands free, accurate data without any effort at a great price.",
                name: "Farhan",
                role: "India",
              },
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
              What Local Lead Generation Actually Requires
            </h2>
          </div>
          <FeaturesGrid
            features={[
              {
                icon: <Search className="h-8 w-8" />,
                title: "Real time Google Maps data",
                description:
                  "Not a database. Every search goes directly to Google Maps and collects fresh results. No stale data, no outdated contacts.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Decision maker discovery",
                description:
                  "Get the name, role, and verified direct email of the owner or manager. Not a generic info@ address.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "SMTP email verification",
                description:
                  "Every email is verified via SMTP before it reaches you. Bounces damage your sender reputation. You will not get bounces from WebLeads.",
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Map radius search",
                description:
                  "Define your search area by drawing a radius on the map. Search exactly the territory you cover.",
              },
              {
                icon: <Download className="h-8 w-8" />,
                title: "Instant CSV and Excel export",
                description:
                  "Export your full list in one click. Import into any cold email tool or CRM. Included at every plan level.",
              },
              {
                icon: <Building2 className="h-8 w-8" />,
                title: "Works anywhere Google Maps has coverage",
                description:
                  "Search any city in the US, UK, Canada, Australia, or anywhere else Google Maps lists local businesses.",
              },
            ]}
          />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              WebLeads vs Other Local Lead Gen Tools
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Most tools were not built for local. Here is how they compare.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 bg-gray-50">
                    <th className="p-4 sm:p-5 text-gray-700 font-semibold min-w-[180px]">Feature</th>
                    <th className="p-4 sm:p-5 text-center bg-brand-primary/5 border-x-2 border-brand-primary/20 min-w-[130px] border-t-4 border-t-brand-primary">
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-brand-primary text-base sm:text-lg">WebLeads</span>
                        <span className="text-xs text-brand-accent font-normal">Built for Local</span>
                      </div>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Apollo</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[140px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">D7 Lead Finder</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[130px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Outscraper</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Local business search",
                      webleads: "✅ Purpose-built",
                      apollo: "⚠️ Thin coverage",
                      d7: "✅ Yes",
                      outscraper: "✅ Yes",
                    },
                    {
                      feature: "Map radius search",
                      webleads: "✅ Define on map",
                      apollo: "❌ No",
                      d7: "❌ No",
                      outscraper: "❌ No",
                    },
                    {
                      feature: "Real time data",
                      webleads: "✅ Every search",
                      apollo: "❌ Cached database",
                      d7: "✅ Google Maps",
                      outscraper: "✅ Google Maps",
                    },
                    {
                      feature: "Decision maker emails",
                      webleads: "✅ Name, role, email",
                      apollo: "⚠️ LinkedIn only",
                      d7: "❌ Not included",
                      outscraper: "❌ Not included",
                    },
                    {
                      feature: "Built in email verification",
                      webleads: "✅ SMTP verified",
                      apollo: "✅ Yes",
                      d7: "❌ Not included",
                      outscraper: "❌ Not included",
                    },
                    {
                      feature: "Starting price",
                      webleads: "✅ $24/mo",
                      apollo: "❌ $59/mo",
                      d7: "⚠️ $26/mo",
                      outscraper: "⚠️ Pay per use",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}
                    >
                      <td className="p-4 sm:p-5 font-semibold text-gray-700">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-center bg-brand-primary/5 border-x-2 border-brand-primary/20 font-medium text-gray-800">
                        {row.webleads}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.apollo}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.d7}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.outscraper}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-5 sm:p-6 border-t bg-gray-50">
              <p className="text-xs sm:text-sm text-gray-500 text-center max-w-2xl mx-auto">
                WebLeads Starter ($24/mo) includes 1 search per day, 800 results per search, 500 people enrichments and 3,000 email verifications per month. Apollo Basic starts at $59/user/mo with 2,500 credits on a per-use model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <UseCasesGrid
        title="Built for People Who Sell to Local Businesses"
        subtitle="Not a generic sales tool. Not an enterprise platform. Built for the people who prospect local."
        cases={[
          {
            icon: <Building2 className="h-8 w-8" />,
            title: "Marketing Agencies",
            description:
              "You pitch local businesses on SEO, Google Ads, and web design. You need fresh lists by niche and city, not a database that was last updated six months ago.",
            benefits: [
              "Search any business type in any city",
              "Owner name and role included",
              "Fresh data on every run",
            ],
          },
          {
            icon: <Users className="h-8 w-8" />,
            title: "SEO and Web Design Freelancers",
            description:
              "You are a one-person shop. You need a steady flow of new prospects without spending your working day on manual research.",
            benefits: [
              "Starts at $24/mo",
              "Up to 800 results per search",
              "CSV export included",
            ],
          },
          {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Lead Gen Specialists",
            description:
              "Your job is building lists by niche and geography. WebLeads was built for this workflow from the start.",
            benefits: [
              "Up to 2,500 results per search on Scale",
              "Decision maker data included",
              "Batch export to CSV or Excel",
            ],
          },
          {
            icon: <Shield className="h-8 w-8" />,
            title: "Cold Email Agencies",
            description:
              "Bad data hurts your sender reputation. WebLeads gives you SMTP-verified emails collected fresh on every search.",
            benefits: [
              "SMTP verified emails only",
              "Fresh data per search",
              "No bounces from stale lists",
            ],
          },
        ]}
      />

      {/* Pricing Section */}
      <div id="pricing" className="scroll-mt-20">
        <PricingSection />
      </div>

      {/* FAQ Section */}
      <FAQSection
        title="Local Lead Generation Questions"
        faqs={[
          {
            question: "What is local lead generation?",
            answer:
              "Local lead generation is the process of finding businesses in a specific city or area and collecting their contact information for outreach. It typically means finding the business name, address, phone number, email, and the person who makes buying decisions. WebLeads automates this using Google Maps data and email discovery, so you get a ready-to-use list instead of spending hours building one manually.",
          },
          {
            question: "How does WebLeads find local business leads?",
            answer:
              "You type a business type and location (for example, plumbers in Austin) and WebLeads searches Google Maps in real time. Every matching business is returned with its name, address, phone, email, website, reviews, and social profiles. To get the decision maker email, click people enrichment: WebLeads finds the business website domain, generates email patterns, and SMTP-verifies each one until a working email is confirmed.",
          },
          {
            question: "Does WebLeads work outside the US?",
            answer:
              "Yes. WebLeads works anywhere Google Maps has coverage, which includes most of the world. UK, Canada, Australia, and other countries are fully supported. Most current users are based in the US, but the tool is not limited to it.",
          },
          {
            question: "What is included in the free plan?",
            answer:
              "The free Discover plan gives you 2 lifetime searches with up to 10 results, plus 10 people enrichments. Limits never reset, but it is enough to run a real test and see the data quality before committing to a paid plan. No credit card required.",
          },
          {
            question: "How is WebLeads different from Apollo or ZoomInfo?",
            answer:
              "Apollo and ZoomInfo are built for enterprise B2B sales using LinkedIn as a primary data source. Most local business owners (plumbers, dentists, contractors) are not on LinkedIn, so coverage for local is near zero. WebLeads uses Google Maps, which is where local businesses actually exist. Data is collected fresh on each search, not pulled from a database that was built months ago and decays over time.",
          },
          {
            question: "Can I export leads to my CRM?",
            answer:
              "Yes. Export to CSV or Excel from any plan, including the free Discover tier. Import into any CRM that accepts CSV files, such as HubSpot, Salesforce, Pipedrive, or Instantly. No extra steps required.",
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
                Start Finding Local Leads Today
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
                Sign up free and run your first search in under two minutes. No database to wait for. No setup required.
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
                  <Link href="#pricing">See Pricing</Link>
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
                  <span>Fresh data</span>
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
