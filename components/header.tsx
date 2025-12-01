'use client';

import { useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Mail, MapPin, Phone, Search, TrendingUp, Users, Zap, X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleHowItWorksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (pathname === '/') {
      const demoSection = document.getElementById('product-demo-realistic');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      router.push('/');
      setTimeout(() => {
        let attempts = 0;
        const maxAttempts = 20;
        const checkAndScroll = () => {
          attempts++;
          const demoSection = document.getElementById('product-demo-realistic');
          if (demoSection) {
            demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else if (attempts < maxAttempts) {
            setTimeout(checkAndScroll, 50);
          }
        };
        checkAndScroll();
      }, 100);
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
          <div 
            className="relative"
            onMouseEnter={() => {
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
                closeTimeoutRef.current = null;
              }
              setIsToolsDropdownOpen(true);
            }}
            onMouseLeave={() => {
              closeTimeoutRef.current = setTimeout(() => {
                setIsToolsDropdownOpen(false);
              }, 200);
            }}
          >
            <button className="text-brand-secondary hover:text-brand-primary font-medium text-lg transition-colors flex items-center gap-1 focus:outline-none">
              Tools
              <ChevronDown className="h-4 w-4" />
            </button>
            
            {isToolsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl border border-brand-primary/10 rounded-xl p-2 z-50">
                <div className="px-3 py-2 text-xs font-bold text-brand-primary/60 uppercase tracking-wider">
                  Search & Enrichment Tools
                </div>
                
                <Link 
                  href="/tools/email-finder-tool" 
                  className="flex items-start gap-3 p-3 cursor-pointer rounded-lg hover:bg-brand-primary/5 group transition-colors"
                >
                  <div className="bg-brand-primary/10 p-2 rounded-lg group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-brand-primary">Email Finder</div>
                    <div className="text-xs text-gray-500 mt-0.5">Interactive search tool</div>
                  </div>
                </Link>

                <div className="flex items-start gap-3 p-3 opacity-50 cursor-not-allowed rounded-lg">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-500">Email Verifier</div>
                    <div className="text-xs text-gray-400 mt-0.5">Coming soon</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 opacity-50 cursor-not-allowed rounded-lg">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-500">Decision Maker Finder</div>
                    <div className="text-xs text-gray-400 mt-0.5">Coming soon</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link 
            href="#product-demo-realistic" 
            onClick={handleHowItWorksClick}
            className="text-brand-secondary hover:text-brand-primary font-semibold text-base transition-colors"
          >
            How it works
          </Link>
          <Link href="/blog" className="text-brand-secondary hover:text-brand-primary font-semibold text-base transition-colors">
            Blog
          </Link>
          <Button 
            asChild
            className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
          >
            <a href="https://app.webleads.site/register" target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </Button>
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
            <div>
              <button
                onClick={() => setIsMobileToolsOpen(!isMobileToolsOpen)}
                className="flex items-center justify-between w-full text-brand-secondary hover:text-brand-primary font-semibold text-base transition-colors"
              >
                <span>Tools</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileToolsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileToolsOpen && (
                <div className="mt-2 ml-4 space-y-3 border-l-2 border-brand-primary/10 pl-4">
                  <div className="text-xs font-bold text-brand-primary/60 uppercase tracking-wider mb-2">
                    Search & Enrichment Tools
                  </div>
                  
                  <Link 
                    href="/tools/email-finder-tool" 
                    className="flex items-start gap-3 p-3 cursor-pointer rounded-lg hover:bg-brand-primary/5 group transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <div className="bg-brand-primary/10 p-2 rounded-lg group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-brand-primary">Email Finder</div>
                      <div className="text-xs text-gray-500 mt-0.5">Interactive search tool</div>
                    </div>
                  </Link>

                  <div className="flex items-start gap-3 p-3 opacity-50 cursor-not-allowed rounded-lg">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <Zap className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-500">Email Verifier</div>
                      <div className="text-xs text-gray-400 mt-0.5">Coming soon</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 opacity-50 cursor-not-allowed rounded-lg">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-500">Decision Maker Finder</div>
                      <div className="text-xs text-gray-400 mt-0.5">Coming soon</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              href="#product-demo-realistic" 
              className="text-brand-secondary hover:text-brand-primary font-semibold text-base transition-colors"
              onClick={(e) => {
                closeMobileMenu();
                handleHowItWorksClick(e);
              }}
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
            <Button 
              asChild
              className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white text-base py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
            >
              <a href="https://app.webleads.site/register" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                Register
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
