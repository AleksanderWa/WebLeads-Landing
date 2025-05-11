import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebLeads - Lead Generation for Digital Agencies',
  description: 'WebLeads helps your agency find more leads. Businesses without websites, bad ratings? We got you.',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.png',
  },
  twitter: {
    card: 'summary',
    site: '@aleksanderwco',
    title: 'WebLeads - more cold leads for your agency',
    images: ['https://8rmdw9if1vt4amdl.public.blob.vercel-storage.com/x_card_image-sS1oLhGWVqt5ZVeHwKFJWURG4vriLX.png']
  },
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
