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
} from "lucide-react"
import Link from "next/link"
import { StatsBar } from "@/components/landing/stats-bar"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { HowItWorksLanding } from "@/components/landing/how-it-works-landing"
import { UseCasesGrid } from "@/components/landing/use-cases-grid"
import { FAQSection } from "@/components/landing/faq-section-landing"
import { pricingLinkedFaqs } from "@/lib/pricing-linked-faqs"

export const metadata: Metadata = {
  title: "Plumber Leads - Find Plumbers & Decision Makers | WebLeads",
  description: "Find plumbers and plumbing contractors with verified phone numbers, email addresses, and owner contact data on Google Maps. Start free: 2 searches, 500 results each.",
  keywords: "plumber leads, plumber phone numbers, plumbing contractor leads, find plumbers, plumber contact information, plumbing business contacts, google maps plumber leads",
  openGraph: {
    title: "Plumber Leads - Find Plumbers & Decision Makers",
    description: "Find plumbers and plumbing contractors on Google Maps with verified contact data for cold outreach and sales prospecting.",
    url: "https://www.webleads.site/plumber-leads",
    type: "website",
    images: [{ url: "/images/plumber-leads-og.jpg", width: 1200, height: 630, alt: "Plumber Leads - Find Plumbers & Decision Makers" }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Plumber Leads - Find Plumbers & Decision Makers",
    description: "Find plumbers on Google Maps with verified contact data.",
    images: ["/images/plumber-leads-og.jpg"]
  },
  alternates: { canonical: "https://www.webleads.site/plumber-leads" }
}

export default function PlumberLeadsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "WebLeads: Plumber Leads from Google Maps",
    "description": "WebLeads finds plumbers and plumbing contractors on Google Maps with verified emails, phone numbers, and owner contact data.",
    "brand": { "@type": "Brand", "name": "WebLeads" },
    "offers": { "@type": "AggregateOffer", "lowPrice": "0", "highPrice": "199", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I find plumber leads?", "acceptedAnswer": { "@type": "Answer", "text": "Use WebLeads to search Google Maps for plumbers in your target areas. Filter by ratings and reviews, then export verified contact data including phone numbers and email addresses." } },
      { "@type": "Question", "name": "Can I get plumbing company owner email addresses?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. WebLeads identifies business owners and decision makers, then finds verified emails. Our people enrichment pipeline finds direct owner contacts for plumbing contractors." } },
      { "@type": "Question", "name": "How many plumber leads can I get per month?", "acceptedAnswer": { "@type": "Answer", "text": "With WebLeads Starter ($24/mo), you get 500 people enrichments per month. Growth plan ($69/mo) includes 2,500 per month. Each enrichment includes verified email when available." } }
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
              Plumbing Contractor Prospecting · Google Maps Live Data
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight tracking-tight">
              Find Plumber Phone Numbers on Google Maps
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Get verified phone numbers, emails, and owner contact data for plumbers and plumbing contractors. Perfect for suppliers, service providers, and B2B vendors targeting the plumbing industry.
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
        { value: "1,000+", label: "Monthly plumber searches", icon: <Search className="h-6 w-6" /> },
        { value: "95%+", label: "Phone accuracy", icon: <Phone className="h-6 w-6" /> },
        { value: "$24/mo", label: "Starting price", icon: <DollarSign className="h-6 w-6" /> },
        { value: "Google Maps", label: "Fresh data daily", icon: <MapPin className="h-6 w-6" /> },
      ]} />

      {/* Pain Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              Why Plumber Contact Lists Stop Working
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Plumbing is a high-turnover trade. Lists go stale fast and purchased data rarely has direct owner contacts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Owner Contact Is Buried", intro: "Getting to the plumber who signs checks is harder than it looks:", bullets: ["Generic info@ addresses go to office staff", "Solo plumbers run on personal numbers only", "LinkedIn has zero coverage for most plumbers", "You reach a dispatcher, not the decision maker"] },
              { title: "High Turnover in the Trade", intro: "Plumbing businesses open and close frequently:", bullets: ["Solo operators retire or exit constantly", "Crews split and form new companies", "Phone numbers change when staff leaves", "Old lists go cold within months"] },
              { title: "Emergency Work Skews Results", intro: "Emergency plumbing distorts which companies are reachable:", bullets: ["Seasonal spikes mean owners are in the field", "Contact forms go unanswered during busy periods", "New companies appear after flooding or freeze events", "Last year's list misses new operators entirely"] },
              { title: "Verification Is Manual", intro: "Most data sources make you verify separately:", bullets: ["15-25% bounce rates on typical plumber lists", "Bad emails damage your sender reputation", "Phone number verification adds hours per batch", "Wasted outreach on dead contacts"] },
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
                WebLeads pulls fresh plumber data from Google Maps every time you search.
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                No static database. Search plumbers in any city, get current businesses with owner names, verified phone numbers, and direct emails.
              </p>
              <Button size="lg" asChild className="bg-white text-brand-primary hover:bg-white/90 text-base sm:text-lg px-8 py-5 sm:py-6 h-auto shadow-lg transition-all duration-300 rounded-xl">
                <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                  Try WebLeads Free <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
              {[
                { icon: <TrendingUp className="h-6 w-6" />, stat: "Real time", label: "Data collected fresh on every search, not from a database" },
                { icon: <Users className="h-6 w-6" />, stat: "Decision makers", label: "Owner name, role, and verified email in one click" },
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
        title="From Search to Outreach-Ready Plumber List"
        steps={[
          { number: 1, title: "Search plumbers by city", description: "Enter 'plumbers in [city]' or 'plumbing contractors near [ZIP]'. WebLeads searches Google Maps live.", icon: <Search className="h-6 w-6" /> },
          { number: 2, title: "Get every matching business with contact data", description: "Name, phone, website, Google rating, review count. Filter to find your best-fit plumbing prospects.", icon: <Building2 className="h-6 w-6" /> },
          { number: 3, title: "Find the owner name and verified email", description: "Run people enrichments to get the owner name, role, and SMTP-verified direct email.", icon: <Users className="h-6 w-6" /> },
          { number: 4, title: "Export and send your campaign", description: "Export to CSV and import into any cold email tool. Done.", icon: <Download className="h-6 w-6" /> },
        ]}
      />

      {/* Features Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-brand-light to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              Built for the Plumbing Prospecting Workflow
            </h2>
          </div>
          <FeaturesGrid features={[
            { icon: <Users className="h-8 w-8" />, title: "Owner and Manager Names", description: "Get full names of plumbing company owners, managers, and decision makers for personalized outreach." },
            { icon: <Phone className="h-8 w-8" />, title: "Direct Phone Numbers", description: "Business phone numbers from Google Maps. Reach plumbing decision makers directly." },
            { icon: <Mail className="h-8 w-8" />, title: "Verified Email Addresses", description: "Owner and office emails verified for deliverability via SMTP. Bounce rates under 3%." },
            { icon: <MapPin className="h-8 w-8" />, title: "Location Targeting", description: "Search by city, state, or ZIP code. Find plumbers in your exact target markets." },
            { icon: <Star className="h-8 w-8" />, title: "Rating and Review Filters", description: "Filter by Google rating and review count. Find established, active plumbing companies." },
            { icon: <Download className="h-8 w-8" />, title: "CSV Export Included", description: "Export leads to CSV. Import into Salesforce, HubSpot, or any cold email tool at no extra cost." },
          ]} />
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing" className="scroll-mt-20">
        <PricingSection />
      </div>

      {/* Use Cases */}
      <UseCasesGrid
        title="Who Uses Plumber Leads from WebLeads?"
        subtitle="Perfect for businesses that sell to plumbing contractors"
        cases={[
          { icon: <DollarSign className="h-8 w-8" />, title: "Plumbing Supply Distributors", description: "Reach plumbing contractors with pricing on pipes, fixtures, and wholesale parts. Build direct relationships.", benefits: ["Direct owner contact data", "Geographic targeting", "Email campaigns for partnerships"] },
          { icon: <Shield className="h-8 w-8" />, title: "Insurance Companies", description: "Connect with plumbing contractors for liability, workers comp, and preferred contractor networks.", benefits: ["Contractor contact details", "Phone numbers for cold calling", "Verified decision maker emails"] },
          { icon: <Building2 className="h-8 w-8" />, title: "Software and Tools Providers", description: "Reach plumbing companies with scheduling, invoicing, dispatch, or CRM software solutions.", benefits: ["Filter by company size", "Export to email lists", "LinkedIn profile data"] },
          { icon: <TrendingUp className="h-8 w-8" />, title: "Financing Providers", description: "Offer contractor financing for tools and equipment. Target established plumbing shops with volume.", benefits: ["Owner contact info", "Company size indicators", "Multi-channel outreach options"] },
          { icon: <Users className="h-8 w-8" />, title: "B2B Service Providers", description: "Offer accounting, legal, HR, or consulting services to plumbing contractors looking to scale.", benefits: ["Decision maker targeting", "Quality filtering by ratings", "Bulk email exports"] },
          { icon: <Search className="h-8 w-8" />, title: "Marketing Agencies", description: "Build plumbing contractor client lists for digital marketing and web design outreach.", benefits: ["Any city and niche", "Fresh data each search", "Owner verified emails"] },
        ]}
      />

      {/* FAQ Section */}
      <FAQSection
        title="Plumber Leads: Common Questions"
        faqs={[
          { question: "How do I find plumber leads?", answer: "Search Google Maps for 'plumbers', 'plumbing contractors', or 'plumbing companies' in your target areas. WebLeads returns every matching business with contact data. People enrichments add owner name and verified email." },
          { question: "Can I get plumbing company owner email addresses?", answer: "Yes. WebLeads identifies business owners and decision makers, then finds verified emails. We discover the business website domain, generate likely email patterns, then SMTP-verify each until one confirms." },
          { question: "Can I target plumbers by location?", answer: "Yes. Search by city, state, ZIP code, or neighborhood. For example: 'plumbers in Chicago' or 'plumbing contractors in 60611'. Filter results by ratings and review count to focus on quality contractors." },
          { question: "What data do I get for each plumber?", answer: "Each lead includes: owner/manager name, business phone number, email address (verified), office address, company name, website URL, Google rating, review count, and people enrichments with direct decision maker contacts." },
          { question: "How is this different from buying a plumber contact list?", answer: "Purchased lists are built from databases that decay over time. WebLeads pulls live data from Google Maps on every search, so you get current businesses with current contact info. Bounce rates on WebLeads lists are typically under 3%, compared to 15-20% for purchased lists." },
          { question: "Can I export plumber leads to my CRM?", answer: "Yes. Export is included in all plans. Download as CSV and import into Salesforce, HubSpot, Pipedrive, or any system that accepts CSV files." },
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
                Start Finding Plumber Leads Today
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
                WebLeads finds plumbers in any city with verified owner emails and phone numbers. No stale lists. Starts at $24/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2 mb-8 sm:mb-12">
                <Button size="lg" asChild className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border border-white/10 w-full sm:w-auto">
                  <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                    Search Plumbers Free <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
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
          <p className="text-gray-500 text-sm">
            Also useful:{" "}
            <Link href="/blog/contractor-leads" className="text-brand-primary underline hover:text-brand-primary/80">Contractor leads</Link>
            {" · "}
            <Link href="/blog/how-to-find-hvac-leads" className="text-brand-primary underline hover:text-brand-primary/80">HVAC leads</Link>
            {" · "}
            <Link href="/google-maps-scraper" className="text-brand-primary underline hover:text-brand-primary/80">Google Maps scraper</Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
