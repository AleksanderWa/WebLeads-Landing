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
  title: "Real Estate Agent Email List - Find Verified Contacts | WebLeads",
  description: "Find real estate agents and brokers with verified emails in real time. Search by location, get decision maker names and verified professional emails. No stale databases.",
  keywords: "real estate agent email list, real estate agent leads, broker email list, real estate prospecting",
  openGraph: {
    title: "Real Estate Agent Email List - Find Verified Contacts | WebLeads",
    description: "Find real estate agents and brokers with verified emails in real time. Search by location, get decision maker names and verified professional emails. No stale databases.",
    url: "https://www.webleads.site/real-estate-agent-email-list",
    type: "website",
    images: [{
      url: "/images/real-estate-agent-email-list-og.jpg",
      width: 1200,
      height: 630,
      alt: "Real Estate Agent Email List - WebLeads"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Real Estate Agent Email List - Find Verified Contacts | WebLeads",
    description: "Find real estate agents and brokers with verified emails in real time. Search by location, get decision maker names and verified professional emails.",
    images: ["/images/real-estate-agent-email-list-og.jpg"]
  },
  alternates: {
    canonical: "https://www.webleads.site/real-estate-agent-email-list"
  }
}

export default function RealEstateAgentEmailListPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "WebLeads: Real Estate Agent Email List",
    "description": "WebLeads finds real estate agents and brokers with verified emails and decision maker information from Google Maps and online directories. Real time data, not a stale database.",
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
        "name": "How do you find real estate agent email addresses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebLeads searches Google Maps and online directories for real estate offices and brokerages in your target location. Each result includes the business profile. We then discover the office website, find likely email patterns for agents and brokers, and SMTP-verify each until we confirm a working email. You get verified direct emails, not guesses."
        }
      },
      {
        "@type": "Question",
        "name": "Is it legal to use a real estate agent email list for cold outreach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Real estate agents are business professionals and cold outreach is a standard prospecting practice in the industry. Your outreach should follow CAN-SPAM rules (include unsubscribe options, your business address, and clearly identify the message as marketing). WebLeads provides verified contacts, and it is up to you to follow applicable email laws."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use a real estate agent email list for recruiting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many teams use WebLeads to find agents in competing brokerages for recruiting campaigns. Search by market, get all active agents with verified email addresses, then reach out directly with your recruiting pitch."
        }
      },
      {
        "@type": "Question",
        "name": "What information comes with each real estate agent contact?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each result includes business name, address, phone, website, Google rating, review count, Google profile link, and the agent or broker name with role. When you add people enrichment, we verify their professional email address via SMTP. You get direct verified emails, not main office lines."
        }
      },
      {
        "@type": "Question",
        "name": "How fresh is the data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebLeads searches Google Maps and online directories in real time on every search. Data is collected at search time, not from a database built months ago. Emails are SMTP-verified immediately before delivery, so you get current, working contact information."
        }
      },
      {
        "@type": "Question",
        "name": "Can I filter agents by market, specialization, or activity level?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebLeads searches by business type and location radius. You control the search parameters. You can search for brokerages in a specific city, then get all agent contacts. For more granular filtering (e.g., agents specializing in commercial property), you would manually review results or sort by reviews and activity."
        }
      },
      ...pricingLinkedFaqs,
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
              Real-Time Agent Discovery · Verified Emails
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight tracking-tight">
              Find Real Estate Agents and Brokers with Verified Emails Instantly
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Stop waiting for stale lists. WebLeads searches Google Maps in real time and returns agents and brokers in your target location with verified decision maker emails.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-6 sm:mb-8">
              <Button
                size="lg"
                asChild
                className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl w-full sm:w-auto"
              >
                <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                  Find Agents in Your Market
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
              ✓ No credit card required &nbsp; ✓ Fresh data from Google Maps &nbsp; ✓ Decision makers with verified emails
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
              Why Manual Lists and Old Databases Fail
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Emails Go Stale Within Months",
                body: "Pre-compiled lists are outdated the day you buy them. Agents change brokerages, retire, or go inactive. By month three, 20% of emails bounce. You waste time on dead contacts."
              },
              {
                title: "Manual Research Takes Weeks",
                body: "Scraping from Zillow, Realtor.com, and MLS by hand takes days to get 200 agents. If you need lists in multiple markets, the time investment balloons. Outsourcing costs money too."
              },
              {
                title: "No Way to Verify Who You Are Contacting",
                body: "Old databases list office emails, not decision makers. You send to a general mailbox and your message gets lost. You need agent names, titles, and direct emails to actually reach people."
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
                WebLeads finds agents on demand.
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                Search for agents and brokers in any city. WebLeads pulls fresh data from Google Maps and online directories in real time, then enriches each result with decision maker names, roles, and verified professional emails.
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
                { icon: <TrendingUp className="h-6 w-6" />, stat: "Real time", label: "Data collected fresh from Google Maps on every search" },
                { icon: <Users className="h-6 w-6" />, stat: "Decision makers", label: "Agent names, titles, and verified professional emails" },
                { icon: <Shield className="h-6 w-6" />, stat: "Verified emails", label: "SMTP-verified to prevent bounces and wasted outreach" },
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
              WebLeads vs Traditional Methods
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              See how instant discovery stacks up against manual research and pre-compiled lists.
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
                        <span className="text-xs text-brand-accent font-normal">Real-time</span>
                      </div>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">Manual Research</span>
                    </th>
                    <th className="p-4 sm:p-5 text-center text-gray-700 min-w-[120px]">
                      <span className="font-bold text-gray-600 text-base sm:text-lg">List Vendors</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Time to compile list", webleads: "✅ 1-2 hours", manual: "❌ Days to weeks", vendor: "✅ Hours" },
                    { feature: "Data freshness", webleads: "✅ Real-time per search", manual: "⚠️ Current when compiled", vendor: "❌ Months old" },
                    { feature: "Email verification", webleads: "✅ SMTP verified", manual: "❌ Not verified", vendor: "⚠️ Limited" },
                    { feature: "Decision maker info", webleads: "✅ Names, titles, verified emails", manual: "⚠️ Office emails only", vendor: "⚠️ Incomplete" },
                    { feature: "Cost", webleads: "✅ $24-199/mo", manual: "⚠️ Your time", vendor: "❌ $200-1000+" },
                    { feature: "Scalability", webleads: "✅ Any market, any niche", manual: "❌ Limited by time", vendor: "✅ Pre-made lists only" },
                    { feature: "Control over targeting", webleads: "✅ Full control (you set search)", manual: "✅ Full control", vendor: "❌ Pre-defined lists" },
                    { feature: "Email accuracy", webleads: "✅ 95%", manual: "⚠️ Varies", vendor: "⚠️ 60-75%" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}>
                      <td className="p-4 sm:p-5 font-semibold text-gray-700">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-center bg-brand-primary/5 border-x-2 border-brand-primary/20 font-medium text-gray-800">{row.webleads}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.manual}</td>
                      <td className="p-4 sm:p-5 text-center text-gray-600">{row.vendor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-5 sm:p-6 border-t bg-gray-50">
              <p className="text-xs sm:text-sm text-gray-500 text-center max-w-2xl mx-auto">
                WebLeads Starter ($24/mo) includes 1 search per day, up to 800 results per search, 500 people enrichments and 3,000 email verifications monthly.
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
            title: "Search agents by city",
            description: "Type your target city and search for real estate offices, brokerages, or agents. WebLeads searches Google Maps and online directories in real time.",
            icon: <Search className="h-6 w-6" />
          },
          {
            number: 2,
            title: "Get full profiles with verified emails",
            description: "Every result includes business name, address, phone, reviews, and decision maker information. Add people enrichment to get verified professional emails.",
            icon: <Users className="h-6 w-6" />
          },
          {
            number: 3,
            title: "Export and reach out",
            description: "Download as CSV or Excel. Import into your cold email tool, CRM, or spreadsheet. You have verified emails ready to send.",
            icon: <Download className="h-6 w-6" />
          },
          {
            number: 4,
            title: "Higher response rates",
            description: "Real contacts with verified emails. No bounces from stale data. Your pitch reaches the right decision maker.",
            icon: <TrendingUp className="h-6 w-6" />
          }
        ]}
        title="From Search to Agent Contact"
      />

      {/* Use Cases */}
      <UseCasesGrid
        title="Who Uses WebLeads for Real Estate Agent Prospecting"
        subtitle="From recruiting to partnership development"
        cases={[
          {
            icon: <Users className="h-8 w-8" />,
            title: "Brokers Recruiting Agents",
            description: "Build a prospect list of agents in competing brokerages in your market. Get their verified emails and reach out with your recruiting pitch.",
            benefits: ["Find agents by city", "Get verified emails", "Target specific markets"]
          },
          {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Teams Building Partnerships",
            description: "Find complementary agents and brokerages for referral partnerships, joint ventures, or collaboration. Real contact info makes partnership outreach simple.",
            benefits: ["Market-specific targeting", "Decision maker emails", "Fresh agent data"]
          },
          {
            icon: <Search className="h-8 w-8" />,
            title: "Real Estate Wholesalers",
            description: "Build a cash buyer list of local real estate investors and agents who buy investment properties. Reach them directly with deal opportunities.",
            benefits: ["Location-based search", "Verified contact info", "Quick list generation"]
          },
          {
            icon: <Building2 className="h-8 w-8" />,
            title: "Real Estate Marketing Agencies",
            description: "Find agents who need marketing services (websites, social media, lead generation). Build prospect lists and pitch your services directly.",
            benefits: ["Niche targeting", "Direct outreach emails", "Scalable list building"]
          }
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
              Everything You Need to Find Agents Fast
            </h2>
          </div>
          <FeaturesGrid
            features={[
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Location-Based Search",
                description: "Search by city or neighborhood. Find all agents and brokerages in your target market. Not limited to a pre-made list."
              },
              {
                icon: <Search className="h-8 w-8" />,
                title: "Google Maps and Online Directories",
                description: "WebLeads pulls from Google Maps, Zillow, Realtor.com, and other sources. You get comprehensive coverage, not a cached database."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Decision Makers with Verified Emails",
                description: "Get agent names, titles, and verified professional emails. Direct email addresses, not office numbers. Ready to send."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "SMTP Email Verification",
                description: "Every email is verified to ensure it exists and accepts mail. No bounces, no wasted outreach, no damaged sender reputation."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Fresh Data on Every Search",
                description: "No stale databases. Data is collected in real time when you search. If an agent left the market last month, you will not waste time contacting them."
              },
              {
                icon: <Download className="h-8 w-8" />,
                title: "Instant CSV Export",
                description: "Download your list into your cold email tool, CRM, or spreadsheet. CSV and Excel formats included at every plan level."
              }
            ]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing" className="scroll-mt-20">
        <PricingSection />
      </div>

      {/* FAQ Section */}
      <FAQSection
        title="Real Estate Agent Email List: Common Questions"
        faqs={[
          {
            question: "How do you find real estate agent email addresses?",
            answer: "WebLeads searches Google Maps and online directories for real estate offices and brokerages in your target location. Each result includes the business profile. We then discover the office website, find likely email patterns for agents and brokers, and SMTP-verify each until we confirm a working email. You get verified direct emails, not guesses."
          },
          {
            question: "Is it legal to use a real estate agent email list for cold outreach?",
            answer: "Yes. Real estate agents are business professionals and cold outreach is a standard prospecting practice in the industry. Your outreach should follow CAN-SPAM rules (include unsubscribe options, your business address, and clearly identify the message as marketing). WebLeads provides verified contacts, and it is up to you to follow applicable email laws."
          },
          {
            question: "Can I use a real estate agent email list for recruiting?",
            answer: "Yes. Many teams use WebLeads to find agents in competing brokerages for recruiting campaigns. Search by market, get all active agents with verified email addresses, then reach out directly with your recruiting pitch."
          },
          {
            question: "What information comes with each real estate agent contact?",
            answer: "Each result includes business name, address, phone, website, Google rating, review count, Google profile link, and the agent or broker name with role. When you add people enrichment, we verify their professional email address via SMTP. You get direct verified emails, not main office lines."
          },
          {
            question: "How fresh is the data?",
            answer: "WebLeads searches Google Maps and online directories in real time on every search. Data is collected at search time, not from a database built months ago. Emails are SMTP-verified immediately before delivery, so you get current, working contact information."
          },
          {
            question: "Can I filter agents by market, specialization, or activity level?",
            answer: "WebLeads searches by business type and location radius. You control the search parameters. You can search for brokerages in a specific city, then get all agent contacts. For more granular filtering (e.g., agents specializing in commercial property), you would manually review results or sort by reviews and activity."
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
                Stop Waiting for Stale Agent Lists
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
                WebLeads finds agents and brokers in any market with verified emails. Real-time data from Google Maps. Start at $24/month. No credit card required.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2 mb-8 sm:mb-12">
                <Button
                  size="lg"
                  asChild
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border border-white/10 w-full sm:w-auto"
                >
                  <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                    Find Agents Now
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
                  <span>Real-time agent discovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Verified decision maker emails</span>
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

      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            Want to learn other ways to build a real estate agent email list?{" "}
            <Link href="/blog/real-estate-agent-email-list" className="text-blue-600 underline hover:text-blue-800">
              Read our complete guide to building an agent list →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
