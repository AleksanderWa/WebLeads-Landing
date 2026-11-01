import type { FoundingState } from "@/lib/founding";
import { FoundingCta } from "./founding-cta";
import { SeatCounter } from "./seat-counter";
import { UnderCta } from "./under-cta";

export function ClosingCta({ state }: { state: FoundingState }) {
  return (
    <section className="bg-white pb-20 md:pb-28" aria-label="Founding Member">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-secondary via-[#33384E] to-brand-secondary text-white px-6 py-12 md:px-16 md:py-16 text-center">
          <div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-primary/25 blur-[130px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 -left-32 w-[400px] h-[400px] rounded-full bg-brand-accent/15 blur-[120px] pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative max-w-sm mx-auto">
            <FoundingCta variant="dark" state={state} />
            <SeatCounter text={state.counterText} variant="dark" />
            <UnderCta
              variant="dark"
              hasCounter={state.counterText !== null}
              soldOut={state.soldOut}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
