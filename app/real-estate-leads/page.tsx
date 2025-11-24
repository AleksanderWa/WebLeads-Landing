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
  XCircle
} from "lucide-react"
import Link from "next/link"
import { StatsBar } from "@/components/landing/stats-bar"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { HowItWorksLanding } from "@/components/landing/how-it-works-landing"
import { UseCasesGrid } from "@/components/landing/use-cases-grid"
import { FAQSection } from "@/components/landing/faq-section-landing"

export const metadata: Metadata = {
  title: "Real Estate Leads - Agents & Brokers Contact Data | WebLeads",
  description: "Find real estate agents and brokers on Google Maps with emails, phones, decision-makers. Start free with 1,000 credits at $14.99/15k leads.",
  keywords: "real estate leads, real estate agent leads, realtor leads, broker leads, real estate contacts, find real estate agents",
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
    "description": "Find any real estate agent or broker on Google Maps with verified emails, phone numbers, decision-maker data, and social profiles. Deep website crawling with Playwright. FREE email verification coming soon. Start free with 1,000 credits. Growth: $14.99/month for 15,000 credits.",
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
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-white to-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-brand-accent text-brand-secondary text-base px-4 py-2">
              🏠 Every Real Estate Pro on Google Maps • Fresh Data Daily
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 leading-tight">
              Get Real Estate Leads with Verified Agent & Broker Contact Data
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find real estate leads including agents, brokers, and agencies on Google Maps with verified emails, 
              phone numbers, and social profiles. <strong className="text-brand-primary">Perfect for mortgage lenders, insurance agents, title companies, and service providers.</strong>
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
                <Link href="#pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-gray-600 mt-4">
              ✓ No credit card required  ✓ 300 free credits  ✓ Export to CSV instantly
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar 
        stats={[
          { value: "Any Location", label: "Search Nationwide", icon: <Home className="h-6 w-6" /> },
          { value: "$1.00", label: "Per 1,000 Leads (Growth)", icon: <DollarSign className="h-6 w-6" /> },
          { value: "95%", label: "Email Accuracy", icon: <Shield className="h-6 w-6" /> },
          { value: "Google Maps", label: "Fresh Data Daily", icon: <MapPin className="h-6 w-6" /> }
        ]}
      />

      {/* How It Works */}
      <HowItWorksLanding 
        steps={[
          {
            number: 1,
            title: "Search Real Estate Agents by Location",
            description: "Enter 'real estate agents in [city]' or 'realtors near [ZIP code]'. Our system searches Google Maps for active agents and brokers in real-time.",
            icon: <Search className="h-6 w-6" />
          },
          {
            number: 2,
            title: "We Extract Contact Information",
            description: "Automatically extract agent names, phone numbers, emails, office addresses, agency names, websites, and social profiles (LinkedIn, Facebook).",
            icon: <Users className="h-6 w-6" />
          },
          {
            number: 3,
            title: "Credits Auto-Charged Per Agent",
            description: "1 credit = 1 real estate agent. When your search completes, credits are charged based on results found. Only pay for what you unlock.",
            icon: <DollarSign className="h-6 w-6" />
          },
          {
            number: 4,
            title: "Export Real Estate Leads to CSV",
            description: "Download all agent contacts in CSV format. Import into your CRM or use for email campaigns, cold calling, or partnership outreach.",
            icon: <Download className="h-6 w-6" />
          }
        ]}
      />

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
              Real Estate Leads - Complete Agent & Broker Data
            </h2>
            <p className="text-xl text-gray-600">
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
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-brand-light to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
              Real Estate Lead Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pay only for the real estate agents you access. 1 credit = 1 agent. Start free, upgrade when you need more.
            </p>
          </div>

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
                    <span className="text-sm">300 real estate agents/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Email + phone + social profiles</span>
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
                <p className="text-xs text-brand-accent font-semibold mt-1">$1.33 per 1K agents</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">3,000 agents/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Search any location</span>
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
                <p className="text-xs text-brand-accent font-semibold mt-1">$1.00 per 1K agents</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">8,000 agents/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Target any market nationwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Buy credit top-ups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dedicated support</span>
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
                <p className="text-xs text-brand-accent font-semibold mt-1">$0.92 per 1K agents</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">24,000 agents/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Nationwide coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Unlimited credit top-ups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">White-glove support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-brand-primary hover:bg-brand-primary-hover">
                  <Link href="/#waitlist-form">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Comparison */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-brand-primary mb-8">
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
                      <span className="text-2xl font-bold text-brand-primary">$14.99</span>
                      <br /><span className="text-sm">(Growth Plan)</span>
                    </td>
                    <td className="p-4 text-center text-gray-700">$400-$800<br /><span className="text-sm">for similar volume</span></td>
                    <td className="p-4 text-center text-gray-700">$0<br /><span className="text-sm">but extremely time-consuming</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Data Freshness</td>
                    <td className="p-4 text-center">
                      <span className="font-bold text-brand-primary">Updated Daily</span>
                    </td>
                    <td className="p-4 text-center text-gray-700">6-12 months old</td>
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
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /><span className="text-sm block">Any city/ZIP</span></td>
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
                  Start with 300 Free Credits
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
            answer: "Traditional lead lists cost $400-$800 for 8,000 contacts and the data is often 6-12 months old (60-70% accuracy). WebLeads costs $14.99 for 15,000 contacts with 95%+ accuracy, plus you get FREE email verification (coming soon), decision-maker data (agent names + roles), and the ability to queue up to 5 searches at once. Our data comes fresh from Google Maps daily with deep website crawling using Playwright. You also get to choose exactly which markets and agents you want, not just buy a pre-made list."
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
            answer: "Yes! Start with 1,000 free credits (enough for 1,000 real estate agents) with no credit card required. Test the data quality, search accuracy, and export functionality before upgrading. Most users upgrade to Growth ($14.99 for 15,000 credits) after trying the free plan because the data quality is so much better than traditional lists, plus you get decision-maker data, deep website crawling, and FREE email verification coming soon."
          }
        ]}
      />

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Getting Real Estate Leads Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join mortgage lenders, insurance agents, and home service providers who use WebLeads 
            to connect with real estate professionals on Google Maps. Deep website crawling with Playwright for emails. Decision-maker data included. FREE email verification coming soon. Start free with 1,000 credits. Growth: $14.99 for 15,000 credits/month.
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
                View Pricing Plans
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
              <span>Any agent on Google Maps</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>95% email accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Updated daily</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
