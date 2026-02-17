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
import { PricingSection } from "@/components/pricing-section"

export const metadata: Metadata = {
  title: "Get Business Phone Numbers from Google Maps | WebLeads",
  description: "Extract verified business phone numbers + emails from Google Maps. Start free — 2 searches, up to 400 leads. Plans from $29.99/mo.",
  keywords: "business phone numbers, find business contacts, company phone numbers, verified business contacts, b2b phone numbers",
  openGraph: {
    title: "Business Phone Numbers — Get 400 Free Leads from Google Maps",
    description: "Find any business on Google Maps with phone numbers, emails, and contact data. Start free with 2 searches (up to 400 leads). Plans from $29.99/month.",
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
    title: "Business Phone Numbers — Get 400 Free Leads from Google Maps",
    description: "Find business phone numbers from Google Maps. Start free with 2 searches (up to 400 leads). Plans from $29.99/month.",
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
    "description": "Find any business on Google Maps with verified phone numbers, emails, addresses, and owner info. Start free — 2 searches, up to 400 leads.",
    "brand": {
      "@type": "Brand",
      "name": "WebLeads"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "149.99",
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
          "text": "WebLeads uses a search-based subscription model. Each plan includes a daily search quota (e.g. 3 searches/day on Growth) and each search returns up to 200 results. Plans start at $29.99/month (Starter), $79.99/month (Growth), and $149.99/month (Scale). Start free with 2 searches and up to 400 leads — no credit card required."
        }
      },
      {
        "@type": "Question",
        "name": "Can I export business phone numbers to CSV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Export is completely free once businesses appear in your search results. The CSV includes phone numbers, emails, addresses, owner names, social profiles, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Start free with 2 searches (up to 200 results each = 400 leads total). No credit card required. Upgrade to Starter ($29.99/month), Growth ($79.99/month), or Scale ($149.99/month) for daily search quotas and decision maker email unlocks."
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
              🎁 Get 400 Free Leads — No Credit Card Required
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 sm:mb-6 leading-tight tracking-tight">
              Get Business Phone Numbers with Verified Contact Data from Google Maps
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Find business phone numbers from any company on Google Maps worldwide. Get verified phone numbers, emails, 
              addresses, owner names, and social profiles. <strong className="text-brand-primary">Start free — 2 searches, up to 400 leads.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-6 sm:mb-8">
              <Button 
                size="lg" 
                asChild
                className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl w-full sm:w-auto"
              >
                <Link href="/#waitlist-form" className="flex items-center justify-center">
                  Get 400 Free Leads
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
              ✓ No credit card required  ✓ 2 free searches included  ✓ 400 leads to start
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar 
        stats={[
          { value: "Any Business", label: "On Google Maps", icon: <Phone className="h-6 w-6" /> },
          { value: "$149.99/mo", label: "Scale Plan", icon: <DollarSign className="h-6 w-6" /> },
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
            title: "Results Delivered Up to Your Plan Quota",
            description: "Each search returns up to 200 businesses, counted against your daily search quota. Decision maker email unlocks are charged separately per your plan's monthly allowance.",
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

      <div id="pricing" className="scroll-mt-24" />
      <PricingSection />
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-brand-light to-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-brand-primary mb-2 px-2">
              The One Thing Most Tools Don't Give You
            </h3>
            <p className="text-center text-base sm:text-lg text-gray-700 mb-4 px-2 max-w-2xl mx-auto">
              Most lead tools give you a business name and a phone number. WebLeads gives you the <strong>person who reads their own email</strong> — name, role, and verified email address — included in every paid plan.
            </p>

            <div className="mt-6 sm:mt-8 text-center px-2">
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                <Link href="/#waitlist-form" className="flex items-center justify-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <p className="text-xs sm:text-sm text-gray-600 mt-4">
                💡 <strong>Simple transparent pricing</strong> • <strong>3 searches/day on Growth</strong> • <strong>Decision-maker emails included</strong> • <strong>Deep website crawling for emails</strong> • <strong>Plans from $29.99/mo</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

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
            answer: "WebLeads uses a search-based subscription model. Each plan gives you a daily search quota — for example, the Growth plan ($79.99/month) includes 3 searches/day, with each search returning up to 200 results. Decision maker email unlocks are a separate monthly quota (200/month on Growth). Top-ups are available from $2 for DM unlocks and $4 for email verifications. Start free with 2 searches and up to 400 leads — no credit card required."
          },
          {
            question: "What happens when I run out of searches?",
            answer: "When you've used your daily search quota, you'll need to wait until the next day (quotas reset daily) or upgrade to a higher plan. If you run out of DM email unlocks or email verifications, you can purchase top-ups (valid for 6 months) or upgrade your plan. Your existing search results remain accessible even after quotas reset."
          },
          {
            question: "Can I export business phone numbers to CSV?",
            answer: "Yes! Export to CSV is completely free. The file includes all contact data: phone numbers, emails, addresses, owner names, social profiles, and more. Import directly into your CRM, spreadsheet, or sales tool."
          },
          {
            question: "Is there a free plan?",
            answer: "Yes! Start with 2 free searches (up to 200 results each = 400 leads total), 10 DM email unlocks, and 20 email verifications — no credit card required. Upgrade to Starter ($29.99/month) for 1 search/day, Growth ($79.99/month) for 3 searches/day, or Scale ($149.99/month) for 7 searches/day with up to 2 parallel searches."
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
            answer: "WebLeads stands out with decision-maker emails (not just names/roles) unlocked per plan quota, extracted via deep website crawling across all related company pages. Our Scale plan ($149.99/month) gives you 7 searches/day with 600 DM email unlocks and 6,000 email verifications included. We search Google Maps in real-time for the freshest data, offer pay-per-success email verification, and use flat-rate subscriptions — no surprise per-lead charges."
          },
          {
            question: "Do top-ups expire?",
            answer: "Yes — purchased top-ups (DM email unlocks and email verifications) are valid for 6 months from purchase date. This gives you flexibility to use them when you need them. Your monthly plan quotas reset daily (searches) or monthly (DM unlocks and verifications), so your existing search results stay accessible regardless."
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
                Join 130+ businesses who use WebLeads to find verified business phone numbers 
                and contact data. Start free with 2 searches (400 leads), upgrade to Starter for $29.99/month or Growth for $79.99/month.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border border-white/10 w-full sm:w-auto"
                >
                  <Link href="/#waitlist-form" className="flex items-center justify-center">
                    <span className="text-center">Get 400 Free Leads</span>
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
                  <span>2 free searches included</span>
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