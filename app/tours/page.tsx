"use client";
import { useEffect, useState, type RefObject } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/custom-components/navbar/navbar";
import TourPackageCard from "@/custom-components/body/tour-package-header";
import Footer from "@/custom-components/footer/footer";
import { tourData } from "./data";
import TourCollage from "./image-collage";
import IndiaTourPackages from "./image-slider";
import TourCards from "./tour-card";
import CardDetailsPage from "./card-details";
import { FilterContent } from "./components/filter-content";
import { FilterDrawer } from "./components/filter-drawer";
import { MobileFilterBar } from "./components/mobile-filter-bar";
import { useTours } from "./hooks/use-tours";
import { useWishlist } from "./hooks/use-wishlist";
import { useDrawer } from "./hooks/use-drawer";
import { Pagination } from "./components/pagenationProps";

const ITEMS_PER_PAGE = 10;

export default function SacredYatra({
  params,
}: {
  params: {
    country?: string;
    id?: string;
    dest?: string;
  };
}) {
  const tours = useTours(params)
  const { wishlist, toggle: onWishlistToggle } = useWishlist();
  const drawer = useDrawer();
  const [activePage, setActivePage] = useState(1);
  // ✅ Reset to page 1 only when filter state values change, not on every render
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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

  // ✅ Slice filtered results for current page
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
      <TourPackageCard />

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
            {/* Result count */}
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
            formatPrice={(price: number) => `₹${price.toLocaleString()}`}
          />

          <Pagination
            activePage={activePage}
            totalPages={totalPages}
            onChange={setActivePage}
          />
        </main>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
      `}</style>

      <TourCollage />
    
      <TourCards />
      <Footer />
    </div>
  );
}