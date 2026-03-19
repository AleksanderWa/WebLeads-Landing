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

export const metadata: Metadata = {
  title: "Best Hunter.io Alternatives in 2026 (Free & Paid) | WebLeads",
  description: "Looking for Hunter.io alternatives? WebLeads finds local businesses AND their decision maker emails from scratch. No domain required. Free to try, starts at $24/mo.",
  keywords: "hunter.io alternatives, hunter.io alternative, hunter alternative, free hunter.io alternative, email finder alternative, local lead generation, google maps leads, decision maker emails",
  openGraph: {
    title: "Best Hunter.io Alternatives in 2026 (Free & Paid) | WebLeads",
    description: "Looking for Hunter.io alternatives? WebLeads finds local businesses AND their decision maker emails from scratch. No domain required. Free to try, starts at $24/mo.",
    url: "https://www.webleads.site/alternatives/hunter-io-alternatives",
    type: "website",
    images: [{
      url: "/images/hunter-alternative-og.jpg",
      width: 1200,
      height: 630,
      alt: "Best Hunter.io Alternatives. WebLeads for Local Lead Generation"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Best Hunter.io Alternatives in 2026 (Free & Paid) | WebLeads",
    description: "Hunter.io needs a domain to find emails. WebLeads finds local businesses AND their decision maker emails from scratch.",
    images: ["/images/hunter-alternative-og.jpg"]
  },
  alternates: {
    canonical: "https://www.webleads.site/alternatives/hunter-io-alternatives"
  }
}

export default function HunterAlternativePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "WebLeads. Hunter.io Alternative for Local Lead Generation",
    "description": "WebLeads finds local businesses on Google Maps with verified emails, phone numbers, and decision maker names without needing to know the domain upfront. Built for agencies and freelancers doing local prospecting.",
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
        "name": "Is WebLeads better than Hunter.io for local lead gen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For local prospecting, yes. Hunter.io is a domain-based email finder. You have to know the company's domain before you can search. WebLeads starts from scratch: type a business type and city, and it finds every matching business plus their decision maker emails automatically."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use both Hunter.io and WebLeads together?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Hunter.io is great if you already have a list of company domains and want to find all emails at those companies. WebLeads is for when you need to build the list from zero. Find businesses, get contacts, and export in one workflow."
        }
      },
      {
        "@type": "Question",
        "name": "How does WebLeads find decision maker emails without knowing the domain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebLeads discovers the business website from Google Maps, extracts the domain, generates likely email patterns (john@, jsmith@, john.smith@), then SMTP-verifies each until one confirms. The whole pipeline runs in one click. No domain lookup required upfront."
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
              Hunter.io Alternative · Built for Local Prospecting
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight tracking-tight">
              Hunter.io Needs a Domain. Your Prospects Are Local Businesses You Haven&apos;t Found Yet.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Hunter.io needs a domain before it can find anything. WebLeads starts from scratch: type a business type and city, get every matching local business with owner names, phone numbers, and verified emails. No domain required.
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
              ✓ No credit card required &nbsp; ✓ No domain needed &nbsp; ✓ Decision makers with verified emails
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
              The Hunter.io Problem for Local Prospecting
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "You Need the Domain First",
                body: "Hunter.io is a domain lookup tool. You enter a domain, it returns emails. To prospect local, you must find domains first before Hunter.io helps."
              },
              {
                title: "No Local Business Discovery",
                body: "Hunter.io enriches companies you already know. It can't build a list of plumbers in Chicago from scratch."
              },
              {
                title: "Credits Add Up Fast",
                body: "Hunter.io charges €49/month for 2,000 credits. Each lookup consumes credits. Local prospecting at scale gets expensive fast with no discovery included."
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
                WebLeads finds businesses and their emails in one search.
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                Type business type and city. WebLeads finds every matching business and runs email discovery automatically. Owner name, role, and verified email. Zero to outreach-ready in one search.
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
                { icon: <Search className="h-6 w-6" />, stat: "Discovery built-in", label: "Find businesses and contacts in one workflow." },
                { icon: <Users className="h-6 w-6" />, stat: "Decision makers", label: "Owner name, role, and verified email. Not just info@." },
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
              WebLeads vs Hunter.io vs Other Email Finders
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Hunter.io is the right tool for domain-based email lookup. For local business prospecting from scratch, here is how the tools compare.
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
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Hunter.io</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Snov.io</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Lusha</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Local business discovery", webleads: "✅ Purpose-built", hunter: "❌ Not available", snov: "❌ Not available", lusha: "❌ Not available" },
                    { feature: "Finds businesses from scratch", webleads: "✅ Type + city → list", hunter: "❌ Domain required first", snov: "❌ Domain required first", lusha: "❌ LinkedIn required" },
                    { feature: "Map radius search", webleads: "✅ Draw on map", hunter: "❌ Not available", snov: "❌ Not available", lusha: "❌ Not available" },
                    { feature: "Data freshness", webleads: "✅ Real-time", hunter: "✅ Real-time lookup", snov: "✅ Real-time lookup", lusha: "⚠️ Database" },
                    { feature: "Decision maker discovery", webleads: "✅ Name + role + email", hunter: "⚠️ Email patterns only", snov: "⚠️ Email patterns only", lusha: "⚠️ LinkedIn titles" },
                    { feature: "Verified emails", webleads: "✅ SMTP verified", hunter: "✅ Built-in", snov: "✅ Built-in", lusha: "⚠️ Confidence score" },
                    { feature: "Phone numbers", webleads: "✅ Included", hunter: "❌ Not included", snov: "⚠️ Limited", lusha: "⚠️ Limited" },
                    { feature: "Starting price (March 2026)", webleads: "✅ $24/mo", hunter: "⚠️ €49/mo", snov: "✅ $39/mo", lusha: "❌ $49.90/mo" },
                    { feature: "Best for", webleads: "Local B2B from scratch", hunter: "Domain email lookup", snov: "Domain email lookup", lusha: "LinkedIn enrichment" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}>
                      <td className="p-4 sm:p-5 font-semibold text-gray-700">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-center bg-brand-primary/5 border-x-2 border-brand-primary/20 font-medium text-gray-800">{row.webleads}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.hunter}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.snov}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.lusha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-5 sm:p-6 border-t bg-gray-50">
              <p className="text-xs sm:text-sm text-gray-500 text-center max-w-2xl mx-auto">
                Note: WebLeads&apos; starting price ($24/mo Starter) includes 1 search/day, 800 results/search, 500 Decision Maker email unlocks and 3,000 email verifications per month. Hunter.io&apos;s Starter plan at €49/mo gives 2,000 credits for domain lookups but no business discovery workflow.
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
            description: "No domain needed. WebLeads searches Google Maps and returns every matching business.",
            icon: <Search className="h-6 w-6" />
          },
          {
            number: 2,
            title: "Get full contact profiles",
            description: "Each result includes name, address, phone, email, reviews, and owner details. No manual domain lookup.",
            icon: <Users className="h-6 w-6" />
          },
          {
            number: 3,
            title: "Unlock verified decision maker emails",
            description: "Click to unlock. WebLeads discovers the domain, generates patterns, and SMTP-verifies each. Confirmed email, not a guess.",
            icon: <Shield className="h-6 w-6" />
          },
          {
            number: 4,
            title: "Export and send",
            description: "Download CSV. Import into your cold email tool. Ready to send.",
            icon: <Download className="h-6 w-6" />
          }
        ]}
        title="From Zero to Outreach-Ready in One Workflow"
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
              What Hunter.io Can&apos;t Do for Local
            </h2>
          </div>
          <FeaturesGrid
            features={[
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Business Discovery First",
                description: "Hunter.io finds emails at known companies. WebLeads finds businesses and emails from business type and location."
              },
              {
                icon: <Search className="h-8 w-8" />,
                title: "Google Maps as the Source",
                description: "Local businesses live on Google Maps, not aging databases. WebLeads pulls fresh data every search."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Owner Name and Role Included",
                description: "WebLeads extracts the decision maker's name and role. You know who you're emailing before hitting send."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "SMTP Verification Built-In",
                description: "Every email is SMTP-verified before you see it. Hunter.io verifies emails you provide. WebLeads finds and verifies in one step."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Phone Numbers Included",
                description: "Every result includes phone from Google Maps. Hunter.io is email-only. WebLeads gives email and phone together."
              },
              {
                icon: <Download className="h-8 w-8" />,
                title: "One-Click CSV Export",
                description: "Export businesses, phones, emails, and owner names in one CSV. No stitching tools together."
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
        title="Who Switches from Hunter.io to WebLeads"
        subtitle="Built for agencies and freelancers who need to find local prospects from scratch"
        cases={[
          {
            icon: <Users className="h-8 w-8" />,
            title: "Marketing Agencies",
            description: "You pitch local businesses on SEO, ads, web work. Hunter.io can't find them, only enrich known ones. WebLeads finds every restaurant owner in Miami.",
            benefits: ["Search any niche + city", "Owner name and role included", "Fresh data per run"]
          },
          {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "SEO & Web Design Freelancers",
            description: "You need fresh prospects daily. Hunter.io requires a domain per company. WebLeads gives hundreds of leads with no upfront domain knowledge.",
            benefits: ["Starts at $24/mo", "No domain required", "CSV export included"]
          },
          {
            icon: <Search className="h-8 w-8" />,
            title: "Lead Generation Specialists",
            description: "You build lists by niche and city. Hunter.io is a lookup tool. WebLeads was built exactly for this workflow.",
            benefits: ["Up to 2,500 results per search", "Batch export", "Decision maker data"]
          },
          {
            icon: <Building2 className="h-8 w-8" />,
            title: "Cold Email Agencies",
            description: "Bounces damage sender scores. WebLeads SMTP-verifies every email before delivery. Fresh data. No guessing.",
            benefits: ["SMTP-verified emails", "Fresh per-search data", "Transparent sourcing"]
          }
        ]}
      />

      {/* Blog Link */}
      <section className="py-6 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm sm:text-base text-gray-500">
            Want a deeper comparison of Hunter.io, Apollo, Snov.io, and Voila Norbert?{" "}
            <Link href="/blog/hunter-io-alternative" className="text-brand-primary underline underline-offset-2 hover:text-brand-primary-hover">
              Read the full Hunter.io alternatives guide.
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Hunter.io vs WebLeads: Common Questions"
        faqs={[
          {
            question: "Is WebLeads better than Hunter.io for local lead gen?",
            answer: "For local prospecting from scratch, yes. Hunter.io is a domain email finder. You need to know the domain first. WebLeads starts with business type and city, finds every matching business, and discovers emails automatically."
          },
          {
            question: "Can I use both Hunter.io and WebLeads?",
            answer: "Yes. Hunter.io enriches known companies. WebLeads builds lists from zero. Many agencies use both for different workflows."
          },
          {
            question: "How does WebLeads find decision maker emails without knowing the domain?",
            answer: "WebLeads discovers the website from Google Maps, extracts the domain, generates email patterns, then SMTP-verifies each. The whole pipeline runs in one click."
          },
          {
            question: "What does the free Discover tier give me?",
            answer: "Two real searches, up to 500 results each (1,000 businesses). Plus 100 Decision Maker unlocks and 200 email verifications. Enough to test before paying."
          },
          {
            question: "Why is WebLeads cheaper than Hunter.io at €49/mo?",
            answer: "WebLeads Starter is $24/mo with business discovery included. Hunter.io's €49/mo only provides 2,000 credits for domain lookups with no discovery workflow."
          },
          {
            question: "Does WebLeads work outside the US?",
            answer: "Yes. Google Maps is global. WebLeads works anywhere with Google Maps coverage (UK, Canada, Australia, and beyond)."
          }
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
                Stop Looking Up Domains One at a Time
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
                Find local businesses with verified owner emails. No domain required. Starts at $24/month. Cancel anytime.
              </p>
              <p className="text-sm text-blue-100/60 mb-8 sm:mb-12">
                Want a detailed comparison of all alternatives? Read the{" "}
                <Link href="/blog/hunter-io-alternative" className="underline text-blue-100/80 hover:text-white transition-colors">
                  Hunter.io alternatives guide
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
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>No domain required upfront</span>
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

      <Footer />
    </main>
  )
}
