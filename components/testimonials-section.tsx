import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "WebLeads has proven to be a powerful lead generation tool.",
    name: "Perry",
    role: "Growth Advisor",
    location: "US",
    stars: 5,
  },
  {
    quote: "Before WebLeads it took me plenty of time and effort… now I am just a few clicks away from that result.",
    name: "Market Researcher",
    role: "Professional Research",
    location: "India",
    stars: 5,
  },
  {
    quote: "Hands-free, accurate data without any effort at a great price.",
    name: "Farhan",
    role: "Business Owner",
    location: "India",
    stars: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-brand-primary/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary text-center mb-4">
          What our users say
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Real feedback from real users during our beta.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border-2 border-brand-primary/15 rounded-xl p-7 flex flex-col shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-brand-accent flex-shrink-0" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
              </div>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed flex-grow mb-5 font-medium">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-brand-primary/10 pt-4">
                <p className="font-bold text-brand-secondary">{t.name}</p>
                <p className="text-sm text-gray-500">
                  {t.role} · {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
