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
            What do I get when I sign in?
          </AccordionTrigger>
          <AccordionContent>
            When you sing in you will get access to WebLeads BETA for free.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b">
          <AccordionTrigger className="text-xl font-semibold text-brand-secondary">
            When BETA is starting
          </AccordionTrigger>
          <AccordionContent>
            May 2025
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b">
          <AccordionTrigger className="text-xl font-semibold text-brand-secondary">How it works?</AccordionTrigger>
          <AccordionContent>
            After logging into the system you can search by city and bussiness type
            *Currently we only support Google Maps search, more comming soon
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
