"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="faq">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand-primary">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1" className="border-b">
          <AccordionTrigger className="text-xl font-semibold text-brand-secondary">
            What is WebLeads?
          </AccordionTrigger>
          <AccordionContent>
            WebLeads is a tool that helps you find leads for your business.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b">
          <AccordionTrigger className="text-xl font-semibold text-brand-secondary">
            Are cold leads any good?
          </AccordionTrigger>
          <AccordionContent>
            Yes, absolutely. <br />
            You can build custom cold email campaign. <br />
            Use collected data to create custom offer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b">
          <AccordionTrigger className="text-xl font-semibold text-brand-secondary">How we find leads?</AccordionTrigger>
          <AccordionContent>
            We use Google Maps to find leads. We search by city and business type.
            *More sources will be added soon
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
