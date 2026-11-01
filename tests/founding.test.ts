import test from "node:test";
import assert from "node:assert/strict";
import {
  buildFoundingState,
  formatCounter,
  readFoundingConfig,
  type FoundingConfig,
} from "../lib/founding.ts";
import {
  ALLOWANCE,
  OFFER_ITEMS,
  getFaqItems,
  HERO,
  FOUNDING_META,
  LIVE_VS_COMING,
  REFUND_SENTENCE,
  getUnderCta,
} from "../lib/founding-copy.ts";

const LINK = "https://buy.stripe.com/test_abc";

function config(overrides: Partial<FoundingConfig> = {}): FoundingConfig {
  return {
    checkoutUrl: LINK,
    seatsLeft199: null,
    seatsLeft249: null,
    showTodayBlock: true,
    ...overrides,
  };
}

test("defaults: empty env disables CTA, hides counter, toggle ON", () => {
  const parsed = readFoundingConfig({});
  assert.equal(parsed.checkoutUrl, null);
  assert.equal(parsed.seatsLeft199, null);
  assert.equal(parsed.seatsLeft249, null);
  assert.equal(parsed.showTodayBlock, true);
  const state = buildFoundingState(parsed);
  assert.equal(state.ctaEnabled, false);
  assert.equal(state.ctaLabel, "Opens soon");
  assert.equal(state.checkoutUrl, null);
  assert.equal(state.counter, null);
});

test("CTA is active with an https link and shows the price", () => {
  const state = buildFoundingState(config({ seatsLeft199: 12 }));
  assert.equal(state.ctaEnabled, true);
  assert.equal(state.checkoutUrl, LINK);
  assert.equal(state.ctaLabel, "Get a founding spot ($199/year)");
});

test("non-https or invalid link keeps CTA disabled", () => {
  for (const raw of ["http://x.com", "not a url", "   "]) {
    const parsed = readFoundingConfig({ NEXT_PUBLIC_FOUNDING_STRIPE_LINK: raw });
    assert.equal(buildFoundingState(parsed).ctaEnabled, false);
  }
});

test("price: $199 only when 199-seats > 0, else $249, else no price", () => {
  assert.equal(buildFoundingState(config({ seatsLeft199: 3 })).currentPrice, 199);
  const second = buildFoundingState(config({ seatsLeft199: 0, seatsLeft249: 20 }));
  assert.equal(second.currentPrice, 249);
  assert.equal(second.ctaLabel, "Get a founding spot ($249/year)");
  const unknown199 = buildFoundingState(config({ seatsLeft199: null, seatsLeft249: 20 }));
  assert.equal(unknown199.currentPrice, null);
  assert.equal(unknown199.ctaLabel, "Get a founding spot");
});

test("price: both null never defaults to $199", () => {
  const state = buildFoundingState(config());
  assert.equal(state.currentPrice, null);
  assert.equal(state.ctaEnabled, true);
  assert.equal(state.ctaLabel, "Get a founding spot");
  assert.doesNotMatch(state.ctaLabel, /\$/);
  assert.equal(buildFoundingState(config({ seatsLeft199: 0 })).currentPrice, null);
});

test("counter is structured data", () => {
  assert.deepEqual(buildFoundingState(config({ seatsLeft199: 4 })).counter, {
    count: 4,
    total: 15,
    price: 199,
  });
});

test("counter text for both phases and hidden when data is null", () => {
  assert.equal(
    formatCounter(buildFoundingState(config({ seatsLeft199: 11 })).counter!),
    "11 of 15 left at $199, then $249"
  );
  assert.equal(
    formatCounter(buildFoundingState(config({ seatsLeft199: 0, seatsLeft249: 30 })).counter!),
    "30 of 35 left at $249"
  );
  assert.equal(buildFoundingState(config()).counter, null);
  assert.equal(buildFoundingState(config({ seatsLeft199: 0 })).counter, null);
});

test("counter is hidden whenever the CTA is disabled", () => {
  const state = buildFoundingState(config({ checkoutUrl: null, seatsLeft199: 11 }));
  assert.equal(state.ctaEnabled, false);
  assert.equal(state.counter, null);
});

