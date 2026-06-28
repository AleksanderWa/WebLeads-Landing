import { FaqSection } from "@/components/faq-section";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksRedesign } from "@/components/how-it-works-redesign";
import { PricingSection } from "@/components/pricing-section";
import { SampleExport } from "@/components/sample-export";
import { Stats } from "@/components/stats";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ToolsSection } from "@/components/tools-section";
import { VsCompare } from "@/components/vs-compare";
import { WebsiteMatchSection } from "@/components/website-match-section";
import { WhatYouGet } from "@/components/what-you-get";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <HowItWorksRedesign />
      <WebsiteMatchSection />
      <WhatYouGet />
      <SampleExport />
      <Stats />
      <TestimonialsSection />
      <PricingSection />
      <VsCompare />
      <ToolsSection />
      <FaqSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
