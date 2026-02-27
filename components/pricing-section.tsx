"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, CheckCircle2, Sparkles, TrendingUp, Shield, HelpCircle } from "lucide-react"
import { SubscriptionModal } from "./subscription-modal"

const plans = [
  {
    name: "Trial",
    price: "$0",
    period: "",
    subtitle: "No credit card required · One-time trial",
    highlighted: false,
    usageLimitCount: 3,
    features: [
      "2 searches · up to 500 results per search",
      "100 decision maker email unlocks",
      "200 email verifications",
      "Full feature access",
    ],
    cta: "Get Started Free",
    href: "https://app.webleads.site/register",
  },
  {
    name: "Starter",
    price: "$29.00",
    period: "/month",
    subtitle: "For solo prospectors",
    highlighted: false,
    usageLimitCount: 4,
    features: [
      "1 search / day · up to 800 results per search",
      "500 decision maker unlocks / month",
      "3,000 email verifications / month",
      "1 active search",
      "Full feature access",
    ],
    cta: "Start Finding Leads",
    href: null,
  },
  {
    name: "Growth",
    price: "$79.00",
    period: "/month",
    subtitle: "For sales teams",
    highlighted: true,
    badge: "Most Popular",
    usageLimitCount: 4,
    features: [
      "3 searches / day · up to 1,500 results per search",
      "3,000 decision maker unlocks / month",
      "15,000 email verifications / month",
      "1 active search",
      "All from Starter",
      "Priority support",
    ],
    highlights: [
      { icon: "trending", text: "3× higher limits than Starter", faq: null },
    ],
    cta: "Get Started with Growth",
    href: null,
  },
  {
    name: "Scale",
    price: "$199.00",
    period: "/month",
    subtitle: "For agencies & high volume",
    highlighted: false,
    usageLimitCount: 4,
    features: [
      "7 searches / day · up to 2,500 results per search",
      "7,000 decision maker unlocks / month",
      "30,000 email verifications / month",
      "Up to 2 active searches",
      "All from Growth",
    ],
    highlights: [
      { icon: "trending", text: "2× higher limits than Growth", faq: null },
    ],
    cta: "Go Full Scale",
    href: null,
  },
]

const featureFaqMap: Record<string, string> = {
  "decision maker unlocks": "dm-unlocks",
  "decision maker email unlocks": "dm-unlocks",
  "email verifications": "email-verification",
}

function FeatureText({ text, className }: { text: string; className: string }) {
  const lowerText = text.toLowerCase()
  const matchedKey = Object.keys(featureFaqMap).find((key) => lowerText.includes(key))
  
  return (
    <span className={className}>
      {text}
      {matchedKey && (
        <a
          href={`#faq-${featureFaqMap[matchedKey]}`}
          className="inline-flex items-center ml-1.5 text-brand-primary/50 hover:text-brand-primary transition-colors"
          title="Learn more"
        >
          <HelpCircle className="w-4 h-4" />
        </a>
      )}
    </span>
  )
}

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
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start free, scale when you&apos;re ready.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-4 mb-12 max-w-2xl mx-auto flex items-center justify-center gap-3">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <p className="text-base font-semibold text-green-800">
              Pay only for verified emails — failed lookups and bounced addresses cost $0
            </p>
          </div>

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
                  {typeof plan.usageLimitCount === "number" && plan.usageLimitCount > 0 ? (
                    <>
                      <p className="text-sm font-semibold text-brand-secondary text-left">Usage limits</p>
                      {plan.features.slice(0, plan.usageLimitCount).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                          <FeatureText
                            text={feature}
                            className={
                              feature === "Up to 2 active searches"
                                ? "text-sm text-left font-semibold text-brand-primary"
                                : "text-sm text-left text-gray-700"
                            }
                          />
                        </div>
                      ))}
                      <hr className="border-t border-gray-200 my-3" />
                      <p className="text-sm font-semibold text-brand-secondary text-left">Includes</p>
                      {plan.features.slice(plan.usageLimitCount).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                          <FeatureText
                            text={feature}
                            className={
                              feature === "Up to 2 active searches"
                                ? "text-sm text-left font-semibold text-brand-primary"
                                : "text-sm text-left text-gray-700"
                            }
                          />
                        </div>
                      ))}
                    </>
                  ) : (
                    plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                        <FeatureText
                          text={feature}
                          className={
                            feature === "Up to 2 active searches"
                              ? "text-sm text-left font-semibold text-brand-primary"
                              : "text-sm text-left text-gray-700"
                          }
                        />
                      </div>
                    ))
                  )}
                  {"highlights" in plan && (plan as any).highlights && (
                    <>
                      <hr className="border-t border-gray-200 my-3" />
                      {(plan as any).highlights.map((h: { icon: string; text: string; faq: string | null }, idx: number) => (
                        <div key={idx} className="flex items-start gap-2">
                          {h.icon === "trending" ? (
                            <TrendingUp className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                          ) : (
                            <Shield className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          )}
                          <span className="text-sm text-left font-semibold text-brand-primary">
                            {h.text}
                            {h.faq && (
                              <a
                                href={`#faq-${h.faq}`}
                                className="inline-flex items-center ml-1 text-brand-accent hover:text-brand-primary transition-colors"
                                title="Learn more"
                              >
                                <HelpCircle className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </span>
                        </div>
                      ))}
                    </>
                  )}
                </CardContent>

                <CardFooter className="flex-col gap-2">
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
                    <>
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
                      <p className="text-xs text-gray-400">Cancel anytime — no contracts</p>
                    </>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Shared features */}
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-brand-secondary mb-4">All plans include</p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-brand-primary/20 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-brand-secondary">Decision maker contacts (names, roles &amp; emails)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-brand-primary/20 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-brand-secondary">Verified business emails (pay only for valid ones)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-brand-primary/20 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-brand-secondary">Phone numbers &amp; addresses</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-brand-primary/20 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-brand-secondary">Google ratings &amp; reviews data</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-brand-primary/20 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-brand-secondary">Social media profiles</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-brand-primary/20 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-brand-secondary">CSV / Excel export</span>
              </div>
              <a href="#faq-email-confidence-badges" className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-brand-primary/20 shadow-sm hover:border-brand-primary/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-brand-secondary">Email confidence badges</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedPlan={selectedPlan} />
    </>
  )
}
