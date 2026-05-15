"use client";
import { Card } from "@/components/ui/card";

type Tour = {
  id: number;
  title: string;
  country: string;
  img?: string;        // ← real field from your tours data
  place?: string;
};

type Props = {
  tours: Tour[];      // ← passed in dynamically from SacredYatra
};

export default function TourCollage({ tours }: Props) {
  // Sort by id, take 7
  const displayTours = [...tours]
    .sort((a, b) => a.id - b.id)
    .slice(0, 7);

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">
        {displayTours[0] && <TourCard data={displayTours[0]} className="md:col-start-1" />}
        {displayTours[1] && <TourCard data={displayTours[1]} className="md:col-start-2 md:row-span-2" />}
        {displayTours[2] && <TourCard data={displayTours[2]} className="md:col-start-3" />}
        {displayTours[3] && <TourCard data={displayTours[3]} className="md:col-start-1 md:row-span-2" />}
        {displayTours[4] && <TourCard data={displayTours[4]} className="md:col-start-3" />}
        {displayTours[5] && <TourCard data={displayTours[5]} className="md:col-start-2" />}
        {displayTours[6] && <TourCard data={displayTours[6]} className="md:col-start-3" />}
      </div>
    </div>
  );
}

function TourCard({ data, className }: { data: Tour; className?: string }) {
  return (
    <div className={`relative h-full w-full overflow-hidden rounded-xl group ${className}`}>
      <img
        src={data.img}
        alt={data.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 p-4 text-white">
        <h3 className="text-sm font-semibold leading-tight">{data.title}</h3>
        <p className="text-xs opacity-80">{data.country}</p>
      </div>
    </div>
  );
}