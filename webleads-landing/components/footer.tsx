import Link from "next/link"
import { Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold">
            WebLeads
          </Link>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-900">
            <Twitter className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0 text-sm text-gray-600">
          <span>© 2024 WebLeads. All right reserved.</span>
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

