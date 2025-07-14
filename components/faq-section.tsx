"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqData = [
    {
      question: "What is WebLeads?",
      answer: "WebLeads is web scraping tool that helps you get more b2b leads. Mostly focused on Google Maps. You tell us what type of business you want and where to look. Our scraper finds business data, emails, and socials from Google Maps and sends you email with the results. It works anywhere in the world."
    },
    {
      question: "How does the data scraping work?",
      answer: "Our data scraping process is easy! Here's how we help you get more B2B leads:\n• You create a search for the business type you want\n• Pick any city or area in the world\n• Our Google Maps scraper finds business data\n• We collect the data, emails, and socials from each lead\n• You get an email with all data\n• You can filter and sort your leads"
    },
    {
      question: "What business data do you collect from Google Maps?",
      answer: "We get lots of useful information:\n• Business name, address, categories\n• Phone numbers\n• Google Maps ratings and reviews\n• Website links\n• Email addresses from their websites\n• Social media links\n• Average price of services\n• Business hours"
    },
    {
      question: "Can I filter my search results?",
      answer: "Yes! Our app has powerful filters to help you find the best leads:\n• Filter by Google Maps star ratings\n• Sort by number of reviews\n• Pick specific industries\n• Find businesses with or without websites\n• Look for businesses with email addresses"
    },
    {
      question: "Do you find email addresses from business websites?",
      answer: "Yes! We don't just get Google Maps data. We also visit each business website and look for:\n• Email addresses\n• Contact forms\n• Social media links\n• Phone numbers\n\nThis gives you more ways to contact potential customers."
    },
    {
      question: "Can I search for businesses anywhere in the world?",
      answer: "Yes! You can search for businesses in any city or country. Just type in the location you want, and we'll find businesses there for you."
    },
    {
      question: "How fresh is the business data?",
      answer: "We get fresh data every time you search. When you create a new search, we go to Google Maps right then and collect the newest information. This means you always get up-to-date business details."
    }
  ]

  // Generate FAQ schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section 
        className="py-16 px-4 max-w-4xl mx-auto" 
        id="faq"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand-primary">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((item, index) => (
            <article 
              key={index}
              itemScope
              itemType="https://schema.org/Question"
              className="border-b"
            >
              <AccordionItem value={`item-${index}`} className="border-b">
                <AccordionTrigger 
                  className="text-xl font-semibold text-brand-secondary"
                  aria-label={`Question: ${item.question}`}
                >
                  <h3 itemProp="name">{item.question}</h3>
                </AccordionTrigger>
                <AccordionContent 
                  className="text-lg"
                  itemScope
                  itemType="https://schema.org/Answer"
                  role="region"
                  aria-label={`Answer to: ${item.question}`}
                >
                  <div itemProp="text">
                    {item.answer.includes('\n•') ? (
                      <div>
                        {(() => {
                          const lines = item.answer.split('\n')
                          const result = []
                          let currentListItems = []
                          
                          for (let i = 0; i < lines.length; i++) {
                            const line = lines[i]
                            
                            if (line.startsWith('•')) {
                              currentListItems.push(line.substring(1).trim())
                            } else {
                              if (currentListItems.length > 0) {
                                result.push(
                                  <ul key={`list-${i}`} className="list-disc pl-6 mt-2 space-y-2">
                                    {currentListItems.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                )
                                currentListItems = []
                              }
                              if (line.trim()) {
                                result.push(<p key={`text-${i}`}>{line}</p>)
                              }
                            }
                          }
                          
                          if (currentListItems.length > 0) {
                            result.push(
                              <ul key="final-list" className="list-disc pl-6 mt-2 space-y-2">
                                {currentListItems.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            )
                          }
                          
                          return result
                        })()}
                      </div>
                    ) : (
                      <p>{item.answer}</p>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </article>
          ))}
        </Accordion>
      </section>
    </>
  )
}
