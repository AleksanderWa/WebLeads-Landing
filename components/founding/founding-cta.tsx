"use client";

import { ArrowRight, Clock } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import type { FoundingState } from "@/lib/founding";

type Props = {
  variant: "light" | "dark";
  state: FoundingState;
};

const STYLES = {
  light: {
    active:
      "inline-flex items-center justify-center gap-2 min-h-[52px] px-[22px] py-2 rounded-[13px] font-bold text-[15px] text-center leading-tight transition-colors w-full sm:w-auto bg-brand-primary text-white hover:bg-brand-primary-hover shadow-[0_8px_28px_-6px_rgba(138,48,51,0.52)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 focus-visible:ring-offset-2",
    disabled:
      "inline-flex items-center justify-center gap-2 min-h-[52px] px-[22px] py-2 rounded-[13px] font-bold text-[15px] w-full sm:w-auto bg-brand-secondary/[0.08] text-brand-secondary/50 border border-brand-secondary/10 cursor-not-allowed shadow-none",
  },
  dark: {
    active:
      "inline-flex items-center justify-center gap-2 w-full min-h-[52px] py-2 rounded-xl bg-brand-accent text-brand-secondary font-bold text-[15px] hover:bg-brand-accent-hover transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
    disabled:
      "inline-flex items-center justify-center gap-2 w-full min-h-[52px] py-2 rounded-xl bg-white/10 text-white/50 border border-white/10 font-bold text-[15px] cursor-not-allowed",
  },
};

export function FoundingCta({ variant, state }: Props) {
  const posthog = usePostHog();
  const styles = STYLES[variant];

  if (!state.ctaEnabled || state.checkoutUrl === null) {
    return (
      <button type="button" disabled aria-disabled="true" className={styles.disabled}>
        {!state.soldOut && <Clock className="w-4 h-4" />}
        {state.ctaLabel}
      </button>
    );
  }

  return (
    <a
      href={state.checkoutUrl}
      className={styles.active}
      onClick={() =>
        posthog?.capture("founding_cta_click", {
          price: state.currentPrice,
          variant,
        })
      }
    >
      {state.ctaLabel}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}
