import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Pay-As-You-Go",
    price: "No monthly fee",
    features: ["$X per lead", "Basic filtering options", "Ideal for occasional use"],
    cta: "Start Now",
  },
  {
    name: "Starter",
    price: "$49",
    features: [
      "100 on-demand lead credits/month",
      "$X-1 per additional lead",
      "Basic filtering options",
      "1 saved custom filter",
      "Email support",
    ],
    cta: "Choose Starter",
  },
  {
    name: "Growth",
    price: "$149",
    features: [
      "350 on-demand lead credits/month",
      "$X-2 per additional lead",
      "Advanced filtering options",
      "3 saved custom filters",
      "Priority email support",
      "Weekly industry insights",
    ],
    cta: "Choose Growth",
  },
  {
    name: "Pro",
    price: "$299",
    features: [
      "800 on-demand lead credits/month",
      "$X-3 per additional lead",
      "Advanced filtering options",
      "5 saved custom filters",
      "Priority email and chat support",
      "Weekly industry insights",
      "Monthly strategy call",
    ],
    cta: "Choose Pro",
  },
]

export function OnDemandPricing() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B44D4D] mb-4">On-Demand Lead Generation</h2>
        <p className="text-xl text-gray-600 mb-12">
          Get the leads you need, when you need them. Choose the plan that fits your business.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="border-2 border-[#B44D4D]/20 rounded-xl">
              <CardHeader>
                <h3 className="text-xl font-semibold text-[#B44D4D]">{plan.name}</h3>
                <div className="text-3xl font-bold">
                  {plan.price}
                  {plan.name !== "Pay-As-You-Go" && <span className="text-base font-normal">/mo</span>}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#DD4B39] hover:bg-[#C23B2A] text-white">{plan.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#B44D4D] mb-4">Enterprise Plan</h3>
          <p className="text-lg text-gray-600 mb-6">
            Need a custom solution? Our Enterprise Plan offers unlimited leads and dedicated support.
          </p>
          <Button className="bg-[#DD4B39] hover:bg-[#C23B2A] text-white text-lg px-8 py-3">Contact Sales</Button>
        </div>
      </div>
    </section>
  )
}
