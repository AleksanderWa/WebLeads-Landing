"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="faq">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand-primary">
        FAQ
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="what-is" className="border-b">
          <AccordionTrigger className="text-xl font-semibold text-brand-secondary">
            What is WebLeads Google Maps scraper?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            WebLeads is a simple tool that finds business information from Google Maps. You tell us what type of business you want and where to look. We search Google Maps and send you the results by email. It works anywhere in the world.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="how-it-works" className="border-b">
          <AccordionTrigger className="text-xl font-semibold text-brand-secondary">
            How does the Google Maps data scraper work?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            It's easy! Here's how it works:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>You create a search for the business type you want</li>
              <li>Pick any city or area in the world</li>
              <li>We search Google Maps for those businesses</li>
              <li>You get an email with all the results</li>
              <li>Use our app to filter and sort your leads</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="what-data" className="border-b">
          <AccordionTrigger className="text-xl font-semibold text-brand-secondary">
            What business data do you collect from Google Maps?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            We get lots of useful information:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Business name and address</li>
              <li>Phone numbers</li>
              <li>Google Maps ratings and reviews</li>
              <li>Website links</li>
              <li>Email addresses from their websites</li>
              <li>Social media links</li>
              <li>Average price of services</li>
              <li>Business hours</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="filters" className="border-b">
          <AccordionTrigger className="text-xl font-semibold text-brand-secondary">
            Can I filter my Google Maps business leads?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes! Our app has powerful filters to help you find the best leads:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Filter by Google Maps star ratings</li>
              <li>Sort by number of reviews</li>
              <li>Pick specific industries</li>
              <li>Find businesses with or without websites</li>
              <li>Look for businesses with email addresses</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="email-scraping" className="border-b">
          <AccordionTrigger className="text-xl font-semibold text-brand-secondary">
            Do you find email addresses from business websites?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes! We don't just get Google Maps data. We also visit each business website and look for:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Email addresses</li>
              <li>Contact forms</li>
              <li>Social media links</li>
              <li>Phone numbers</li>
            </ul>
            This gives you more ways to contact potential customers.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="worldwide" className="border-b">
          <AccordionTrigger className="text-xl font-semibold text-brand-secondary">
            Can I search for businesses anywhere in the world?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Yes! Our Google Maps scraper works worldwide. You can search for businesses in any city or country. Just type in the location you want, and we'll find businesses there for you.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="updates" className="border-b">
          <AccordionTrigger className="text-xl font-semibold text-brand-secondary">
            How fresh is the Google Maps business data?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            We get fresh data every time you search. When you create a new search, we go to Google Maps right then and collect the newest information. This means you always get up-to-date business details.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
