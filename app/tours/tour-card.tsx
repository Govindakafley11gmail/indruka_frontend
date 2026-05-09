"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  MapPin,
  CalendarDays,
  Users,
  Infinity,
  Building2,
  Camera,
  Plane,
  UtensilsCrossed,
  UserCheck,
  Info,
  PlaneTakeoff,
  Bus,
} from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TourIncludesDialog } from "@/custom-components/customs-dialog";

type Tour = {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  days: number;
  cities: number;
  dates: number;
  price: number;
  tag?: string;
};

const tours: Tour[] = [
  {
    id: 1,
    title: "Best of Amritsar",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800",
    rating: 5,
    reviews: 64,
    days: 4,
    cities: 2,
    dates: 1,
    price: 277,
    tag: "GROUP TOUR",
  },
  {
    id: 2,
    title: "Patan Modhera with Statue of Unity",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    rating: 5,
    reviews: 26,
    days: 5,
    cities: 3,
    dates: 1,
    price: 388,
    tag: "GROUP TOUR",
  },
  {
    id: 3,
    title: "Indore Ujjain Mandu",
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?w=800",
    rating: 5,
    reviews: 79,
    days: 5,
    cities: 5,
    dates: 2,
    price: 366,
    tag: "GROUP TOUR",
  },
  {
    id: 4,
    title: "Sarnath Varanasi",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
    rating: 5,
    reviews: 62,
    days: 5,
    cities: 3,
    dates: 2,
    price: 410,
    tag: "GROUP TOUR",
  },
];

