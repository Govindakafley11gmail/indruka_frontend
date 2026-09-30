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
      "3-star hotel accommodation with breakfast, all transfers included",
      "Note: Bhutan's Sustainable Development Fee (SDF) is included in the pricing",
    ],
    images: [
      "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581587697675-45756bc5c402?auto=format&fit=crop&w=1200&q=80",
    ],
    pricing: {
      IN: {
        currency: "INR",
        tiers: [
          { guests: 16, originalPerPerson: 32000, offerPerPerson: 30000 },
          { guests: 12, originalPerPerson: 36000, offerPerPerson: 32000 },
          { guests: 8, originalPerPerson: 42500, offerPerPerson: 37500 },
          { guests: 6, originalPerPerson: 48000, offerPerPerson: 42000 },
          { guests: 4, originalPerPerson: 56000, offerPerPerson: 51000 },
          { guests: 2, originalPerPerson: 66000, offerPerPerson: 61999 },
        ],
      },
      US: {
        currency: "USD",
        tiers: [
          { guests: 16, originalPerPerson: 1150, offerPerPerson: 1050 },
          { guests: 12, originalPerPerson: 1200, offerPerPerson: 1100 },
          { guests: 8, originalPerPerson: 1270, offerPerPerson: 1170 },
          { guests: 6, originalPerPerson: 1320, offerPerPerson: 1220 },
          { guests: 4, originalPerPerson: 1370, offerPerPerson: 1270 },
          { guests: 2, originalPerPerson: 1450, offerPerPerson: 1350 },
        ],
      },
      DEFAULT: {
        currency: "USD",
        tiers: [
          { guests: 16, originalPerPerson: 1150, offerPerPerson: 1050 },
          { guests: 12, originalPerPerson: 1200, offerPerPerson: 1100 },
          { guests: 8, originalPerPerson: 1270, offerPerPerson: 1170 },
          { guests: 6, originalPerPerson: 1320, offerPerPerson: 1220 },
          { guests: 4, originalPerPerson: 1370, offerPerPerson: 1270 },
          { guests: 2, originalPerPerson: 1450, offerPerPerson: 1350 },
        ],
      },
    },
    validUntil: "2026-10-15",
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
      "Note: Bhutan's Sustainable Development Fee (SDF) is included in the pricing",
    ],
    images: [
      "https://images.unsplash.com/photo-1602058033339-b9325bb3a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1650747858910-5d48a4116296?auto=format&fit=crop&w=1200&q=80",
    ],
    pricing: {
      IN: {
        currency: "INR",
        tiers: [
          { guests: 16, originalPerPerson: 32000, offerPerPerson: 30000 },
          { guests: 12, originalPerPerson: 36000, offerPerPerson: 32000 },
          { guests: 8, originalPerPerson: 42500, offerPerPerson: 37500 },
          { guests: 6, originalPerPerson: 48000, offerPerPerson: 42000 },
          { guests: 4, originalPerPerson: 56000, offerPerPerson: 51000 },
          { guests: 2, originalPerPerson: 66000, offerPerPerson: 61999 },
        ],
      },
      US: {
        currency: "USD",
        tiers: [
          { guests: 16, originalPerPerson: 1490, offerPerPerson: 1390 },
          { guests: 12, originalPerPerson: 1550, offerPerPerson: 1450 },
          { guests: 8, originalPerPerson: 1640, offerPerPerson: 1540 },
          { guests: 6, originalPerPerson: 1710, offerPerPerson: 1610 },
          { guests: 4, originalPerPerson: 1790, offerPerPerson: 1690 },
          { guests: 2, originalPerPerson: 1890, offerPerPerson: 1790 },
        ],
      },
      DEFAULT: {
        currency: "USD",
        tiers: [
          { guests: 16, originalPerPerson: 1490, offerPerPerson: 1390 },
          { guests: 12, originalPerPerson: 1550, offerPerPerson: 1450 },
          { guests: 8, originalPerPerson: 1640, offerPerPerson: 1540 },
          { guests: 6, originalPerPerson: 1710, offerPerPerson: 1610 },
          { guests: 4, originalPerPerson: 1790, offerPerPerson: 1690 },
          { guests: 2, originalPerPerson: 1890, offerPerPerson: 1790 },
        ],
      },
    },
    validUntil: "2026-12-30",
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
      "Note: Bhutan's Sustainable Development Fee (SDF) is included in the pricing",
    ],
    images: [
      "https://images.unsplash.com/photo-1585904194096-15ef66ccd234?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1532008779255-4b4dd2668c84?auto=format&fit=crop&w=1200&q=80",
    ],
    pricing: {
      IN: {
        currency: "INR",
        tiers: [
          { guests: 16, originalPerPerson: 32000, offerPerPerson: 30000 },
          { guests: 12, originalPerPerson: 36000, offerPerPerson: 32000 },
          { guests: 8, originalPerPerson: 42500, offerPerPerson: 37500 },
          { guests: 6, originalPerPerson: 48000, offerPerPerson: 42000 },
          { guests: 4, originalPerPerson: 56000, offerPerPerson: 51000 },
          { guests: 2, originalPerPerson: 66000, offerPerPerson: 61999 },
        ],
      },
      US: {
        currency: "USD",
        tiers: [
          { guests: 16, originalPerPerson: 1940, offerPerPerson: 1840 },
          { guests: 12, originalPerPerson: 2020, offerPerPerson: 1920 },
          { guests: 8, originalPerPerson: 2140, offerPerPerson: 2040 },
          { guests: 6, originalPerPerson: 2240, offerPerPerson: 2140 },
          { guests: 4, originalPerPerson: 2350, offerPerPerson: 2250 },
          { guests: 2, originalPerPerson: 2490, offerPerPerson: 2390 },
        ],
      },
      DEFAULT: {
        currency: "USD",
        tiers: [
          { guests: 16, originalPerPerson: 1940, offerPerPerson: 1840 },
          { guests: 12, originalPerPerson: 2020, offerPerPerson: 1920 },
          { guests: 8, originalPerPerson: 2140, offerPerPerson: 2040 },
          { guests: 6, originalPerPerson: 2240, offerPerPerson: 2140 },
          { guests: 4, originalPerPerson: 2350, offerPerPerson: 2250 },
          { guests: 2, originalPerPerson: 2490, offerPerPerson: 2390 },
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
      "Paro, Thimphu and Punakha, Bhutan's western valleys in one trip",
      "Tiger's Nest (Taktsang) monastery hike",
      "Punakha Dzong and Dochula Pass",
      "Thimphu sightseeing with a private guide",
      "Note: Bhutan's Sustainable Development Fee (SDF) is included in the pricing",
      "Not included: lunch and dinner, airfare, travel insurance, personal expenses, tips, monument fees",
    ],
    images: [
      "https://images.unsplash.com/photo-1729176989417-10cab5aa9076?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580649851649-992b28f56e98?auto=format&fit=crop&w=1200&q=80",
    ],
    pricing: {
      IN: {
        currency: "INR",
        // TODO: placeholder INR prices, replace with your real ones
        tiers: [
          { guests: 16, originalPerPerson: 32000, offerPerPerson: 30000 },
          { guests: 12, originalPerPerson: 36000, offerPerPerson: 32000 },
          { guests: 8, originalPerPerson: 42500, offerPerPerson: 37500 },
          { guests: 6, originalPerPerson: 48000, offerPerPerson: 42000 },
          { guests: 4, originalPerPerson: 56000, offerPerPerson: 51000 },
          { guests: 2, originalPerPerson: 66000, offerPerPerson: 61999 },
        ],
      },
      US: {
        currency: "USD",
        tiers: [
          { guests: 16, originalPerPerson: 1199, offerPerPerson: 1099 },
          { guests: 12, originalPerPerson: 1249, offerPerPerson: 1149 },
          { guests: 8, originalPerPerson: 1299, offerPerPerson: 1199 },
          { guests: 6, originalPerPerson: 1399, offerPerPerson: 1299 },
          { guests: 4, originalPerPerson: 1499, offerPerPerson: 1399 },
          { guests: 2, originalPerPerson: 1799, offerPerPerson: 1699 },
        ],
      },
      DEFAULT: {
        currency: "USD",
        tiers: [
          { guests: 16, originalPerPerson: 1199, offerPerPerson: 1099 },
          { guests: 12, originalPerPerson: 1249, offerPerPerson: 1149 },
          { guests: 8, originalPerPerson: 1299, offerPerPerson: 1199 },
          { guests: 6, originalPerPerson: 1399, offerPerPerson: 1299 },
          { guests: 4, originalPerPerson: 1499, offerPerPerson: 1399 },
          { guests: 2, originalPerPerson: 1799, offerPerPerson: 1699 },
        ],
      },
    },
    validUntil: "2027-12-31", // TODO: set the real offer expiry date
    slug: "group-special-offer",
  },

  // ---------------------------------------------------------------------
  // LUXURY TRAVEL
  // TODO: all luxury prices, highlights, images and dates below are
  // placeholders. Replace them with your real package details.
  // ---------------------------------------------------------------------
  {
    id: "luxury-bhutan-heritage-journey",
    title: "Luxury Bhutan Heritage Journey",
    durationDays: 7,
    durationNights: 6,
    minGroupSize: 2,
    highlights: [
      "Paro, Thimphu and Punakha with a private luxury vehicle and driver",
      "Stay in 4-star hotels and boutique lodges throughout",
      "Private guided Tiger's Nest (Taktsang) hike with a picnic lunch",
      "Punakha Dzong, Dochula Pass and a private farmhouse dinner",
      "All meals included",
      "Note: Bhutan's Sustainable Development Fee (SDF) is included in the pricing",
      "Not included: airfare, travel insurance, personal expenses, tips",

    ],
    images: [
      "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602058033339-b9325bb3a6c3?auto=format&fit=crop&w=1200&q=80",
    ],
    pricing: {
      IN: {
        currency: "INR",
        tiers: [
          { guests: 16, originalPerPerson: 155000, offerPerPerson: 155000 },
          { guests: 12, originalPerPerson: 165000, offerPerPerson: 165000 },
          { guests: 8, originalPerPerson: 175000, offerPerPerson: 175000 },
          { guests: 6, originalPerPerson: 185000, offerPerPerson: 185000 },
          { guests: 4, originalPerPerson: 195000, offerPerPerson: 195000 },
          { guests: 2, originalPerPerson: 210000, offerPerPerson: 210000 },
        ],
      },
      US: {
        currency: "USD",
        tiers: [
          { guests: 16, originalPerPerson: 3090, offerPerPerson: 2990 },
          { guests: 12, originalPerPerson: 3290, offerPerPerson: 3190 },
          { guests: 8, originalPerPerson: 3490, offerPerPerson: 3390 },
          { guests: 6, originalPerPerson: 3690, offerPerPerson: 3590 },
          { guests: 4, originalPerPerson: 3890, offerPerPerson: 3790 },
          { guests: 2, originalPerPerson: 4190, offerPerPerson: 4090 },
        ],
      },
      DEFAULT: {
        currency: "USD",
        tiers: [
          { guests: 16, originalPerPerson: 3090, offerPerPerson: 2990 },
          { guests: 12, originalPerPerson: 3290, offerPerPerson: 3190 },
          { guests: 8, originalPerPerson: 3490, offerPerPerson: 3390 },
          { guests: 6, originalPerPerson: 3690, offerPerPerson: 3590 },
          { guests: 4, originalPerPerson: 3890, offerPerPerson: 3790 },
          { guests: 2, originalPerPerson: 4190, offerPerPerson: 4090 },
        ],
      },
    },
    validUntil: "2027-12-31", // TODO: set the real offer expiry date
    slug: "luxury-bhutan-heritage-journey",
  },
  {
    id: "luxury-himalayan-retreat",
    title: "Luxury Himalayan Wellness Retreat",
    durationDays: 8,
    durationNights: 7,
    minGroupSize: 2,
    highlights: [
      "Paro, Thimphu, Punakha and Bumthang in a slow, private-guided journey",
      "Stay in 4-star resorts with spa access",
      "Traditional hot stone bath and guided meditation sessions",
      "Private cultural experiences with monks and local artisans",
      "All meals included",
      "Note: Bhutan's Sustainable Development Fee (SDF) is included in the pricing",
      "Not included: airfare, travel insurance, personal expenses, tips",
    ],
    images: [
      "https://images.unsplash.com/photo-1650747858910-5d48a4116296?auto=format&fit=crop&w=800&h=600&q=75",
      "https://images.unsplash.com/photo-1585904194096-15ef66ccd234?auto=format&fit=crop&w=800&h=600&q=75",
    ],
    pricing: {
      IN: {
        currency: "INR",
        tiers: [
          { guests: 16, originalPerPerson: 215000, offerPerPerson: 215000 },
          { guests: 12, originalPerPerson: 230000, offerPerPerson: 230000 },
          { guests: 8, originalPerPerson: 245000, offerPerPerson: 245000 },
          { guests: 6, originalPerPerson: 260000, offerPerPerson: 260000 },
          { guests: 4, originalPerPerson: 275000, offerPerPerson: 275000 },
          { guests: 2, originalPerPerson: 295000, offerPerPerson: 295000 },
        ],
      },
      US: {
        currency: "USD",
        tiers: [
          { guests: 16, originalPerPerson: 4090, offerPerPerson: 3990 },
          { guests: 12, originalPerPerson: 4390, offerPerPerson: 4290 },
          { guests: 8, originalPerPerson: 4690, offerPerPerson: 4590 },
          { guests: 6, originalPerPerson: 4890, offerPerPerson: 4790 },
          { guests: 4, originalPerPerson: 5190, offerPerPerson: 5090 },
          { guests: 2, originalPerPerson: 5690, offerPerPerson: 5590 },
        ],
      },
      DEFAULT: {
        currency: "USD",
        tiers: [
          { guests: 16, originalPerPerson: 4090, offerPerPerson: 3990 },
          { guests: 12, originalPerPerson: 4390, offerPerPerson: 4290 },
          { guests: 8, originalPerPerson: 4690, offerPerPerson: 4590 },
          { guests: 6, originalPerPerson: 4890, offerPerPerson: 4790 },
          { guests: 4, originalPerPerson: 5190, offerPerPerson: 5090 },
          { guests: 2, originalPerPerson: 5690, offerPerPerson: 5590 },
        ],
      },
    },
    validUntil: "2027-12-31", // TODO: set the real offer expiry date
    slug: "luxury-himalayan-retreat",
  },
{
  id: "bhutan-golf-and-culture",
  title: "Bhutan Golf & Culture Journey",
  durationDays: 7,
  durationNights: 6,
  minGroupSize: 2,
  highlights: [
    " Thimphu with rounds of golf and sightseeing on alternate days",
    "Play at the Royal Thimphu Golf Course, with scenic mountain views",
    "Tiger's Nest hike, Punakha Dzong and Dochula Pass for non-golfing days",
    "Caddie, green fees and club rental included (confirm with your ground operator)",
    "Non-golfing partners can join the cultural program instead of the round",
    "Stay in 3-4 star hotels with all meals included",
    "Note: Bhutan's Sustainable Development Fee (SDF) is included in the pricing",
    "Not included: airfare, travel insurance, personal expenses, tips",
  ],
  images: [
    "/gulf.jpg",
  ],
  pricing: {
    IN: {
      currency: "INR",
      tiers: [
        { guests: 16, originalPerPerson: 109000, offerPerPerson: 95900 },
        { guests: 12, originalPerPerson: 114000, offerPerPerson: 100300 },
        { guests: 8, originalPerPerson: 119000, offerPerPerson: 104700 },
        { guests: 6, originalPerPerson: 124000, offerPerPerson: 109100 },
        { guests: 4, originalPerPerson: 135000, offerPerPerson: 118800 },
        { guests: 2, originalPerPerson: 150000, offerPerPerson: 132000 },
      ],
    },
    US: {
      currency: "USD",
      tiers: [
        { guests: 16, originalPerPerson: 2090, offerPerPerson: 1840 },
        { guests: 12, originalPerPerson: 2190, offerPerPerson: 1930 },
        { guests: 8, originalPerPerson: 2290, offerPerPerson: 2020 },
        { guests: 6, originalPerPerson: 2390, offerPerPerson: 2100 },
        { guests: 4, originalPerPerson: 2590, offerPerPerson: 2280 },
        { guests: 2, originalPerPerson: 2890, offerPerPerson: 2540 },
      ],
    },
    DEFAULT: {
      currency: "USD",
      tiers: [
        { guests: 16, originalPerPerson: 2090, offerPerPerson: 1840 },
        { guests: 12, originalPerPerson: 2190, offerPerPerson: 1930 },
        { guests: 8, originalPerPerson: 2290, offerPerPerson: 2020 },
        { guests: 6, originalPerPerson: 2390, offerPerPerson: 2100 },
        { guests: 4, originalPerPerson: 2590, offerPerPerson: 2280 },
        { guests: 2, originalPerPerson: 2890, offerPerPerson: 2540 },
      ],
    },
  },
  validUntil: "2027-12-31", // TODO: set the real offer expiry date
  slug: "bhutan-golf-and-culture",
},
{
  id: "bhutan-birding-expedition",
  title: "Bhutan Birding Expedition",
  durationDays: 9,
  durationNights: 8,
  minGroupSize: 2,
  highlights: [
    "Paro, Thimphu, Punakha, Phobjikha and Bumthang with early-morning birding walks",
    "Phobjikha Valley, winter home of the black-necked crane (best from November to February)",
    "Expert birding guide, plus spotting scope and binocular support (confirm with your ground operator)",
    "Forest and river birding around Punakha and Dochula Pass",
    "Cultural stops at Punakha Dzong, Tiger's Nest viewpoint and local villages between birding sessions",
    "Stay in 3-4 star hotels and farmhouses with all meals included",
    "Note: Bhutan's Sustainable Development Fee (SDF) is included in the pricing",
    "Not included: airfare, travel insurance, personal expenses, tips",
  ],
  images: [
    "/bird9.jpg",
  ],
  pricing: {
    IN: {
      currency: "INR",
      tiers: [
        { guests: 16, originalPerPerson: 108000, offerPerPerson: 95000 },
        { guests: 12, originalPerPerson: 114000, offerPerPerson: 100300 },
        { guests: 8, originalPerPerson: 120000, offerPerPerson: 105600 },
        { guests: 6, originalPerPerson: 126000, offerPerPerson: 110900 },
        { guests: 4, originalPerPerson: 138000, offerPerPerson: 121400 },
        { guests: 2, originalPerPerson: 154000, offerPerPerson: 135500 },
      ],
    },
    US: {
      currency: "USD",
      tiers: [
        { guests: 16, originalPerPerson: 2090, offerPerPerson: 1840 },
        { guests: 12, originalPerPerson: 2190, offerPerPerson: 1930 },
        { guests: 8, originalPerPerson: 2290, offerPerPerson: 2020 },
        { guests: 6, originalPerPerson: 2440, offerPerPerson: 2150 },
        { guests: 4, originalPerPerson: 2640, offerPerPerson: 2320 },
        { guests: 2, originalPerPerson: 2940, offerPerPerson: 2590 },
      ],
    },
    DEFAULT: {
      currency: "USD",
      tiers: [
        { guests: 16, originalPerPerson: 2090, offerPerPerson: 1840 },
        { guests: 12, originalPerPerson: 2190, offerPerPerson: 1930 },
        { guests: 8, originalPerPerson: 2290, offerPerPerson: 2020 },
        { guests: 6, originalPerPerson: 2440, offerPerPerson: 2150 },
        { guests: 4, originalPerPerson: 2640, offerPerPerson: 2320 },
        { guests: 2, originalPerPerson: 2940, offerPerPerson: 2590 },
      ],
    },
  },
  validUntil: "2027-12-31", // TODO: set the real offer expiry date
  slug: "bhutan-birding-expedition",
},
{
  id: "bhutan-trekking-adventure",
  title: "Bhutan Druk Path Trekking Adventure",
  durationDays: 8,
  durationNights: 7,
  minGroupSize: 2,
  highlights: [
    "Multi-day Druk Path trek between Paro and Thimphu through alpine lakes and ridgelines",
    "Guide, cook, pack animals and camping gear included (confirm with your ground operator)",
    "Hotel nights in Paro and Thimphu, camping on the trail, all meals included",
    "Tiger's Nest hike as an acclimatization day before the trek",
    "Time in Thimphu for sightseeing after the trek",
    "Moderate fitness required; the trail reaches high altitude",
    "Note: Bhutan's Sustainable Development Fee (SDF) is included in the pricing",
    "Not included: airfare, travel insurance, personal expenses, tips",
  ],
  images: [
    "/tigers-nest-path.jpg",
  ],
  pricing: {
    IN: {
      currency: "INR",
      tiers: [
        { guests: 16, originalPerPerson: 167000, offerPerPerson: 147000 },
        { guests: 12, originalPerPerson: 175000, offerPerPerson: 154000 },
        { guests: 8, originalPerPerson: 183000, offerPerPerson: 161000 },
        { guests: 6, originalPerPerson: 191000, offerPerPerson: 168100 },
        { guests: 4, originalPerPerson: 207000, offerPerPerson: 182200 },
        { guests: 2, originalPerPerson: 226000, offerPerPerson: 198900 },
      ],
    },
    US: {
      currency: "USD",
      tiers: [
        { guests: 16, originalPerPerson: 3190, offerPerPerson: 2810 },
        { guests: 12, originalPerPerson: 3340, offerPerPerson: 2940 },
        { guests: 8, originalPerPerson: 3490, offerPerPerson: 3070 },
        { guests: 6, originalPerPerson: 3640, offerPerPerson: 3200 },
        { guests: 4, originalPerPerson: 3940, offerPerPerson: 3470 },
        { guests: 2, originalPerPerson: 4290, offerPerPerson: 3780 },
      ],
    },
    DEFAULT: {
      currency: "USD",
      tiers: [
        { guests: 16, originalPerPerson: 3190, offerPerPerson: 2810 },
        { guests: 12, originalPerPerson: 3340, offerPerPerson: 2940 },
        { guests: 8, originalPerPerson: 3490, offerPerPerson: 3070 },
        { guests: 6, originalPerPerson: 3640, offerPerPerson: 3200 },
        { guests: 4, originalPerPerson: 3940, offerPerPerson: 3470 },
        { guests: 2, originalPerPerson: 4290, offerPerPerson: 3780 },
      ],
    },
  },
  validUntil: "2027-12-31", // TODO: set the real offer expiry date
  slug: "bhutan-trekking-adventure",
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