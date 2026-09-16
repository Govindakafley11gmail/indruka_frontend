// lib/special-offers/data.ts
// "Special offer" packages for Indruka Tours.
//
// The India vs. Rest-of-World split reflects Bhutan's actual Sustainable
// Development Fee (SDF) structure: Indian nationals pay a much lower daily
// SDF (~Nu 1,200/day) than other international tourists (~$100/day), so a
// genuine two-tier price is accurate, not just a marketing gimmick.
//
// Group pricing: per-person rate drops as group size increases, since fixed
// costs (guide, vehicle, permits) are shared across more travelers.
//
// Pricing tiers are keyed on an EXACT guest count (not a range). When a
// booking's group size doesn't land exactly on a listed tier, the price
// used is the highest tier the group size still qualifies for (see
// getTierForGroupSize below) — e.g. a 10-guest booking against tiers of
// 8 and 12 uses the 8-guest price, since the group hasn't reached the
// 12-guest discount threshold.

export type Region = "IN" | "US" | "DEFAULT";

export interface GroupTierPrice {
  guests: number; // exact group size this price applies to, e.g. 2, 4, 6, 8, 12, 16
  originalPerPerson: number;
  offerPerPerson: number;
}

export interface RegionPricing {
  currency: "INR" | "USD";
  tiers: GroupTierPrice[]; // any order; getTierForGroupSize sorts internally
}

export interface SpecialOffer {
  id: string;
  title: string;
  durationDays: number;
  durationNights: number;
  minGroupSize: number;
  highlights: string[];
  images: string[];
  pricing: {
    IN: RegionPricing;
    US: RegionPricing;
    DEFAULT: RegionPricing;
  };
  validUntil: string; // ISO date
  slug: string;
}