test("out-of-range or non-integer seat values become null", () => {
  const parsed = readFoundingConfig({
    NEXT_PUBLIC_FOUNDING_SEATS_LEFT_199: "16",
    NEXT_PUBLIC_FOUNDING_SEATS_LEFT_249: "-1",
  });
  assert.equal(parsed.seatsLeft199, null);
  assert.equal(parsed.seatsLeft249, null);
  assert.equal(readFoundingConfig({ NEXT_PUBLIC_FOUNDING_SEATS_LEFT_199: "4.5" }).seatsLeft199, null);
  assert.equal(readFoundingConfig({ NEXT_PUBLIC_FOUNDING_SEATS_LEFT_199: "7" }).seatsLeft199, 7);
});

test("sold out: both counts zero disables CTA and hides counter", () => {
  const state = buildFoundingState(config({ seatsLeft199: 0, seatsLeft249: 0 }));
  assert.equal(state.soldOut, true);
  assert.equal(state.ctaEnabled, false);
  assert.equal(state.ctaLabel, "All founding spots are taken");
  assert.equal(state.currentPrice, null);
  assert.equal(state.counter, null);
  assert.equal(buildFoundingState(config({ seatsLeft199: 0, seatsLeft249: 5 })).soldOut, false);
});

test("sold out hides the live-price offer item, others stay", () => {
  const priced = OFFER_ITEMS.filter((item) => item.hideWhenSoldOut);
  assert.equal(priced.length, 1);
  assert.match(priced[0].text, /\$199/);
  const kept = OFFER_ITEMS.filter((item) => !item.hideWhenSoldOut);
  assert.equal(kept.length, OFFER_ITEMS.length - 1);
  assert.equal(kept.some((item) => /\$199|\$249/.test(item.text)), false);
});

test("sold out under-CTA drops the spots sentence, keeps refund", () => {
  assert.equal(getUnderCta(true), REFUND_SENTENCE);
  assert.match(getUnderCta(false), /^50 founding spots\. Full refund/);
});

test("copy: meta description <= 155 chars, no em dashes, refund note on later items", () => {
  assert.ok(FOUNDING_META.description.length <= 155);
  const all = JSON.stringify([FOUNDING_META, HERO, OFFER_ITEMS, getFaqItems(true), LIVE_VS_COMING]);
  assert.equal(all.includes("\u2014"), false);
  const later = OFFER_ITEMS.filter((item) => item.kind === "later");
  for (const item of later) {
    assert.match(item.text, /\(No date yet\.\) Not part of the December 31 refund promise\.$/);
  }
});

test("today toggle: default ON, off for 0/false, drives copy", () => {
  assert.equal(readFoundingConfig({}).showTodayBlock, true);
  assert.equal(readFoundingConfig({ NEXT_PUBLIC_FOUNDING_SHOW_TODAY: "1" }).showTodayBlock, true);
  assert.equal(readFoundingConfig({ NEXT_PUBLIC_FOUNDING_SHOW_TODAY: "0" }).showTodayBlock, false);
  assert.equal(readFoundingConfig({ NEXT_PUBLIC_FOUNDING_SHOW_TODAY: "false" }).showTodayBlock, false);

  const on = getFaqItems(true).find((item) => item.slug === "new-search-not-ready");
  const off = getFaqItems(false).find((item) => item.slug === "new-search-not-ready");
  assert.match(on?.answer ?? "", /You can use today's WebLeads from day one\./);
  assert.doesNotMatch(off?.answer ?? "", /day one/);
  assert.equal(buildFoundingState(config({ showTodayBlock: false })).showTodayBlock, false);

  const todayItems = OFFER_ITEMS.filter((item) => item.todayOnly);
  assert.equal(todayItems.length, 1);
  assert.match(HERO.subheadToday, /day one/);
  assert.doesNotMatch(HERO.subheadBase, /day one/);
});

test("every allowance number keeps 'up to'", () => {
  const strings = [ALLOWANCE.yearlyEmails, ALLOWANCE.monthlyEmails];
  assert.match(strings[0], /up to 3,000 verified emails/i);
  assert.match(strings[0], /and up to 24,000 businesses/i);
  assert.match(strings[1], /up to 750 verified emails/i);
  assert.match(strings[1], /and up to 6,000 businesses/i);
  for (const item of OFFER_ITEMS) {
    for (const number of ["3,000", "24,000", "750", "6,000"]) {
      if (item.text.includes(number)) {
        assert.match(item.text, new RegExp(`up to ${number}`, "i"));
      }
    }
  }
});

test("planned items never carry the live kind", () => {
  const live = OFFER_ITEMS.filter((item) => item.kind === "live");
  assert.deepEqual(live.map((item) => item.todayOnly), [true]);
});
