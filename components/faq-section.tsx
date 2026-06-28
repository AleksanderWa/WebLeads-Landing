"use client";

import { useCallback, useEffect, useState } from "react";
import { Plus } from "lucide-react";

type FaqItem = {
  slug: string;
  question: string;
  answer: string;
  link?: { label: string; href: string };
};

type FaqGroup = {
  title: string;
  items: FaqItem[];
};

const faqData: FaqItem[] = [
  {
    slug: "what-is-webleads",
    question: "What is WebLeads?",
    answer:
      "WebLeads is a B2B lead generation tool that finds business data from Google Maps and company websites. You tell us what type of business you're looking for and where. We collect fresh profiles, contact details, and decision maker information in real time. It works anywhere in the world.",
  },
  {
    slug: "how-it-works",
    question: "How does WebLeads work?",
    answer:
      'The full pipeline from search to outreach-ready leads:\n• Create a search: enter a business type (e.g. "dentists") and location (e.g. "Berlin")\n• We crawl Google Maps and company websites in real time. No stale database.\n• For each business we collect: name, address, phone, website, emails, reviews & ratings, social media links, and decision makers (name + role)\n• Every email gets an automatic confidence badge based on syntax validation, domain existence, and MX record checks, so you can gauge deliverability at a glance\n• Use people enrichment to get verified personal addresses for key contacts\n• Verify any email via SMTP. Verified emails show a 100/100 confidence score\n• Export your leads to CSV, Excel, or Google Sheets\n\nEach search returns up to hundreds or thousands of results depending on your plan. Data is collected fresh every time.',
    link: { label: "Full walkthrough: Google Maps scraper tutorial", href: "/blog/google-maps-scraper-tutorial" },
  },
  {
    slug: "what-data",
    question: "What data do you collect?",
    answer:
      "Every business profile includes:\n• Business name, address, and categories\n• Phone number\n• Website URL\n• Generic email address (from the website)\n• Google Maps rating and review count\n• Social media links\n• Business hours and price range\n\nOn top of that, we identify decision makers from company websites, extracting names and roles so you know exactly who to contact.",
  },
  {
    slug: "pricing-plans",
    question: "What are the pricing plans?",
    answer:
      "We offer a free tier and three paid plans:\n• Free: 2 searches (500 results each), 100 people enrichments, 200 email verifications, no credit card required\n• Starter ($24/mo): 2 searches/day, 800 results per search, 500 people enrichments, 3,000 email verifications\n• Growth ($69/mo): 3 searches/day, 1,500 results per search, 2,500 people enrichments, 10,000 email verifications\n• Scale ($199/mo): 7 searches/day, 2,500 results per search, 7,000 people enrichments, 30,000 email verifications\n\nIncluded allowances reset monthly. No annual contracts. Cancel anytime.",
  },
  {
    slug: "free-tier",
    question: "Is there a free tier?",
    answer:
      "Yes, and you don't need a credit card to get started. The free tier gives you 2 searches with up to 500 results each, 100 people enrichments, and 200 email verifications. It's enough to test the platform, see the data quality, and export your first leads before deciding on a paid plan.",
  },
  {
    slug: "decision-makers",
    question: "What are decision makers and how do you find them?",
    answer:
      "Decision makers are the key people at a company: founders, owners, directors, managers, and other roles with authority. We identify them by crawling company websites and scanning pages like About, Team, and Leadership sections. For each person we find, we extract their name and role. This is included in every plan at no extra cost.",
  },
  {
    slug: "people-enrichments",
    question: "What are people enrichments?",
    answer:
      "People enrichment finds verified personal email addresses for the decision makers we've identified at each company. \n\nQuota is used only for successful results. If we can't find or verify an email, it costs you nothing. Each plan includes a monthly allowance of people enrichments that resets every billing cycle.",
  },
  {
    slug: "email-verification",
    question: "What is email verification?",
    answer:
      "Email verification checks whether the generic business emails we find on company websites (like john@abc.com) are actually deliverable. We run each address through SMTP verification to confirm the mailbox exists and can receive mail.\n\nThis prevents bounces and protects your sender reputation when you start outreach. Like people enrichments, verification uses a pay-per-success model. You're only charged for emails we successfully verify. Failed lookups are free.",
  },
  {
    slug: "email-confidence-badges",
    question: "What are email confidence badges?",
    answer:
      "Every email we collect gets an automatic confidence badge, a score that shows how likely it is to be deliverable, before you spend a verification credit. The score is based on three checks:\n• Email syntax validation: is the format correct?\n• Domain existence: does the domain actually exist?\n• MX record check: is the domain set up to receive email?\n\nThis helps you prioritize your outreach: focus on high-confidence emails first, and skip the ones that look risky. When you verify an email via SMTP, a successful verification brings the confidence score to 100/100. Confidence badges are included on all plans.",
  },
  {
    slug: "website-match",
    question: "Can WebLeads find businesses that mention a service on their website?",
    answer:
      "Yes. Paid plans include Website Match, which checks each business website and ranks companies by the topics you care about. For example, you can search HVAC contractors and prioritize companies that mention emergency service before spending enrichment credits.",
  },
  {
    slug: "fresh-data",
    question: "How fresh is the data?",
    answer:
      "Every search collects data in real time. We don't maintain a static database that goes stale over months. When you run a search, our scraper visits Google Maps and each company's website right then and there. You always get the most current business details, contact info, and decision maker data available.",
  },
  {
    slug: "safe-legal",
    question: "Is WebLeads safe and legal to use?",
    answer:
      "Yes. Here's why:\n• We only collect publicly available information that businesses have posted on Google Maps and their own websites\n• No hacking, no unauthorized access. Just efficient collection of public data\n• All payment processing is handled by trusted third-party providers with industry-standard encryption\n• We comply with applicable data protection regulations\n\nThink of it like looking up businesses in a phone book. We just do it faster and more thoroughly.",
  },
  {
    slug: "export-crm",
    question: "Can I export data or import it into my CRM?",
    answer:
      "Yes. You can export your leads as a CSV file and import them into Salesforce, HubSpot, Zoho, Pipedrive, or any CRM that accepts CSV. The export includes all collected fields: business details, emails, phone numbers, decision maker names and roles, social profiles, and more.",
  },
  {
    slug: "credits-rollover",
    question: "Do unused credits roll over?",
    answer:
      "No. Monthly allowances (searches, people enrichments, email verifications) reset each billing cycle and don't carry over. The free trial has lifetime limits that never reset. Once used, you need to upgrade.",
  },
  {
    slug: "cancel-anytime",
    question: "Can I cancel anytime?",
    answer:
      "Yes. All paid plans are month-to-month with no annual contracts required. Cancel anytime from your account settings. No questions asked.",
  },
  {
    slug: "why-different",
    question: "What makes WebLeads different from other lead generation tools?",
    answer:
      "A few things set us apart:\n• Fresh data on every search, no stale databases updated every 6–12 months\n• Decision maker identification included in all plans, not sold as a premium add-on\n• Pay-per-success email verification. You only pay for valid results\n• Search for any business type on Google Maps, worldwide. No predefined category limits\n• Transparent, affordable pricing starting at $24/mo with a generous free tier\n\nWe built WebLeads to give small teams and agencies access to high-quality lead data without enterprise pricing.",
    link: { label: "See how WebLeads compares to Apollo", href: "/alternatives/apollo-alternative" },
  },
];

