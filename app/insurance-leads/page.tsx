import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PricingSection } from "@/components/pricing-section"
import {
  MapPin,
  Mail,
  Phone,
  Users,
  Download,
  Search,
  CheckCircle2,
  ArrowRight,
  Building2,
  TrendingUp,
  Shield,
  DollarSign,
  Star,
  XCircle,
  Briefcase,
} from "lucide-react"
import Link from "next/link"
import { StatsBar } from "@/components/landing/stats-bar"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { HowItWorksLanding } from "@/components/landing/how-it-works-landing"
import { UseCasesGrid } from "@/components/landing/use-cases-grid"
import { FAQSection } from "@/components/landing/faq-section-landing"
import { pricingLinkedFaqs } from "@/lib/pricing-linked-faqs"

export const metadata: Metadata = {
  title: "Insurance Agent Leads - Find Agencies on Google Maps",
  description: "Find insurance agencies and agents on Google Maps. Get verified emails, phone numbers, and owner contact data for territory prospecting. Start free.",
  keywords: "insurance leads, insurance agent leads, insurance broker leads, find insurance agents, insurance agency contacts, google maps insurance leads",
  openGraph: {
    title: "Insurance Agent Leads - Find Agencies on Google Maps",
    description: "Find insurance agencies on Google Maps with verified contact data for cold outreach and territory prospecting.",
    url: "https://www.webleads.site/insurance-leads",
    type: "website",
    images: [{ url: "/images/insurance-leads-og.jpg", width: 1200, height: 630, alt: "Insurance Agent Leads - Find Agencies on Google Maps" }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Insurance Agent Leads - Find Agencies on Google Maps",
    description: "Find insurance agencies and agents on Google Maps with verified contact data.",
    images: ["/images/insurance-leads-og.jpg"]
  },
  alternates: { canonical: "https://www.webleads.site/insurance-leads" }
}

export default function InsuranceLeadsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "WebLeads: Insurance Agency Leads from Google Maps",
    "description": "WebLeads finds insurance agencies and agents on Google Maps with verified emails, phone numbers, and owner contact data.",
    "brand": { "@type": "Brand", "name": "WebLeads" },
    "offers": { "@type": "AggregateOffer", "lowPrice": "0", "highPrice": "199", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What types of insurance businesses show up in results?", "acceptedAnswer": { "@type": "Answer", "text": "WebLeads searches Google Maps, so you find independent insurance agencies, brokerages, and individual agents with a business listing. You can search by agency type and location." } },
      { "@type": "Question", "name": "How is this different from buying shared insurance leads?", "acceptedAnswer": { "@type": "Answer", "text": "WebLeads pulls fresh data from Google Maps on demand. You build your own list for your territory and no one else gets the same output. Shared lead pools sell the same contact to 5 or more vendors simultaneously." } },
      { "@type": "Question", "name": "How many insurance leads can I get per month?", "acceptedAnswer": { "@type": "Answer", "text": "With WebLeads Starter ($24/mo), you get 500 people enrichments per month. Growth plan ($69/mo) includes 2,500 per month. Each enrichment includes verified email when available." } }
    ]
  }

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
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
              Insurance Agency Prospecting · Google Maps Live Data
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight tracking-tight">
              Find Insurance Agent Leads on Google Maps
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Get verified emails, phone numbers, and owner contact data for insurance agencies in any territory. No shared pools. Fresh data pulled on demand, not from a stale database.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-6 sm:mb-8">
              <Button size="lg" asChild className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl w-full sm:w-auto">
                <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                  Start Free Search <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 h-auto border-2 border-brand-primary text-brand-primary hover:bg-brand-light transition-all rounded-xl w-full sm:w-auto">
                <Link href="#pricing">See Pricing</Link>
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              ✓ No credit card required &nbsp; ✓ Fresh data from Google Maps &nbsp; ✓ Owner emails verified via SMTP
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar stats={[
        { value: "8,100/mo", label: "Insurance agent lead searches", icon: <Search className="h-6 w-6" /> },
        { value: "95%+", label: "Email accuracy", icon: <Mail className="h-6 w-6" /> },
        { value: "$24/mo", label: "Starting price", icon: <DollarSign className="h-6 w-6" /> },
        { value: "Google Maps", label: "Fresh data daily", icon: <MapPin className="h-6 w-6" /> },
      ]} />

      {/* Pain Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              Why Insurance Contact Lists Go Wrong
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Agency mergers, rebrands, and ownership changes make insurance lists unreliable within months.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Stale Agency Data", intro: "Insurance agencies merge, rebrand, and change ownership constantly:", bullets: ["Independent agencies are acquired by larger groups", "Principals retire or transition to new firms", "Office locations move without updated listings", "Phone numbers and emails change with every ownership shift"] },
              { title: "Wrong Inbox Every Time", intro: "The actual decision maker is buried behind shared inboxes:", bullets: ["info@ and contact@ go to front desk staff", "Your pitch gets triaged out before it reaches the principal", "Google Maps shows the agency, not the person in charge", "LinkedIn has minimal coverage for small independent shops"] },
              { title: "No Territory Precision", intro: "National lead databases do not map to local insurance markets:", bullets: ["Zip-code level filtering is often missing or broken", "State-licensed agent lists skip independent storefronts", "Carrier reps have no view into independent agency density", "Regional patterns are invisible in bulk purchased lists"] },
              { title: "Shared Pool Fatigue", intro: "Paid lead pools send the same contact to multiple vendors:", bullets: ["5 or more competitors reach the same agency in one week", "Prospects go cold before your second follow-up", "Cost per lead climbs while response rates fall", "No exclusivity even at higher price tiers"] },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-xl border border-brand-primary/10 shadow-sm p-6 sm:p-8 flex flex-col gap-4">
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
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                WebLeads pulls fresh insurance agency data from Google Maps every time you search.
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                No static database. Search insurance agencies in any city or territory, get current businesses with owner names and verified emails, not last year's data.
              </p>
              <Button size="lg" asChild className="bg-white text-brand-primary hover:bg-white/90 text-base sm:text-lg px-8 py-5 sm:py-6 h-auto shadow-lg transition-all duration-300 rounded-xl">
                <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                  Try WebLeads Free <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
              {[
                { icon: <TrendingUp className="h-6 w-6" />, stat: "On demand", label: "Data collected fresh on every search, not from a database" },
                { icon: <Users className="h-6 w-6" />, stat: "Owner contacts", label: "Agency principal name, role, and verified email in one click" },
                { icon: <Shield className="h-6 w-6" />, stat: "SMTP verified", label: "Emails verified before delivery to prevent bounces" },
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
        title="From Search to Outreach-Ready Insurance Agency List"
        steps={[
          { number: 1, title: "Search insurance agencies by territory", description: "Enter 'insurance agencies in [city]' or 'independent insurance brokers near [ZIP]'. WebLeads searches Google Maps live, not a stale database.", icon: <Search className="h-6 w-6" /> },
          { number: 2, title: "Get every matching agency with contact data", description: "Name, phone, website, Google rating, review count. Filter to find your best-fit prospects in the territory.", icon: <Building2 className="h-6 w-6" /> },
          { number: 3, title: "Find the principal name and verified email", description: "Run people enrichments to get the agency owner or principal name, role, and SMTP-verified direct email.", icon: <Users className="h-6 w-6" /> },
          { number: 4, title: "Export and send your campaign", description: "Export to CSV and import into any cold email tool. Done.", icon: <Download className="h-6 w-6" /> },
        ]}
      />

      {/* Features Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-brand-light to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              Built for the Insurance Prospecting Workflow
            </h2>
          </div>
          <FeaturesGrid features={[
            { icon: <Users className="h-8 w-8" />, title: "Principal and Owner Names", description: "Get full names of agency principals, owners, and key contacts. Perfect for personalized outreach that gets past the front desk." },
            { icon: <Phone className="h-8 w-8" />, title: "Direct Phone Numbers", description: "Business phone numbers from Google Maps. Reach insurance agency decision makers directly for calls or SMS." },
            { icon: <Mail className="h-8 w-8" />, title: "Verified Email Addresses", description: "Owner and office emails verified for deliverability via SMTP. Bounce rates under 3% on fresh WebLeads exports." },
            { icon: <MapPin className="h-8 w-8" />, title: "Territory Targeting", description: "Search by city, state, or ZIP code. Build a precise list for any sales territory or carrier appointment region." },
            { icon: <Star className="h-8 w-8" />, title: "Rating and Review Filters", description: "Filter by Google rating and review count. Focus on established, well-reviewed agencies over new or inactive listings." },
            { icon: <Download className="h-8 w-8" />, title: "CSV Export Included", description: "Export leads to CSV at no extra cost. Import into Salesforce, HubSpot, or any cold email tool in minutes." },
          ]} />
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing" className="scroll-mt-20">
        <PricingSection />
      </div>

      {/* Use Cases */}
      <UseCasesGrid
        title="Who Uses Insurance Leads from WebLeads?"
        subtitle="Perfect for businesses that sell to or partner with insurance agencies"
        cases={[
          { icon: <Briefcase className="h-8 w-8" />, title: "B2B Software Vendors", description: "Sell CRM, compliance, or back-office tools to insurance agencies. Build a precise list of agency principals rather than cold-calling switchboards.", benefits: ["Direct principal contact data", "Geographic territory targeting", "Email campaigns to decision makers"] },
          { icon: <Shield className="h-8 w-8" />, title: "Carrier Reps", description: "Build territory lists of independent agents for appointments or product rollouts. Target by city or state to match your carrier's footprint.", benefits: ["Independent agency contacts", "Phone numbers for outreach calls", "Verified principal emails"] },
          { icon: <Users className="h-8 w-8" />, title: "Recruiters", description: "Find licensed producers at independent shops and reach them with new opportunities. Current agency data means you contact people who are actually there.", benefits: ["Current agency employee data", "Export to outreach sequences", "Filter by agency size and rating"] },
          { icon: <TrendingUp className="h-8 w-8" />, title: "Referral Network Builders", description: "Connect with local agents for cross-referral partnerships across financial services, mortgage, or legal verticals.", benefits: ["Local agent density mapping", "Owner contact info", "Multi-channel outreach options"] },
          { icon: <DollarSign className="h-8 w-8" />, title: "Fintech and Insurtech Companies", description: "Reach local insurance brokers with new products, embedded offerings, or API partnerships. Fresh data means you find agencies actually open to new tools.", benefits: ["Broker and principal emails", "Filter by Google rating", "Bulk CSV exports"] },
          { icon: <Search className="h-8 w-8" />, title: "Marketing Agencies", description: "Build insurance agency client lists for digital marketing, web design, or SEO outreach. Any city, any niche, fresh data each search.", benefits: ["Any city and agency type", "Fresh data each search", "Owner verified emails"] },
        ]}
      />

      {/* FAQ Section */}
      <FAQSection
        title="Insurance Leads: Common Questions"
        faqs={[
          { question: "What types of insurance businesses show up in results?", answer: "WebLeads searches Google Maps, so you find independent insurance agencies, brokerages, and individual agents with a business listing. You can search by agency type (auto, life, commercial, health) and filter by location, rating, and review count." },
          { question: "Is this for finding insurance agents as prospects, or for finding leads for agents?", answer: "It works for both. You can find insurance agencies as B2B prospects to sell them products or services, or you can use WebLeads to build territory outreach lists depending on how you frame your search query." },
          { question: "How is this different from buying shared insurance leads?", answer: "Shared lead pools sell the same contact to 5 or more vendors at once. WebLeads pulls fresh data from Google Maps on demand. You build your own list for your territory and no one else gets the same output. There is no shared pool." },
          { question: "Do I get email addresses?", answer: "Yes. Each result can be enriched with decision maker emails verified via SMTP, phone numbers, and where available, the agency principal name and role. Enrichments are available on all paid plans." },
          { question: "Can I filter by Google rating?", answer: "Yes. You can filter results by Google Maps star rating, which helps you target established, well-reviewed agencies over newly listed or inactive ones." },
          { question: "Can I target by territory or state?", answer: "Yes. Search by city, ZIP code, county, or state. For example: 'independent insurance agents in Nashville' or 'insurance brokers in 37201'. You can run multiple searches to cover a full carrier territory." },
          ...pricingLinkedFaqs,
        ]}
      />

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#1e2330] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-24 overflow-hidden text-center shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e2330] via-[#2d3142] to-[#1e2330] opacity-100" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-brand-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight tracking-tight px-2">
                Start Finding Insurance Agency Leads Today
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
                WebLeads finds insurance agencies in any territory with verified owner emails. No stale lists, no shared pools. Starts at $24/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2 mb-8 sm:mb-12">
                <Button size="lg" asChild className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border border-white/10 w-full sm:w-auto">
                  <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                    Search Insurance Agencies Free <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto border-2 border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white/40 transition-all rounded-xl w-full sm:w-auto">
                  <Link href="#pricing">View Pricing</Link>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-blue-100/75 px-2">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" /><span>No credit card required</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" /><span>Cancel anytime</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" /><span>Fresh data from Google Maps</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" /><span>Owner emails verified via SMTP</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center space-y-3">
          <p className="text-gray-600 text-sm">
            Also useful:{" "}
            <Link href="/real-estate-leads" className="text-brand-primary underline hover:text-brand-primary/80">Real estate leads</Link>
            {" · "}
            <Link href="/google-maps-scraper" className="text-brand-primary underline hover:text-brand-primary/80">Google Maps scraper</Link>
            {" · "}
            <Link href="/email-finder-tools" className="text-brand-primary underline hover:text-brand-primary/80">Email finder tools</Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
