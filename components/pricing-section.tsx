"use client";

import { ArrowRight, Check, CheckCircle2, HelpCircle, Sparkles } from "lucide-react";
import { LOOKUP_PROMISE, PUBLIC_PLAN_COPY } from "@/lib/public-plan-copy";

type Plan = {
  key: string;
  name: string;
  price: string;
  sub: string;
  lim: string[];
  inc: string[];
  cta: string;
  href: string;
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    key: "trial",
    name: PUBLIC_PLAN_COPY.trial.name,
    price: PUBLIC_PLAN_COPY.trial.price,
    sub: PUBLIC_PLAN_COPY.trial.sub,
    lim: [...PUBLIC_PLAN_COPY.trial.limits],
    inc: [...PUBLIC_PLAN_COPY.trial.includes],
    cta: PUBLIC_PLAN_COPY.trial.cta,
    href: "https://app.webleads.site/register",
  },
  {
    key: "starter",
    name: PUBLIC_PLAN_COPY.starter.name,
    price: PUBLIC_PLAN_COPY.starter.price,
    sub: PUBLIC_PLAN_COPY.starter.sub,
    lim: [...PUBLIC_PLAN_COPY.starter.limits],
    inc: [...PUBLIC_PLAN_COPY.starter.includes],
    cta: PUBLIC_PLAN_COPY.starter.cta,
    href: "https://app.webleads.site/register",
  },
  {
    key: "growth",
    name: PUBLIC_PLAN_COPY.growth.name,
    price: PUBLIC_PLAN_COPY.growth.price,
    sub: PUBLIC_PLAN_COPY.growth.sub,
    lim: [...PUBLIC_PLAN_COPY.growth.limits],
    inc: [...PUBLIC_PLAN_COPY.growth.includes],
    cta: PUBLIC_PLAN_COPY.growth.cta,
    href: "https://app.webleads.site/register",
    highlight: true,
  },
  {
    key: "scale",
    name: PUBLIC_PLAN_COPY.scale.name,
    price: PUBLIC_PLAN_COPY.scale.price,
    sub: PUBLIC_PLAN_COPY.scale.sub,
    lim: [...PUBLIC_PLAN_COPY.scale.limits],
    inc: [...PUBLIC_PLAN_COPY.scale.includes],
    cta: PUBLIC_PLAN_COPY.scale.cta,
    href: "https://app.webleads.site/register",
  },
];

const featureFaqMap: Record<string, string> = {
  "decision-maker email lookups": "decision-maker-email-lookups",
  "email verifications": "email-verification",
};

