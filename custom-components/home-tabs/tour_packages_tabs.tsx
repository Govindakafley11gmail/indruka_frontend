"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BhutanItem, Indiaitem } from "../body/data/bhutan/data";
import Card from "../body/Bhutan/landing/card";
import Image from "next/image";

export default function TourCategories() {
  return (
    <section className="relative min-h-screen ">
      {/* HEADER */}
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase  mb-4 px-4 py-1.5 bg-blue-100 rounded-full shadow-sm text-black">
          Travel For You
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Explore Your{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
            Dream Destinations
          </span>
        </h2>

        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
          Craft a personalized getaway tailored to your preferences and desires.
          Every journey begins with a single step.
        </p>
      </div>

      {/* TABS */}
      <div className="max-w-7xl mx-auto ">
        <Tabs defaultValue="bhutan" className="w-full">
          {/* COUNTRY SWITCH */}
          <div className="flex justify-center">
            <TabsList className="flex gap-3 bg-transparent p-0 h-auto">
              <TabsTrigger
                value="bhutan"
                className="group flex items-center gap-3 px-5 py-3.5 rounded-xl border border-gray-200 bg-white
        transition-all duration-200 hover:border-gray-300 hover:bg-gray-50
        data-[state=active]:border-[#E8600A] data-[state=active]:border-[1.5px]
        relative overflow-hidden shadow-none h-auto"
              >
                <span
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl opacity-0
        group-data-[state=active]:opacity-100 transition-opacity duration-200"
                  style={{
                    background:
                      "linear-gradient(to right, #E8600A 50%, #8B1A1A 50%)",
                  }}
                />

                <Image
                  src="/bhutan.png"
                  alt="Bhutan Flag"
                  width={32}
                  height={32}
                />

                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-sm font-medium text-gray-700 transition-colors">
                    <span className="group-data-[state=active]:hidden">
                      Bhutan
                    </span>
                    <span
                      className="hidden group-data-[state=active]:inline"
                      style={{
                        background:
                          "linear-gradient(to right, #E8600A, #8B1A1A)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Bhutan
                    </span>
                  </span>
                  <span className="text-[11px] text-gray-400 group-data-[state=active]:text-[#E8600A] transition-colors">
                    Kingdom tours
                  </span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="india"
                className="group flex items-center gap-3 px-5 py-3.5 rounded-xl border border-gray-200 bg-white
        transition-all duration-200 hover:border-gray-300 hover:bg-gray-50
        data-[state=active]:border-[#FF9933] data-[state=active]:border-[1.5px]
        relative overflow-hidden shadow-none h-auto"
              >
                {/* Saffron top bar */}
                <span
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl opacity-0
        group-data-[state=active]:opacity-100 transition-opacity duration-200"
                  style={{
                    background:
                      "linear-gradient(to right, #FF9933 33%, #ffffff 33%, #ffffff 66%, #138808 66%)",
                  }}
                />

                {/* <span className="text-2xl"> */}
                <Image
                  src="/india.png"
                  alt="India Flag"
                  width={32}
                  height={32}
                />
                {/* </span> */}

                <div className="flex flex-col items-start gap-0.5">
                  <span
                    className="text-sm font-medium text-gray-700 transition-colors"
                    style={{}}
                  >
                    <span className="group-data-[state=active]:hidden">
                      India
                    </span>
                    <span
                      className="hidden group-data-[state=active]:inline"
                      style={{
                        background:
                          "linear-gradient(to right, #FF9933, #000080)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      India
                    </span>
                  </span>
                  <span className="text-[11px] text-gray-400 group-data-[state=active]:text-[#138808] transition-colors">
                    Incredible tours
                  </span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="bhutan" className="mt-0 pt-0">
            <Card title="Bhutan Tours" item={BhutanItem} />
          </TabsContent>
          <TabsContent value="india" className="mt-0 pt-0">
            <Card title="India Tours" item={Indiaitem} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
