/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
// app/tours/[country]/CountryPageClient.tsx
"use client";

import { useMemo, useState, useEffect, type RefObject } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/custom-components/navbar/navbar";
import TourPackageCard from "@/custom-components/body/tour-package-header";
import Footer from "@/custom-components/footer/footer";
import TourCollage from "../image-collage";
import TourCards from "../tour-card";
import CardDetailsPage from "../card-details";
import { FilterContent } from "../components/filter-content";
import { FilterDrawer } from "../components/filter-drawer";
import { MobileFilterBar } from "../components/mobile-filter-bar";
import { Pagination } from "../components/pagenationProps";
import { SPECIALITIES_BY_COUNTRY, SPECIALITY_TO_TYPES } from "../data";
import { useWishlist } from "../hooks/use-wishlist";
import { useDrawer } from "../hooks/use-drawer";
import type { Tour } from "../tourtype";

const ITEMS_PER_PAGE = 10;

// type Tour = {
//   id: number;
//   country: string;
//   type?: string;
//   place?: string;
//   price: number;
//   mode?: string;
//   rating: number;
//   durationDays?: number;
//   durationTag?: string;
//   destinations?: string[];
//   [key: string]: any;
// };

function getDurationBucket(tour: { durationDays?: number; durationTag?: string }): string {
  let days = tour.durationDays;
  if (!days && tour.durationTag) {
    const match = tour.durationTag.match(/\d+/);
    days = match ? parseInt(match[0]) : 0;
  }
  if (!days) return "9+ Days";
  if (days === 1) return "1 Day";
  if (days <= 3) return "2–3 Days";
  if (days <= 5) return "4–5 Days";
  if (days <= 8) return "6–8 Days";
  return "9+ Days";
}

type Props = {
  country: string;
  initialTours: Tour[];
};

