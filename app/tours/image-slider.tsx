"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type tourDataType = {
  id: number;
  name: string;
  tours: number;
  image: string;
};

type TourDataByZone = Record<string, tourDataType[]>;

type Zone = {
  name: string;
};

export default function IndiaTourPackages({
  data,
  zones,
  activeZonename,
}: {
  data: TourDataByZone;
  zones: Zone[];
  activeZonename: string;
}) {
  const [activeZone, setActiveZone] = useState(activeZonename);

  const cards = data[activeZone] ?? [];

  return (
    <div className=" bg-white py-4 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">
            India Tour Packages By Zone
          </h1>

          <div className="flex justify-center">
            <svg
              width="120"
              height="8"
              viewBox="0 0 120 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5.5C20 2 40 1 60 3.5C80 6 100 5 118 3"
                stroke="#1e3a8a"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Zone Tabs */}
        <div className="w-full mb-10">
          <div className="flex gap-2 overflow-x-auto no-scrollbar md:flex-wrap md:justify-center">
            {zones.map((zone) => (
              <button
                key={zone.name}
                onClick={() => setActiveZone(zone.name)}
                className={`whitespace-nowrap px-5 py-2 rounded text-sm font-medium border transition-all duration-200 shrink-0
        ${
          activeZone === zone.name
            ? "bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-md"
            : "bg-white text-gray-700 border-gray-200 hover:border-[#1e3a8a] hover:text-[#1e3a8a]"
        }`}
              >
                {zone.name}
              </button>
            ))}
          </div>
        </div>

        {/* Slider */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {cards.map((card) => (
              <CarouselItem
                key={card.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <TourCard card={card} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

/* ---------------- CARD ---------------- */

function TourCard({ card }: { card: tourDataType }) {
  return (
    <Card className="relative h-[260px] w-full overflow-hidden rounded-xl group border-0 shadow-md">
      {/* Image */}
      <img
        src={card.image}
        alt={card.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 p-4 text-white">
        <h3 className="text-sm font-semibold leading-tight">{card.name}</h3>
        <p className="text-xs opacity-80">{card.tours} tours</p>
      </div>
    </Card>
  );
}
