"use client";

import { CircleDotDashed, UserCheck, X, type LucideIcon } from "lucide-react";
import RequestCallBack from "./requestedcallback";
import { useState } from "react";

export interface TourFeature {
  icon: LucideIcon;
  label: string;
  color: string;
  bg: string;
}

export interface TourHighlight {
  title: string;
}

export interface TourHighlightsProps {
  tourFeatures: TourFeature[];
  tourHighlights: TourHighlight[];
  tourManagerCompany: string;
}

export default function TourHighlights({
  tourFeatures,
  tourHighlights,
  tourManagerCompany,
}: TourHighlightsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const visibleHighlights = tourHighlights.slice(0, 4);

  return (
    <div className="w-full bg-gray-100 py-10 px-4 h-min-full ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start">
        {/* ── Main Card ── */}
        <div className="flex-1 bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-8 ">
          {/* LEFT - TOUR INCLUDES */}
          <div className="flex-1 md:border-r md:pr-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Tour Includes
            </h2>
            <div className="flex flex-wrap gap-4">
              {tourFeatures.map(({ icon: Icon, label, color, bg }) => (
                <div key={label} className="flex flex-col items-center group">
                  <div
                    className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-200"
                    style={{
                      backgroundColor: bg,
                      borderColor: color + "40", // 25% opacity border matching icon color
                    }}
                    onMouseEnter={(e) => {
                      (
                        e.currentTarget as HTMLDivElement
                      ).style.backgroundColor = color + "25";
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        color + "80";
                    }}
                    onMouseLeave={(e) => {
                      (
                        e.currentTarget as HTMLDivElement
                      ).style.backgroundColor = bg;
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        color + "40";
                    }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} color={color} />
                  </div>
                  <span
                    className="text-xs mt-2 font-medium text-center"
                    style={{ color }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 mt-2">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                <UserCheck className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-medium mt-2">
                Tour includes the services of{" "}
                <span className="text-blue-700 font-semibold">
                  {tourManagerCompany}&apos;s Tour Manager.
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT - TOUR HIGHLIGHTS */}
          <div className="flex-1">
            <div className="flex justify-between items-center ">
              <h2 className="text-lg font-semibold text-gray-800">
                Tour Highlights
              </h2>
              {tourHighlights.length > 4 && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium transition"
                >
                  View All ({tourHighlights.length} highlights)
                </button>
              )}
            </div>

            <div className="space-y-4 py-4">
              {visibleHighlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-blue-100 transition">
                    <CircleDotDashed className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-black transition">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Request Callback ── */}
        <div className="w-full md:w-80 shrink-0">
          <RequestCallBack />
        </div>
      </div>

      {/* ── Modal ── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">
                All Tour Highlights
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body — scrollable */}
            <div className="overflow-y-auto px-6 py-4 space-y-3">
              {tourHighlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group py-1">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-blue-100 transition shrink-0">
                    <CircleDotDashed className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-black transition">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-100">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
