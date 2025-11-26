import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  Download, 
  Search,
  CheckCircle2,
  ArrowRight,
  Building2,
  TrendingUp,
  Shield,
  Home,
  DollarSign,
  XCircle,
  Gem,
  Star
} from "lucide-react"
import Link from "next/link"
import { StatsBar } from "@/components/landing/stats-bar"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { HowItWorksLanding } from "@/components/landing/how-it-works-landing"
import { UseCasesGrid } from "@/components/landing/use-cases-grid"
import { FAQSection } from "@/components/landing/faq-section-landing"

export const metadata: Metadata = {
  title: "Real Estate Leads - Search Google Maps & Get Verified Contact Data | WebLeads",
  description: "Search Google Maps in real-time for real estate agents and brokers. Get verified emails, phone numbers, decision-maker data, and social profiles. Start free with 500 credits. Growth: $24.99/28k leads.",
  keywords: "real estate leads, real estate agent leads, realtor leads, broker leads, real estate contacts, find real estate agents, google maps real estate leads",
  openGraph: {
    title: "Real Estate Leads - Find Agents & Brokers from Google Maps",
    description: "Find any real estate professional on Google Maps with verified contact data. Perfect for mortgage lenders, insurance agents, and service providers.",
    url: "https://webleads.site/real-estate-leads",
    type: "website",
    images: [{
      url: "/images/real-estate-leads-og.jpg",
      width: 1200,
      height: 630,
      alt: "Real Estate Leads from Google Maps"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Real Estate Leads - Find Agents & Brokers from Google Maps",
    description: "Find any real estate agent on Google Maps with verified emails, phone numbers, and profiles. Start free.",
    images: ["/images/real-estate-leads-og.jpg"]
  },
  alternates: {
    canonical: "https://webleads.site/real-estate-leads"
  }
}

export default function RealEstateLeadsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Real Estate Leads by WebLeads",
    "description": "Find any real estate agent or broker on Google Maps with verified emails, phone numbers, decision-maker data, and social profiles. Deep website crawling with Playwright. FREE email verification coming soon. Start free with 500 credits. Growth: $24.99/month for 28,000 credits.",
    "brand": {
      "@type": "Brand",
      "name": "WebLeads"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "21.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    }
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many real estate agents can I find with WebLeads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can find any real estate professional listed on Google Maps in the US including realtors, brokers, property managers, and real estate agencies. Our data comes fresh from Google Maps and is updated daily as new businesses are added."
        }
      },
      {
        "@type": "Question",
        "name": "Can I target specific locations for real estate leads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Search by city, state, or ZIP code. For example: 'real estate agents in Los Angeles' or 'realtors in Miami, FL'. You can also filter by agency size, ratings, and years in business."
        }
      },
      {
        "@type": "Question",
        "name": "What data do you provide for each real estate agent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each real estate lead includes: agent/broker name, business phone number, email address, office address, agency name, website, social profiles (LinkedIn, Facebook), years in business, ratings, and review count."
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
              🏠 Search Google Maps in Real-Time • Fresh Data Daily
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight tracking-tight">
              Get Real Estate Leads with Verified Agent & Broker Contact Data
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Search Google Maps for real estate agents, brokers, and agencies in any location. We enrich with verified emails, 
              phone numbers, decision-maker data, and social profiles from company websites. <strong className="text-brand-primary">Perfect for agencies, founders, and SMBs building B2B outreach campaigns.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-6 sm:mb-8">
              <Button 
                size="lg" 
                asChild
                className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl w-full sm:w-auto"
              >
                <Link href="/#waitlist-form" className="flex items-center justify-center">
                  Start Free with 500 Credits
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
                  View Pricing
                </Link>
              </Button>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-600">
              ✓ No credit card required  ✓ 1 credit = 1 agent  ✓ Start with 500 free credits
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar 
        stats={[
          { value: "Any Location", label: "Search Nationwide", icon: <Home className="h-6 w-6" /> },
          { value: "$0.89", label: "Per 1,000 Leads (Growth)", icon: <DollarSign className="h-6 w-6" /> },
          { value: "95%", label: "Email Accuracy", icon: <Shield className="h-6 w-6" /> },
          { value: "Google Maps", label: "Fresh Data Daily", icon: <MapPin className="h-6 w-6" /> }
        ]}
      />

      {/* How It Works */}
      <HowItWorksLanding 
        steps={[
          {
            number: 1,
            title: "Search Google Maps for Real Estate Agents",
            description: "Enter 'real estate agents in [city]' or 'realtors near [ZIP code]'. WebLeads searches Google Maps in real-time (not from a static database) to find active agents and brokers.",
            icon: <Search className="h-6 w-6" />
          },
          {
            number: 2,
            title: "We Enrich from Company Websites",
            description: "Playwright crawls company websites (not just homepages!) to extract agent names, phone numbers, emails, office addresses, agency names, websites, decision-maker data, and social profiles (LinkedIn, Facebook).",
            icon: <Users className="h-6 w-6" />
          },
          {
            number: 3,
            title: "Credits Auto-Charged Per Agent",
            description: "1 credit = 1 real estate agent. When your search completes, credits are charged based on results found. Only pay for what you unlock. Credits roll over up to 6 months.",
            icon: <DollarSign className="h-6 w-6" />
          },
          {
            number: 4,
            title: "Export Real Estate Leads to CSV",
            description: "Download all agent contacts in CSV format. Import into your CRM or use for email campaigns, cold calling, or partnership outreach. Export is free once you've unlocked leads.",
            icon: <Download className="h-6 w-6" />
          }
        ]}
      />

      {/* Features Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              Real Estate Leads - Complete Agent & Broker Data
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Everything you need to reach real estate professionals
            </p>
          </div>
          
          <FeaturesGrid 
            features={[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Agent & Broker Names",
                description: "Get full names of real estate agents, brokers, and office managers. Perfect for personalized outreach and relationship building."
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Direct Phone Numbers",
                description: "Business phone numbers for real estate offices and agents. Reach decision makers directly for partnerships and services."
              },
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Verified Email Addresses",
                description: "Agent and office email addresses verified for deliverability. Perfect for email marketing campaigns to real estate professionals."
              },
              {
                icon: <Building2 className="h-8 w-8" />,
                title: "Agency Information",
                description: "Agency names, office addresses, and brokerage details. Target specific real estate companies or independent agents."
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Geographic Targeting",
                description: "Search by city, state, ZIP code, or neighborhood. Perfect for local service providers targeting specific territories."
              },
              {
                icon: <Download className="h-8 w-8" />,
                title: "Instant CSV Export",
                description: "Export real estate leads to CSV with one click. Import into Salesforce, HubSpot, or any CRM for immediate follow-up."
              }
            ]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-brand-light to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              Simple, Transparent Pricing
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Pay only for the real estate agents you access. 1 credit = 1 business. Start free, upgrade when you need more.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {/* Discover Plan (Usage-Based) */}
            <Card className="border-2 border-gray-200 hover:border-orange-500 transition-all rounded-xl shadow-sm hover:shadow-md relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs sm:text-sm px-3 py-1 font-semibold">
                USAGE-BASED
              </Badge>
              <CardHeader className="p-6 pt-8">
                <CardTitle className="text-xl sm:text-2xl font-bold text-brand-secondary">Discover</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl sm:text-4xl font-bold text-brand-primary">$0.00</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">500 credits</p>
                <p className="text-xs text-gray-500 mt-1">According to top ups prices per 1K leads</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">1 active search</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Export to CSV/Excel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Agent name & agency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Address & location data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Google Maps ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Number of Google ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Email addresses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Social media links</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Decision makers (names & roles)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Can buy more credits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Priority support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-hover hover:from-brand-primary-hover hover:to-brand-primary text-white rounded-xl shadow-lg">
                  <Link href="/#waitlist-form">Select Plan</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Starter Plan */}
            <Card className="border-2 border-gray-200 hover:border-green-500 transition-all rounded-xl shadow-sm hover:shadow-md relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs sm:text-sm px-3 py-1 font-semibold">
                POPULAR
              </Badge>
              <CardHeader className="p-6 pt-8">
                <CardTitle className="text-xl sm:text-2xl font-bold text-brand-secondary">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl sm:text-4xl font-bold text-brand-primary">$9.99</span>
                  <span className="text-sm sm:text-base text-gray-600"> per month</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">10,000 credits</p>
                <p className="text-xs text-green-600 font-semibold mt-1">$1.00 per 1K agents</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">1 active search</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Export to CSV/Excel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Agent name & agency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Address & location data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Google Maps ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Number of Google ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Email addresses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Social media links</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Decision makers (names & roles)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Can buy more credits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Priority support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-hover hover:from-brand-primary-hover hover:to-brand-primary text-white rounded-xl shadow-lg">
                  <Link href="/#waitlist-form">Select Plan</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Growth Plan (Best Value) */}
            <Card className="border-4 border-purple-500 relative shadow-xl rounded-xl bg-gradient-to-br from-purple-50/50 to-pink-50/50">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs sm:text-sm px-3 py-1 font-semibold flex items-center gap-1 shadow-md">
                <Gem className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                BEST VALUE
              </Badge>
              <CardHeader className="p-6 pt-8">
                <CardTitle className="text-xl sm:text-2xl font-bold text-brand-secondary">Growth</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl sm:text-4xl font-bold text-brand-primary">$24.99</span>
                  <span className="text-sm sm:text-base text-gray-600"> per month</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">28,000 credits</p>
                <p className="text-xs text-purple-600 font-semibold mt-1">$0.89 per 1K agents</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs sm:text-sm text-purple-600 font-semibold">Up to 3 active searches</span>
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-md font-semibold flex items-center gap-1 shadow-sm">
                        <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-white" />
                        PREMIUM
                      </Badge>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Export to CSV/Excel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Agent name & agency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Address & location data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Google Maps ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Number of Google ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Email addresses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Social media links</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Decision makers (names & roles)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Can buy more credits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">Priority support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-hover hover:from-brand-primary-hover hover:to-brand-primary text-white rounded-xl shadow-lg">
                  <Link href="/#waitlist-form">Select Plan</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Comparison */}
          <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-brand-primary mb-6 sm:mb-8 px-2">
              Why Choose WebLeads for Real Estate Leads?
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2">
                    <th className="p-4 text-gray-700">Feature</th>
                    <th className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-brand-primary">WebLeads</span>
                        <span className="text-sm text-brand-accent">Growth Plan</span>
                      </div>
                    </th>
                    <th className="p-4 text-center text-gray-700">Traditional Lead Lists</th>
                    <th className="p-4 text-center text-gray-700">Manual Research</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Monthly Cost</td>
                    <td className="p-4 text-center">
                      <span className="text-2xl font-bold text-brand-primary">$24.99</span>
                      <br /><span className="text-sm">(Growth Plan)</span>
                    </td>
                    <td className="p-4 text-center text-gray-700">$400-$800<br /><span className="text-sm">for similar volume</span></td>
                    <td className="p-4 text-center text-gray-700">$0<br /><span className="text-sm">but extremely time-consuming</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Data Source</td>
                    <td className="p-4 text-center">
                      <span className="font-bold text-brand-primary">Real-Time Google Maps Search</span>
                      <br /><span className="text-xs text-gray-600">+ Company Website Crawling</span>
                    </td>
                    <td className="p-4 text-center text-gray-700">6-12 months old database</td>
                    <td className="p-4 text-center text-gray-700">Real-time but slow</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Email Accuracy</td>
                    <td className="p-4 text-center">
                      <span className="font-bold text-brand-accent">95%+</span>
                    </td>
                    <td className="p-4 text-center text-gray-700">60-70% (stale data)</td>
                    <td className="p-4 text-center text-gray-700">90%+ but time-consuming</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Setup Time</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /><span className="text-sm block">30 seconds</span></td>
                    <td className="p-4 text-center text-gray-700">1-3 days<br /><span className="text-sm">(negotiation + delivery)</span></td>
                    <td className="p-4 text-center text-gray-700">Weeks of manual work</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Geographic Targeting</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /><span className="text-sm block">Any city</span></td>
                    <td className="p-4 text-center text-gray-700">Limited options</td>
                    <td className="p-4 text-center text-gray-700">Flexible but slow</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Phone Numbers Included</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-gray-400 mx-auto" /><span className="text-sm block">Often extra cost</span></td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">Export to CSV</td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                        <span className="text-xs font-semibold text-brand-primary mt-1">Instant & Free</span>
                      </div>
                    </td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center text-gray-700">Manual spreadsheet work</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-hover text-white">
                <Link href="/#waitlist-form">
                  Start with 500 Free Credits
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                💡 <strong>50x cheaper</strong> than traditional lead lists • <strong>400x faster</strong> than manual research • <strong>Daily fresh data</strong> from Google Maps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <UseCasesGrid 
        title="Who Uses Our Real Estate Leads?"
        subtitle="Perfect for businesses that serve real estate professionals"
        cases={[
          {
            icon: <DollarSign className="h-8 w-8" />,
            title: "Mortgage Lenders & Brokers",
            description: "Build relationships with real estate agents for loan referrals. Partner with top agents in your local market.",
            benefits: ["Agent contact data", "Office addresses for visits", "Email campaigns for co-marketing"]
          },
          {
            icon: <Shield className="h-8 w-8" />,
            title: "Insurance Agents",
            description: "Connect with realtors to offer homeowners insurance, title insurance, and property protection services.",
            benefits: ["Target by location", "Phone numbers for cold calling", "LinkedIn profiles for social selling"]
          },
          {
            icon: <Building2 className="h-8 w-8" />,
            title: "Title Companies",
            description: "Develop agent relationships for steady title and escrow business. Target new agents and growing agencies.",
            benefits: ["Find new agencies opening", "Track agent moves & transitions", "Build referral partnerships"]
          },
          {
            icon: <Home className="h-8 w-8" />,
            title: "Home Service Providers",
            description: "Partner with agents for home inspection, staging, cleaning, landscaping, and repair referrals.",
            benefits: ["Local agent targeting", "Pre-listing service offers", "Agent newsletter sponsorships"]
          },
          {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Real Estate Tech & Software",
            description: "Sell CRM software, marketing tools, lead generation platforms, and transaction management systems to agents.",
            benefits: ["Decision maker contacts", "Agency size filtering", "Tech adoption indicators"]
          },
          {
            icon: <Users className="h-8 w-8" />,
            title: "Recruiting & Training",
            description: "Recruit agents to your brokerage or sell training, coaching, and professional development programs.",
            benefits: ["Individual agent contacts", "Identify dissatisfied agents", "Target career changers"]
          }
        ]}
      />

      {/* FAQ Section */}
      <FAQSection 
        title="Real Estate Leads FAQ"
        faqs={[
          {
            question: "How many real estate agents can I find with WebLeads?",
            answer: "You can find any real estate professional listed on Google Maps in the United States, including real estate agents, brokers, property managers, and real estate agencies. We search Google Maps in real-time, so you always get the most current contact information as businesses update their profiles."
          },
          {
            question: "Can I target specific locations for real estate leads?",
            answer: "Yes! Search by city, state, ZIP code, or even neighborhood. For example: 'real estate agents in Los Angeles, CA' or 'realtors in 90210' or 'brokers near Times Square, New York'. You can also filter results by ratings, review count, and years in business to target top performers."
          },
          {
            question: "What data do you provide for each real estate agent?",
            answer: "Each real estate lead includes: agent/broker full name, business phone number, email address (verified), office address, agency/brokerage name, website URL, social media profiles (LinkedIn, Facebook, Instagram), years in business, ratings, review count, and office hours. Everything you need for personalized outreach."
          },
          {
            question: "How accurate are the email addresses for real estate agents?",
            answer: "Our real estate agent emails have a 95%+ accuracy rate because they come from verified Google Business profiles that agents maintain themselves. We also run email validation checks to ensure deliverability. This is much more accurate than purchased lists that can be 6-12 months out of date."
          },
          {
            question: "Can I export real estate leads to my CRM?",
            answer: "Yes! Export is completely free once you've unlocked leads with your credits. Download as CSV and import into Salesforce, HubSpot, Zoho CRM, Pipedrive, or any system that accepts CSV files. The export includes all contact fields formatted for easy import."
          },
          {
            question: "How is this different from buying a real estate lead list?",
            answer: "Traditional lead lists cost $400-$800 for 8,000 contacts and the data is often 6-12 months old (60-70% accuracy). WebLeads costs $24.99 for 28,000 contacts with 95%+ accuracy, plus you get FREE email verification (coming soon), decision-maker data (agent names + roles), and the ability to queue up to 5 searches at once. Our data comes fresh from Google Maps daily with deep website crawling using Playwright. You also get to choose exactly which markets and agents you want, not just buy a pre-made list."
          },
          {
            question: "Do I get phone numbers for real estate agents?",
            answer: "Yes! Business phone numbers are included for all real estate agents and brokers. These are the main office numbers listed on Google Maps. Perfect for cold calling, appointment setting, or building relationships through phone outreach. Note: these are business numbers, not personal cell phones."
          },
          {
            question: "Can I search for real estate agents in multiple cities?",
            answer: "Yes! Run separate searches for each city or state. For example, search 'real estate agents in Miami' (uses credits), then search 'real estate agents in Tampa' (uses more credits), and so on. Each search is independent, so you can build lists across multiple markets and export them all together."
          },
          {
            question: "Is there a free trial?",
            answer: "Yes! Start with 500 free credits (enough for 500 real estate agents) with no credit card required. Test the data quality, search accuracy, and export functionality before upgrading. Most users upgrade to Growth ($24.99 for 28,000 credits) after trying the free plan because the data quality is so much better than traditional lists, plus you get decision-maker data, deep website crawling, and FREE email verification coming soon."
          },
          {
            question: "Do credits roll over to the next month?",
            answer: "Yes! Credits roll over to the next month and can accumulate up to 6 months. This means unused credits from your monthly plan will carry forward, giving you flexibility to use them when needed. However, credits expire after 6 months, so make sure to use them within that timeframe. Any businesses you've already unlocked stay accessible forever - you won't lose access to past searches."
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
                Start Getting Real Estate Leads Today
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
                Join marketing agencies, Business owners, and B2B service providers who use WebLeads to find verified real estate contacts. Scale your outreach with accurate emails, phone numbers, and decision-maker data. Export to CSV instantly. Start free with 500 credits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2 mb-8 sm:mb-12">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border border-white/10 w-full sm:w-auto"
                >
                  <Link href="/#waitlist-form" className="flex items-center justify-center">
                    Start Free with 500 Credits
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
                    View Pricing Plans
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
                  <span>Any agent on Google Maps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>95% email accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Updated daily</span>
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
