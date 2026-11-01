import { Check } from "lucide-react";
import { TODAY_BLOCK } from "@/lib/founding-copy";

export function TodayBlock() {
  return (
    <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-5 flex flex-col sm:flex-row items-start gap-4">
      <div className="w-9 h-9 shrink-0 rounded-full bg-white border border-emerald-200 text-emerald-600 flex items-center justify-center">
        <Check className="w-4 h-4" />
      </div>
      <div>
        <h3 className="text-[17px] font-bold text-emerald-900">{TODAY_BLOCK.heading}</h3>
        <p className="mt-1 text-[14.5px] text-emerald-900/80">{TODAY_BLOCK.line}</p>
        <p className="mt-2 text-[13px] text-emerald-900/70">{TODAY_BLOCK.note}</p>
      </div>
    </div>
  );
}
