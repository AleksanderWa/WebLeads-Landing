"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import {
  Brain,
  Check,
  Download,
  Search,
  Shield,
  ShieldCheck,
  UserCheck,
  Volume2,
  VolumeX,
} from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-primary mb-3">
      <span className="w-5 h-px bg-brand-primary/50" />
      {children}
    </div>
  );
}

function DemoVideoCard() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      video.volume = 1;
      setIsMuted(false);

      if (video.paused) {
        void video.play().catch(() => {
          video.pause();
        });
      }
      return;
    }

    video.muted = true;
    setIsMuted(true);
  };

  const handleSoundKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    void toggleSound();
  };

  return (
    <div className="max-w-[980px] mx-auto mb-[52px] relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[140%] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse, rgba(138,48,51,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 rounded-[18px] overflow-hidden border border-black/[0.09] shadow-[0_40px_100px_-24px_rgba(45,49,66,0.28),0_0_0_1px_rgba(255,255,255,0.5)_inset]">
        <div className="h-10 bg-[#EDECEA] border-b border-black/[0.09] flex items-center px-4 gap-3.5 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
            <div className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
            <div className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 bg-white rounded-[7px] h-6 flex items-center justify-center gap-1.5">
            <Shield className="w-2.5 h-2.5 text-brand-secondary/35" />
            <span className="text-[11px] text-brand-secondary/42">
              app.webleads.site/dashboard
            </span>
          </div>
        </div>

        <div className="relative aspect-video bg-[#0F1117] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(148deg, #12161f 0%, #0d1018 58%, #130e1a 100%)",
            }}
          />
          <div
            className="absolute top-[10%] left-[20%] w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(138,48,51,0.18) 0%, transparent 68%)",
            }}
          />
          <div
            className="absolute bottom-[5%] right-[12%] w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(216,178,110,0.13) 0%, transparent 68%)",
            }}
          />

          <div className="absolute inset-0 px-5 sm:px-7 py-5 flex flex-col gap-2.5 justify-center pointer-events-none">
            <div className="bg-white/[0.07] border border-white/[0.11] rounded-[10px] px-[18px] py-[11px] flex items-center justify-between backdrop-blur-sm">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-soft-pulse shrink-0" />
                <span className="text-white/[0.82] text-[13px] font-semibold truncate">
                  Marketing agencies · Philadelphia
                </span>
                <span className="hidden sm:inline text-[11px] text-white/38 bg-white/[0.08] px-2 py-0.5 rounded-full border border-white/10 shrink-0">
                  Website Match ON
                </span>
              </div>
              <span className="text-[12px] text-white/38 shrink-0 ml-2">234 results</span>
            </div>

            <div className="hidden sm:grid grid-cols-[2.2fr_0.75fr_1.1fr_1fr] gap-3 px-[18px] py-0.5">
              {["Business", "Rating", "Website Match", "Contact"].map((header) => (
                <span
                  key={header}
                  className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/27"
                >
                  {header}
                </span>
              ))}
            </div>

            <div className="hidden sm:grid grid-cols-[2.2fr_0.75fr_1.1fr_1fr] gap-3 px-[18px] py-3 bg-white/[0.07] border border-white/10 rounded-[11px] items-center">
              <div>
                <div className="text-[13px] font-semibold text-white/[0.88]">Pixel Prodigies Agency</div>
                <div className="text-[11px] text-white/37 mt-0.5">Digital Marketing · Philadelphia, PA</div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-amber-500">★</span>
                <span className="text-[13px] font-semibold text-white/[0.78]">4.9</span>
              </div>
              <div>
                <span className="inline-block px-[11px] py-[3px] rounded-full bg-emerald-500/20 border border-emerald-500/32 text-emerald-400 text-[12px] font-bold">
                  94% match
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-400" strokeWidth={2.5} />
                <span className="text-[12px] text-emerald-400 font-semibold">Email found</span>
              </div>
            </div>

            <div className="hidden sm:grid grid-cols-[2.2fr_0.75fr_1.1fr_1fr] gap-3 px-[18px] py-3 bg-white/[0.04] border border-white/[0.07] rounded-[11px] items-center">
              <div>
                <div className="text-[13px] font-semibold text-white/80">Growth Digital Studios</div>
                <div className="text-[11px] text-white/34 mt-0.5">Marketing Agency · Philadelphia, PA</div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-amber-500">★</span>
                <span className="text-[13px] font-semibold text-white/[0.72]">4.7</span>
              </div>
              <div>
                <span className="inline-block px-[11px] py-[3px] rounded-full bg-emerald-500/14 border border-emerald-500/24 text-emerald-400 text-[12px] font-bold">
                  87% match
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-400" strokeWidth={2.5} />
                <span className="text-[12px] text-emerald-400 font-semibold">Email found</span>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-[2.2fr_0.75fr_1.1fr_1fr] gap-3 px-[18px] py-3 bg-white/[0.025] border border-white/[0.055] rounded-[11px] items-center">
              <div>
                <div className="text-[13px] font-semibold text-white/[0.72]">Northeast Creative Co.</div>
                <div className="text-[11px] text-white/30 mt-0.5">Creative Agency · Philadelphia, PA</div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-amber-500">★</span>
                <span className="text-[13px] font-semibold text-white/65">4.5</span>
              </div>
              <div>
                <span className="inline-block px-[11px] py-[3px] rounded-full bg-amber-500/13 border border-amber-500/24 text-amber-300 text-[12px] font-bold">
                  71% match
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-[5px] h-[5px] rounded-full bg-white/50 animate-dot-pulse" />
                <span className="w-[5px] h-[5px] rounded-full bg-white/50 animate-dot-pulse-delay-1" />
                <span className="w-[5px] h-[5px] rounded-full bg-white/50 animate-dot-pulse-delay-2" />
                <span className="text-[12px] text-white/42 ml-1">Searching…</span>
              </div>
            </div>
          </div>

          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover z-10"
            src="/videos/webleads-website-match-hero.mp4"
            poster="/videos/webleads-website-match-hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="WebLeads demo showing Website Match search and verified decision maker emails"
          />

          <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 px-5 py-3.5 bg-gradient-to-t from-black/55 via-black/15 to-transparent">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[12px] font-bold text-brand-secondary backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Website Match demo
            </div>
            <button
              type="button"
              onPointerDown={() => void toggleSound()}
              onKeyDown={handleSoundKeyDown}
              className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/90 text-brand-secondary backdrop-blur-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
              aria-label={isMuted ? "Turn demo sound on" : "Mute demo sound"}
              title={isMuted ? "Turn sound on" : "Mute sound"}
            >
              {isMuted ? <VolumeX className="h-[15px] w-[15px]" /> : <Volume2 className="h-[15px] w-[15px]" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksRedesign() {
  return (
    <section
      id="how"
      className="bg-[#F8F6F3] py-[92px] px-7 pb-[108px] border-t border-black/[0.045]"
      aria-labelledby="how-title"
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>How it works</SectionLabel>
          <h2
            id="how-title"
            className="text-[clamp(28px,4vw,46px)] font-extrabold tracking-[-0.025em] leading-[1.08] text-balance text-brand-secondary mb-4"
          >
            A verified prospect list, matched
            <br className="hidden sm:block" />
            {" "}to the offer you sell.
          </h2>
          <p className="text-[17px] leading-[1.65] text-pretty text-brand-secondary/60 max-w-[50ch] mx-auto">
            Search the market, rank the best fits, enrich the contacts, export the list.
          </p>
        </div>

        <DemoVideoCard />

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
              Use ratings, location, and website fit before spending credits on owner email lookup and SMTP verification.
            </p>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-[7px] text-[12px] text-brand-secondary/62">
                <UserCheck className="w-[13px] h-[13px] text-brand-primary" />
                Find owner emails
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
          Credits only get used when you run enrichment or verification. Filter first, spend precisely.
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
