import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StatsBar } from "@/components/landing/stats-bar"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { HowItWorksLanding } from "@/components/landing/how-it-works-landing"
import { UseCasesGrid } from "@/components/landing/use-cases-grid"
import { FAQSection } from "@/components/landing/faq-section-landing"
import { PricingSection } from "@/components/pricing-section"
import { pricingLinkedFaqs } from "@/lib/pricing-linked-faqs"
import Link from "next/link"
import {
  XCircle,
  CheckCircle2,
  Search,
  Users,
  Download,
  TrendingUp,
  MapPin,
  Shield,
  Building2,
  DollarSign,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Find Real Estate Agent Leads | WebLeads",
  description: "Search Google Maps for real estate agents and brokers. Get verified emails, phone numbers, and decision maker contacts. Fresh data, no list subscriptions.",
  keywords: ["real estate agent leads", "realtor leads", "real estate broker leads", "find real estate agents", "real estate contact data"],
  alternates: {
    canonical: "https://www.webleads.site/real-estate-agent-leads",
  },
  openGraph: {
    title: "Find Real Estate Agent Leads | WebLeads",
    description: "Search Google Maps for real estate agents and brokers. Get verified emails, phone numbers, and broker details. Fresh data, zero list subscriptions.",
    url: "https://www.webleads.site/real-estate-agent-leads",
    siteName: "WebLeads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Real Estate Agent Leads | WebLeads",
    description: "Search Google Maps for real estate agents. Fresh contact data, no stale lists.",
  },
}

const reAgentPainPoints = [
  {
    problem: "Stale MLS and association directories with outdated contact info",
    icon: <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />,
  },
  {
    problem: "Agents who changed brokerages or left the market since the list was built",
    icon: <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />,
  },
  {
    problem: "No geographic precision: lists cover entire metros when you need specific neighborhoods",
    icon: <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />,
  },
  {
    problem: "Expensive per-contact pricing from data vendors with no on-demand flexibility",
    icon: <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />,
  },
]

const reAgentStats = [
  { value: "Fresh", label: "On-Demand Data", icon: <Search className="h-6 w-6" /> },
  { value: "SMTP", label: "Email Verified", icon: <Shield className="h-6 w-6" /> },
  { value: "$24+", label: "Starting Price", icon: <DollarSign className="h-6 w-6" /> },
  { value: "CSV", label: "Export Format", icon: <Download className="h-6 w-6" /> },
]

const reAgentSteps = [
  {
    number: 1,
    title: "Search by agent type and city",
    description: "Type your target market and agent type: solo agents, teams, or brokerages. WebLeads searches Google Maps in real time.",
    icon: <Search className="h-6 w-6" />,
  },
  {
    number: 2,
    title: "Get enriched contact profiles",
    description: "Each result includes business name, address, phone, Google rating, and decision maker details. Add people enrichment for verified emails.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    number: 3,
    title: "Export and reach out",
    description: "Download your list as CSV. Import into your email tool or CRM. You have verified contacts ready to send.",
    icon: <Download className="h-6 w-6" />,
  },
  {
    number: 4,
    title: "Higher response rates",
    description: "Current data means fewer bounces and more replies. Your pitch reaches the right person at the right brokerage.",
    icon: <TrendingUp className="h-6 w-6" />,
  },
]

const reAgentFeatures = [
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Location-Based Search",
    description: "Search by city, neighborhood, or metro area. Pull agents and brokerages in any market you want to target.",
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Google Maps Data",
    description: "WebLeads pulls directly from Google Maps on every search. No cached database. Data reflects what is live today.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Decision Maker Contacts",
    description: "Get agent names, titles, and verified professional emails. Direct contacts, not general office inboxes.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "SMTP Email Verification",
    description: "Every email is verified before you send. No bounces, no wasted outreach, no damaged sender reputation.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Fresh Data Every Search",
    description: "Agent moved brokerages last month? Updated their email? You get the current record, not a stale snapshot.",
  },
  {
    icon: <Download className="h-8 w-8" />,
    title: "Instant CSV Export",
    description: "Download into your cold email tool, CRM, or spreadsheet. CSV and Excel formats available on every plan.",
  },
]

const reAgentCases = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "B2B Vendors",
    description: "Sell CRMs, transaction tools, marketing software, or services to brokerages and agencies.",
    benefits: ["Target by market size", "Reach decision makers directly", "Fresh contacts every search"],
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Mortgage Referral Partners",
    description: "Find agents in your market to build co-referral relationships. Reach out to active producers, not dormant listings.",
    benefits: ["Filter by review activity", "Identify team leads", "Verified direct emails"],
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Recruiters",
    description: "Build targeted lists of producing agents at competing brokerages and approach them about your opportunity.",
    benefits: ["Target specific brokerages", "Find high-review agents", "No stale directory data"],
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Service Providers",
    description: "Reach home inspectors, stagers, photographers, and other vendors who sell to agents or to agents directly.",
    benefits: ["Search any niche", "Export ready lists", "Scale across markets"],
  },
]

