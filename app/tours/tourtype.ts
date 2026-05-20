export type TourBadgeVariant = "solid" | "outlined";

export interface TourBadge {
  label: string;
  variant: TourBadgeVariant;
  color: string;
}

export interface TourFeature {
  icon: string;
  label: string;
  color: string;
  bg: string;
}

export interface TourHighlight {
  title: string;
}

export interface TourThumbnail {
  id: number;
  src: string;
  alt: string;
}

export interface TourBreadcrumb {
  label: string;
  href?: string;
}

export interface ItineraryStop {
  city: string;
  nights: number;
}

export interface TourDay {
  day: number;
  date: string;
  title: string;
  details: string[];
}

export interface TourDetail {
  label: string;
  value: string;
}

export interface HeroImage {
  src: string;
  alt: string;
}

export interface Tour {
  id: number;
  country: string;
  place: string;
  title: string;
  type: string;
  duration: string;
  durationTag: string;
  startEnd: string;
  destinations: string[];
  amenities: string[];
  price: number;
  oldPrice?: number;
  discount?: string;
  currency?: string;
  rating: number;
  reviews: number;
  badge: string;
  badgeColor: string;
  mode: string;
  src: string;
  popular: boolean;
  tourFeatures: TourFeature[];
  tourHighlights: TourHighlight[];
  tourManagerCompany: string;
  heroImage: HeroImage;
  testimonials: unknown[];
  thumbnails: TourThumbnail[];
  breadcrumbs: TourBreadcrumb[];
  badges: TourBadge[];
  durationDays: number;
  countryCount: number;
  cityCount: number;
  region: string;
  maxGuests: number;
  itineraryStops: ItineraryStop[];
  days: TourDay[];
  tourDetails: TourDetail[];
  inclusions?: string[];
  exclusions?: string[];
  // SEO fields
  metaTitle?: string;
  metaDescription?: string;
  slug?: string;
  keywords?: string[];
}