import { LucideIcon } from "lucide-react";

export type TripType = "one-way" | "round-trip" | "multi-city";
// export type TabId = "flights" | "hotels" | "holidays" | "bus" | "trains";
export type FareTypeId = "regular" | "student" | "armed" | "senior";

export interface Location {
  city: string;
  code: string;
  airport: string;
}

export interface Travellers {
  count: number;
  class: string;
}

export interface Tab {
  id: TripType;
  label: string;
  icon: LucideIcon;
  discount?: string;
  discountColor?: string;
}

export interface FareType {
  id: FareTypeId;
  label: string;
  sublabel: string;
}

export interface CorporateMenuItem {
  title: string;
  subtitle?: {
    title: string;
  }[];}

export interface NavItem {
  label: string;
  icon?: LucideIcon;
  hasDropdown?: boolean;
}

export interface FlightSearchState {
  tripType: TripType;
  from: Location;
  to: Location;
  departureDate: Date | undefined;
  returnDate: Date | undefined;
  travellers: Travellers;
  fareType: FareTypeId;
  nonStop: boolean;
}
