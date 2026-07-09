import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { PostHogProvider } from '@/components/providers/posthog-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WebLeads - Find Decision-Maker Emails For Local Businesses',
  description: 'Search any city, any niche. Built for agencies, marketers, and freelancers prospecting local businesses.',
  generator: 'Next.js',
  metadataBase: new URL('https://webleads.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WebLeads - Find Decision-Maker Emails For Local Businesses',
    description: 'Search any city, any niche. Find the businesses that fit your offer, then find decision-maker emails worth using.',
    images: [
      {
        url: '/x_card.png',
        width: 1200,
        height: 630,
        alt: 'WebLeads homepage showing Google Maps lead search for local business prospecting.',
      },
    ],
  },
  icons: {
    icon: '/favicon.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aleksanderwco',
    title: 'WebLeads - Find Decision-Maker Emails For Local Businesses',
    description: 'Search any city, any niche. Find the businesses that fit your offer, then find decision-maker emails worth using.',
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="739c8307-b652-41d3-9c7d-b10e9588bee8"
        />
      </head>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  )
}
