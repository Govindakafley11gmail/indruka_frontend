"use client";

import { Card } from "@/components/ui/card";
import { MapPin, Star, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Place = {
  id: number;
  name: string;
  region: string;
  type: string;
  rating: number;
  reviews: number;
  tag: string;
  image: string;
  country: string;
};

const places: Place[] = [
  {
    id: 1,
    name: "Paro Taktsang",
    region: "Paro Valley",
    type: "Cultural",
    country: "Bhutan",
    rating: 4.9,
    reviews: 3241,
    tag: "Iconic",
    image: "/bhutan1.jpg",
  },
  {
    id: 2,
    name: "Punakha Dzong",
    region: "Punakha",
    type: "Trekking",
    rating: 4.8,
    reviews: 1879,
    tag: "Heritage",
    image: "/bhutan2.jpg",
    country: "Bhutan",
  },
  {
    id: 3,
    name: "Darjeeling",
    region: "India",
    type: "Hill Stations & Nature Destinations",
    rating: 4.7,
    reviews: 1102,
    tag: "Scenic",
    image: "/darjeeling.jpg",
    country: "India",
  },
  {
    id: 4,
    name: "Himachal Valley",
    region: "India",
    type: "Hill Stations & Nature Destinations",
    rating: 4.8,
    reviews: 942,
    tag: "Nature",
    image: "/himachal.jpg",
    country: "India",
  },
  {
    id: 5,
    name: "Goa Beach",
    region: "India",
    type: "Beach Holidays",
    rating: 4.6,
    reviews: 631,
    tag: "Hidden Gem",
    image: "/GOA.jpg",
    country: "India",
  },
  {
    id: 6,
    name: "Badrinath Temple",
    region: "India",
    type: "Holy",
    rating: 4.7,
    reviews: 788,
    country: "India",
    tag: "Religious yatras",
    image: "/Badrinath.jpg",
  },
];

const tabs = [
    { label: "Bhutan", flag: "🇧🇹", value: "Bhutan" },

  { label: "India", flag: "🇮🇳", value: "India" },
];

export default function TopTrendingPlaces() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Bhutan");

  const filteredPlaces =
     places.filter((p) => p.country === activeTab);

  const handleCardClick = (place: Place) => {
    if (place.country === "India") {
      const params = new URLSearchParams({
        country: place.country,
        id: place.name,
      });
      router.push(`/tours?${params.toString()}`);
    } else {
      const params = new URLSearchParams({
        country: place.country,
        spec: place.type,
      });
      router.push(`/tours?${params.toString()}`);
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="relative z-10 text-center max-w-2xl mx-auto py-10">
          <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-2">
            Explore More
          </p>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Top <span className="text-blue-600">Trending</span> Places
          </h3>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-4 rounded-full" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Discover the most breathtaking destinations.
          </p>
        </div>

        {/* Country Tabs */}
        <div className="relative z-10 flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-2xl p-1.5 shadow-inner">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              const count =
                tab.value === "All"
                  ? places.length
                  : places.filter((p) => p.country === tab.value).length;

              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`
                    relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                    transition-all duration-300 ease-out
                    ${
                      isActive
                        ? "bg-white text-blue-600 shadow-md scale-[1.02]"
                        : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
                    }
                  `}
                >
                  <span className="text-lg leading-none">{tab.flag}</span>
                  <span>{tab.label}</span>
                  <span
                    className={`
                      text-[10px] font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center
                      ${
                        isActive
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-200 text-gray-400"
                      }
                    `}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {filteredPlaces.map((place, i) => (
            <div
              key={place.id}
              className="animate-fadeInUp"
              style={{
                animationDelay: `${i * 60}ms`,
                animationFillMode: "both",
              }}
              onClick={() => handleCardClick(place)}
            >
              <Card className="group relative overflow-hidden rounded-3xl shadow-2xl border-0 m-0 p-0 cursor-pointer h-[400px]">
                <div
                  className="absolute inset-0 bg-gray-400 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${place.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Trending badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 z-10">
                  <TrendingUp className="w-3 h-3 text-white" />
                  <span className="text-[11px] font-semibold text-white">
                    Trending
                  </span>
                </div>

                {/* Country flag badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-2.5 py-1 z-10">
                  <span className="text-base leading-none">
                    {place.country === "India" ? "🇮🇳" : "🇧🇹"}
                  </span>
                  <span className="text-[11px] font-semibold text-white">
                    {place.country}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300 z-10" />

                <div className="absolute bottom-0 left-0 right-0 p-5 backdrop-blur-md bg-white/10 border-t border-white/20 z-10">
                  <h3 className="text-xl font-semibold text-white">
                    {place.name}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-300" />
                      <span className="text-xs text-gray-300">
                        {place.region}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/20 rounded-full px-2.5 py-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-semibold text-white">
                        {place.rating}
                      </span>
                      <span className="text-xs text-gray-300">
                        ({place.reviews.toLocaleString()})
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-blue-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View {place.type} tours →
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.35s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
}