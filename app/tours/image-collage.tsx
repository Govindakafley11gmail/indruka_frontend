"use client";
import Image from "next/image";
import type { Tour } from "./tourtype";

type Props = {
  tours: Tour[];
};

const DEFAULT_IMAGES: Record<string, string[]> = {
  bhutan: [
    "/badrinath.jpg",
    "/badrinath.jpg",
    "/badrinath.jpg",
  ],
  india: [
    "/defaults/india-1.jpeg",
    "/defaults/india-2.jpeg",
    "/defaults/india-3.jpeg",
  ],
};

function getDefaultImage(country: string | undefined, index: number): string {
  const key = country?.trim().toLowerCase() ?? "";
  const images = DEFAULT_IMAGES[key] ?? Object.values(DEFAULT_IMAGES).flat();
  return images[index % images.length];
}

export default function TourCollage({ tours }: Props) {
  const displayTours = [...tours]
    .sort((a, b) => a.id - b.id)
    .slice(0, 7)
    .map((tour, index) => ({
      ...tour,
      src: tour.src?.trim() || getDefaultImage(tour.country, index),
    }));

  const count = displayTours.length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">
          Top Tour Packages
        </h1>
        <div className="flex justify-center">
          <svg width="120" height="8" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5.5C20 2 40 1 60 3.5C80 6 100 5 118 3" stroke="#1e3a8a" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {count >= 7 ? (
        // 7-image layout: original layout
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">
          <TourCard data={displayTours[0]} className="md:col-start-1" />
          <TourCard data={displayTours[1]} className="md:col-start-2 md:row-span-2" />
          <TourCard data={displayTours[2]} className="md:col-start-3" />
          <TourCard data={displayTours[3]} className="md:col-start-1 md:row-span-2" />
          <TourCard data={displayTours[4]} className="md:col-start-3" />
          <TourCard data={displayTours[5]} className="md:col-start-2" />
          <TourCard data={displayTours[6]} className="md:col-start-3" />
        </div>
      ) : count === 6 ? (
        // 6-image layout: same as 4 — 2×2 + tall left + tall right
        // Layout: col1 tall (row-span-2), col2 top, col2 bottom, col3 tall (row-span-2), top-right, bottom-right
        // Simpler: 2 rows of 3
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">
          <TourCard data={displayTours[0]} className="md:col-start-1 md:row-span-2" />
          <TourCard data={displayTours[1]} className="md:col-start-2" />
          <TourCard data={displayTours[2]} className="md:col-start-3" />
          <TourCard data={displayTours[3]} className="md:col-start-2" />
          <TourCard data={displayTours[4]} className="md:col-start-3 md:row-span-2" />
          <TourCard data={displayTours[5]} className="md:col-start-2" />
        </div>
      ) : count === 5 ? (
        // 5-image layout: tall left (row-span-2), 2 top-right, tall bottom-right (row-span-2), 1 middle
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">
          <TourCard data={displayTours[0]} className="md:col-start-1 md:row-span-2" />
          <TourCard data={displayTours[1]} className="md:col-start-2" />
          <TourCard data={displayTours[2]} className="md:col-start-3" />
          <TourCard data={displayTours[3]} className="md:col-start-2" />
          <TourCard data={displayTours[4]} className="md:col-start-3" />
        </div>
      ) : count === 4 ? (
        // 4-image layout: tall left (row-span-2), 2 top-right, tall bottom-center (row-span-2)
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">
          <TourCard data={displayTours[0]} className="md:col-start-1 md:row-span-2" />
          <TourCard data={displayTours[1]} className="md:col-start-2" />
          <TourCard data={displayTours[2]} className="md:col-start-3" />
          <TourCard data={displayTours[3]} className="md:col-start-2 md:col-span-2" />
        </div>
      ) : (
        // Fallback: simple grid for 1–3 images
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {displayTours.map((tour) => (
            <TourCard key={tour.id} data={tour} />
          ))}
        </div>
      )}
    </div>
  );
}

function TourCard({ data, className }: { data: Tour; className?: string }) {
  return (
    <div className={`relative h-full w-full overflow-hidden rounded-xl group ${className ?? ""}`}>
      <Image
        src={data.src}
        alt={data.title}
         width={128}
  height={110}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/bhutan-lux3.jpg";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 p-4 text-white">
        <h3 className="text-sm font-semibold leading-tight">{data.title}</h3>
        <p className="text-xs opacity-80">{data.country}</p>
      </div>
    </div>
  );
}