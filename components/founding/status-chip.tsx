import { Check, Clock } from "lucide-react";
import { CHIP_LABELS } from "@/lib/founding-copy";

export type ChipKind = "live" | "coming" | "later";

const SHAPE =
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider";

const LIGHT: Record<ChipKind, string> = {
  live: "border border-emerald-200 bg-emerald-50 text-emerald-800",
  coming: "border border-brand-accent/60 bg-brand-accent/15 text-brand-secondary",
  later: "border border-dashed border-brand-secondary/30 bg-transparent text-brand-secondary/70",
};

const DARK: Record<ChipKind, string> = {
  live: "border border-emerald-300/40 bg-emerald-400/10 text-emerald-200",
  coming: "border border-brand-accent/40 bg-brand-accent/20 text-brand-accent",
  later: "border border-dashed border-white/25 bg-transparent text-white/70",
};

export function StatusChip({ kind, dark = false }: { kind: ChipKind; dark?: boolean }) {
  const Icon = kind === "live" ? Check : Clock;
  return (
    <span className={`${SHAPE} ${(dark ? DARK : LIGHT)[kind]}`}>
      <Icon className="w-3 h-3" />
      {CHIP_LABELS[kind]}
    </span>
  );
}
