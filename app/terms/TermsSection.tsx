// components/terms/TermsSection.tsx
import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TermsSection } from "./termsData";

interface TermsSectionProps {
  section: TermsSection;
  index: number;
}

export function TermsSectionBlock({ section, index }: TermsSectionProps) {
  return (
    <section
      id={section.id}
      className="scroll-mt-24 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 transition-shadow hover:shadow-md"
    >
      {/* Section header */}
      <div className="mb-5 flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm">
          {String(index + 1).padStart(2, "0")}
        </div>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl leading-tight pt-1">
          {section.title}
        </h2>
      </div>

      {/* Section content */}
      <div className="space-y-4 pl-0 sm:pl-14">
        {section.content.map((block, i) => {
          if (block.type === "paragraph") {
            return (
              <p key={i} className="text-gray-600 leading-relaxed">
                {block.text}
              </p>
            );
          }

          if (block.type === "subheading") {
            return (
              <p key={i} className="font-semibold text-gray-800 mt-5">
                {block.text}
              </p>
            );
          }

          if (block.type === "list") {
            return (
              <ul key={i} className="space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            );
          }

          if (block.type === "note") {
            return (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <p className="text-sm text-amber-800 leading-relaxed">{block.text}</p>
              </div>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
}
