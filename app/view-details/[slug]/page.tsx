/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import { bhutanTours } from "@/app/tours/bhutan";
import { indiaTours } from "@/app/tours/data";
import TourPageClient from "../tour-page-client"; // adjust path if needed

const ALL_TOURS = [...bhutanTours, ...indiaTours];

export default async function ViewDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const tour = ALL_TOURS.find((t) => t.seoMeta?.slug === slug);

  if (!tour) return notFound();

  // strip non-serializable fields just like before
  const { onViewItinerary, ...plainTour } = tour as any;

  return <TourPageClient tour={plainTour} />;
}