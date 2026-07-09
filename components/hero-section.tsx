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
import { DemoVideoCard } from "@/components/demo-video-card";

function HeroArcAnimation() {
  const arcGroups = [
    {
      side: "left",
      className: "left-[18px] xl:left-[74px] top-[86px] scale-x-[-1]",
      viewBox: "0 0 430 760",
      paths: [
        "M406 22C258 92 180 188 194 306C210 446 148 564 28 728",
        "M378 86C264 152 218 230 244 326C282 468 208 588 84 734",
        "M336 30C212 138 166 256 194 376C222 498 176 606 72 720",
        "M296 102C218 186 202 284 246 396C290 508 266 618 184 742",
        "M416 214C318 262 284 342 316 454C346 558 318 650 236 738",
      ],
      nodes: [
        { path: "M378 86C264 152 218 230 244 326C282 468 208 588 84 734", delay: "0s" },
        { path: "M296 102C218 186 202 284 246 396C290 508 266 618 184 742", delay: "2.6s" },
      ],
    },
    {
      side: "right",
      className: "right-[18px] xl:right-[74px] top-[86px] scale-x-[-1]",
      viewBox: "0 0 430 760",
      paths: [
        "M406 22C258 92 180 188 194 306C210 446 148 564 28 728",
        "M378 86C264 152 218 230 244 326C282 468 208 588 84 734",
        "M336 30C212 138 166 256 194 376C222 498 176 606 72 720",
        "M296 102C218 186 202 284 246 396C290 508 266 618 184 742",
        "M416 214C318 262 284 342 316 454C346 558 318 650 236 738",
      ],
      nodes: [
        { path: "M378 86C264 152 218 230 244 326C282 468 208 588 84 734", delay: "1.3s" },
        { path: "M296 102C218 186 202 284 246 396C290 508 266 618 184 742", delay: "3.9s" },
      ],
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 hidden overflow-hidden pointer-events-none lg:block"
    >
      {arcGroups.map((group) => (
        <svg
          key={group.side}
          className={`hero-arc-group absolute h-[760px] w-[430px] text-brand-primary ${group.className}`}
          viewBox={group.viewBox}
          fill="none"
        >
          {group.paths.map((path, index) => (
            <path
              key={path}
              d={path}
              className={`hero-arc-path hero-arc-path-${index + 1}`}
              stroke={index === 1 || index === 4 ? "#D8B26E" : "currentColor"}
              strokeWidth={index === 2 ? "2.5" : "1.9"}
              strokeLinecap="round"
            />
          ))}
          {group.nodes.map((node, index) => (
            <circle
              key={`${group.side}-node-${index}`}
              r={index === 0 ? "4.5" : "3.5"}
              className="hero-arc-node"
              style={{ offsetPath: `path('${node.path}')`, animationDelay: node.delay }}
            />
          ))}
        </svg>
      ))}
    </div>
  );
}

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
      className="relative bg-white overflow-visible px-5 pt-[70px] pb-0 sm:px-6 lg:pt-[78px]"
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
      <HeroArcAnimation />

      <div className="relative z-10 max-w-[830px] mx-auto text-center">
        <div className="inline-flex max-w-[calc(100vw-40px)] items-center gap-2 overflow-hidden bg-brand-primary px-[18px] py-2 rounded-full mb-6 animate-fade-up">
          <Sparkles className="w-3 h-3 text-white/85 shrink-0" />
          <span className="truncate text-white text-[11px] font-bold uppercase tracking-normal">
            Built for agencies, marketers &amp; freelancers
          </span>
        </div>

        <h1
          className="text-[34px] sm:text-[46px] md:text-[56px] lg:text-[68px] font-black tracking-normal leading-[1.03] text-brand-secondary mb-[18px] text-balance animate-fade-up-delay-1"
          style={{ hyphens: "none" }}
        >
          Turn Google Maps
          <br />
          into leads that
          <br />
          <span className="text-brand-primary">match your offer.</span>
        </h1>

        <p className="text-[17px] leading-[1.64] text-brand-secondary/58 max-w-[52ch] mx-auto mb-8 text-pretty animate-fade-up-delay-2">
          Search any niche and city. WebLeads checks each business website, ranks the best fits, then helps you find a decision-maker email worth using.
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
            No credit card. 2 free searches. Up to 500 businesses per search.
          </div>
          {errorMessage && (
            <div className="mt-3 bg-red-50 border border-red-200 p-3 rounded-lg max-w-[490px] mx-auto">
              <p className="text-sm text-red-700 font-medium">{errorMessage}</p>
            </div>
          )}
        </div>

        <div className="mt-[22px] hidden flex-wrap gap-2 justify-center animate-fade-up-delay-4 sm:flex">
          {[
            "Filter leads by what their site says",
            "Find decision-maker emails",
            "Fresh data on every search",
            "Radius search",
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
      </div>

      <DemoVideoCard className="relative z-10 mt-8 -mb-[92px] animate-fade-up-delay-5 sm:mt-10 sm:-mb-[118px] lg:-mb-[130px]" />
    </section>
  );
}
