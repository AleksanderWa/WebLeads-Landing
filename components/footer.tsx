import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-4 w-full">
        <div className="flex flex-row justify-between items-center w-full mb-8">
          <Link href="/" className="text-3xl font-bold text-black">
            WebLeads
          </Link>
          <a href="https://wired.business" target="_blank" rel="noopener noreferrer">
            <img src="https://wired.business/badge0-light.svg" alt="Featured on Wired Business" width="200" height="54" />
          </a>
        </div>
        <hr className="border-gray-400 mb-6" />
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
