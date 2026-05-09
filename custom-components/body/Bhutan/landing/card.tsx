/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import TourCard from "@/custom-components/cards";
import DefaultTourCard from "@/custom-components/cards/defaultcard";

export interface TourCardProps {
  title: string;
  itinerary: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  tags: string[];
  country: string;
  place:string;
  images: string[];
  inclusions: { icon: any; label: string; optional?: boolean }[];
}

export interface TourProperties {
  title: string;
  item: TourCardProps[];
  mainContainer?: string;
}

const TOTAL_SLOTS = 50; // 2 rows × 4 cols
const DEFAULT_CARD_INDEX = 7; // 3rd slot of row 2 (0-based)

export default function Card({ item, title, mainContainer }: TourProperties) {
  const country = item[0]?.country ?? "";
  const remainingCount = Math.max(0, item.length - (TOTAL_SLOTS - 1));

  return (
    <div className={`w-full h-full ${mainContainer || ""}`}>
      <div className="w-full flex-col gap-4 bg-contain bg-center flex p-8 my-4 justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-5">
          {Array.from({ length: TOTAL_SLOTS }).map((_, i) => {
            if (i === DEFAULT_CARD_INDEX) {
              return (
                <DefaultTourCard
                  key="default"
                  remainingCount={remainingCount}
                />
              );
            }

            const tourIndex = i < DEFAULT_CARD_INDEX ? i : i - 1;

            if (tourIndex < item.length) {
              return <TourCard key={i} {...item[tourIndex]} />;
            }

            return null;
          })}
        </div>

        {/* ✅ View More Button */}
        <div className="w-full flex justify-end mt-6">
          <button
            onClick={() => (window.location.href = `/tours?country=${country}`)}
            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full border border-blue-200 bg-white shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 overflow-hidden"
          >
            {/* Animated fill background */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-full" />

            {/* Label */}
            <span className="relative z-10 text-sm font-semibold tracking-wide text-blue-600 group-hover:text-white transition-colors duration-300">
              View All Tours
            </span>

            {/* Icon bubble */}
            <span className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-blue-50 group-hover:bg-white/20 transition-colors duration-300">
              <svg
                className="w-3.5 h-3.5 text-blue-500 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
