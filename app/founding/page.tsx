import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Benefits } from "@/components/founding/benefits";
import { ClosingCta } from "@/components/founding/closing-cta";
import { FoundingFaq } from "@/components/founding/founding-faq";
import { FoundingHero } from "@/components/founding/founding-hero";
import { LiveVsComing } from "@/components/founding/live-vs-coming";
import { OfferCard } from "@/components/founding/offer-card";
import { PromptExamples } from "@/components/founding/prompt-examples";
import { buildFoundingState, readFoundingConfig } from "@/lib/founding";
import { FOUNDING_META } from "@/lib/founding-copy";

export const metadata: Metadata = {
  title: FOUNDING_META.title,
  description: FOUNDING_META.description,
  alternates: { canonical: "/founding" },
  robots: { index: false, follow: false },
};

export default function FoundingPage() {
  const state = buildFoundingState(readFoundingConfig());
  return (
    <main className="min-h-screen bg-white">
      <Header hideTrialCta />
      <FoundingHero state={state} showTodayBlock={state.showTodayBlock} />
      <PromptExamples />
      <Benefits />
      <LiveVsComing showTodayBlock={state.showTodayBlock} />
      <OfferCard state={state} />
      <FoundingFaq showTodayBlock={state.showTodayBlock} />
      <ClosingCta state={state} />
      <Footer />
    </main>
  );
}
