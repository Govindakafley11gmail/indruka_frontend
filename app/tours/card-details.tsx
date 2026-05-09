import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
export interface Tour {
  id: number;
  title: string;
  type: string;
  badge: "Bestseller" | "Trek" | "Helicopter" | "Popular" | string;
  img: string;
  duration: string;
  rating: number;
  reviews: number;
  destinations: string[];
  amenities: string[];
  price: number;
  popular?: boolean;
}
interface CardDetailsPageProps {
  tours: Tour[];
wishlist: Set<number>;          // ← was Set<string>
  onWishlistToggle: (id: number) => void;  // ← was string
  formatPrice?: (price: number) => string;
}

const defaultFormat = (price: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(price);

const BADGE_COLORS: Record<string, string> = {
  Bestseller: "bg-amber-600",
  Trek: "bg-emerald-600",
  Helicopter: "bg-sky-600",
  Popular: "bg-blue-600",
};

export default function CardDetailsPage({
  tours,
  wishlist,
  onWishlistToggle,
  formatPrice = defaultFormat,
}: CardDetailsPageProps) {
  return (
    <div className="flex flex-col gap-[1.1rem]">
      {tours.length === 0 && (
        <Card className="rounded-2xl p-10 text-center">
          <p className="text-slate-400 text-[15px]">
            No tours match your filters. Try adjusting your budget or filters.
          </p>
        </Card>
      )}

      {tours.map((tour, i) => (
        <Card
          key={tour.id}
          className={`p-0 m-0 rounded-2xl overflow-hidden cursor-pointer shadow-[0_2px_12px_rgba(29,78,216,0.06)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(29,78,216,0.13)] grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] ${
            tour.popular ? "border-[1.5px] border-blue-200" : "border border-slate-200"
          }`}
          style={{ animation: `fadeUp 0.35s ease both`, animationDelay: `${i * 60}ms` }}
        >
          {/* IMAGE */}
          <div className="relative overflow-hidden h-[200px] md:h-full md:min-h-[200px] group">
            <img
              src={tour.img}
              alt={tour.title}
              className="w-full h-full object-cover block transition-transform duration-[400ms] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,37,64,0.65)] to-transparent" />

            <div className="absolute top-2.5 left-2.5 flex gap-1.5">
              <Badge
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold text-white ${
                  BADGE_COLORS[tour.badge] ?? "bg-orange-600"
                }`}
              >
                {tour.badge}
              </Badge>
            </div>

            <div className="absolute bottom-2.5 left-2.5 bg-[rgba(10,37,64,0.82)] rounded-full px-3 py-1 text-[11.5px] text-white font-medium">
              {tour.duration}
            </div>

            <button
              onClick={() => onWishlistToggle(tour.id)}
              className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white border-none cursor-pointer text-base flex items-center justify-center transition-transform duration-200 ${
                wishlist.has(tour.id) ? "text-red-500" : "text-slate-400"
              }`}
            >
              {wishlist.has(tour.id) ? "♥" : "♡"}
            </button>
          </div>

          {/* CONTENT */}
          <CardContent className="p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-[11px] uppercase tracking-[1.5px] text-blue-600 font-bold">
                {tour.type}
              </span>
              <span className="w-[3px] h-[3px] rounded-full bg-slate-300" />
              <span className="text-xs text-amber-400 font-semibold">★ {tour.rating}</span>
              <span className="text-xs text-slate-400">({tour.reviews})</span>
            </div>

            <h3 className="text-sm tracking-[0.5px] text-black font-bold mb-3 leading-[1.4]">
              {tour.title}
            </h3>

            <div className="flex items-center gap-1.5 text-[12.5px] text-slate-500 mb-3.5 flex-wrap">
              {tour.destinations.map((d, idx) => (
                <span key={d} className="flex items-center gap-1">
                  {idx === 0 && <span>📍</span>}
                  <span className="font-medium text-slate-700">{d}</span>
                  {idx < tour.destinations.length - 1 && (
                    <span className="text-slate-300 text-[10px]">→</span>
                  )}
                </span>
              ))}
            </div>

            <div className="flex gap-1.5 flex-wrap mb-auto">
              {tour.amenities.map((a) => (
                <span
                  key={a}
                  className="flex items-center gap-[5px] text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-[8px] font-medium border border-slate-200"
                >
                  <span className="text-[13px]">✦</span> {a}
                </span>
              ))}
            </div>

            <Separator className="my-4 bg-blue-50" />

            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <p className="text-[10px] uppercase tracking-[1.5px] text-slate-400 font-semibold mb-0.5">
                  Starting from
                </p>
                <p className="text-xl font-black text-[#1A4BB5] leading-none">
                  {formatPrice(tour.price)}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">per person · twin sharing</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant="outline"
                  className="rounded-[9px] text-[13px] font-semibold border-[1.5px] border-blue-200 text-blue-700 bg-white px-3.5 py-2 h-auto"
                >
                  Send Query
                </Button>
                <Link href='/view-details'>
                  <Button className="rounded-[9px] text-[13px] font-semibold bg-gradient-to-br from-[#1A5BB8] to-[#2477D9] text-white border-none px-4 py-2 h-auto">
                    View Details →
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}