const groups: FaqGroup[] = [
  {
    title: "Getting started",
    items: faqData.filter((f) =>
      ["what-is-webleads", "how-it-works", "pricing-plans", "free-tier"].includes(f.slug)
    ),
  },
  {
    title: "The data",
    items: faqData.filter((f) =>
      [
        "what-data",
        "decision-makers",
        "people-enrichments",
        "email-verification",
        "email-confidence-badges",
        "website-match",
        "fresh-data",
      ].includes(f.slug)
    ),
  },
  {
    title: "Trust & ops",
    items: faqData.filter((f) =>
      ["safe-legal", "export-crm", "credits-rollover", "cancel-anytime", "why-different"].includes(
        f.slug
      )
    ),
  },
];

function renderAnswer(answer: string) {
  if (!answer.includes("\n•")) {
    return <p className="text-[14px] text-brand-secondary/75 leading-relaxed">{answer}</p>;
  }
  const lines = answer.split("\n");
  const result: React.ReactNode[] = [];
  let currentList: string[] = [];
  lines.forEach((line, i) => {
    if (line.startsWith("•")) {
      currentList.push(line.substring(1).trim());
    } else {
      if (currentList.length > 0) {
        result.push(
          <ul key={`list-${i}`} className="list-disc pl-6 mt-2 space-y-1.5 text-[14px] text-brand-secondary/75 leading-relaxed">
            {currentList.map((x, k) => (
              <li key={k}>{x}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
      if (line.trim()) {
        result.push(
          <p key={`text-${i}`} className="text-[14px] text-brand-secondary/75 leading-relaxed">
            {line}
          </p>
        );
      }
    }
  });
  if (currentList.length > 0) {
    result.push(
      <ul key="final-list" className="list-disc pl-6 mt-2 space-y-1.5 text-[14px] text-brand-secondary/75 leading-relaxed">
        {currentList.map((x, k) => (
          <li key={k}>{x}</li>
        ))}
      </ul>
    );
  }
  return <div className="space-y-2">{result}</div>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-primary mb-3">
      <span className="w-5 h-px bg-brand-primary/50" />
      {children}
    </div>
  );
}

export function FaqSection() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const handleHashOpen = useCallback(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash.startsWith("faq-")) {
      const slug = hash.replace("faq-", "");
      if (faqData.some((f) => f.slug === slug)) {
        setOpenSlug(slug);
        setTimeout(() => {
          document.getElementById(`faq-${slug}`)?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 300);
      }
    }
  }, []);

  useEffect(() => {
    handleHashOpen();
    window.addEventListener("hashchange", handleHashOpen);
    return () => window.removeEventListener("hashchange", handleHashOpen);
  }, [handleHashOpen]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section
        id="faq"
        className="bg-[#FAF7F5] py-20 md:py-28 border-b border-black/[0.05]"
        aria-labelledby="faq-title"
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2
              id="faq-title"
              className="text-[32px] md:text-[42px] font-bold tracking-[-0.02em] leading-[1.06] text-balance text-brand-secondary"
            >
              Questions agencies ask before signing up.
            </h2>
          </div>

          <div className="space-y-8">
            {groups.map((g) => (
              <div key={g.title}>
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-secondary/45 mb-3 px-1">
                  {g.title}
                </div>
                <div className="rounded-2xl border border-black/[0.07] bg-white overflow-hidden divide-y divide-black/[0.06]">
                  {g.items.map((it) => {
                    const isOpen = openSlug === it.slug;
                    return (
                      <article key={it.slug} id={`faq-${it.slug}`}>
                        <button
                          onClick={() => setOpenSlug(isOpen ? null : it.slug)}
                          className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-[#FAF7F5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40"
                          aria-expanded={isOpen}
                        >
                          <h3 className="font-semibold text-brand-secondary text-[15px]">
                            {it.question}
                          </h3>
                          <span
                            className={`shrink-0 transition-transform ${
                              isOpen ? "rotate-45" : ""
                            }`}
                          >
                            <Plus className="w-[17px] h-[17px] text-brand-primary" />
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 -mt-1 text-pretty">
                            {renderAnswer(it.answer)}
                            {it.link && (
                              <p className="mt-3 text-[13px]">
                                <a
                                  href={it.link.href}
                                  className="text-brand-primary hover:underline font-medium"
                                >
                                  {it.link.label} →
                                </a>
                              </p>
                            )}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
