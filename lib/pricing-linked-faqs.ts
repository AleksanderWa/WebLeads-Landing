export type LandingFAQ = {
  question: string
  answer: string
  slug?: string
}

export const pricingLinkedFaqs: LandingFAQ[] = [
  {
    slug: "people-enrichments",
    question: "What are people enrichments?",
    answer:
      "People enrichment finds verified personal email addresses for the decision makers we've identified at each company. \n\nQuota is used only for successful results — if we can't find or verify an email, it costs you nothing. Each plan includes a monthly allowance of people enrichments that resets every billing cycle.",
  },
  {
    slug: "email-verification",
    question: "What is email verification?",
    answer:
      "Email verification checks whether the generic business emails we find on company websites (like john@abc.com) are actually deliverable. We run each address through SMTP verification to confirm the mailbox exists and can receive mail.\n\nThis prevents bounces and protects your sender reputation when you start outreach. Like people enrichments, verification uses a pay-per-success model — you're only charged for emails we successfully verify. Failed lookups are free.",
  },
]
