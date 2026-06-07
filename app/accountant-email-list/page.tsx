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
  title: "Accountant Email List - Verified CPA Contacts | WebLeads",
  description: "Find accountants and CPA firms with verified emails by city or region. Decision maker names included. Fresh data from Google Maps, no stale lists.",
  keywords: "accountant email list, CPA email list, accounting firm leads, accountant contact list, find accountant emails",
  openGraph: {
    title: "Accountant Email List - Verified CPA Contacts | WebLeads",
    description: "Find accountants and CPA firms with verified emails by city or region. Decision maker names included. Fresh data, no stale lists.",
    url: "https://www.webleads.site/accountant-email-list",
    siteName: "WebLeads",
    type: "website",
    images: [
      {
        url: "https://www.webleads.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accountant Email List - WebLeads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Accountant Email List - Verified CPA Contacts | WebLeads",
    description: "Find accountants and CPA firms with verified emails by city or region. Fresh data, no stale lists.",
    images: ["https://www.webleads.site/og-image.png"],
  },
  alternates: {
    canonical: "https://www.webleads.site/accountant-email-list",
  },
}

export default function AccountantEmailListPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do you find accountant email addresses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WebLeads searches Google Maps for accounting firms and CPAs in your target location. For each result, we discover the firm's website, generate likely email patterns for the owner or managing partner, and SMTP-verify each address before returning it. You get confirmed, working emails, not guesses.",
        },
      },
      {
        "@type": "Question",
        name: "What types of accounting professionals appear in results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Results include solo CPAs, bookkeeping firms, multi-partner accounting offices, tax prep specialists, and full-service financial advisory firms. You control the search terms, so you can narrow by practice type or location.",
        },
      },
      {
        "@type": "Question",
        name: "Is it legal to email accountants cold?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Accountants are business professionals and cold outreach is standard practice for B2B prospecting. Your emails must follow CAN-SPAM requirements: include your business address, an unsubscribe mechanism, and clearly identify the message as marketing. WebLeads provides verified contacts; compliance is your responsibility.",
        },
      },
      {
        "@type": "Question",
        name: "What information comes with each accountant contact?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each result includes the firm name, address, phone, website, Google rating, and review count. Add people enrichment to get the owner or managing partner name, role, and a verified professional email address.",
        },
      },
      {
        "@type": "Question",
        name: "How fresh is the data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WebLeads searches Google Maps in real time on every request. There is no pre-compiled database. Emails are SMTP-verified at the moment of delivery, so you get current data, not contacts that were accurate six months ago.",
        },
      },
      {
        "@type": "Question",
        name: "Can I search for accountants in a specific city or state?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You set the location when you run a search. Run multiple searches across different cities, export each list, and combine them. You only pull data for the markets you need.",
        },
      },
    ],
  }

  return (
    <main className="min-h-screen bg-white">
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
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge className="mb-4 sm:mb-6 bg-brand-secondary text-white border-none px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium">
            For B2B vendors, fintech, and service providers
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight">
            Accountant Email List Built from Live Google Maps Data
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed">
            Search any city for CPAs and accounting firms. Get verified emails and decision maker names in minutes.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            No list subscriptions. No stale databases. Fresh data every time you search.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl shadow-lg px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold"
            >
              <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                Find Accountants in Your Market
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
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
          <p className="mt-4 text-xs sm:text-sm text-gray-500">
            No credit card required. Free tier available.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar
        stats={[
          { value: "Fresh", label: "On-Demand Data", icon: <Search className="h-6 w-6" /> },
          { value: "SMTP", label: "Email Verified", icon: <Shield className="h-6 w-6" /> },
          { value: "$24+", label: "Starting Price", icon: <DollarSign className="h-6 w-6" /> },
          { value: "CSV", label: "Export Format", icon: <Download className="h-6 w-6" /> },
        ]}
      />

      {/* Pain Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-secondary mb-3 sm:mb-4">
              Why Accountant Lists Go Bad Fast
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto text-sm sm:text-base">
              CPA firms merge, rename, retire, and move. Static lists can&apos;t track any of it.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Pre-compiled lists are outdated on delivery",
                intro: "Most data vendors build their accountant lists months before you buy them:",
                bullets: [
                  "Firm names and addresses change after mergers",
                  "Solo CPAs retire or shift to part-time without updating directories",
                  "Emails tied to old domains bounce with no warning",
                  "You find out the list is bad after your sender score drops",
                ],
              },
              {
                title: "No control over who you actually reach",
                intro: "Generic lists give you firm names, not decision makers:",
                bullets: [
                  "Emails go to a receptionist or shared info@ inbox",
                  "No partner name, no managing CPA, no direct contact",
                  "You can't personalize outreach without a person's name",
                  "Response rates suffer when you can't address the right person",
                ],
              },
              {
                title: "Manual research takes too long to scale",
                intro: "Searching Google Maps by hand for accountants is slow:",
                bullets: [
                  "Copying names and numbers one firm at a time",
                  "Website hunting for emails eats hours per 50 contacts",
                  "Email validity is unknown until you hit a bounce",
                  "Repeating this across multiple cities is not viable",
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-3 p-5 bg-red-50 rounded-xl border border-red-100"
              >
                <div className="flex gap-3 items-start">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800">{card.title}</h3>
                </div>
                <p className="text-sm text-gray-600 ml-8">{card.intro}</p>
                <ul className="ml-8 space-y-1.5">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex gap-2 items-start">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{b}</span>
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
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                WebLeads builds your accountant list on demand.
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                Search any city for CPA firms and accounting offices. WebLeads pulls fresh data from Google Maps, then enriches each result with the owner or partner name and a verified professional email.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-white text-brand-primary hover:bg-white/90 text-base px-8 py-5 h-auto shadow-lg transition-all duration-300 rounded-xl"
              >
                <Link href="https://app.webleads.site/register" className="flex items-center justify-center">
                  Try WebLeads Free
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  stat: "Real time",
                  label: "Data collected fresh from Google Maps on every search",
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  stat: "Decision makers",
                  label: "Owner or managing partner name, role, and verified email",
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  stat: "Verified emails",
                  label: "SMTP-verified before delivery to prevent bounces",
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
        steps={[
          {
            number: 1,
            title: "Search by city and firm type",
            description: "Enter your target city and search for CPAs, bookkeepers, or accounting firms. WebLeads searches Google Maps in real time.",
            icon: <Search className="h-6 w-6" />,
          },
          {
            number: 2,
            title: "Get enriched profiles",
            description: "Each result includes firm name, address, phone, Google rating, and review count. Add people enrichment to get the owner name and verified email.",
            icon: <Users className="h-6 w-6" />,
          },
          {
            number: 3,
            title: "Export and reach out",
            description: "Download as CSV. Import into your cold email tool or CRM. Verified contacts ready to send.",
            icon: <Download className="h-6 w-6" />,
          },
          {
            number: 4,
            title: "Higher response rates",
            description: "Current data means fewer bounces. Verified emails with the right name get replies. Stale lists don't.",
            icon: <TrendingUp className="h-6 w-6" />,
          },
        ]}
        title="From Search to Accountant Contact"
        description="Four steps from city selection to a verified outreach list"
      />

      {/* Features Grid */}
      <FeaturesGrid
        title="Everything You Need to Find Accountants Fast"
        features={[
          {
            icon: <MapPin className="h-8 w-8" />,
            title: "Location-Based Search",
            description: "Search by city, metro area, or state. Pull every CPA firm and accounting office in any market you target.",
          },
          {
            icon: <Search className="h-8 w-8" />,
            title: "Live Google Maps Data",
            description: "WebLeads pulls from Google Maps on every search. No cached database. Data reflects what is live today.",
          },
          {
            icon: <Users className="h-8 w-8" />,
            title: "Decision Maker Contacts",
            description: "Get the owner or managing partner name and verified professional email. Direct contacts, not a shared info@ inbox.",
          },
          {
            icon: <Shield className="h-8 w-8" />,
            title: "SMTP Email Verification",
            description: "Every email is verified before delivery. No bounces, no wasted sends, no damaged sender reputation.",
          },
          {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Fresh Data Every Search",
            description: "Firm renamed after a merger? Partner retired? You get the current record, not a six-month-old snapshot.",
          },
          {
            icon: <Download className="h-8 w-8" />,
            title: "Instant CSV Export",
            description: "Download into your email sequencer, CRM, or spreadsheet. CSV and Excel formats on every plan.",
          },
        ]}
      />

      {/* Pricing */}
      <div id="pricing" className="scroll-mt-20">
        <PricingSection />
      </div>

      {/* Use Cases */}
      <UseCasesGrid
        title="Who Uses WebLeads to Reach Accountants"
        subtitle="From fintech vendors to B2B service providers"
        cases={[
          {
            icon: <Building2 className="h-8 w-8" />,
            title: "Fintech and Accounting Software",
            description: "Sell practice management tools, payroll software, or client portals directly to firm owners. Reach the decision maker, not a gatekeeper.",
            benefits: ["Find solo CPAs and small firms", "Target by city or region", "Direct owner emails"],
          },
          {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "B2B Service Providers",
            description: "Pitch marketing, compliance, IT, or HR services to accounting firms that rely on outside support for non-core functions.",
            benefits: ["Verified decision maker contact", "Fresh firm data", "Export ready lists"],
          },
          {
            icon: <Search className="h-8 w-8" />,
            title: "Recruiters and Staffing Firms",
            description: "Build lists of accounting firms for contract or permanent placement outreach. Contact the hiring partner directly.",
            benefits: ["Target by firm size signals", "No stale directory data", "Direct partner emails"],
          },
          {
            icon: <Users className="h-8 w-8" />,
            title: "Referral Partners",
            description: "Find accountants in your market for referral relationships. CPAs refer clients constantly. Build that network with verified contacts.",
            benefits: ["City-level targeting", "Filter by review activity", "Scale across markets"],
          },
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Common Questions"
        faqs={[
          {
            question: "How do you find accountant email addresses?",
            answer: "WebLeads searches Google Maps for accounting firms and CPAs in your target location. For each result, we discover the firm website, generate likely email patterns for the owner or managing partner, and SMTP-verify each address before returning it. You get confirmed, working emails.",
          },
          {
            question: "What types of accounting professionals appear in results?",
            answer: "Results include solo CPAs, bookkeeping firms, multi-partner accounting offices, tax prep specialists, and full-service financial advisory firms. You control the search terms, so you can narrow by practice type or location.",
          },
          {
            question: "Is it legal to email accountants cold?",
            answer: "Yes. Accountants are business professionals and cold outreach is standard B2B practice. Your emails must follow CAN-SPAM rules: include your business address, an unsubscribe option, and identify the message as marketing. WebLeads provides verified contacts; compliance is your responsibility.",
          },
          {
            question: "What information comes with each accountant contact?",
            answer: "Each result includes firm name, address, phone, website, Google rating, and review count. Add people enrichment to get the owner or managing partner name, role, and a verified professional email.",
          },
          {
            question: "How fresh is the data?",
            answer: "WebLeads searches Google Maps in real time on every request. There is no pre-compiled database. Emails are SMTP-verified at the time of delivery, so you get current data, not contacts that were accurate six months ago.",
          },
          {
            question: "Can I search for accountants in a specific city or state?",
            answer: "Yes. You set the location when you run a search. Run multiple searches across different cities, export each list independently, and combine them. You only pull data for the markets you actually need.",
          },
          ...pricingLinkedFaqs,
        ]}
      />

      {/* Final CTA */}
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
                Ready to build your accountant list?
              </h2>
              <p className="text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
                Search any city, get verified CPA contacts, export in minutes. No contracts, no sales calls.
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
                <Link href="/real-estate-leads" className="text-brand-accent hover:underline">real estate agent email list</Link>
                {" · "}
                <Link href="/blog/marketing-agency-leads" className="text-brand-accent hover:underline">marketing agency leads</Link>
                {" · "}
                <Link href="/local-lead-generation" className="text-brand-accent hover:underline">lead generation software</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
