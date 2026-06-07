import { Brain, Download, Search, ShieldCheck, UserCheck } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-primary mb-3">
      <span className="w-5 h-px bg-brand-primary/50" />
      {children}
    </div>
  );
}

export function HowItWorksRedesign() {
  return (
    <section
      id="how"
      className="bg-white py-20 md:py-28 border-b border-black/[0.05]"
      aria-labelledby="how-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel>How it works</SectionLabel>
          <h2
            id="how-title"
            className="text-[32px] md:text-[42px] font-bold tracking-[-0.02em] leading-[1.06] text-balance text-brand-secondary"
          >
            A verified prospect list, built exactly the way you need it.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-pretty text-brand-secondary/65">
            Search. Enrich. Choose. Export.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-3 lg:gap-4 mb-4">
          {/* Card 1 — Search */}
          <div className="relative bg-white border border-black/[0.07] rounded-2xl p-5 hover:border-brand-primary/30 hover:shadow-[0_20px_40px_-20px_rgba(45,49,66,0.16)] transition-all group">
            <div className="flex items-start justify-between mb-5">
              <div className="w-9 h-9 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <span className="font-mono text-[11.5px] font-semibold text-brand-primary/40 bg-brand-primary/5 px-2 py-0.5 rounded">
                01 · Search
              </span>
            </div>
            <h3 className="text-[18px] font-bold text-brand-secondary leading-[1.3] mb-2 text-balance">
              Type the niche and city.
            </h3>
            <p className="text-[14px] text-brand-secondary/65 leading-relaxed">
              Any business type. Any city on Google Maps. 195+ countries, no uploads, no list rentals.
            </p>
          </div>

          {/* Card 2 — We build (muted background — system step) */}
          <div className="relative bg-[#FAF7F5] border border-black/[0.07] rounded-2xl p-5 hover:border-brand-primary/30 hover:shadow-[0_20px_40px_-20px_rgba(45,49,66,0.16)] transition-all group">
            <div className="flex items-start justify-between mb-5">
              <div className="w-9 h-9 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Brain className="w-5 h-5" />
              </div>
              <span className="font-mono text-[11.5px] font-semibold text-brand-primary/40 bg-brand-primary/5 px-2 py-0.5 rounded">
                02 · We build
              </span>
            </div>
            <h3 className="text-[18px] font-bold text-brand-secondary leading-[1.3] mb-2 text-balance">
              We crawl Maps, websites, and search engines live.
            </h3>
            <p className="text-[14px] text-brand-secondary/65 leading-relaxed">
              Every business gets phone, address, ratings, social links, decision maker name and role.
            </p>
          </div>

          {/* Card 3 — Enrich (accented — key user action) */}
          <div className="relative bg-white border border-black/[0.07] rounded-2xl p-5 ring-1 ring-brand-primary/20 hover:border-brand-primary/30 hover:shadow-[0_20px_40px_-20px_rgba(45,49,66,0.16)] transition-all group">
            <div className="flex items-start justify-between mb-5">
              <div className="w-9 h-9 rounded-lg bg-brand-primary text-white flex items-center justify-center transition-colors">
                <UserCheck className="w-5 h-5" />
              </div>
              <span className="font-mono text-[11.5px] font-semibold text-brand-primary/40 bg-brand-primary/5 px-2 py-0.5 rounded">
                03 · Enrich
              </span>
            </div>
            <h3 className="text-[18px] font-bold text-brand-secondary leading-[1.3] mb-2 text-balance">
              Choose which contacts get enriched and verified.
            </h3>
            <p className="text-[14px] text-brand-secondary/65 leading-relaxed">
              Filter by rating or location first. Run owner email lookup and SMTP verification only on contacts worth targeting.
            </p>
            <div className="mt-3 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[12px] text-brand-secondary/60">
                <UserCheck className="w-3.5 h-3.5 text-brand-primary" />
                Find owner emails
              </div>
              <div className="flex items-center gap-2 text-[12px] text-brand-secondary/60">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
                Verify before you export
              </div>
            </div>
          </div>

          {/* Card 4 — Export */}
          <div className="relative bg-white border border-black/[0.07] rounded-2xl p-5 hover:border-brand-primary/30 hover:shadow-[0_20px_40px_-20px_rgba(45,49,66,0.16)] transition-all group">
            <div className="flex items-start justify-between mb-5">
              <div className="w-9 h-9 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Download className="w-5 h-5" />
              </div>
              <span className="font-mono text-[11.5px] font-semibold text-brand-primary/40 bg-brand-primary/5 px-2 py-0.5 rounded">
                04 · Export
              </span>
            </div>
            <h3 className="text-[18px] font-bold text-brand-secondary leading-[1.3] mb-2 text-balance">
              Export a clean CSV before the meeting ends.
            </h3>
            <p className="text-[14px] text-brand-secondary/65 leading-relaxed">
              Only verified contacts in the file. Import into Salesforce, HubSpot, or Pipedrive. Bill the client. Repeat.
            </p>
          </div>
        </div>
        <p className="text-center text-[12px] text-brand-secondary/40 mt-2 mb-6">
          Credits only used when you run enrichment or verification — filter first, spend precisely.
        </p>
        <p className="text-center text-[13.5px] text-brand-secondary/45">
          Works for any niche:{" "}
          <a href="/roofing-leads" className="text-brand-primary hover:underline">roofing</a>,{" "}
          <a href="/hvac-leads" className="text-brand-primary hover:underline">HVAC</a>,{" "}
          <a href="/plumber-leads" className="text-brand-primary hover:underline">plumbing</a>,{" "}
          <a href="/contractor-leads" className="text-brand-primary hover:underline">contractors</a>,{" "}
          <a href="/real-estate-leads" className="text-brand-primary hover:underline">real estate</a>,{" "}
          <a href="/marketing-agency-leads" className="text-brand-primary hover:underline">marketing agencies</a>
        </p>
      </div>
    </section>
  );
}
