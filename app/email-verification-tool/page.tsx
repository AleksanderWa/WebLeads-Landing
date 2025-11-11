import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
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
  RefreshCw,
  Target,
  XCircle
} from "lucide-react"
import Link from "next/link"
import { StatsBar } from "@/components/landing/stats-bar"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { HowItWorksLanding } from "@/components/landing/how-it-works-landing"
import { UseCasesGrid } from "@/components/landing/use-cases-grid"
import { FAQSection } from "@/components/landing/faq-section-landing"

export const metadata: Metadata = {
  title: "Email Verification Tool with FREE SMTP Checks | WebLeads",
  description: "Verify business emails automatically with FREE SMTP + Catch-All checks. Search Google Maps, enrich from websites. Start free with 1,000 credits at $14.99/15k.",
  keywords: "email verification tool, email finder, verify email addresses, business email finder, find email addresses",
  openGraph: {
    title: "Email Verification Tool - Search & Enrich Contact Data",
    description: "Search any business and get verified emails automatically. Real-time enrichment from Google Maps, company websites & public sources.",
    url: "https://webleads.site/email-verification-tool",
    type: "website",
    images: [{
      url: "/images/email-verification-tool-og.jpg",
      width: 1200,
      height: 630,
      alt: "Email Verification Tool"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Email Verification Tool - Search & Enrich Contact Data",
    description: "Search any business, get verified emails from multiple sources. Fresh data on-demand.",
    images: ["/images/email-verification-tool-og.jpg"]
  },
  alternates: {
    canonical: "https://webleads.site/email-verification-tool"
  }
}

export default function EmailVerificationToolPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Email Verification Tool by WebLeads",
    "description": "Search Google Maps for businesses and get verified email addresses with automatic enrichment. Real-time data, not a database.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
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
        "name": "How does WebLeads verify email addresses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebLeads searches Google Maps for businesses, extracts their contact information, then automatically verifies each email address through multiple validation checks including syntax validation, domain verification, and deliverability testing. We achieve 95%+ accuracy."
        }
      },
      {
        "@type": "Question",
        "name": "Is WebLeads a database or a search engine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebLeads is a real-time search and enrichment engine, NOT a static database. When you search for businesses (e.g., 'dentists in Los Angeles'), we search Google Maps in real-time, then automatically enrich the results with verified emails, phone numbers, and decision maker information."
        }
      },
      {
        "@type": "Question",
        "name": "What types of emails can I get?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You get verified business email addresses and owner/manager emails. For each business, we provide: info@ emails, contact@ emails, owner personal emails, and decision maker emails with their names and roles."
        }
      },
      {
        "@type": "Question",
        "name": "Can I search any business type?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Search any business type in any location. Examples: 'restaurants in New York', 'real estate agents in Miami', 'plumbers in Chicago'. We search Google Maps on-demand - 200M+ businesses available worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "How much does the email verification tool cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Start free with 1,000 credits (1,000 verified emails). Growth plan is $14.99/month for 15,000 credits with FREE SMTP + Catch-All verification (coming soon). 1 credit = 1 business with verified email, phone, and decision-maker data. Competitors like Outscraper charge $5/1,000 emails for verification. No annual contracts, cancel anytime."
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
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-white to-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-brand-accent text-brand-secondary text-base px-4 py-2">
              🔄 Real-time data • Not a database
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 leading-tight">
              Email Verification Tool - Verify Business Emails with FREE SMTP Checks
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our email verification tool searches Google Maps for any business, then automatically verifies email addresses with FREE SMTP + Catch-All checks. 
              <strong className="text-brand-primary"> Real-time email verification, not a stale database.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="bg-brand-primary hover:bg-brand-primary-hover text-white text-lg px-8 py-6 shadow-lg"
              >
                <Link href="/#waitlist-form">
                  Start Free with 1,000 Credits
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-6 border-2 border-brand-primary text-brand-primary hover:bg-brand-light"
              >
                <Link href="#how-it-works">
                  See How It Works
                </Link>
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              ✓ No credit card required  ✓ 1,000 free credits  ✓ FREE verification (soon)  ✓ Export to CSV
            </p>
            <div className="mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg inline-block">
              <p className="text-green-700 font-bold text-lg">🎉 FREE Email Verification Coming Soon!</p>
              <p className="text-green-600 text-sm mt-1">SMTP + Catch-All verification included FREE • Competitors charge $5/1,000 emails</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar
        stats={[
          { value: "200M+", label: "Businesses on Google Maps", icon: <Building2 className="h-6 w-6" /> },
          { value: "195", label: "Countries Covered", icon: <MapPin className="h-6 w-6" /> },
          { value: "95%", label: "Email Accuracy", icon: <CheckCircle2 className="h-6 w-6" /> },
          { value: "Real-time", label: "Fresh Data Daily", icon: <RefreshCw className="h-6 w-6" /> }
        ]}
      />

      {/* What Makes WebLeads Different */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
              Email Verification Tool Features - Real-Time, Not a Database
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              WebLeads doesn't store old data. We search Google Maps when YOU need it, then enrich with verified emails.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-green-500 bg-green-50">
              <CardHeader>
                <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle className="text-2xl">✅ WebLeads (Real-Time)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Searches Google Maps when you click "Search"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Fresh data pulled on-demand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Automatically enriches with verified emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Search ANY business type, any location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>$1.00 per 1,000 verified emails</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500 bg-red-50">
              <CardHeader>
                <XCircle className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="text-2xl">❌ Static Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Pre-indexed data from months ago</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Emails often outdated or invalid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>No automatic enrichment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Limited to pre-selected industries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>$50-1,250/month subscriptions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorksLanding
        title="How to Get Verified Emails in 4 Steps"
        description="Our real-time search and enrichment process makes finding verified emails effortless"
        steps={[
          {
            number: 1,
            title: "Search Any Business Type",
            description: "Enter what you're looking for: 'dentists in Los Angeles', 'restaurants in New York', 'real estate agents in Miami'. WebLeads searches Google Maps in real-time.",
            icon: <Search className="h-6 w-6" />
          },
          {
            number: 2,
            title: "We Find & Enrich",
            description: "Our system finds matching businesses on Google Maps, then automatically enriches each one with verified email addresses, phone numbers, and decision maker information.",
            icon: <RefreshCw className="h-6 w-6" />
          },
          {
            number: 3,
            title: "Email Verification",
            description: "Every email is verified through multiple checks: syntax validation, domain verification, and deliverability testing. 95%+ accuracy guaranteed.",
            icon: <CheckCircle2 className="h-6 w-6" />
          },
          {
            number: 4,
            title: "Export & Use",
            description: "Download all verified emails to CSV with one click. Import into your CRM or use for cold email campaigns. Each business = 1 credit.",
            icon: <Download className="h-6 w-6" />
          }
        ]}
      />

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
              Everything You Need for Email Outreach
            </h2>
            <p className="text-xl text-gray-600">
              Get complete contact data, not just email addresses
            </p>
          </div>

          <FeaturesGrid
            features={[
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Verified Business Emails",
                description: "Get verified business email addresses (info@, contact@, sales@) with 95%+ deliverability rate. Perfect for B2B cold email campaigns."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Owner & Manager Emails",
                description: "Get personal email addresses for business owners and decision makers, along with their names and roles for personalized outreach."
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Business Phone Numbers",
                description: "Main business phone numbers from Google Maps for multi-channel outreach. Combine email + phone for better response rates."
              },
              {
                icon: <Building2 className="h-8 w-8" />,
                title: "Social Media Profiles",
                description: "LinkedIn, Facebook, Twitter, Instagram profiles for research and social selling. Know your prospects before reaching out."
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Search Any Industry",
                description: "Not limited to pre-indexed businesses. Search restaurants, dentists, plumbers, real estate agents, or any business type in any location."
              },
              {
                icon: <Download className="h-8 w-8" />,
                title: "Instant CSV Export",
                description: "Export unlimited verified emails to CSV with one click. Import into any CRM (Salesforce, HubSpot, Pipedrive, etc.)."
              }
            ]}
          />
        </div>
      </section>

      {/* Use Cases */}
      <UseCasesGrid
        title="Perfect for Every Email Outreach Campaign"
        subtitle="See how businesses use WebLeads email verification tool"
        cases={[
          {
            icon: <Mail className="h-8 w-8" />,
            title: "Cold Email Campaigns",
            description: "Build targeted email lists with verified addresses. High deliverability = better open rates and responses.",
            benefits: ["95%+ email accuracy", "Owner emails included", "Multi-channel data (email + phone)"]
          },
          {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "B2B Sales Prospecting",
            description: "Find decision makers in your target industries. Get their verified emails and start conversations that convert.",
            benefits: ["Decision maker names & roles", "Business + personal emails", "LinkedIn profiles for research"]
          },
          {
            icon: <Users className="h-8 w-8" />,
            title: "Partnership Outreach",
            description: "Find potential business partners with verified contact information. Build strategic relationships faster.",
            benefits: ["Any business type", "Fresh contact data", "Social profiles included"]
          },
          {
            icon: <Building2 className="h-8 w-8" />,
            title: "Agency Lead Generation",
            description: "Generate fresh leads for your agency clients. Search by industry + location, export verified emails instantly.",
            benefits: ["Unlimited searches", "Any industry vertical", "CSV export for clients"]
          },
          {
            icon: <RefreshCw className="h-8 w-8" />,
            title: "Email List Cleaning",
            description: "Verify and update your existing email lists. Our real-time verification ensures your campaigns don't bounce.",
            benefits: ["Real-time verification", "95%+ accuracy", "Reduces bounce rate"]
          },
          {
            icon: <Search className="h-8 w-8" />,
            title: "Market Research",
            description: "Gather verified contact data for competitive analysis, market sizing, and territory planning.",
            benefits: ["200M+ businesses", "195 countries", "Export for analysis"]
          }
        ]}
      />

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-brand-light">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
            Pay Per Verified Email
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            No monthly subscriptions. No annual contracts. Pay only for the verified emails you need.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {/* Free Plan */}
            <Card className="border-2 hover:border-brand-primary transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">1,000 credits</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">1 active search at a time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">300 verified emails/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Export to CSV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/#waitlist-form">Start Free</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Starter Plan */}
            <Card className="border-2 hover:border-brand-primary transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$3.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">3,000 credits</p>
                <p className="text-xs text-brand-accent font-semibold mt-1">$1.33 per 1K emails</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">3,000 verified emails/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Search any business type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Buy credit top-ups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-brand-primary hover:bg-brand-primary-hover">
                  <Link href="/#waitlist-form">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Growth Plan (Recommended) */}
            <Card className="border-4 border-brand-accent relative shadow-xl">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-secondary">
                ⭐ MOST POPULAR
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Growth</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$14.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">15,000 credits • Queue up to 5</p>
                <Badge className="bg-green-500 text-white mt-2">FREE Verification (soon)</Badge>
                <p className="text-xs text-brand-accent font-semibold mt-1">$1.00 per 1K emails</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">8,000 verified emails/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Search any business type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Buy credit top-ups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Priority support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-brand-accent hover:bg-brand-accent-hover">
                  <Link href="/#waitlist-form">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Scale Plan */}
            <Card className="border-2 hover:border-brand-primary transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Scale</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$21.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">24,000 credits</p>
                <p className="text-xs text-brand-accent font-semibold mt-1">$0.92 per 1K emails</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">24,000 verified emails/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Search any business type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Buy credit top-ups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Priority + dedicated support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-brand-primary hover:bg-brand-primary-hover">
                  <Link href="/#waitlist-form">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              💡 <strong>Credit top-ups:</strong> Buy 500 credits for $1, 2,500 for $4.99, or 10,000 for $14.99 anytime
            </p>
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-hover">
              <Link href="/#waitlist-form">
                Start with Growth Plan ($14.99)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Everything you need to know about our email verification tool"
        faqs={[
          {
            question: "How does WebLeads verify email addresses?",
            answer: "WebLeads searches Google Maps for businesses, extracts their contact information, then automatically verifies each email address through multiple validation checks including syntax validation, domain verification, and deliverability testing. We achieve 95%+ accuracy."
          },
          {
            question: "Is WebLeads a database or a search engine?",
            answer: "WebLeads is a real-time search and enrichment engine, NOT a static database. When you search for businesses (e.g., 'dentists in Los Angeles'), we search Google Maps in real-time, then automatically enrich the results with verified emails, phone numbers, and decision maker information."
          },
          {
            question: "What types of emails can I get?",
            answer: "You get verified business email addresses (info@, contact@, sales@) and owner/manager emails. For each business, we provide business emails, owner personal emails, and decision maker emails with their names and roles for personalized outreach."
          },
          {
            question: "Can I search any business type?",
            answer: "Yes! Search any business type in any location. Examples: 'restaurants in New York', 'real estate agents in Miami', 'plumbers in Chicago', 'dentists in London'. We search Google Maps on-demand - 200M+ businesses available worldwide in 195 countries."
          },
          {
            question: "How much does the email verification tool cost?",
            answer: "Start free with 1,000 credits (1,000 verified emails). Growth plan is $14.99/month for 15,000 credits with FREE SMTP + Catch-All verification (coming soon). 1 credit = 1 business with verified email, phone, and decision-maker data. That's just $1.00 per 1,000 verified emails - competitors like Outscraper charge $5/1,000 just for verification alone! No annual contracts, cancel anytime."
          },
          {
            question: "Can I export verified emails to CSV?",
            answer: "Yes! Export is completely free once you've used credits to unlock businesses. The CSV includes all contact data: verified emails, phone numbers, owner names, social profiles, business details, and more."
          },
          {
            question: "How is this different from Hunter.io or Apollo.io?",
            answer: "WebLeads has 5 unique advantages: (1) FREE email verification (coming soon) vs $5/1,000 at Outscraper, (2) Deep website crawling with Playwright to find emails on contact pages, (3) Decision-maker data (names + roles) included at no extra cost, (4) Queue up to 5 searches concurrently, (5) Best pricing at $1.00/1k vs competitors charging $5-10/1k. Plus, our data comes fresh from Google Maps, not from stale databases."
          },
          {
            question: "Do credits expire?",
            answer: "Credits reset monthly on your billing date. However, any businesses you've already unlocked stay accessible forever - you won't lose access to past searches. To maximize value, use your credits each month or purchase top-ups that add to your current balance."
          }
        ]}
      />

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Verifying Emails Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 10,000+ businesses using WebLeads to find verified email addresses. 
            Search Google Maps, get enriched data with FREE verification (coming soon), export to CSV. Start free with 1,000 credits. Growth: $14.99 for 15,000 credits/month. Competitors charge $5/1k for verification alone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              asChild
              className="bg-white text-brand-primary hover:bg-gray-100 text-lg px-8 py-6 shadow-lg"
            >
              <Link href="/#waitlist-form">
                Start Free with 1,000 Credits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10"
            >
              <Link href="#pricing">
                View All Plans
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Real-time from Google Maps</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>95%+ email accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
