"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Download,
  Filter,
  Globe,
  Loader2,
  Mail,
  MapPin,
  Search,
  Shield,
  Sparkles,
  User,
  Users,
} from "lucide-react";

// ─── Data ───────────────────────────────────────────────────────────────
type Row = {
  initial: string;
  bg: string;
  name: string;
  city: string;
  email: string;
  dm: string;
  role: string;
  phone: string;
  conf: number;
};

type Cycle = {
  query: string;
  rows: Row[];
  total: string;
};

const CYCLES: Cycle[] = [
  {
    query: "Digital marketing agency in Austin",
    rows: [
      { initial: "G", bg: "#1F2937", name: "Gravity Digital", city: "Austin, TX", email: "travis@gravitydigital.com", dm: "Travis Hall", role: "Owner", phone: "(512) 555-0198", conf: 100 },
      { initial: "★", bg: "#2563EB", name: "Lone Star Growth", city: "Austin, TX", email: "sarah@lonestargrowth.com", dm: "Sarah Rodriguez", role: "CEO", phone: "(512) 555-0132", conf: 98 },
      { initial: "◆", bg: "#EA580C", name: "ATX Marketing Co.", city: "Austin, TX", email: "michael@atxmarketing.co", dm: "Michael Chen", role: "Founder", phone: "(512) 555-0177", conf: 97 },
      { initial: "B", bg: "#7C3AED", name: "Blueridge Media", city: "Austin, TX", email: "kate@blueridgemedia.com", dm: "Kate Morris", role: "Director", phone: "(512) 555-0221", conf: 100 },
    ],
    total: "500",
  },
  {
    query: "Roofing contractors in Denver, CO",
    rows: [
      { initial: "R", bg: "#8A3033", name: "Rocky Mtn Roofing", city: "Denver, CO", email: "info@rockymtnroofing.com", dm: "Travis Hall", role: "Owner", phone: "(720) 555-0182", conf: 100 },
      { initial: "A", bg: "#7C3AED", name: "Apex Roofing & Solar", city: "Aurora, CO", email: "hello@apexroofingsolar.com", dm: "Dana Ortiz", role: "Founder", phone: "(720) 555-0214", conf: 100 },
      { initial: "S", bg: "#059669", name: "Summit Roofing Solutions", city: "Denver, CO", email: "office@summitroofing.co", dm: "Mike Brennan", role: "Director", phone: "(720) 555-0367", conf: 92 },
      { initial: "P", bg: "#2563EB", name: "Peak Pro Roofing", city: "Lakewood, CO", email: "team@peakproroofing.com", dm: "Lisa Chen", role: "Manager", phone: "(720) 555-0498", conf: 100 },
    ],
    total: "847",
  },
  {
    query: "HVAC companies in Phoenix, AZ",
    rows: [
      { initial: "D", bg: "#D97706", name: "Desert Air Experts", city: "Phoenix, AZ", email: "contact@desertairexperts.com", dm: "Carlos Reyes", role: "Owner", phone: "(602) 555-0344", conf: 100 },
      { initial: "S", bg: "#2563EB", name: "Sonoran HVAC Services", city: "Phoenix, AZ", email: "hi@sonoranHVAC.com", dm: "Priya Mehta", role: "Founder", phone: "(602) 555-0467", conf: 95 },
      { initial: "V", bg: "#059669", name: "Valley Cool Air", city: "Phoenix, AZ", email: "team@valleycoolair.com", dm: "Amy Torres", role: "Owner", phone: "(602) 555-0612", conf: 88 },
      { initial: "A", bg: "#1F2937", name: "AZ Comfort Systems", city: "Scottsdale, AZ", email: "office@azcomfort.com", dm: "Brett Wilson", role: "Director", phone: "(602) 555-0589", conf: 100 },
    ],
    total: "623",
  },
];

function BizAvatar({ initial, bg }: { initial: string; bg: string }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[14px] font-bold shrink-0"
      style={{ background: bg }}
    >
      {initial}
    </div>
  );
}

