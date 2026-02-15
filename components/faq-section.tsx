"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqData = [
    {
      question: "What is WebLeads?",
      answer: "WebLeads is a B2B lead generation tool that finds business data from Google Maps and company websites. You tell us what type of business you're looking for and where — we collect fresh profiles, contact details, and decision-maker information in real time. It works anywhere in the world."
    },
    {
      question: "How does WebLeads work?",
      answer: "It's straightforward:\n• Create a search by entering a business type and location\n• Our scraper searches Google Maps and visits each company's website in real time\n• We collect business profiles, emails, phone numbers, social links, and decision-maker data\n• You get notified when your results are ready\n• Filter, sort, and export your leads to CSV\n\nEach search returns up to hundreds or thousands of results depending on your plan. Data is collected fresh every time — no stale databases."
    },
    {
      question: "What data do you collect?",
      answer: "Every business profile includes:\n• Business name, address, and categories\n• Phone number\n• Website URL\n• Generic email address (from the website)\n• Google Maps rating and review count\n• Social media links\n• Business hours and price range\n\nOn top of that, we identify decision makers from company websites — extracting names and roles so you know exactly who to contact."
    },
    {
      question: "What are the pricing plans?",
      answer: "We offer a free tier and three paid plans:\n• Free: 2 searches (200 results each), 10 DM unlocks, 20 email verifications — no credit card required\n• Starter ($29/mo): 1 search/day, 500 results per search, 50 DM unlocks, 500 email verifications\n• Growth ($79/mo): 3 searches/day, 1,000 results per search, 200 DM unlocks, 2,000 email verifications\n• Scale ($149/mo): 7 searches/day, 2,000 results per search, 600 DM unlocks, 6,000 email verifications\n\nIncluded allowances reset monthly. Need more? Top-up credits are available and never expire. No annual contracts — cancel anytime."
    },
    {
      question: "Is there a free tier?",
      answer: "Yes — and you don't need a credit card to get started. The free tier gives you 2 searches with up to 200 results each, 10 DM unlocks, and 20 email verifications. It's enough to test the platform, see the data quality, and export your first leads before deciding on a paid plan."
    },
    {
      question: "What are decision makers and how do you find them?",
      answer: "Decision makers are the key people at a company — founders, owners, directors, managers, and other roles with authority. We identify them by crawling company websites and scanning pages like About, Team, and Leadership sections. For each person we find, we extract their name and role. This is included in every plan at no extra cost."
    },
    {
      question: "What are DM unlocks and email verification?",
      answer: "These are two distinct features:\n• DM Email Unlock: We take the decision makers we've identified and verify their personal email addresses by checking email patterns against the company domain via SMTP. This gives you direct, verified emails for key people.\n• Email Verification: We verify the generic business emails (like info@ or contact@) found on company websites to make sure they're deliverable.\n\nBoth use a pay-per-success model — you're only charged for valid, verified emails. Catch-all addresses cost half price, and emails that aren't found are completely free."
    },
    {
      question: "How fresh is the data?",
      answer: "Every search collects data in real time. We don't maintain a static database that goes stale over months. When you run a search, our scraper visits Google Maps and each company's website right then and there. You always get the most current business details, contact info, and decision-maker data available."
    },
    {
      question: "Is WebLeads safe and legal to use?",
      answer: "Yes. Here's why:\n• We only collect publicly available information that businesses have posted on Google Maps and their own websites\n• No hacking, no unauthorized access — just efficient collection of public data\n• All payment processing is handled by trusted third-party providers with industry-standard encryption\n• We comply with applicable data protection regulations\n\nThink of it like looking up businesses in a phone book — we just do it faster and more thoroughly."
    },
    {
      question: "Can I export data or import it into my CRM?",
      answer: "Yes. You can export your leads as a CSV file and import them into Salesforce, HubSpot, Zoho, Pipedrive, or any CRM that accepts CSV. The export includes all collected fields: business details, emails, phone numbers, decision-maker names and roles, social profiles, and more."
    },
    {
      question: "What makes WebLeads different from other lead generation tools?",
      answer: "A few things set us apart:\n• Fresh data on every search — no stale databases updated every 6–12 months\n• Decision-maker identification included in all plans, not sold as a premium add-on\n• Pay-per-success email verification — you only pay for valid results\n• Search for any business type on Google Maps, worldwide — no predefined category limits\n• Transparent, affordable pricing starting at $29/mo with a generous free tier\n• Top-up credits that never expire for extra flexibility\n\nWe built WebLeads to give small teams and agencies access to high-quality lead data without enterprise pricing."
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
