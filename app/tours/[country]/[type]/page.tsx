// app/tours/[country]/[category]/page.tsx

import { bhutanTours } from "@/app/tours/bhutan";
import { indiaTours } from "@/app/tours/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import CountryPageClient from "../CountryPageClient";

const ALL_TOURS = [...bhutanTours, ...indiaTours];

type Props = {
  params: {
    country: string;    // "bhutan"
    type: string;   // "cultural"
  };
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ country: string; type: string }>;
}) {
  const { country, type } = await params;

  const tours = ALL_TOURS.filter((t) => {
    const matchCountry = t.country?.toLowerCase() === country.toLowerCase();

    if (country === "bhutan") {
      // type param = tour type e.g. "cultural"
      const matchType = Array.isArray(t.type)
        ? t.type.some((ty) => ty.toLowerCase() === type.toLowerCase())
        : t.type?.toLowerCase() === type.toLowerCase();
      return matchCountry && matchType;
    } else {
      // type param = place e.g. "himachal-pradesh"
      const matchPlace =
        t.place?.toLowerCase().replace(/\s+/g, "-") === type.toLowerCase();
      return matchCountry && matchPlace;
    }
  });

  if (tours.length === 0) return notFound();

   return <CountryPageClient country={country} initialTours={tours} />;
 
}

// Pre-generate category pages
export function generateStaticParams() {
  const params = new Map<string, { country: string; category: string }>();

  ALL_TOURS.forEach((t) => {
    if (!t.type) return;
    const key = `${t.country}-${t.type}`;
    params.set(key, {
      country: t.country.toLowerCase(),
      category: t.type.toLowerCase(),
    });
  });

  return [...params.values()];
}