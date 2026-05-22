import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const packages = [
  {
    id: 1,
    category: "Cultural Exploration",
    title: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1540982568487-4c51d3c78b5a?w=400&q=80",
    categoryColor: "bg-orange-100 text-orange-600",
  },
  {
    id: 2,
    category: "Venice Dreams",
    title: "Venice, Italy",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&q=80",
    categoryColor: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    category: "Safari Adventure",
    title: "Serengeti, Tanzania",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80",
    categoryColor: "bg-green-100 text-green-600",
  },
];

export function TravelPackages() {
  return (
    <Card className="border border-gray-100 shadow-none rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between pb-3 pt-4 px-5">
        <CardTitle className="text-sm font-semibold text-gray-800">
          Travel Packages
        </CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">Sort by:</span>
          <Button
            variant="outline"
            size="sm"
            className="h-7 px-2 text-xs border-gray-200 rounded-lg gap-1 text-gray-600"
          >
            Latest <ChevronDown className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs text-blue-500 hover:text-blue-600 hover:bg-blue-50"
          >
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div className="grid grid-cols-3 gap-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer"
            >
              {/* Background image */}
              <Image
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {/* Category badge */}
              <div className="absolute top-2 left-2">
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${pkg.categoryColor}`}
                >
                  {pkg.category}
                </span>
              </div>
              {/* Title */}
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-semibold">{pkg.title}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
