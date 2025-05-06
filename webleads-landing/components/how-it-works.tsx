import { Search, Clock, Mail, Download, ArrowRight } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="py-24 px-6 flex flex-col items-center bg-white" id="how-it-works">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-brand-primary">How It Works</h2>
        <p className="text-xl text-brand-secondary text-center mb-16 max-w-2xl mx-auto">
          Streamlined process to help your agency find and convert high-quality leads
        </p>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-brand-accent/30 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative z-10">
            <div className="flex flex-col items-center text-center bg-white/90 p-8 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mb-6 shadow-md">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-secondary">1. Discover Leads</h3>
              <p className="text-gray-600">
                Log in and start your lead search with powerful filters to find exactly the businesses you need.
              </p>
            </div>

            <div className="hidden md:flex absolute left-[25%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center">
              <ArrowRight className="w-8 h-8 text-brand-accent" />
            </div>

            <div className="flex flex-col items-center text-center bg-white/90 p-8 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mb-6 shadow-md">
                <Download className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-secondary">2. Export Leads</h3>
              <p className="text-gray-600">
                Export leads to CSV format and import them directly to your CRM system.
              </p>
            </div>

            <div className="hidden md:flex absolute left-[50%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center">
              <ArrowRight className="w-8 h-8 text-brand-accent" />
            </div>

            <div className="flex flex-col items-center text-center relative bg-white/90 p-8 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mb-6 shadow-md">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -right-2 -top-2 bg-brand-accent text-brand-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                Coming soon
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-secondary">3. Verify Emails</h3>
              <p className="text-gray-600">
                Our system automatically verifies email addresses for higher deliverability rates.
              </p>
            </div>

            <div className="hidden md:flex absolute left-[75%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center">
              <ArrowRight className="w-8 h-8 text-brand-accent" />
            </div>

            <div className="flex flex-col items-center text-center relative bg-white/90 p-8 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mb-6 shadow-md">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -right-2 -top-2 bg-brand-accent text-brand-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                Coming soon
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-secondary">4. Automated Discovery</h3>
              <p className="text-gray-600">
                Define your target business type and we'll automatically collect relevant leads for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
