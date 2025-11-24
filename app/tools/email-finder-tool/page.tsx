import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Building2, RefreshCw, Info, AlertCircle, Sparkles, Zap, Shield, MousePointer2, RefreshCcw, ShieldCheck, MailCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StatsBar } from '@/components/landing/stats-bar'
import { EmailFinderTool } from '@/components/email-finder-tool'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Email Finder Tool - Find Business Emails by Website | WebLeads',
  description: 'Find verified business email addresses from any company website. Real-time email discovery tool with instant results.',
  generator: 'Next.js',
  keywords: ['email finder tool', 'find email addresses', 'business email finder', 'email discovery tool', 'website email finder'],
  applicationName: 'WebLeads',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: 'https://webleads.site/tools/email-finder-tool',
  },
  openGraph: {
    title: 'Email Finder Tool - Find Business Emails by Website',
    description: 'Find verified business email addresses from any company website. Real-time email discovery tool with instant results.',
    url: 'https://webleads.site/tools/email-finder-tool',
    siteName: 'WebLeads',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aleksanderwco',
    title: 'Email Finder Tool - Find Business Emails by Website',
    description: 'Find verified business email addresses from any company website. Real-time email discovery tool with instant results.',
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

export default function EmailFinderToolPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-light to-white py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float-blob-1" />
          <div className="absolute top-40 right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-brand-accent/15 rounded-full blur-3xl animate-float-blob-2" />
          <div className="absolute bottom-20 left-1/3 w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-brand-primary/6 rounded-full blur-3xl animate-float-blob-3" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="bg-brand-secondary text-white mb-4 sm:mb-6 text-sm sm:text-md px-3 sm:px-4 py-1.5 sm:py-2 animate-in fade-in zoom-in duration-500">
            Free Email Discovery Tool
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-brand-primary leading-tight tracking-tight mb-4 sm:mb-6">
            Email Finder Tool
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
            Find verified business email addresses from any company website. Enter a website URL below and get instant results.
          </p>

          <EmailFinderTool />
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#1e2330] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-24 overflow-hidden text-center shadow-2xl">
            {/* Gradient & Shape Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e2330] via-[#2d3142] to-[#1e2330] opacity-100" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-brand-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-blue-100 mb-6 sm:mb-8 border border-white/10 shadow-sm">
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-200" />
                <span className="font-medium tracking-wide uppercase text-xs">Pro Feature</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight tracking-tight px-2">
                Need bulk email finding?
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
                WebLeads scans thousands of business websites automatically and extracts emails, phone numbers, social links and even Decision Makers data.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2">
                <Button
                  size="lg"
                  asChild
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border border-white/10 w-full sm:w-auto"
                >
                  <Link href="/#waitlist-form" className="flex items-center justify-center">
                    <span className="text-center">Start Finding Verified Emails Today</span>
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto border-2 border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white/40 transition-all rounded-xl w-full sm:w-auto"
                >
                  <Link href="/email-finder-tools#pricing">
                    View Pricing
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Bar */}
      <StatsBar
  stats={[
    {
      value: "290,000+",
      label: "Emails Extracted",
      icon: <MailCheck className="h-6 w-6" />,
    },
    {
      value: "Zero Guessing",
      label: "Real Business Emails",
      icon: <CheckCircle2 className="h-6 w-6" />,
    },
    {
      value: "99%",
      label: "Email Accuracy",
      icon: <ShieldCheck className="h-6 w-6" />,
    },
    {
      value: "Real-time",
      label: "Fresh Data on Every Search",
      icon: <RefreshCcw className="h-6 w-6" />,
    },
  ]}
/>

      {/* Info Sections */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          
          {/* How It Works */}
          <div className="bg-brand-light/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-brand-primary/5">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                <Info className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-secondary">
                How this email finder works
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              This tool scans the public website you enter, extracts visible email addresses, checks common email patterns, and detects social media profiles. It runs real scraping logic used inside WebLeads, but limited to a single URL at a time.
            </p>
          </div>

          {/* Limitations */}
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0">
                <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-secondary">
                Limitations
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Only works for publicly accessible websites",
                "Won't bypass CAPTCHAs or blocked pages",
                "Doesn't guess emails from first/last names",
                "No bulk mode — for that, use WebLeads"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-primary/20 transition-colors">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Value Props Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-3 sm:mb-4 px-2">
              Why use WebLeads for Email Finding?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              We combine real-time search with powerful data enrichment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-brand-accent mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold text-brand-secondary mb-2 sm:mb-3">Real-Time Speed</h3>
              <p className="text-sm sm:text-base text-gray-600">Get results instantly. No waiting for stale databases to update.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-brand-primary mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold text-brand-secondary mb-2 sm:mb-3">Verified Accuracy</h3>
              <p className="text-sm sm:text-base text-gray-600">We verify email patterns and domains to ensure high deliverability.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <MousePointer2 className="h-8 w-8 sm:h-10 sm:w-10 text-green-600 mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold text-brand-secondary mb-2 sm:mb-3">Easy to Use</h3>
              <p className="text-sm sm:text-base text-gray-600">Just enter a website. We handle the complex scraping and extraction.</p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
