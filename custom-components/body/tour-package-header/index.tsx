import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SortingTabs from "@/app/tours/sortingtabs";
// ❌ remove: import { SPECIALITIES } from "@/app/tours/data";

const stats = [
  { value: "4.8 / 5", label: "Google Rating" },
  { value: "10,000+", label: "Pilgrims Served" },
  { value: "Ministry", label: "Tourism Approved" },
  { value: "15+ Years", label: "Experience" },
  { value: "ISO Certified", label: "Operator" },
];

export default function TourPackageCard({
  rating,
  checkedSpec,
  onSpecClick,
  specialities = [],          // ← receive as prop, default to empty
}: {
  rating?: boolean;
  checkedSpec?: Set<string>;
  onSpecClick?: (spec: string) => void;
  specialities?: string[];    // ← new prop
}) {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-4 p-4 font-sans">
      <div className="text-center mb-14 max-w-2xl mx-auto">
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

      {/* Only render tabs when there are specialities to show */}
      {specialities.length > 0 && (
        <div className="flex">
          <SortingTabs
            tabs={specialities}           // ← dynamic, not static
            checkedSpec={checkedSpec}
            onSpecClick={onSpecClick}
          />
        </div>
      )}

      {rating && (
        <Card className="border-2 border-blue-200 bg-blue-50 rounded-2xl overflow-hidden shadow-sm">
          <CardContent className="p-0">
            <div className="grid grid-cols-5">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex">
                  <div className="flex flex-col items-center justify-center py-4 px-3 text-center flex-1 gap-1">
                    <span className="text-sm font-semibold text-blue-700 leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs text-blue-500 leading-snug">
                      {stat.label}
                    </span>
                  </div>
                  {index < stats.length - 1 && (
                    <Separator orientation="vertical" className="h-auto bg-blue-200" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}