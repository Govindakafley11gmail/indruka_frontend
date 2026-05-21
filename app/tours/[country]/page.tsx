
import { bhutanTours } from "@/app/tours/bhutan";
import { indiaTours } from "@/app/tours/data";
import { notFound } from "next/navigation";
import CountryPageClient from "./CountryPageClient";

export const ALL_TOURS = [...bhutanTours, ...indiaTours];

type Props = {
  params: Promise<{ country: string }>;
};

export default async function CountryPage({ params }: Props) {
  const { country } = await params;

  const tours = ALL_TOURS.filter(
    (t) => t.country?.toLowerCase() === country.toLowerCase()
  );

  if (tours.length === 0) return notFound();

  return <CountryPageClient country={country} initialTours={tours} />;
}

export function generateStaticParams() {
  const countries = [...new Set(ALL_TOURS.map((t) => t.country.toLowerCase()))];
  return countries.map((country) => ({ country }));
}