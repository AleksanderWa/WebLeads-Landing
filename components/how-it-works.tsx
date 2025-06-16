import { Search, Clock, Download, Mail, Bot, Filter } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      title: "Create Search",
      description: (
        <>
          Create search query for business type and location to find leads.
          <br />
          🌍 All world cities supported
        </>
      ),
      icon: <Search className="w-5 h-5" />,
      active: true,
    },
    {
      title: "Data Scraping Process",
      description: "Our Google Maps scraper will scan selected area and find business data, emails, and socials for your B2B leads",
      icon: <Clock className="w-5 h-5" />,
      active: true,
    },
    {
      title: "Filter Leads",
      description: "Filter collected leads using our powerful filters to find the best matches",
      icon: <Filter className="w-5 h-5" />,
      active: true,
    },
    {
      title: "Export Leads",
      description: "When search is done you can export CSV file with collected data",
      icon: <Download className="w-5 h-5" />,
      active: true,
    },
    {
      title: "Verify Emails",
      description: "Our system automatically verifies email addresses for higher deliverability rates.",
      icon: <Mail className="w-5 h-5" />,
      active: false,
      comingSoon: true,
    },
    {
      title: "Automated Discovery",
      description: "Define your target business type and we'll automatically collect relevant leads for you.",
      icon: <Bot className="w-5 h-5" />,
      active: false,
      comingSoon: true,
    },
  ]

  return (
    <section className="py-16 px-4" id="how-it-works">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-primary">How It Works</h2>

        <div className="flex justify-center">
          <div className="relative">
            {steps.map((step, index) => (
              <div key={index} className="flex mb-12 last:mb-0 relative">
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-6 top-12 w-0.5 h-12 ${
                      step.active && steps[index + 1].active ? "bg-brand-primary" : "bg-gray-300"
                    }`}
                  ></div>
                )}

                {/* Circle with icon */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    step.active ? "bg-brand-primary text-white" : "bg-white text-gray-500 border-2 border-gray-300"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="ml-6 text-left">
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold text-brand-secondary">{step.title}</h3>
                    {step.comingSoon && (
                      <span className="ml-2 bg-brand-accent text-brand-secondary text-xs font-bold px-2 py-1 rounded-full transform rotate-0 shadow-sm">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mt-1 max-w-md">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
