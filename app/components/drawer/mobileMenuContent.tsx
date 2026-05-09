/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Phone, HeadphonesIcon, ChevronDown, X, LogIn, Globe, MapPin } from "lucide-react";
import { CORPORATE_MENU_Bhutan_ITEMS, CORPORATE_MENU_ITEMS } from "@/custom-components/navbar/constants";

type Props = {
  onClose?: () => void;
};

function AccordionMenu({ data, onClose }: { data: any[]; onClose?: () => void }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-1">
      {data.map((item, index) => {
        const isOpen = open === item.title;
        return (
          <div key={index} className="rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : item.title)}
              className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                isOpen
                  ? "bg-blue-600 text-white"
                  : "bg-blue-50/60 text-blue-900 hover:bg-blue-100"
              }`}
            >
              <div className="flex items-center gap-2">
                <MapPin className={`w-3.5 h-3.5 ${isOpen ? "text-blue-200" : "text-blue-400"}`} />
                <span>{item.title}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-blue-200" : "text-blue-400"
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-white border border-blue-100 border-t-0 rounded-b-xl px-3 py-2 flex flex-col">
                {item.subtitle.map((sub: any, i: number) => (
                  <button
                    key={i}
                    onClick={onClose}
                    className="text-left text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2.5 rounded-lg transition-all duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-300 group-hover:bg-blue-500 transition-colors flex-shrink-0" />
                    {sub.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function MobileMenuContent({ onClose }: Props) {
  return (
    <div className="flex flex-col h-full bg-white">
 


      <div className="flex-shrink-0 -mt-3">
        <svg viewBox="0 0 375 24" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 0 Q90 24 187.5 12 Q285 0 375 20 L375 24 L0 24 Z" fill="white" />
        </svg>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 -mt-1">

        {/* INDIA SECTION */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base leading-none">🇮🇳</span>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">India Tours</span>
            <div className="flex-1 h-px bg-blue-100" />
          </div>
          <AccordionMenu data={CORPORATE_MENU_ITEMS} onClose={onClose} />
        </div>

        {/* BHUTAN SECTION */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base leading-none">🇧🇹</span>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Bhutan Tours</span>
            <div className="flex-1 h-px bg-blue-100" />
          </div>
          <AccordionMenu data={CORPORATE_MENU_Bhutan_ITEMS} onClose={onClose} />
        </div>

        {/* UTILITY LINKS */}
        <div className="border-t border-blue-100 pt-4 mt-2 flex flex-col gap-1">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-150 group">
            <div className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
              <HeadphonesIcon className="w-4 h-4 text-blue-500" />
            </div>
            About Us
          </button>

          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-150 group">
            <div className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
              <Phone className="w-4 h-4 text-blue-500" />
            </div>
            Support
          </button>
        </div>
      </div>

      {/* BOTTOM CTA — sticky */}
      <div className="flex-shrink-0 px-4 py-4 border-t border-blue-100 bg-white">
        <button className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-sm py-3.5 flex items-center justify-center gap-2 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:from-blue-700 hover:to-blue-600 active:scale-[0.98] transition-all duration-200">
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
          <LogIn className="w-4 h-4" />
          Login / Signup
        </button>
        <p className="text-center text-[11px] text-slate-400 mt-2">
          Free to join • No credit card required
        </p>
      </div>
    </div>
  );
}