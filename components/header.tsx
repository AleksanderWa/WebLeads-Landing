'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  const handleWaitlistClick = () => {
    const waitlistForm = document.getElementById('waitlist-form');
    if (waitlistForm) {
      waitlistForm.scrollIntoView({ behavior: 'smooth', block: 'center' });

      waitlistForm.classList.add('animate-bounce-once');
      setTimeout(() => {
        waitlistForm.classList.remove('animate-bounce-once');
      }, 1000);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <Link href="/" className="text-3xl font-bold text-brand-primary flex items-center">
          WebLeads 🚀
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-brand-secondary hover:text-brand-primary font-medium text-lg transition-colors">
            How it works
          </Link>
          <Link href="/blog" className="text-brand-secondary hover:text-brand-primary font-medium text-lg transition-colors">
            Blog
          </Link>
          {/* <Link href="#faq" className="text-brand-secondary hover:text-brand-primary font-medium text-lg transition-colors">
            FAQ
          </Link> */}
          {/* <Link href="#contact" className="text-brand-secondary hover:text-brand-primary font-medium text-lg transition-colors">
            Contact
          </Link> */}
          <Button variant="accent" onClick={handleWaitlistClick}>
            Sign up for free
          </Button>
        </nav>
        
        <button className="md:hidden text-brand-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
