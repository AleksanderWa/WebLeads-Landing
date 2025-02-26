import { Check } from "lucide-react"

export function ValueProposition() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl mb-4">
              <span className="text-[#1E1B4B]">3</span>
              <span className="text-[#B44D4D]">h/week</span>
            </h3>
            <p className="text-center text-gray-700">
              Let us handle the tedious work of finding cities and setting up scraping tools, while you focus on growing
              your business.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl mb-4">
              <span className="text-[#1E1B4B]">$5460</span>
              <span className="text-[#B44D4D]">/year</span>
            </h3>
            <p className="text-center text-gray-700">
              With consistent weekly lead delivery, you're not just saving hours, you're cutting unnecessary costs.
            </p>
            <p className="text-sm text-gray-500 mt-2">Explanation: $35/h × 3h = $105/week × 52 weeks = $5460 / year</p>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#B44D4D]">
          We collect, audit, and enrich leads with actionable insights so you can focus on growing your business 📈
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              title: "Effortless Subscription",
              description:
                "Subscribe once, and you're set! We handle the rest by delivering fresh, curated leads straight to your inbox every week. No extra steps, no hassle.",
            },
            {
              title: "Lead Collection",
              description:
                "We gather leads directly from Google Maps, focusing on small businesses that need a new or improved website.",
            },
            {
              title: "Human Review",
              description:
                "Each lead is carefully reviewed by human to ensure accuracy and relevance, no automated filtering here.",
            },
            {
              title: "Website Audit",
              description:
                "We conduct thorough audits on existing websites using PageSpeed Insights to identify areas for improvement.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1">
                <Check className="w-5 h-5 text-[#B44D4D]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}:</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

