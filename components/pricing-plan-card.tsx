"use client";

import { ArrowRight, Check, HelpCircle, Sparkles } from "lucide-react";
import { OFFER, TRIAL_PRICING, type PlanKey } from "@/lib/offer";
import { PUBLIC_PLAN_COPY } from "@/lib/public-plan-copy";
import { PLAN_PRICING, TRIAL_DAYS, YEARLY_LABEL, formatUsd, yearlyPerMonth } from "@/lib/pricing";
import { useTweenedNumber } from "@/hooks/use-tweened-number";
import type { RevealPhase } from "@/hooks/use-reveal-on-scroll";
import { stackCellClass, swapClass, type BillingInterval } from "@/components/pricing-motion";

export type Plan = {
  key: PlanKey;
  name: string;
  price: string;
  sub: string;
  lim: string[];
  inc: string[];
  cta: string;
  highlight?: boolean;
};

const PRICE_TWEEN_MS = 450;
const REVEAL_DELAY_CLASSES = ["delay-0", "delay-75", "delay-150"] as const;
const APP_REGISTER_URL = "https://app.webleads.site/register";

const registerHref = (planKey: PlanKey, interval: BillingInterval): string =>
  `${APP_REGISTER_URL}?plan=${planKey}&billing=${interval}`;

const monthlyHint = (planKey: PlanKey): string => {
  const monthly = `${PUBLIC_PLAN_COPY[planKey].price}/mo`;
  if (planKey === "scale") return `${monthly} billed monthly`;
  const { trialPrice } = TRIAL_PRICING[planKey];
  return `${monthly}, starts with a ${trialPrice} ${TRIAL_DAYS}-day trial`;
};

const featureFaqMap: Record<string, string> = {
  "decision-maker emails": "decision-maker-emails",
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

function FeatureList({ items, dark, className }: { items: string[]; dark: boolean; className: string }) {
  return (
    <ul className={className}>
      {items.map((x) => (
        <li key={x} className="flex items-start gap-2 text-[13px] leading-snug">
          <Check
            className={`w-[13px] h-[13px] mt-0.5 shrink-0 ${
              dark ? "text-brand-accent" : "text-brand-primary"
            }`}
          />
          <FeatureText text={x} dark={dark} />
        </li>
      ))}
    </ul>
  );
}

function ListHeading({ children, dark }: { children: string; dark: boolean }) {
  return (
    <div
      className={`text-[10.5px] uppercase tracking-[0.14em] font-bold mb-2.5 ${
        dark ? "text-white/45" : "text-brand-secondary/45"
      }`}
    >
      {children}
    </div>
  );
}

function TweenedPrice({ target, dark, reducedMotion }: { target: number; dark: boolean; reducedMotion: boolean }) {
  const value = useTweenedNumber(target, PRICE_TWEEN_MS, reducedMotion);
  return (
    <span
      className={`text-[42px] font-bold tracking-[-0.02em] leading-none tabular-nums ${
        dark ? "text-white" : "text-brand-secondary"
      }`}
    >
      {formatUsd(value === target ? target : Math.round(value))}
    </span>
  );
}

function PlanPrice({ plan, isYearly, reducedMotion }: { plan: Plan; isYearly: boolean; reducedMotion: boolean }) {
  const dark = !!plan.highlight;
  const target = isYearly ? yearlyPerMonth(plan.key) : PLAN_PRICING[plan.key].monthly;
  return (
    <div className="mt-2 flex items-baseline">
      <s
        aria-hidden={!isYearly}
        className={`overflow-clip whitespace-nowrap text-[18px] font-semibold transition-[max-width,margin,opacity,visibility] duration-300 ease-out motion-reduce:transition-none ${
          isYearly ? "visible mr-2 max-w-[4.5rem] opacity-100" : "invisible mr-0 max-w-0 opacity-0"
        } ${dark ? "text-white/45" : "text-brand-secondary/45"}`}
      >
        {plan.price}
      </s>
      <TweenedPrice target={target} dark={dark} reducedMotion={reducedMotion} />
      <span className={`ml-2 text-[13.5px] ${dark ? "text-white/55" : "text-brand-secondary/50"}`}>/mo</span>
    </div>
  );
}

function BillingDetails({ plan, isYearly }: { plan: Plan; isYearly: boolean }) {
  const dark = !!plan.highlight;
  const yearly = YEARLY_LABEL[plan.key];
  const trialLine = OFFER.pricingCardLine(plan.key);
  return (
    <div className="grid">
      <div aria-hidden={!isYearly} className={`${stackCellClass} flex flex-col ${swapClass(isYearly)}`}>
        <div className={`mt-1 text-[13px] ${dark ? "text-white/70" : "text-brand-secondary/65"}`}>
          Billed {yearly.total} yearly
        </div>
        <span className="mt-2 inline-flex w-fit items-center rounded-full bg-[#ECFDF5] px-2.5 py-1 text-[13px] font-bold text-[#047857]">
          Save {yearly.saving} a year
        </span>
      </div>
      <div
        aria-hidden={isYearly || !trialLine}
        className={`${stackCellClass} mt-1 text-[12px] font-medium ${swapClass(!isYearly && !!trialLine)} ${
          dark ? "text-brand-accent" : "text-brand-primary"
        }`}
      >
        {trialLine}
      </div>
    </div>
  );
}

function CtaLabel({ label, visible }: { label: string; visible: boolean }) {
  return (
    <span aria-hidden={!visible} className={`${stackCellClass} inline-flex items-center gap-1.5 ${swapClass(visible)}`}>
      {label}<ArrowRight className="w-[13px] h-[13px]" />
    </span>
  );
}

function PlanCta({ plan, interval }: { plan: Plan; interval: BillingInterval }) {
  const dark = !!plan.highlight;
  const isYearly = interval === "year";
  return (
    <a
      href={registerHref(plan.key, interval)}
      className={`mt-7 h-11 px-4 rounded-xl text-[13.5px] font-semibold flex items-center justify-center gap-1.5 transition-colors ${
        dark
          ? "bg-brand-accent text-brand-secondary hover:bg-brand-accent-hover"
          : "bg-brand-secondary text-white hover:bg-brand-secondary-hover"
      }`}
    >
      <span className="grid justify-items-center">
        <CtaLabel label={`Get ${plan.name} yearly`} visible={isYearly} />
        <CtaLabel label={plan.cta} visible={!isYearly} />
      </span>
    </a>
  );
}

function MonthlyHint({ plan, isYearly, onSwitchToMonthly }: { plan: Plan; isYearly: boolean; onSwitchToMonthly: () => void }) {
  const dark = !!plan.highlight;
  return (
    <p
      aria-hidden={!isYearly}
      inert={!isYearly}
      className={`mt-3 text-center text-[12.5px] ${swapClass(isYearly)} ${
        dark ? "text-white/65" : "text-brand-secondary/60"
      }`}
    >
      Prefer monthly?{" "}
      <button
        type="button"
        onClick={onSwitchToMonthly}
        className="underline underline-offset-2 hover:no-underline"
      >
        {monthlyHint(plan.key)}
      </button>
    </p>
  );
}

const revealClass = (phase: RevealPhase, index: number): string => {
  switch (phase) {
    case "armed":
      return "opacity-0 translate-y-4";
    case "revealed":
      return `opacity-100 translate-y-0 transition-[opacity,transform] duration-500 ease-out ${
        REVEAL_DELAY_CLASSES[index % REVEAL_DELAY_CLASSES.length]
      }`;
    default:
      return "";
  }
};

function PlanHeader({ plan }: { plan: Plan }) {
  const isHi = !!plan.highlight;
  return (
    <>
      {isHi && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-accent text-brand-secondary text-[11px] font-bold uppercase tracking-wider shadow-sm">
          <Sparkles className="w-[11px] h-[11px]" /> Most popular
        </div>
      )}
      <div className={`text-[14px] font-semibold ${isHi ? "text-brand-accent" : "text-brand-primary"}`}>
        {plan.name}
      </div>
    </>
  );
}

