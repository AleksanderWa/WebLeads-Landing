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
import { XCircle, CheckCircle2, TrendingUp, Users, Shield, Quote, Search, Building2, DollarSign, MapPin, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Find Mortgage Broker Leads | WebLeads",
  description: "Search Google Maps for mortgage brokers and loan officers. Get verified emails, phone numbers, and decision maker contact data. Start free.",
  keywords: ["mortgage broker leads", "loan officer leads", "mortgage leads", "find mortgage brokers", "mortgage contact data"],
  alternates: {
    canonical: "https://www.webleads.site/mortgage-leads",
  },
  openGraph: {
    title: "Find Mortgage Broker Leads | WebLeads",
    description: "Search Google Maps for mortgage brokers and loan officers. Get verified emails, phone numbers, and decision maker contact data.",
    url: "https://www.webleads.site/mortgage-leads",
    siteName: "WebLeads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Mortgage Broker Leads | WebLeads",
    description: "Search Google Maps for mortgage brokers and loan officers. Fresh contact data, no subscriptions.",
  },
}

const mortgagePainPoints = [
  {
    title: "The contact data is old",
    intro: "Mortgage lists go stale faster than most people expect:",
    bullets: [
      "Loan officers switch firms often",
      "Small brokerages rebrand or merge without warning",
      "Old exports keep people who no longer serve that market",
      "You waste time checking contacts before outreach even starts",
    ],
  },
  {
    title: "You rarely reach the real decision maker",
    intro: "Generic data usually stops at the office line or shared inbox:",
    bullets: [
      "Reception answers first and screens calls",
      "Contact forms route to admin, not the broker you need",
      "Generic inboxes make your pitch feel mass sent",
      "Without names and roles, follow-up gets weaker fast",
    ],
  },
  {
    title: "Coverage matters city by city",
    intro: "Mortgage prospecting is local, so broad databases miss the details:",
    bullets: [
      "You need brokers in specific markets, not random national lists",
      "Google rating and local presence matter for targeting",
      "Some firms are active in one city and invisible in the next",
      "Fresh local search beats buying another spreadsheet",
    ],
  },
]

const mortgageUseCases = [
  {
    title: "B2B vendors",
    description: "Sell software, compliance tools, or services directly to mortgage brokers and loan officers.",
  },
  {
    title: "Referral partners",
    description: "Build a list of brokers in your region to set up co-marketing or referral arrangements.",
  },
  {
    title: "Recruiters",
    description: "Find licensed loan officers at independent shops and approach them about new opportunities.",
  },
  {
    title: "Real estate pros",
    description: "Connect with local mortgage brokers to exchange client referrals across transaction stages.",
  },
]

const mortgageFaqs = [
  {
    question: "What kind of mortgage professionals show up in searches?",
    answer: "WebLeads pulls from Google Maps, so you'll find independent mortgage brokers, loan officers at regional lenders, and mortgage companies listed with a physical address. If they have a Maps listing, they'll appear.",
  },
  {
    question: "Can I filter by location?",
    answer: "Yes. You set the city or region when you run your search. You can run multiple searches across different markets and export each one separately.",
  },
  {
    question: "How fresh is the contact data?",
    answer: "Searches run on demand. You're getting data pulled at the time of your search, not a list that's been sitting in a database for a year.",
  },
  {
    question: "Do I get emails and phone numbers?",
    answer: "Yes. WebLeads enriches each result with decision maker emails, verified business phone numbers, and where available, LinkedIn profiles.",
  },
  {
    question: "How many results do I get per search?",
    answer: "It depends on your plan. Starter gives you hundreds of results per search. Growth and Scale plans include more volume and enrichment credits. See pricing below.",
  },
  ...pricingLinkedFaqs,
]

const mortgageStats = [
  { value: "452k+", label: "Businesses found", icon: <Building2 className="h-6 w-6" /> },
  { value: "42k+", label: "Decision makers found", icon: <Users className="h-6 w-6" /> },
  { value: "$24/mo", label: "Starter plan", icon: <DollarSign className="h-6 w-6" /> },
  { value: "Google Maps", label: "Fresh data on every search", icon: <MapPin className="h-6 w-6" /> },
]

