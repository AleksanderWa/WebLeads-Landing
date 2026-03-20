import Link from "next/link"

import { FooterFeaturedBadgesCarousel } from "@/components/footer-featured-badges-carousel"

export function Footer() {
  return (
    <footer className="border-t bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-4 w-full">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center w-full mb-8">
          <Link href="/" className="text-3xl font-bold text-black shrink-0">
            WebLeads
          </Link>
          <div className="flex w-full min-w-0 justify-center sm:justify-end sm:max-w-[min(100%,720px)] sm:flex-1">
            <FooterFeaturedBadgesCarousel />
          </div>
        </div>
        <hr className="border-gray-400 mb-6" />
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-black mb-6">
          <Link href="/tools/email-finder-tool" className="hover:underline">
            Email Finder Tool
          </Link>
          <Link href="/email-verification-tool" className="hover:underline">
            Email Verification Tool
          </Link>
          <Link href="/google-maps-scraper" className="hover:underline">
            Google Maps Scraper
          </Link>
          <Link href="/find-email-addresses" className="hover:underline">
            Find Email Addresses
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center text-center text-base text-black space-y-2 md:space-y-0 md:flex-row md:space-x-6">
          <span>© 2026 WebLeads. All right reserved.</span>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <a href="mailto:aleksander@webleads.site" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}

// Custom X icon component
function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}
