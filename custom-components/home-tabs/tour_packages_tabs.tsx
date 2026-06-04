"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BhutanItem, Indiaitem } from "../body/data/bhutan/data";
import Card from "../body/Bhutan/landing/card";
import Image from "next/image";

export default function TourCategories() {
  return (
    <section className="w-full relative min-h-screen ">
      <div className="text-center mb-10 sm:mb-12 md:mb-14 max-w-2xl mx-auto px-4 sm:px-6">
        <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-100 rounded-full shadow-sm text-black">
          Travel For You
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug sm:leading-tight mb-3 sm:mb-4">
          Explore Your{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
            Dream Destinations
          </span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg  text-gray-500 leading-relaxed px-1 sm:px-2">
          Craft a personalized getaway tailored to your preferences <br />
          and desires. Every journey begins with a single step.
        </p>
      </div>

      {/* TABS */}
<div className="px-4 py-4 w-full  mx-auto overflow-hidden">
  
                    <Card title="Bhutan Tours" item={BhutanItem} />

      </div>
    </section>
  );
}