export default function CountryPageClient({ country, initialTours }: Props) {
  const { wishlist, toggle: onWishlistToggle } = useWishlist();
  const drawer = useDrawer();

  const [activePage, setActivePage] = useState(1);
  const [budget, setBudget] = useState([150000]);
  const [sortBy, setSortBy] = useState("recommended");
  const [search, setSearch] = useState("");
  const [checkedSpec, setCheckedSpec] = useState<Set<string>>(new Set());
  const [checkedDur, setCheckedDur] = useState(new Set<string>());
  const [checkedDest, setCheckedDest] = useState<Set<string>>(new Set());
  const [checkedMode, setCheckedMode] = useState(new Set<string>());
  const [checkedCountry, setCheckedCountry] = useState<Set<string>>(
    new Set([country]) // pre-select this country
  );
  const [checkedPlace, setCheckedPlace] = useState<Set<string>>(new Set());

  const toggleSet = (
    setter: React.Dispatch<React.SetStateAction<Set<string>>>,
    key: string
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
    setCheckedCountry(new Set([country])); // keep country locked
    setCheckedPlace(new Set());
    setBudget([150000]);
    setSearch("");
  };

  const activeSpecialities = useMemo(() => {
    const key = Object.keys(SPECIALITIES_BY_COUNTRY).find(
      (k) => k.toLowerCase() === country.toLowerCase()
    );
    return key ? SPECIALITIES_BY_COUNTRY[key] : [];
  }, [country]);

  const collageTours = useMemo(() => {
    return initialTours.sort((a, b) => a.id - b.id).slice(0, 7);
  }, [initialTours]);

  const filtered = useMemo(() => {
    return initialTours
      .filter((t) => t.price <= budget[0])
      .filter(
        (t) => !search || t.title?.toLowerCase().includes(search.toLowerCase())
      )
      .filter((t) => checkedMode.size === 0 || checkedMode.has(t.mode ?? ""))
      .filter((t) => {
        if (checkedSpec.size === 0) return true;
        return [...checkedSpec].some((spec) => {
          const matchTypes = SPECIALITY_TO_TYPES[spec] ?? [spec];
          return matchTypes.some((mt) =>
            t.type?.toLowerCase().includes(mt.toLowerCase())
          );
        });
      })
      .filter(
        (t) => checkedDur.size === 0 || checkedDur.has(getDurationBucket(t))
      )
      .filter(
        (t) =>
          checkedPlace.size === 0 ||
          [...checkedPlace].some((p) =>
            (t.place ?? "")
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(p.toLowerCase().replace(/\s+/g, ""))
          )
      )
      .filter(
        (t) =>
          checkedDest.size === 0 ||
          [...checkedDest].some((d) =>
            t.destinations?.some((dest: string) =>
              dest.toLowerCase().includes(d.toLowerCase())
            )
          )
      )
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        const getPlace = (x: any) => x.place ?? x.destinations?.[0] ?? "";
        if (sortBy === "place-az") return getPlace(a).localeCompare(getPlace(b));
        if (sortBy === "place-za") return getPlace(b).localeCompare(getPlace(a));
        return 0;
      });
  }, [
    initialTours,
    budget,
    search,
    checkedMode,
    checkedPlace,
    checkedDest,
    checkedSpec,
    checkedDur,
    sortBy,
  ]);

  // Reset to page 1 on any filter change
  useEffect(() => {
    setActivePage(1);
  }, [budget, search, checkedSpec, checkedDur, checkedDest, checkedMode, checkedPlace, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedTours = filtered.slice(
    (activePage - 1) * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE
  );

  const activeFilterCount =
    checkedMode.size +
    checkedSpec.size +
    checkedDur.size +
    checkedDest.size +
    checkedPlace.size;

  const filterProps = {
    budget,
    setBudget,
    checkedSpec,
    checkedDur,
    checkedDest,
    checkedMode,
    checkedCountry,
    activeSpecialities,
    toggle: toggleSet,
    setCheckedSpec,
    setCheckedDur,
    setCheckedDest,
    setCheckedMode,
    setCheckedCountry,
  };

  return (
    <div className="font-sans bg-[#F0F4FA] overflow-x-hidden">
      <Navbar isActive={false} />

      <TourPackageCard
        checkedSpec={checkedSpec}
        onSpecClick={(spec) => toggleSet(setCheckedSpec, spec)}
        specialities={activeSpecialities}
      />

      <MobileFilterBar
        activeFilterCount={activeFilterCount}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onOpenDrawer={() => drawer.setDrawerOpen(true)}
      />

      <FilterDrawer
        open={drawer.drawerOpen}
        onClose={() => drawer.setDrawerOpen(false)}
        filteredCount={filtered.length}
        isMdScreen={drawer.isMdScreen}
        drawerPos={drawer.drawerPos}
        isDragging={drawer.isDragging}
        drawerRef={drawer.drawerRef as RefObject<HTMLDivElement>}
        onDragStart={drawer.handleDragStart}
        onClearAll={clearAll}
        filterContentProps={filterProps}
      />

      <div className="max-w-315 mx-auto px-4 py-7 grid grid-cols-1 md:grid-cols-[230px_1fr] lg:grid-cols-[270px_1fr] gap-6 items-start">
        <aside className="hidden md:block sticky top-20">
          <Card className="rounded-2xl border border-blue-100 overflow-hidden shadow-[0_4px_24px_rgba(29,78,216,0.07)] p-0 m-0">
            <CardContent className="p-0">
              <FilterContent {...filterProps} />
            </CardContent>
          </Card>
        </aside>

        <main>
          {/* Country heading */}
          <div className="mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 bg-blue-100 rounded-full text-blue-700">
              All Tours
            </span>
            <h1 className="text-4xl font-bold mt-3 capitalize">
              {country} Tour Packages
            </h1>
          </div>

          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {filtered.length === 0
                  ? 0
                  : (activePage - 1) * ITEMS_PER_PAGE + 1}
                –{Math.min(activePage * ITEMS_PER_PAGE, filtered.length)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-700">
                {filtered.length}
              </span>{" "}
              tours
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

          <CardDetailsPage
            tours={paginatedTours}
            wishlist={wishlist}
            onWishlistToggle={onWishlistToggle}
            formatPrice={(price: number | string, country: string) =>
              country.toLowerCase() === "bhutan"
                ? `$. ${Number(price).toLocaleString()}`
                : `$ ${Number(price).toLocaleString()}`
            }
          />

          <Pagination
            activePage={activePage}
            totalPages={totalPages}
            onChange={setActivePage}
          />
        </main>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>

      <TourCollage tours={collageTours} />
      <TourCards tours={filtered} />
      <Footer />
    </div>
  );
}