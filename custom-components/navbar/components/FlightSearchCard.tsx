/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Search, Globe, Tag, MapPin, X, ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SearchTabs } from "./SearchTabs";
import { useFlightSearch } from "../hooks/useFlightSearch";
import type { TripType } from "../types";
import { cn } from "@/lib/utils";

// ─── Tour search constants ───────────────────────────────────────────────────

const SPECIALITIES_BY_COUNTRY: Record<string, string[]> = {
  India: [
    "Honeymoon packages",
    "Religious yatras",
    "Luxury stays",
    "Budget backpacking trips",
    "Hill Stations & Nature Destinations",
    "Beach Holidays",
    "Corporate tours",
    "School/college trips",
    "Weekend Delhi-to-hills tours",
  ],
  Bhutan: [
    "Cultural",
    "Festival",
    "Trekking",
    "Luxury",
    "Birdwatching",
    "Private Tour",
  ],
};

const SPECIALITY_TO_TYPES: Record<string, string[]> = {
  "Honeymoon packages": ["Honeymoon"],
  "Religious yatras": [
    "Pilgrimage",
    "Pilgrimage Tour",
    "Yoga & Spiritual",
    "Do Dham Yatra",
    "Char Dham",
  ],
  "Luxury stays": ["Luxury", "Heritage", "Royal Heritage", "Luxury Camp", "Luxury Train"],
  "Budget backpacking trips": ["Adventure", "Adventure Tour"],
  "Hill Stations & Nature Destinations": ["Hill Station", "Scenic Holiday"],
  "Beach Holidays": ["Beach", "Backwaters", "Houseboat", "Island Tour"],
  "Corporate tours": ["Corporate"],
  "School/college trips": ["School", "College"],
  "Weekend Delhi-to-hills tours": ["Weekend"],
  Cultural: ["Cultural"],
  Festival: ["Festival", "Festival Tour"],
  Trekking: ["Trekking"],
  Luxury: ["Luxury", "Luxury stays"],
  Birdwatching: ["Birdwatching"],
  "Private Tour": ["Private Tour"],
};

const COUNTRY_FLAG: Record<string, string> = {
  India: "🇮🇳",
  Bhutan: "🇧🇹",
};

const ALL_SPECIALITIES = [
  ...new Set([
    ...Object.values(SPECIALITIES_BY_COUNTRY).flat(),
  ]),
];

// ─── Sub-components ──────────────────────────────────────────────────────────

interface SearchFieldProps {
  icon: React.ElementType;
  label: string;
  value?: string;
  placeholder: string;
  isOpen?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

function SearchField({
  icon: Icon,
  label,
  value,
  placeholder,
  isOpen,
  onClick,
  children,
  className,
}: SearchFieldProps) {
  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => (e.key === "Enter" || e.key === " ") && onClick()
          : undefined
      }
      onClick={onClick}
      className={cn(
        "relative flex flex-col justify-center gap-1 px-4 py-3",
        "border-r border-blue-100 last:border-r-0",
        "transition-colors duration-150 min-w-0",
        isOpen ? "bg-blue-50" : onClick ? "hover:bg-blue-50/50 cursor-pointer" : "",
        className
      )}
    >
      {/* Label */}
      <div className="flex items-center gap-1.5">
        <Icon
          size={11}
          className={cn(
            "flex-shrink-0 transition-colors",
            isOpen ? "text-blue-600" : "text-blue-400"
          )}
        />
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-widest transition-colors",
            isOpen ? "text-blue-600" : "text-blue-400"
          )}
        >
          {label}
        </span>
      </div>

      {/* Value or slot */}
      {children ?? (
        <div className="flex items-center justify-between gap-1 pr-1">
          <span
            className={cn(
              "text-sm font-medium truncate transition-colors leading-snug",
              value ? "text-slate-800" : "text-slate-400 font-normal"
            )}
          >
            {value || placeholder}
          </span>
          <ChevronDown
            size={13}
            className={cn(
              "flex-shrink-0 text-blue-300 transition-transform duration-150",
              isOpen && "rotate-180 text-blue-500"
            )}
          />
        </div>
      )}
    </div>
  );
}

