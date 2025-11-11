import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Search, TrendingUp, Zap, Users, Building2, RefreshCw, Target, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StatsBar } from '@/components/landing/stats-bar'
import { FeaturesGrid } from '@/components/landing/features-grid'
import { HowItWorksLanding } from '@/components/landing/how-it-works-landing'
import { UseCasesGrid } from '@/components/landing/use-cases-grid'
import { FAQSection } from '@/components/landing/faq-section-landing'

export const metadata: Metadata = {
  title: 'Extract Email Contacts from Any Company Website | WebLeads',
  description: 'Find email addresses for any business with deep crawling. Search Google Maps, extract from websites. Start free with 1,000 credits at $14.99/15k.',
  generator: 'Next.js',
  keywords: ['find email addresses', 'business email finder', 'company email lookup', 'email discovery tool', 'get business emails'],
  applicationName: 'WebLeads',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: 'https://webleads.site/find-email-addresses',
  },
  openGraph: {
    title: 'Find Email Addresses - Search Any Business & Get Verified Emails',
    description: 'Find verified business email addresses for any company. Search Google Maps, enrich from company websites & public sources. Real-time search + verification. 300 free credits.',
    url: 'https://webleads.site/find-email-addresses',
    siteName: 'WebLeads',
    images: [
      {
        url: 'http://localhost:3000/images/find-email-addresses-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Find Email Addresses',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aleksanderwco',
    title: 'Find Email Addresses - Search & Get Verified Emails',
    description: 'Find verified business emails in real-time. Search Google Maps, enrich from company websites & public sources.',
    images: ['http://localhost:3000/images/find-email-addresses-og.jpg'],
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

export default function FindEmailAddressesPage() {
  const faqs = [
    {
      question: "How does WebLeads find email addresses?",
      answer: "We search Google Maps for businesses matching your criteria, extract their websites, then use Playwright to dynamically crawl contact pages, about pages, and other site sections to find verified email addresses. This deep website crawling finds emails that basic scrapers miss. All emails are verified with FREE SMTP + Catch-All verification (coming soon) - competitors charge $5/1,000 for this."
    },
    {
      question: "What types of email addresses can I find?",
      answer: "You get multiple types: business emails (info@, contact@, sales@), owner personal emails, and decision maker emails with their names and roles. Each business profile includes all available verified emails."
    },
    {
      question: "Is WebLeads a static email database?",
      answer: "No! WebLeads is a real-time search and enrichment engine. When you search for 'dentists in Chicago', we search Google Maps right then, find matching businesses, and enrich them with fresh emails from company websites. No stale 6-month-old data."
    },
    {
      question: "How accurate are the email addresses?",
      answer: "We maintain 95%+ email accuracy through multi-step verification: syntax validation, domain MX record verification, and deliverability testing. This protects your sender reputation and ensures high inbox delivery rates."
    },
    {
      question: "Can I search for any type of business?",
      answer: "Yes! Search any business type in any location worldwide. Examples: 'restaurants in NYC', 'law firms in London', 'SaaS companies in San Francisco', 'plumbers in Toronto'. 200M+ businesses available across 195 countries."
    },
    {
      question: "How much does it cost to find email addresses?",
      answer: "Start free with 1,000 credits (1,000 businesses with emails). Growth plan is $14.99/month for 15,000 credits with queue up to 5 searches and FREE verification (coming soon). 1 credit = 1 business with verified email, phone, decision-maker data, and more. That's just $1.00 per 1,000 verified emails - 3-8x cheaper than competitors like Outscraper ($7.85/1k with verification) or LeadSwift (~$10/1k)."
    },
    {
      question: "Can I export the email addresses?",
      answer: "Yes! Export is completely free once you've used credits to unlock businesses. The CSV includes all contact data: verified emails, phone numbers, owner names, decision maker info, social profiles, and business details."
    },
    {
      question: "What else do I get besides email addresses?",
      answer: "Every business includes: verified emails, business phone numbers, owner/manager names and roles, social media profiles (LinkedIn, Facebook, Instagram), business address, website, hours, ratings, reviews, and more - all in one search."
    },
  ];

  const features = [
    {
      icon: <Mail className="h-6 w-6 text-brand-primary" />,
      title: "Verified Email Addresses",
      description: "Find and verify business emails, owner emails, and decision maker contacts automatically. 95%+ accuracy guaranteed."
    },
    {
      icon: <Search className="h-6 w-6 text-brand-primary" />,
      title: "Real-Time Google Maps Search",
      description: "Search 200M+ businesses worldwide by type and location. Get fresh, accurate data on-demand from Google Maps."
    },
    {
      icon: <Shield className="h-6 w-6 text-brand-primary" />,
      title: "Multi-Step Email Verification",
      description: "Every email is verified through syntax validation, domain checks, and deliverability testing to protect your sender reputation."
    },
    {
      icon: <Phone className="h-6 w-6 text-brand-primary" />,
      title: "Business Phone Numbers",
      description: "Get main business phone numbers from Google Maps alongside emails for multi-channel outreach."
    },
    {
      icon: <Users className="h-6 w-6 text-brand-primary" />,
      title: "Decision Maker Information",
      description: "Get owner and manager names with their roles for personalized outreach to the right people at each company."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-brand-primary" />,
      title: "Social Media Profiles",
      description: "Find business social media links (LinkedIn, Facebook, Instagram) to enrich your prospecting and research efforts."
    },
  ];

  const howItWorksSteps = [
    {
      number: 1,
      title: "Search by Business Type & Location",
      description: "Enter any business type and location (e.g., 'dentists in Los Angeles', 'restaurants in NYC'). WebLeads searches Google Maps in real-time.",
      icon: <Search className="h-6 w-6" />
    },
    {
      number: 2,
      title: "We Find Businesses",
      description: "WebLeads discovers all matching businesses on Google Maps with their basic information, ratings, and locations.",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      number: 3,
      title: "We Enrich with Emails",
      description: "We automatically visit each company's website to extract and verify email addresses - business emails, owner emails, and decision makers.",
      icon: <Mail className="h-6 w-6" />
    },
    {
      number: 4,
      title: "Download Everything",
      description: "Export your complete contact list to CSV with verified emails, phone numbers, social profiles, and business details for your CRM.",
      icon: <CheckCircle2 className="h-6 w-6" />
    },
  ];

  const useCases = [
    {
      icon: <Mail className="h-6 w-6 text-brand-primary" />,
      title: "Cold Email Outreach",
      description: "Build targeted email lists with verified addresses for any industry or location. Maximize deliverability and response rates with fresh, accurate data.",
      benefits: ["Verified emails", "High deliverability", "Targeted lists"]
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-brand-primary" />,
      title: "B2B Sales Prospecting",
      description: "Find decision makers and their verified contact info for any business type. Streamline your sales pipeline with qualified leads.",
      benefits: ["Decision maker info", "Direct contact", "Qualified leads"]
    },
    {
      icon: <Target className="h-6 w-6 text-brand-primary" />,
      title: "Lead Generation Campaigns",
      description: "Generate fresh leads on-demand for any vertical or geographic market. No more waiting for stale database updates.",
      benefits: ["On-demand leads", "Fresh data", "Any niche"]
    },
    {
      icon: <Search className="h-6 w-6 text-brand-primary" />,
      title: "Market Research",
      description: "Analyze business density, competition, and contact availability in target markets. Validate ideas with real data.",
      benefits: ["Market insights", "Competitive analysis", "Data-driven decisions"]
    },
    {
      icon: <Users className="h-6 w-6 text-brand-primary" />,
      title: "Partnership Outreach",
      description: "Discover potential B2B partners in any industry. Get their verified contact information to initiate collaborations.",
      benefits: ["Strategic partnerships", "Networking opportunities", "Growth potential"]
    },
    {
      icon: <Phone className="h-6 w-6 text-brand-primary" />,
      title: "Data Enrichment",
      description: "Take your existing lead lists and enrich them with missing verified emails, phone numbers, and decision maker information.",
      benefits: ["Complete profiles", "Data accuracy", "Enhanced CRM"]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-light to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="bg-brand-secondary text-white mb-4 text-md px-4 py-2">
            Fresh data on-demand • Not a database
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-primary leading-tight mb-6">
            Find Email Addresses & Extract Verified Business Contacts from Any Company
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Find email addresses for any business by searching Google Maps, then automatically extracting verified business and owner emails from company websites. Get email addresses for decision makers, owners, and staff in one search.
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
            Find Email Addresses Features - Real-Time Extraction
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlike static databases, WebLeads provides fresh, real-time email data directly from Google Maps and company websites.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <Zap className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Real-Time Search</h3>
            <p className="text-gray-600">We search Google Maps when YOU need it, not from stale 6-month-old databases.</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <Mail className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Automatic Enrichment</h3>
            <p className="text-gray-600">Find businesses → enrich with emails from websites → verify deliverability automatically.</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <MapPin className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Any Business Type</h3>
            <p className="text-gray-600">Search restaurants, dentists, law firms, SaaS companies - any business worldwide.</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <TrendingUp className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Pay Per Business</h3>
            <p className="text-gray-600">1 credit = 1 business with email + phone + enriched data. No wasteful subscriptions.</p>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorksLanding
        id="how-it-works-section"
        title="Find Email Addresses in 4 Simple Steps"
        description="WebLeads makes finding verified business email addresses effortless."
        steps={howItWorksSteps}
      />

      {/* Features Grid */}
      <FeaturesGrid
        title="Complete Email Finding & Verification Suite"
        description="WebLeads combines real-time search with powerful email discovery and verification."
        features={features}
      />

      {/* WebLeads vs Static Databases */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            WebLeads vs. Static Email Databases
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See why real-time search beats outdated email databases.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 shadow-md bg-white border-green-500 border-2">
            <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
              <CheckCircle2 className="h-6 w-6 mr-2" /> WebLeads (Real-Time)
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> <span><strong>Fresh Emails:</strong> Found and verified in real-time from company websites.</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> <span><strong>Any Business Type:</strong> Search for any niche, industry, or location on Google Maps.</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> <span><strong>Complete Enrichment:</strong> Emails + phones + decision makers + social profiles.</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> <span><strong>Pay-Per-Business:</strong> Only pay for leads you actually unlock and use.</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> <span><strong>95%+ Accuracy:</strong> Multi-step verification ensures high deliverability.</span></li>
            </ul>
          </Card>
          <Card className="p-6 shadow-md bg-white border-red-500 border-2">
            <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
              <Zap className="h-6 w-6 mr-2" /> Static Databases (Outdated)
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><Zap className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong>Stale Emails:</strong> Often 6-12 months old, leading to high bounce rates and spam.</span></li>
              <li className="flex items-start gap-2"><Zap className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong>Limited Coverage:</strong> Restricted to pre-indexed businesses, missing new companies.</span></li>
              <li className="flex items-start gap-2"><Zap className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong>Manual Enrichment:</strong> Requires extra tools and time to get complete data.</span></li>
              <li className="flex items-start gap-2"><Zap className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong>Subscription Fees:</strong> High monthly costs regardless of actual usage.</span></li>
              <li className="flex items-start gap-2"><Zap className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" /> <span><strong>Lower Accuracy:</strong> Higher risk of invalid emails and damaged sender reputation.</span></li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Use Cases Grid */}
      <UseCasesGrid
        title="Who Uses WebLeads to Find Email Addresses?"
        subtitle="Our tool is trusted by sales teams, marketers, and agencies worldwide."
        cases={useCases}
      />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Everything you need to know about finding email addresses with WebLeads"
        faqs={faqs}
      />

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-t from-brand-light to-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6">
            Ready to Find Verified Email Addresses?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Start finding and verifying business emails in real-time with WebLeads. Get 300 free credits today!
          </p>
          <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-hover text-white text-lg px-8 py-3 rounded-full shadow-lg">
            <Link href="/#waitlist-form">
              Start Free with 1,000 Credits <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />

      {/* JSON-LD for Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "name": "WebLeads - Find Email Addresses",
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
                "description": "Find and verify business email addresses in real-time. Search Google Maps for any business type, then automatically extract and verify emails from company websites.",
                "url": "https://webleads.site/find-email-addresses",
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
    </div>
  )
}
