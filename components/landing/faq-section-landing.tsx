"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { LandingFAQ } from "@/lib/pricing-linked-faqs"

export type { LandingFAQ }

interface FAQSectionProps {
  title: string
  description?: string
  faqs: LandingFAQ[]
}

export function FAQSection({ title, description = "Everything you need to know", faqs }: FAQSectionProps) {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined)
  const faqsRef = useRef(faqs)
  faqsRef.current = faqs

  const handleHashOpen = useCallback(() => {
    if (typeof window === "undefined") return
    const hash = window.location.hash.replace(/^#/, "")
    if (!hash.startsWith("faq-")) return
    const slug = hash.slice("faq-".length)
    const list = faqsRef.current
    const idx = list.findIndex((item) => item.slug === slug)
    if (idx === -1) return
    setOpenItem(`item-${idx}`)
    window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 300)
  }, [])

  useEffect(() => {
    handleHashOpen()
    window.addEventListener("hashchange", handleHashOpen)
    return () => window.removeEventListener("hashchange", handleHashOpen)
  }, [handleHashOpen])

  return (
    <section id="faq" className="py-16 px-4 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {description}
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={openItem}
          onValueChange={setOpenItem}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              id={faq.slug ? `faq-${faq.slug}` : undefined}
              className="border-b"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-brand-secondary hover:text-brand-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
