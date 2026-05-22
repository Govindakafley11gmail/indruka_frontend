// @/custom-components/cards/DefaultTourCard.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface DefaultTourCardProps {
  remainingCount?: number;
}

export default function DefaultTourCard({
}: DefaultTourCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl w-[350px] shadow-xl border-0 p-0 relative cursor-pointer group h-full min-h-[400px]">
      {/* This wrapper must be relative + sized for fill to work */}
      <div className="relative w-full h-full min-h-100">
        <Image
          src="/bhutan-banner.jpg"
          alt="Explore More Tours"
          fill                        // ← replaces width/height
          className="object-cover"    // ← fills and crops to container
          unoptimized
        />

        {/* Overlay sits above the image */}
        <div className="absolute inset-0 flex flex-col items-start justify-start gap-3 p-6 z-10">
          <Button className="group mt-2 rounded-full bg-white text-blue-700 font-bold shadow-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center">
            <span className="ml-0 w-0 overflow-hidden opacity-0 group-hover:ml-2 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
              Explore More
            </span>
            <ArrowUpRight className="w-5 h-5 text-center" />
          </Button>
        </div>
      </div>
    </Card>
  );
}