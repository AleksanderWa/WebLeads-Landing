import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebLeads - Best Google Maps Scraper',
  description: 'Our Google Maps scraper helps you find more B2B leads.',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aleksanderwco',
    title: 'WebLeads - more cold leads for your agency',
    images: ['https://8rmdw9if1vt4amdl.public.blob.vercel-storage.com/x_card_image-sS1oLhGWVqt5ZVeHwKFJWURG4vriLX.png']
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
