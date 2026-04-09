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
  Star,
  Zap
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Real Estate Agent Leads - Fresh Google Maps Data | WebLeads",
  description: "Find real estate agents with verified emails and decision-maker names. Search Google Maps on-demand. No stale lists. Free trial included.",
  keywords: "real estate agent leads, realtor leads, broker leads, real estate prospects, find real estate agents, agent leads, google maps real estate",
  openGraph: {
    title: "Real Estate Agent Leads - Fresh Google Maps Data | WebLeads",
    description: "Find real estate agents and brokers with verified emails and decision-maker data. Search on-demand from Google Maps.",
    url: "https://www.webleads.site/real-estate-agent-leads",
    type: "website",
    images: [{
      url: "/images/real-estate-agent-leads-og.jpg",
      width: 1200,
      height: 630,
      alt: "Real Estate Agent Leads from Google Maps"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Real Estate Agent Leads - Fresh Google Maps Data",
    description: "Find real estate agents with verified contact data. Search on-demand. Start free.",
    images: ["/images/real-estate-agent-leads-og.jpg"]
  },
  alternates: {
    canonical: "https://www.webleads.site/real-estate-agent-leads"
  }
}

export default function RealEstateAgentLeadsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Real Estate Agent Leads by WebLeads",
    "description": "Find any real estate agent or broker on Google Maps with verified emails, phone numbers, and decision-maker data. Fresh data, no list subscriptions required.",
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
        "name": "How accurate are the email addresses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We verify emails by crawling company websites, LinkedIn, and public databases. Verified emails have a 95%+ deliverability rate, which is far better than purchased lists. If an email bounces, we'll help you find an alternative contact."
        }
      },
      {
        "@type": "Question",
        "name": "Can I search for agents outside my local area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Search any U.S. location. Find agents in other cities, states, or across multiple metros in one search."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in the free plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2 searches lifetime and 10 people enrichments (to get decision-maker names and emails). Perfect for testing the platform."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from LinkedIn Sales Navigator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LinkedIn is powerful for B2B, but real estate professionals often have incomplete or outdated profiles. WebLeads searches Google Maps, where agents actively manage their business listings with current phone and website. You get verified emails, not just LinkedIn URLs."
        }
      }
    ]
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20">
                Fresh Data From Google Maps
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-primary mb-6 leading-tight">
                Find Qualified Real Estate Leads Without Buying Stale Lists
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Search Google Maps by agent type and location. Get verified emails, phone numbers, and broker details in minutes. Fresh data, zero list subscriptions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://app.webleads.site/signup">
                  <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl shadow-lg w-full sm:w-auto">
                    Start Your Free Search
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#demo">
                  <Button variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary/5 rounded-xl w-full sm:w-auto">
                    Watch Demo
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-4">✓ No credit card required • ✓ 2 free searches • ✓ Takes 2 minutes</p>
            </div>
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-xs text-gray-500 mb-2">Search Query</p>
                    <p className="text-sm font-semibold text-gray-800">Real Estate Brokers • New York, NY • 4.5+ rating</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-xs text-gray-500 mb-2">Results Found</p>
                    <p className="text-sm font-semibold text-gray-800">427 brokers with verified emails</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-xs text-gray-500 mb-2">Data Included</p>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p>✓ Email • Phone • Address</p>
                      <p>✓ Decision-maker name</p>
                      <p>✓ Google rating & reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-brand-primary mb-2">10,000+</div>
              <p className="text-sm text-gray-600">Active Agents</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-brand-primary mb-2">2M+</div>
              <p className="text-sm text-gray-600">Fresh Leads Found</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-brand-primary mb-2">95%+</div>
              <p className="text-sm text-gray-600">Email Accuracy</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-brand-primary mb-2">4.8★</div>
              <p className="text-sm text-gray-600">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gradient-to-b from-red-50/50 to-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-8 text-center">
            Why Real Estate Lead Lists Don't Work
          </h2>
          <div className="bg-white border-l-4 border-red-500 p-6 sm:p-8 rounded-lg shadow-sm mb-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Real estate agents know the drill. You buy a list for <strong>$200-$500</strong>. Open it up. <strong>30% of the emails are wrong</strong>. Another <strong>20% bounce back</strong>. Of what's left, most have gone silent. Moved, changed jobs, no longer buying. You've wasted time, money, and damaged your reputation with bad contacts.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The problem: lists are compiled once, then they age. Every month that passes, more emails go stale. Your competition is hitting the same dead leads you are.
            </p>
            <p className="text-lg font-semibold text-brand-primary">
              There's a better way.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-12 text-center">
            Search Real Estate Leads in Real Time
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Instead of buying old lists, search Google Maps live. Every time you search, you get today's agents, brokers, and real estate professionals with current contact information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-md hover:shadow-lg transition">
              <CardHeader>
                <Mail className="h-8 w-8 text-brand-primary mb-2" />
                <CardTitle className="text-xl">Verified Email Addresses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Found by crawling their website and social profiles. 95%+ deliverability rate, far better than purchased lists.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition">
              <CardHeader>
                <Users className="h-8 w-8 text-brand-primary mb-2" />
                <CardTitle className="text-xl">Decision-Maker Names & Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Know who you're actually reaching. No more generic office emails. Real names, real contact info.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition">
              <CardHeader>
                <Star className="h-8 w-8 text-brand-primary mb-2" />
                <CardTitle className="text-xl">Google Ratings & Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Qualify before you outreach. Filter by rating and review count. Only reach active, thriving professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition">
              <CardHeader>
                <MapPin className="h-8 w-8 text-brand-primary mb-2" />
                <CardTitle className="text-xl">Location & Website Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Business address, website, phone number, and social links. Everything you need to research and reach out.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-12 text-center">
            Find Real Estate Leads in 3 Steps
          </h2>
          <div className="space-y-8">
            {[
              {
                number: "1",
                title: "Choose Your Search",
                description: "Target agent type (brokers, team leaders, individual agents) and location. Narrow by Google ratings if you want only 4.5+ rated professionals.",
                icon: Search
              },
              {
                number: "2",
                title: "Generate Your List",
                description: "Click search. WebLeads crawls Google Maps and finds every matching agent. Get verified contact data within seconds.",
                icon: Zap
              },
              {
                number: "3",
                title: "Export and Outreach",
                description: "Download as CSV. Upload to your CRM or cold email tool. Start your outreach immediately with fresh, verified contacts.",
                icon: Download
              }
            ].map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-primary text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-12 text-center">
            Why Real Estate Professionals Choose WebLeads
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Fresh Data Every Time",
                description: "No more buying stale lists. Every search pulls live Google Maps data. Agents move, change roles, retire. You get current professionals, not last year's directory."
              },
              {
                title: "Verified Emails & Decision-Makers",
                description: "Find the actual agent's email, not a generic office inbox. When you have a real person's name and email, response rates go up 3x."
              },
              {
                title: "Target Precisely",
                description: "Search by agent type: brokers, team leaders, individual agents. Filter by location, Google rating, and review count. You get qualified leads, not generic agent lists."
              },
              {
                title: "Save on List Costs",
                description: "Paid lead lists cost $200-$1,000+ per month. WebLeads starts free. Paid plans start at $24/mo. Generate unlimited searches for one subscription."
              }
            ].map((benefit, index) => (
              <div key={index} className="flex gap-4 pb-6 border-b border-gray-200 last:border-0">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-12 text-center">
            Real Estate Professionals Using WebLeads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Real Estate Agents Prospecting for Listings",
                description: "Find other agents in your market who are actively selling homes (4+ reviews in the last month). Connect for co-listing opportunities or referrals."
              },
              {
                title: "Mortgage Lenders",
                description: "Build a list of loan officers and mortgage brokers in your area. Target them with rate-lock offers or partnership proposals."
              },
              {
                title: "Real Estate Software / CRM Vendors",
                description: "Find team leaders and brokers in your target markets. Get their actual emails instead of generic office numbers."
              },
              {
                title: "Coaching & Training",
                description: "Find and reach agents who are active (high review counts, recent ratings). They're more likely to invest in coaching and training."
              }
            ].map((useCase, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-12 text-center">
            WebLeads vs. Traditional Lead Lists
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-brand-primary">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900"></th>
                  <th className="text-left py-4 px-4 font-semibold text-brand-primary">WebLeads</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-500">Bought Lists</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Data Freshness", webleads: "Real-time Google Maps", lists: "Months or years old" },
                  { feature: "Email Accuracy", webleads: "Verified via website crawl", lists: "30-50% bounce rate" },
                  { feature: "Decision-Maker Names", webleads: "Yes, included", lists: "No, generic office only" },
                  { feature: "Targeting Options", webleads: "By agent type, rating, location", lists: "Bulk lists only" },
                  { feature: "Cost Per Contact", webleads: "$0.50 - $1.50", lists: "$2 - $5+" },
                  { feature: "Setup Time", webleads: "5 minutes", lists: "Days (list delivery + import)" },
                  { feature: "Compliance", webleads: "GDPR compliant", lists: "Varies" }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-blue-50/30 transition">
                    <td className="py-4 px-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="py-4 px-4 text-green-700 font-medium">{row.webleads}</td>
                    <td className="py-4 px-4 text-gray-600">{row.lists}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-12 text-center">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How accurate are the email addresses?",
                a: "We verify emails by crawling company websites, LinkedIn, and public databases. Verified emails have a 95%+ deliverability rate, which is far better than purchased lists. If an email bounces, we'll help you find an alternative contact."
              },
              {
                q: "Can I search for agents outside my local area?",
                a: "Yes. Search any U.S. location. Find agents in other cities, states, or across multiple metros in one search."
              },
              {
                q: "What's included in the free plan?",
                a: "2 searches lifetime and 10 people enrichments (to get decision-maker names and emails). Perfect for testing the platform."
              },
              {
                q: "How is this different from LinkedIn Sales Navigator?",
                a: "LinkedIn is powerful for B2B, but real estate professionals often have incomplete or outdated profiles. WebLeads searches Google Maps, where agents actively manage their business listings with current phone and website. You get verified emails, not just LinkedIn URLs."
              },
              {
                q: "Can I use this for cold email outreach?",
                a: "Absolutely. Our data is verified and compliant with CAN-SPAM and GDPR. We recommend a personalized approach (mention something specific about their business from Google Maps reviews). Generic mass emails get blocked."
              },
              {
                q: "Do you have a money-back guarantee?",
                a: "Yes. Try the free plan first (2 searches, no credit card). If you upgrade and aren't satisfied within 14 days, we'll refund your payment in full."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-primary/10 to-blue-100/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-6">
            Stop Buying Stale Agent Lists
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Start searching Google Maps for real estate leads today. Free plan includes 2 searches. No credit card required. Fresh data, verified emails, real agent names.
          </p>
          <p className="text-gray-600 mb-8 italic">
            Your competition is still buying $500/month lists. You'll be one step ahead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.webleads.site/signup">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl shadow-lg">
                Start Your Free Search
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary/5 rounded-xl">
                See Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
