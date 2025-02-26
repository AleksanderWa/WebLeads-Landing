import Link from "next/link"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
      <Link href="/" className="text-2xl font-bold">
        WebLeads
      </Link>
      <nav className="flex gap-8">
        <Link href="#why-us" className="hover:text-gray-600">
          Why us?
        </Link>
        <Link href="#faq" className="hover:text-gray-600">
          FAQ
        </Link>
        <Link href="#contact" className="hover:text-gray-600">
          Contact
        </Link>
      </nav>
    </header>
  )
}

