"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"
import { SubscriptionModal } from "./subscription-modal"

const plans = [
  {
    name: "Free",
    price: "$0",
    searches: 1,
    features: ["1 Small search/day", "No filtering options", "Basic lead information", "No credit card required"],
    cta: "Start Free",
  },
  {
    name: "Starter",
    price: "$15",
    yearlyPrice: "$144",
    searches: 5,
    features: [
      "5 Big searches/day",
      "5 Small searches/day",
      "Basic filtering options",
      "Detailed lead information",
      "Email support",
    ],
    cta: "Choose Starter",
  },
  {
    name: "Professional",
    price: "$39",
    yearlyPrice: "$375",
    searches: 15,
    features: [
      "15 Big searches/day",
      "15 Small searches/day",
      "Advanced filtering options",
      "Comprehensive lead details",
      "Priority email support",
      "Weekly insights report",
    ],
    cta: "Choose Professional",
  },
  {
    name: "Agency",
    price: "$79",
    yearlyPrice: "$758",
    searches: 30,
    features: [
      "30 Big searches/day",
      "30 Small searches/day",
      "Premium filtering options",
      "Full lead analytics",
      "Priority phone & email support",
      "Monthly strategy call",
      "API access",
    ],
    cta: "Choose Agency",
  },
]

export function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string>()

  const handleSubscribe = (planName: string) => {
    setSelectedPlan(planName)
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="py-16 px-4 bg-offwhite">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Choose Your Lead Generation Plan</h2>
          <p className="text-xl text-gray-600 mb-12">
            From free daily searches to powerful agency tools, we have a plan for every need.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <Card key={plan.name} className="border-2 border-brand-primary/20 rounded-xl flex flex-col">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-brand-primary">{plan.name}</h3>
                  <div className="text-3xl font-bold text-brand-secondary">
                    {plan.price}
                    {plan.price !== "$0" && <span className="text-base font-normal">/mo</span>}
                  </div>
                  {plan.yearlyPrice && <p className="text-sm text-gray-600">or {plan.yearlyPrice}/year</p>}
                  <p className="text-sm text-gray-600 mt-2">
                    {plan.searches} {plan.searches === 1 ? "search" : "searches"}/day
                  </p>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-brand-accent flex-shrink-0" />
                      <span className="text-sm text-left">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-brand-primary hover:bg-brand-primaryHover text-white"
                    onClick={() => handleSubscribe(plan.name)}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-brand-primary mb-4">Need More?</h3>
            <p className="text-lg text-gray-600 mb-6">
              For larger teams or specific requirements, we offer custom enterprise solutions.
            </p>
            <Button
              className="bg-brand-primary hover:bg-brand-primaryHover text-white text-lg px-8 py-3"
              onClick={() => handleSubscribe("Enterprise")}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedPlan={selectedPlan} />
    </>
  )
}