const reAgentFaqs = [
  {
    question: "What types of real estate professionals appear in results?",
    answer: "WebLeads searches Google Maps, so you'll find independent agents, brokerage offices, property management companies, and real estate teams with a business listing. You can narrow by agent type or location with your search query.",
  },
  {
    question: "How is this different from buying a list from a data vendor?",
    answer: "Data vendors sell pre-built lists that can be months or years old. WebLeads pulls fresh from Google Maps each time you search. You're getting current data, not recycled contacts.",
  },
  {
    question: "Can I target a specific city or zip code?",
    answer: "Yes. You set the location when you run a search. You can run multiple searches across different markets and export each one independently.",
  },
  {
    question: "Do I get emails and phone numbers?",
    answer: "Yes. Each result is enriched with decision maker emails (SMTP-verified where available), direct phone numbers, and LinkedIn profiles where found.",
  },
  {
    question: "Can I filter by Google rating to target established agents?",
    answer: "Yes. You can filter results by Google Maps rating, which helps surface agents with proven track records over newer or inactive listings.",
  },
  ...pricingLinkedFaqs,
]

export default function RealEstateAgentLeadsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-b from-white to-brand-light overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float-blob-1" />
            <div className="absolute top-40 right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-brand-accent/15 rounded-full blur-3xl animate-float-blob-2" />
            <div className="absolute bottom-20 left-1/3 w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-brand-primary/6 rounded-full blur-3xl animate-float-blob-3" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 bg-brand-secondary text-white border-none px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium">
              For vendors, partners, and recruiters
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight">
              Find Qualified Real Estate Agent Leads Without Buying Stale Lists
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Search Google Maps by agent type and location. Get verified emails, phone numbers, and broker details in minutes. Fresh data, zero list subscriptions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl shadow-lg px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold"
              >
                <Link href="https://app.webleads.site/register">Start Finding Real Estate Agent Leads</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary/5 rounded-xl px-6 sm:px-8 py-3 text-sm sm:text-base"
              >
                <Link href="#pricing">See Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <StatsBar stats={reAgentStats} />

        {/* Pain Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-secondary mb-3 sm:mb-4 text-center">
              Why Real Estate Agent Lists Go Bad Fast
            </h2>
            <p className="text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
              Agent turnover is high and brokerages consolidate constantly. Static lists can&apos;t keep up.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {reAgentPainPoints.map((item, i) => (
                <div key={i} className="flex gap-3 p-4 sm:p-5 bg-red-50 rounded-xl border border-red-100">
                  {item.icon}
                  <p className="text-gray-700 text-sm sm:text-base">{item.problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Bridge */}
        <section className="py-10 sm:py-14 px-4 sm:px-6 bg-brand-light">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-brand-primary" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-secondary mb-3 sm:mb-4">
              WebLeads searches Maps at the moment you need data
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Set your market, search for agent type or brokerage, and receive enriched contact data back by email. No static list. No stale contacts. You pull fresh data whenever you need it.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorksLanding
          steps={reAgentSteps}
          title="From Search to Agent Contact"
          description="Four steps from market selection to verified outreach list"
        />

        {/* Features */}
        <FeaturesGrid
          title="Everything You Need to Find Agents Fast"
          features={reAgentFeatures}
        />

        {/* Pricing */}
        <div id="pricing" className="scroll-mt-20">
          <PricingSection />
        </div>

        {/* Use Cases */}
        <UseCasesGrid
          title="Who Uses WebLeads for Real Estate Agent Leads"
          subtitle="From B2B vendors to mortgage partners and recruiters"
          cases={reAgentCases}
        />

        {/* FAQ */}
        <FAQSection
          title="Common Questions"
          faqs={reAgentFaqs}
        />

        {/* CTA */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[#1e2330] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e2330] via-[#2d3142] to-[#1e2330] opacity-100" />
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-10 -right-10 w-48 h-48 sm:w-64 sm:h-64 bg-brand-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 bg-brand-accent/15 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10 text-center py-10 sm:py-14 md:py-16 px-4 sm:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Ready to build your real estate agent list?
                </h2>
                <p className="text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
                  Search any market, get fresh contact data, export in minutes. No annual contracts, no sales calls.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand-accent hover:bg-brand-accent/90 text-brand-secondary rounded-xl font-bold shadow-lg px-6 sm:px-8"
                  >
                    <Link href="https://app.webleads.site/register">Get Started Free</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 rounded-xl px-6 sm:px-8"
                  >
                    <Link href="#pricing">View Plans</Link>
                  </Button>
                </div>
                <p className="mt-4 sm:mt-6 text-gray-400 text-xs sm:text-sm">
                  Also useful for:{" "}
                  <Link href="/real-estate-leads" className="text-brand-accent hover:underline">real estate leads</Link>
                  {" · "}
                  <Link href="/local-lead-generation" className="text-brand-accent hover:underline">local lead generation</Link>
                  {" · "}
                  <Link href="/find-email-addresses" className="text-brand-accent hover:underline">real estate agent email list</Link>
                  {" · "}
                  <Link href="/blog/how-to-get-real-estate-leads" className="text-brand-accent hover:underline">real estate prospecting guide</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
