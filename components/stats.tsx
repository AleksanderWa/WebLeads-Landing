export function Stats() {
  const stats = [
    { v: "452K+", l: "Businesses found" },
    { v: "315K+", l: "Verified emails delivered" },
    { v: "98%", l: "Avg. email deliverability" },
    { v: "195", l: "Countries on Google Maps" },
  ];
  return (
    <section className="bg-brand-secondary py-16 md:py-20" aria-label="Platform statistics">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.08] rounded-2xl overflow-hidden border border-white/[0.08]">
          {stats.map((s) => (
            <div key={s.l} className="bg-brand-secondary px-8 py-10 text-center">
              <div className="text-[42px] md:text-[52px] font-bold text-white tracking-[-0.02em] leading-none">
                {s.v}
              </div>
              <div className="mt-3 text-[12.5px] text-white/55 uppercase tracking-[0.14em] font-semibold">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