export const specialOffers: SpecialOffer[] = [
  {
    id: "paro-tshechu-festival",
    title: "Paro Tshechu Festival Special",
    durationDays: 6,
    durationNights: 5,
    minGroupSize: 2,
    highlights: [
      "Front-row access to Paro Tshechu mask dances",
      "Tiger's Nest (Taktsang) monastery hike",
      "Paro & Thimphu sightseeing with private guide",
      "4-star hotel accommodation, all transfers included",
    ],
    images: [
      "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581587697675-45756bc5c402?auto=format&fit=crop&w=1200&q=80",
    ],
    pricing: {
      IN: {
        currency: "INR",
        tiers: [
          { guests: 2, originalPerPerson: 45000, offerPerPerson: 36000 },
          { guests: 5, originalPerPerson: 41000, offerPerPerson: 33000 },
          { guests: 10, originalPerPerson: 37000, offerPerPerson: 29500 },
        ],
      },
      US: {
        currency: "USD",
        tiers: [
          { guests: 2, originalPerPerson: 1450, offerPerPerson: 1250 },
          { guests: 5, originalPerPerson: 1320, offerPerPerson: 1140 },
          { guests: 10, originalPerPerson: 1190, offerPerPerson: 1020 },
        ],
      },
      DEFAULT: {
        currency: "USD",
        tiers: [
          { guests: 2, originalPerPerson: 1450, offerPerPerson: 1250 },
          { guests: 5, originalPerPerson: 1320, offerPerPerson: 1140 },
          { guests: 10, originalPerPerson: 1190, offerPerPerson: 1020 },
        ],
      },
    },
    validUntil: "2027-03-15",
    slug: "paro-tshechu-festival-special",
  },
  {
    id: "bhutan-golden-circle",
    title: "Bhutan Golden Circle",
  durationDays: 6,
    durationNights: 5,
    minGroupSize: 2,
    highlights: [
      "Thimphu, Punakha, Paro — Bhutan's classic circuit",
      "Punakha Dzong & Dochula Pass",
      "Local farmhouse lunch experience",
      "Dedicated English-speaking guide throughout",
    ],
    images: [
      "https://images.unsplash.com/photo-1602058033339-b9325bb3a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1650747858910-5d48a4116296?auto=format&fit=crop&w=1200&q=80",
    ],
    pricing: {
      IN: {
        currency: "INR",
        tiers: [
          { guests: 2, originalPerPerson: 62000, offerPerPerson: 52000 },
          { guests: 5, originalPerPerson: 57000, offerPerPerson: 47500 },
          { guests: 10, originalPerPerson: 52000, offerPerPerson: 43000 },
        ],
      },
      US: {
        currency: "USD",
        tiers: [
          { guests: 2, originalPerPerson: 1950, offerPerPerson: 1690 },
          { guests: 5, originalPerPerson: 1780, offerPerPerson: 1540 },
          { guests: 10, originalPerPerson: 1610, offerPerPerson: 1390 },
        ],
      },
      DEFAULT: {
        currency: "USD",
        tiers: [
          { guests: 2, originalPerPerson: 1950, offerPerPerson: 1690 },
          { guests: 5, originalPerPerson: 1780, offerPerPerson: 1540 },
          { guests: 10, originalPerPerson: 1610, offerPerPerson: 1390 },
        ],
      },
    },
    validUntil: "2027-04-30",
    slug: "bhutan-golden-circle",
  },
  {
    id: "eastern-bhutan-adventure",
    title: "Eastern Bhutan Adventure",
     durationDays: 6,
    durationNights: 5,
    minGroupSize: 2,
    highlights: [
      "Off-the-beaten-path eastern valleys",
      "Trashigang, Mongar, Bumthang cultural stops",
      "Textile weaving village visit",
      "Small-group departures only",
    ],
    images: [
      "https://images.unsplash.com/photo-1585904194096-15ef66ccd234?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1532008779255-4b4dd2668c84?auto=format&fit=crop&w=1200&q=80",
    ],
    pricing: {
      IN: {
        currency: "INR",
        tiers: [
          { guests: 2, originalPerPerson: 85000, offerPerPerson: 69000 },
          { guests: 5, originalPerPerson: 78000, offerPerPerson: 63000 },
          { guests: 10, originalPerPerson: 71000, offerPerPerson: 57000 },
        ],
      },
      US: {
        currency: "USD",
        tiers: [
          { guests: 2, originalPerPerson: 2650, offerPerPerson: 2290 },
          { guests: 5, originalPerPerson: 2420, offerPerPerson: 2090 },
          { guests: 10, originalPerPerson: 2190, offerPerPerson: 1890 },
        ],
      },
      DEFAULT: {
        currency: "USD",
        tiers: [
          { guests: 2, originalPerPerson: 2650, offerPerPerson: 2290 },
          { guests: 5, originalPerPerson: 2420, offerPerPerson: 2090 },
          { guests: 10, originalPerPerson: 2190, offerPerPerson: 1890 },
        ],
      },
    },
    validUntil: "2027-05-31",
    slug: "eastern-bhutan-adventure",
  },
 
   
  {
    // TODO: rename id/title/slug once you tell me which package this offer is for
    id: "group-special-offer",
    title: "Group Special Offer",
     durationDays: 6,
    durationNights: 5,
    minGroupSize: 2,
    highlights: [
      // TODO: add real highlights for this package
    ],
    images: [
      "https://images.unsplash.com/photo-1729176989417-10cab5aa9076?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580649851649-992b28f56e98?auto=format&fit=crop&w=1200&q=80",
    ],
    pricing: {
      IN: {
        currency: "INR",
        tiers: [
          // TODO: add INR-equivalent tiers for Indian nationals
        ],
      },
      US: {
        currency: "USD",
        tiers: [
          { guests: 16, originalPerPerson: 999, offerPerPerson: 999 },
          { guests: 12, originalPerPerson: 1049, offerPerPerson: 1049 },
          { guests: 8, originalPerPerson: 1099, offerPerPerson: 1099 },
          { guests: 6, originalPerPerson: 1199, offerPerPerson: 1199 },
          { guests: 4, originalPerPerson: 1299, offerPerPerson: 1299 },
          { guests: 2, originalPerPerson: 1599, offerPerPerson: 1599 },
        ],
      },
      DEFAULT: {
        currency: "USD",
        tiers: [
          { guests: 16, originalPerPerson: 999, offerPerPerson: 999 },
          { guests: 12, originalPerPerson: 1049, offerPerPerson: 1049 },
          { guests: 8, originalPerPerson: 1099, offerPerPerson: 1099 },
          { guests: 6, originalPerPerson: 1199, offerPerPerson: 1199 },
          { guests: 4, originalPerPerson: 1299, offerPerPerson: 1299 },
          { guests: 2, originalPerPerson: 1599, offerPerPerson: 1599 },
        ],
      },
    },
    validUntil: "2027-12-31", // TODO: set the real offer expiry date
    slug: "group-special-offer",
  },
];

/**
 * Returns the pricing tier that applies for a given group size.
 * Uses the highest tier the group size still qualifies for — a group
 * doesn't get a bigger discount than its actual size earns. If the group
 * is smaller than every listed tier, falls back to the smallest tier.
 */
export function getTierForGroupSize(
  region: RegionPricing,
  groupSize: number
): GroupTierPrice {
  const sortedDesc = [...region.tiers].sort((a, b) => b.guests - a.guests);
  const match = sortedDesc.find((t) => groupSize >= t.guests);
  return match ?? sortedDesc[sortedDesc.length - 1];
}