export default function MortgageLeadsPage() {
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
              Find Mortgage Broker Leads on Google Maps
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Get verified emails, phone numbers, and decision maker data for mortgage brokers and loan officers. Fresh on every search, not pulled from an old database.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl shadow-lg px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold"
              >
                <Link href="https://app.webleads.site/register">Start Finding Mortgage Broker Leads Today</Link>
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
        <StatsBar stats={mortgageStats} />

        {/* Pain Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-secondary mb-3 sm:mb-4 text-center">
              Why Mortgage Lead Lists Usually Disappoint
            </h2>
            <p className="text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
              The mortgage industry turns over fast. Most vendor lists don&apos;t keep up.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mortgagePainPoints.map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-brand-primary/10 shadow-sm p-6 sm:p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-semibold text-brand-secondary">{item.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.intro}</p>
                  <ul className="flex flex-col gap-2">
                    {item.bullets.map((bullet, i) => (
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
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  WebLeads searches mortgage markets live, so you work from current local data.
                </h2>
                <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                  Search brokers city by city, enrich the people behind each firm, and export a list you can actually use for outreach.
                </p>
                <Button size="lg" asChild className="bg-white text-brand-primary hover:bg-white/90 text-base sm:text-lg px-8 py-5 sm:py-6 h-auto shadow-lg transition-all duration-300 rounded-xl">
                  <Link href="https://app.webleads.site/register">Try WebLeads Free</Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
                {[
                  { icon: <TrendingUp className="h-6 w-6" />, stat: "Real time", label: "Fresh data collected on every search" },
                  { icon: <Users className="h-6 w-6" />, stat: "Decision makers", label: "Names, roles, and direct contact data for the people you want to reach" },
                  { icon: <Shield className="h-6 w-6" />, stat: "Verified emails", label: "SMTP verification helps cut wasted sends and bad data" },
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
          title="From Search to Outreach-Ready Mortgage List"
          steps={[
            { number: 1, title: "Search mortgage brokers by city or region", description: "Enter your market and pull mortgage brokers or loan officers from Google Maps.", icon: <Search className="h-6 w-6" /> },
            { number: 2, title: "Review current local businesses", description: "See firms, phone numbers, websites, ratings, and other details before you decide who to target.", icon: <Building2 className="h-6 w-6" /> },
            { number: 3, title: "Enrich the decision makers", description: "Find names, roles, and direct email data for the people behind the brokerage when a website is available.", icon: <Users className="h-6 w-6" /> },
            { number: 4, title: "Export and start outreach", description: "Download your list as CSV and move it into your email, CRM, or calling workflow.", icon: <Download className="h-6 w-6" /> },
          ]}
        />

        {/* Features */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-brand-light to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
                Built for Mortgage Prospecting That Starts Local
              </h2>
            </div>
            <FeaturesGrid
              features={[
                { icon: <Users className="h-8 w-8" />, title: "Broker and Loan Officer Names", description: "Get the names behind local mortgage firms so outreach feels personal, not mass sent." },
                { icon: <CheckCircle2 className="h-8 w-8" />, title: "Decision Maker Roles", description: "See who is owner, broker, or loan officer before you start email or calling." },
                { icon: <Shield className="h-8 w-8" />, title: "Verified Emails", description: "SMTP verification helps you work from cleaner contact data." },
                { icon: <MapPin className="h-8 w-8" />, title: "Location-First Searches", description: "Search one city at a time and build lists that match your real target market." },
                { icon: <Building2 className="h-8 w-8" />, title: "Google Business Context", description: "Use ratings, reviews, and local presence to decide who belongs in the list." },
                { icon: <Download className="h-8 w-8" />, title: "CSV Export", description: "Move your list straight into your CRM or outbound workflow." },
              ]}
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
                What Users Say About WebLeads
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Perry", role: "Growth Advisor, US", quote: "WebLeads has proven to be a solid lead generation tool." },
                { name: "Market Researcher", role: "India", quote: "Before WebLeads it took me plenty of time and effort. Now I am just a few clicks away from that result." },
                { name: "Farhan", role: "India", quote: "Hands-free, accurate data without any effort at a great price." },
              ].map((item) => (
                <div key={item.name} className="rounded-xl border border-brand-primary/10 bg-brand-light/40 p-6 sm:p-8 shadow-sm">
                  <Quote className="h-8 w-8 text-brand-accent mb-4" />
                  <p className="text-base text-gray-700 leading-relaxed mb-5">"{item.quote}"</p>
                  <div>
                    <p className="font-semibold text-brand-secondary">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <div id="pricing" className="scroll-mt-20">
          <PricingSection />
        </div>

        {/* Use Cases */}
        <UseCasesGrid
          title="Who Uses WebLeads for Mortgage Leads"
          subtitle="Built for teams that need current local broker data, not another stale export"
          cases={mortgageUseCases.map((item, index) => ({
            icon: [<DollarSign className="h-8 w-8" key="d" />, <Users className="h-8 w-8" key="u" />, <TrendingUp className="h-8 w-8" key="t" />, <Building2 className="h-8 w-8" key="b" />][index],
            title: item.title,
            description: item.description,
            benefits: index === 0
              ? ["Reach brokerages city by city", "Find direct contacts", "Export into outbound workflows"]
              : index === 1
              ? ["Build local referral lists", "Prioritize active firms", "Work from current market data"]
              : index === 2
              ? ["Spot independent shops", "Find local hiring targets", "Avoid old national lists"]
              : ["Map local referral opportunities", "Search by market", "Find the right firm faster"],
          }))}
        />

        {/* FAQ */}
        <FAQSection faqs={mortgageFaqs} />

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
                  Ready to build your mortgage broker list?
                </h2>
                <p className="text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
                  Search any market, enrich the right people, and export your list in minutes. Start free, then scale when it works.
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
