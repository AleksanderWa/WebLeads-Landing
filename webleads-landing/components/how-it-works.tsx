import { Banknote, Search, ClipboardCheck, Mail, SendHorizontal } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="py-16 px-4" id="how-it-works">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#B44D4D]">HOW IT WORKS?</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-[#B44D4D] rounded-lg flex items-center justify-center mb-4">
            <Banknote className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Choose Your Plan</h3>
          <p className="text-gray-600">(Coming soon)</p>
          <p className="mt-2">Select one of our 3 subscription plans based on your business needs and goals.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-[#B44D4D] rounded-lg flex items-center justify-center mb-4">
            <Search className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">We Source New Leads Weekly</h3>
          <p className="mt-2">
            Every week, we gather new leads by systematically going through U.S. cities on Google Maps, one by one.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-[#B44D4D] rounded-lg flex items-center justify-center mb-4">
            <ClipboardCheck className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Enrich leads</h3>
          <p className="mt-2">
            Each lead is enriched with a detailed audit of their current website's performance, technology stack, and
            other critical data.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-[#B44D4D] rounded-lg flex items-center justify-center mb-4">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Verify Emails</h3>
          <p className="mt-2">
            For all the leads that have email addresses we verify if email address is valid and check if it is
            reachable.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
        <div className="w-20 h-20 bg-[#B44D4D] rounded-lg flex items-center justify-center mb-4">
          <SendHorizontal className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2">Receive Your List Every Tuesday</h3>
        <p className="text-center mt-2">
          We deliver the updated list directly to your inbox every Tuesday at 10 AM EST
        </p>
      </div>
    </section>
  )
}

