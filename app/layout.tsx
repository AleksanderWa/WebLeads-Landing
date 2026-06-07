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
  title: 'WebLeads - Find Verified Business Emails And Decision Makers',
  description: 'Search any city, any industry. Built for agencies, sales teams, and freelancers prospecting local businesses.',
  generator: 'Next.js',
  metadataBase: new URL('https://webleads.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: ['/x_card.png'],
  },
  icons: {
    icon: '/favicon.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aleksanderwco',
    title: 'WebLeads - Find Verified Business Emails And Decision Makers',
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
