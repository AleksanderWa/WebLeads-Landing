import { EXAMPLE_PROMPTS, PROMPTS_LABEL } from "@/lib/founding-copy";

export function PromptExamples() {
  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="founding-prompts">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          id="founding-prompts"
          className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-primary mb-5"
        >
          <span className="w-5 h-px bg-brand-primary/50" />
          {PROMPTS_LABEL}
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {EXAMPLE_PROMPTS.map((prompt) => (
            <div
              key={prompt}
              className="rounded-xl border border-black/[0.09] bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] flex items-start gap-3"
            >
              <span aria-hidden="true" className="font-mono text-brand-primary text-[14px] select-none">
                &gt;
              </span>
              <p className="font-mono text-[14px] leading-snug text-brand-secondary">{prompt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
