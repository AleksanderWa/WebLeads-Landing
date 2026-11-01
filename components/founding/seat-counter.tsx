export function SeatCounter({
  text,
  variant,
}: {
  text: string | null;
  variant: "light" | "dark";
}) {
  if (text === null) return null;
  const tone =
    variant === "light"
      ? "border-brand-primary/15 bg-brand-primary/[0.06] text-brand-primary"
      : "border-brand-accent/30 bg-brand-accent/10 text-brand-accent";
  const dot = variant === "light" ? "bg-brand-primary" : "bg-brand-accent";
  const [count, ...rest] = text.split(" ");
  return (
    <div className="mt-4 flex justify-center">
      <span
        aria-live="off"
        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] font-semibold ${tone}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
        <span>
          <strong className="font-bold">{count}</strong> {rest.join(" ")}
        </span>
      </span>
    </div>
  );
}
