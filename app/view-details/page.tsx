/* eslint-disable react/no-unescaped-entities */
"use client";
import Navbar from "@/custom-components/navbar/navbar";
import Footer from "@/custom-components/footer/footer";
import TourGalleryPage from "./gallery-page";
import TourHighlights from "./tour-highlights";
import ItineraryPage, {
  type CancellationRow,
  type DayItem,
  type MainTab,
  type TabSection,
  type TourDetailRow,
  type UpgradeItem,
} from "./tour-iternary";
import router from "next/router";
import {
  Building2,
  UtensilsCrossed,
  PlaneTakeoff,
  Camera,
  Bus,
} from "lucide-react";
const days: DayItem[] = [
  {
    day: 1,
    date: "10 Jun 2026",
    title: "Arrival in Paris",
    details: "Arrive at CDG. Transfer to hotel. Welcome dinner.",
  },
  {
    day: 2,
    date: "11 Jun 2026",
    title: "Eiffel Tower & Louvre",
    details: "Morning Eiffel Tower visit, afternoon at the Louvre.",
  },
  {
    day: 3,
    date: "12 Jun 2026",
    title: "Versailles Day Trip",
    details: "Full-day excursion to the Palace of Versailles.",
  },
];

const tourDetails: TourDetailRow[] = [
  { label: "Duration", value: "8 Nights / 9 Days" },
  { label: "Destination", value: "Paris · Amsterdam · Brussels" },
  { label: "Group Size", value: "20 – 40 passengers" },
  { label: "Tour Code", value: "EUR-PAB-26" },
  { label: "Meals", value: "Daily breakfast + 3 dinners" },
];

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
// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function TouristPageDetails() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden w-full">
      <Navbar isActive={false} />
      <TourGalleryPage
        heroImage={{
          src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=900&q=80",
          alt: "Nepal scenic landscape",
        }}
        testimonials={[
          {
            id: 1,
            text: "This was our first time with Veena world travel...",
            author: "Vaibhavi",
            date: "Travelled Dec 22, 2024",
            manager: "Pravin More",
            managerRole: "Tour Manager",
          },
        ]}
        thumbnails={[
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&q=80",
            alt: "Nepal mountains",
          },
          {
            id: 2,
            src: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=200&q=80",
            alt: "Kathmandu temple",
          },
        ]}
        extraPhotoCount={134}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "World", href: "/world" },
          { label: "Nepal", href: "/world/nepal" },
          { label: "Best of Nepal" }, // ← no href = active crumb
        ]}
        badges={[
          { label: "GROUP TOUR", variant: "outlined", color: "blue" },
          { label: "NPCP", variant: "solid", color: "blue" },
        ]}
        title="Best of Nepal"
        durationDays={8}
        countryCount={1}
        cityCount={3}
        region="Nepal"
        itineraryStops={[
          { city: "Kathmandu", nights: 3 },
          { city: "Chitwan", nights: 2 },
          { city: "Pokhara", nights: 2 },
        ]}
        onViewItinerary={() => console.log("view itinerary clicked")}
      />
      <TourHighlights
        tourFeatures={[
          { icon: Building2, label: "Hotel" },
          { icon: UtensilsCrossed, label: "Meals" },
          { icon: PlaneTakeoff, label: "Flight" },
          { icon: Camera, label: "Sightseeing" },
          { icon: Bus, label: "Transport" },
        ]}
        tourHighlights={[
          { title: "Manakamana Devi Ropeway" },
          { title: "Folk Dance of Nepal" },
          { title: "Elephant Safari" },
          { title: "Chitwan National Park" },
        ]}
        tourManagerCompany="Indruka"
      />
      <ItineraryPage
        // Nav
        mainTabs={mainTabs}
        // Itinerary
        departureDate="10 Jun 2026"
        departureCity="Mumbai"
        onChangeDepartureDate={() => console.log("open date picker")}
        days={days}
        knowBeforeBook={{
          note: "Seats are subject to availability at time of booking.",
          airline: "On group tours we fly with group-friendly airlines.",
          lines: [
            "Economy class by default.",
            "Upgrades to Business / First Class available on request.",
          ],
        }}
        // Tour Details
        tourDetails={tourDetails}
        // Tour Information
        tourInformationTitle="Tour Information"
        tourInformationSubtitle="Read this to prepare for your tour in the best way!"
        tourInformationTabs={tourInformationTabs}
        // Need to Know
        needToKnow={needToKnow}
        // Cancellation Policy
        cancellationRows={cancellationRows}
        // Upgrades
        upgrades={upgrades}
      />
      <Footer />
    </div>
  );
}
