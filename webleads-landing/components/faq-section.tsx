"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="faq">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#B44D4D]">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1" className="border-b">
          <AccordionTrigger className="text-xl font-semibold">What do I get when I sign in?</AccordionTrigger>
          <AccordionContent>
            When you sign in, you'll receive access to our curated list of 50 leads as a demo, showing you the quality
            and depth of information we provide for each lead.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b">
          <AccordionTrigger className="text-xl font-semibold">Are other people getting the same list?</AccordionTrigger>
          <AccordionContent>
            Yes, subscribers receive the same weekly list. However, the quality and quantity of leads ensure there's
            enough opportunity for everyone.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b">
          <AccordionTrigger className="text-xl font-semibold">How it works?</AccordionTrigger>
          <AccordionContent>
            We systematically gather leads from Google Maps, enrich them with website audits, verify contact
            information, and deliver fresh leads to your inbox every Tuesday.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b">
          <AccordionTrigger className="text-xl font-semibold">How we collect leads?</AccordionTrigger>
          <AccordionContent>
            We use a combination of manual research and tools to gather leads from Google Maps, focusing on businesses
            that could benefit from website improvements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-b">
          <AccordionTrigger className="text-xl font-semibold">
            How cities are selected? Can I select city by myself?
          </AccordionTrigger>
          <AccordionContent>
            We currently select cities based on market research and opportunity density. Custom city selection will be
            available in future subscription plans.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

