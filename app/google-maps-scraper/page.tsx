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
  description: 'Google Maps scraper: extract phones, emails, and addresses from any business. Fresh data on every search. Start free: 2 searches, 500 results each.',
  generator: 'Next.js',
  keywords: ['google maps scraper', 'google maps data extraction', 'scrape google maps', 'google business scraper', 'maps lead generation'],
  applicationName: 'WebLeads',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: 'https://www.webleads.site/google-maps-scraper',
  },
  openGraph: {
    title: 'Google Maps Scraper - Extract & Enrich Business Data',
    description: 'Scrape Google Maps in real-time. Enrich with verified emails and decision makers from company websites. Start free: 2 searches, 500 results each. Discover tier.',
    url: 'https://www.webleads.site/google-maps-scraper',
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
    description: 'Scrape Google Maps in real-time. Enrich with verified emails and decision makers. Start free with 2 searches, 500 results each.',
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
      answer: "You enter a business type and location (e.g., 'restaurants in NYC'). WebLeads searches Google Maps in real-time and collects matching businesses — fresh data on every search, not from a database. We then enrich each business with emails and decision-maker data from their company websites."
    },
    {
      question: "Is WebLeads legal to use for scraping Google Maps?",
      answer: "Yes. WebLeads extracts publicly available business information that companies have posted on Google Maps. We only access data that is publicly visible to any user and comply with Google's terms of service. No hacking or unauthorized access."
    },
    {
      question: "What data can I get per business?",
      answer: "Per business: name, address, phone, email(s), reviews and ratings, social profiles, and decision makers (names + roles). You can unlock decision-maker emails and verify any email for deliverability. Export to CSV, Excel, or Google Sheets."
    },
    {
      question: "Can I search any location or business type?",
      answer: "Yes. Search any business type in any location worldwide. Examples: 'dentists in Los Angeles', 'real estate agents in London', 'plumbers in Toronto'. WebLeads works across 200M+ businesses in 195 countries. Data is collected fresh when you search."
    },
    {
      question: "How is WebLeads different from other tools?",
      answer: "WebLeads collects fresh data on every search — no stale database. You get decision-makers (names + roles and their emails). Email verification is included in your plan. Deep website crawling finds emails on contact and about pages. Simple pricing: searches, DM unlocks, and email verifications per plan."
    },
    {
      question: "How much does the Google Maps scraper cost?",
      answer: "Discover (free): 2 searches total, 500 results per search, 100 DM unlocks, 200 email verifications — lifetime limits. Paid: Starter $24/mo (1 search/day, 800 results/search, 500 DM unlocks, 3k verifications), Growth $69/mo (3 searches/day, 1,500 results/search, 2.5k DM unlocks, 10k verifications), Scale $199/mo (7 searches/day, 2,500 results/search, 7k DM unlocks, 30k verifications). No setup fees, cancel anytime."
    },
    {
      question: "Can I export data to CSV or Excel?",
      answer: "Yes. Export to CSV, Excel, or Google Sheets. Export is free once you've run your search and unlocked the data you need. All scraped and enriched data is included: emails, phones, decision makers, social profiles, ratings, and more."
    },
    {
      question: "How fast are results ready?",
      answer: "Results start appearing as soon as you search. Enrichment (emails, decision makers, social profiles) runs in the background. You can export after enrichment completes. Large city searches can take longer (e.g. up to ~1.5 hours for very large areas); typical smaller searches are much faster."
    },
  ];

  const features = [
    {
      icon: <MapPin className="h-6 w-6 text-brand-primary" />,
      title: "Real-Time Google Maps Search",
      description: "Fresh data on every search. Enter business type and location — we collect from Google Maps on-demand, not from a stale database."
    },
    {
      icon: <Mail className="h-6 w-6 text-brand-primary" />,
      title: "Verified Emails & DM Unlock",
      description: "Find business emails from company websites. Unlock decision-maker emails from name + company. Verify emails so they deliver."
    },
    {
      icon: <Phone className="h-6 w-6 text-brand-primary" />,
      title: "Business Phone Numbers",
      description: "Main business phone numbers from Google Maps. Reach businesses directly with up-to-date contact data."
    },
    {
      icon: <Users className="h-6 w-6 text-brand-primary" />,
      title: "Decision Makers (Names + Roles)",
      description: "Owner and manager names with roles for personalized outreach. Unlock their emails when you need to reach the right person."
    },
    {
      icon: <Star className="h-6 w-6 text-brand-primary" />,
      title: "Ratings & Reviews",
      description: "Google ratings, review counts, and review content to qualify leads and understand reputation before you reach out."
    },
    {
      icon: <Download className="h-6 w-6 text-brand-primary" />,
      title: "Export to CSV, Excel, Google Sheets",
      description: "Download all data in one click. Import to your CRM or outreach tools and start your campaign."
    },
  ];

  const howItWorksSteps = [
    {
      number: 1,
      title: "Search",
      description: "Enter business type and location. Get a list of matching businesses.",
      icon: <Search className="h-6 w-6" />
    },
    {
      number: 2,
      title: "Get Full Profiles",
      description: "See contact info, emails, and who runs each business. All in one place.",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      number: 3,
      title: "Unlock & Verify",
      description: "Unlock decision-maker emails when you need them. See which emails are ready to use.",
      icon: <Mail className="h-6 w-6" />
    },
    {
      number: 4,
      title: "Export & Go",
      description: "Download your list. Import to your CRM and start reaching out.",
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
            Fresh data on every search • No stale databases
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-primary leading-tight mb-6">
            Google Maps Scraper — Find Verified Business Emails And Decision Makers Contacts
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Search any business type and location. WebLeads collects fresh data from Google Maps every time, then enriches with verified emails and decision-maker names from company websites. Built for agencies, sales teams, and freelancers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-hover text-white text-lg px-8 py-3 rounded-full shadow-lg">
              <Link href="https://app.webleads.site/register">
                Start Free — 2 Searches, 500 Results Each <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* What You Get */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            What You Get with WebLeads
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            More leads that deliver. Less time cleaning lists. Reach the right people, faster.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-green-200">
            <Badge className="bg-green-500 text-white mb-3">BIGGEST WIN</Badge>
            <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Emails That Actually Deliver</h3>
            <p className="text-gray-600 mb-2">Verification included. Fewer bounces.</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <Search className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">More Emails Per Search</h3>
            <p className="text-gray-600">We scan contact pages, not just homepages.</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <Users className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Reach the Right Person</h3>
            <p className="text-gray-600">Names + roles + direct emails. Pitch the decision maker.</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <Zap className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Enough Volume to Hit Your Goals</h3>
            <p className="text-gray-600">3 searches/day (Growth) or 7 (Scale). No waiting.</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <TrendingUp className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">One Clear Bill, No Surprises</h3>
            <p className="text-gray-600">$24 / $69 / $199 per month. Clear quotas. Budget with confidence.</p>
          </Card>
          <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
            <RefreshCw className="h-10 w-10 text-brand-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-secondary mb-2">Fresh results every search.</h3>
            <p className="text-gray-600">No dead leads or outdated lists.</p>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorksLanding
        id="how-it-works-section"
        title="How It Works for You"
        description="Search, see your leads, unlock what you need, export and go."
        steps={howItWorksSteps}
      />

      {/* Features Grid */}
      <FeaturesGrid
        title="Complete Google Maps Data — Verified Emails & Decision Makers"
        description="Real-time search plus enrichment from company websites. Everything you need to contact local businesses."
        features={features}
      />

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
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" /> <span><strong>Verified email addresses</strong> (owner emails)</span></li>
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
              One search → fresh data, verified emails, and decision makers. Export and go.
            </Badge>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <UseCasesGrid
        title="Who Uses Our Google Maps Scraper?"
        subtitle="Agencies, sales teams, freelancers, and local businesses use WebLeads to find and contact leads by niche and location."
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
            Ready to Get Fresh Google Maps Data?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Start free with 2 searches and 500 results each. Find verified business emails and decision makers — no stale lists.
          </p>
          <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-hover text-white text-lg px-8 py-3 rounded-full shadow-lg">
            <Link href="https://app.webleads.site/register">
              Start Free — 2 Searches, 500 Results Each <ArrowRight className="ml-2 h-5 w-5" />
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
                  "availability": "https://schema.org/InStock",
                  "description": "Discover plan: 2 searches, 500 results each, 100 DM unlocks, 200 email verifications. Paid plans from $24/mo."
                },
                "description": "Google Maps scraper with fresh data on every search. Extract business data, verified emails, and decision makers (names + roles). Export to CSV, Excel, or Google Sheets. Start free with Discover tier.",
                "url": "https://www.webleads.site/google-maps-scraper",
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
