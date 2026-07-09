export type LandingFAQ = {
  question: string
  answer: string
  slug?: string
}

export const pricingLinkedFaqs: LandingFAQ[] = [
  {
    slug: "decision-maker-email-lookups",
    question: "What are decision-maker email lookups?",
    answer:
      "A decision-maker email lookup tries to find a verified email for the owner, founder, or manager you want to reach.\n\nThe lookup only counts when we find a verified email. If we cannot verify one, it does not use your lookup limit. Each paid plan includes a monthly allowance that resets every billing cycle.",
  },
  {
    slug: "email-verification",
    question: "What is email verification?",
    answer:
      "Email verification checks whether the business emails we find on company websites are actually deliverable. We run each address through SMTP verification to confirm the mailbox exists and can receive mail.\n\nThis helps cut bounce risk before you start outreach. Verification is separate from decision-maker email lookups and uses its own monthly allowance.",
  },
]
