import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-brand-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold">
            WebLeads
          </Link>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <Link href="https://x.com" className="text-gray-300 hover:text-white">
            <XIcon className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0 text-sm text-gray-300">
          <span>© 2025 WebLeads. All right reserved.</span>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
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
