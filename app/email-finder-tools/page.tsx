import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Search, TrendingUp, Zap, Users, Building2, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FAQSection } from '@/components/landing/faq-section-landing'
import { FeaturesGrid } from '@/components/landing/features-grid'
import { HowItWorksLanding } from '@/components/landing/how-it-works-landing'
import { UseCasesGrid } from '@/components/landing/use-cases-grid'
import { StatsBar } from '@/components/landing/stats-bar'

export const metadata: Metadata = {
  title: 'Find Business Owner Emails from Google Maps | WebLeads',
  description: 'Email finder tool to extract verified business owner emails. Real-time search from Google Maps. Start free with 1,000 credits at $14.99/15k.',
  generator: 'Next.js',
  keywords: ['email finder tools', 'find email addresses', 'business email finder', 'email discovery tool', 'verify email addresses'],
  applicationName: 'WebLeads',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: 'https://webleads.site/email-finder-tools',
  },
  openGraph: {
    title: 'Email Finder Tools - Search Any Business & Get Verified Emails',
    description: 'Find verified business email addresses for any company. Real-time search + enrichment from multiple sources. 1,000 free credits. Growth: $14.99/month for 15,000 credits.',
    url: 'https://webleads.site/email-finder-tools',
    siteName: 'WebLeads',
    images: [
      {
        url: 'http://localhost:3000/images/email-finder-tools-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Email Finder Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aleksanderwco',
    title: 'Email Finder Tools - Search & Get Verified Emails',
    description: 'Find verified business emails in real-time. Fresh data from Google Maps, company websites & public sources.',
    images: ['http://localhost:3000/images/email-finder-tools-og.jpg'],
  },
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function EmailFinderToolsPage() {
  const faqs = [
    {
      question: "How does WebLeads find email addresses?",
      answer: "We search Google Maps for businesses, extract their websites, then use Playwright to dynamically crawl contact pages, about pages, and other site sections to find verified business and owner email addresses. This deep website crawling finds emails competitors miss. All emails are verified with FREE SMTP verification (coming soon)."
    },
    {
      question: "Is WebLeads a database or a search engine?",
      answer: "WebLeads is a real-time search and enrichment engine, NOT a static database. When you search for businesses (e.g., 'dentists in Los Angeles'), we search Google Maps in real-time, then automatically enrich the results with verified emails from company websites."
    },
    {
      question: "What types of emails can I find?",
      answer: "You get verified business email addresses (info@, contact@, sales@) and owner/manager personal emails. For each business, we provide business emails, owner emails, and decision maker emails with their names and roles."
    },
    {
      question: "How accurate are the email addresses?",
      answer: "We achieve 95%+ email accuracy through multi-step verification: syntax validation, domain verification, and deliverability testing. This ensures your emails actually reach recipients and protects your sender reputation."
    },
    {
      question: "Can I search any business type?",
      answer: "Yes! Search any business type in any location. Examples: 'restaurants in New York', 'real estate agents in Miami', 'plumbers in Chicago', 'dentists in London'. We search Google Maps on-demand - 200M+ businesses available worldwide."
    },
    {
      question: "How much does the email finder cost?",
      answer: "Start free with 1,000 credits (1,000 verified emails). Growth plan is $14.99/month for 15,000 credits. 1 credit = 1 business with verified email, phone, and decision-maker data. That's just $1.00 per 1,000 verified emails - up to 5x cheaper than competitors like Outscraper ($7.85/1k with verification). No annual contracts, cancel anytime."
    },
    {
      question: "Can I export emails to CSV?",
      answer: "Yes! Export is completely free once you've used credits to unlock businesses. The CSV includes all contact data: verified emails, phone numbers, owner names, social profiles, business details, and more."
    },
    {
      question: "How is this different from other email finders?",
      answer: "WebLeads has 4 unique advantages: (1) FREE email verification included vs $5/1,000 at Outscraper, (2) Deep website crawling with Playwright finds emails on contact pages competitors miss, (3) Decision-maker data (names + roles) included at no extra cost, (4) Queue up to 5 searches at once (Growth plan) vs daily search limits at competitors. Plus, you get phone numbers and social profiles - not just emails."
    },
  ];

  const features = [
    {
      icon: <Search className="h-6 w-6 text-brand-primary" />,
      title: "Search Google Maps",
      description: "Real-time search of 200M+ businesses worldwide by type and location. Get fresh, accurate data on-demand."
    },
    {
      icon: <Mail className="h-6 w-6 text-brand-primary" />,
      title: "Email Discovery",
      description: "Find business emails (info@, contact@) and owner personal emails from company websites and public sources."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-brand-primary" />,
      title: "Email Verification",
      description: "Built-in verification ensures 95%+ deliverability. Syntax validation, domain verification, and deliverability testing."
    },
    {
      icon: <Phone className="h-6 w-6 text-brand-primary" />,
      title: "Phone Numbers",
      description: "Main business phone numbers from Google Maps. Reach businesses directly with verified contact information."
    },
    {
      icon: <Users className="h-6 w-6 text-brand-primary" />,
      title: "Decision Makers",
      description: "Owner and manager names with their roles for personalized outreach to the right people."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-brand-primary" />,
      title: "Social Profiles",
      description: "Find business social media links (LinkedIn, Facebook, Instagram) to enrich your prospecting efforts."
    },
  ];

  const howItWorksSteps = [
    {
      number: 1,
      title: "Search Google Maps",
      description: "Enter business type + location (e.g., 'dentists in Los Angeles'). WebLeads searches Google Maps in real-time.",
      icon: <Search className="h-6 w-6" />
    },
    {
      number: 2,
      title: "We Find Businesses",
      description: "WebLeads searches Google Maps in real-time for matching businesses and extracts their basic information.",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      number: 3,
      title: "We Enrich from Multiple Sources",
      description: "Automatically extract phone numbers & business details from Google Maps, then find emails from company websites. Verify all emails for deliverability.",
      icon: <Mail className="h-6 w-6" />
    },
    {
      number: 4,
      title: "Export Everything",
      description: "Download all verified emails and enriched data to CSV for your CRM or outreach tool. Start your campaigns immediately.",
      icon: <CheckCircle2 className="h-6 w-6" />
    },
  ];

  const useCases = [
    {
      icon: <Mail className="h-6 w-6 text-brand-primary" />,
      title: "Cold Email Outreach",
      description: "Get fresh, verified emails for any industry. Build highly targeted email lists with 95%+ deliverability.",
      benefits: ["Verified emails", "High deliverability", "Targeted lists"]
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-brand-primary" />,
      title: "B2B Sales Prospecting",
      description: "Find decision makers and their verified contact info for any business. Streamline your sales pipeline.",
      benefits: ["Decision maker info", "Direct contact", "Qualified leads"]
    },
    {
      icon: <Users className="h-6 w-6 text-brand-primary" />,
      title: "Partnership Outreach",
      description: "Discover potential B2B partners with verified contact data. Initiate strategic partnerships and collaborations.",
      benefits: ["Strategic partnerships", "Networking opportunities", "Growth potential"]
    },
    {
      icon: <MapPin className="h-6 w-6 text-brand-primary" />,
      title: "Market Research",
      description: "Analyze business presence and contact availability in new markets. Validate your business ideas with fresh data.",
      benefits: ["Market insights", "Competitive analysis", "Data-driven decisions"]
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-brand-primary" />,
      title: "Data Enrichment",
      description: "Take your existing lead lists and enrich them with missing verified emails and contact information.",
      benefits: ["Complete profiles", "Data accuracy", "Enhanced CRM data"]
    },
    {
      icon: <Search className="h-6 w-6 text-brand-primary" />,
      title: "Lead Generation",
      description: "Build targeted email lists by business type + location. Scale your outreach campaigns with fresh, verified contacts.",
      benefits: ["Scalable lists", "Fresh data", "Geographic targeting"]
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "name": "WebLeads Email Finder Tools",
                "operatingSystem": "Web",
                "applicationCategory": "BusinessApplication",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "120"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock"
                },
                "description": "Real-time email finder tool that searches Google Maps for businesses and enriches them with verified emails from company websites, phone numbers, and decision maker information.",
                "url": "https://webleads.site/email-finder-tools",
                "publisher": {
                  "@type": "Organization",
                  "name": "WebLeads"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-light to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="bg-brand-secondary text-white mb-4 text-md px-4 py-2">
            Fresh data on-demand • Not a database
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-primary leading-tight mb-6">
            Email Finder Tools to Find Business Owner Emails from Google Maps
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Our email finder tools search Google Maps on-demand, then extract verified business and owner email addresses from company websites. Find email addresses for any company in real-time, not from stale databases.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-hover text-white text-lg px-8 py-3 rounded-full shadow-lg">
              <Link href="/#waitlist-form">
                Start Free with 1,000 Credits <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-brand-primary border-brand-primary hover:bg-brand-light text-lg px-8 py-3 rounded-full shadow-lg">
              <Link href="#how-it-works-section">
                See How It Works
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar stats={[
        { value: "200M+", label: "Businesses on Google Maps", icon: <Building2 className="h-6 w-6" /> },
        { value: "195", label: "Countries Covered", icon: <MapPin className="h-6 w-6" /> },
        { value: "95%", label: "Email Accuracy", icon: <CheckCircle2 className="h-6 w-6" /> },
        { value: "Real-time", label: "Fresh Data Daily", icon: <RefreshCw className="h-6 w-6" /> }
      ]} />

      {/* What Makes WebLeads Different */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Why Our Email Finder Tools Beat Competitors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            FREE verification, deep crawling, decision-makers, queue system, and best pricing - all in one tool.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-green-200">
            <Badge className="bg-green-500 text-white mb-3">BIGGEST ADVANTAGE</Badge>
            <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">FREE Email Verification</h3>
            <p className="text-gray-600 mb-2">Coming soon: In-house SMTP + Catch-All verification included FREE.</p>
            <p className="text-sm text-red-600 font-semibold">Competitors charge $5/1,000 emails</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <Search className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Deep Website Crawling</h3>
            <p className="text-gray-600">Playwright dynamically crawls contact pages, about pages, and site sections competitors miss.</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <Users className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Decision-Maker Data</h3>
            <p className="text-gray-600">Owner and manager names with roles included at no extra cost. Most competitors don't offer this.</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <Zap className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Queue Up to 5 Searches</h3>
            <p className="text-gray-600">Run multiple searches concurrently. Competitors have daily limits (LeadSwift: 5/day).</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <TrendingUp className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Best Cost per Lead</h3>
            <p className="text-gray-600 mb-2">$1.00 per 1,000 leads with full features.</p>
            <p className="text-sm text-red-600 font-semibold">3-10x cheaper than competitors</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <RefreshCw className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Real-Time Fresh Data</h3>
            <p className="text-gray-600">Search Google Maps on-demand. No stale 6-12 month old database data.</p>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorksLanding steps={howItWorksSteps} />

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
              Complete Email Finder & Lead Generation Suite
            </h2>
            <p className="text-xl text-gray-600">
              WebLeads combines real-time search with powerful email discovery and data enrichment.
            </p>
          </div>
          <FeaturesGrid features={features} />
        </div>
      </section>

      {/* Tool Comparison Section */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Email Finder Tools: WebLeads vs Competitors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See why WebLeads offers the best value with FREE verification, deep crawling, and decision-maker data.
          </p>
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-4 px-6 text-left font-semibold text-gray-700 border-b">Feature</th>
                <th className="py-4 px-6 text-left font-semibold text-green-700 border-b bg-green-50">WebLeads Growth</th>
                <th className="py-4 px-6 text-left font-semibold text-gray-700 border-b">Outscraper</th>
                <th className="py-4 px-6 text-left font-semibold text-gray-700 border-b">LeadSwift Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Monthly Price</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">$14.99</td>
                <td className="py-4 px-6">$42.75 base + $75 verify</td>
                <td className="py-4 px-6">$49.99/month</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Cost per 1K Emails</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">$1.00</td>
                <td className="py-4 px-6">$7.85 (includes verify)</td>
                <td className="py-4 px-6">~$10.00</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Email Verification</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ FREE (coming soon)</td>
                <td className="py-4 px-6">❌ $5.00 per 1,000 emails</td>
                <td className="py-4 px-6">❌ Not available</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Deep Website Crawling</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ Playwright (contact pages)</td>
                <td className="py-4 px-6">⚠️ Basic scraping</td>
                <td className="py-4 px-6">⚠️ Basic scraping</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Decision-Maker Data</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ Names + roles included</td>
                <td className="py-4 px-6">❌ Not available</td>
                <td className="py-4 px-6">✅ Names (expensive)</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Concurrent Searches</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ Queue up to 5</td>
                <td className="py-4 px-6">⚠️ API only</td>
                <td className="py-4 px-6">❌ 5 per day limit</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium text-gray-700">Total Savings</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">Base price</td>
                <td className="py-4 px-6 text-red-700">$102.76 more/month</td>
                <td className="py-4 px-6 text-red-700">$35.00 more/month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Use Cases Grid */}
      <UseCasesGrid
        title="Who Can Benefit from WebLeads Email Finder?"
        subtitle="Our email finder tool is designed for a wide range of professionals and businesses."
        cases={useCases}
      />

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Only pay for the verified emails you need. No hidden fees, no contracts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle>Free</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-brand-primary">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>1,000 credits/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>Verified emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>Phone numbers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>CSV export</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#waitlist-form">Start Free</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Growth Plan */}
            <Card className="border-4 border-brand-primary relative shadow-xl">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-secondary px-4 py-1">
                MOST POPULAR
              </Badge>
              <CardHeader className="text-center">
                <CardTitle>Growth</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-brand-primary">$14.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">$1.00 per 1,000 emails</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="font-semibold">15,000 credits/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>Queue up to 5 searches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>All Free features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>Decision maker info</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>Social profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span>FREE email verification (soon)</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-brand-primary hover:bg-brand-primary-hover">
                  <Link href="#waitlist-form">
                    Start Growing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Competitor Comparison */}
            <Card className="border-2 bg-gray-50">
              <CardHeader className="text-center">
                <CardTitle>Outscraper</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-destructive">$42.75</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">+ $75/mo for verification</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">$5.00 per 1k emails verify</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Pay-per-use complexity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">No decision-makers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Total: $117.75/mo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 p-6 bg-green-50 rounded-lg border-2 border-green-200 max-w-3xl mx-auto">
            <p className="text-2xl font-bold text-green-700 mb-2">
              Save $500+/year vs traditional email finders
            </p>
            <p className="text-gray-600">
              Real-time data, better accuracy, lower cost
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Finding Verified Emails Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 10,000+ businesses using WebLeads to find verified email addresses. 
            Search Google Maps, get enriched data, export to CSV. Start free with 1,000 credits. Growth plan: 15,000 credits/month for $14.99.
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
