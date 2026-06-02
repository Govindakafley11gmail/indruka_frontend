// lib/tour-slugs.ts
//
// PURPOSE: This file is the single source of truth for ALL tour URL slugs.
// It generates URLs like: /view-details/thailand-to-bhutan-haa-valley-11-days
//                          /view-details/usa-to-bhutan-jomolhari-trek-12-days
//
// HOW IT WORKS:
// 1. We define a list of origin countries (ORIGIN_COUNTRIES)
// 2. For each tour in bhutanTours, we strip "bhutan-tour-package-" etc from
//    its existing seoMeta.slug to get a short base slug like "haa-valley-11-days"
// 3. We combine: {country-key}-to-bhutan-{base-slug}
// 4. getAllTourSlugs() returns a flat map of every slug → { tourId, originKey }
// 5. getTourBySlug() is called from the Next.js page to look up a tour by URL

import { bhutanTours } from "../bhutan";


// ─────────────────────────────────────────────────────────────
// COUNTRY LIST
// Add or remove countries here. The "key" becomes part of the URL.
// The "label" is used in page titles and meta descriptions.
// ─────────────────────────────────────────────────────────────
export const ORIGIN_COUNTRIES = [
  { key: "thailand",      label: "Thailand",      region: "Southeast Asia" },
  { key: "usa",           label: "USA",            region: "North America" },
  { key: "india",         label: "India",          region: "South Asia" },
  { key: "uk",            label: "UK",             region: "Europe" },
  { key: "australia",     label: "Australia",      region: "Oceania" },
  { key: "singapore",     label: "Singapore",      region: "Southeast Asia" },
  { key: "canada",        label: "Canada",         region: "North America" },
  { key: "germany",       label: "Germany",        region: "Europe" },
  { key: "france",        label: "France",         region: "Europe" },
  { key: "japan",         label: "Japan",          region: "East Asia" },
  { key: "south-korea",   label: "South Korea",    region: "East Asia" },
  { key: "china",         label: "China",          region: "East Asia" },
  { key: "uae",           label: "UAE",            region: "Middle East" },
  { key: "malaysia",      label: "Malaysia",       region: "Southeast Asia" },
  { key: "nepal",         label: "Nepal",          region: "South Asia" },
  { key: "sri-lanka",     label: "Sri Lanka",      region: "South Asia" },
  { key: "bangladesh",    label: "Bangladesh",     region: "South Asia" },
  { key: "vietnam",       label: "Vietnam",        region: "Southeast Asia" },
  { key: "indonesia",     label: "Indonesia",      region: "Southeast Asia" },
  { key: "philippines",   label: "Philippines",    region: "Southeast Asia" },
  { key: "switzerland",   label: "Switzerland",    region: "Europe" },
  { key: "netherlands",   label: "Netherlands",    region: "Europe" },
  { key: "italy",         label: "Italy",          region: "Europe" },
  { key: "spain",         label: "Spain",          region: "Europe" },
  { key: "sweden",        label: "Sweden",         region: "Europe" },
  { key: "new-zealand",   label: "New Zealand",    region: "Oceania" },
  { key: "south-africa",  label: "South Africa",   region: "Africa" },
  { key: "israel",        label: "Israel",         region: "Middle East" },
  { key: "qatar",         label: "Qatar",          region: "Middle East" },
  { key: "saudi-arabia",  label: "Saudi Arabia",   region: "Middle East" },
  { key: "hong-kong",     label: "Hong Kong",      region: "East Asia" },
  { key: "taiwan",        label: "Taiwan",         region: "East Asia" },
  { key: "brazil",        label: "Brazil",         region: "South America" },
  { key: "mexico",        label: "Mexico",         region: "North America" },
  { key: "russia",        label: "Russia",         region: "Europe" },
] as const;

// Type for a single country entry
export type OriginCountry = typeof ORIGIN_COUNTRIES[number];

