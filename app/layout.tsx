import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebLeads - Best B2B Google Maps Scraper. Totally FREE.',
  description: 'Our Google Maps businesses scraper helps you find more B2B leads. Get emails, decision makers,social links, phone numbers, addresses, and more.',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aleksanderwco',
    title: 'WebLeads - more cold leads for your agency',
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
