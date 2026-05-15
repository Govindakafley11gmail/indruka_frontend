"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Globe,
  Building2,
  ArrowRight,
  Info,
  MessageSquareQuote,
  X,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Testimonial {
  id: number;
  text?: string;
  author?: string;
  date: string;
  manager: string;
  managerRole: string;
}

export interface Thumbnail {
  id: number;
  src: string;
  alt: string;
}

export interface BreadcrumbCrumb {
  label: string;
  href?: string;
}

export interface ItineraryStop {
  city: string;
  nights: number;
}

export interface TourBadge {
  label: string;
  variant: "outlined" | "solid";
  color?: string;
}

export interface GuestPhoto {
  id: number;
  src: string;
  alt: string;
}

export interface TourGalleryPageProps {
  heroImage: {
    src: string;
    alt: string;
  };
  testimonials?: Testimonial[];
  thumbnails: Thumbnail[];
  /** All guest/extra photos shown in the lightbox modal */
  guestPhotos?: GuestPhoto[];
  breadcrumbs: BreadcrumbCrumb[];
  badges?: TourBadge[];
  title: string;
  durationDays: number;
  countryCount: number;
  cityCount: number;
  region: string;
  itineraryStops: ItineraryStop[];
  itineraryLinkLabel?: string;
  onViewItinerary?: () => void;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const BADGE_COLOUR_MAP: Record<string, { outlined: string; solid: string }> = {
  blue: {
    outlined: "border border-blue-700 text-blue-700",
    solid: "bg-blue-600 text-white",
  },
  amber: {
    outlined: "border border-amber-600 text-amber-600",
    solid: "bg-amber-500 text-white",
  },
  green: {
    outlined: "border border-green-700 text-green-700",
    solid: "bg-green-600 text-white",
  },
};

function getTourBadgeClass(badge: TourBadge): string {
  const colour = badge.color ?? "blue";
  const map = BADGE_COLOUR_MAP[colour] ?? BADGE_COLOUR_MAP["blue"];
  return `${map[badge.variant]} text-xs font-semibold tracking-wide px-3 py-1 transition`;
}

// ─── Guest Photos Lightbox Modal ──────────────────────────────────────────────

function GuestPhotosModal({
  photos,
  onClose,
}: {
  photos: GuestPhoto[];
  onClose: () => void;
}) {
  const [selected, setSelected] = useState<GuestPhoto | null>(null);

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        // Close when clicking backdrop (not the modal itself)
        if (e.target === e.currentTarget) {
          if (selected) setSelected(null);
          else onClose();
        }
      }}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
          <h2 className="text-base font-bold text-gray-900">
            {selected ? "Photo Preview" : `Guest Photos (${photos.length})`}
          </h2>
          <button
            onClick={() => {
              if (selected) setSelected(null);
              else onClose();
            }}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {selected ? (
            /* ── Full-size single photo view ── */
            <div className="flex flex-col items-center gap-4">
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full max-h-[60vh] object-contain rounded-xl"
              />
              <p className="text-sm text-gray-500">{selected.alt}</p>
              <button
                onClick={() => setSelected(null)}
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                ← Back to all photos
              </button>
            </div>
          ) : (
            /* ── Grid of all guest photos ── */
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="rounded-xl overflow-hidden cursor-pointer group relative aspect-[4/3]"
                  onClick={() => setSelected(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 rounded-xl" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function TourGalleryPage({
  heroImage,
  testimonials = [],  // ← add default here
  thumbnails,
  guestPhotos = [],
  breadcrumbs,
  badges=[],
  title,
  durationDays,
  countryCount,
  cityCount,
  region,
  itineraryStops,
  itineraryLinkLabel = "View day-wise tour itinerary",
  onViewItinerary,
  /** id of the itinerary section to scroll to (defaults to "itinerary") */
  itinerarySectionId = "itinerary",
}: TourGalleryPageProps & { itinerarySectionId?: string }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Track which image is shown as the hero
  const [activeHero, setActiveHero] = useState<{ src: string; alt: string }>(heroImage);

  // Lightbox modal state
  const [showGuestPhotos, setShowGuestPhotos] = useState(false);

  // Always show only the first 2 thumbnails in the sidebar.
  // Thumbnails beyond index 1 are merged with guestPhotos and shown in the lightbox.
  const VISIBLE_THUMB_COUNT = 2;
  const visibleThumbs = thumbnails.slice(0, VISIBLE_THUMB_COUNT);
  const overflowThumbs: GuestPhoto[] = thumbnails.slice(VISIBLE_THUMB_COUNT).map((t) => ({
    id: t.id,
    src: t.src,
    alt: t.alt,
  }));
  // Combine overflow thumbnails + explicit guestPhotos for the modal
  const allGuestPhotos: GuestPhoto[] = [...overflowThumbs, ...guestPhotos];
  // Total count shown on the tile = overflow thumbs + explicit extra photo count
  const totalExtraCount = overflowThumbs.length ;

  const prevTestimonial = () =>
    setCurrentTestimonial((p) => (p === 0 ? testimonials?.length - 1 : p - 1));

  const nextTestimonial = () =>
    setCurrentTestimonial((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const t = testimonials[currentTestimonial];

  const trailCrumbs = breadcrumbs.slice(0, -1);
  const activeCrumb = breadcrumbs[breadcrumbs.length - 1];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* ── Breadcrumb ── */}
        <Breadcrumb className="mb-4 text-sm">
          <BreadcrumbList>
            {trailCrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={crumb.href ?? "#"}
                    className="text-gray-500 hover:text-gray-800"
                  >
                    {crumb.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </span>
            ))}
            {activeCrumb && (
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold text-gray-900">
                  {activeCrumb.label}
                </BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col-reverse md:flex-col">
          {/* ── Gallery row ── */}
          <div className="flex flex-col md:flex-row flex-1 max-w-7xl gap-4">
            {/* Hero image — updates when a thumbnail is clicked */}
            <div className="flex-1 relative rounded-xl overflow-hidden h-64 sm:h-80 lg:h-80">
              <img
                src={activeHero.src}
                alt={activeHero.alt}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {/* Testimonial overlay card */}
              {testimonials?.length > 0 && (
                <Card className="hidden md:block absolute top-6 right-4 left-4 sm:left-auto sm:w-72 bg-white/95 backdrop-blur-sm shadow-lg border border-gray-100">
                  <CardContent className="">
                    <div className="flex justify-between border-b-2 border-b-amber-50 items-center mb-2">
                      <MessageSquareQuote size={16} className="text-amber-500" />
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-full border border-gray-200"
                          onClick={prevTestimonial}
                          aria-label="Previous review"
                        >
                          <ChevronLeft size={12} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-full border border-gray-200"
                          onClick={nextTestimonial}
                          aria-label="Next review"
                        >
                          <ChevronRight size={12} />
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed line-clamp-3 mb-3">
                      {t.text}
                    </p>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs font-semibold text-gray-900">
                          {t.author}
                        </p>
                        <p className="text-[11px] text-gray-400">{t.date}</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <Building2 size={12} className="text-blue-600" />
                        </div>
                        <div className="text-right">
                          <p className="text-[11px] font-semibold text-gray-900 leading-tight">
                            {t.manager}
                          </p>
                          <p className="text-[10px] text-gray-400 leading-tight">
                            {t.managerRole}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Thumbnails column */}
            <div className="flex md:flex-col gap-4">
              <div className="flex md:flex-col gap-2">
                {/* Only the first 2 thumbnails shown in the sidebar */}
                {visibleThumbs.map((thumb) => (
                  <div
                    key={thumb.id}
                    onClick={() => setActiveHero({ src: thumb.src, alt: thumb.alt })}
                    className={`rounded overflow-hidden cursor-pointer transition-all w-full md:w-32 ring-2 ${
                      activeHero.src === thumb.src
                        ? "ring-blue-500 opacity-100"
                        : "ring-transparent hover:opacity-90 hover:ring-gray-300"
                    }`}
                    style={{ height: "110px" }}
                  >
                    <img
                      src={thumb.src}
                      alt={thumb.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Guest photos tile — preview uses the first 2 overflow images as a collage */}
                {totalExtraCount > 0 && (
                  <div
                    onClick={() => setShowGuestPhotos(true)}
                    className="rounded overflow-hidden cursor-pointer hover:opacity-90 transition-opacity w-full md:w-32 relative group"
                    style={{ height: "110px" }}
                  >
                    {/* Collage: show up to 2 preview images from overflow/guest photos */}
                    {allGuestPhotos.length >= 2 ? (
                      <div className="w-full h-full grid grid-cols-2 gap-0.5">
                        <img
                          src={allGuestPhotos[0].src}
                          alt={allGuestPhotos[0].alt}
                          className="w-full h-full object-cover"
                        />
                        <img
                          src={allGuestPhotos[1].src}
                          alt={allGuestPhotos[1].alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : allGuestPhotos.length === 1 ? (
                      <img
                        src={allGuestPhotos[0].src}
                        alt={allGuestPhotos[0].alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800" />
                    )}

                    {/* Dark overlay with count */}
                    <div className="absolute inset-0 bg-black/55 group-hover:bg-black/65 transition-colors flex flex-col items-center justify-center gap-1">
                      <span className="text-white font-bold text-xl leading-none">
                        +{totalExtraCount}
                      </span>
                      <span className="text-gray-200 text-xs text-center leading-tight px-2">
                        guest photos
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Tour details ── */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap mt-4 mb-1">
              {badges.map((badge, idx) => (
                <div key={idx} className={getTourBadgeClass(badge)}>
                  {badge.label}
                </div>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-base font-mono font-bold text-gray-900 mb-1">
              {title}
            </h1>

            {/* Quick stats pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-1.5 bg-[#EFF2FA] border-2 rounded px-3">
                <Calendar size={14} className="text-gray-500" />
                <span className="text-sm font-medium text-black">
                  {durationDays} Days
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#EFF2FA] border-2 rounded px-3">
                <Globe size={14} className="text-gray-500" />
                <span className="text-sm font-medium text-black">
                  {countryCount} {countryCount === 1 ? "Country" : "Countries"}
                </span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-sm font-medium text-black">
                  {cityCount} {cityCount === 1 ? "City" : "Cities"}
                </span>
                <Info
                  size={13}
                  className="text-black cursor-pointer hover:text-gray-600"
                />
              </div>
            </div>

            {/* Itinerary route */}
            <div className="flex items-start gap-2 text-sm text-gray-600 mb-4 flex-wrap">
              <MapPin
                size={15}
                className="text-gray-500 mt-0.5 flex-shrink-0"
              />
              <span className="font-semibold text-gray-800">{region}</span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {itineraryStops.map((stop, idx) => (
                  <span key={idx} className="flex items-center gap-1.5">
                    <span>
                      {stop.city} ({stop.nights}N)
                    </span>
                    {idx < itineraryStops.length - 1 && (
                      <ArrowRight size={12} className="text-gray-400" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* View itinerary link */}
            <button
              onClick={(e) => {
                if (onViewItinerary) {
                  onViewItinerary();
                } else {
                  e.preventDefault();
                  document
                    .getElementById(itinerarySectionId)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="hidden md:flex items-center gap-1 text-sm font-semibold text-black cursor-pointer transition-colors underline underline-offset-2"
            >
              {itineraryLinkLabel}
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Guest Photos Lightbox ── */}
      {showGuestPhotos && (
        <GuestPhotosModal
          photos={allGuestPhotos}
          onClose={() => setShowGuestPhotos(false)}
        />
      )}
    </>
  );
}