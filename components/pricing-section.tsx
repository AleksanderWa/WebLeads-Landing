"use client";

import { useRef, useState } from "react";
import { Check, CheckCircle2 } from "lucide-react";
import { LOOKUP_PROMISE, PUBLIC_PLAN_COPY } from "@/lib/public-plan-copy";
import { MIN_YEARLY_SAVING_LABEL } from "@/lib/pricing";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import { PlanCard, type Plan } from "@/components/pricing-plan-card";
import { fadeClass, stackCellClass, type BillingInterval } from "@/components/pricing-motion";

const plans: Plan[] = [
  {
    key: "starter",
    name: PUBLIC_PLAN_COPY.starter.name,
    price: PUBLIC_PLAN_COPY.starter.price,
    sub: PUBLIC_PLAN_COPY.starter.sub,
    lim: [...PUBLIC_PLAN_COPY.starter.limits],
    inc: [...PUBLIC_PLAN_COPY.starter.includes],
    cta: PUBLIC_PLAN_COPY.starter.cta,
  },
  {
    key: "growth",
    name: PUBLIC_PLAN_COPY.growth.name,
    price: PUBLIC_PLAN_COPY.growth.price,
    sub: PUBLIC_PLAN_COPY.growth.sub,
    lim: [...PUBLIC_PLAN_COPY.growth.limits],
    inc: [...PUBLIC_PLAN_COPY.growth.includes],
    cta: PUBLIC_PLAN_COPY.growth.cta,
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
  },
];

const BILLING_NOTE: Record<BillingInterval, string> = {
  year: "Yearly is paid upfront and non-refundable. Cancel any time to stop the next renewal, and you keep access until the year ends.",
  month: "Cancel month-to-month, no contracts.",
};

const toggleOptionClass = (selected: boolean): string =>
  `relative min-h-[44px] rounded-[9px] text-[15px] font-semibold transition-colors duration-300 motion-reduce:transition-none ${
    selected ? "text-brand-secondary" : "text-brand-secondary/65 hover:text-brand-secondary"
  }`;

function BillingToggle({
  interval,
  onChange,
}: {
  interval: BillingInterval;
  onChange: (interval: BillingInterval) => void;
}) {
  const isYearly = interval === "year";
  return (
    <div className="flex justify-center mb-10">
      <div role="group" aria-label="Billing period" className="relative grid w-full max-w-md grid-cols-2 gap-1 rounded-xl border border-black/[0.06] bg-[#EFEBE7] p-1 sm:w-auto sm:max-w-none">
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-6px)] rounded-[9px] bg-white shadow-[0_1px_2px_rgba(0,0,0,.08),0_2px_8px_-2px_rgba(45,49,66,.15)] transition-transform duration-300 ease-out motion-reduce:transition-none ${
            isYearly ? "translate-x-[calc(100%+4px)]" : "translate-x-0"
          }`}
        />
        <button
          type="button"
          aria-pressed={!isYearly}
          onClick={() => onChange("month")}
          className={`${toggleOptionClass(!isYearly)} px-[22px]`}
        >
          Monthly
        </button>
        <button
          type="button"
          aria-pressed={isYearly}
          onClick={() => onChange("year")}
          className={`${toggleOptionClass(isYearly)} flex items-center justify-center gap-2 px-3.5 sm:pl-[22px]`}
        >
          Yearly
          <span className="rounded-full bg-[#ECFDF5] px-2 py-[3px] text-xs font-bold text-[#047857]">
            save {MIN_YEARLY_SAVING_LABEL}
          </span>
        </button>
      </div>
    </div>
  );
}

function BillingNote({ interval }: { interval: BillingInterval }) {
  return (
    <div className="mt-4 grid">
      {(["year", "month"] as const).map((option) => (
        <p
          key={option}
          aria-hidden={option !== interval}
          className={`${stackCellClass} text-[17px] leading-relaxed text-pretty text-brand-secondary/65 ${fadeClass(option === interval)}`}
        >
          {LOOKUP_PROMISE.body} {BILLING_NOTE[option]}
        </p>
      ))}
    </div>
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
  const [interval, setInterval] = useState<BillingInterval>("year");
  const reducedMotion = useReducedMotion();
  const cardsRef = useRef<HTMLDivElement>(null);
  const revealPhase = useRevealOnScroll(cardsRef, reducedMotion);
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
          <BillingNote interval={interval} />
        </div>

        <div className="max-w-2xl mx-auto mb-10 bg-emerald-50 border border-emerald-200 rounded-xl px-6 py-4 flex items-center justify-center gap-3">
          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <p className="text-[14px] font-semibold text-emerald-900 text-center">
            {LOOKUP_PROMISE.badge}
          </p>
        </div>

        <BillingToggle interval={interval} onChange={setInterval} />

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.key}
              plan={plan}
              index={index}
              interval={interval}
              reducedMotion={reducedMotion}
              revealPhase={revealPhase}
              onSwitchToMonthly={() => setInterval("month")}
            />
          ))}
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <p className="text-center text-[13px] font-semibold text-brand-secondary/65 mb-4 uppercase tracking-[0.14em]">
            All plans include
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { l: "Decision maker contacts" },
              { l: "Business emails with confidence scores" },
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
