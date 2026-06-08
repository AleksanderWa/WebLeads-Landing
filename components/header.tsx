'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Menu,
  Shield,
  TrendingUp,
  X,
} from "lucide-react";

type ToolItemProps = {
  icon: React.ReactNode;
  label: string;
  sub: string;
  href: string;
  onClick?: () => void;
};

function ToolItem({ icon, label, sub, href, onClick }: ToolItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-brand-primary/5 group transition-colors"
    >
      <div className="mt-0.5 w-8 h-8 rounded-md bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-[13.5px] font-semibold text-brand-secondary group-hover:text-brand-primary transition-colors leading-tight">
          {label}
        </div>
        <div className="text-[11.5px] text-brand-secondary/50 mt-0.5">{sub}</div>
      </div>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const closeRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const openTools = () => {
    if (closeRef.current) clearTimeout(closeRef.current);
    setToolsOpen(true);
  };
  const closeTools = () => {
    closeRef.current = setTimeout(() => setToolsOpen(false), 180);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileToolsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow ${
        scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <span className="text-[30px] font-bold tracking-tight">
            <span className="text-brand-secondary">Web</span>
            <span className="text-brand-primary">Leads</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-[15px]">
          <div className="relative" onMouseEnter={openTools} onMouseLeave={closeTools}>
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-brand-secondary/75 hover:text-brand-secondary font-medium transition-colors">
              Tools
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${
                  toolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {toolsOpen && (
              <div className="absolute top-full left-0 mt-2 w-[280px] bg-white border border-black/[0.08] rounded-xl shadow-[0_16px_40px_-12px_rgba(45,49,66,0.22)] p-2 z-50">
                <div className="px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-brand-secondary/40 mb-1">
                  Search &amp; Enrichment
                </div>
                <ToolItem
                  icon={<Mail className="w-[15px] h-[15px]" />}
                  label="Email Finder"
                  sub="Find verified emails for any business"
                  href="/tools/email-finder-tool"
                />
                {/* <ToolItem
                  icon={<Shield className="w-[15px] h-[15px]" />}
                  label="Email Verifier"
                  sub="Check if an email is deliverable"
                  href="/tools/email-verifier"
                /> */}
                <ToolItem
                  icon={<TrendingUp className="w-[15px] h-[15px]" />}
                  label="Compare Tools"
                  sub="Find the right lead gen tool"
                  href="/tools/lead-gen-comparison"
                />
              </div>
            )}
          </div>

          <Link
            href="/#how"
            className="px-3 py-2 rounded-lg text-brand-secondary/75 hover:text-brand-secondary font-medium transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/#pricing"
            className="px-3 py-2 rounded-lg text-brand-secondary/75 hover:text-brand-secondary font-medium transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="px-3 py-2 rounded-lg text-brand-secondary/75 hover:text-brand-secondary font-medium transition-colors"
          >
            Blog
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://app.webleads.site/login"
            className="text-[15px] font-medium text-brand-secondary/70 hover:text-brand-secondary transition-colors"
          >
            Sign in
          </a>
          <a
            href="https://app.webleads.site/register"
            className="inline-flex items-center gap-1.5 h-[42px] px-5 rounded-xl bg-brand-primary text-white text-[15px] font-semibold hover:bg-brand-primary-hover transition-colors shadow-sm"
          >
            Start free <ArrowRight className="w-[15px] h-[15px]" />
          </a>
        </div>

        <button
          className="md:hidden p-2 text-brand-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-[22px] h-[22px]" /> : <Menu className="w-[22px] h-[22px]" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-black/[0.05] bg-white">
          <div className="flex flex-col px-5 py-4 gap-1">
            <button
              onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
              className="flex items-center justify-between px-3 py-2.5 text-[15px] font-medium text-brand-secondary rounded-lg hover:bg-brand-secondary/5"
            >
              Tools
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${
                  mobileToolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileToolsOpen && (
              <div className="ml-3 pl-3 border-l-2 border-brand-primary/15 py-1 space-y-1">
                {[
                  ["Email Finder", "/tools/email-finder-tool"],
                  ["Email Verifier", "/tools/email-verifier"],
                  ["Compare Tools", "/tools/lead-gen-comparison"],
                ].map(([l, h]) => (
                  <Link
                    key={l}
                    href={h}
                    className="block px-3 py-2 text-[14px] font-medium text-brand-secondary/75 rounded-lg hover:bg-brand-secondary/5"
                    onClick={closeMobile}
                  >
                    {l}
                  </Link>
                ))}
              </div>
            )}
            {[
              ["How it works", "/#how"],
              ["Pricing", "/#pricing"],
              ["Blog", "/blog"],
            ].map(([l, h]) => (
              <Link
                key={l}
                href={h}
                className="px-3 py-2.5 text-[15px] font-medium text-brand-secondary rounded-lg hover:bg-brand-secondary/5"
                onClick={closeMobile}
              >
                {l}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="https://app.webleads.site/login"
                className="h-11 flex items-center justify-center rounded-xl border border-brand-secondary/15 text-[15px] font-medium text-brand-secondary"
                onClick={closeMobile}
              >
                Sign in
              </a>
              <a
                href="https://app.webleads.site/register"
                className="h-11 flex items-center justify-center gap-1.5 rounded-xl bg-brand-primary text-white text-[15px] font-semibold"
                onClick={closeMobile}
              >
                Start free <ArrowRight className="w-[15px] h-[15px]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
