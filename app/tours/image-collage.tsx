
"use client";
// export const SPECIALITIES = [
//   "Honeymoon packages",
//   "Corporate tours",
//   "School/college trips",
//   "Religious yatras",
//   "Luxury stays",
//   "Budget backpacking trips",
//     "Weekend Delhi-to-hills tours",
// "Adventure"
// "Cultural Tour"
// ];
import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

type Tour = {
  id: number;
  title: string;
  tours: number;
  image: string;
};

const zones = ["North", "South", "West & Central", "East & North East"];

const toursData: Tour[] = [
  {
    id: 1,
    title: "Himachal Pradesh Tour Data",
    tours: 33,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
  },
  {
    id: 2,
    title: "Jammu And Kashmir Tour Data",
    tours: 24,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
  },
  {
    id: 3,
    title: "Leh Ladakh Tour Data",
    tours: 23,
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
  },
  {
    id: 4,
    title: "Nainital Mussoorie Corbett Tour Data",
    tours: 17,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  },
  {
    id: 5,
    title: "Amritsar Tour Data",
    tours: 13,
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
  },
  {
    id: 6,
    title: "Agra Tour Data",
    tours: 15,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
  },
  {
    id: 7,
    title: "Delhi Tour Data",
    tours: 30,
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
  },
];

export default function TourCollage() {
  const [activeZone, setActiveZone] = useState("North");

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Title */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">
            India Tour Packages By Zone Ratnay
          </h1>
          {/* Decorative underline — brush-stroke style */}
          <div className="flex justify-center">
            <svg
              width="120"
              height="8"
              viewBox="0 0 120 8"
              fill="none"
              xmlns="http:www.w3.org/2000/svg"
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
      </div>
       <div className="w-full mb-10">
          <div className="flex gap-2 overflow-x-auto no-scrollbar md:flex-wrap md:justify-center">
            {zones.map((zone) => (
              <button
                key={zone}
                onClick={() => setActiveZone(zone)}
                className={`whitespace-nowrap px-5 py-2 rounded text-sm font-medium border transition-all duration-200 shrink-0
        ${
          activeZone === zone
            ? "bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-md"
            : "bg-white text-gray-700 border-gray-200 hover:border-[#1e3a8a] hover:text-[#1e3a8a]"
        }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">
        <TourCard data={toursData[0]} />
        <TourCard data={toursData[1]} className="md:row-span-2" />
        <TourCard data={toursData[2]} />
        <TourCard data={toursData[3]} className="md:row-span-2" />
        <TourCard data={toursData[4]} />
        <TourCard data={toursData[5]} />
        <TourCard data={toursData[6]} />
      </div>
    </div>
  );
}

function TourCard({ data, className }: { data: Tour; className?: string }) {
  return (
    <Card
      className={`relative h-full w-full overflow-hidden rounded-xl group ${className}`}
    >
      {/* Image */}
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 p-4 text-white">
        <h3 className="text-sm font-semibold leading-tight">{data.title}</h3>
        <p className="text-xs opacity-80">{data.tours} tours</p>
      </div>
    </Card>
  );
}
