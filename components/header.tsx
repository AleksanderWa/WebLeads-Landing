'use client';

import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWaitlistClick = () => {
    setIsMobileMenuOpen(false);
    const waitlistForm = document.getElementById('waitlist-form');
    if (waitlistForm) {
      waitlistForm.scrollIntoView({ behavior: 'smooth', block: 'center' });

      waitlistForm.classList.add('animate-bounce-once');
      setTimeout(() => {
        waitlistForm.classList.remove('animate-bounce-once');
      }, 1000);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-md border-b border-gray-100">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center">
          <Image 
            src="/croped_logo_last.png" 
            alt="WebLeads - Smart B2B Prospecting" 
            width={180} 
            height={60}
            className="h-10 w-auto"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-brand-secondary hover:text-brand-primary font-semibold text-base transition-colors">
            How it works
          </Link>
          <Link href="/blog" className="text-brand-secondary hover:text-brand-primary font-semibold text-base transition-colors">
            Blog
          </Link>
          {/* <Link href="#faq" className="text-brand-secondary hover:text-brand-primary font-medium text-lg transition-colors">
            FAQ
          </Link> */}
          {/* <Link href="#contact" className="text-brand-secondary hover:text-brand-primary font-medium text-lg transition-colors">
            Contact
          </Link> */}
          {/* <Button variant="accent" onClick={handleWaitlistClick} className="font-semibold">
            Sign up for free
          </Button> */}
        </nav>
        
        <button 
          className="md:hidden text-brand-secondary"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/98 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link 
              href="#how-it-works" 
              className="text-brand-secondary hover:text-brand-primary font-semibold text-base transition-colors"
              onClick={closeMobileMenu}
            >
              How it works
            </Link>
            <Link 
              href="/blog" 
              className="text-brand-secondary hover:text-brand-primary font-semibold text-base transition-colors"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            {/* <Button 
              variant="accent" 
              onClick={handleWaitlistClick}
              className="w-full font-semibold"
            >
              Sign up for free
            </Button> */}
          </nav>
        </div>
      )}
    </header>
  )
}
