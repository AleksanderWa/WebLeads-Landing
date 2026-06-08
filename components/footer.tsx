import Link from "next/link";
import { FooterFeaturedBadgesCarousel } from "@/components/footer-featured-badges-carousel";

type FooterLink = { l: string; h: string; external?: boolean };
type FooterCol = { h: string; links: FooterLink[] };

const cols: FooterCol[] = [
  {
    h: "Product",
    links: [
      { l: "Email Finder", h: "/tools/email-finder-tool" },
      { l: "Email Verifier", h: "/tools/email-verifier" },
      { l: "Google Maps Scraper", h: "/google-maps-scraper" },
      { l: "Pricing", h: "/#pricing" },
    ],
  },
  {
    h: "Resources",
    links: [
      { l: "Blog", h: "/blog" },
      { l: "Find Email Addresses", h: "/find-email-addresses" },
      { l: "Compare Tools", h: "/tools/lead-gen-comparison" },
      { l: "FAQ", h: "/#faq" },
    ],
  },
  {
    h: "Company",
    links: [
      { l: "Contact", h: "mailto:aleksander@webleads.site", external: true },
      { l: "Terms", h: "/terms" },
      { l: "Privacy", h: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-secondary text-white/80" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid lg:grid-cols-[1.3fr_3fr] gap-10 lg:gap-16 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 w-fit">
              {/* <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white font-bold text-sm shadow-sm">
                <span className="font-mono">W</span>
              </div> */}
              <span className="text-[20px] font-bold tracking-tight text-white">
                Web<span className="text-brand-accent">Leads</span>
              </span>
            </Link>
            <p className="mt-4 text-[13.5px] text-white/55 leading-relaxed max-w-xs">
              Verified business emails for any local niche. Fresh from Google Maps, decision makers
              included, SMTP-verified.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.h}>
                <div className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-white/45 mb-4">
                  {c.h}
                </div>
                <ul className="space-y-2.5">
                  {c.links.map((link) =>
                    link.external ? (
                      <li key={link.l}>
                        <a
                          href={link.h}
                          className="text-[13px] text-white/65 hover:text-white transition-colors"
                        >
                          {link.l}
                        </a>
                      </li>
                    ) : (
                      <li key={link.l}>
                        <Link
                          href={link.h}
                          className="text-[13px] text-white/65 hover:text-white transition-colors"
                        >
                          {link.l}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8 pt-8 border-t border-white/[0.08]">
          <p className="text-[10.5px] uppercase tracking-[0.14em] font-bold text-white/30 mb-4 text-center">
            As featured on
          </p>
          <div className="flex justify-center">
            <FooterFeaturedBadgesCarousel />
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-3 text-[12px] text-white/45">
          <div>© 2026 WebLeads. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 live-dot" />
              All systems operational
            </span>
            <span>Built for prospectors who hate stale data.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
