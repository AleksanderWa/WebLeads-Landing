"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"
import { SubscriptionModal } from "./subscription-modal"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    subtitle: "No credit card required",
    highlighted: false,
    features: [
      "2 searches (up to 200 results each)",
      "10 DM email unlocks",
      "20 email verifications",
      "Basic business data (name, address, phone, website, generic email)",
      "CSV export",
      "Lifetime limits for trial",
    ],
    cta: "Get Started Free",
    href: "https://app.webleads.site/register",
  },
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    subtitle: null,
    highlighted: false,
    features: [
      "1 search per day (up to 800 results)",
      "50 DM email unlocks/month",
      "500 email verifications/month",
      "Decision maker identification",
      "CSV export",
    ],
    overage: "Top-ups from $2 (DM) · $4 (verifications). Valid 6 months.",
    cta: "Choose Starter",
    href: null,
  },
  {
    name: "Growth",
    price: "$79",
    period: "/month",
    subtitle: null,
    highlighted: true,
    badge: "Most Popular",
    features: [
      "3 searches per day (up to 1,500 results)",
      "200 DM email unlocks/month",
      "2,000 email verifications/month",
      "All Starter features",
      "Bulk operations",
      "CRM export integrations (coming soon)",
    ],
    overage: "Top-ups from $2 (DM) · $4 (verifications). Valid 6 months.",
    cta: "Choose Growth",
    href: null,
  },
  {
    name: "Scale",
    price: "$149",
    period: "/month",
    subtitle: null,
    highlighted: false,
    features: [
      "7 searches per day (up to 2,500 results)",
      "600 DM email unlocks/month",
      "6,000 email verifications/month",
      "All Growth features",
      "White-label exports",
      "Priority support",
    ],
    overage: "Top-ups from $2 (DM) · $4 (verifications). Valid 6 months.",
    cta: "Choose Scale",
    href: null,
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
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Pay only for verified emails — failed lookups cost you nothing. Start free, scale when you&apos;re ready.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`rounded-xl flex flex-col relative ${
                  plan.highlighted
                    ? "border-2 border-brand-accent shadow-lg scale-[1.02]"
                    : "border-2 border-brand-primary/20"
                }`}
              >
                {plan.highlighted && plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-brand-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <h3 className="text-xl font-semibold text-brand-primary">{plan.name}</h3>
                  <div className="text-3xl font-bold text-brand-secondary">
                    {plan.price}
                    {plan.period && <span className="text-base font-normal text-gray-500">{plan.period}</span>}
                  </div>
                  {plan.subtitle && (
                    <p className="text-sm text-brand-accent font-medium mt-1">{plan.subtitle}</p>
                  )}
                </CardHeader>

                <CardContent className="space-y-3 flex-grow">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-left text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.overage && (
                    <p className="text-xs text-gray-500 pt-2 border-t border-gray-100 text-left">
                      {plan.overage}
                    </p>
                  )}
                </CardContent>

                <CardFooter>
                  {plan.href ? (
                    <a href={plan.href} className="w-full">
                      <Button
                        className={`w-full ${
                          plan.highlighted
                            ? "bg-brand-accent hover:bg-brand-accent/90 text-white"
                            : "bg-brand-primary hover:bg-brand-primaryHover text-white"
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </a>
                  ) : (
                    <Button
                      className={`w-full ${
                        plan.highlighted
                          ? "bg-brand-accent hover:bg-brand-accent/90 text-white"
                          : "bg-brand-primary hover:bg-brand-primaryHover text-white"
                      }`}
                      onClick={() => handleSubscribe(plan.name)}
                    >
                      {plan.cta}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pay-per-success notes */}
          <div className="mt-10 max-w-2xl mx-auto text-sm text-gray-500 space-y-1">
            <p>
              <strong className="text-brand-primary">Pay only for verified emails</strong> — failed lookups and
              bounced addresses cost $0. Catch-all domains are charged at half price.
            </p>
            <p>Purchased top-ups valid 6 months. Monthly included allowances reset each billing period.</p>
          </div>
        </div>
      </section>

      <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedPlan={selectedPlan} />
    </>
  )
}
