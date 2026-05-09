"use client";

import { useState } from "react";

export default function SortingTabs() {
  const tabs = ["All", "Monastery", "Fortress", "Mountain Pass", "Valley"];
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="relative w-full">
      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-6 " />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-6" />

      {/* SCROLL CONTAINER */}
      <div className="flex gap-2 overflow-x-auto px-2 py-2 scroll-smooth no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 border
              ${
                activeTab === tab
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-blue-50 hover:border-blue-300"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}