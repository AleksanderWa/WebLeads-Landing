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
      answer: "Our data scraping process is easy! Here's how we help you get more B2B leads:\n• You create a search for the business type you want\n• Pick any city or area in the world\n• Our Google Maps scraper finds business data in real-time\n• We visit each company website to extract emails, phones, and decision-maker data\n• You get notified when your search is ready\n• Filter, sort, and export your leads to CSV\n\nAll users get unlimited searches. Growth Plan lets you queue up to 3 searches concurrently to save time. Credits are consumed when searches complete based on the number of businesses found."
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
      question: "How do you find email addresses?",
      answer: "We use advanced website crawling with Playwright to find emails that other tools miss:\n• We scan all relevant company pages (not just the homepage)\n• We visit contact pages, about pages, team pages, and more\n• We extract decision-maker names and their roles from company pages\n• We find direct contact emails for key people\n\nCurrently, emails are extracted from company pages only. FREE email verification (SMTP + Catch-All) coming soon to ensure every email actually works. Most competitors charge $5 per 1,000 emails for this."
    },
    {
      question: "Can I search for any type of business?",
      answer: "Yes! Unlike competitors with limited category lists, you can search for ANY business type that exists on Google Maps:\n• Plumbers, electricians, roofers\n• Real estate agents, mortgage brokers\n• Restaurants, cafes, retail stores\n• Marketing agencies, law firms, accountants\n• And literally any other business category\n\nNo predefined limits - if it's on Google Maps, we can find it for you anywhere in the world."
    },
    {
      question: "How fresh is the business data?",
      answer: "We get fresh data every time you search. We don't use stale databases like competitors (who update every 6-12 months). When you create a new search, we scrape Google Maps in real-time and visit company websites right then to collect the newest information. You always get up-to-date business details, not outdated contact info."
    },
    {
      question: "Is it safe and legal to use WebLeads?",
      answer: "Yes, WebLeads is completely safe and legal to use! Here's why:\n• We only collect publicly available information that businesses have posted themselves on Google Maps and their websites\n• We comply with data protection regulations and Google's terms of service\n• We don't use any hacking or unauthorized access methods\n• All data we collect is information that anyone can view publicly\n• Your payment information is securely processed through trusted third-party payment processors\n• We use industry-standard encryption to protect your data\n\nThink of it like looking up businesses in a phone book - we're just doing it faster and more efficiently."
    },
    {
      question: "How much does WebLeads cost?",
      answer: "WebLeads uses a simple credit-based pricing system where 1 credit = 1 business:\n• Discover Plan: Pay as you go with 500 Free credits\n• Starter Plan: 10,000 credits/month for $9.99 ($1.00 per 1,000 leads)\n• Growth Plan: 28,000 credits/month for $24.99 ($0.89 per 1,000 leads) - Best value for agencies\n\nEach business includes complete data: phone, email, decision-makers (names + roles), social profiles. No annual contracts - cancel anytime. Credits roll over month-to-month and expire after 6 months. You can also purchase credit top-ups starting at $0.99 for 500 credits. Plus, FREE email verification coming soon"
    },
    {
      question: "Do I need a credit card to start?",
      answer: "No! You can start completely free with 500 credits (enough for 500 businesses) without entering any payment information. Test the platform, see the data quality, and export your first leads before deciding to upgrade."
    },
    {
      question: "What makes WebLeads different from competitors?",
      answer: "WebLeads has 5 unique advantages:\n• FREE email verification (SMTP + Catch-All) coming soon - competitors charge $5/1,000 emails\n• Advanced website crawling that scans all relevant company pages, not just the homepage\n• Decision-maker data (names + roles) included at no extra cost in all plans\n• Queue up to 3 searches concurrently (Growth Plan) - unlimited searches for all users\n• Best pricing: $0.89 per 1,000 leads (Growth Plan) vs $3-10/1k at competitors\n\nPlus, we provide real-time data from Google Maps and enrich it with email, phone, and decision-maker data, not stale 6-12 month old databases. No predefined category limits - search for any business type on Google Maps."
    },
    {
      question: "Can I export the data to my CRM?",
      answer: "Yes! Export is completely free once you've used credits to unlock businesses. Download your data as CSV or XLS format and import it directly into Salesforce, HubSpot, Zoho, Pipedrive, or any CRM that accepts CSV files. The export includes all fields: emails, phones, addresses, decision-makers (names + roles), social profiles, and more. Unlocked businesses remain accessible forever - you can export them multiple times."
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
