export type LandingFAQ = {
  question: string
  answer: string
  slug?: string
}

export const decisionMakerEmailsFaq: LandingFAQ = {
  slug: "decision-maker-emails",
  question: "How do decision-maker emails work?",
  answer:
    "We look for the email of the owner, founder, or manager you want to reach.\n\nEach email we find counts as one decision-maker email. If we find nothing, nothing is used. This includes catch-all emails found by a manual unlock, where the company's mail server accepts any address, so the mailbox can't be fully confirmed. Each paid plan includes a monthly allowance that resets every billing cycle.",
}

export const pricingLinkedFaqs: LandingFAQ[] = [
  decisionMakerEmailsFaq,
  {
    slug: "email-verification",
    question: "What is email verification?",
    answer:
      "Email verification checks whether the business emails we find on company websites are actually deliverable. We run each address through SMTP verification to confirm the mailbox exists and can receive mail.\n\nThis helps cut bounce risk before you start outreach. Verification is separate from decision-maker emails and uses its own monthly allowance.",
  },
]
