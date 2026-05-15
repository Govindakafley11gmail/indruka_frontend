import type { CancellationRow, MainTab, TabSection, UpgradeItem } from "./tour-iternary";

export const tourInformationTabs: TabSection[] = [
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

export const needToKnow: string[] = [
  "Carry comfortable walking shoes — cobblestone streets ahead!",
  "Currency: Euro (€). ATMs are widely available.",
  "Weather in June: 18 °C – 25 °C. Light jacket recommended.",
  "Tipping: €1–2 per day for your Tour Manager is appreciated.",
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
  { value: "upgrades", label: "Upgrades" },
];
export interface ViewDetailsPageProps {
  searchParams: Promise<{
    id?: string;
  }>;
}