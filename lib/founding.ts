export type FoundingPrice = 199 | 249;

export type FoundingSeats = {
  seatsLeft199: number | null;
  seatsLeft249: number | null;
};

export type FoundingConfig = FoundingSeats & {
  checkoutUrl: string | null;
  showTodayBlock: boolean;
};

export type FoundingState = {
  ctaEnabled: boolean;
  soldOut: boolean;
  currentPrice: FoundingPrice | null;
  ctaLabel: string;
  counterText: string | null;
  showTodayBlock: boolean;
  checkoutUrl: string | null;
};

export const SEATS_AT_199 = 15;
export const SEATS_AT_249 = 35;

type FoundingEnv = Record<string, string | undefined>;

export function parseCheckoutUrl(raw: string | undefined | null): string | null {
  const trimmed = (raw ?? "").trim();
  if (trimmed === "") return null;
  try {
    return new URL(trimmed).protocol === "https:" ? trimmed : null;
  } catch {
    return null;
  }
}

export function parseSeatCount(raw: string | undefined | null, max: number): number | null {
  const trimmed = (raw ?? "").trim();
  if (!/^\d+$/.test(trimmed)) return null;
  const count = Number(trimmed);
  return count <= max ? count : null;
}

export function parseShowToday(raw: string | undefined | null): boolean {
  const normalized = (raw ?? "").trim().toLowerCase();
  return !["0", "false", "off", "no"].includes(normalized);
}

export function getFoundingSeatsLeft(env: FoundingEnv = process.env): FoundingSeats {
  return {
    seatsLeft199: parseSeatCount(env.NEXT_PUBLIC_FOUNDING_SEATS_LEFT_199, SEATS_AT_199),
    seatsLeft249: parseSeatCount(env.NEXT_PUBLIC_FOUNDING_SEATS_LEFT_249, SEATS_AT_249),
  };
}

export function readFoundingConfig(env: FoundingEnv = process.env): FoundingConfig {
  return {
    checkoutUrl: parseCheckoutUrl(env.NEXT_PUBLIC_FOUNDING_STRIPE_LINK),
    showTodayBlock: parseShowToday(env.NEXT_PUBLIC_FOUNDING_SHOW_TODAY),
    ...getFoundingSeatsLeft(env),
  };
}

export function getCurrentPrice(seats: FoundingSeats): FoundingPrice | null {
  const { seatsLeft199, seatsLeft249 } = seats;
  if (seatsLeft199 === null) return null;
  if (seatsLeft199 > 0) return 199;
  return seatsLeft249 !== null && seatsLeft249 > 0 ? 249 : null;
}

export function isSoldOut(seats: FoundingSeats): boolean {
  return seats.seatsLeft199 === 0 && seats.seatsLeft249 === 0;
}

export function getCounterText(seats: FoundingSeats): string | null {
  const { seatsLeft199, seatsLeft249 } = seats;
  if (seatsLeft199 !== null && seatsLeft199 > 0) {
    return `${seatsLeft199} of ${SEATS_AT_199} left at $199, then $249`;
  }
  if (seatsLeft199 === 0 && seatsLeft249 !== null && seatsLeft249 > 0) {
    return `${seatsLeft249} of ${SEATS_AT_249} left at $249`;
  }
  return null;
}

export function getCtaLabel(
  ctaEnabled: boolean,
  soldOut: boolean,
  price: FoundingPrice | null
): string {
  if (soldOut) return "All founding spots are taken";
  if (!ctaEnabled) return "Opens soon";
  return price === null ? "Get a founding spot" : `Get a founding spot ($${price}/year)`;
}

export function buildFoundingState(config: FoundingConfig): FoundingState {
  const soldOut = isSoldOut(config);
  const ctaEnabled = config.checkoutUrl !== null && !soldOut;
  const currentPrice = soldOut ? null : getCurrentPrice(config);
  return {
    ctaEnabled,
    soldOut,
    currentPrice,
    ctaLabel: getCtaLabel(ctaEnabled, soldOut, currentPrice),
    counterText: ctaEnabled ? getCounterText(config) : null,
    showTodayBlock: config.showTodayBlock,
    checkoutUrl: ctaEnabled ? config.checkoutUrl : null,
  };
}
