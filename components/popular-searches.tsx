import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function PopularSearches() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-brand-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
            WebLeads - One tool to find all the data
          </h2>
          <p className="text-xl text-gray-600">
            See how WebLeads can help with your specific prospecting goals — phone numbers, emails, local businesses, and more.
          </p>
        </div>

        <div className="flex justify-center max-w-2xl mx-auto">
          {/* Get Business Phone Numbers Use Case */}
          <Card className="border-2 border-brand-accent hover:border-brand-primary transition-all shadow-lg hover:shadow-xl group w-full md:w-96">
            <CardContent className="pt-6">
              <Badge className="mb-4 bg-brand-accent text-brand-secondary">
                🔥 Most Popular Use Case
              </Badge>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-brand-light rounded-lg p-3">
                  <Phone className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary">
                  Get Business Phone Numbers
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4">
                Search any business type, any location - get business phone numbers
              </p>

              <div className="text-sm text-gray-500 mb-4">
                💰 Starting at $1.00 per 1,000 leads
              </div>

              <Button 
                asChild
                className="w-full bg-brand-primary hover:bg-brand-primary-hover group-hover:scale-105 transition-transform"
              >
                <Link href="/business-phone-numbers">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  )
}
