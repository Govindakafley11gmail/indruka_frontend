"use client";
import { Briefcase, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { CorporateMenuItem } from "../types";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CorporatesDropdownProps {
  items?: CorporateMenuItem[];
  title: string;
  icon?: string;
  variant?: "default" | "titles-only";
}

export function CorporatesDropdown({
  items = [],
  title,
  icon,
  variant = "default",
}: CorporatesDropdownProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const router = useRouter();

  const handlePlaceClick = (place: string) => {
    const encoded = encodeURIComponent(place);
    router.push(`/tours?place=${encoded}`);
  };
 const handleCategoryClick = (category: string) => {
  const encoded = encodeURIComponent(category);
  router.push(`/tours?country=Bhutan&spec=${encoded}`); // ← spec + country
};

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 rounded-full border-gray-200 bg-white text-gray-700 text-sm font-medium h-10 px-4 shadow-sm hover:shadow-md transition"
        >
          {icon ? (
            <Image src={icon} alt={title} width={24} height={24} />
          ) : (
            <Briefcase className="w-4 h-4" />
          )}
          {title}
          <ChevronDown className="w-3 h-3 opacity-70" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className={`p-4 rounded-2xl border border-gray-100 shadow-2xl bg-white ${
          variant === "titles-only"
            ? "w-auto"
            : "w-[100vw] max-w-6xl"
        }`}
      >
        {variant === "titles-only" ? (
          // ── Bhutan: titles stacked in a single column, auto width ──
          <div className="flex flex-col gap-1">
            {items.map((item, i) => (
              <div
                key={i}
        onClick={() => handleCategoryClick(item.title)}  // ← changed
                className="px-3 py-2 rounded-xl font-semibold text-gray-800 text-sm hover:text-pink-600 hover:bg-pink-50 transition cursor-pointer whitespace-nowrap"
              >
                {item.title}
              </div>
            ))}
          </div>
        ) : (
          // ── India: original grouped layout with subtitles ──
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {items.map((item, i) => (
              <div key={i} className="flex flex-col gap-1 p-3 rounded-xl">
                <span className="font-semibold text-gray-800 text-sm mb-1">
                  {item.title}
                </span>

                <div className="text-gray-500 text-xs space-y-1">
                  {item.subtitle
                    ?.slice(0, expandedIndex === i ? item.subtitle.length : 4)
                    .map((place, idx) => (
                      <div
                        key={idx}
                        onClick={() => handlePlaceClick(place.title)}
                        className="hover:text-pink-600 transition cursor-pointer text-sm py-0.5"
                      >
                        {place.title}
                      </div>
                    ))}

                  {(item.subtitle?.length ?? 0) > 4 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedIndex(expandedIndex === i ? null : i);
                      }}
                      className="text-pink-600 text-xs mt-1 hover:underline"
                    >
                      {expandedIndex === i ? "Show less" : "Show more"}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}