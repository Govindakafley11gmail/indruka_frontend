"use client";

import { ReactNode } from "react";
import { X, SlidersHorizontal } from "lucide-react";

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  isDragging?: boolean;
  children: ReactNode;
}

export function FilterMainDrawer({
  open,
  onClose,
  isDragging,
  children,
}: FilterDrawerProps) {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed z-[999] flex flex-col left-[18%] right-0 top-0 bottom-0 h-full bg-white shadow-[-12px_0_40px_rgba(0,0,0,0.16)] animate-[slideInRight_0.28s_cubic-bezier(0.22,1,0.36,1)] md:hidden overflow-hidden"
      >
        {/* HEADER */}
        <div className="relative flex-shrink-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 px-5 pt-5 pb-9">
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-6 w-16 h-16 rounded-full bg-white/5 translate-y-1/2 pointer-events-none" />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <SlidersHorizontal className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm tracking-wide leading-tight">
                  Filters
                </p>
                <p className="text-blue-200 text-[10px] font-medium tracking-wide mt-0.5">
                  Narrow your search
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 active:scale-95 transition-all duration-150"
              aria-label="Close filters"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* WAVE DIVIDER */}
        <div className="flex-shrink-0 -mt-3">
          <svg
            viewBox="0 0 375 24"
            fill="none"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0 Q90 24 187.5 12 Q285 0 375 20 L375 24 L0 24 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto -mt-1 px-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {children}
        </div>
      </div>
    </>
  );
}