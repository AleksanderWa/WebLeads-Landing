export const FOUNDING_META = {
  title: "Founding Member | WebLeads",
  description:
    "You'll write who you're looking for in plain English. WebLeads will scan Google Maps and each business's website fresh.",
};

export const HERO = {
  badge: "Founding Member",
  headlinePrefix: "Soon:",
  headlineRest: " describe your ideal customer, get the local businesses that fit.",
  subheadBase:
    "You'll write who you're looking for in plain English. WebLeads will scan Google Maps and each business's website fresh and tell you in one line why each one fits. Founding members get the new search first, target early December.",
  subheadToday: " Today's WebLeads works from day one.",
  secondaryCta: "Join the free waitlist",
};

export const SPOTS_SENTENCE = "50 founding spots.";

export const REFUND_SENTENCE =
  "Full refund any time until 30 days after the new search goes live, and a full refund if it isn't live by December 31, 2026.";

export function getUnderCta(soldOut: boolean): string {
  return soldOut ? REFUND_SENTENCE : `${SPOTS_SENTENCE} ${REFUND_SENTENCE}`;
}

export const TWO_TIER_PRICE = "$199 for the first 15, then $249";

export const WAITLIST_MESSAGES = {
  success: "You're on the waitlist.",
  error: "Something went wrong. Please try again.",
};

export const PROMPTS_LABEL = "What you'll be able to type";

export const EXAMPLE_PROMPTS = [
  "Dental offices in Austin, TX that don't offer online booking",
  "Roofing companies in Tampa with outdated websites",
  "Property management companies in Phoenix that manage commercial buildings",
  "Fire sprinkler and extinguisher inspection companies in Georgia, not lawn irrigation",
];

export type BenefitChip = "live" | "coming" | null;

export const BENEFITS: { lead: string; body: string; chip: BenefitChip }[] = [
  {
    lead: "Only the businesses that match.",
    body: "Each result will come with a one-line reason it fits, so you can skip the ones that don't before you email them.",
    chip: "coming",
  },
  {
    lead: "Checked decision maker emails.",
    body: "We look for the business's decision makers, work out their likely email, then check it. Where we can't verify one, you don't get it, and in the new search it doesn't use a credit.",
    chip: null,
  },
  {
    lead: "Fresh on every request.",
    body: "Each search runs a new Google Maps and website scan, not a stored database. Search a city, a region, or a radius around a point. (This part is live today.)",
    chip: "live",
  },
];

export const HONESTY_LINE =
  "Not every business lists a decision maker online, so you won't get an email for every business.";

export const LIVE_VS_COMING = {
  label: "Live vs coming",
  live: [
    "Each search runs a new Google Maps and website scan, not a stored database.",
    "Search a city, a region, or a radius around a point.",
    "We look for the business's decision makers, work out their likely email, then check it.",
  ],
  coming: {
    caption: "Founding members get the new search first, target early December.",
    items: [
      "You'll write who you're looking for in plain English.",
      "Each result will come with a one-line reason it fits, so you can skip the ones that don't before you email them.",
      "Where we can't verify a decision maker's email, you don't get it, and in the new search it doesn't use a credit.",
    ],
  },
  later: {
    caption: "Founding members get it first. No date yet. Not part of the December 31 refund promise.",
    items: [
      "Every week, WebLeads will look for new businesses that match your request and send you the new ones.",
      "Use WebLeads from your own AI assistant, like Claude or ChatGPT.",
    ],
  },
};

export const TODAY_BLOCK = {
  heading: "Use today's WebLeads from day one",
  line: "Today's WebLeads from day one, from the same allowance.",
  note: "Today's product charges differently: a manual unlock that ends in a catch-all still uses a credit.",
};

export type OfferItem = {
  text: string;
  kind: "term" | "live" | "coming" | "later";
  todayOnly?: boolean;
  hideWhenSoldOut?: boolean;
};

export const ALLOWANCE = {
  yearlyEmails: "Up to 3,000 verified emails and up to 24,000 businesses checked and scored for fit over the year",
  monthlyEmails: "Up to 750 verified emails and up to 6,000 businesses in any one month",
};

export const OFFER_ITEMS: OfferItem[] = [
  {
    text: "First 15 seats: $199 for the year (about $16.58 a month). Seats 16-50: $249 for the year (about $20.75 a month). Paid upfront.",
    kind: "term",
    hideWhenSoldOut: true,
  },
  { text: ALLOWANCE.yearlyEmails, kind: "term" },
  { text: ALLOWANCE.monthlyEmails, kind: "term" },
  { text: "You keep the price you bought at every year you renew without a gap", kind: "term" },
  { text: "The new search first, target early December", kind: "coming" },
  { text: "Today's WebLeads from day one, from the same allowance", kind: "live", todayOnly: true },
  {
    text: "Coming after launch, founding members get it first: a weekly re-run. Every week, WebLeads will look for new businesses that match your request and send you the new ones. That's why the plan is yearly: a steady feed, not one list. It draws from the same yearly allowance. (No date yet.) Not part of the December 31 refund promise.",
    kind: "later",
  },
  {
    text: "Also coming after launch: use WebLeads from your own AI assistant, like Claude or ChatGPT. (No date yet.) Not part of the December 31 refund promise.",
    kind: "later",
  },
  { text: "Renews yearly unless you turn it off", kind: "term" },
  {
    text: "Full refund any time until 30 days after the new search goes live, and a full refund if it isn't live by December 31, 2026. No refund after that 30-day window.",
    kind: "term",
  },
];

export const CHIP_LABELS = {
  live: "Live today",
  coming: "Coming",
  later: "Coming after launch",
};

export type FaqEntry = { slug: string; question: string; answer: string };

export function getFaqItems(showTodayBlock: boolean): FaqEntry[] {
  const notReady = showTodayBlock
    ? "You can use today's WebLeads from day one. If the new search isn't live by December 31, 2026, you get a full refund."
    : "If the new search isn't live by December 31, 2026, you get a full refund.";
  return [
    {
      slug: "lifetime-deal",
      question: "Is this a lifetime deal?",
      answer:
        "No. It's a yearly plan, paid upfront. You keep the price you bought at ($199 or $249) every year you renew without a gap.",
    },
    { slug: "new-search-not-ready", question: "What if the new search isn't ready?", answer: notReady },
    {
      slug: "verified-email",
      question: "What counts as a verified email in the new search?",
      answer:
        "An email that passes our check. Catch-all and unknown results won't use a credit. (Today's product charges differently: a manual unlock that ends in a catch-all still uses a credit.)",
    },
    {
      slug: "why-yearly",
      question: "Why yearly and not monthly?",
      answer:
        "Most people work a list in bursts, not every month. A prepaid yearly bank lets you use your allowance when you need it instead of losing it each month. Coming after launch: a weekly re-run, where every week WebLeads will look for new businesses that match your request and send you the new ones. It draws from the same yearly allowance. Founding members get it first. We haven't set a date, and it isn't part of the December 31 refund promise, which covers only the new plain-English search.",
    },
    {
      slug: "sends-emails",
      question: "Does it send emails for me?",
      answer: "No. It finds and checks the contacts. You send from your own tool.",
    },
  ];
}
