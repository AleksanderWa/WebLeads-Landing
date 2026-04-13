import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { LeadSourceComparisonTool } from '@/components/lead-source-comparison-tool'

export const metadata: Metadata = {
  title: 'Lead Source Comparison Tool | WebLeads',
  description:
    'Compare popular B2B lead sources for local prospecting. Quick ranking based on your goals, email needs, and budget.',
  generator: 'Next.js',
  keywords: [
    'lead generation tools comparison',
    'best lead source for agencies',
    'local lead generation tools',
    'B2B prospecting tools',
  ],
  applicationName: 'WebLeads',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: 'https://www.webleads.site/tools/lead-source-comparison',
  },
  openGraph: {
    title: 'Lead Source Comparison Tool',
    description:
      'Compare popular B2B lead sources for local prospecting. Quick ranking based on your goals, email needs, and budget.',
    url: 'https://www.webleads.site/tools/lead-source-comparison',
    siteName: 'WebLeads',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aleksanderwco',
    title: 'Lead Source Comparison Tool',
    description:
      'Compare popular B2B lead sources for local prospecting. Quick ranking based on your goals, email needs, and budget.',
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

export default function LeadSourceComparisonPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative bg-gradient-to-br from-brand-light to-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-float-blob-1 absolute left-10 top-10 h-48 w-48 rounded-full bg-brand-primary/8 blur-3xl sm:h-64 sm:w-64 md:h-96 md:w-96" />
          <div className="animate-float-blob-2 absolute right-20 top-40 h-40 w-40 rounded-full bg-brand-accent/15 blur-3xl sm:h-56 sm:w-56 md:h-80 md:w-80" />
          <div className="animate-float-blob-3 absolute bottom-20 left-1/3 h-36 w-36 rounded-full bg-brand-primary/6 blur-3xl sm:h-48 sm:w-48 md:h-72 md:w-72" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-4 animate-in fade-in zoom-in px-4 py-2 text-sm duration-500 sm:mb-6 sm:text-md bg-brand-secondary text-white">
            Free planning tool
          </Badge>
          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-brand-primary sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6">
            Compare lead sources for your next campaign
          </h1>
          <p className="mx-auto mb-8 max-w-3xl px-2 text-base text-gray-600 sm:text-lg md:text-xl sm:mb-12">
            Answer a few questions about who you sell to and how you work. We rank common tools so you can
            shortlist faster, then run a real search in WebLeads when you are ready.
          </p>

          <LeadSourceComparisonTool />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-brand-primary/10 bg-white/80 p-8 text-center shadow-md backdrop-blur-sm sm:p-10">
          <h2 className="mb-4 text-2xl font-bold text-brand-primary sm:text-3xl">Want fresh rows per search?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Lists rot. WebLeads collects fresh businesses when you search a niche and area, then helps you reach
            decision makers when a website exists.
          </p>
          <Button
            size="lg"
            asChild
            className="rounded-xl bg-brand-primary px-8 text-white shadow-lg hover:bg-brand-primary-hover"
          >
            <Link href="/#waitlist-form" className="inline-flex items-center">
              Start on WebLeads
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
