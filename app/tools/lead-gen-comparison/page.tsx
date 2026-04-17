import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Lead Generation Tool Comparison | Find the Right Tool | WebLeads',
  description: 'Compare Apollo, Hunter.io, WebLeads, ZoomInfo, and 6+ more. Answer 4 questions and get a ranked recommendation for your industry and use case. Free, no account needed.',
  generator: 'Next.js',
  keywords: ['lead generation tool comparison', 'apollo vs hunter', 'best lead gen software', 'apollo alternative', 'lead scraper comparison'],
  applicationName: 'WebLeads',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: 'https://www.webleads.site/tools/lead-gen-comparison',
  },
  openGraph: {
    title: 'Lead Generation Tool Comparison | Find the Right Tool | WebLeads',
    description: 'Compare Apollo, Hunter.io, WebLeads, ZoomInfo, and 6+ more. Answer 4 questions and get a ranked recommendation for your industry and use case. Free, no account needed.',
    url: 'https://www.webleads.site/tools/lead-gen-comparison',
    siteName: 'WebLeads',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aleksanderwco',
    title: 'Lead Generation Tool Comparison | Find the Right Tool | WebLeads',
    description: 'Compare Apollo, Hunter.io, WebLeads, ZoomInfo, and 6+ more. Answer 4 questions and get a ranked recommendation for your industry and use case. Free, no account needed.',
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

export default function LeadGenComparisonPage() {
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
            Free Comparison Tool
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary leading-tight tracking-tight mb-4 sm:mb-6">
            Find the right lead generation tool for your business
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
            Answer a few quick questions about your industry, location, and needs. Get a personalized ranking of the best tools for your situation. Free, no account required, takes 2 minutes.
          </p>

          <Link
            href="https://app.webleads.site/comparison-tool"
            target="_self"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Get your personalized recommendation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* What You'll Tell Us */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            What you'll tell us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex gap-4 sm:gap-5">
              <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-brand-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">Your industry</h3>
                <p className="text-sm sm:text-base text-gray-600">Tech, construction, real estate, services, and more.</p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-5">
              <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-brand-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">Your location</h3>
                <p className="text-sm sm:text-base text-gray-600">Specific countries or US states for local-first tools.</p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-5">
              <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-brand-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">Your starting point</h3>
                <p className="text-sm sm:text-base text-gray-600">Starting fresh, have a list, or enriching contacts.</p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-5">
              <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-brand-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">Your target customers</h3>
                <p className="text-sm sm:text-base text-gray-600">Local SMBs, mixed, or national enterprise.</p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-5">
              <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-brand-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">Email priority</h3>
                <p className="text-sm sm:text-base text-gray-600">Nice to have, important, or critical.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools We Compare */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Tools we compare
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 text-center">
              <div className="h-12 sm:h-14 mb-4 sm:mb-6 flex items-center justify-center font-bold text-lg sm:text-xl text-gray-900">
                WebLeads
              </div>
              <p className="text-sm sm:text-base text-gray-600">Live business discovery from Google Maps</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 text-center">
              <div className="h-12 sm:h-14 mb-4 sm:mb-6 flex items-center justify-center font-bold text-lg sm:text-xl text-gray-900">
                Apollo
              </div>
              <p className="text-sm sm:text-base text-gray-600">Comprehensive B2B database and outreach</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 text-center">
              <div className="h-12 sm:h-14 mb-4 sm:mb-6 flex items-center justify-center font-bold text-lg sm:text-xl text-gray-900">
                Hunter.io
              </div>
              <p className="text-sm sm:text-base text-gray-600">Email finder for known domains</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 text-center">
              <div className="h-12 sm:h-14 mb-4 sm:mb-6 flex items-center justify-center font-bold text-lg sm:text-xl text-gray-900">
                ZoomInfo
              </div>
              <p className="text-sm sm:text-base text-gray-600">Enterprise B2B intelligence platform</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 text-center">
              <div className="h-12 sm:h-14 mb-4 sm:mb-6 flex items-center justify-center font-bold text-lg sm:text-xl text-gray-900">
                Snov.io
              </div>
              <p className="text-sm sm:text-base text-gray-600">Email discovery and verification</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 text-center">
              <div className="h-12 sm:h-14 mb-4 sm:mb-6 flex items-center justify-center font-bold text-lg sm:text-xl text-gray-900">
                LeadSwift
              </div>
              <p className="text-sm sm:text-base text-gray-600">Cold business discovery and outreach</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 text-center">
              <div className="h-12 sm:h-14 mb-4 sm:mb-6 flex items-center justify-center font-bold text-lg sm:text-xl text-gray-900">
                Lusha
              </div>
              <p className="text-sm sm:text-base text-gray-600">B2B data and email discovery</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 text-center">
              <div className="h-12 sm:h-14 mb-4 sm:mb-6 flex items-center justify-center font-bold text-lg sm:text-xl text-gray-900">
                Outscraper
              </div>
              <p className="text-sm sm:text-base text-gray-600">Google Maps and web scraping</p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 text-center">
              <div className="h-12 sm:h-14 mb-4 sm:mb-6 flex items-center justify-center font-bold text-lg sm:text-xl text-gray-900">
                D7 Networks
              </div>
              <p className="text-sm sm:text-base text-gray-600">Business data and lead generation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-brand-primary to-brand-primary/90 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-24 overflow-hidden text-center shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-primary/80 opacity-100" />
            <div className="absolute top-0 right-0 w-80 h-80 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white leading-tight tracking-tight">
                Get your personalized recommendation
              </h2>

              <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-12">
                Answer 4 questions and get a ranked comparison tailored to your business.
              </p>

              <Link
                href="https://app.webleads.site/comparison-tool"
                target="_self"
                className="inline-flex items-center gap-2 bg-white hover:bg-white/95 text-brand-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Start the comparison
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Frequently asked questions
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <details className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 cursor-pointer group">
              <summary className="flex items-start gap-4 cursor-pointer">
                <HelpCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-open:text-brand-primary">
                    Do I need an account to use the comparison tool?
                  </h3>
                </div>
              </summary>
              <p className="text-sm sm:text-base text-gray-600 mt-4 ml-10">
                No. The comparison tool is completely free and requires no account. Just answer the questions and get your personalized ranking. You only need an email to download the full comparison guide.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 cursor-pointer group">
              <summary className="flex items-start gap-4 cursor-pointer">
                <HelpCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-open:text-brand-primary">
                    Is the tool really free?
                  </h3>
                </div>
              </summary>
              <p className="text-sm sm:text-base text-gray-600 mt-4 ml-10">
                Yes, completely free. We built this to help you find the right tool for your situation. The recommendations are honest — if a competitor tool is better for your use case, we'll rank it higher than WebLeads.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 cursor-pointer group">
              <summary className="flex items-start gap-4 cursor-pointer">
                <HelpCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-open:text-brand-primary">
                    How is WebLeads different from Apollo?
                  </h3>
                </div>
              </summary>
              <p className="text-sm sm:text-base text-gray-600 mt-4 ml-10">
                WebLeads finds businesses from scratch using live Google Maps searches — perfect if you don't have a list to start with. Apollo is a comprehensive B2B database with decision maker targeting, better if you already have company names. The comparison tool will show which is better for your specific situation.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 cursor-pointer group">
              <summary className="flex items-start gap-4 cursor-pointer">
                <HelpCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-open:text-brand-primary">
                    What if I don't know my exact requirements?
                  </h3>
                </div>
              </summary>
              <p className="text-sm sm:text-base text-gray-600 mt-4 ml-10">
                That's fine. The tool has sensible defaults and will still give you solid recommendations. Each answer helps refine the ranking, but you can skip or change anything and re-run the tool.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
