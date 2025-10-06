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
  XCircle
} from "lucide-react"
import Link from "next/link"
import { StatsBar } from "@/components/landing/stats-bar"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { HowItWorksLanding } from "@/components/landing/how-it-works-landing"
import { UseCasesGrid } from "@/components/landing/use-cases-grid"
import { FAQSection } from "@/components/landing/faq-section-landing"

export const metadata: Metadata = {
  title: "Business Phone Numbers - Starting at $1.00 per 1,000 Leads | WebLeads",
  description: "Access 200M+ business phone numbers with verified emails and owner info. Growth plan: 8,000 credits/month for $7.99. Start free with 300 credits.",
  keywords: "business phone numbers, business contact database, company phone numbers, verified business contacts, b2b phone numbers",
  openGraph: {
    title: "Business Phone Numbers - Starting at $1.00 per 1,000 Leads",
    description: "Access 200M+ business phone numbers. Start free with 300 credits, upgrade to Growth for $7.99/month (8,000 credits).",
    url: "https://webleads.site/business-phone-numbers",
    type: "website",
    images: [{
      url: "/images/business-phone-numbers-og.jpg",
      width: 1200,
      height: 630,
      alt: "Business Phone Numbers Database"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aleksanderwco",
    title: "Business Phone Numbers - Starting at $1.00 per 1,000 Leads",
    description: "Access 200M+ business phone numbers. Start free, upgrade for more credits.",
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
    "name": "Business Phone Numbers Database by WebLeads",
    "description": "Access 200M+ business phone numbers with verified emails, addresses, and owner info. Start free with 300 credits.",
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
          "text": "WebLeads uses a credit-based system: 1 credit = 1 business. Start free with 300 credits. Growth plan ($7.99/month) gives you 8,000 credits at just $1.00 per 1,000 leads."
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
          "text": "Yes! Start free with 300 credits (300 businesses). No credit card required. Upgrade to Growth ($7.99) for 8,000 credits/month or Scale ($21.99) for 24,000 credits/month."
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
              💰 Starting at $1.00 per 1,000 leads • Fresh data on-demand
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 leading-tight">
              Get Business Phone Numbers<br />
              <span className="text-brand-secondary">with Verified Contact Data</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access 200M+ business phone numbers worldwide with verified emails, 
              addresses, owner names, and social profiles. <strong className="text-brand-primary">Start free with 300 credits.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                asChild
                className="bg-brand-primary hover:bg-brand-primary-hover text-white text-lg px-8 py-6 shadow-lg"
              >
                <Link href="/#waitlist-form">
                  Start Free (300 Credits)
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
              ✓ No credit card required  ✓ 1 credit = 1 business  ✓ Start in 30 seconds
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar 
        stats={[
          { value: "200M+", label: "Business Phone Numbers", icon: <Phone className="h-6 w-6" /> },
          { value: "$1.00", label: "Per 1,000 Leads (Growth)", icon: <DollarSign className="h-6 w-6" /> },
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-gray-600">
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
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-brand-light to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pay only for the businesses you access. 1 credit = 1 business. Start free, upgrade when you need more.
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
                <p className="text-sm text-gray-600 mt-2">300 credits</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">1 active search at a time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">300 businesses/month</span>
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
                <p className="text-xs text-brand-accent font-semibold mt-1">$1.33 per 1K leads</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">

                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">3,000 businesses/month</span>
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
                  <span className="text-4xl font-bold">$7.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">8,000 credits</p>
                <p className="text-xs text-brand-accent font-semibold mt-1">$1.00 per 1K leads</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">8,000 businesses/month</span>
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
                <p className="text-xs text-brand-accent font-semibold mt-1">$0.92 per 1K leads</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">24,000 businesses/month</span>
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

          {/* Pricing Comparison vs Competitors */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-brand-primary mb-8">
              How WebLeads Compares to Competitors
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
                    <th className="p-4 text-center text-gray-700">ZoomInfo</th>
                    <th className="p-4 text-center text-gray-700">Apollo.io</th>
                    <th className="p-4 text-center text-gray-700">Hunter.io</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Monthly Price</td>
                    <td className="p-4 text-center">
                      <span className="text-2xl font-bold text-brand-primary">$7.99</span>
                    </td>
                    <td className="p-4 text-center text-gray-700">$14,995/year<br /><span className="text-sm">($1,250/month)</span></td>
                    <td className="p-4 text-center text-gray-700">$99/month</td>
                    <td className="p-4 text-center text-gray-700">$49/month</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Credits/Month</td>
                    <td className="p-4 text-center">
                      <span className="font-bold text-brand-primary">8,000</span>
                    </td>
                    <td className="p-4 text-center text-gray-700">Limited by seat</td>
                    <td className="p-4 text-center text-gray-700">2,500 (Basic: $49/mo)</td>
                    <td className="p-4 text-center text-gray-700">2,000 (Starter: $49/mo)</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Cost per 1,000 Leads</td>
                    <td className="p-4 text-center">
                      <span className="font-bold text-brand-accent">$1.00</span>
                    </td>
                    <td className="p-4 text-center text-gray-700">~$15-$20</td>
                    <td className="p-4 text-center text-gray-700">$33</td>
                    <td className="p-4 text-center text-gray-700">-</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Business Phone Numbers</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="h-6 w-6 text-red-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Email Addresses</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Search Any Business Type</td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                        <span className="text-xs text-gray-600 mt-1">Requires credits</span>
                      </div>
                    </td>
                    <td className="p-4 text-center"><XCircle className="h-6 w-6 text-red-500 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="h-6 w-6 text-red-500 mx-auto" /></td>
                    <td className="p-4 text-center"><XCircle className="h-6 w-6 text-red-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold">Annual Contract</td>
                    <td className="p-4 text-center text-brand-primary font-semibold">No</td>
                    <td className="p-4 text-center text-gray-700">Yes</td>
                    <td className="p-4 text-center text-gray-700">No</td>
                    <td className="p-4 text-center text-gray-700">No</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">Free Plan Available</td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                        <span className="text-xs font-semibold text-brand-primary mt-1">300 credits/mo</span>
                      </div>
                    </td>
                    <td className="p-4 text-center"><XCircle className="h-6 w-6 text-red-500 mx-auto" /></td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-6 w-6 text-gray-400" />
                        <span className="text-xs text-gray-600 mt-1">100 credits/mo</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-6 w-6 text-gray-400" />
                        <span className="text-xs text-gray-600 mt-1">50 credits/mo</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-hover text-white">
                <Link href="/#waitlist-form">
                  Start with Growth Plan ($7.99)
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                💡 <strong>3x more credits</strong> than Apollo Free (100/mo) • <strong>6x more credits</strong> than Hunter Free (50/mo) • <strong>156x cheaper</strong> than ZoomInfo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <UseCasesGrid 
        title="Perfect for Every Business Need"
        subtitle="See how businesses use our business phone number database"
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
            answer: "WebLeads uses a simple credit-based system: 1 credit = 1 business. Start free with 300 credits. When you search for businesses, credits are automatically charged when the search completes (not when you export). Growth plan gives you 8,000 credits/month for $7.99, which is just $1.00 per 1,000 leads."
          },
          {
            question: "What happens when I run out of credits?",
            answer: "When your search finds more businesses than you have credits, you'll see the results you have credits for, and the rest will be locked. You can buy credit top-ups (starting at $1 for 500 credits) or upgrade to a higher plan to unlock them. Once unlocked, businesses stay accessible forever."
          },
          {
            question: "Can I export business phone numbers to CSV?",
            answer: "Yes! Export is completely free once you've unlocked businesses with your credits. The CSV file includes all contact data: phone numbers, emails, addresses, owner names, social profiles, and more. Import directly into your CRM, spreadsheet, or sales tool."
          },
          {
            question: "Is there a free plan?",
            answer: "Yes! Start with 300 free credits (300 businesses) with no credit card required. You can search unlimited times, but credits are only charged when searches complete. Upgrade to Growth ($7.99) for 8,000 credits/month or Scale ($21.99) for 24,000 credits/month."
          },
          {
            question: "How accurate are the business phone numbers?",
            answer: "Our business phone numbers come directly from Google Maps, where businesses update their own information. We verify all phone numbers and emails for accuracy, achieving a 95%+ accuracy rate. This is much higher than traditional databases that can be months or years out of date."
          },
          {
            question: "What data points do you provide besides phone numbers?",
            answer: "Along with business phone numbers, you get: verified email addresses, full business address, owner/manager names and roles, website URLs, business social media profiles (LinkedIn, Facebook, Twitter, Instagram), business hours, ratings, review count, and more."
          },
          {
            question: "How is this different from ZoomInfo or Apollo?",
            answer: "WebLeads is 156x cheaper than ZoomInfo ($7.99 vs $1,250/month) and offers 3x more credits on our free plan (300 vs 100 for Apollo, 50 for Hunter). Our Growth plan ($7.99) gives you 8,000 credits/month while Apollo Basic ($49) and Hunter Starter ($49) only give you 2,500-3,000 credits. No annual contracts required, and our data comes fresh from Google Maps daily, not from stale databases."
          },
          {
            question: "Do credits roll over to the next month?",
            answer: "No, credits reset monthly on your billing date. However, any businesses you've already unlocked stay accessible forever - you won't lose access to past searches. To maximize value, use your credits each month or purchase top-ups that add to your current balance."
          }
        ]}
      />

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Getting Business Phone Numbers Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 10,000+ businesses who use WebLeads to find verified business phone numbers 
            and contact data. Start free with 300 credits, upgrade to Growth for just $7.99/month.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              asChild
              className="bg-white text-brand-primary hover:bg-gray-100 text-lg px-8 py-6 shadow-lg"
            >
              <Link href="/#waitlist-form">
                Start Free (300 Credits)
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
              <span>1 credit = 1 business</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Search any business type</span>
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