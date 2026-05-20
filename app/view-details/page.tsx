/* eslint-disable @typescript-eslint/no-explicit-any */
import { bhutanTours } from "../tours/bhutan";
import { indiaTours } from "../tours/data";
import type { ViewDetailsPageProps } from "./other-important-data";
import TourPageClient from "./tour-page-client";

export default async function TouristPageDetails({
  searchParams,
}: ViewDetailsPageProps) {
  const params = await searchParams;

  const id = Number(params.id);
  const country = params?.country?.toLowerCase() ?? "";

  // ✅ merge or filter by country if needed
  const allTours = [...bhutanTours, ...indiaTours];

  const toursFiltered =
    country === "bhutan"
      ? bhutanTours
      : country === "india"
      ? indiaTours
      : allTours;

  const tour = toursFiltered.find((t) => t.id === id);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400 text-lg">Tour not found.</p>
      </div>
    );
  }

  const { onViewItinerary, ...plainTour } = tour as any;

  return <TourPageClient tour={plainTour} />;
}