// ─── Floating cards ─────────────────────────────────────────────────────
function FloatingCards({ visibleCount }: { visibleCount: number }) {
  const cards = [
    {
      icon: (
        <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
          <User className="w-4 h-4 text-purple-600" />
        </div>
      ),
      label: "Decision Maker",
      value: "Found",
      valueClass: "text-emerald-600",
      sub: "Owner / Founder",
    },
    {
      icon: (
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
          <Globe className="w-4 h-4 text-blue-600" />
        </div>
      ),
      label: "Live Crawling",
      value: "42 websites",
      valueClass: "text-brand-secondary",
      sub: "Crawled now",
    },
    {
      icon: (
        <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
          <Mail className="w-4 h-4 text-emerald-600" />
        </div>
      ),
      label: "SMTP Verified",
      value: "98%",
      valueClass: "text-emerald-600",
      sub: "Deliverable",
    },
  ];
  const hasVisibleCards = visibleCount > 0;

  return (
    <div className="hidden min-[1380px]:flex flex-col relative shrink-0 w-[224px] -ml-5 self-stretch">
      <svg
        className="absolute -left-[18px] top-0 h-full w-[64px] overflow-visible pointer-events-none transition-opacity duration-300 motion-reduce:transition-none"
        style={{ opacity: hasVisibleCards ? 1 : 0.24 }}
        viewBox="0 0 64 100"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 0 4 H 42 C 52 4 60 7 60 10 V 80"
          stroke="rgba(99, 102, 241, 0.5)"
          strokeWidth="2"
          strokeDasharray="5 4"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="flex flex-col justify-around h-full pl-[61px] py-3 gap-3">
        {cards.map((c, i) => (
          <div key={i} className="relative">
            <div
              className={`absolute -left-[27px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] rounded-full ring-[3px] ring-white z-10 transition-all duration-300 ${
                i < visibleCount
                  ? "bg-[#5B6CF0] scale-100 opacity-100"
                  : "bg-[#5B6CF0]/25 scale-75 opacity-45"
              }`}
            />
            <div
              className={`bg-white rounded-2xl border border-black/[0.07] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-4 w-full transition-all duration-500 motion-reduce:transition-none ${
                i < visibleCount
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4 pointer-events-none"
              }`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              <div className="flex items-center gap-2.5 mb-2">
                {c.icon}
                <div className="text-[9.5px] font-bold uppercase tracking-[0.13em] text-brand-secondary/50 leading-tight">
                  {c.label}
                </div>
              </div>
              <div className={`text-[20px] font-extrabold leading-none tracking-tight ${c.valueClass}`}>
                {c.value}
              </div>
              <div className="text-[12px] text-brand-secondary/50 mt-1 font-medium">{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Product preview ────────────────────────────────────────────────────
function ProductPreview() {
  const [phase, setPhase] = useState<"idle" | "typing" | "searching" | "results" | "complete">("idle");
  const [typed, setTyped] = useState("");
  const [visibleRows, setVisibleRows] = useState(0);
  const [visibleCards, setVisibleCards] = useState(0);
  const [cycleIdx, setCycleIdx] = useState(0);
  const timersRef = useRef<Array<ReturnType<typeof setTimeout> | ReturnType<typeof setInterval>>>([]);

  useEffect(() => {
    const clearAll = () => {
      timersRef.current.forEach((t) => {
        clearTimeout(t as ReturnType<typeof setTimeout>);
        clearInterval(t as ReturnType<typeof setInterval>);
      });
      timersRef.current = [];
    };
    const after = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      timersRef.current.push(id);
      return id;
    };

    const runCycle = (idx: number) => {
      const cycle = CYCLES[idx % CYCLES.length];
      clearAll();
      const prefersReducedMotion =
        typeof window !== "undefined" && window.matchMedia
          ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
          : false;
      setPhase("idle");
      setTyped("");
      setVisibleRows(0);
      setVisibleCards(0);
      setCycleIdx(idx % CYCLES.length);

      if (prefersReducedMotion) {
        setTyped(cycle.query);
        setPhase("results");
        setVisibleRows(cycle.rows.length);
        setVisibleCards(3);
        after(() => runCycle(idx + 1), 7000);
        return;
      }

      after(() => {
        setPhase("typing");
        let i = 0;
        const iv = setInterval(() => {
          i++;
          setTyped(cycle.query.slice(0, i));
          if (i >= cycle.query.length) {
            clearInterval(iv);
            timersRef.current = timersRef.current.filter((t) => t !== iv);
            after(() => setPhase("searching"), 260);
            after(() => {
              setPhase("results");
              setVisibleRows(1);
              setVisibleCards(1);
            }, 1180);
            after(() => setVisibleRows(2), 1540);
            after(() => {
              setVisibleRows(3);
              setVisibleCards(2);
            }, 1900);
            after(() => {
              setVisibleRows(4);
              setVisibleCards(3);
            }, 2260);
            after(() => setPhase("complete"), 2920);
            after(() => runCycle(idx + 1), 8200);
          }
        }, 48);
        timersRef.current.push(iv);
      }, 600);
    };

    runCycle(0);
    return clearAll;
  }, []);

  const cycle = CYCLES[cycleIdx];
  const tableTemplate =
    "minmax(140px,1.55fr) minmax(150px,1.35fr) minmax(132px,1.1fr) minmax(104px,0.85fr)";
  const statusCopy =
    phase === "idle"
      ? "Enter a niche and city to begin"
      : phase === "typing"
      ? "Building your search…"
      : phase === "searching"
      ? "Crawling Google Maps and company sites…"
      : null;
  const isShowingResults = phase === "results" || phase === "complete";

  return (
    <div className="flex items-stretch gap-0 flex-1">
      <div className="relative z-10 flex-1 min-w-0 bg-white rounded-2xl border border-black/[0.08] shadow-[0_12px_40px_-12px_rgba(45,49,66,0.18),0_4px_16px_-4px_rgba(45,49,66,0.06)] overflow-hidden">
        <div className="h-11 px-4 flex items-center justify-between gap-4 bg-[#F8F6F4] border-b border-black/[0.06]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex gap-1.5 shrink-0">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="text-[12.5px] font-mono text-brand-secondary/55 tracking-tight truncate">
              app.webleads.site / new-search
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-[13px] text-brand-secondary/55 font-medium shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 live-dot" />
            Live
          </span>
        </div>

        <div className="px-5 pt-5 pb-4 border-b border-black/[0.05]">
          <div className="flex items-center gap-3 px-4 py-3 bg-white border border-black/[0.10] rounded-xl">
            <Search className="w-4 h-4 text-brand-secondary/40 shrink-0" />
            <div className="flex-1 text-[15px] font-medium text-brand-secondary min-h-[22px]">
              {typed}
              {phase === "typing" && (
                <span className="caret inline-block w-[2px] h-[16px] bg-brand-primary align-middle ml-0.5" />
              )}
            </div>
            <button className="px-5 py-2 rounded-lg bg-brand-primary text-white text-[14px] font-semibold hover:bg-brand-primary-hover transition-colors shrink-0">
              Search
            </button>
          </div>
          <div className="flex gap-2 mt-3 flex-wrap">
            {[
              { icon: <MapPin className="w-[13px] h-[13px]" />, l: "Google Maps" },
              { icon: <Users className="w-[13px] h-[13px]" />, l: "Decision makers" },
              { icon: <CheckCircle2 className="w-[13px] h-[13px]" />, l: "SMTP verified" },
            ].map((t) => (
              <span
                key={t.l}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium px-3 py-1.5 rounded-full border border-black/[0.09] text-brand-secondary/65 bg-white"
              >
                <span className="text-brand-secondary/45">{t.icon}</span>
                {t.l}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div
            className="grid px-5 py-3 bg-brand-secondary/[0.02] border-b border-black/[0.05] gap-x-4"
            style={{ gridTemplateColumns: tableTemplate }}
          >
            {["Business", "Email", "Decision Maker", "Phone"].map((h) => (
              <div
                key={h}
                className="text-[11px] font-bold uppercase tracking-[0.07em] text-brand-secondary/45 whitespace-nowrap"
              >
                {h}
              </div>
            ))}
          </div>

          <div className="divide-y divide-black/[0.04]">
            {statusCopy && (
              <div className="px-5 py-9 text-center text-[13.5px] text-brand-secondary/35">
                <span className={phase === "searching" ? "animate-pulse motion-reduce:animate-none" : ""}>
                  {statusCopy}
                </span>
              </div>
            )}
            {isShowingResults &&
              cycle.rows.map((r, i) => {
                const show = i < visibleRows;
                return (
                  <div
                    key={r.name + "-" + cycleIdx}
                    className={`grid px-5 transition-all duration-300 motion-reduce:transition-none gap-x-4 ${
                      show ? "opacity-100 row-in py-3.5" : "opacity-0 h-0 overflow-hidden py-0"
                    }`}
                    style={{ gridTemplateColumns: tableTemplate, animationDelay: `${i * 75}ms` }}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <BizAvatar initial={r.initial} bg={r.bg} />
                      <div className="min-w-0">
                        <div className="font-semibold text-brand-secondary text-[13.5px] truncate">{r.name}</div>
                        <div className="text-[12px] text-brand-secondary/50 truncate mt-0.5">{r.city}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 min-w-0 pr-2">
                      <span className="text-[12.5px] font-mono text-brand-secondary/75 truncate">{r.email}</span>
                      <div className="w-[18px] h-[18px] rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                        <Check className="w-[10px] h-[10px] text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <div className="min-w-0 pr-2">
                      <div className="text-[13.5px] font-semibold text-brand-secondary truncate">{r.dm}</div>
                      <div className="text-[12px] text-brand-secondary/50 truncate mt-0.5">{r.role}</div>
                    </div>
                    <div className="text-[13px] text-brand-secondary/65 font-medium leading-snug">{r.phone}</div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="px-5 py-3.5 bg-[#F9F7F5] border-t border-black/[0.05] flex items-center justify-between">
          <span className="text-[13px] text-brand-secondary/55 font-medium">
            {isShowingResults ? `${cycle.total}+` : "—"} leads found
          </span>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg border border-black/[0.10] text-[13px] font-semibold text-brand-secondary/70 hover:bg-white transition-colors">
              <Filter className="w-[13px] h-[13px]" /> Filter
            </button>
            <button className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg bg-brand-primary text-white text-[13px] font-semibold hover:bg-brand-primary-hover transition-colors">
              <Download className="w-[13px] h-[13px]" /> Export CSV
            </button>
          </div>
        </div>
      </div>

      <FloatingCards visibleCount={visibleCards} />
    </div>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────
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
    <section className="bg-white border-b border-black/[0.04]" aria-label="Hero">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-14 lg:pb-16 grid md:grid-cols-[0.75fr_1fr] lg:grid-cols-[0.70fr_1fr] gap-8 lg:gap-12 items-start">
        <div className="pt-2">
          <div className="inline-flex items-center gap-2 bg-brand-primary px-4 py-2 rounded-full mb-7 whitespace-nowrap">
            <Sparkles className="w-[13px] h-[13px] text-white/80" />
            <span className="text-white text-[12px] font-bold uppercase tracking-[0.10em]">
              Built for agencies, marketers &amp; freelancers
            </span>
          </div>

          <h1
            className="text-[38px] sm:text-[44px] md:text-[48px] lg:text-[52px] xl:text-[56px] font-extrabold tracking-[-0.025em] leading-[1.06] text-brand-secondary"
            style={{ hyphens: "none" }}
          >
            Turn Google Maps
            <br />
            into <span className="whitespace-nowrap">outreach-ready</span>
            <br />
            <span className="text-brand-primary">leads.</span>
          </h1>

          <p className="mt-6 text-[17px] md:text-[18px] leading-[1.65] text-brand-secondary/60 max-w-[42ch]">
            Find verified emails, phone numbers, and decision makers from live Google Maps data.
          </p>

          <div id="waitlist-form" className="mt-8 max-w-[460px]">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-secondary/40 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@agency.com"
                  className="w-full h-[54px] pl-10 pr-4 rounded-xl border border-black/[0.12] bg-white text-[15px] text-brand-secondary placeholder:text-brand-secondary/40 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 h-[54px] px-6 rounded-xl bg-brand-primary text-white font-bold text-[15px] hover:bg-brand-primary-hover transition-colors shadow-[0_6px_24px_-6px_rgba(138,48,51,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-[18px] h-[18px] animate-spin" />
                    <span>Starting…</span>
                  </>
                ) : (
                  <>
                    <span>Start free</span>
                    <ArrowRight className="w-[18px] h-[18px]" />
                  </>
                )}
              </button>
            </form>
            <div className="flex items-center gap-1.5 mt-3 text-[13.5px] text-brand-secondary/50">
              <Shield className="w-3.5 h-3.5 text-brand-secondary/35" />
              No credit card · 2 free searches · 500 results each
            </div>
            {errorMessage && (
              <div className="mt-3 bg-red-50 border border-red-200 p-3 rounded-lg">
                <p className="text-sm text-red-700 font-medium">{errorMessage}</p>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Pay Only For Complete Records",
              "Decision Maker Emails Included",
              "Free Trial — No Card Needed",
              "Always Fresh — No Stale Database",
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full bg-brand-primary/[0.06] text-brand-primary border border-brand-primary/15"
              >
                <Check className="w-3 h-3 shrink-0" />
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-7">
            <p className="text-[11px] uppercase tracking-widest text-brand-secondary/40 font-semibold mb-3">
              Used by agencies, marketers &amp; freelancers
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {[
                { src: "/images/customers/pixelprodigies.png", alt: "Pixel Prodigies", h: "h-7", maxW: "max-w-[90px]", dark: true },
                { src: "/images/customers/serviceup.svg", alt: "ServiceUp", h: "h-6", maxW: "max-w-[110px]", dark: true },
                { src: "/images/customers/lessermedia.png", alt: "Lesser Media", h: "h-7", maxW: "max-w-[100px]", dark: true },
              ].map(({ src, alt, h, maxW, dark }) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  className={`w-auto object-contain opacity-60 hover:opacity-90 transition-opacity ${h} ${maxW}`}
                  style={dark ? { filter: "brightness(0)" } : { filter: "grayscale(100%)" }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}
