"use client";

import { useRef, useState, useEffect } from "react";

export default function SortingTabs({
  tabs,
  checkedSpec,
  onSpecClick,
}: {
  tabs: string[];
  checkedSpec?: Set<string>;
  onSpecClick?: (spec: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [tabs]);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -220 : 220,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full flex items-center gap-1">
      {/* Left fade + arrow */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className={`
          shrink-0 z-10 flex items-center justify-center w-8 h-8 rounded-full
          bg-white border border-slate-200 shadow-sm text-slate-500
          hover:border-blue-400 hover:text-blue-600 hover:shadow-md
          transition-all duration-200
          ${canScrollLeft ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Left gradient mask */}
      <div
        className={`absolute left-9 top-0 h-full w-8 bg-gradient-to-r from-[#F0F4FA] to-transparent z-10 pointer-events-none transition-opacity duration-200 ${canScrollLeft ? "opacity-100" : "opacity-0"}`}
      />

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scroll-smooth py-1 px-0.5"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>

        {tabs.map((tab) => {
          const isActive = checkedSpec?.has(tab);
          return (
            <button
              key={tab}
              onClick={() => onSpecClick?.(tab)}
              className={`
                relative shrink-0 px-4 py-2 rounded-full text-sm font-medium
                border transition-all duration-200 whitespace-nowrap
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-[0_2px_12px_rgba(37,99,235,0.35)] scale-[1.04]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm hover:scale-[1.02] hover:bg-blue-50/60"
                }
              `}
            >
              {/* Active pill glow */}
              {isActive && (
                <span className="absolute inset-0 rounded-full bg-blue-400/20 blur-sm -z-10" />
              )}
              {tab}
            </button>
          );
        })}
      </div>

      {/* Right gradient mask */}
      <div
        className={`absolute right-9 top-0 h-full w-8 bg-gradient-to-l from-[#F0F4FA] to-transparent z-10 pointer-events-none transition-opacity duration-200 ${canScrollRight ? "opacity-100" : "opacity-0"}`}
      />

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className={`
          shrink-0 z-10 flex items-center justify-center w-8 h-8 rounded-full
          bg-white border border-slate-200 shadow-sm text-slate-500
          hover:border-blue-400 hover:text-blue-600 hover:shadow-md
          transition-all duration-200
          ${canScrollRight ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}