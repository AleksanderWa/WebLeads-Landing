import type { FoundingCounter } from "@/lib/founding";

export function SeatCounter({
  counter,
  variant,
}: {
  counter: FoundingCounter | null;
  variant: "light" | "dark";
}) {
  if (counter === null) return null;
  const tone =
    variant === "light"
      ? "border-brand-primary/15 bg-brand-primary/[0.06] text-brand-primary"
      : "border-brand-accent/30 bg-brand-accent/10 text-brand-accent";
  const dot = variant === "light" ? "bg-brand-primary" : "bg-brand-accent";
  const tail = counter.price === 199 ? ", then $249" : "";
  return (
    <div className="mt-4 flex justify-center">
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] font-semibold ${tone}`}
      >
        <span aria-hidden="true" className={`w-1.5 h-1.5 rounded-full ${dot}`} />
        <span>
          <strong className="font-bold">{counter.count}</strong> of {counter.total} left at $
          {counter.price}
          {tail}
        </span>
      </span>
    </div>
  );
}
