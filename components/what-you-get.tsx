import {
  Building2,
  Globe,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
} from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-primary mb-3">
      <span className="w-5 h-px bg-brand-primary/50" />
      {children}
    </div>
  );
}

export function WhatYouGet() {
  const fields = [
    { i: <Building2 className="w-[17px] h-[17px]" />, t: "Business name & category", d: "Disambiguated to a single Maps listing." },
    { i: <MapPin className="w-[17px] h-[17px]" />, t: "Address & coordinates", d: "Filter by city, neighborhood, or radius." },
    { i: <Phone className="w-[17px] h-[17px]" />, t: "Phone numbers", d: "Pulled from Maps and the business website." },
    { i: <Mail className="w-[17px] h-[17px]" />, t: "Verified emails", d: "Direct people emails. SMTP-verified — no bounces." },
    { i: <Users className="w-[17px] h-[17px]" />, t: "Decision makers", d: "Owners, founders, and managers. Name and role included." },
    { i: <Star className="w-[17px] h-[17px]" />, t: "Reviews & ratings", d: "Pre-qualify prospects before outreach." },
    { i: <Globe className="w-[17px] h-[17px]" />, t: "Website & social links", d: "LinkedIn, Facebook, Instagram, X." },
  ];
  return (
    <section
      id="features"
      className="bg-[#FAF7F5] py-20 md:py-28 border-b border-black/[0.05]"
      aria-labelledby="features-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel>Data fields</SectionLabel>
          <h2
            id="features-title"
            className="text-[32px] md:text-[42px] font-bold tracking-[-0.02em] leading-[1.06] text-balance text-brand-secondary"
          >
            Everything your client expects to see in the spreadsheet.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-pretty text-brand-secondary/65">
            No extra tier, no premium add-on. Decision makers and email verification are
            included in every plan.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-px bg-black/[0.06] rounded-2xl overflow-hidden border border-black/[0.06]">
          {fields.map((f, idx) => (
            <div
              key={f.t}
              className={`bg-white p-6 hover:bg-[#FAF7F5] transition-colors sm:col-span-1 ${idx < 4 ? "lg:col-span-3" : "lg:col-span-4"}`}
            >
              <div className="w-9 h-9 rounded-md bg-brand-primary/[0.08] text-brand-primary flex items-center justify-center mb-3.5">
                {f.i}
              </div>
              <div className="font-semibold text-brand-secondary text-[14px] mb-1">{f.t}</div>
              <div className="text-[13px] text-brand-secondary/55 leading-relaxed">{f.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
