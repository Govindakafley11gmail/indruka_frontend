"use client"
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { DayItem } from "./tour-iternary";

type Day = {
  day: number;
  date: string;
  title: string;
  details: string;
};

function LocationPin({ active }: { active: boolean }) {
  return active ? (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="flex-shrink-0"
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="#1e3a8a"
      />
      <circle cx="12" cy="9" r="2.5" fill="white" />
    </svg>
  ) : (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="flex-shrink-0"
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        stroke="#bbb"
        strokeWidth="1.8"
        fill="none"
      />
      <circle
        cx="12"
        cy="9"
        r="2.5"
        stroke="#bbb"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
export default function TourItinerary({
  days,
  expandedDays,
  onToggleDay,
}: {
  days: DayItem[];
  expandedDays: Set<number>;
  onToggleDay: (day: number) => void;
}) {
  return (
    <div>
      {days.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === days.length - 1;
        const isOpen = expandedDays.has(item.day);

        return (
          <div key={item.day} className="flex">
            <div className="flex flex-col items-center w-8 flex-shrink-0 mr-3">
              <div className="mt-[18px]">
                <LocationPin active={isFirst} />
              </div>
              {!isLast && (
                <div className="w-px bg-gray-200 flex-1 min-h-4 mt-0.5" />
              )}
            </div>

            <div
              className={cn("flex-1 py-3.5 cursor-pointer", !isLast && "border-b border-gray-100")}
              onClick={() => onToggleDay(item.day)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-800 mb-1">
                    Day {item.day} 
                  </p>
                  <p className={cn("text-base", isOpen ? "font-semibold text-blue-900" : "font-medium text-gray-800")}>
                    {item.title}
                  </p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); onToggleDay(item.day); }}
                  className={cn(
                    "w-7 h-7 rounded-full border flex items-center justify-center ml-4 shrink-0 transition-all duration-200",
                    isOpen
                      ? "border-blue-900 bg-blue-50 text-blue-900 rotate-45"
                      : "border-gray-300 text-gray-400 hover:border-blue-900 hover:text-blue-900",
                  )}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0",
              )}>
                <div className="border-l-[3px] border-blue-900 bg-blue-50 rounded-r-md px-4 py-3 pr-12">
                  <p className="text-base text-gray-700 leading-relaxed">{item.details}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}