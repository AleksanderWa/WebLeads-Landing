import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductDemo } from "@/components/product-demo"
import { ProductDemoRealistic } from "@/components/product-demo-realistic"
import { LeadsTable } from "@/components/leads-table"
import { HowItWorks } from "@/components/how-it-works"
import { ValueProposition } from "@/components/value-proposition"
import { FaqSection } from "@/components/faq-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { DataSources } from "@/components/data-sources"
import { PricingSection } from "@/components/pricing-section"
import { PopularSearches } from "@/components/popular-searches"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PricingSection />
      <PopularSearches />
      <DataSources />
      <FaqSection />
      <Footer />
    </main>
  )
}
