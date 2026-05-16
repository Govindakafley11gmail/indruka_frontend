/* eslint-disable @typescript-eslint/no-explicit-any */
import { tours } from "../tours/data";
import type { ViewDetailsPageProps } from "./other-important-data";
import TourPageClient from "./tour-page-client";

// app/view-details/page.tsx
export default async function TouristPageDetails({
  searchParams,
}: ViewDetailsPageProps) {
  const params = await searchParams;
  const id = Number(params.id);
  const tour = tours.find((t) => t.id === id);
  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400 text-lg">Tour not found.</p>
      </div>
    );
  }

  // Strip any function fields before passing to Client Component
  const { onViewItinerary, ...plainTour } = tour as any;
  return <TourPageClient tour={plainTour} />;
}