interface DropdownMenuProps {
  open: boolean;
  className?: string;
  children: React.ReactNode;
}

function DropdownMenu({ open, className, children }: DropdownMenuProps) {
  return (
    <div
      className={cn(
        "absolute top-[calc(100%+8px)] left-0 z-50",
        "bg-white rounded-xl border border-blue-100",
        "shadow-lg shadow-blue-900/5",
        "transition-all duration-150 origin-top",
        open
          ? "opacity-100 scale-y-100 pointer-events-auto"
          : "opacity-0 scale-y-95 pointer-events-none",
        className
      )}
    >
      {children}
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

interface FlightSearchCardProps {
  activeTab: TripType;
  onTabChange: (tab: TripType) => void;
  /** Called when the user submits the tour search */
  onTourSearch?: (params: {
    country: string;
    spec: string;
    types: string[];
    keyword: string;
  }) => void;
}

export function FlightSearchCard({
  activeTab,
  onTabChange,
  onTourSearch,
}: FlightSearchCardProps) {
  const { state, setTripType } = useFlightSearch();

  // Tour search state
  const [country, setCountry] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [keyword, setKeyword] = useState("");
  const [openPanel, setOpenPanel] = useState<"country" | "speciality" | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);
  const kwRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setOpenPanel(null);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const availableSpecs = country
    ? (SPECIALITIES_BY_COUNTRY[country] ?? [])
    : ALL_SPECIALITIES;

  const mappedTypes: string[] = speciality
    ? (SPECIALITY_TO_TYPES[speciality] ?? [])
    : [];

  const hasFilters = !!country || !!speciality || !!keyword;

  const handleCountry = useCallback(
    (val: string) => {
      setCountry(val);
      if (val && speciality) {
        const valid = SPECIALITIES_BY_COUNTRY[val] ?? [];
        if (!valid.includes(speciality)) setSpeciality("");
      }
      setOpenPanel(null);
    },
    [speciality]
  );

  const handleSpeciality = useCallback((val: string) => {
    setSpeciality(val);
    setOpenPanel(null);
  }, []);

  const clearAll = useCallback(() => {
    setCountry("");
    setSpeciality("");
    setKeyword("");
    setOpenPanel(null);
  }, []);

  const handleSearch = useCallback(() => {
    setOpenPanel(null);
    onTourSearch?.({
      country,
      spec: speciality,
      types: mappedTypes,
      keyword,
    });
  }, [country, speciality, mappedTypes, keyword, onTourSearch]);

  const toggle = (panel: "country" | "speciality") =>
    setOpenPanel((p) => (p === panel ? null : panel));

  return (
    <div className="hidden md:block" ref={cardRef}>
      <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/10 border border-blue-100 relative" style={{ overflow: "visible" }}>

        {/* ── Trip-type tabs ── */}
        <SearchTabs activeTab={state.tripType} onTabChange={setTripType} />
        <Separator className="border-blue-50" />

        {/* ── Search fields ── */}
        <div className="px-4 sm:px-5 py-4">
          <div className="flex items-stretch border border-blue-100 rounded-xl overflow-visible relative">

            {/* Country */}
            <div className="relative">
              <SearchField
                icon={Globe}
                label="Country"
                value={
                  country
                    ? `${COUNTRY_FLAG[country] ?? ""} ${country}`
                    : undefined
                }
                placeholder="All countries"
                isOpen={openPanel === "country"}
                onClick={() => toggle("country")}
                className="min-w-[160px]"
              />
              <DropdownMenu open={openPanel === "country"} className="min-w-[200px]">
                <div className="py-1.5">
                  <button
                    onClick={() => handleCountry("")}
                    className={cn(
                      "w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors",
                      "hover:bg-blue-50",
                      !country ? "text-blue-700 font-semibold" : "text-slate-500"
                    )}
                  >
                    <span className="text-base">🌏</span> All countries
                  </button>
                  <div className="my-1 border-t border-blue-50" />
                  {(["India", "Bhutan"] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => handleCountry(c)}
                      className={cn(
                        "w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors",
                        "hover:bg-blue-50",
                        country === c
                          ? "text-blue-700 font-semibold"
                          : "text-slate-700"
                      )}
                    >
                      <span className="text-base">{COUNTRY_FLAG[c]}</span>
                      {c}
                      {country === c && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
                      )}
                    </button>
                  ))}
                </div>
              </DropdownMenu>
            </div>

            {/* Speciality */}
            <div className="relative flex-1">
              <SearchField
                icon={Tag}
                label="Speciality"
                value={speciality || undefined}
                placeholder="Any type"
                isOpen={openPanel === "speciality"}
                onClick={() => toggle("speciality")}
                className="min-w-[190px]"
              />
              <DropdownMenu
                open={openPanel === "speciality"}
                className="min-w-[250px] max-h-[300px] overflow-y-auto"
              >
                <div className="py-1.5">
                  <button
                    onClick={() => handleSpeciality("")}
                    className={cn(
                      "w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-blue-50",
                      !speciality ? "text-blue-700 font-semibold" : "text-slate-500"
                    )}
                  >
                    Any speciality
                  </button>
                  <div className="my-1 border-t border-blue-50" />
                  {availableSpecs.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSpeciality(s)}
                      className={cn(
                        "w-full text-left px-4 py-2.5 text-sm flex items-center justify-between gap-2 transition-colors",
                        "hover:bg-blue-50",
                        speciality === s
                          ? "text-blue-700 font-semibold"
                          : "text-slate-700"
                      )}
                    >
                      <span>{s}</span>
                      {speciality === s && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </DropdownMenu>
            </div>

            {/* Keyword */}
            <div
              className={cn(
                "flex-[1.4] flex flex-col justify-center gap-1 px-4 py-3 min-w-0",
                "border-r border-blue-100 cursor-text"
              )}
              onClick={() => kwRef.current?.focus()}
            >
              <div className="flex items-center gap-1.5">
                <MapPin size={11} className="text-blue-400 flex-shrink-0" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-400">
                  Place or keyword
                </span>
              </div>
              <input
                ref={kwRef}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="e.g. Kedarnath, beach, luxury…"
                className={cn(
                  "w-full bg-transparent text-sm font-medium",
                  "text-slate-800 placeholder:text-slate-400 placeholder:font-normal",
                  "outline-none border-none focus:ring-0"
                )}
              />
            </div>

            {/* Search button */}
            <div className="flex items-center p-2">
              <button
                onClick={handleSearch}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-lg",
                  "bg-blue-700 hover:bg-blue-800 active:scale-[0.97]",
                  "text-white text-sm font-semibold",
                  "transition-all duration-150",
                  "shadow-md shadow-blue-700/30",
                  "whitespace-nowrap"
                )}
              >
                <Search size={14} />
                Search
              </button>
            </div>
          </div>

          {/* ── Active filter tags ── */}
          {hasFilters && (
            <div className="flex items-center flex-wrap gap-2 mt-3">
              {country && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-700 text-white">
                  {COUNTRY_FLAG[country]} {country}
                </span>
              )}
              {speciality && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                  {speciality}
                </span>
              )}
              {mappedTypes.length > 0 && (
                <>
                  <span className="text-xs text-slate-400">tours matching:</span>
                  {mappedTypes.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                    >
                      {t}
                    </span>
                  ))}
                </>
              )}
              {keyword && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                  <Search size={9} />
                  &ldquo;{keyword}&rdquo;
                </span>
              )}
              <button
                onClick={clearAll}
                className="ml-auto flex items-center gap-1 text-xs text-slate-400 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded-md transition-colors"
              >
                <X size={12} /> Clear all
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}