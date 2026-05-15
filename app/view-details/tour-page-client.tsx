/* eslint-disable @typescript-eslint/no-explicit-any */
// app/view-details/tour-page-client.tsx
"use client";

import Navbar from "@/custom-components/navbar/navbar";
import Footer from "@/custom-components/footer/footer";
import TourGalleryPage from "./gallery-page";
import TourHighlights from "./tour-highlights";
import ItineraryPage from "./tour-iternary";
import {
  mainTabs,
  tourInformationTabs,
  needToKnow,
  cancellationRows,
  upgrades,
} from "./other-important-data";

export default function TourPageClient({ tour }: { tour: any }) {
  const handleViewItinerary = () => {
    document
      .getElementById("itinerary")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden w-full">
      <Navbar isActive={false} />

      <TourGalleryPage
        heroImage={tour.heroImage ?? { src: "", alt: tour.title }}
        testimonials={tour?.testimonials ?? []}
        thumbnails={tour.thumbnails ?? []}
        breadcrumbs={tour.breadcrumbs ?? []}
        badges={
          (tour.badges ?? [])
            .filter((b:any) => b.variant === "solid" || b.variant === "outlined")
            .map((badge:any) => ({
              ...badge,
              variant: badge.variant as "solid" | "outlined",
            }))
        }
        title={tour.title}
        durationDays={
          (tour.durationDays ?? tour.durationTag)
            ? parseInt(tour.durationTag)
            : 0
        }
        countryCount={tour.countryCount ?? 1}
        cityCount={tour.cityCount ?? tour.destinations.length}
        region={tour.region ?? tour.place}
        itineraryStops={tour.itineraryStops ?? []}
        onViewItinerary={handleViewItinerary}
      />

      <TourHighlights
        tourFeatures={tour.tourFeatures ?? []}
        tourHighlights={tour.tourHighlights ?? []}
        tourManagerCompany={tour.tourManagerCompany ?? ""}
      />

      <div id="itinerary">
        <ItineraryPage
          mainTabs={mainTabs}
          departureDate={`${tour.durationDays} days`}
          price={tour.price}
          tourName={tour.title}
          departureCity={tour.place}
          onChangeDepartureDate={() => console.log("open date picker")}
          days={tour.days ?? []}
          knowBeforeBook={{
            note: "Seats are subject to availability at time of booking.",
            airline: "On group tours we fly with group-friendly airlines.",
            lines: [
              "Economy class by default.",
              "Upgrades to Business / First Class available on request.",
            ],
          }}
          tourDetails={tour.tourDetails ?? []}
          tourInformationTitle="Tour Information"
          tourInformationSubtitle="Read this to prepare for your tour in the best way!"
          tourInformationTabs={tourInformationTabs}
          needToKnow={needToKnow}
          cancellationRows={cancellationRows}
          upgrades={upgrades}
          country={tour.country}
        />
      </div>

      <Footer />
    </div>
  );
}