function PlanFeatures({ plan }: { plan: Plan }) {
  const isHi = !!plan.highlight;
  return (
    <div className={`mt-5 pt-5 border-t ${isHi ? "border-white/10" : "border-black/[0.07]"}`}>
      <ListHeading dark={isHi}>Usage</ListHeading>
      <FeatureList items={plan.lim} dark={isHi} className="space-y-2 mb-4" />
      <ListHeading dark={isHi}>Includes</ListHeading>
      <FeatureList items={plan.inc} dark={isHi} className="space-y-2" />
    </div>
  );
}

const cardSurfaceClass = (isHi: boolean): string =>
  isHi
    ? "bg-brand-secondary text-white border border-brand-secondary shadow-[0_30px_60px_-20px_rgba(45,49,66,0.4)] lg:scale-[1.03] z-10"
    : "bg-white border border-black/[0.07]";

type PlanCardProps = {
  plan: Plan;
  index: number;
  interval: BillingInterval;
  reducedMotion: boolean;
  revealPhase: RevealPhase;
  onSwitchToMonthly: () => void;
};

export function PlanCard({ plan, index, interval, reducedMotion, revealPhase, onSwitchToMonthly }: PlanCardProps) {
  const isHi = !!plan.highlight;
  const isYearly = interval === "year";
  return (
    <div className={`relative rounded-2xl p-7 flex flex-col ${revealClass(revealPhase, index)} ${cardSurfaceClass(isHi)}`}>
      <PlanHeader plan={plan} />
      <PlanPrice plan={plan} isYearly={isYearly} reducedMotion={reducedMotion} />
      <BillingDetails plan={plan} isYearly={isYearly} />
      <div className={`mt-1 text-[12.5px] ${isHi ? "text-white/60" : "text-brand-secondary/55"}`}>{plan.sub}</div>
      <PlanFeatures plan={plan} />
      <PlanCta plan={plan} interval={interval} />
      <MonthlyHint plan={plan} isYearly={isYearly} onSwitchToMonthly={onSwitchToMonthly} />
    </div>
  );
}
