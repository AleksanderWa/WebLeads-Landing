import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Competitor {
  name: string
  price: string
  features: string[]
}

interface PricingComparisonProps {
  title: string
  competitors: Competitor[]
  webleadsFeatures: string[]
}

export function PricingComparison({ title, competitors, webleadsFeatures }: PricingComparisonProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-brand-light to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            See how WebLeads compares to expensive alternatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitors.map((competitor, index) => (
            <Card key={index} className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">{competitor.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-destructive">{competitor.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {competitor.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <X className="h-4 w-4 text-destructive flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          <Card className="border-4 border-brand-primary relative shadow-xl">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-secondary px-4 py-1">
              BEST VALUE
            </Badge>
            <CardHeader className="text-center">
              <CardTitle className="text-lg">WebLeads</CardTitle>
              <div className="mt-4">
                <span className="text-5xl font-bold text-brand-primary">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {webleadsFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-brand-primary flex-shrink-0" />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-brand-primary hover:bg-brand-primary-hover">
                <Link href="/#waitlist-form">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 p-6 bg-green-50 rounded-lg border-2 border-green-200">
          <p className="text-2xl font-bold text-green-700 mb-2">
            Save $14,995+/year by switching to WebLeads
          </p>
          <p className="text-gray-600">
            Free forever - no catch, no hidden fees, no monthly limits
          </p>
        </div>
      </div>
    </section>
  )
}
