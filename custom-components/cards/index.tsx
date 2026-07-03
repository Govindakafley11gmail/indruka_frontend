"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BookingModal } from "../custom-form";
import { useBookingMutations } from "@/app/view-details/booking-backend/tanstack-function";
import { showToast } from "nextjs-toast-notify";
import { bhutanTripConfig } from "@/app/tours/input-data";
import { useVisitorRegion } from "../navbar/hooks/useVisitorRegion";

/* eslint-disable @typescript-eslint/no-explicit-any */

type Inclusion = {
  icon: any;
  label: string;
  optional?: boolean;
};

type TourCardProps = {
  title: string;
  slug?: string;
  type?: string[];
  country: string;
  place: string;
  itinerary: string;
  price: any;
  priceRegional?: number; // 👈 India/Bangladesh fixed price
  priceLoading?: boolean; // 👈 passed down from Card
  oldPrice?: string | number;
  discount?: string;
  tags: string[];
  images: string[];
  inclusions: Inclusion[];
};

export default function TourCard({
  slug,
  place,
  title,
  itinerary,
  price,
  priceRegional,
  priceLoading = false,
  oldPrice,
  discount,
  tags,
  images,
  type = [],
  country,
  inclusions,
}: TourCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { isRegional,loading  } = useVisitorRegion();
  const { createBooking } = useBookingMutations({
    onSuccess: (data: any) => {
      showToast.success(data.message, {
        duration: 5000,
        position: "top-right",
        transition: "topBounce",
        icon: "",
        sound: true,
      });
      setIsDialogOpen(false);
    },
    onError: (error: any) => {
      showToast.error(error?.data?.message, {
        duration: 5000,
        position: "top-right",
        transition: "topBounce",
        icon: "",
        sound: true,
      });
    },
  });
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);

  let href: string;
  if (country === "Bhutan") {
    href = `/tours/bhutan/${(type?.[0] ?? "general").toLowerCase()}`;
  } else {
    href = `/tours/india/${(place ?? "").toLowerCase().replace(/\s+/g, "-")}`;
  }

  // Decide which price to actually use: regional (INR) for India/Bangladesh
  // visitors when available, otherwise fall back to the original price.
  console.log("TourCard Props:", {
    title,
    price,
    priceRegional,
    isRegional,
  });
 const effectivePrice = isRegional && priceRegional ? priceRegional : price;


  const formatPrice = (val: any) => {
    if (typeof val === "string") return val;

    // Regional visitors always see ₹, regardless of country field on the tour
    if (isRegional && priceRegional) {
      return `₹ ${val.toLocaleString("en-IN")}`;
    }

    return country === "Bhutan"
      ? val.toLocaleString("en-US")
      : `₹ ${val.toLocaleString("en-US")}`;
  };

  const numericPrice =
    typeof effectivePrice === "string"
      ? parseFloat(effectivePrice.replace(/[^0-9.]/g, ""))
      : (effectivePrice ?? 0);

  return (
    <>
      <Card className="overflow-hidden rounded-2xl shadow-xl border p-0 w-full h-full flex flex-col">
        {" "}
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={images[currentImage]}
            alt={title}
            width={600}
            height={200}
            className="object-cover w-full h-full p-2 rounded-2xl"
            unoptimized
          />

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <CardContent className="p-4 space-y-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-blue-700 border border-blue-300 bg-blue-50 rounded-full px-3 py-1 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-base font-bold">{title}</h2>

          {/* Itinerary */}
          <p className="text-sm text-gray-500">{itinerary}</p>

          {/* Inclusions */}
          <div className="flex flex-nowrap items-center gap-4">
            {inclusions.map(({ icon: Icon, label, optional }) => (
              <div key={label} className="flex flex-col items-center relative">
                {optional && (
                  <span className="absolute -top-2 text-[9px] bg-yellow-400 px-1 rounded">
                    Optional
                  </span>
                )}
                <div
                  className={`w-10 h-10 flex items-center justify-center p-2 rounded-lg ${optional ? "bg-orange-50" : "bg-blue-50"
                    }`}
                >
                  <Icon
                    className={`w-5 h-5 ${optional ? "text-orange-500" : "text-blue-500"
                      }`}
                  />
                </div>
                <span className="text-[11px] text-gray-500">{label}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-dashed" />

          {/* Pricing */}
          <div className="flex justify-between items-end  mt-auto">
            <div>
              {oldPrice && (
                <div className="flex items-center gap-2">
                  <span className="line-through text-gray-400 text-sm">
                    {formatPrice(oldPrice)}
                  </span>
                  {discount && (
                    <Badge className="bg-orange-500 text-white text-[10px]">
                      {discount}
                    </Badge>
                  )}
                </div>
              )}

              <div className="text-xl font-bold">
                {priceLoading ? (
                  <span className="text-gray-400 animate-pulse text-sm">
                    Loading price...
                  </span>
                ) : (
                  <span className="text-base text-nowrap">{formatPrice(effectivePrice)}</span>
                )}
              </div>
              <p className="text-xs text-gray-400">Starting price per adult</p>
            </div>

            {/* ✅ Fixed: onClick now opens the dialog */}
            <div className="flex gap-2">
              <Button
                onClick={() => setIsDialogOpen(true)}
                className="rounded-full bg-blue-700 hover:bg-blue-800 flex-1"
                disabled={priceLoading}
              >
                Book Tour
              </Button>

              <Link href={href} className="flex-1">
                <Button className="rounded-full bg-blue-700 hover:bg-blue-800 w-full">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ✅ Fixed: using props directly instead of selectedTour */}
      <BookingModal
        pricePerPerson={numericPrice ?? 0}
        guestsFieldId="number_of_travellers"
        tourName={title}
        price={effectivePrice ?? 0}
        config={bhutanTripConfig(effectivePrice ?? 0, title, country, createBooking)}
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}