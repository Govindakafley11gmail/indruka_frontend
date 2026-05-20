/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState, useMemo, type RefObject } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/custom-components/navbar/navbar";
import TourPackageCard from "@/custom-components/body/tour-package-header";
import Footer from "@/custom-components/footer/footer";
import TourCollage from "./image-collage";
import TourCards from "./tour-card";
import CardDetailsPage from "./card-details";
import { FilterContent } from "./components/filter-content";
import { FilterDrawer } from "./components/filter-drawer";
import { MobileFilterBar } from "./components/mobile-filter-bar";
import { useTours } from "./hooks/use-tours";
import { useWishlist } from "./hooks/use-wishlist";
import { useDrawer } from "./hooks/use-drawer";
import { Pagination } from "./components/pagenationProps";
import {  indiaTours, SPECIALITIES_BY_COUNTRY } from "./data";
import { bhutanTours } from "./bhutan";

const ITEMS_PER_PAGE = 10;

export default function SacredYatra() {
  const tours = useTours();
  const { wishlist, toggle: onWishlistToggle } = useWishlist();
  const drawer = useDrawer();
  const [activePage, setActivePage] = useState(1);
  const allTours = useMemo(() => {
    return [
      ...indiaTours.map((t) => ({
        ...t,
        country: "India",
      })),
      ...bhutanTours.map((t) => ({
        ...t,
        country: "Bhutan",
      })),
    ];
  }, []);

  const collageTours = useMemo(() => {
    return allTours
      .filter((t) =>
        tours.checkedCountry.size === 0
          ? true
          : [...tours.checkedCountry].some(
              (c) => t.country.toLowerCase() === c.toLowerCase(),
            ),
      )
      .sort((a, b) => a.id - b.id)
      .slice(0, 7);
  }, [tours.checkedCountry]);

  const activeSpecialities = useMemo(() => {
    // Country selected
    if (tours.checkedCountry.size > 0) {
      const merged = new Set<string>();

      tours.checkedCountry.forEach((country) => {
        const key = Object.keys(SPECIALITIES_BY_COUNTRY).find(
          (k) => k.toLowerCase() === country.toLowerCase(),
        );

        if (key) {
          SPECIALITIES_BY_COUNTRY[key].forEach((s) => merged.add(s));
        }
      });

      return [...merged];
    }

    // Place selected
    if (tours.checkedPlace.size > 0) {
      const merged = new Set<string>();

      allTours
        .filter((tour) =>
          [...tours.checkedPlace].some((p) =>
            (tour.place ?? "").toLowerCase().includes(p.toLowerCase()),
          ),
        )
        .forEach((tour) => {
          const key = Object.keys(SPECIALITIES_BY_COUNTRY).find(
            (k) => k.toLowerCase() === tour.country.toLowerCase(),
          );

          if (key) {
            SPECIALITIES_BY_COUNTRY[key].forEach((s) => merged.add(s));
          }
        });

      return [...merged];
    }

    return [];
  }, [tours.checkedCountry, tours.checkedPlace]);

  useEffect(() => {
    setActivePage(1);
  }, [
    tours.budget,
    tours.search,
    tours.checkedSpec,
    tours.checkedDur,
    tours.checkedDest,
    tours.checkedMode,
    tours.checkedCountry,
    tours.checkedPlace,
    tours.sortBy,
  ]);

  const totalPages = Math.ceil(tours.filtered.length / ITEMS_PER_PAGE);

  const paginatedTours = tours.filtered.slice(
    (activePage - 1) * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE,
  );

  const filterProps = {
    budget: tours.budget,
    setBudget: tours.setBudget,
    checkedSpec: tours.checkedSpec,
    checkedDur: tours.checkedDur,
    checkedDest: tours.checkedDest,
    checkedMode: tours.checkedMode,
    checkedCountry: tours.checkedCountry,
    activeSpecialities,
    toggle: tours.toggleSet,
    setCheckedSpec: tours.setCheckedSpec,
    setCheckedDur: tours.setCheckedDur,
    setCheckedDest: tours.setCheckedDest,
    setCheckedMode: tours.setCheckedMode,
    setCheckedCountry: tours.setCheckedCountry,
  };

  return (
    <div className="font-sans bg-[#F0F4FA] overflow-x-hidden">
      <Navbar isActive={false} />

      <TourPackageCard
        checkedSpec={tours.checkedSpec}
        onSpecClick={(spec) => tours.toggleSet(tours.setCheckedSpec, spec)}
        specialities={activeSpecialities}
      />

      <MobileFilterBar
        activeFilterCount={tours.activeFilterCount}
        sortBy={tours.sortBy}
        onSortChange={tours.setSortBy}
        onOpenDrawer={() => drawer.setDrawerOpen(true)}
      />

      <FilterDrawer
        open={drawer.drawerOpen}
        onClose={() => drawer.setDrawerOpen(false)}
        filteredCount={tours.filtered.length}
        isMdScreen={drawer.isMdScreen}
        drawerPos={drawer.drawerPos}
        isDragging={drawer.isDragging}
        drawerRef={drawer.drawerRef as RefObject<HTMLDivElement>}
        onDragStart={drawer.handleDragStart}
        onClearAll={tours.clearAll}
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
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {(activePage - 1) * ITEMS_PER_PAGE + 1}–
                {Math.min(activePage * ITEMS_PER_PAGE, tours.filtered.length)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-700">
                {tours.filtered.length}
              </span>{" "}
              tours
            </p>

            <div className="flex gap-2 flex-wrap">
              {[...tours.checkedMode].map((tag) => (
                <Badge
                  key={tag}
                  onClick={() => tours.toggleSet(tours.setCheckedMode, tag)}
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
            formatPrice={(price: number | string, country: string) => {
              return country.toLowerCase() === "bhutan"
                ? `Nu. ${price.toLocaleString()}`
                : `₹ ${price.toLocaleString()}`;
            }}
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
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>

      <TourCollage tours={collageTours} />

      <TourCards tours={tours.filtered} />

      <Footer />
    </div>
  );
}
