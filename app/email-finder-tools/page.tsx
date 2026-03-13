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
import { PricingSection } from '@/components/pricing-section'

export const metadata: Metadata = {
  title: 'Find Business Owner Emails from Google Maps | WebLeads',
  description: 'Email finder tool to extract verified business owner emails. Real-time search from Google Maps. Start free: 2 searches, 100 DM unlocks, 200 verifications. From $29/mo.',
  generator: 'Next.js',
  keywords: ['email finder tools', 'find email addresses', 'business email finder', 'email discovery tool', 'verify email addresses'],
  applicationName: 'WebLeads',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: 'https://www.webleads.site/email-finder-tools',
  },
  openGraph: {
    title: 'Email Finder Tools - Search Any Business & Get Verified Emails',
    description: 'Find verified business email addresses for any company. Real-time search + enrichment from multiple sources. Start free: 2 searches, 100 DM unlocks, 200 verifications. From $29/mo.',
    url: 'https://www.webleads.site/email-finder-tools',
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
    description: 'Find verified business emails in real-time. Start free: 2 searches, 100 DM unlocks, 200 verifications. From $29/mo. Fresh data from Google Maps.',
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
      answer: "We search Google Maps for businesses, extract their websites, then use Playwright to dynamically crawl contact pages, about pages, and other site sections to find verified business and owner email addresses. This deep website crawling finds emails competitors miss. All emails are verified with FREE SMTP verification."
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
      answer: "See the pricing section above for full details. Start free with no credit card: 2 searches, up to 500 results each, 100 decision maker unlocks, and 200 email verifications. Paid plans from $29/mo (Starter), $79/mo (Growth), and $199/mo (Scale). You pay only for verified emails — failed lookups and bounces cost nothing. No annual contracts, cancel anytime."
    },
    {
      question: "Can I export emails to CSV?",
      answer: "Yes! Export is free once you've unlocked businesses. The CSV includes all contact data: verified emails, phone numbers, owner names, social profiles, business details, and more."
    },
    {
      question: "How is this different from other email finders?",
      answer: "WebLeads has four key advantages: (1) Fresh data on every search — we're not a stale database; (2) FREE email verification included vs $5/1,000 at Outscraper; (3) Decision-maker data with names and roles included — LeadSwift and others show names only, no roles; (4) Quota-based pricing: daily searches plus monthly DM unlocks and verifications. You also get phone numbers and social profiles, not just emails."
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
                "url": "https://www.webleads.site/email-finder-tools",
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
          Find Business Owner Emails with Real-Time Email Finder Tools
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Our email finder tools search Google Maps on-demand, then extract verified business and owner email addresses from company websites. Find email addresses for any company in real-time, not from stale databases.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-hover text-white text-lg px-8 py-3 rounded-full shadow-lg">
              <Link href="https://app.webleads.site/register">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-brand-primary border-brand-primary hover:bg-brand-light text-lg px-8 py-3 rounded-full shadow-lg">
              <Link href="#how-it-works-section">
                See How It Works
              </Link>
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            2 searches · 100 DM unlocks · 200 verifications
          </p>
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
            FREE verification, deep crawling, decision-makers with roles, and transparent quota-based pricing — all in one tool.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-green-200">
            <Badge className="bg-green-500 text-white mb-3">BIGGEST ADVANTAGE</Badge>
            <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">FREE Email Verification</h3>
            <p className="text-gray-600 mb-2">SMTP + Catch-All verification included in plans.</p>
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
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">1–7 Searches per Day</h3>
            <p className="text-gray-600">Starter: 1 search/day. Growth: 3/day. Scale: up to 7/day. Clear daily quotas, no surprise limits.</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <TrendingUp className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Pay Only for What Works</h3>
            <p className="text-gray-600 mb-2">From $29/mo. You pay only for verified emails — bounces and failed lookups cost $0.</p>
            <p className="text-sm text-red-600 font-semibold">No per-email verification fees</p>
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
                <th className="py-4 px-6 text-left font-semibold text-green-700 border-b bg-green-50">WebLeads</th>
                <th className="py-4 px-6 text-left font-semibold text-gray-700 border-b">Outscraper</th>
                <th className="py-4 px-6 text-left font-semibold text-gray-700 border-b">LeadSwift</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Location-based search</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ Supported</td>
                <td className="py-4 px-6">✅ Supported</td>
                <td className="py-4 px-6">✅ Supported</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Map radius search</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ Supported</td>
                <td className="py-4 px-6">❌ Not supported</td>
                <td className="py-4 px-6">❌ Not supported</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Local business coverage</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ Excellent</td>
                <td className="py-4 px-6">✅ Excellent</td>
                <td className="py-4 px-6">✅ Good</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Data consistency</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ Reliable</td>
                <td className="py-4 px-6">⚠️ Variable</td>
                <td className="py-4 px-6">⚠️ Occasional gaps</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Verified emails</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ Verified</td>
                <td className="py-4 px-6">✅ Paid add-on</td>
                <td className="py-4 px-6">⚠️ Requires setup</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Decision maker emails</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ Built-in</td>
                <td className="py-4 px-6">❌ Not included</td>
                <td className="py-4 px-6">✅ Built-in</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Decision maker roles</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ Supported</td>
                <td className="py-4 px-6">❌ Not supported</td>
                <td className="py-4 px-6">❌ Not supported</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Fresh data</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ Real-time</td>
                <td className="py-4 px-6">✅ Real-time</td>
                <td className="py-4 px-6">✅ Real-time</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">UI/UX Quality</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">Modern</td>
                <td className="py-4 px-6">Basic</td>
                <td className="py-4 px-6">Outdated</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Starting price</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">$29/mo</td>
                <td className="py-4 px-6">⚠️ Hard to tell</td>
                <td className="py-4 px-6">$24.99/mo</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium text-gray-700">Best for</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">Local B2B (reliable)</td>
                <td className="py-4 px-6">DIY workflow</td>
                <td className="py-4 px-6">Local B2B</td>
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

      <div id="pricing" className="scroll-mt-24">
        <PricingSection />
      </div>

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
            Join 130+ businesses using WebLeads to find verified email addresses.
            Search Google Maps, get enriched data, export to CSV. Start free: 2 searches, 100 DM unlocks, 200 verifications. From $29/mo for Starter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              asChild
              className="bg-white text-brand-primary hover:bg-gray-100 text-lg px-8 py-6 shadow-lg"
            >
              <Link href="https://app.webleads.site/register">
                Get Started Free
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
