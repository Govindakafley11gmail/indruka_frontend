/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CancellationRow, MainTab, TabSection, UpgradeItem } from "./tour-iternary";

export const tourInformationTabs: TabSection[] = [
  {
    value: "inclusions",
    label: "Inclusions",
    dotColor: "bg-green-500",
    items: [
      "Airfare (Economy class) (optional)",
      "3-star and above hotel accommodation (twin sharing)",
      "Daily breakfast ,Lunch &  dinners",
      "English-speaking Tour Manager throughout",
      "Government Taxes",
      "Travel insurance (optional)",
      "Sightseeing Fees & Visa"
    ],
  },
  {
    value: "exclusions",
    label: "Exclusions",
    dotColor: "bg-red-500",
    items: [
      "Airfare if not included",
      "Travel insurance, if not included.",
      "Personal expenses & tips",
      "Optional Activities",
      "Alcoholic & Special Beverages"
    ],
  },
  {
    value: "visa",
    label: "Visa Info",
    dotColor: "bg-blue-500",
    items: [
      "A digital copy of a valid passport",
      "Processing time: 10–15 working days",
      "Documents: passport copy, photos",
      "Travel Insurance"
    ],
  },
];

export const needToKnow: string[] = [
  "Carry comfortable walking shoes — cobblestone streets ahead!",
  "Currency: Dollar/ Crypto. ATMs are widely available.",
  "Weather in June: 18 °C – 25 °C. Light jacket recommended.",
  "Sustainable Development Fee (SDF) of USD100 per night per adult and USD50 for children aged 5 to 12 years old. Children below 5 years are waived.",
  "A one-time visa application fee of USD40.",
   "For Indian: Sustainable Development Fee (SDF) of Rs.1200 per night per adult and Rs.600 for children aged 5 to 12 years old. Children below 5 years are waived and Government of Bhutan will provide on arrival visa.",
];

export const cancellationRows: CancellationRow[] = [
  { daysRange: "60+ days", charge: "10% of tour cost" },
  { daysRange: "30–59 days", charge: "25% of tour cost" },
  { daysRange: "15–29 days", charge: "50% of tour cost" },
  { daysRange: "0–14 days", charge: "100% of tour cost" },
];

export const upgrades: UpgradeItem[] = [
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

export const mainTabs: MainTab[] = [
  { value: "itinerary", label: "Itinerary" },
  { value: "tour-details", label: "Tour Details" },
  { value: "tour-information", label: "Tour Information" },
  { value: "need-to-know", label: "Need to Know" },
  { value: "cancellation", label: "Cancellation Policy" },
];
export interface ViewDetailsPageProps {
  searchParams: Promise<{
    [x: string]: any;
    id?: string;
  }>;
}