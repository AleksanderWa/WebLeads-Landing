import { Check, Clock, Sparkles } from "lucide-react";
import type { FoundingState } from "@/lib/founding";
import { OFFER_ITEMS, TWO_TIER_PRICE, type OfferItem } from "@/lib/founding-copy";
import { FoundingCta } from "./founding-cta";
import { SeatCounter } from "./seat-counter";
import { StatusChip, type ChipKind } from "./status-chip";
import { UnderCta } from "./under-cta";

const SOLD_OUT_TEXT = "All founding spots are taken";

function itemChip(kind: OfferItem["kind"]): ChipKind | null {
  switch (kind) {
    case "live":
      return "live";
    case "coming":
      return "coming";
    case "later":
      return "later";
    default:
      return null;
  }
}

function OfferRow({ item }: { item: OfferItem }) {
  const chip = itemChip(item.kind);
  const Icon = item.kind === "term" || item.kind === "live" ? Check : Clock;
  const tone = item.kind === "term" || item.kind === "live" ? "text-brand-accent" : "text-white/45";
  return (
    <li className="flex items-start gap-2.5 text-[14px] leading-snug text-white/85">
      <Icon className={`w-[14px] h-[14px] mt-0.5 shrink-0 ${tone}`} />
      <span>
        {item.text}
        {chip && (
          <span className="block mt-1.5 sm:inline sm:mt-0 sm:ml-2">
            <StatusChip kind={chip} dark />
          </span>
        )}
      </span>
    </li>
  );
}

function PriceRow({ price, soldOut }: { price: number | null; soldOut: boolean }) {
  if (soldOut) {
    return <p className="mt-2 text-[22px] sm:text-[26px] font-bold leading-tight text-white">{SOLD_OUT_TEXT}</p>;
  }
  if (price === null) {
    return (
      <div className="mt-2">
        <p className="text-[22px] sm:text-[26px] font-bold leading-tight text-white">
          {TWO_TIER_PRICE}
        </p>
        <p className="mt-1 text-[12.5px] text-white/60">Per year, paid upfront</p>
      </div>
    );
  }
  return (
    <div className="mt-2">
      <div className="flex items-baseline gap-1">
        <span className="text-[42px] sm:text-[48px] font-bold tracking-[-0.02em] leading-none text-white">
          ${price}
        </span>
        <span className="text-[13.5px] text-white/55">/year</span>
      </div>
      <p className="mt-1 text-[12.5px] text-white/60">Paid upfront</p>
    </div>
  );
}

export function OfferCard({ state }: { state: FoundingState }) {
  const items = OFFER_ITEMS.filter((item) =>
      (!item.todayOnly || state.showTodayBlock) && !(item.hideWhenSoldOut && state.soldOut));
  return (
    <section
      id="offer"
      className="bg-[#FAF7F5] py-20 md:py-28 border-y border-black/[0.05]"
      aria-label="Founding Member offer"
    >
      <div className="max-w-xl mx-auto px-6">
        <div className="relative rounded-2xl p-6 sm:p-9 bg-brand-secondary text-white border border-brand-secondary shadow-[0_30px_60px_-20px_rgba(45,49,66,0.4)]">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-brand-accent px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-secondary">
            <Sparkles className="w-3 h-3" />
            Founding Member
          </div>
          <PriceRow price={state.currentPrice} soldOut={state.soldOut} />
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-[10.5px] uppercase tracking-[0.14em] font-bold mb-3 text-white/45">
              What a founding spot includes
            </p>
            <ul className="space-y-3">
              {items.map((item) => (
                <OfferRow key={item.text} item={item} />
              ))}
            </ul>
          </div>
          <div className="mt-8">
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
