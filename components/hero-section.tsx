"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  Check,
  Loader2,
  Mail,
  Shield,
  Sparkles,
} from "lucide-react";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const encodedEmail = encodeURIComponent(email);
    const redirectUrl = `https://app.webleads.site/register?email=${encodedEmail}`;

    try {
      await fetch("https://app.webleads.site/api/public/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { email }, form_type: "WAITLIST" }),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      window.location.href = redirectUrl;
    }
  };

  return (
    <section
      className="relative bg-white overflow-hidden py-[88px] px-6 pb-[108px] border-b border-black/[0.04]"
      aria-label="Hero"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[220px] -left-[220px] w-[820px] h-[820px] rounded-full animate-float-blob-1"
          style={{
            background:
              "radial-gradient(circle at 42% 42%, rgba(138,48,51,0.09) 0%, rgba(138,48,51,0.015) 55%, transparent 70%)",
          }}
        />
        <div
          className="absolute -top-[100px] -right-[270px] w-[780px] h-[780px] rounded-full animate-float-blob-2"
          style={{
            background:
              "radial-gradient(circle at 55% 44%, rgba(216,178,110,0.13) 0%, rgba(216,178,110,0.03) 55%, transparent 72%)",
          }}
        />
        <div
          className="absolute -bottom-[330px] left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full animate-float-blob-3"
          style={{
            background:
              "radial-gradient(circle at 50% 32%, rgba(138,48,51,0.065) 0%, transparent 65%)",
          }}
        />
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
              "radial-gradient(ellipse 68% 58% at 50% 44%, rgba(255,255,255,0.93) 0%, rgba(255,255,255,0.55) 58%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[830px] mx-auto text-center">
        <div className="inline-flex max-w-full items-center gap-2 bg-brand-primary px-[18px] py-2 rounded-full mb-7 animate-fade-up">
          <Sparkles className="w-3 h-3 text-white/85 shrink-0" />
          <span className="text-white text-[11px] font-bold uppercase tracking-[0.11em]">
            Built for agencies, marketers &amp; freelancers
          </span>
        </div>

        <h1
          className="text-[clamp(44px,6.5vw,76px)] font-black tracking-[-0.035em] leading-[1.03] text-brand-secondary mb-[22px] text-balance animate-fade-up-delay-1"
          style={{ hyphens: "none" }}
        >
          Turn Google Maps
          <br />
          into leads that
          <br />
          <span className="text-brand-primary">match your offer.</span>
        </h1>

        <p className="text-[18px] leading-[1.72] text-brand-secondary/58 max-w-[52ch] mx-auto mb-11 text-pretty animate-fade-up-delay-2">
          Search any niche and city. WebLeads checks each business website, ranks the best fits, then helps you find the decision maker and a verified email.
        </p>

        <div id="waitlist-form" className="animate-fade-up-delay-3">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 max-w-[490px] mx-auto flex-wrap"
          >
            <div className="relative flex-1 min-w-[220px]">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-brand-secondary/35 pointer-events-none" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@agency.com"
                className="w-full h-[52px] pl-10 pr-4 rounded-[13px] border-[1.5px] border-black/[0.11] bg-white text-[15px] text-brand-secondary placeholder:text-brand-secondary/40 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 h-[52px] px-[22px] rounded-[13px] bg-brand-primary text-white font-bold text-[15px] hover:bg-brand-primary-hover transition-colors shadow-[0_8px_28px_-6px_rgba(138,48,51,0.52)] disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-[18px] h-[18px] animate-spin" />
                  <span>Starting...</span>
                </>
              ) : (
                <>
                  <span>Find My First Leads</span>
                  <ArrowRight className="w-[15px] h-[15px]" />
                </>
              )}
            </button>
          </form>
          <div className="flex items-center justify-center gap-1.5 mt-3 text-[13px] text-brand-secondary/42">
            <Shield className="w-3 h-3 text-brand-secondary/55" />
            No credit card. 2 free searches. 500 results each.
          </div>
          {errorMessage && (
            <div className="mt-3 bg-red-50 border border-red-200 p-3 rounded-lg max-w-[490px] mx-auto">
              <p className="text-sm text-red-700 font-medium">{errorMessage}</p>
            </div>
          )}
        </div>

        <div className="mt-[26px] flex flex-wrap gap-2 justify-center animate-fade-up-delay-4">
          {[
            "Filter leads by what their site says",
            "Decision makers with verified emails",
            "Fresh data on every search",
            "Map radius search",
          ].map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-[14px] py-[7px] rounded-full bg-brand-primary/[0.055] text-brand-primary border border-brand-primary/14"
            >
              <Check className="w-[11px] h-[11px] shrink-0" />
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-[52px] animate-fade-up-delay-5">
          <p className="text-[11px] uppercase tracking-[0.13em] text-brand-secondary/35 font-semibold mb-5">
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
                className={`w-auto object-contain opacity-45 hover:opacity-90 transition-opacity ${h} ${maxW}`}
                style={dark ? { filter: "brightness(0)" } : { filter: "grayscale(100%)" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
