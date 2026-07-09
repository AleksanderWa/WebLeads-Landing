"use client";

import {
  Brain,
  Download,
  Search,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-normal text-brand-primary mb-3">
      <span className="w-5 h-px bg-brand-primary/50" />
      {children}
    </div>
  );
}

function CustomerLogoStrip() {
  return (
    <div className="mb-14 text-center">
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-normal text-brand-secondary/35">
        Used by agencies, marketers &amp; freelancers
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {[
          { src: "/images/customers/pixelprodigies.png", alt: "Pixel Prodigies", h: "h-7", maxW: "max-w-[90px]", dark: true },
          { src: "/images/customers/serviceup.svg", alt: "ServiceUp", h: "h-6", maxW: "max-w-[110px]", dark: true },
          { src: "/images/customers/lessermedia.png", alt: "Lesser Media", h: "h-7", maxW: "max-w-[100px]", dark: true },
          { src: "/images/customers/vivaldimkt.svg", alt: "Vivaldi Marketing", h: "h-8", maxW: "max-w-[120px]", dark: false },
        ].map(({ src, alt, h, maxW, dark }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={alt}
            src={src}
            alt={alt}
            className={`w-auto object-contain opacity-45 transition-opacity hover:opacity-90 ${h} ${maxW}`}
            style={dark ? { filter: "brightness(0)" } : { filter: "grayscale(100%)" }}
          />
        ))}
      </div>
    </div>
  );
}

export function HowItWorksRedesign() {
  return (
    <section
      id="how"
      className="bg-[#F8F6F3] px-7 pt-[172px] pb-[108px] border-t border-black/[0.045] sm:pt-[202px]"
      aria-labelledby="how-title"
    >
      <div className="max-w-[1120px] mx-auto">
        <CustomerLogoStrip />

        <div className="text-center mb-14">
          <SectionLabel>How it works</SectionLabel>
          <h2
            id="how-title"
            className="text-[28px] md:text-[38px] lg:text-[46px] font-extrabold tracking-normal leading-[1.08] text-balance text-brand-secondary mb-4"
          >
            A prospect list, matched
            <br className="hidden sm:block" />
            {" "}to the offer you sell.
          </h2>
          <p className="text-[17px] leading-[1.65] text-pretty text-brand-secondary/60 max-w-[50ch] mx-auto">
            Search the market, rank the best fits, find decision-maker emails, export the list.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-3 mb-4">
          <div className="relative bg-white border border-black/[0.07] rounded-[20px] p-[22px] hover:border-brand-primary/30 hover:shadow-[0_20px_40px_-20px_rgba(45,49,66,0.16)] transition-all group">
            <div className="flex items-start justify-between mb-5">
              <div className="w-9 h-9 rounded-[10px] bg-brand-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Search className="w-[17px] h-[17px]" strokeWidth={2.5} />
              </div>
              <span className="font-mono text-[11px] font-semibold text-brand-primary/50 bg-brand-primary/[0.055] px-2 py-[3px] rounded-md">
                01 · Search
              </span>
            </div>
            <h3 className="text-[17px] font-bold text-brand-secondary leading-[1.3] mb-2 text-balance">
              Type the niche and city.
            </h3>
            <p className="text-[13.5px] text-brand-secondary/62 leading-[1.6]">
              Any business type. Any city on Google Maps. No uploads, no list rentals.
            </p>
          </div>

          <div className="relative bg-[#FAF7F5] border border-black/[0.07] rounded-[20px] p-[22px] hover:border-brand-primary/30 hover:shadow-[0_20px_40px_-20px_rgba(45,49,66,0.16)] transition-all group">
            <div className="flex items-start justify-between mb-5">
              <div className="w-9 h-9 rounded-[10px] bg-brand-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Brain className="w-[17px] h-[17px]" />
              </div>
              <span className="font-mono text-[11px] font-semibold text-brand-primary/50 bg-brand-primary/[0.055] px-2 py-[3px] rounded-md">
                02 · We build
              </span>
            </div>
            <h3 className="text-[17px] font-bold text-brand-secondary leading-[1.3] mb-2 text-balance">
              We check Maps listings and business websites live.
            </h3>
            <p className="text-[13.5px] text-brand-secondary/62 leading-[1.6]">
              Website Match ranks companies by what their site says, so the best-fit prospects rise first.
            </p>
          </div>

          <div className="relative bg-white border border-brand-primary/18 rounded-[20px] p-[22px] shadow-[0_0_0_1.5px_rgba(138,48,51,0.1),0_20px_40px_-16px_rgba(45,49,66,0.1)] hover:border-brand-primary/30 transition-all group">
            <div className="flex items-start justify-between mb-5">
              <div className="w-9 h-9 rounded-[10px] bg-brand-primary text-white flex items-center justify-center">
                <UserCheck className="w-[17px] h-[17px]" />
              </div>
              <span className="font-mono text-[11px] font-semibold text-brand-primary/50 bg-brand-primary/[0.055] px-2 py-[3px] rounded-md">
                03 · Enrich
              </span>
            </div>
            <h3 className="text-[17px] font-bold text-brand-secondary leading-[1.3] mb-2 text-balance">
              Enrich the contacts worth targeting.
            </h3>
            <p className="text-[13.5px] text-brand-secondary/62 leading-[1.6] mb-3">
              Use ratings, location, and website fit before using decision-maker email lookups on the businesses worth contacting.
            </p>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-[7px] text-[12px] text-brand-secondary/62">
                <UserCheck className="w-[13px] h-[13px] text-brand-primary" />
                Find decision-maker emails
              </div>
              <div className="flex items-center gap-[7px] text-[12px] text-brand-secondary/62">
                <ShieldCheck className="w-[13px] h-[13px] text-brand-primary" />
                Verify before you export
              </div>
            </div>
          </div>

          <div className="relative bg-white border border-black/[0.07] rounded-[20px] p-[22px] hover:border-brand-primary/30 hover:shadow-[0_20px_40px_-20px_rgba(45,49,66,0.16)] transition-all group">
            <div className="flex items-start justify-between mb-5">
              <div className="w-9 h-9 rounded-[10px] bg-brand-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Download className="w-[17px] h-[17px]" />
              </div>
              <span className="font-mono text-[11px] font-semibold text-brand-primary/50 bg-brand-primary/[0.055] px-2 py-[3px] rounded-md">
                04 · Export
              </span>
            </div>
            <h3 className="text-[17px] font-bold text-brand-secondary leading-[1.3] mb-2 text-balance">
              Export a clean CSV before the meeting ends.
            </h3>
            <p className="text-[13.5px] text-brand-secondary/62 leading-[1.6]">
              Only verified contacts in the file. Import into Salesforce, HubSpot, or Pipedrive. Bill the client. Repeat.
            </p>
          </div>
        </div>

        <p className="text-center text-[12px] text-brand-secondary/38 mb-2.5">
          Only successful decision-maker email lookups count. Filter first, then use them where they matter.
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
