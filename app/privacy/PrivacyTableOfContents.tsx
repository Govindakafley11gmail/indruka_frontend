// components/privacy/PrivacyTableOfContents.tsx
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";
import { privacySections } from "./privacyData";

export function PrivacyTableOfContents() {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let current = "";
      for (const section of privacySections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile TOC toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700"
        >
          <span className="flex items-center gap-2">
            <List className="h-4 w-4" />
            Table of Contents
          </span>
          <span className="text-blue-400">{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && (
          <nav className="mt-2 rounded-xl border border-blue-100 bg-white p-4 shadow-md">
            <ol className="space-y-1">
              {privacySections.map((section, index) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleClick(section.id)}
                    className={cn(
                      "w-full text-left rounded-lg px-3 py-2 text-sm transition-colors",
                      activeId === section.id
                        ? "bg-blue-600 text-white font-medium"
                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                    )}
                  >
                    <span className="mr-2 text-xs font-bold opacity-50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>

      {/* Desktop sticky sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600">
            <List className="h-4 w-4" />
            Contents
          </h2>
          <nav>
            <ol className="space-y-1">
              {privacySections.map((section, index) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleClick(section.id)}
                    className={cn(
                      "group flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left text-sm transition-all duration-200",
                      activeId === section.id
                        ? "bg-blue-600 text-white font-medium shadow-sm"
                        : "text-gray-500 hover:bg-blue-50 hover:text-blue-700"
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 shrink-0 text-xs font-bold",
                        activeId === section.id ? "text-blue-200" : "text-gray-300 group-hover:text-blue-400"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-snug">{section.title}</span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </aside>
    </>
  );
}
