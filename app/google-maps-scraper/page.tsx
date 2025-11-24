import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Search, TrendingUp, Zap, Users, Building2, RefreshCw, Download, Globe, Star, Clock } from 'lucide-react'
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
  title: 'Google Maps Scraper to Extract Business Data + Emails | WebLeads',
  description: 'Google Maps scraper tool to extract phones, emails, addresses from any business. Real-time + enrichment. Start free with 1,000 credits at $14.99/15k.',
  generator: 'Next.js',
  keywords: ['google maps scraper', 'google maps data extraction', 'scrape google maps', 'google business scraper', 'maps lead generation'],
  applicationName: 'WebLeads',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: 'https://webleads.site/google-maps-scraper',
  },
  openGraph: {
    title: 'Google Maps Scraper - Extract & Enrich Business Data',
    description: 'Scrape Google Maps + enrich with emails from company websites & public sources. Phone numbers, emails, addresses, ratings. Real-time extraction. 300 free credits.',
    url: 'https://webleads.site/google-maps-scraper',
    siteName: 'WebLeads',
    images: [
      {
        url: 'http://localhost:3000/images/google-maps-scraper-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Google Maps Scraper',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aleksanderwco',
    title: 'Google Maps Scraper - Extract & Enrich Business Data',
    description: 'Scrape Google Maps + enrich from multiple sources. Real-time extraction, automatic enrichment, instant CSV export.',
    images: ['http://localhost:3000/images/google-maps-scraper-og.jpg'],
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

export default function GoogleMapsScraperPage() {
  const faqs = [
    {
      question: "How does WebLeads scrape Google Maps data?",
      answer: "WebLeads searches Google Maps in real-time for your specified business type and location (e.g., 'restaurants in NYC'). We extract all public business information: phone numbers, addresses, websites, hours, ratings, reviews, and more. Then we enrich each business with emails and social profiles from their company websites."
    },
    {
      question: "Is WebLeads legal to use for scraping Google Maps?",
      answer: "Yes. WebLeads extracts publicly available business information that companies themselves have posted on Google Maps. We comply with Google's terms of service and only access data that is publicly visible to any user. We don't use any hacking or unauthorized access methods."
    },
    {
      question: "What data can I extract from Google Maps?",
      answer: "You get comprehensive business data: business name, phone numbers, email addresses (enriched from websites), physical address, website URL, business hours, Google ratings, review count, social media profiles, owner/manager names, business category, and more. All data is exported to CSV."
    },
    {
      question: "Can I scrape any location or business type?",
      answer: "Yes! Search any business type in any location worldwide. Examples: 'dentists in Los Angeles', 'restaurants in Paris', 'real estate agents in London', 'plumbers in Toronto'. WebLeads works across 200M+ businesses in 195 countries."
    },
    {
      question: "How is WebLeads different from other Google Maps scrapers?",
      answer: "WebLeads has 5 unique advantages: (1) FREE email verification (coming soon) vs $5/1k at Outscraper, (2) Deep website crawling with Playwright to find emails on contact pages, (3) Decision-maker data (names + roles) included, (4) Queue up to 5 searches concurrently vs Map Lead Scraper's manual Chrome extension, (5) Best pricing at $1.00/1k vs Scrap.io's $4.95/1k. You get complete contact data, not just what's on Google Maps."
    },
    {
      question: "How much does the Google Maps scraper cost?",
      answer: "Start free with 1,000 credits (1,000 businesses scraped and enriched). Growth plan is $14.99/month for 15,000 credits with queue up to 5 searches. 1 credit = 1 business with complete data. That's just $1.00 per 1,000 enriched leads - 3-5x cheaper than competitors like Scrap.io ($4.95/1k) or LeadSwift (~$10/1k). No setup fees, cancel anytime."
    },
    {
      question: "Can I export scraped data to CSV?",
      answer: "Yes! Export is completely free once you've used credits to unlock businesses. The CSV includes all scraped data from Google Maps plus enriched data: emails, phone numbers, owner names, social profiles, ratings, reviews, and more."
    },
    {
      question: "How fast can I scrape Google Maps?",
      answer: "Scraping is instant - results appear as soon as you search. Enrichment (finding emails, social profiles) happens automatically in the background. You can export your data after enrichment is complete. Typical enrichment time: 1-5 minutes per 100 businesses."
    },
  ];

  const features = [
    {
      icon: <MapPin className="h-6 w-6 text-brand-primary" />,
      title: "Real-Time Google Maps Scraping",
      description: "Scrape business data from Google Maps on-demand. Search any business type, any location, and extract data instantly."
    },
    {
      icon: <Mail className="h-6 w-6 text-brand-primary" />,
      title: "Automatic Email Enrichment",
      description: "Don't just scrape Google Maps - we automatically find and verify email addresses from company websites for each business."
    },
    {
      icon: <Phone className="h-6 w-6 text-brand-primary" />,
      title: "Business Phone Numbers",
      description: "Extract phone numbers directly from Google Maps business listings. Get verified, up-to-date contact numbers."
    },
    {
      icon: <Users className="h-6 w-6 text-brand-primary" />,
      title: "Owner & Decision Maker Data",
      description: "Get owner and manager names with their roles for personalized outreach to the right people at each business."
    },
    {
      icon: <Star className="h-6 w-6 text-brand-primary" />,
      title: "Ratings & Reviews Data",
      description: "Scrape Google ratings, review counts, and top reviews to qualify leads and understand business reputation."
    },
    {
      icon: <Download className="h-6 w-6 text-brand-primary" />,
      title: "Instant CSV Export",
      description: "Download all scraped and enriched data to CSV instantly. Import directly to your CRM or spreadsheet."
    },
  ];

  const howItWorksSteps = [
    {
      number: 1,
      title: "Search Google Maps",
      description: "Enter any business type and location (e.g., 'dentists in Chicago', 'hotels in Miami'). WebLeads scrapes Google Maps in real-time.",
      icon: <Search className="h-6 w-6" />
    },
    {
      number: 2,
      title: "We Extract Everything",
      description: "We scrape all public business data from Google Maps: name, phone, address, website, hours, ratings, reviews, and more.",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      number: 3,
      title: "We Enrich Automatically",
      description: "We visit each company's website to extract verified emails, social profiles, and decision maker information - not available on Google Maps.",
      icon: <Mail className="h-6 w-6" />
    },
    {
      number: 4,
      title: "Export to CSV",
      description: "Download your complete dataset to CSV with all scraped and enriched data. Import to your CRM or outreach tools instantly.",
      icon: <Download className="h-6 w-6" />
    },
  ];

  const useCases = [
    {
      icon: <TrendingUp className="h-6 w-6 text-brand-primary" />,
      title: "B2B Lead Generation",
      description: "Scrape Google Maps to build targeted lead lists for any industry or location. Get complete contact data for outreach.",
      benefits: ["Targeted leads", "Complete data", "Qualified prospects"]
    },
    {
      icon: <Phone className="h-6 w-6 text-brand-primary" />,
      title: "Cold Calling Campaigns",
      description: "Extract phone numbers from Google Maps for cold calling. Get verified business numbers with owner names for warm intros.",
      benefits: ["Verified numbers", "Owner names", "High connect rates"]
    },
    {
      icon: <Mail className="h-6 w-6 text-brand-primary" />,
      title: "Cold Email Outreach",
      description: "Scrape Google Maps and get enriched with verified emails. Build targeted email lists for any vertical or market.",
      benefits: ["Verified emails", "High deliverability", "Niche targeting"]
    },
    {
      icon: <Search className="h-6 w-6 text-brand-primary" />,
      title: "Market Research",
      description: "Analyze business density, competition, and market trends in any location. Scrape ratings and reviews for sentiment analysis.",
      benefits: ["Market insights", "Competitive data", "Trend analysis"]
    },
    {
      icon: <MapPin className="h-6 w-6 text-brand-primary" />,
      title: "Local Business Marketing",
      description: "Scrape local businesses in specific areas for targeted marketing campaigns. Get contact data for hyperlocal outreach.",
      benefits: ["Local targeting", "Geographic segmentation", "Community reach"]
    },
    {
      icon: <Building2 className="h-6 w-6 text-brand-primary" />,
      title: "Competitor Analysis",
      description: "Scrape competitors' Google Maps data: ratings, reviews, hours, locations. Understand their market positioning and performance.",
      benefits: ["Competitive intel", "Performance benchmarks", "Market positioning"]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-light to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="bg-brand-secondary text-white mb-4 text-md px-4 py-2">
            🗺️ Scrape Google Maps in real-time • No stale databases
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-primary leading-tight mb-6">
            Google Maps Scraper to Extract & Enrich Business Data from Multiple Sources
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Our Google Maps scraper extracts business data in real-time for any business type and location. Scrape Google Maps for phone numbers, addresses, ratings, and reviews - then we automatically enrich with verified emails and social profiles from company websites.
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
        { value: "195", label: "Countries Covered", icon: <Globe className="h-6 w-6" /> },
        { value: "95%", label: "Email Accuracy", icon: <CheckCircle2 className="h-6 w-6" /> },
        { value: "Real-time", label: "Fresh Data Daily", icon: <RefreshCw className="h-6 w-6" /> }
      ]} />

      {/* What Makes WebLeads Different */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Google Maps Scraper Features - Best Tool to Extract Data
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don't just scrape Google Maps - we add FREE verification, deep crawling, decision-makers, and queue system.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-green-200">
            <Badge className="bg-green-500 text-white mb-3">BIGGEST ADVANTAGE</Badge>
            <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">FREE Email Verification</h3>
            <p className="text-gray-600 mb-2">Coming soon: SMTP + Catch-All verification included FREE.</p>
            <p className="text-sm text-red-600 font-semibold">Outscraper charges $5/1,000 emails</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <Search className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Deep Website Crawling</h3>
            <p className="text-gray-600">Playwright crawls contact pages and site sections. Not just basic scraping like Map Lead Scraper.</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <Users className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Decision-Maker Data</h3>
            <p className="text-gray-600">Names + roles included. Outscraper and Map Lead Scraper don't offer this.</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <Zap className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Queue Up to 5 Searches</h3>
            <p className="text-gray-600">Run searches concurrently. Map Lead Scraper is manual Chrome extension only.</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <TrendingUp className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Best Pricing</h3>
            <p className="text-gray-600 mb-2">$1.00 per 1,000 leads.</p>
            <p className="text-sm text-red-600 font-semibold">Scrap.io: $4.95/1k</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <RefreshCw className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Real-Time Scraping</h3>
            <p className="text-gray-600">Fresh data pulled when you search. No stale databases.</p>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorksLanding
        id="how-it-works-section"
        title="Scrape Google Maps in 4 Simple Steps"
        description="WebLeads makes Google Maps scraping and enrichment effortless."
        steps={howItWorksSteps}
      />

      {/* Features Grid */}
      <FeaturesGrid
        title="Complete Google Maps Scraping & Enrichment Suite"
        description="WebLeads combines real-time scraping with powerful data enrichment."
        features={features}
      />

      {/* Scraper Comparison Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Google Maps Scrapers: WebLeads vs Competitors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare features, pricing, and capabilities across top Google Maps scraping tools.
          </p>
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-4 px-6 text-left font-semibold text-gray-700 border-b">Feature</th>
                <th className="py-4 px-6 text-left font-semibold text-green-700 border-b bg-green-50">WebLeads Growth</th>
                <th className="py-4 px-6 text-left font-semibold text-gray-700 border-b">Scrap.io Pro</th>
                <th className="py-4 px-6 text-left font-semibold text-gray-700 border-b">Map Lead Scraper</th>
                <th className="py-4 px-6 text-left font-semibold text-gray-700 border-b">Outscraper</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Monthly Price</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">$14.99</td>
                <td className="py-4 px-6">$99/month</td>
                <td className="py-4 px-6">$19.90/month</td>
                <td className="py-4 px-6">Pay-per-use</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Cost per 1K Leads</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">$1.00</td>
                <td className="py-4 px-6">$4.95</td>
                <td className="py-4 px-6">~$0.20 (basic only)</td>
                <td className="py-4 px-6">$2.85</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Email Verification</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ FREE (coming soon)</td>
                <td className="py-4 px-6">❌ Not available</td>
                <td className="py-4 px-6">❌ Not available</td>
                <td className="py-4 px-6">❌ $5.00 per 1,000</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Advanced Website Crawling</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ Yes<br/><span className="text-xs font-normal">(scans all relevant company pages, not only homepage)</span></td>
                <td className="py-4 px-6">❓ Unknown</td>
                <td className="py-4 px-6">❓ Unknown</td>
                <td className="py-4 px-6">❓ Unknown</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Decision-Maker Data</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ Names + roles</td>
                <td className="py-4 px-6">❌ Not available</td>
                <td className="py-4 px-6">❌ Not available</td>
                <td className="py-4 px-6">❌ Not available</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium text-gray-700">Automation</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">✅ Queue up to 5</td>
                <td className="py-4 px-6">✅ API access</td>
                <td className="py-4 px-6">❌ Manual Chrome ext</td>
                <td className="py-4 px-6">✅ API + webhooks</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium text-gray-700">Best For</td>
                <td className="py-4 px-6 text-green-700 bg-green-50 font-bold">All-in-one value</td>
                <td className="py-4 px-6">Large agencies</td>
                <td className="py-4 px-6">Basic scraping only</td>
                <td className="py-4 px-6">Pay-per-use model</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What Data Can You Scrape */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              What Data Can You Scrape from Google Maps?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              WebLeads extracts everything from Google Maps, then enriches with data not available on Maps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 shadow-md bg-white">
              <h3 className="text-2xl font-bold text-brand-primary mb-4 flex items-center">
                <MapPin className="h-6 w-6 mr-2" /> From Google Maps
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" /> <span>Business name and category</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" /> <span>Phone numbers (main business line)</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" /> <span>Physical address with coordinates</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" /> <span>Website URL</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" /> <span>Business hours (open/closed times)</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" /> <span>Google ratings (1-5 stars)</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" /> <span>Total review count</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" /> <span>Top reviews and ratings</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" /> <span>Photos and images</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" /> <span>Popular times data</span></li>
              </ul>
            </Card>

            <Card className="p-6 shadow-md bg-white border-brand-primary border-2">
              <h3 className="text-2xl font-bold text-brand-primary mb-4 flex items-center">
                <Zap className="h-6 w-6 mr-2" /> Enriched from Websites
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" /> <span><strong>Verified email addresses</strong> (info@, contact@, owner emails)</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" /> <span><strong>Owner & manager names</strong> with roles</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" /> <span><strong>LinkedIn profiles</strong> (company & personal)</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" /> <span><strong>Facebook business page</strong></span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" /> <span><strong>Instagram account</strong></span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" /> <span><strong>Twitter/X handle</strong></span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" /> <span><strong>Additional phone numbers</strong></span></li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Badge className="bg-green-600 text-white text-lg px-6 py-3">
              🎯 WebLeads = Google Maps Scraper + Email Finder + Decision-Maker Finder
            </Badge>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <UseCasesGrid
        title="Who Uses Our Google Maps Scraper?"
        subtitle="Sales teams, marketers, agencies, and researchers trust WebLeads for Google Maps scraping."
        cases={useCases}
      />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Everything you need to know about scraping Google Maps with WebLeads"
        faqs={faqs}
      />

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-t from-brand-light to-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6">
            Ready to Scrape Google Maps?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Start scraping and enriching business data from Google Maps today. Get 300 free credits!
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
                "name": "WebLeads - Google Maps Scraper",
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
                "description": "Real-time Google Maps scraper. Extract business data, phone numbers, addresses, ratings, and reviews. Automatically enrich with verified emails and social profiles.",
                "url": "https://webleads.site/google-maps-scraper",
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
