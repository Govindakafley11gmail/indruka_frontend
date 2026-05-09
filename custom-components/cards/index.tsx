/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Plane,
  Building2,
  Camera,
  UtensilsCrossed,
} from "lucide-react";
import Image from "next/image";

type Inclusion = {
  icon: any;
  label: string;
  optional?: boolean;
};

type TourCardProps = {
  title: string;
  country:string
  place:string
  itinerary: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  tags: string[];
  images: string[];
  inclusions: Inclusion[];
};
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function TourCard({
  place,
  country,
  title,
  itinerary,
  price,
  oldPrice,
  discount,
  tags,
  images,
  inclusions,
}: TourCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();

  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);

  return (
    <Card className=" overflow-hidden rounded-2xl shadow-xl border p-0">
      {/* Image */}
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={images[currentImage]}
          alt={title}
          width={600}
          height={200}
          className="object-cover w-full h-full p-2 rounded-2xl"
          unoptimized
        />

        {/* Controls */}
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
              className="text-xs text-blue-700 border border-blue-300 bg-blue-50 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold">{title}</h2>

        {/* Itinerary */}
        <p className="text-sm text-gray-500">{itinerary}</p>

        {/* Inclusions */}
        <div className="flex items-center gap-4">
          {inclusions.map(({ icon: Icon, label, optional }) => (
            <div key={label} className="flex flex-col items-center relative">
              {optional && (
                <span className="absolute -top-2 text-[9px] bg-yellow-400 px-1 rounded">
                  Optional
                </span>
              )}

              <div
                className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                  optional ? "bg-orange-50" : "bg-blue-50"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    optional ? "text-orange-500" : "text-blue-500"
                  }`}
                />
              </div>

              <span className="text-[11px] text-gray-500">{label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-dashed" />

        {/* Pricing */}
        <div className="flex justify-between items-end">
          <div>
            {oldPrice && (
              <div className="flex items-center gap-2">
                <span className="line-through text-gray-400 text-sm">
                  ₹ {oldPrice}
                </span>
                {discount && (
                  <Badge className="bg-orange-500 text-white text-[10px]">
                    {discount}
                  </Badge>
                )}
              </div>
            )}

            <div className="text-xl font-bold">₹ {price}</div>
            <p className="text-xs text-gray-400">Starting price per adult</p>
          </div>

          <Link href={`/tours?id=${place}`}>
            <Button className="rounded-full bg-blue-700 hover:bg-blue-800">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
