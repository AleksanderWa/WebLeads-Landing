import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LeadsTable } from "@/components/leads-table"
import { HowItWorks } from "@/components/how-it-works"
import { ValueProposition } from "@/components/value-proposition"
import { FaqSection } from "@/components/faq-section"
// import { PricingSection } from "@/components/pricing-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { DataSources } from "@/components/data-sources"
import { PricingSection } from "@/components/pricing-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <HowItWorks />
      <LeadsTable />
      <DataSources />
      {/* <ValueProposition /> */}
      <FaqSection />
      {/* <PricingSection /> */}
      <ContactForm />
      <Footer />
    </main>
  )
}
