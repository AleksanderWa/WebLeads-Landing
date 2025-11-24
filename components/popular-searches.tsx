import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, Home, Mail, MapPin, TrendingUp } from "lucide-react"
import Link from "next/link"

export function PopularSearches() {
  return (
    <>
      {/* Most Popular Searches Section - COMMENTED OUT FOR LATER USE
      <section className="py-16 px-4 bg-gradient-to-b from-white to-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
              Most popular searches
            </h2>
            <p className="text-xl text-gray-600">
              Discover the most sought-after lead types and contact databases
            </p>
          </div>

          <div className="flex justify-center max-w-2xl mx-auto">
            <Card className="border-2 hover:border-brand-primary transition-all shadow-lg hover:shadow-xl group w-full md:w-96">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-brand-secondary text-white">
                  🏠 From Google Maps
                </Badge>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-brand-light rounded-lg p-3">
                    <Home className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary">
                    Real Estate Leads
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Find any real estate agent or broker listed on Google Maps with verified contact data
                </p>

                <div className="text-sm text-gray-500 mb-4">
                  💰 Perfect for mortgage lenders & insurance agents
                </div>

                <Button 
                  asChild
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover group-hover:scale-105 transition-transform"
                >
                  <Link href="/real-estate-leads">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}

      {/* One Tool Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
              One tool to find all the data
            </h2>
            <p className="text-xl text-gray-600">
              See how WebLeads can help with your specific prospecting goals — phone numbers, emails, local businesses, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Business Phone Numbers */}
            <Card className="border-2 border-brand-accent hover:border-brand-primary transition-all shadow-lg hover:shadow-xl group">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-brand-accent text-brand-secondary">
                  🌍 Any Business Type
                </Badge>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-brand-light rounded-lg p-3">
                    <Phone className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary">
                    Business Phone Numbers
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Search any business type, any location - get verified phone numbers with emails
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

            {/* Email Verification Tool */}
            <Card className="border-2 hover:border-brand-primary transition-all shadow-lg hover:shadow-xl group">
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-4">
                  <Badge className="bg-green-500 text-white">
                    ✅ Email Verification
                  </Badge>
                  <Badge className="bg-orange-500 text-white">
                    Coming Soon
                  </Badge>
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-brand-light rounded-lg p-3">
                    <Mail className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary">
                    Email Verification Tool
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Search Google Maps and get verified email addresses automatically - 95%+ accuracy with FREE SMTP verification
                </p>

                <div className="text-sm text-gray-500 mb-4">
                  💰 No extra charge for verification
                </div>

                <Button 
                  asChild
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover group-hover:scale-105 transition-transform"
                >
                  <Link href="/email-verification-tool">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Real Estate Leads */}
            <Card className="border-2 hover:border-brand-primary transition-all shadow-lg hover:shadow-xl group">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-brand-secondary text-white">
                  🏠 Real Estate Specialists
                </Badge>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-brand-light rounded-lg p-3">
                    <Home className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary">
                    Real Estate Leads
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Find any real estate agent or broker listed on Google Maps with verified contact data
                </p>

                <div className="text-sm text-gray-500 mb-4">
                  💰 Perfect for mortgage lenders & insurance agents
                </div>

                <Button 
                  asChild
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover group-hover:scale-105 transition-transform"
                >
                  <Link href="/real-estate-leads">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Email Finder Tools */}
            <Card className="border-2 hover:border-brand-primary transition-all shadow-lg hover:shadow-xl group">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-blue-500 text-white">
                  📧 Email Finder
                </Badge>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-brand-light rounded-lg p-3">
                    <Mail className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary">
                    Email Finder Tools
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Find verified business and owner emails from Google Maps and company websites - 95%+ accuracy
                </p>

                <div className="text-sm text-gray-500 mb-4">
                  💰 Perfect for cold email & B2B prospecting
                </div>

                <Button 
                  asChild
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover group-hover:scale-105 transition-transform"
                >
                  <Link href="/email-finder-tools">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Find Email Addresses */}
            <Card className="border-2 hover:border-brand-primary transition-all shadow-lg hover:shadow-xl group">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-purple-500 text-white">
                  📧 Email Discovery
                </Badge>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-brand-light rounded-lg p-3">
                    <Mail className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary">
                    Find Email Addresses
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Search Google Maps and automatically find verified email addresses for any business
                </p>

                <div className="text-sm text-gray-500 mb-4">
                  💰 Get verified emails for cold outreach
                </div>

                <Button 
                  asChild
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover group-hover:scale-105 transition-transform"
                >
                  <Link href="/find-email-addresses">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Google Maps Scraper */}
            <Card className="border-2 hover:border-brand-primary transition-all shadow-lg hover:shadow-xl group">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-blue-500 text-white">
                  🗺️ Data Extraction
                </Badge>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-brand-light rounded-lg p-3">
                    <MapPin className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary">
                    Google Maps Scraper
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Extract business data from Google Maps - phones, emails, addresses, reviews, and more
                </p>

                <div className="text-sm text-gray-500 mb-4">
                  💰 200M+ businesses available worldwide
                </div>

                <Button 
                  asChild
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover group-hover:scale-105 transition-transform"
                >
                  <Link href="/google-maps-scraper">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Lead Generation Software */}
            <Card className="border-2 hover:border-brand-primary transition-all shadow-lg hover:shadow-xl group">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-green-500 text-white">
                  🚀 Complete Platform
                </Badge>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-brand-light rounded-lg p-3">
                    <TrendingUp className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary">
                    Lead Generation Software
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Complete B2B lead generation platform - search, enrich, verify, and export leads
                </p>

                <div className="text-sm text-gray-500 mb-4">
                  💰 All-in-one prospecting solution
                </div>

                <Button 
                  asChild
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover group-hover:scale-105 transition-transform"
                >
                  <Link href="/lead-generation-software">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
