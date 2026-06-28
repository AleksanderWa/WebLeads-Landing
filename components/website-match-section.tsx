import { ArrowRight, BriefcaseBusiness, SearchCheck, Target } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-primary mb-3">
      <span className="w-5 h-px bg-brand-primary/50" />
      {children}
    </div>
  );
}

export function WebsiteMatchSection() {
  const steps = [
    {
      icon: <SearchCheck className="w-5 h-5" />,
      title: "Search the market.",
      body: "Start with a business type and city, like HVAC contractors in Austin.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Tell WebLeads what should be on their site.",
      body: "Add the offer signal you care about, like emergency service, home services, or insurance claims.",
    },
    {
      icon: <BriefcaseBusiness className="w-5 h-5" />,
      title: "Work the best-fit prospects first.",
      body: "WebLeads checks the websites, ranks the strongest matches, and lets you enrich only the contacts worth targeting.",
    },
  ];

  const examples = [
    "HVAC companies that mention emergency service",
    "Agencies that serve home-service clients",
    "Roofers that mention insurance claims",
  ];

  return (
    <section
      id="website-match"
      className="bg-[#FAF7F5] py-20 md:py-28 border-b border-black/[0.05]"
      aria-labelledby="website-match-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          <div>
            <SectionLabel>Website Match</SectionLabel>
            <h2
              id="website-match-title"
              className="text-[32px] md:text-[42px] font-bold tracking-[-0.02em] leading-[1.06] text-balance text-brand-secondary"
            >
              Find businesses by what their website actually says.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-pretty text-brand-secondary/65">
              A Maps category tells you what a business is. Their website tells you if they fit your pitch. Website Match helps you find the companies most likely to care about your offer.
            </p>
            <a
              href="https://app.webleads.site/register"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-[14px] font-bold text-white shadow-[0_6px_24px_-6px_rgba(138,48,51,0.45)] transition hover:bg-brand-primary-hover"
            >
              Find matched leads <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-white border border-black/[0.07] rounded-2xl p-5 shadow-[0_20px_40px_-28px_rgba(45,49,66,0.35)]"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-primary/[0.08] text-brand-primary flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-[16px] font-bold text-brand-secondary leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-brand-secondary/65">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-brand-primary/10 bg-white px-5 py-4">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-primary mb-3">
            Example searches
          </p>
          <div className="flex flex-wrap gap-2">
            {examples.map((example) => (
              <span
                key={example}
                className="rounded-full border border-brand-primary/15 bg-brand-primary/[0.05] px-3 py-1.5 text-[13px] font-medium text-brand-secondary"
              >
                {example}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
