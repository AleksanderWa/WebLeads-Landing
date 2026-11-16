import { BENEFITS, HONESTY_LINE } from "@/lib/founding-copy";
import { StatusChip } from "./status-chip";

export function Benefits() {
  return (
    <section className="bg-[#FAF7F5] py-20 md:py-28 border-y border-black/[0.05]" aria-label="Benefits">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-5 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div key={benefit.lead} className="rounded-2xl border border-black/[0.07] bg-white p-7">
              {benefit.chip !== null && (
                <div className="mb-3">
                  <StatusChip kind={benefit.chip} />
                </div>
              )}
              <p className="text-[17px] font-bold text-brand-secondary">{benefit.lead}</p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-brand-secondary/70">
                {benefit.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl mx-auto text-center text-[14px] text-brand-secondary/65">
          {HONESTY_LINE}
        </p>
      </div>
    </section>
  );
}
