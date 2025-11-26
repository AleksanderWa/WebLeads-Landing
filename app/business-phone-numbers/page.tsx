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
  Zap,
  Clock,
  DollarSign,
  XCircle,
  Gem,
  Star,
  Info
} from "lucide-react"
import Link from "next/link"
import { StatsBar } from "@/components/landing/stats-bar"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { HowItWorksLanding } from "@/components/landing/how-it-works-landing"
import { UseCasesGrid } from "@/components/landing/use-cases-grid"
import { FAQSection } from "@/components/landing/faq-section-landing"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: "Get Business Phone Numbers from Google Maps | WebLeads",
  description: "Extract verified business phone numbers + emails from Google Maps. Start free with 500 credits. Growth: $24.99/28k leads at $0.89 per 1,000.",
  keywords: "business phone numbers, find business contacts, company phone numbers, verified business contacts, b2b phone numbers",
  openGraph: {
    title: "Business Phone Numbers - Starting at $0.89 per 1,000 Leads",
    description: "Find any business on Google Maps with phone numbers, emails, and contact data. Start free with 500 credits, upgrade to Starter for $9.99/month (10,000 credits) or Growth for $24.99/month (28,000 credits).",
    url: "https://webleads.site/business-phone-numbers",
    type: "website",
    images: [{
      url: "/images/business-phone-numbers-og.jpg",
      width: 1200,
      height: 630,
      alt: "Business Phone Numbers from Google Maps"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Business Phone Numbers - Starting at $0.89 per 1,000 Leads",
    description: "Find business phone numbers from Google Maps. Start free with 500 credits, upgrade to Starter ($9.99) or Growth ($24.99) for more credits.",
    images: ["/images/business-phone-numbers-og.jpg"]
  },
  alternates: {
    canonical: "https://webleads.site/business-phone-numbers"
  }
}

export default function BusinessPhoneNumbersPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Business Phone Numbers by WebLeads",
    "description": "Find any business on Google Maps with verified phone numbers, emails, addresses, and owner info. Start free with 500 credits.",
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
        "name": "How does WebLeads pricing work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebLeads uses a credit-based system: 1 credit = 1 business. Start free with 500 credits. Growth plan ($24.99/month) gives you 28,000 credits at just $0.89 per 1,000 leads."
        }
      },
      {
        "@type": "Question",
        "name": "Can I export business phone numbers to CSV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Export is free once you've unlocked businesses with your credits. The CSV includes phone numbers, emails, addresses, owner names, social profiles, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Start free with 500 credits (500 businesses). No credit card required. Upgrade to Starter ($9.99) for 10,000 credits/month or Growth ($24.99) for 28,000 credits/month."
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
              💰 Starting at $0.89 per 1,000 leads • Search Google Maps in real-time
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight tracking-tight">
              Get Business Phone Numbers with Verified Contact Data from Google Maps
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Find business phone numbers from any company on Google Maps worldwide. Get verified phone numbers, emails, 
              addresses, owner names, and social profiles. <strong className="text-brand-primary">Start free with 500 credits.</strong>
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
              ✓ No credit card required  ✓ 1 credit = 1 business  ✓ Start with 500 free credits
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar 
        stats={[
          { value: "Any Business", label: "On Google Maps", icon: <Phone className="h-6 w-6" /> },
          { value: "$0.89", label: "Per 1,000 Leads (Growth)", icon: <DollarSign className="h-6 w-6" /> },
          { value: "95%", label: "Data Accuracy", icon: <Shield className="h-6 w-6" /> },
          { value: "195", label: "Countries Covered", icon: <MapPin className="h-6 w-6" /> }
        ]}
      />

      {/* How It Works */}
      <HowItWorksLanding 
        steps={[
          {
            number: 1,
            title: "Search by Industry & Location",
            description: "Enter any business type (e.g., 'restaurants', 'plumbers', 'dentists') and location. Our system searches Google Maps in real-time.",
            icon: <Search className="h-6 w-6" />
          },
          {
            number: 2,
            title: "We Extract Phone Numbers & Contacts",
            description: "Our scraper automatically extracts phone numbers, emails, addresses, owner names, websites, and social media profiles.",
            icon: <Phone className="h-6 w-6" />
          },
          {
            number: 3,
            title: "Credits Auto-Charged (1 credit = 1 business)",
            description: "When your search completes, credits are charged based on results found. You only see businesses you have credits for.",
            icon: <DollarSign className="h-6 w-6" />
          },
          {
            number: 4,
            title: "Export to CSV Instantly",
            description: "Download all unlocked business phone numbers and contact data in CSV format. Import into your CRM or use for cold outreach.",
            icon: <Download className="h-6 w-6" />
          }
        ]}
      />

      {/* Features Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              Business Phone Numbers & Complete Contact Data in One Place
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Get complete business contact data, not just phone numbers
            </p>
          </div>
          
          <FeaturesGrid 
            features={[
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Business Phone Numbers",
                description: "Main business phone numbers from Google Maps. Reach businesses directly with verified, up-to-date contact information."
              },
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Verified Email Addresses",
                description: "Get business emails and owner email addresses. Perfect for cold email campaigns with high deliverability."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Owner & Decision Maker Info",
                description: "Know who to contact. Get owner and manager names with their roles for personalized outreach to the right people."
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Complete Business Address",
                description: "Full business addresses with street, city, state, ZIP code. Perfect for local outreach and territory planning."
              },
              {
                icon: <Building2 className="h-8 w-8" />,
                title: "Social Media Profiles",
                description: "LinkedIn, Facebook, Twitter, Instagram profiles. Research prospects before reaching out."
              },
              {
                icon: <Download className="h-8 w-8" />,
                title: "Instant CSV Export",
                description: "Export unlocked business phone numbers to CSV with one click. Import into any CRM or sales tool."
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
              Pay only for the businesses you access. 1 credit = 1 business. Start free, upgrade when you need more.
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
                    <span className="text-xs sm:text-sm text-gray-700">Business name & category</span>
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
                <p className="text-xs text-green-600 font-semibold mt-1">$1.00 per 1K leads</p>
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
                    <span className="text-xs sm:text-sm text-gray-700">Business name & category</span>
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
                <p className="text-xs text-purple-600 font-semibold mt-1">$0.89 per 1K leads</p>
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
                    <span className="text-xs sm:text-sm text-gray-700">Business name & category</span>
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

          {/* Pricing Comparison vs Competitors */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-brand-primary mb-2 px-2">
              How WebLeads Compares to Competitors
            </h3>
            <p className="text-center text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 px-2">
              Comparing highest-tier plans across platforms
            </p>
            
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-left min-w-[800px]">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-700">Feature</th>
                    <th className="p-3 sm:p-4 text-center bg-brand-light/50 relative">
                      <div className="flex flex-col items-center pt-2 sm:pt-4">
                        <span className="font-bold text-brand-primary text-base sm:text-lg">WebLeads</span>
                        <span className="text-xs sm:text-sm text-brand-accent">Growth Plan</span>
                      </div>
                    </th>
                    <th className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">LeadSwift<br /><span className="text-[10px] text-gray-500">(Agency)</span></th>
                    <th className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">Map Lead Scraper</th>
                    <th className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">Scrap.io<br /><span className="text-[10px] text-gray-500">(Agency)</span></th>
                    <th className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">Outscraper</th>
                    <th className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">Apify<br /><span className="text-[10px] text-gray-500">(Business)</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900">Monthly Price</td>
                    <td className="p-3 sm:p-4 text-center bg-brand-light/30">
                      <div className="flex flex-col items-center">
                        <span className="text-2xl sm:text-3xl font-bold text-brand-primary">$24.99</span>
                        <span className="text-xs text-green-600 font-semibold mt-1">Best for agencies</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">$99.99<br /><span className="text-xs">(Agency)</span></td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">$19.90<br /><span className="text-xs">(Pro Monthly)</span></td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">$199<br /><span className="text-xs">(Agency)</span></td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">$2.85/1k<br /><span className="text-xs">(Pay-per-use)</span></td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">$2.10/1k base<br /><span className="text-xs">+ $5.05/1k add-ons</span><br /><span className="text-xs text-gray-500">($7.15/1k total)</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900">Credits/Month</td>
                    <td className="p-3 sm:p-4 text-center bg-brand-light/30">
                      <div className="flex flex-col items-center">
                        <span className="text-lg sm:text-xl font-bold text-brand-primary">28,000 leads</span>
                        <span className="text-xs text-gray-600 mt-1">Up to 3 active searches</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">20 searches/day<br /><span className="text-xs text-gray-500">(Unlimited leads per search)</span></td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">100,000/month<br /><span className="text-xs text-gray-500">(Fixed limit)</span></td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">40,000/month<br /><span className="text-xs text-gray-500">(Agency tier)</span></td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">Pay-per-use<br /><span className="text-xs text-gray-500">(500 free/month)</span></td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">$39 credits<br /><span className="text-xs text-gray-500">(Then pay-as-you-go)</span></td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900">Cost per 1,000 Leads</td>
                    <td className="p-3 sm:p-4 text-center bg-brand-light/30">
                      <div className="flex flex-col items-center">
                        <span className="text-xl sm:text-2xl font-bold text-purple-600">$0.89</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">~$5.00<br /><span className="text-xs text-gray-500">(Agency plan)</span></td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">$0.20<br /><span className="text-xs text-gray-500">(100k monthly plan)</span></td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">$4.98<br /><span className="text-xs text-gray-500">(40k credits)</span></td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">$2.85<br /><span className="text-xs text-gray-500">(After free tier)</span></td>
                    <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-700">$7.15<br /><span className="text-xs text-gray-500">(With decision makers)</span></td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900">Business Phone Numbers</td>
                    <td className="p-3 sm:p-4 text-center bg-brand-light/30"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                    <td className="p-3 sm:p-4 text-center"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                    <td className="p-3 sm:p-4 text-center"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                    <td className="p-3 sm:p-4 text-center"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                    <td className="p-3 sm:p-4 text-center"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                    <td className="p-3 sm:p-4 text-center"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900">Email Addresses</td>
                    <td className="relative p-3 sm:p-4 text-center bg-brand-light/30">
                      <TooltipProvider>
                        <Tooltip delayDuration={300}>
                          <TooltipTrigger asChild>
                            <Info className="absolute top-2 right-2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 hover:text-blue-500 cursor-help transition-colors" />
                          </TooltipTrigger>
                          <TooltipContent 
                            className="max-w-xs" 
                            style={{ 
                              animation: 'none',
                              transition: 'none',
                              transform: 'none'
                            }}
                          >
                            <p className="text-xs">WebLeads first discovers all associated company pages and crawls each one of them to provide the most accurate results</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        <span className="text-xs text-gray-600 mt-1">All related company pages</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                    <td className="p-3 sm:p-4 text-center"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        <span className="text-xs text-gray-500 mt-1">Google Maps only</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                    <td className="p-3 sm:p-4 text-center"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                  </tr>
                  {/*
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900">Search Any Business Type</td>
                    <td className="p-3 sm:p-4 text-center bg-brand-light/30">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                    <td className="p-3 sm:p-4 text-center"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                    <td className="p-3 sm:p-4 text-center"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                    <td className="p-3 sm:p-4 text-center"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                    <td className="p-3 sm:p-4 text-center"><CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" /></td>
                  </tr>
                  */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50 bg-brand-light/30 transition-colors">
                    <td className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-brand-primary">Decision-Maker Data</td>
                    <td className="relative p-3 sm:p-4 text-center bg-green-50 border-2 border-green-200">
                      <TooltipProvider>
                        <Tooltip delayDuration={300}>
                          <TooltipTrigger asChild>
                            <Info className="absolute top-2 right-2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 hover:text-blue-500 cursor-help transition-colors" />
                          </TooltipTrigger>
                          <TooltipContent 
                            className="max-w-xs" 
                            style={{ 
                              animation: 'none',
                              transition: 'none',
                              transform: 'none'
                            }}
                          >
                            <p className="text-xs">WebLeads first discovers all associated company pages and crawls each one of them to provide the most accurate results</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-green-600" />
                        <span className="text-xs sm:text-sm font-bold text-green-700 mt-1">Roles & Names</span>
                        <span className="text-xs text-gray-600 mt-0.5">Emails Coming Soon</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-700 mx-auto" />
                        <span className="text-xs text-green-600 mt-1">Roles & Names & emails</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 mx-auto" />
                        <span className="text-xs text-red-600 mt-1">Not included</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 mx-auto" />
                        <span className="text-xs text-red-600 mt-1">Not included</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 mx-auto" />
                        <span className="text-xs text-red-600 mt-1">Not included</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" />
                        <span className="text-xs text-gray-600 mt-1">$4.00/1k extra</span>
                      </div>
                    </td>
                  </tr>
                  {/*
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900">Automation & Queuing</td>
                    <td className="p-3 sm:p-4 text-center bg-brand-light/30">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        <span className="text-xs font-semibold text-green-700 mt-1">Up to 3 active searches</span>
                        <span className="text-xs text-gray-500 mt-1">API + Webhooks (coming soon)</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        <span className="text-xs text-gray-600 mt-1">API + Email automation</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                        <span className="text-xs text-red-600 mt-1">Manual only</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        <span className="text-xs text-gray-600 mt-1">API access</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        <span className="text-xs text-gray-600 mt-1">API + webhooks</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        <span className="text-xs text-gray-600 mt-1">API + integrations</span>
                      </div>
                    </td>
                  </tr>
                  */}
                  {/*
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900">Email Verification Cost</td>
                    <td className="p-3 sm:p-4 text-center bg-brand-light/30">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        <span className="text-lg sm:text-xl font-bold text-green-600 mt-1">FREE</span>
                        <span className="text-xs text-gray-500 mt-1">SMTP + Catch-All (Coming soon)</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                        <span className="text-xs sm:text-sm text-gray-700 mt-1">Not available</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                        <span className="text-xs sm:text-sm text-gray-700 mt-1">Not available</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                        <span className="text-xs sm:text-sm text-gray-700 mt-1">Not available</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-base sm:text-lg font-semibold text-gray-900 mt-1">$5.00</span>
                        <span className="text-xs text-gray-600 mt-1">per 1,000 leads</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                        <span className="text-xs sm:text-sm text-gray-700 mt-1">Not available</span>
                      </div>
                    </td>
                  </tr>
                  */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-gray-900">Free Plan Available</td>
                    <td className="p-3 sm:p-4 text-center bg-brand-light/30">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        <span className="text-xs font-semibold text-brand-primary mt-1">500 leads/mo</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        <span className="text-xs text-gray-600 mt-1">7-day free trial</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        <span className="text-xs text-gray-600 mt-1">1,000 leads/mo</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        <span className="text-xs text-gray-600 mt-1">100 leads trial</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        <span className="text-xs text-gray-600 mt-1">500 free</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                        <span className="text-xs text-gray-600 mt-1">Free trial</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 bg-brand-light/30 transition-colors">
                    <td className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-brand-primary">Limited Searches</td>
                    <td className="p-3 sm:p-4 text-center bg-green-50 border-2 border-green-200">
                      <div className="flex flex-col items-center">
                        <XCircle className="h-6 w-6 sm:h-7 sm:w-7 text-green-600 mx-auto" />
                        <span className="text-xs sm:text-sm font-bold text-green-700 mt-1">UNLIMITED</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 mx-auto" />
                        <span className="text-xs text-red-600 mt-1">20/day</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 mx-auto" />
                        <span className="text-xs text-red-600 mt-1">Limited</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 mx-auto" />
                        <span className="text-xs text-red-600 mt-1">Pay-per-use</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 mx-auto" />
                        <span className="text-xs text-red-600 mt-1">Pay-per-use</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 mx-auto" />
                        <span className="text-xs text-red-600 mt-1">Pay-per-use</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 bg-brand-light/30 transition-colors">
                    <td className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-brand-primary">Pay Per Lead</td>
                    <td className="p-3 sm:p-4 text-center bg-green-50 border-2 border-green-200">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-green-600 mx-auto" />
                        <span className="text-xs sm:text-sm font-bold text-green-700 mt-1">YES</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 mx-auto" />
                        <span className="text-xs text-red-600 mt-1">Per Search</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" />
                        <span className="text-xs font-bold text-green-600 mt-1">YES</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" />
                        <span className="text-xs font-bold text-green-600 mt-1">YES</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" />
                        <span className="text-xs font-bold text-green-600 mt-1">YES</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mx-auto" />
                        <span className="text-xs font-bold text-green-600 mt-1">YES</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 sm:mt-8 text-center px-2">
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                <Link href="/#waitlist-form" className="flex items-center justify-center">
                  Start with Growth Plan ($24.99)
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <p className="text-xs sm:text-sm text-gray-600 mt-4">
                💡 <strong>Simple transparent pricing</strong> • <strong>Up to 3 active searches</strong> • <strong>Decision-maker data included</strong> • <strong>Deep website crawling for emails</strong> • <strong>Up to 3x cheaper</strong> than competitors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <UseCasesGrid 
        title="Perfect for Every Business Need"
        subtitle="See how businesses use WebLeads to find phone numbers"
        cases={[
          {
            icon: <Phone className="h-8 w-8" />,
            title: "Cold Calling Campaigns",
            description: "Build targeted call lists with verified business phone numbers. Skip bad numbers and reach the right businesses.",
            benefits: ["Verified business numbers", "Owner/manager names & roles", "Business hours included"]
          },
          {
            icon: <Mail className="h-8 w-8" />,
            title: "Multi-Channel Outreach",
            description: "Combine phone calls with email and LinkedIn outreach for maximum response rates.",
            benefits: ["Phone + email + social", "Personalized approach", "Higher conversion rates"]
          },
          {
            icon: <Building2 className="h-8 w-8" />,
            title: "Market Research",
            description: "Gather business contact data for competitive analysis, market sizing, and territory planning.",
            benefits: ["Competitor analysis", "Market intelligence", "Territory mapping"]
          },
          {
            icon: <Users className="h-8 w-8" />,
            title: "Partnership Outreach",
            description: "Find potential business partners with verified contact information for collaboration opportunities.",
            benefits: ["B2B partnerships", "Supplier sourcing", "Distribution networks"]
          },
          {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Sales Prospecting",
            description: "Build targeted prospect lists with business phone numbers for your sales team.",
            benefits: ["Search any business type", "Filter by industry", "Target specific locations"]
          },
          {
            icon: <Search className="h-8 w-8" />,
            title: "Lead Generation",
            description: "Generate fresh leads daily with accurate business phone numbers and contact data.",
            benefits: ["Daily fresh data", "Any industry", "Any location worldwide"]
          }
        ]}
      />

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "How does WebLeads pricing work?",
            answer: "WebLeads uses a simple credit-based system: 1 credit = 1 business. Start free with 500 credits. When you search for businesses, credits are automatically charged when the search completes (not when you export). Growth plan gives you 28,000 credits/month for $24.99, which is just $0.89 per 1,000 leads with up to 3 active searches."
          },
          {
            question: "What happens when I run out of credits?",
            answer: "When your search finds more businesses than you have credits, you'll see the results you have credits for, and the rest will be locked. You can buy credit top-ups or upgrade to Starter ($9.99/month for 10,000 credits) or Growth ($24.99/month for 28,000 credits) to unlock them. Once unlocked, businesses stay accessible forever."
          },
          {
            question: "Can I export business phone numbers to CSV?",
            answer: "Yes! Export is completely free once you've unlocked businesses with your credits. The CSV file includes all contact data: phone numbers, emails, addresses, owner names, social profiles, and more. Import directly into your CRM, spreadsheet, or sales tool."
          },
          {
            question: "Is there a free plan?",
            answer: "Yes! Start with 500 free credits (500 businesses) with no credit card required. You can search unlimited times, but credits are only charged when searches complete. Upgrade to Starter ($9.99) for 10,000 credits/month or Growth ($24.99) for 28,000 credits/month."
          },
          {
            question: "How accurate are the business phone numbers?",
            answer: "Our business phone numbers come directly from Google Maps, where businesses update their own information. We search Google Maps in real-time and verify phone numbers and emails for accuracy, achieving a 95%+ accuracy rate. This means you get fresh, current data instead of outdated contact lists."
          },
          {
            question: "What data points do you provide besides phone numbers?",
            answer: "Along with business phone numbers, you get: verified email addresses, full business address, owner/manager names and roles, website URLs, business social media profiles (LinkedIn, Facebook, Twitter, Instagram), business hours, ratings, review count, and more."
          },
          {
            question: "How is this different from LeadSwift or Map Lead Scraper?",
            answer: "WebLeads stands out with decision-maker data (roles & names) extracted from actual company pages through deep website crawling, not just social media profiles. Our Growth plan offers 28,000 credits for $24.99 ($0.89 per 1,000 leads), providing better value than most competitors. We also offer unlimited searches (no daily limits), deep website crawling for emails (not just Google Maps data), and a transparent credit system where 1 credit = 1 business. Plus, we search Google Maps in real-time to ensure you get the freshest data available."
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
            {/* Gradient & Shape Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e2330] via-[#2d3142] to-[#1e2330] opacity-100" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-brand-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight tracking-tight px-2">
                Start Getting Business Phone Numbers Today
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
                Join 10,000+ businesses who use WebLeads to find verified business phone numbers 
                and contact data. Start free with 500 credits, upgrade to Starter for $9.99/month or Growth for $24.99/month.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border border-white/10 w-full sm:w-auto"
                >
                  <Link href="/#waitlist-form" className="flex items-center justify-center">
                    <span className="text-center">Start Free with 1,000 Credits</span>
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
                    View All Plans
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm opacity-75 mt-6 sm:mt-8 px-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>1 credit = 1 business</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Search any business type</span>
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

      <Footer />
    </main>
  )
}