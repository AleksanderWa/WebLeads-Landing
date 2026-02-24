"use client"

import { useEffect, useState, useCallback } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
    {
      slug: "what-is-webleads",
      question: "What is WebLeads?",
      answer: "WebLeads is a B2B lead generation tool that finds business data from Google Maps and company websites. You tell us what type of business you're looking for and where — we collect fresh profiles, contact details, and decision-maker information in real time. It works anywhere in the world."
    },
    {
      slug: "how-it-works",
      question: "How does WebLeads work?",
      answer: "The full pipeline from search to outreach-ready leads:\n• Create a search — enter a business type (e.g. \"dentists\") and location (e.g. \"Berlin\")\n• We crawl Google Maps and company websites in real time — no stale database\n• For each business we collect: name, address, phone, website, emails, reviews & ratings, social media links, and decision makers (name + role)\n• Every email gets an automatic confidence badge based on syntax validation, domain existence, and MX record checks — so you can gauge deliverability at a glance\n• Unlock decision maker emails to get verified personal addresses for key contacts\n• Verify any email via SMTP — verified emails show a 100/100 confidence score\n• Export your leads to CSV, Excel, or Google Sheets\n\nEach search returns up to hundreds or thousands of results depending on your plan. Data is collected fresh every time."
    },
    {
      slug: "what-data",
      question: "What data do you collect?",
      answer: "Every business profile includes:\n• Business name, address, and categories\n• Phone number\n• Website URL\n• Generic email address (from the website)\n• Google Maps rating and review count\n• Social media links\n• Business hours and price range\n\nOn top of that, we identify decision makers from company websites — extracting names and roles so you know exactly who to contact."
    },
    {
      slug: "pricing-plans",
      question: "What are the pricing plans?",
      answer: "We offer a free tier and three paid plans:\n• Free: 2 searches (500 results each), 100 DM unlocks, 200 email verifications — no credit card required\n• Starter ($29/mo): 1 search/day, 800 results per search, 500 DM unlocks, 3,000 email verifications\n• Growth ($79/mo): 3 searches/day, 1,500 results per search, 3,000 DM unlocks, 15,000 email verifications\n• Scale ($199/mo): 7 searches/day, 2,500 results per search, 7,000 DM unlocks, 30,000 email verifications\n\nIncluded allowances reset monthly. No annual contracts — cancel anytime."
    },
    {
      slug: "free-tier",
      question: "Is there a free tier?",
      answer: "Yes — and you don't need a credit card to get started. The free tier gives you 2 searches with up to 500 results each, 100 DM unlocks, and 200 email verifications. It's enough to test the platform, see the data quality, and export your first leads before deciding on a paid plan."
    },
    {
      slug: "decision-makers",
      question: "What are decision makers and how do you find them?",
      answer: "Decision makers are the key people at a company — founders, owners, directors, managers, and other roles with authority. We identify them by crawling company websites and scanning pages like About, Team, and Leadership sections. For each person we find, we extract their name and role. This is included in every plan at no extra cost."
    },
    {
      slug: "dm-unlocks",
      question: "What are DM unlocks?",
      answer: "DM (Decision Maker) unlocks let you find verified personal email addresses for the decision makers we've identified at each company. We generate likely email patterns based on the person's name and company domain, then verify them via SMTP to confirm they're real and deliverable.\n\nYou only pay for successful results — if we can't find or verify an email, it costs you nothing. Each plan includes a monthly allowance of DM unlocks that resets every billing cycle."
    },
    {
      slug: "email-verification",
      question: "What is email verification?",
      answer: "Email verification checks whether the generic business emails we find on company websites (like john@abc.com) are actually deliverable. We run each address through SMTP verification to confirm the mailbox exists and can receive mail.\n\nThis prevents bounces and protects your sender reputation when you start outreach. Like DM unlocks, verification uses a pay-per-success model — you're only charged for emails we successfully verify. Failed lookups are free."
    },
    {
      slug: "email-confidence-badges",
      question: "What are email confidence badges?",
      answer: "Every email we collect gets an automatic confidence badge — a score that shows how likely it is to be deliverable, before you spend a verification credit. The score is based on three checks:\n• Email syntax validation — is the format correct?\n• Domain existence — does the domain actually exist?\n• MX record check — is the domain set up to receive email?\n\nThis helps you prioritize your outreach: focus on high-confidence emails first, and skip the ones that look risky. When you verify an email via SMTP, a successful verification brings the confidence score to 100/100. Confidence badges are included on all plans."
    },
    {
      slug: "fresh-data",
      question: "How fresh is the data?",
      answer: "Every search collects data in real time. We don't maintain a static database that goes stale over months. When you run a search, our scraper visits Google Maps and each company's website right then and there. You always get the most current business details, contact info, and decision-maker data available."
    },
    {
      slug: "safe-legal",
      question: "Is WebLeads safe and legal to use?",
      answer: "Yes. Here's why:\n• We only collect publicly available information that businesses have posted on Google Maps and their own websites\n• No hacking, no unauthorized access — just efficient collection of public data\n• All payment processing is handled by trusted third-party providers with industry-standard encryption\n• We comply with applicable data protection regulations\n\nThink of it like looking up businesses in a phone book — we just do it faster and more thoroughly."
    },
    {
      slug: "export-crm",
      question: "Can I export data or import it into my CRM?",
      answer: "Yes. You can export your leads as a CSV file and import them into Salesforce, HubSpot, Zoho, Pipedrive, or any CRM that accepts CSV. The export includes all collected fields: business details, emails, phone numbers, decision-maker names and roles, social profiles, and more."
    },
    {
      slug: "credits-rollover",
      question: "Do unused credits roll over?",
      answer: "No. Monthly allowances (searches, DM unlocks, email verifications) reset each billing cycle and don't carry over. The free trial has lifetime limits that never reset — once used, you need to upgrade."
    },
    {
      slug: "cancel-anytime",
      question: "Can I cancel anytime?",
      answer: "Yes. All paid plans are month-to-month with no annual contracts required. Cancel anytime from your account settings — no questions asked."
    },
    {
      slug: "why-different",
      question: "What makes WebLeads different from other lead generation tools?",
      answer: "A few things set us apart:\n• Fresh data on every search — no stale databases updated every 6–12 months\n• Decision-maker identification included in all plans, not sold as a premium add-on\n• Pay-per-success email verification — you only pay for valid results\n• Search for any business type on Google Maps, worldwide — no predefined category limits\n• Transparent, affordable pricing starting at $29/mo with a generous free tier\n\nWe built WebLeads to give small teams and agencies access to high-quality lead data without enterprise pricing."
    }
]

export function FaqSection() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined)

  const handleHashOpen = useCallback(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash.startsWith("faq-")) {
      const slug = hash.replace("faq-", "")
      const idx = faqData.findIndex((item) => item.slug === slug)
      if (idx !== -1) {
        setOpenItem(`item-${idx}`)
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" })
        }, 100)
      }
    }
  }, [])

  useEffect(() => {
    handleHashOpen()
    window.addEventListener("hashchange", handleHashOpen)
    return () => window.removeEventListener("hashchange", handleHashOpen)
  }, [handleHashOpen])

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
        <Accordion type="single" collapsible className="w-full space-y-4" value={openItem} onValueChange={setOpenItem}>
          {faqData.map((item, index) => (
            <article 
              key={index}
              id={`faq-${item.slug}`}
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
