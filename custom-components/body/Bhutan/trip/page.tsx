/* eslint-disable react-hooks/static-components */
"use client";
import { useState, type SetStateAction } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/custom-components/navbar/navbar";
import TourPackageCard from "@/custom-components/body/tour-package-header";
import Footer from "@/custom-components/footer/footer";
import Link from "next/link";

const tours = [
  {
    id: 1,
    title: "Badrinath Kedarnath Yatra By Helicopter",
    type: "Customized Holiday",
    duration: "Same Day (1 Day)",
    durationTag: "1 Day",
    startEnd: "Dehradun → Dehradun",
    destinations: ["Dehradun", "Badrinath", "Kedarnath"],
    amenities: ["Hotel", "Meals", "Helicopter", "Sightseeing"],
    price: 135000,
    rating: 4.9,
    reviews: 186,
    badge: "Same Day",
    badgeColor: "bg-orange-500",
    mode: "Helicopter",
    img: "https://images.unsplash.com/photo-1545552987-720aa18145ca?w=640&q=80",
    popular: true,
  },
  {
    id: 2,
    title: "Badrinath Yatra Package from Haridwar",
    type: "Customized Holiday",
    duration: "4 Days / 3 Nights",
    durationTag: "4 Days",
    startEnd: "Haridwar → Haridwar",
    destinations: ["Haridwar", "Pipalkoti", "Badrinath"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 18500,
    rating: 4.7,
    reviews: 94,
    badge: "4 Days",
    badgeColor: "bg-teal-600",
    mode: "Road",
    img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=640&q=80",
    popular: false,
  },
  {
    id: 3,
    title: "Satopanth Swargarohini Trek Yatra",
    type: "Adventure Trek",
    duration: "9 Days / 8 Nights",
    durationTag: "9 Days",
    startEnd: "Haridwar → Haridwar",
    destinations: ["Badrinath", "Satopanth", "Swargarohin"],
    amenities: ["Camping", "Meals", "Transfers", "Sightseeing"],
    price: 24900,
    rating: 4.8,
    reviews: 47,
    badge: "Trek",
    badgeColor: "bg-emerald-600",
    mode: "Trek",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&q=80",
    popular: false,
  },
  {
    id: 4,
    title: "Kedarnath Yatra Package from Haridwar",
    type: "Customized Holiday",
    duration: "3 Days / 2 Nights",
    durationTag: "3 Days",
    startEnd: "Haridwar → Haridwar",
    destinations: ["Haridwar", "Guptkashi", "Kedarnath"],
    amenities: ["Hotel", "Meals", "Transfers", "Pony/Palki"],
    price: 12500,
    rating: 4.6,
    reviews: 213,
    badge: "Popular",
    badgeColor: "bg-blue-600",
    mode: "Road",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=640&q=80",
    popular: true,
  },
  {
    id: 5,
    title: "Char Dham Yatra Package from Haridwar",
    type: "Customized Holiday",
    duration: "11 Days / 10 Nights",
    durationTag: "11 Days",
    startEnd: "Haridwar → Haridwar",
    destinations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    amenities: ["Hotel", "Meals", "Transfers", "Sightseeing"],
    price: 38000,
    rating: 4.9,
    reviews: 312,
    badge: "Bestseller",
    badgeColor: "bg-amber-500",
    mode: "Road",
    img: "https://images.unsplash.com/photo-1585016495481-91e12a4a4a2a?w=640&q=80",
    popular: true,
  },
  {
    id: 6,
    title: "Do Dham Yatra by Helicopter (Kedarnath & Badrinath)",
    type: "Customized Holiday",
    duration: "2 Days / 1 Night",
    durationTag: "2 Days",
    startEnd: "Dehradun → Dehradun",
    destinations: ["Dehradun", "Kedarnath", "Badrinath"],
    amenities: ["Hotel", "Meals", "Helicopter", "Sightseeing"],
    price: 72000,
    rating: 4.8,
    reviews: 128,
    badge: "Helicopter",
    badgeColor: "bg-sky-600",
    mode: "Helicopter",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=640&q=80",
    popular: false,
  },
];

const SPECIALITIES = [
  "Customized Holidays",
  "Family",
  "Women's Special",
  "Honeymoon Special",
  "Seniors' Special",
  "Road Trips",
];
const DURATIONS = ["1 Day", "2–3 Days", "4–5 Days", "6–8 Days", "9+ Days"];
const DESTINATIONS = [
  "Delhi",
  "Dehradun",
  "Haridwar",
  "Kedarnath",
  "Badrinath",
  "Gangotri",
  "Yamunotri",
  "Chardham",
];
const MODES = ["Helicopter", "Road", "Trek"];

export default function SacredYatra() {
  const [budget, setBudget] = useState([150000]);
  const [wishlist, setWishlist] = useState(new Set());
  const [sortBy, setSortBy] = useState("recommended");
  const [search, setSearch] = useState("");
  const [checkedSpec, setCheckedSpec] = useState(new Set<string>());
  const [checkedDur, setCheckedDur] = useState(new Set<string>());
  const [checkedDest, setCheckedDest] = useState(new Set<string>());
  const [checkedMode, setCheckedMode] = useState(new Set<string>());
  const [activePage, setActivePage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleSet = (
    setter: (value: SetStateAction<Set<string>>) => void,
    key: string,
  ) => {
    setter((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const clearAll = () => {
    setCheckedSpec(new Set());
    setCheckedDur(new Set());
    setCheckedDest(new Set());
    setCheckedMode(new Set());
    setBudget([150000]);
    setSearch("");
  };

  const filtered = tours
    .filter((t) => t.price <= budget[0])
    .filter(
      (t) => !search || t.title.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((t) => checkedMode.size === 0 || checkedMode.has(t.mode))
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  const fmt = (n: number) => "₹" + n.toLocaleString("en-IN");

  const FilterContent = () => (
    <>
      {/* Budget */}
      <div className="p-4 px-5 border-b border-blue-50">
        <p className="text-[11px] uppercase tracking-[2px] text-slate-500 font-bold mb-3.5">
          💰 Budget per person
        </p>
        <Slider
          value={budget}
          onValueChange={setBudget}
          min={5000}
          max={200000}
          step={1000}
          className="mb-2"
        />
        <div className="flex justify-between text-xs">
          <span className="text-slate-400">₹5,000</span>
          <span className="text-[#1A5BB8] font-bold">{fmt(budget[0])}</span>
          <span className="text-slate-400">₹2,00,000+</span>
        </div>
      </div>

      {/* Travel Mode */}
      <div className="p-4 px-5 border-b border-blue-50">
        <p className="text-[11px] uppercase tracking-[2px] text-slate-500 font-bold mb-3">
          ✈️ Travel Mode
        </p>
        {MODES.map((m) => (
          <label
            key={m}
            className="flex items-center gap-2.5 py-[5px] cursor-pointer"
          >
            <Checkbox
              checked={checkedMode.has(m)}
              onCheckedChange={() => toggleSet(setCheckedMode, m)}
            />
            <span
              className={`text-[13.5px] ${
                checkedMode.has(m)
                  ? "text-blue-700 font-semibold"
                  : "text-slate-600 font-normal"
              }`}
            >
              {m}
            </span>
          </label>
        ))}
      </div>

      {/* Speciality */}
      <div className="p-4 px-5 border-b border-blue-50">
        <p className="text-[11px] uppercase tracking-[2px] text-slate-500 font-bold mb-3">
          ⭐ Speciality
        </p>
        {SPECIALITIES.map((s) => (
          <label
            key={s}
            className="flex items-center gap-2.5 py-[5px] cursor-pointer"
          >
            <Checkbox
              checked={checkedSpec.has(s)}
              onCheckedChange={() => toggleSet(setCheckedSpec, s)}
            />
            <span
              className={`text-[13.5px] ${
                checkedSpec.has(s)
                  ? "text-blue-700 font-semibold"
                  : "text-slate-600 font-normal"
              }`}
            >
              {s}
            </span>
          </label>
        ))}
      </div>

      {/* Duration */}
      <div className="p-4 px-5 border-b border-blue-50">
        <p className="text-[11px] uppercase tracking-[2px] text-slate-500 font-bold mb-3">
          📅 Duration
        </p>
        {DURATIONS.map((d) => (
          <label
            key={d}
            className="flex items-center gap-2.5 py-[5px] cursor-pointer"
          >
            <Checkbox
              checked={checkedDur.has(d)}
              onCheckedChange={() => toggleSet(setCheckedDur, d)}
            />
            <span
              className={`text-[13.5px] ${
                checkedDur.has(d)
                  ? "text-blue-700 font-semibold"
                  : "text-slate-600 font-normal"
              }`}
            >
              {d}
            </span>
          </label>
        ))}
      </div>

      {/* Destinations */}
      <div className="p-4 px-5">
        <p className="text-[11px] uppercase tracking-[2px] text-slate-500 font-bold mb-3">
          📍 Destinations
        </p>
        {DESTINATIONS.map((d) => (
          <label
            key={d}
            className="flex items-center gap-2.5 py-[5px] cursor-pointer"
          >
            <Checkbox
              checked={checkedDest.has(d)}
              onCheckedChange={() => toggleSet(setCheckedDest, d)}
            />
            <span
              className={`text-[13.5px] ${
                checkedDest.has(d)
                  ? "text-blue-700 font-semibold"
                  : "text-slate-600 font-normal"
              }`}
            >
              {d}
            </span>
          </label>
        ))}
      </div>
    </>
  );

  return (
    <div className="font-sans bg-[#F0F4FA] min-h-screen">
      <Navbar isActive={false} />
      <div>
        <TourPackageCard />
      </div>

      {/* ── MOBILE FILTER BUTTON BAR ── */}
      <div className="flex md:hidden sticky top-0 z-40 bg-white border-b border-slate-200 py-2.5 px-4 items-center gap-2.5">
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex items-center gap-1.5 bg-gradient-to-br from-[#0f2d5a] to-[#1d5299] text-white border-none rounded-[9px] px-4 py-2 text-[13px] font-semibold cursor-pointer flex-1 justify-center"
        >
          <span className="text-[15px]">🔍</span> Filters
          {checkedMode.size +
            checkedSpec.size +
            checkedDur.size +
            checkedDest.size >
            0 && (
            <span className="bg-red-500 text-white rounded-full w-[18px] h-[18px] text-[11px] flex items-center justify-center font-bold">
              {checkedMode.size +
                checkedSpec.size +
                checkedDur.size +
                checkedDest.size}
            </span>
          )}
        </button>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="flex-1 border border-blue-100 rounded-[9px] px-2.5 py-2 text-[13px] text-slate-700 bg-white font-medium outline-none"
        >
          <option value="recommended">Recommended</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* ── MOBILE DRAWER OVERLAY ── */}
      {drawerOpen && (
        <div className="flex md:hidden fixed inset-0 z-[999]">
          {/* Backdrop */}
          <div
            onClick={() => setDrawerOpen(false)}
            className="flex-1 bg-black/45 backdrop-blur-sm"
          />
          {/* Drawer Panel */}
          <div className="w-[82%] max-w-[340px] bg-white h-full overflow-y-auto flex flex-col shadow-[-8px_0_32px_rgba(0,0,0,0.18)] animate-[slideInRight_0.25s_ease]">
            {/* Drawer Header */}
            <div className="flex md:hidden bg-gradient-to-br from-[#0f2d5a] to-[#1d5299] p-4 px-5 items-center justify-between sticky top-0 z-10">
              <span className="text-white text-sm font-bold tracking-[1px]">
                🔍 Filter Tours
              </span>
              <div className="flex gap-3 items-center">
                <button
                  onClick={clearAll}
                  className="bg-transparent border-none text-blue-300 text-xs font-semibold cursor-pointer"
                >
                  Clear all
                </button>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="bg-white/15 border-none text-white w-7 h-7 rounded-full cursor-pointer text-base flex items-center justify-center"
                >
                  ×
                </button>
              </div>
            </div>

            <FilterContent />

            {/* Apply Button */}
            <div className="p-4 px-5 sticky bottom-0 bg-white border-t border-blue-50">
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-full bg-gradient-to-br from-[#1A5BB8] to-[#2477D9] text-white border-none rounded-[10px] py-3 text-sm font-bold cursor-pointer"
              >
                Show {filtered.length} Tours
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── BODY ── */}
      <div className="max-w-[1260px] mx-auto px-4 py-7 grid grid-cols-1 md:grid-cols-[230px_1fr] lg:grid-cols-[270px_1fr] gap-6 items-start">
        {/* ── SIDEBAR (desktop only) ── */}
        <aside className="hidden md:block sticky top-20">
          <Card className="rounded-2xl border border-blue-100 overflow-hidden shadow-[0_4px_24px_rgba(29,78,216,0.07)] p-0 m-0">
            <CardHeader className="hidden bg-gradient-to-br from-[#0f2d5a] to-[#1d5299] p-4 px-5">
              <div className="flex items-center justify-between">
                <CardTitle className="text-white text-[13px] font-bold tracking-[1px] uppercase">
                  🔍 Filter Tours
                </CardTitle>
                <button
                  onClick={clearAll}
                  className="bg-transparent border-none text-blue-300 text-xs font-semibold cursor-pointer"
                >
                  Clear all
                </button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <FilterContent />
            </CardContent>
          </Card>
        </aside>

        {/* ── RESULTS ── */}
        <main>
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <strong className="text-slate-900">{filtered.length} tours</strong>{" "}
              matching your filters
            </p>
            <div className="flex gap-2 flex-wrap">
              {[...checkedMode].map((tag) => (
                <Badge
                  key={tag}
                  onClick={() => toggleSet(setCheckedMode, tag)}
                  className="bg-blue-50 text-blue-700 border border-blue-200 text-xs cursor-pointer px-2.5 py-1 rounded-full"
                >
                  {tag} ×
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[1.1rem]">
            {filtered.length === 0 && (
              <Card className="rounded-2xl p-10 text-center">
                <p className="text-slate-400 text-[15px]">
                  No tours match your filters. Try adjusting your budget or
                  filters.
                </p>
              </Card>
            )}

            {filtered.map((tour, i) => (
              <Card
                key={tour.id}
                className={`p-0 m-0 rounded-2xl overflow-hidden cursor-pointer shadow-[0_2px_12px_rgba(29,78,216,0.06)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(29,78,216,0.13)] grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] ${
                  tour.popular
                    ? "border-[1.5px] border-blue-200"
                    : "border border-slate-200"
                }`}
                style={{
                  animation: `fadeUp 0.35s ease both`,
                  animationDelay: `${i * 60}ms`,
                }}
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
                        tour.badge === "Bestseller"
                          ? "bg-amber-600"
                          : tour.badge === "Trek"
                            ? "bg-emerald-600"
                            : tour.badge === "Helicopter"
                              ? "bg-sky-600"
                              : tour.badge === "Popular"
                                ? "bg-blue-600"
                                : "bg-orange-600"
                      }`}
                    >
                      {tour.badge}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 bg-[rgba(10,37,64,0.82)] rounded-full px-3 py-1 text-[11.5px] text-white font-medium">
                    {tour.duration}
                  </div>
                  <button
                    onClick={() =>
                      setWishlist((prev: Set<unknown>) => {
                        const s = new Set(prev);
                        s.has(tour.id) ? s.delete(tour.id) : s.add(tour.id);
                        return s;
                      })
                    }
                    className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white border-none cursor-pointer text-base flex items-center justify-center transition-transform duration-200 ${
                      wishlist.has(tour.id) ? "text-red-500" : "text-slate-400"
                    }`}
                  >
                    {wishlist.has(tour.id) ? "♥" : "♡"}
                  </button>
                </div>

                {/* BODY */}
                <CardContent className="p-5 flex flex-col">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-[11px] uppercase tracking-[1.5px] text-blue-600 font-bold">
                      {tour.type}
                    </span>
                    <span className="w-[3px] h-[3px] rounded-full bg-slate-300" />
                    <span className="text-xs text-amber-400 font-semibold">
                      ★ {tour.rating}
                    </span>
                    <span className="text-xs text-slate-400">
                      ({tour.reviews})
                    </span>
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
                        {fmt(tour.price)}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        per person · twin sharing
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Button
                        variant="outline"
                        className="rounded-[9px] text-[13px] font-semibold border-[1.5px] border-blue-200 text-blue-700 bg-white px-3.5 py-2 h-auto"
                      >
                       <Link href='/support'>Send Query</Link> 
                      </Button>
                      <Link href="/view-details">
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

          {/* PAGINATION */}
          <div className="flex justify-center gap-1.5 mt-8 pb-10">
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                onClick={() => setActivePage(p)}
                className={`w-[38px] h-[38px] rounded-[9px] border font-semibold text-sm cursor-pointer transition-all duration-150 ${
                  activePage === p
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 bg-white text-slate-600"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </main>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <Footer />
    </div>
  );
}