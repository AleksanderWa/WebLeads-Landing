import { Check, Clock, DollarSign } from "lucide-react"

export function ValueProposition() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-brand-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-primary">
          The Value We Deliver
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center transition-all hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-light rounded-full mb-6">
              <Clock className="w-10 h-10 text-brand-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl mb-4 font-bold">
              <span className="text-brand-secondary">3</span>
              <span className="text-brand-primary"> hours/week</span>
            </h3>
            <p className="text-gray-700 text-lg">
              Let us handle the tedious work of finding cities and setting up scraping tools, while you focus on growing
              your business.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center transition-all hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-light rounded-full mb-6">
              <DollarSign className="w-10 h-10 text-brand-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl mb-4 font-bold">
              <span className="text-brand-secondary">$5,460</span>
              <span className="text-brand-primary"> /year</span>
            </h3>
            <p className="text-gray-700 text-lg">
              With consistent weekly lead delivery, you're not just saving hours, you're cutting unnecessary costs.
            </p>
            <p className="text-sm text-gray-500 mt-3">
              $35/h × 3h = $105/week × 52 weeks = $5,460/year
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-brand-primary">
            We collect, audit, and enrich leads with actionable insights
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
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
              <div key={index} className="flex items-start gap-6 p-4 rounded-lg hover:bg-brand-light/30 transition-colors">
                <div className="shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-accent text-white">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-brand-secondary">{item.title}</h3>
                  <p className="text-gray-600 mt-1 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
