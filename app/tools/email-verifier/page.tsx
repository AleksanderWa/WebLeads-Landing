import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ShieldCheck, Zap, BarChart2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StatsBar } from '@/components/landing/stats-bar'
import { EmailVerifierTool } from '@/components/email-verifier-tool'

export const metadata: Metadata = {
  title: 'Free Email Verifier - Check If an Email is Valid | WebLeads',
  description:
    'Verify any email address instantly. Check format, MX records, and SMTP deliverability for free. No account required. 3 free verifications per day.',
  keywords: [
    'email verifier',
    'email verification tool',
    'check email address',
    'email validation',
    'verify email free',
    'smtp email checker',
    'mx record checker',
    'email deliverability checker',
    'is this email valid',
  ],
  alternates: {
    canonical: 'https://www.webleads.site/tools/email-verifier',
  },
  openGraph: {
    title: 'Free Email Verifier - Check If an Email is Valid',
    description:
      'Instantly check format, MX records, and SMTP deliverability. Free, no account required.',
    url: 'https://www.webleads.site/tools/email-verifier',
    siteName: 'WebLeads',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aleksanderwco',
    title: 'Free Email Verifier - Check If an Email is Valid',
    description:
      'Instantly check format, MX records, and SMTP deliverability. Free, no account required.',
  },
  icons: { icon: '/favicon.png' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
}

const checks = [
  {
    icon: <CheckCircle2 className="h-5 w-5 text-brand-primary" />,
    title: 'Format validation',
    description: 'Confirms the address follows valid email syntax before anything else.',
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-brand-primary" />,
    title: 'MX record check',
    description: "Looks up the domain's mail exchange records to confirm the domain can receive email.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-brand-primary" />,
    title: 'SMTP verification',
    description: 'Connects directly to the mail server to confirm the mailbox exists without sending anything.',
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-brand-primary" />,
    title: 'Catch-all detection',
    description: 'Flags domains that accept all addresses - useful for outreach since catch-alls can mask invalid inboxes.',
  },
]

const faqs = [
  {
    q: 'What does "catch-all" mean?',
    a: 'A catch-all domain accepts every email sent to it, regardless of whether the specific mailbox exists. This means SMTP verification returns positive even for made-up addresses. If a domain is catch-all, treat the result as uncertain.',
  },
  {
    q: 'Will you send a test email to verify?',
    a: 'No. The SMTP check connects to the mail server and simulates the start of a conversation without delivering any message. The mailbox owner never sees anything.',
  },
  {
    q: 'Why does the result sometimes show "Unknown"?',
    a: "Some mail servers use greylisting or block verification attempts entirely. In those cases we can confirm the domain is real (MX exists) but can't verify the specific inbox.",
  },
  {
    q: 'How is this different from just checking email format?',
    a: "Format validation only checks if the address looks right (like having an @ sign). SMTP verification actually contacts the mail server. An address can be perfectly formatted and still bounce - this tool catches that.",
  },
  {
    q: 'Why only 3 free verifications per day?',
    a: 'SMTP verification uses real server connections. To keep this tool free for everyone, we limit anonymous use. Signing up for a WebLeads account gives you up to 3,000 verifications per month.',
  },
]

export default function EmailVerifierPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-light to-white py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float-blob-1" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl animate-float-blob-2" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="h-4 w-4" />
            Free Email Verifier
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-primary mb-6 leading-tight">
            Check if an email address is valid
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Format check, MX records, and live SMTP verification - all in one step.
            No account needed. 3 free checks per day.
          </p>

          {/* Tool */}
          <div className="bg-white rounded-2xl shadow-xl border border-brand-primary/10 p-6 sm:p-8 text-left">
            <EmailVerifierTool />
          </div>
        </div>
      </section>

      <StatsBar stats={[
        { value: '3/day', label: 'Free verifications' },
        { value: 'SMTP', label: 'Live server check' },
        { value: '< 5s', label: 'Per verification' },
        { value: '95%+', label: 'Accuracy rate' },
      ]} />

      {/* What we check */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              What gets checked
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Three layers of verification, from syntax to live server confirmation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {checks.map((check, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-white border border-brand-primary/10 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-brand-primary/10 p-2 rounded-lg shrink-0">
                  {check.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{check.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{check.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why verify */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-5">
                Bad emails hurt your outreach
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A bounce rate above 2% can get your sending domain flagged. Every invalid email you
                send chips away at your sender reputation - sometimes permanently.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Verifying before you send takes seconds and protects months of domain warm-up.
              </p>
              <div className="space-y-3">
                {[
                  'Reduce hard bounces before they happen',
                  'Protect your sending domain reputation',
                  'Catch catch-all domains that hide bad inboxes',
                  'Save credits by skipping undeliverable addresses',
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-brand-primary/10 shadow-md p-6 space-y-4">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                <div>
                  <div className="font-semibold text-green-700">Valid & Deliverable</div>
                  <div className="text-xs text-gray-500">Format ✓ · MX records ✓ · SMTP ✓</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                <Zap className="h-6 w-6 text-yellow-500 shrink-0" />
                <div>
                  <div className="font-semibold text-yellow-700">Catch-All Detected</div>
                  <div className="text-xs text-gray-500">Domain accepts all · use with caution</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                <BarChart2 className="h-6 w-6 text-red-400 shrink-0" />
                <div>
                  <div className="font-semibold text-red-700">Invalid</div>
                  <div className="text-xs text-gray-500">No MX records · will bounce</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need more */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Need more than 3 per day?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            WebLeads Starter includes 3,000 email verifications per month - plus Google Maps
            prospecting, decision maker emails, and CSV export. Starts at $24/mo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-3 rounded-xl shadow-lg font-semibold text-base"
            >
              <a href="https://app.webleads.site/login" target="_blank" rel="noopener noreferrer">
                Start free - 200 verifications included
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-brand-primary/30 text-brand-primary hover:bg-brand-primary/5 px-8 py-3 rounded-xl font-semibold text-base"
            >
              <Link href="/#pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-brand-primary text-center mb-10">
            Common questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-brand-primary/10 p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-sm text-gray-500">
          Also useful:{' '}
          <Link href="/email-verification-tool" className="text-brand-primary underline hover:text-brand-primary/80">
            Email verification tool
          </Link>
          {' · '}
          <Link href="/google-maps-scraper" className="text-brand-primary underline hover:text-brand-primary/80">
            Google Maps scraper
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
