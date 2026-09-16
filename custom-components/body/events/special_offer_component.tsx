// components/SpecialOffers.tsx
// Pages Router version — region is passed in as a prop (read server-side
// in getServerSideProps) instead of via next/headers.
//
// Updated for exact-guest-count pricing tiers: each offer now lists a
// specific price per exact group size (2, 4, 6, 8, 12, 16, ...) instead of
// a "2-4" / "5-9" / "10+" range bucket, so the tier selector below now
// picks a specific guest count rather than a range label.

"use client";

import { useState } from "react";
import {
  Region,
  specialOffers,
  getTierForGroupSize,
} from "./special_offer_data";

// Guest-count options shown as selector buttons. These are the group
// sizes your offers are commonly priced at — if a specific offer doesn't
// have a tier at one of these exact counts, getTierForGroupSize falls
// back to the next tier down, so the button still works, it just may
// show a slightly larger group's price for that offer.
const GROUP_SIZE_OPTIONS: { guests: number; label: string }[] = [
  { guests: 2, label: "2 travelers" },
  { guests: 4, label: "4 travelers" },
  { guests: 6, label: "6 travelers" },
  { guests: 8, label: "8 travelers" },
  { guests: 12, label: "12 travelers" },
  { guests: 16, label: "16+ travelers" },
];

function formatPrice(amount: number, currency: "INR" | "USD") {
  return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function getRegionLabel(region: Region) {
  if (region === "IN") return "Special pricing for Indian nationals";
  if (region === "US") return "Special offer for US travelers";
  return "Special offer";
}

interface SpecialOffersProps {
  region: Region;
}

export default function SpecialOffers({ region }: SpecialOffersProps) {
  const [groupSize, setGroupSize] = useState(2);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="mb-2 text-3xl font-semibold">Special Offers</h2>
          <p className="text-muted-foreground">{getRegionLabel(region)}</p>
        </div>

        <div className="inline-flex flex-wrap rounded-lg border p-1">
          {GROUP_SIZE_OPTIONS.map((opt) => (
            <button
              key={opt.guests}
              type="button"
              onClick={() => setGroupSize(opt.guests)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                groupSize === opt.guests
                  ? "bg-blue-600 text-white"
                  : "text-muted-foreground hover:bg-blue-50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {specialOffers.map((offer) => {
          const regionPricing = offer.pricing[region] ?? offer.pricing.DEFAULT;
          const price = getTierForGroupSize(regionPricing, groupSize);
          const discountPct = Math.round(
            ((price.originalPerPerson - price.offerPerPerson) /
              price.originalPerPerson) *
              100
          );
          // Total amount is per-person rate × the traveler count the user
          // actually selected (groupSize), not the tier's own guest count —
          // e.g. 10 travelers at the 8-guest tier's rate still totals ×10.
          const totalOriginal = price.originalPerPerson * groupSize;
          const totalOffer = price.offerPerPerson * groupSize;

          return (
            <article
              key={offer.id}
              className="flex flex-col overflow-hidden rounded-xl border shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={offer.images[0]}
                  alt={offer.title}
                  className="h-full w-full object-cover"
                />
                {discountPct > 0 && (
                  <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                    {discountPct}% OFF
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold">{offer.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  {offer.durationDays} Days / {offer.durationNights} Nights
                  {" · "}
                  Min {offer.minGroupSize} travelers
                </p>

                <ul className="mb-4 flex-1 list-disc space-y-1 pl-5 text-sm">
                  {offer.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="mb-1">
                  {price.originalPerPerson !== price.offerPerPerson && (
                    <span className="mr-2 text-sm text-muted-foreground line-through">
                      {formatPrice(price.originalPerPerson, regionPricing.currency)}
                    </span>
                  )}
                  <span className="text-xl font-bold text-blue-600">
                    {formatPrice(price.offerPerPerson, regionPricing.currency)}
                  </span>
                  <span className="ml-1 text-xs text-muted-foreground">
                    / person
                  </span>
                </div>

                <div className="mb-1">
                  {totalOriginal !== totalOffer && (
                    <span className="mr-2 text-sm text-muted-foreground line-through">
                      {formatPrice(totalOriginal, regionPricing.currency)}
                    </span>
                  )}
                  <span className="text-lg font-semibold text-blue-600">
                    {formatPrice(totalOffer, regionPricing.currency)}
                  </span>
                  <span className="ml-1 text-xs text-muted-foreground">
                    total for {groupSize} {groupSize === 1 ? "traveler" : "travelers"}
                  </span>
                </div>

                <p className="mb-4 text-xs text-muted-foreground">
                  Rate applies at groups of {price.guests}+ travelers
                </p>

                <p className="mb-4 text-xs text-muted-foreground">
                  Valid until{" "}
                  {new Date(offer.validUntil).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                <a
                  href={`/support`}
                  className="mt-auto inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Book Offer
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}