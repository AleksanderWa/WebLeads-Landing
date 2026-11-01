import { Check, Clock } from "lucide-react";
import { LIVE_VS_COMING } from "@/lib/founding-copy";
import { SectionLabel } from "./section-label";
import { StatusChip, type ChipKind } from "./status-chip";
import { TodayBlock } from "./today-block";

type ColumnProps = {
  kind: ChipKind;
  caption?: string;
  items: string[];
  className: string;
};

function Column({ kind, caption, items, className }: ColumnProps) {
  const Icon = kind === "live" ? Check : Clock;
  const iconTone = kind === "live" ? "text-emerald-600" : "text-brand-secondary/45";
  return (
    <div className={`rounded-2xl p-7 border bg-white ${className}`}>
      <StatusChip kind={kind} />
      {caption && <p className="mt-3 text-[13.5px] text-brand-secondary/65">{caption}</p>}
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-[14.5px] leading-snug text-brand-secondary/80"
          >
            <Icon className={`w-[15px] h-[15px] mt-0.5 shrink-0 ${iconTone}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LiveVsComing({ showTodayBlock }: { showTodayBlock: boolean }) {
  return (
    <section className="bg-white py-20 md:py-28" aria-label={LIVE_VS_COMING.label}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>{LIVE_VS_COMING.label}</SectionLabel>
        <div className="grid gap-5 lg:grid-cols-3">
          <Column kind="live" items={LIVE_VS_COMING.live} className="border-emerald-200/70" />
          <Column
            kind="coming"
            caption={LIVE_VS_COMING.coming.caption}
            items={LIVE_VS_COMING.coming.items}
            className="border-brand-accent/50"
          />
          <Column
            kind="later"
            caption={LIVE_VS_COMING.later.caption}
            items={LIVE_VS_COMING.later.items}
            className="border-dashed border-brand-secondary/25"
          />
        </div>
        {showTodayBlock && <TodayBlock />}
      </div>
    </section>
  );
}
