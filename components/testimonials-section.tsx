import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "WebLeads has proven to be a powerful lead generation tool. We used to days building prospect lists by hand.",
    name: "Perry",
    role: "Growth Advisor",
    company: "Independent",
    flag: "🇺🇸",
  },
  {
    quote:
      "Before WebLeads it took me plenty of time and effort to research businesses. Now I am just a few clicks away from that result.",
    name: "Market Researcher",
    role: "Professional Research",
    company: "Independent",
    flag: "🇮🇳",
  },
  {
    quote:
      "Hands-free, accurate data without any effort at a great price. The decision-maker contacts are a game changer for our outreach.",
    name: "Farhan",
    role: "Business Owner",
    company: "Independent",
    flag: "🇮🇳",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-primary mb-3">
      <span className="w-5 h-px bg-brand-primary/50" />
      {children}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="customers"
      className="bg-white py-20 md:py-28 border-b border-black/[0.05]"
      aria-labelledby="customers-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel>Customer stories</SectionLabel>
          <h2
            id="customers-title"
            className="text-[32px] md:text-[42px] font-bold tracking-[-0.02em] leading-[1.06] text-balance text-brand-secondary"
          >
            Agencies who stopped building lists by hand.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-pretty text-brand-secondary/65">
            Real feedback from agency owners, freelancers, and in-house sales teams.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((c, i) => (
            <figure
              key={i}
              className="bg-white border border-black/[0.07] rounded-2xl p-7 flex flex-col hover:border-brand-primary/20 transition-colors shadow-[0_1px_0_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-0.5 text-brand-accent mb-4">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="w-[14px] h-[14px] fill-brand-accent" />
                ))}
              </div>
              <blockquote className="text-[15.5px] leading-[1.6] text-brand-secondary font-medium flex-grow text-pretty">
                &ldquo;{c.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-black/[0.06] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-[13px] flex items-center justify-center shrink-0">
                  {c.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-brand-secondary text-[13.5px]">
                    {c.name} <span className="font-normal">{c.flag}</span>
                  </div>
                  <div className="text-[12px] text-brand-secondary/55">
                    {c.role} · {c.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
