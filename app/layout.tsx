import type { Metadata } from 'next'
import { PostHogProvider } from '@/components/providers/posthog-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebLeads — Find Verified Business Emails And Decision Makers Contacts',
  description: 'Search any city, any industry. Built for agencies, sales teams, and freelancers prospecting local businesses.',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aleksanderwco',
    title: 'WebLeads — Find Verified Business Emails And Decision Makers Contacts',
    images: ['/x_card.png']
  },
  verification: {
    other: {
      'msvalidate.01': '7FBF9E6490CFA399221986F21F1D4498'
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="739c8307-b652-41d3-9c7d-b10e9588bee8"
        />
      </head>
      <body className="pt-16">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  )
}
