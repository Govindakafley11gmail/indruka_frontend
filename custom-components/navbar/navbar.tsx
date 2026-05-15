"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageBackground, Header, FlightSearchCard } from "./components";
import type { TripType } from "./types";

export default function Navbar({ isActive = true }: { isActive?: boolean }) {
  const [activeTab, setActiveTab] = useState<TripType>("one-way");
  const router = useRouter();

  return (
    // ✅ overflow-hidden removed from here — it was clipping the dropdowns
    <div className="relative font-sans">

      {/* ✅ overflow-hidden moved here — only clips the decorative background, not the dropdowns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <PageBackground />
      </div>

      <Header />

      <main className="relative z-10 pt-10 pb-24 px-4">
        {isActive && (
          <div className="max-w-7xl pt-20 mx-auto">
            <FlightSearchCard
              activeTab={activeTab}
              onTabChange={setActiveTab}
              onTourSearch={({ country, spec, types, keyword }) => {
                const params = new URLSearchParams();
                if (country) params.set("country", country);
                if (spec) params.set("spec", spec);
                if (types[0]) params.set("type", types[0]);
                if (keyword) params.set("q", keyword);
                router.push(`/tours?${params.toString()}`);
              }}
            />
          </div>
        )}
      </main>
    </div>
  );
}