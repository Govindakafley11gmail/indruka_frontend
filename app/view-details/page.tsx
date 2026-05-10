/* eslint-disable react/no-unescaped-entities */
"use client";
import { useSearchParams } from "next/navigation";
import Navbar from "@/custom-components/navbar/navbar";
import Footer from "@/custom-components/footer/footer";
import TourGalleryPage from "./gallery-page";
import TourHighlights from "./tour-highlights";
import ItineraryPage, {
  type CancellationRow,
  type MainTab,
  type TabSection,
  type UpgradeItem,
} from "./tour-iternary";
import { tours } from "../tours/data";

const tourInformationTabs: TabSection[] = [
  {
    value: "inclusions",
    label: "Inclusions",
    dotColor: "bg-green-500",
    items: [
      "Return airfare (Economy class)",
      "4-star hotel accommodation (twin sharing)",
      "Daily breakfast & select dinners",
      "All transfers by air-conditioned coach",
      "English-speaking Tour Manager throughout",
    ],
  },
  {
    value: "exclusions",
    label: "Exclusions",
    dotColor: "bg-red-500",
    items: [
      "Visa fees",
      "Travel insurance",
      "Personal expenses & tips",
      "Meals not mentioned in inclusions",
    ],
  },
  {
    value: "visa",
    label: "Visa Info",
    dotColor: "bg-blue-500",
    items: [
      "Schengen visa required for Indian passport holders",
      "Processing time: 10–15 working days",
      "Documents: passport copy, bank statement, photos",
    ],
  },
];

const needToKnow: string[] = [
  "Carry comfortable walking shoes — cobblestone streets ahead!",
  "Currency: Euro (€). ATMs are widely available.",
  "Weather in June: 18 °C – 25 °C. Light jacket recommended.",
  "Tipping: €1–2 per day for your Tour Manager is appreciated.",
];

const cancellationRows: CancellationRow[] = [
  { daysRange: "60+ days", charge: "10% of tour cost" },
  { daysRange: "30–59 days", charge: "25% of tour cost" },
  { daysRange: "15–29 days", charge: "50% of tour cost" },
  { daysRange: "0–14 days", charge: "100% of tour cost" },
];

const upgrades: UpgradeItem[] = [
  {
    name: "Business Class Upgrade",
    price: "₹85,000",
    description: "Upgrade both outbound and return flights to Business Class.",
  },
  {
    name: "Single Room Supplement",
    price: "₹32,000",
    description: "Enjoy a private room throughout the entire tour.",
  },
  {
    name: "Travel Insurance",
    price: "₹4,500",
    description: "Comprehensive cover including medical emergencies abroad.",
  },
];

const mainTabs: MainTab[] = [
  { value: "itinerary", label: "Itinerary" },
  { value: "tour-details", label: "Tour Details" },
  { value: "tour-information", label: "Tour Information" },
  { value: "need-to-know", label: "Need to Know" },
  { value: "cancellation", label: "Cancellation Policy" },
  { value: "upgrades", label: "Upgrades" },
];
interface ViewDetailsPageProps {
  searchParams: Promise<{
    id?: string;
  }>;
}

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

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden w-full">
      <Navbar isActive={false} />

      <TourGalleryPage
        heroImage={tour.heroImage ?? { src: "", alt: tour.title }}
        testimonials={tour.testimonials ?? []}
        thumbnails={tour.thumbnails ?? []}
        breadcrumbs={tour.breadcrumbs ?? []}
        badges={tour.badges ?? []}
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
        onViewItinerary={() => {
          document
            .getElementById("itinerary")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
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
        />
      </div>
      <Footer />
    </div>
  );
}
