import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="final-cta-title">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-secondary via-[#33384E] to-brand-secondary text-white px-10 py-16 md:px-16 md:py-20 lg:px-20 lg:py-24 text-center">
          <div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-primary/25 blur-[130px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 -left-32 w-[400px] h-[400px] rounded-full bg-brand-accent/15 blur-[120px] pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-accent mb-3">
              <span className="w-5 h-px bg-brand-accent/50" />
              Get started now
            </div>
            <h2
              id="final-cta-title"
              className="text-[32px] md:text-[46px] font-bold tracking-[-0.02em] leading-[1.06] text-balance max-w-xl mx-auto mt-1 text-white"
            >
              Set up your first search in the next 60 seconds.
            </h2>
            <p className="mt-4 text-[16.5px] text-white/65 max-w-lg mx-auto text-pretty">
              No credit card. No sales call. No CSV to upload. Just type a niche and a city.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://app.webleads.site/register"
                className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-xl bg-brand-accent text-brand-secondary font-bold text-[15px] hover:bg-brand-accent-hover transition-colors shadow-lg"
              >
                Start free, no card needed
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-xl bg-white/[0.08] text-white font-semibold text-[15px] hover:bg-white/[0.13] transition-colors border border-white/[0.12]"
              >
                View pricing
              </a>
            </div>
            <p className="mt-4 text-[12.5px] text-white/40">
              2 free searches · 500 results each · no credit card
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
