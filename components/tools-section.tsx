import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Tool = {
  emoji: string;
  tag: string;
  title: string;
  description: string;
  note: string;
  href: string;
  linkText: string;
};

const tools: Tool[] = [
  {
    emoji: "✅",
    tag: "Email Verification",
    title: "Email Verification Tool",
    description:
      "Search Google Maps and get verified email addresses automatically — 95%+ accuracy with free SMTP verification on every address.",
    note: "No extra charge for verification",
    href: "/email-verification-tool",
    linkText: "Learn more about Email Verification Tool",
  },
  {
    emoji: "📧",
    tag: "Email Finder",
    title: "Email Finder Tools",
    description:
      "Find verified business and owner emails from Google Maps and company websites — 95%+ accuracy.",
    note: "Perfect for cold email & B2B prospecting",
    href: "/email-finder-tools",
    linkText: "Learn more about Email Finder Tools",
  },
  {
    emoji: "📬",
    tag: "Email Discovery",
    title: "Find Email Addresses",
    description:
      "Search Google Maps and automatically find verified email addresses for any business.",
    note: "Get verified emails for cold outreach",
    href: "/find-email-addresses",
    linkText: "Learn more about finding email addresses",
  },
  {
    emoji: "🗺️",
    tag: "Data Extraction",
    title: "Google Maps Scraper",
    description:
      "Extract business data from Google Maps — phones, emails, addresses, reviews, and more.",
    note: "200M+ businesses available worldwide",
    href: "/google-maps-scraper",
    linkText: "Learn more about Google Maps Scraper",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-primary mb-3">
      <span className="w-5 h-px bg-brand-primary/50" />
      {children}
    </div>
  );
}

export function ToolsSection() {
  return (
    <section className="bg-white py-20 md:py-28 border-b border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel>Use cases</SectionLabel>
          <h2 className="text-[32px] md:text-[42px] font-bold tracking-[-0.02em] leading-[1.06] text-balance text-brand-secondary">
            One tool to find all the data
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-pretty text-brand-secondary/65">
            See how WebLeads can help with your specific prospecting goals — phone numbers, emails,
            local businesses, and more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((t) => (
            <div
              key={t.href}
              className="bg-[#FAF7F5] rounded-2xl border border-black/[0.06] p-6 flex flex-col hover:border-brand-primary/20 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{t.emoji}</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-primary/70">
                  {t.tag}
                </span>
              </div>
              <h3 className="text-[16px] font-bold text-brand-secondary leading-snug mb-2">
                {t.title}
              </h3>
              <p className="text-[13.5px] text-brand-secondary/60 leading-relaxed flex-1">
                {t.description}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[12.5px] font-semibold text-emerald-700">
                <span className="text-emerald-500">💰</span>
                {t.note}
              </div>
              <Link
                href={t.href}
                className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-primary hover:text-brand-primary-hover transition-colors"
              >
                {t.linkText}
                <ArrowRight className="w-[13px] h-[13px]" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
