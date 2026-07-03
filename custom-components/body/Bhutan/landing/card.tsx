/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import TourCard from "@/custom-components/cards";
import DefaultTourCard from "@/custom-components/cards/defaultcard";
import { useRouter } from "next/navigation";

export interface TourCardProps {
  title: string;
  slug?: string;
  itinerary: string;
  price: any;
  oldPrice?: string | number;
    priceRegional?: number; // 👈 add this

  discount?: string;
  tags: string[];
  country: string;
  place: string;
  images: string[];
  type?: string[];
  inclusions: { icon: any; label: string; optional?: boolean }[];
}

export interface TourProperties {
  title: string;
  item: TourCardProps[];
  mainContainer?: string;
}

const DEFAULT_CARD_INDEX = 7;

export default function Card({ item, title, mainContainer }: TourProperties) {
  const router = useRouter();

  const country = item[0]?.country ?? "";
  const viewAllHref = `/tours/${country.toLowerCase()}`;

  // Build the display list by inserting DefaultTourCard at index 7
  const displayItems: ("default" | TourCardProps)[] = [];

  item.forEach((tour, i) => {
    if (i === DEFAULT_CARD_INDEX) {
      displayItems.push("default");
    }
    displayItems.push(tour);
  });

  // If item has fewer than DEFAULT_CARD_INDEX items, still push the default card
  if (item.length <= DEFAULT_CARD_INDEX) {
    displayItems.push("default");
  }

  const remainingCount = Math.max(0, item.length - DEFAULT_CARD_INDEX);

  return (
    <div className={`w-full h-full ${mainContainer || ""}`}>
      <div className="w-full flex flex-col  py-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 justify-items-center items-stretch">
          {" "}
          {displayItems.map((cardItem, i) => {
            if (cardItem === "default") {
              return (
                <DefaultTourCard
                  key="default"
                  remainingCount={remainingCount}
                />
              );
            }

            if (!cardItem.slug) return null;

            return <TourCard key={cardItem.slug} {...cardItem} />;
          })}
        </div>

        <div className="w-full flex sm:justify-end justify-center mt-6">
          <button
            onClick={() => router.push(viewAllHref)}
            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full border border-blue-200 bg-white shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-full" />
            <span className="relative z-10 text-sm font-semibold tracking-wide text-blue-600 group-hover:text-white transition-colors duration-300">
              View All {country} Tours
            </span>
            <span className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-blue-50 group-hover:bg-white/20 transition-colors duration-300">
              <svg
                className="w-3.5 h-3.5 text-blue-500 group-hover:text-white transition-colors duration-300"
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