// ─────────────────────────────────────────────────────────────
// SLUG CLEANER
// Strips common Bhutan-specific prefixes from the seoMeta.slug
// so we get a clean base like "haa-valley-11-days"
//
// Input:  "bhutan-tour-package-haa-valley-11-days"
// Output: "haa-valley-11-days"
// ─────────────────────────────────────────────────────────────
function cleanBaseSlug(rawSlug: string): string {
  return rawSlug
    .replace(/^bhutan-tour-package-/, "")
    .replace(/^bhutan-tour-/, "")
    .replace(/^bhutan-/, "");
}

// ─────────────────────────────────────────────────────────────
// SLUG MAP TYPE
// Maps every possible URL slug to a tour ID and origin key
// ─────────────────────────────────────────────────────────────
export interface SlugEntry {
  tourId: number;
  originKey: string; // e.g. "thailand" | "usa" | "general"
}

// ─────────────────────────────────────────────────────────────
// getAllTourSlugs()
//
// Returns a flat object like:
// {
//   "thailand-to-bhutan-haa-valley-11-days": { tourId: 512, originKey: "thailand" },
//   "usa-to-bhutan-haa-valley-11-days":       { tourId: 512, originKey: "usa" },
//   "bhutan-tour-package-haa-valley-11-days": { tourId: 512, originKey: "general" },
//   ... (one entry per country × per tour)
// }
//
// This is called by:
//   - generateStaticParams() → tells Next.js every URL to pre-build
//   - getTourBySlug()        → looks up which tour to render
// ─────────────────────────────────────────────────────────────
export function getAllTourSlugs(): Record<string, SlugEntry> {
  const map: Record<string, SlugEntry> = {};

  for (const tour of bhutanTours) {
    const rawSlug = tour?.seoMeta?.slug;
    if (!rawSlug) continue;
    const baseSlug = cleanBaseSlug(rawSlug);

    // One URL per country  e.g. "thailand-to-bhutan-haa-valley-11-days"
    for (const country of ORIGIN_COUNTRIES) {
      const fullSlug = `${country.key}-to-bhutan-${baseSlug}`;
      map[fullSlug] = { tourId: tour.id, originKey: country.key };
    }

    // Keep the original slug working as a fallback (no country prefix)
    // e.g. "bhutan-tour-package-haa-valley-11-days"
    map[rawSlug] = { tourId: tour.id, originKey: "general" };
  }

  return map;
}

// ─────────────────────────────────────────────────────────────
// getTourBySlug()
//
// Called from the Next.js page component with the URL slug.
// Returns the tour object + which country was in the URL.
//
// Returns null if the slug doesn't exist → triggers notFound()
// ─────────────────────────────────────────────────────────────
export function getTourBySlug(slug: string) {
  const map = getAllTourSlugs();
  const entry = map[slug];

  if (!entry) return null;

  const tour = bhutanTours.find((t) => t.id === entry.tourId);
  if (!tour) return null;

  const country = ORIGIN_COUNTRIES.find((c) => c.key === entry.originKey) ?? null;

  return {
    tour,
    originKey: entry.originKey,
    country,        // full country object with label + region, or null if "general"
  };
}

// ─────────────────────────────────────────────────────────────
// getOriginSlugForTour()
//
// Utility: given a tour ID and a country key,
// returns the correct URL slug for linking from tour cards.
//
// Usage in tour card:
//   const url = getOriginSlugForTour(tour.id, "thailand");
//   → "/view-details/thailand-to-bhutan-haa-valley-11-days"
// ─────────────────────────────────────────────────────────────
export function getOriginSlugForTour(tourId: number, countryKey: string): string {
  const tour = bhutanTours.find((t) => t.id === tourId);
  if (!tour) return "/";

  const baseSlug = cleanBaseSlug(tour.seoMeta?.slug ?? `tour-${tour.id}`);

  if (countryKey === "general") {
    return `/view-details/${tour.seoMeta?.slug ?? baseSlug}`;
  }

  return `/view-details/${countryKey}-to-bhutan-${baseSlug}`;
}