const zones = [
  { name: "North" },
  { name: "South" },
  { name: "West & Central" },
  { name: "East & North East" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex text-[#FF7417] text-sm">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function GlobeIllustration() {
  return (
    <svg
      viewBox="0 0 160 160"
      className="w-28 h-28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="80" cy="80" r="70" fill="#FFF9E6" />
      <circle cx="80" cy="80" r="58" fill="#FFF3CC" />
      <circle
        cx="80"
        cy="80"
        r="48"
        fill="#1e3a8a"
        opacity="0.08"
        stroke="#1e3a8a"
        strokeWidth="1.5"
      />
      <ellipse cx="72" cy="72" rx="28" ry="32" fill="#F5C518" />
      <ellipse cx="90" cy="85" rx="16" ry="20" fill="#F5C518" />
      <ellipse cx="65" cy="90" rx="12" ry="14" fill="#F5C518" />
      <circle cx="60" cy="65" r="8" fill="#E6B800" />
      <circle cx="88" cy="70" r="6" fill="#E6B800" />
      <ellipse
        cx="80"
        cy="80"
        r="60"
        ry="20"
        fill="none"
        stroke="#1e3a8a"
        strokeWidth="1"
        strokeDasharray="4 3"
        opacity="0.4"
      />
      <ellipse
        cx="80"
        cy="80"
        rx="20"
        ry="60"
        fill="none"
        stroke="#1e3a8a"
        strokeWidth="1"
        strokeDasharray="4 3"
        opacity="0.4"
      />
      <g transform="translate(118, 42) rotate(40)">
        <polygon points="0,-5 10,0 0,5" fill="#1e3a8a" />
        <rect x="-6" y="-1.5" width="7" height="3" fill="#1e3a8a" />
        <polygon points="-2,-1.5 -6,-5 -8,-5 -5,-1.5" fill="#1e3a8a" />
        <polygon points="-2,1.5 -6,5 -8,5 -5,1.5" fill="#1e3a8a" />
      </g>
      <g transform="translate(38, 118) rotate(220)">
        <polygon points="0,-4 8,0 0,4" fill="#1e3a8a" />
        <rect x="-5" y="-1" width="6" height="2" fill="#1e3a8a" />
        <polygon points="-1,-1 -5,-4 -7,-4 -4,-1" fill="#1e3a8a" />
        <polygon points="-1,1 -5,4 -7,4 -4,1" fill="#1e3a8a" />
      </g>
      <circle cx="68" cy="58" r="3.5" fill="#1e3a8a" />
      <polygon points="68,65 64,58 72,58" fill="#1e3a8a" />
      <circle cx="92" cy="75" r="3" fill="#1e3a8a" />
      <polygon points="92,81 89,75 95,75" fill="#1e3a8a" />
      <circle cx="75" cy="88" r="2.5" fill="#1e3a8a" />
      <polygon points="75,93 72.5,88 77.5,88" fill="#1e3a8a" />
      <path
        d="M68 62 Q90 50 92 72"
        fill="none"
        stroke="#1e3a8a"
        strokeWidth="1"
        strokeDasharray="3 2"
        opacity="0.5"
      />
      <path
        d="M92 78 Q80 95 75 86"
        fill="none"
        stroke="#1e3a8a"
        strokeWidth="1"
        strokeDasharray="3 2"
        opacity="0.5"
      />
    </svg>
  );
}

function JourneyEndCard() {
  return (
    <Card className="h-full flex flex-col justify-between border bg-[#EEF3FB] text-center px-5 py-6">
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-[#1e3a8a] font-bold text-base leading-snug">
          Journey doesn&apos;t stop at this point
        </h3>

        <GlobeIllustration />

        <p className="text-gray-600 text-sm leading-snug">
          Start exploring a diverse range of additional tours.
        </p>
      </div>

      <button className="w-full bg-[#F5C518] hover:bg-[#e6b800] text-gray-900 font-bold text-sm py-2.5 rounded-md transition-colors duration-200 cursor-pointer mt-4">
        Show all tours
      </button>
    </Card>
  );
}

export default function TourCards() {
  const [activeZone, setActiveZone] = useState("North");
  const [priceRange] = useState([200, 450]);
  const tourFeatures = [
    { icon: Building2, label: "Hotel" },
    { icon: UtensilsCrossed, label: "Meals" },
    { icon: PlaneTakeoff, label: "Flight" },
    { icon: Camera, label: "Sightseeing" },
    { icon: Bus, label: "Transport" },
  ];

  const filteredTours = tours.filter(
    (tour) => tour.price >= priceRange[0] && tour.price <= priceRange[1],
  );

  return (
    // ✅ FIX 1: Added min-h-screen so justify-center has space to work
    <div className="px-4 py-10 flex flex-col items-center justify-center bg-white ">
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

      {/* ✅ FIX 2: Added w-full + max-w-7xl to all grid containers so they stretch properly */}
      {filteredTours.length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          <JourneyEndCard />
        </div>
      ) : (
        // ✅ FIX 3: Changed lg:grid-cols-6 → lg:grid-cols-4 (5 items fit properly now)
        <div className="w-full max-w-7xl relative">
          {" "}
          <Carousel opts={{ align: "center" }} className="w-full">
            {" "}
            <CarouselContent className="-ml-2">
              {filteredTours.map((tour) => (
                <CarouselItem
                  key={tour.id}
                  className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card className="h-full flex flex-col justify-between border hover:shadow-lg transition-all duration-200 rounded-lg">
                    {/* TOP */}
                    <div className="flex p-2 gap-2">
                      <div className="relative w-28 h-28 flex-shrink-0">
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className="w-full h-full object-cover rounded"
                        />
                        <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full">
                          <Heart className="w-4 h-4 text-blue-600" />
                        </button>
                      </div>

                      <div className="flex flex-col justify-center gap-1">
                        <h3 className="font-semibold text-sm">{tour.title}</h3>
                        <div className="flex items-center gap-2">
                          <Stars count={tour.rating} />
                          <span className="text-xs text-gray-500">
                            {tour.reviews} Reviews
                          </span>
                        </div>
                        <TourIncludesDialog/>
                      </div>
                    </div>

                    {/* BOTTOM */}
                    <div className="bg-[#F5F8FF] border-t border-[#dde8ff] mx-2 mb-2 p-2 rounded">
                      <div className="text-xs text-gray-600 flex items-center gap-2">
                        <span className="flex items-center gap-1">
                          <CalendarDays className="w-3 h-3 text-blue-600" />
                          {tour.days} Days
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-blue-600" />
                          {tour.cities} Cities
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-blue-600" />
                          {tour.dates} Date(s)
                        </span>
                      </div>

                      <div className="mt-3 text-sm">
                        <span className="text-gray-500">Starts from </span>
                        <span className="text-blue-600 font-bold">
                          ${tour.price}
                        </span>
                        <div className="text-xs text-gray-400">
                          per person on twin sharing
                        </div>
                      </div>

                      <div className="flex gap-2 mt-3">
                        <Button
                          variant="outline"
                          className="flex-1 border-blue-600 text-blue-600"
                        >
                          View Details
                        </Button>
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                          Book
                        </Button>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
              <CarouselItem className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <JourneyEndCard />
              </CarouselItem>
            </CarouselContent>
            {/* Controls OUTSIDE content */}
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      )}
    </div>
  );
}
