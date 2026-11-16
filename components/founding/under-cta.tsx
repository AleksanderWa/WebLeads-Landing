import { Shield } from "lucide-react";
import { getUnderCta } from "@/lib/founding-copy";

export function UnderCta({
  variant,
  hasCounter,
  soldOut,
}: {
  variant: "light" | "dark";
  hasCounter: boolean;
  soldOut: boolean;
}) {
  const spacing = hasCounter ? "mt-3" : "mt-4";
  if (variant === "dark") {
    return (
      <p className={`${spacing} text-[12.5px] leading-snug text-white/50 text-center`}>
        {getUnderCta(soldOut)}
      </p>
    );
  }
  return (
    <p
      className={`${spacing} text-[13px] leading-snug text-brand-secondary/55 max-w-[52ch] mx-auto`}
    >
      <Shield className="w-3 h-3 text-brand-secondary/55 inline mr-1.5 -mt-0.5" />
      {getUnderCta(soldOut)}
    </p>
  );
}
