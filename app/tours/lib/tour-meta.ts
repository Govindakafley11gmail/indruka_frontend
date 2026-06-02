// lib/tour-meta.ts
//
// PURPOSE: Builds all metadata (title, description, keywords, OpenGraph,
// JSON-LD structured data) dynamically based on the tour + origin country.
//
// WHY SEPARATE FROM tour-slugs.ts?
// Keeps concerns clean. tour-slugs.ts handles routing.
// tour-meta.ts handles what Google/social media sees.

import type { Metadata } from "next";
import type { OriginCountry } from "./tour-slugs";

// The Tour type — matches what you have in tourtype.ts
// Adjust fields if your type differs
interface TourForMeta {
  id: number;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  duration: string;
  destinations: string[];
  type: string;
  heroImage: { src: string; alt: string };
  seoMeta: {
    slug: string;
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
    keywords: string[];
  };
  days?: Array<{ day: number; title: string }>;
}

const SITE_URL = "https://indrukatours.com"; // ← change to your domain

// ─────────────────────────────────────────────────────────────
// buildPageMetadata()
//
// Called from generateMetadata() in the Next.js page.
// Returns a Next.js Metadata object with everything filled in.
//
// When country is provided (e.g. Thailand):
//   title    → "Thailand to Bhutan Haa Valley Tour | 11 Days | Paro · Thimphu"
//   desc     → "...Departing from Thailand. Flights from Bangkok to Paro..."
//   keywords → adds "Thailand to Bhutan tour", "Bhutan from Thailand", etc.
//   canonical→ https://indrukatours.com/view-details/thailand-to-bhutan-haa-valley-11-days
//
// When country is null (general/fallback URL):
//   Uses the original seoMeta values unchanged
// ─────────────────────────────────────────────────────────────
export function buildPageMetadata(
  tour: TourForMeta,
  slug: string,
  country: OriginCountry | null
): Metadata {
  const canonicalUrl = `${SITE_URL}/view-details/${slug}`;

  // ── Title ──────────────────────────────────────────────────
  // Without country: "Bhutan Tour Package with Haa Valley | 11 Days | Paro · Thimphu"
  // With country:    "Thailand to Bhutan | Haa Valley Tour 11 Days | Paro · Thimphu"
  const metaTitle = country
    ? `${country.label} to Bhutan | ${tour.seoMeta.metaTitle}`
    : tour.seoMeta.metaTitle;

  // ── Description ───────────────────────────────────────────
  // Appends origin-specific text so each page is unique
  const metaDescription = country
    ? `${tour.seoMeta.metaDescription} Book your Bhutan tour from ${country.label} with visa assistance and airport transfers from ${country.label}.`
    : tour.seoMeta.metaDescription;

  // ── Keywords ──────────────────────────────────────────────
  // Country-specific keywords are prepended so they rank highest
  const originKeywords: string[] = country
    ? [
        `${country.label} to Bhutan tour`,
        `Bhutan tour from ${country.label}`,
        `${country.label} Bhutan package`,
        `${country.label} Bhutan travel`,
        `Bhutan holiday from ${country.label}`,
        ...tour.seoMeta.keywords,
      ]
    : tour.seoMeta.keywords;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: originKeywords,

    // ── Canonical URL ─────────────────────────────────────
    // Very important: tells Google this is the authoritative URL
    // Prevents duplicate content penalties across 200+ pages
    alternates: {
      canonical: canonicalUrl,
    },

    // ── OpenGraph (Facebook, WhatsApp, LinkedIn sharing) ──
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "Indruka Tours",
      images: [
        {
          url: tour.heroImage.src,
          alt: tour.heroImage.alt,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
      locale: "en_US",
    },

    // ── Twitter Card ──────────────────────────────────────
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [tour.heroImage.src],
    },

    // ── Robots ────────────────────────────────────────────
    // All pages should be indexed and followed
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

// ─────────────────────────────────────────────────────────────
// buildJsonLd()
//
// Returns a JSON-LD object for structured data (rich results).
// This helps Google show star ratings, price, duration in search.
//
// Schema type: TouristTrip + Offer + BreadcrumbList
// See: https://schema.org/TouristTrip
// ─────────────────────────────────────────────────────────────
export function buildJsonLd(
  tour: TourForMeta,
  slug: string,
  country: OriginCountry | null
) {
  const pageUrl = `${SITE_URL}/view-details/${slug}`;

  const tourName = country
    ? `${country.label} to Bhutan – ${tour.title}`
    : tour.title;

  const description = country
    ? `${tour.seoMeta.metaDescription} Departing from ${country.label}.`
    : tour.seoMeta.metaDescription;

  return {
    // ── Main TouristTrip schema ────────────────────────────
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": pageUrl,
    name: tourName,
    description,
    url: pageUrl,
    image: tour.heroImage.src,

    // ── Tour operator ──────────────────────────────────────
    provider: {
      "@type": "TravelAgency",
      name: "Indruka Tours",
      url: SITE_URL,
    },

    // ── Pricing ────────────────────────────────────────────
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },

    // ── Rating ─────────────────────────────────────────────
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tour.rating,
      reviewCount: tour.reviews,
      bestRating: 5,
      worstRating: 1,
    },

    // ── Duration ───────────────────────────────────────────
    // tourDuration uses ISO 8601 duration format
    // "11 Days / 10 Nights" → we just pass the string
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Duration",
      value: tour.duration,
    },

    // ── Destinations as itinerary ──────────────────────────
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.destinations.map((dest, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: dest,
      })),
    },

    // ── Breadcrumbs ────────────────────────────────────────
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Bhutan Tours",
          item: `${SITE_URL}/bhutan`,
        },
        ...(country
          ? [
              {
                "@type": "ListItem",
                position: 3,
                name: `${country.label} to Bhutan`,
                item: `${SITE_URL}/view-details/${country.key}-to-bhutan`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: tourName,
                item: pageUrl,
              },
            ]
          : [
              {
                "@type": "ListItem",
                position: 3,
                name: tourName,
                item: pageUrl,
              },
            ]),
      ],
    },
  };
}