import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Plus } from "lucide-react";
import Image from "next/image";

const trips = [
  {
    category: "Romantic Getaway",
    categoryColor: "bg-pink-100 text-pink-600",
    title: "Paris, France",
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=80&q=80",
    dates: "5 – 10 July",
    participants: 9,
  },
  {
    category: "Cultural Exploration",
    categoryColor: "bg-orange-100 text-orange-600",
    title: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=80&q=80",
    dates: "12 – 19 July",
    participants: 17,
  },
  {
    category: "Adventure Tour",
    categoryColor: "bg-green-100 text-green-600",
    title: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=80&q=80",
    dates: "15 – 24 July",
    participants: 12,
  },
  {
    category: "City Highlights",
    categoryColor: "bg-blue-100 text-blue-600",
    title: "New York, USA",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=80&q=80",
    dates: "20 – 25 July",
    participants: 8,
  },
];

export function UpcomingTrips() {
  return (
    <Card className="border border-gray-100 shadow-none rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-5">
        <CardTitle className="text-sm font-semibold text-gray-800">Upcoming Trips</CardTitle>
        <button className="w-7 h-7 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="flex flex-col gap-2">
          {trips.map((trip, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {/* Image */}
              <div className="w-14 h-12 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={trip.image}
                  alt={trip.title}
                    width={600}
                height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <span
                  className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${trip.categoryColor}`}
                >
                  {trip.category}
                </span>
                <p className="text-xs font-semibold text-gray-800 mt-0.5 truncate">
                  {trip.title}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex items-center gap-0.5 text-gray-400">
                    <Users className="w-3 h-3" />
                    <span className="text-[10px]">+{trip.participants}</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-gray-400">
                    <Calendar className="w-3 h-3" />
                    <span className="text-[10px]">{trip.dates}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
