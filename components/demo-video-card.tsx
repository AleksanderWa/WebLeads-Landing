"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { Check, Shield, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

type DemoVideoCardProps = {
  className?: string;
};

export function DemoVideoCard({ className }: DemoVideoCardProps) {
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
    <div className={cn("relative mx-auto w-full max-w-[1040px]", className)}>
      <div
        className="absolute left-1/2 top-1/2 z-0 h-[132%] w-[88%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(138,48,51,0.09) 0%, rgba(216,178,110,0.07) 36%, transparent 68%)",
        }}
      />

      <div className="relative z-10 overflow-hidden rounded-[18px] border border-black/[0.09] shadow-[0_44px_110px_-28px_rgba(45,49,66,0.34),0_0_0_1px_rgba(255,255,255,0.58)_inset]">
        <div className="flex h-10 shrink-0 items-center gap-3.5 border-b border-black/[0.09] bg-[#EDECEA] px-4">
          <div className="flex gap-1.5">
            <div className="h-[11px] w-[11px] rounded-full bg-[#FF5F57]" />
            <div className="h-[11px] w-[11px] rounded-full bg-[#FEBC2E]" />
            <div className="h-[11px] w-[11px] rounded-full bg-[#28C840]" />
          </div>
          <div className="flex h-6 flex-1 items-center justify-center gap-1.5 rounded-[7px] bg-white">
            <Shield className="h-2.5 w-2.5 text-brand-secondary/35" />
            <span className="truncate text-[11px] text-brand-secondary/42">
              app.webleads.site/dashboard
            </span>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden bg-[#0F1117]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(148deg, #12161f 0%, #0d1018 58%, #130e1a 100%)",
            }}
          />
          <div
            className="absolute left-[20%] top-[10%] h-[420px] w-[420px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(138,48,51,0.18) 0%, transparent 68%)",
            }}
          />
          <div
            className="absolute bottom-[5%] right-[12%] h-[300px] w-[300px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(216,178,110,0.13) 0%, transparent 68%)",
            }}
          />

          <div className="absolute inset-0 flex flex-col justify-center gap-2.5 px-5 py-5 pointer-events-none sm:px-7">
            <div className="flex items-center justify-between rounded-[10px] border border-white/[0.11] bg-white/[0.07] px-[18px] py-[11px] backdrop-blur-sm">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-soft-pulse" />
                <span className="truncate text-[13px] font-semibold text-white/[0.82]">
                  Marketing agencies · Philadelphia
                </span>
                <span className="hidden shrink-0 rounded-full border border-white/10 bg-white/[0.08] px-2 py-0.5 text-[11px] text-white/38 sm:inline">
                  Website Match ON
                </span>
              </div>
              <span className="ml-2 shrink-0 text-[12px] text-white/38">234 results</span>
            </div>

            <div className="hidden grid-cols-[2.2fr_0.75fr_1.1fr_1fr] gap-3 px-[18px] py-0.5 sm:grid">
              {["Business", "Rating", "Website Match", "Contact"].map((header) => (
                <span
                  key={header}
                  className="text-[10px] font-bold uppercase tracking-normal text-white/27"
                >
                  {header}
                </span>
              ))}
            </div>

            <div className="hidden grid-cols-[2.2fr_0.75fr_1.1fr_1fr] items-center gap-3 rounded-[11px] border border-white/10 bg-white/[0.07] px-[18px] py-3 sm:grid">
              <div>
                <div className="text-[13px] font-semibold text-white/[0.88]">
                  Pixel Prodigies Agency
                </div>
                <div className="mt-0.5 text-[11px] text-white/37">
                  Digital Marketing · Philadelphia, PA
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-amber-500">★</span>
                <span className="text-[13px] font-semibold text-white/[0.78]">4.9</span>
              </div>
              <div>
                <span className="inline-block rounded-full border border-emerald-500/32 bg-emerald-500/20 px-[11px] py-[3px] text-[12px] font-bold text-emerald-400">
                  94% match
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-3 w-3 text-emerald-400" strokeWidth={2.5} />
                <span className="text-[12px] font-semibold text-emerald-400">Email found</span>
              </div>
            </div>

            <div className="hidden grid-cols-[2.2fr_0.75fr_1.1fr_1fr] items-center gap-3 rounded-[11px] border border-white/[0.07] bg-white/[0.04] px-[18px] py-3 sm:grid">
              <div>
                <div className="text-[13px] font-semibold text-white/80">
                  Growth Digital Studios
                </div>
                <div className="mt-0.5 text-[11px] text-white/34">
                  Marketing Agency · Philadelphia, PA
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-amber-500">★</span>
                <span className="text-[13px] font-semibold text-white/[0.72]">4.7</span>
              </div>
              <div>
                <span className="inline-block rounded-full border border-emerald-500/24 bg-emerald-500/14 px-[11px] py-[3px] text-[12px] font-bold text-emerald-400">
                  87% match
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-3 w-3 text-emerald-400" strokeWidth={2.5} />
                <span className="text-[12px] font-semibold text-emerald-400">Email found</span>
              </div>
            </div>

            <div className="hidden grid-cols-[2.2fr_0.75fr_1.1fr_1fr] items-center gap-3 rounded-[11px] border border-white/[0.055] bg-white/[0.025] px-[18px] py-3 md:grid">
              <div>
                <div className="text-[13px] font-semibold text-white/[0.72]">
                  Northeast Creative Co.
                </div>
                <div className="mt-0.5 text-[11px] text-white/30">
                  Creative Agency · Philadelphia, PA
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-amber-500">★</span>
                <span className="text-[13px] font-semibold text-white/65">4.5</span>
              </div>
              <div>
                <span className="inline-block rounded-full border border-amber-500/24 bg-amber-500/13 px-[11px] py-[3px] text-[12px] font-bold text-amber-300">
                  71% match
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-[5px] w-[5px] rounded-full bg-white/50 animate-dot-pulse" />
                <span className="h-[5px] w-[5px] rounded-full bg-white/50 animate-dot-pulse-delay-1" />
                <span className="h-[5px] w-[5px] rounded-full bg-white/50 animate-dot-pulse-delay-2" />
                <span className="ml-1 text-[12px] text-white/42">Searching...</span>
              </div>
            </div>
          </div>

          <video
            ref={videoRef}
            className="absolute inset-0 z-10 h-full w-full object-cover"
            src="/videos/webleads-website-match-hero.mp4"
            poster="/videos/webleads-website-match-hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="WebLeads demo showing Website Match search and verified decision maker emails"
          />

          <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 bg-gradient-to-t from-black/55 via-black/15 to-transparent px-5 py-3.5">
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
              {isMuted ? (
                <VolumeX className="h-[15px] w-[15px]" />
              ) : (
                <Volume2 className="h-[15px] w-[15px]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