function FeatureText({ text, dark = false }: { text: string; dark?: boolean }) {
  const lower = text.toLowerCase();
  const matched = Object.keys(featureFaqMap).find((k) => lower.includes(k));
  return (
    <span className={dark ? "text-white/80" : "text-brand-secondary/80"}>
      {text}
      {matched && (
        <a
          href={`#faq-${featureFaqMap[matched]}`}
          className={`inline-flex items-center ml-1.5 transition-colors ${
            dark
              ? "text-white/40 hover:text-brand-accent"
              : "text-brand-primary/50 hover:text-brand-primary"
          }`}
          title="Learn more"
        >
          <HelpCircle className="w-[14px] h-[14px]" />
        </a>
      )}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-primary mb-3">
      <span className="w-5 h-px bg-brand-primary/50" />
      {children}
    </div>
  );
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-[#FAF7F5] py-20 md:py-28 border-b border-black/[0.05]"
      aria-labelledby="pricing-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <SectionLabel>Pricing</SectionLabel>
          <h2
            id="pricing-title"
            className="text-[32px] md:text-[42px] font-bold tracking-[-0.02em] leading-[1.06] text-balance text-brand-secondary"
          >
            {LOOKUP_PROMISE.headline}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-pretty text-brand-secondary/65">
            {LOOKUP_PROMISE.body} Cancel month-to-month, no contracts.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-10 bg-emerald-50 border border-emerald-200 rounded-xl px-6 py-4 flex items-center justify-center gap-3">
          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <p className="text-[14px] font-semibold text-emerald-900 text-center">
            {LOOKUP_PROMISE.badge}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p) => {
            const isHi = !!p.highlight;
            return (
              <div
                key={p.key}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  isHi
                    ? "bg-brand-secondary text-white border border-brand-secondary shadow-[0_30px_60px_-20px_rgba(45,49,66,0.4)] lg:scale-[1.03] z-10"
                    : "bg-white border border-black/[0.07]"
                }`}
              >
                {isHi && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-accent text-brand-secondary text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    <Sparkles className="w-[11px] h-[11px]" /> Most popular
                  </div>
                )}
                <div
                  className={`text-[14px] font-semibold ${
                    isHi ? "text-brand-accent" : "text-brand-primary"
                  }`}
                >
                  {p.name}
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span
                    className={`text-[42px] font-bold tracking-[-0.02em] leading-none ${
                      isHi ? "text-white" : "text-brand-secondary"
                    }`}
                  >
                    {p.price}
                  </span>
                  {p.key !== "trial" && (
                    <span
                      className={`text-[13.5px] ${
                        isHi ? "text-white/55" : "text-brand-secondary/50"
                      }`}
                    >
                      /mo
                    </span>
                  )}
                </div>
                <div
                  className={`mt-1 text-[12.5px] ${
                    isHi ? "text-white/60" : "text-brand-secondary/55"
                  }`}
                >
                  {p.sub}
                </div>

                <div
                  className={`mt-5 pt-5 border-t ${
                    isHi ? "border-white/10" : "border-black/[0.07]"
                  }`}
                >
                  <div
                    className={`text-[10.5px] uppercase tracking-[0.14em] font-bold mb-2.5 ${
                      isHi ? "text-white/45" : "text-brand-secondary/45"
                    }`}
                  >
                    Usage
                  </div>
                  <ul className="space-y-2 mb-4">
                    {p.lim.map((x) => (
                      <li key={x} className="flex items-start gap-2 text-[13px] leading-snug">
                        <Check
                          className={`w-[13px] h-[13px] mt-0.5 shrink-0 ${
                            isHi ? "text-brand-accent" : "text-brand-primary"
                          }`}
                        />
                        <FeatureText text={x} dark={isHi} />
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`text-[10.5px] uppercase tracking-[0.14em] font-bold mb-2.5 ${
                      isHi ? "text-white/45" : "text-brand-secondary/45"
                    }`}
                  >
                    Includes
                  </div>
                  <ul className="space-y-2">
                    {p.inc.map((x) => (
                      <li key={x} className="flex items-start gap-2 text-[13px] leading-snug">
                        <Check
                          className={`w-[13px] h-[13px] mt-0.5 shrink-0 ${
                            isHi ? "text-brand-accent" : "text-brand-primary"
                          }`}
                        />
                        <FeatureText text={x} dark={isHi} />
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={p.href}
                  className={`mt-7 h-11 px-4 rounded-xl text-[13.5px] font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    isHi
                      ? "bg-brand-accent text-brand-secondary hover:bg-brand-accent-hover"
                      : "bg-brand-secondary text-white hover:bg-brand-secondary-hover"
                  }`}
                >
                  {p.cta} <ArrowRight className="w-[13px] h-[13px]" />
                </a>
                <p
                  className={`mt-2 text-center text-[11.5px] ${
                    isHi ? "text-white/40" : "text-brand-secondary/40"
                  }`}
                >
                  Cancel anytime
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <p className="text-center text-[13px] font-semibold text-brand-secondary/65 mb-4 uppercase tracking-[0.14em]">
            All plans include
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { l: "Decision maker contacts" },
              { l: "Verified business emails" },
              { l: "Phone numbers & addresses" },
              { l: "Google ratings & reviews" },
              { l: "Website Match", href: "#faq-website-match" },
              { l: "Social media profiles" },
              { l: "CSV / Excel export" },
              { l: "Email confidence badges", href: "#faq-email-confidence-badges" },
            ].map((it) => {
              const inner = (
                <>
                  <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-brand-secondary">
                    {it.l}
                  </span>
                </>
              );
              return it.href ? (
                <a
                  key={it.l}
                  href={it.href}
                  className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full border border-brand-primary/20 shadow-sm hover:border-brand-primary/40 transition-colors"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={it.l}
                  className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full border border-brand-primary/20 shadow-sm"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
