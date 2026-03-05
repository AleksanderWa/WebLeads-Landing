import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebLeads — Find Verified Business Emails for Any Local Niche.',
  description: 'Search any city, any industry. Built for agencies, sales teams, and freelancers prospecting local businesses.',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aleksanderwco',
    title: 'WebLeads — Find Verified Business Emails for Any Local Niche, Instantly',
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
      <body className="pt-16">
        {children}
      </body>
    </html>
  )
}
