import { Check, X } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-primary mb-3">
      <span className="w-5 h-px bg-brand-primary/50" />
      {children}
    </div>
  );
}

export function VsCompare() {
  const rows = [
    { l: "Data freshness", a: "Database updated every 6–12 months", b: "Crawled live on every search" },
    { l: "Decision makers", a: "Premium add-on, $$/lead", b: "Included in every plan" },
    { l: "Verification billing", a: "Pay per lookup, even when it bounces", b: "Pay only for successfully verified emails" },
    { l: "Coverage", a: "Pre-defined industry categories", b: "Anything on Google Maps · 195 countries" },
    { l: "Getting started", a: "Sales call + annual contract", b: "Free tier · no card · cancel anytime" },
  ];
  return (
    <section
      className="bg-white py-20 md:py-28 border-b border-black/[0.05]"
      aria-labelledby="compare-title"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel>Why WebLeads</SectionLabel>
          <h2
            id="compare-title"
            className="text-[32px] md:text-[42px] font-bold tracking-[-0.02em] leading-[1.06] text-balance text-brand-secondary"
          >
            Stale lists cost agencies clients. Fresh data wins them.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-pretty text-brand-secondary/65">
            The difference between landing in the primary inbox and the spam folder is data quality.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-black/[0.07]">
          <div className="grid grid-cols-3 bg-brand-secondary/[0.025] text-[12px] font-bold uppercase tracking-[0.12em] text-brand-secondary/50">
            <div className="px-6 py-4">Capability</div>
            <div className="px-6 py-4 text-center">Typical list provider</div>
            <div className="px-6 py-4 text-center bg-brand-primary/[0.04] text-brand-primary">
              WebLeads
            </div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.l}
              className={`grid grid-cols-3 text-[13.5px] ${
                i % 2 ? "bg-white" : "bg-brand-secondary/[0.015]"
              }`}
            >
              <div className="px-6 py-4 font-semibold text-brand-secondary">{r.l}</div>
              <div className="px-6 py-4 text-center text-brand-secondary/60 flex items-center justify-center gap-2">
                <X className="w-[13px] h-[13px] text-brand-secondary/30 shrink-0" />
                {r.a}
              </div>
              <div className="px-6 py-4 text-center text-brand-secondary flex items-center justify-center gap-2 font-medium bg-brand-primary/[0.03]">
                <Check className="w-[13px] h-[13px] text-emerald-600 shrink-0" />
                {r.b}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
