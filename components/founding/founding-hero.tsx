"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Loader2, Mail, Sparkles } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import type { FoundingState } from "@/lib/founding";
import { HERO, WAITLIST_MESSAGES } from "@/lib/founding-copy";
import { submitWaitlist } from "@/lib/waitlist";
import { FoundingCta } from "./founding-cta";
import { SeatCounter } from "./seat-counter";
import { UnderCta } from "./under-cta";

type WaitlistStatus = "idle" | "submitting" | "success" | "error";

function WaitlistForm({ onSubmitted }: { onSubmitted: () => void }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<WaitlistStatus>("idle");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("submitting");
    const succeeded = await submitWaitlist(email);
    if (succeeded) onSubmitted();
    setStatus(succeeded ? "success" : "error");
  };

  if (status === "success") {
    return (
      <p role="status" className="mt-4 text-[14px] font-semibold text-emerald-800">
        {WAITLIST_MESSAGES.success}
      </p>
    );
  }

  return (
    <div className="mt-4 max-w-[490px] mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1 min-w-[220px]">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-brand-secondary/35 pointer-events-none" />
          <input
            type="email"
            required
            aria-label="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@agency.com"
            className="w-full h-[52px] pl-10 pr-4 rounded-[13px] border-[1.5px] border-black/[0.11] bg-white text-[15px] text-brand-secondary placeholder:text-brand-secondary/40 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex items-center justify-center gap-2 h-[52px] px-[22px] rounded-[13px] bg-brand-primary text-white font-bold text-[15px] hover:bg-brand-primary-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
        >
          {status === "submitting" ? (
            <Loader2 className="w-[18px] h-[18px] animate-spin" />
          ) : (
            HERO.secondaryCta
          )}
        </button>
      </form>
      {status === "error" && (
        <p role="alert" className="mt-3 text-[14px] font-medium text-red-700">
          {WAITLIST_MESSAGES.error}
        </p>
      )}
    </div>
  );
}

export function FoundingHero({
  state,
  showTodayBlock,
}: {
  state: FoundingState;
  showTodayBlock: boolean;
}) {
  const posthog = usePostHog();
  const [formOpen, setFormOpen] = useState(state.soldOut);
  const subhead = HERO.subheadBase + (showTodayBlock ? HERO.subheadToday : "");

  return (
    <section
      className="relative bg-white overflow-visible px-5 pt-[70px] pb-16 sm:px-6 sm:pb-20 lg:pt-[78px]"
      aria-label="Hero"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(45,49,66,0.065) 1.5px, transparent 1.5px)",
            backgroundSize: "34px 34px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 52% at 50% 30%, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.74) 56%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[830px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-brand-primary px-[18px] py-2 rounded-full mb-6 animate-fade-up">
          <Sparkles className="w-3 h-3 text-white/85 shrink-0" />
          <span className="text-white text-[11px] font-bold uppercase tracking-normal">
            {HERO.badge}
          </span>
        </div>

        <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-black tracking-normal leading-[1.05] text-brand-secondary mb-[18px] animate-fade-up-delay-1 text-balance">
          <span className="text-brand-primary">{HERO.headlinePrefix}</span>
          {HERO.headlineRest}
        </h1>

        <p className="text-[17px] leading-[1.64] text-brand-secondary/58 max-w-[56ch] mx-auto mb-8 text-pretty animate-fade-up-delay-2">
          {subhead}
        </p>

        <div className="animate-fade-up-delay-3">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch">
            <FoundingCta variant="light" state={state} />
            <button
                type="button"
                onClick={() => setFormOpen(true)}
                aria-expanded={formOpen}
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-[13px] border-[1.5px] border-brand-secondary/15 bg-white text-brand-secondary font-semibold text-[15px] hover:border-brand-secondary/30 transition-colors w-full sm:w-auto"
              >
                {HERO.secondaryCta}
              </button>
          </div>
          {formOpen && (
            <WaitlistForm
              onSubmitted={() => posthog?.capture("founding_waitlist_submit")}
            />
          )}
          <SeatCounter counter={state.counter} variant="light" />
          <UnderCta
            variant="light"
            hasCounter={state.counter !== null}
            soldOut={state.soldOut}
          />
        </div>
      </div>
    </section>
  );
}
