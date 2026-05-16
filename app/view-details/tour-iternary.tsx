/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/refs */
"use client";

import { useState, useRef, useEffect } from "react";
import {
  Printer,
  Mail,
  ArrowLeftRight,
  Map,
  Edit2,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import TourInformationContent from "./tabs-details";
import TourItinerary from "./itinary-dynamic";

// ─────────────────────────────────────────────
// Data Types  (parent passes ONLY these shapes)
// ─────────────────────────────────────────────

export interface DayItem {
  day: number;
  date: string;
  title: string;
  details: string[];  // ← string → string[]
}

export interface TabSection {
  value: string;
  label: string;
  dotColor: string; // Tailwind bg-* class e.g. "bg-green-500"
  items: string[];
}

export interface TourDetailRow {
  label: string;
  value: string;
}

export interface CancellationRow {
  daysRange: string; // e.g. "60+ days"
  charge: string;    // e.g. "10% of tour cost"
}

export interface UpgradeItem {
  name: string;
  price: string;       // e.g. "₹85,000"
  description: string;
}

/** Navigation tab — value + label only, no JSX slot */
export interface MainTab {
  value: string;
  label: string;
}

// ─────────────────────────────────────────────
// Top-level Props  (all data, zero JSX)
// ─────────────────────────────────────────────

export interface TourPageProps {
  // Nav
  mainTabs?: MainTab[];
country?:string
  // ITINERARY
  departureDate?: string;
  departureCity?: string;
  
  onChangeDepartureDate?: () => void;
  days?: DayItem[];
  knowBeforeBook?: {
    note?: string;
    airline?: string;
    lines?: string[];
  };

  // TOUR DETAILS
  tourDetails?: TourDetailRow[];

  // TOUR INFORMATION
  tourInformationTitle?: string;
  tourInformationSubtitle?: string;
  tourInformationTabs?: TabSection[];

  // NEED TO KNOW
  needToKnow?: string[];

  // CANCELLATION POLICY
  cancellationRows?: CancellationRow[];

  // UPGRADES
  upgrades?: UpgradeItem[];
  price?:any
  tourName:string
}

// ─────────────────────────────────────────────
// Default tabs
// ─────────────────────────────────────────────

const DEFAULT_TABS: MainTab[] = [
  { value: "itinerary",        label: "Itinerary" },
  { value: "tour-details",     label: "Tour Details" },
  { value: "tour-information", label: "Tour Information" },
  { value: "need-to-know",     label: "Need to Know" },
  { value: "cancellation",     label: "Cancellation Policy" },
  { value: "upgrades",         label: "Upgrades" },
];

// ─────────────────────────────────────────────
// Shared atoms
// ─────────────────────────────────────────────
import Image from "next/image";
import BookingPage from "./booking-page";
import ItinaryBookingPage from "./booking-page";

function SidebarActionBtn({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex flex-col items-center gap-1.5 flex-1 py-3 px-2 text-center hover:bg-blue-50 transition-colors">
      <div>{icon}</div>

      <span className="text-[11px] text-gray-500 leading-tight whitespace-pre-line">
        {label}
      </span>
    </button>
  );
}

function ActionButtonRow() {
  return (
    <>
      <SidebarActionBtn
        icon={
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={22}
            height={22}
          />
        }
        label={"Send\nItinerary"}
      />

      <SidebarActionBtn
        icon={
          <Image
            src="/facebook.png"
            alt="Facebook"
            width={22}
            height={22}
          />
        }
        label={"Share on\nFacebook"}
      />

      <SidebarActionBtn
        icon={
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={22}
            height={22}
          />
        }
        label={"Share on\nInstagram"}
      />

      <SidebarActionBtn
        icon={
          <Image
            src="/gmail.png"
            alt="Email"
            width={22}
            height={22}
          />
        }
        label={"Email\nItinerary"}
      />
    </>
  );
}

// ─────────────────────────────────────────────
// Section components  (fixed layout, data props)
// ─────────────────────────────────────────────

function ItinerarySection({
  departureDate,
  departureCity,
  onChangeDepartureDate,
  price,
  tourName,
  days,
  country,
  knowBeforeBook,
}: Pick<TourPageProps, "departureDate" | "departureCity" | "onChangeDepartureDate" | "days" | "knowBeforeBook"  | "price"  | "country"           // ← add
  | "tourName" >) {
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set());

  const toggleDay = (day: number) => {
    setExpandedDays((prev) => {
      const next = new Set(prev);
      next.has(day) ? next.delete(day) : next.add(day);
      return next;
    });
  };

const allExpanded = !!days?.length && expandedDays.size === days.length;

  const handleViewAll = () => {
    if (allExpanded) {
      setExpandedDays(new Set()); // collapse all
    } else {
      setExpandedDays(new Set(days?.map((d) => d.day))); // expand all
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Left column */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            Itinerary{" "}
            <span className="text-base font-normal text-gray-400">(Day Wise)</span>
          </h2>
          <button
            onClick={handleViewAll}
            className="text-base font-medium text-gray-800 underline underline-offset-2 hover:text-blue-900 transition-colors"
          >
            {allExpanded ? "Collapse all" : "View all days"}
          </button>
        </div>

        {/* Alert banner */}
        <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-md px-4 py-3 mb-5">
          <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-base text-gray-600">
            Viewing itinerary for{" "}
            <strong className="text-gray-800">{departureDate}</strong> of{" "}
            <strong className="text-gray-800">{departureCity}</strong>.
          </p>
        </div>

        {/* Timeline */}
        <TourItinerary
          days={days ?? []}
          expandedDays={expandedDays}
          onToggleDay={toggleDay}
        />

        {/* Know before you book */}
        <div className="mt-7 pt-5 border-t border-gray-200">
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="text-base font-bold text-gray-900">Know, before you book</h3>
            <button className="text-base font-medium text-gray-800 underline underline-offset-2 hover:text-blue-900 transition-colors">
              Read More
            </button>
          </div>
          {knowBeforeBook?.note && (
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Please note:</strong> {knowBeforeBook.note}
            </p>
          )}
          {knowBeforeBook?.airline && (
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Airline:</strong> {knowBeforeBook.airline}
            </p>
          )}
          {knowBeforeBook?.lines?.map((line, i) => (
            <p key={i} className="text-xs text-gray-500 leading-relaxed">{line}</p>
          ))}
        </div>
      </div>

      {/* Right sidebar */}
      <div className="w-72 flex-shrink-0 sticky top-20">
        <div
          className="relative rounded-lg overflow-hidden h-36 mb-4 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#e8f0e8 0%,#d4e8d0 50%,#c8dfc8 100%)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 17px,rgba(255,255,255,.3) 17px,rgba(255,255,255,.3) 18px)," +
                "repeating-linear-gradient(90deg,transparent,transparent 17px,rgba(255,255,255,.3) 17px,rgba(255,255,255,.3) 18px)",
            }}
          />
          <div className="absolute w-full h-3 bg-green-400/40 top-[42%] -rotate-2 scale-x-110" />
          <div className="absolute w-3 inset-y-0 left-[55%] bg-green-400/40 rotate-[4deg] scale-y-110" />
          <div className="absolute top-3 right-5 w-12 h-7 rounded-full bg-blue-300/60" />
          <button className="relative z-10 flex items-center gap-1.5 bg-white rounded-md px-3 py-1.5 text-base font-semibold text-gray-700 shadow-md hover:shadow-lg transition-shadow">
            <Map className="w-4 h-4" />
            Map View
          </button>
        </div>
        <div className="hidden md:flex border border-gray-200 rounded-lg bg-white overflow-hidden divide-x divide-gray-200">
          <ActionButtonRow />
        </div>
        <div>
          <BookingPage tourName={tourName} price={price} country={country}/>
        </div>
      </div>
    </div>
  );
}

function TourDetailsSection({ tourDetails }: Pick<TourPageProps, "tourDetails">) {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Tour Details</h2>
      {tourDetails?.length ? (
        <div className="divide-y divide-gray-100 border border-gray-200 rounded-lg overflow-hidden">
          {tourDetails.map((row) => (
            <div key={row.label} className="flex items-center px-4 py-3 bg-white even:bg-gray-50">
              <span className="w-44 flex-shrink-0 text-base font-medium text-gray-500">{row.label}</span>
              <span className="text-base text-gray-800">{row.value}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-base text-gray-400">No tour details available.</p>
      )}
    </>
  );
}

function NeedToKnowSection({ needToKnow }: Pick<TourPageProps, "needToKnow">) {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Need to Know</h2>
      {needToKnow?.length ? (
        <ul className="space-y-2">
          {needToKnow.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-base text-gray-600">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-900 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-base text-gray-400">No information available.</p>
      )}
    </>
  );
}

function CancellationSection({ cancellationRows }: Pick<TourPageProps, "cancellationRows">) {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
      {cancellationRows?.length ? (
        <div className="overflow-x-auto">
          <table className="w-full text-base border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="text-left px-4 py-2.5 border border-gray-200 font-semibold">
                  Days before departure
                </th>
                <th className="text-left px-4 py-2.5 border border-gray-200 font-semibold">
                  Cancellation charge
                </th>
              </tr>
            </thead>
            <tbody>
              {cancellationRows.map((row) => (
                <tr key={row.daysRange} className="even:bg-gray-50 text-gray-600">
                  <td className="px-4 py-2.5 border border-gray-200">{row.daysRange}</td>
                  <td className="px-4 py-2.5 border border-gray-200">{row.charge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-base text-gray-400">No cancellation policy available.</p>
      )}
    </>
  );
}

function UpgradesSection({ upgrades }: Pick<TourPageProps, "upgrades">) {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Upgrades</h2>
      {upgrades?.length ? (
        <div className="grid sm:grid-cols-2 gap-4">
          {upgrades.map((u) => (
            <div key={u.name} className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between mb-1.5">
                <span className="text-base font-semibold text-gray-900">{u.name}</span>
                <span className="text-base font-bold text-blue-900 ml-2 flex-shrink-0">{u.price}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{u.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-base text-gray-400">No upgrades available.</p>
      )}
    </>
  );
}

// ─────────────────────────────────────────────
// Section router  (tab value → component)
// ─────────────────────────────────────────────

function SectionContent({ tab, props }: { tab: MainTab; props: TourPageProps }) {
  switch (tab.value) {
    case "itinerary":
      return (
        <ItinerarySection
        price={props.price}
        tourName={props.tourName}
          departureDate={props.departureDate}
          departureCity={props.departureCity}
          onChangeDepartureDate={props.onChangeDepartureDate}
          days={props.days}
          knowBeforeBook={props.knowBeforeBook}
               country={props.country}  // ✅ add this

        />
      );
    case "tour-details":
      return <TourDetailsSection tourDetails={props.tourDetails} />;
    case "tour-information":
      return (
        <TourInformationContent
          title={props.tourInformationTitle ?? "Tour Information"}
          subtitle={props.tourInformationSubtitle ?? "Read this to prepare for your tour in the best way!"}
          tabs={props.tourInformationTabs ?? []}
        />
      );
    case "need-to-know":
      return <NeedToKnowSection needToKnow={props.needToKnow} />;
    case "cancellation":
      return <CancellationSection cancellationRows={props.cancellationRows} />;
   
    default:
      return 
  }
}

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────

export default function ItineraryPage(props: TourPageProps) {
  const tabs = props.mainTabs?.length ? props.mainTabs : DEFAULT_TABS;

  const [activeTab, setActiveTab]           = useState(tabs[0].value);
  const isScrollingRef                      = useRef(false);
  const tabButtonRefs                       = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const sentinelRef                         = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky]             = useState(false);

  const sectionRefs = useRef<Record<string, React.MutableRefObject<HTMLDivElement | null>>>(
    Object.fromEntries(tabs.map((t) => [t.value, { current: null }]))
  );

  useEffect(() => {
    tabs.forEach((t) => {
      if (!sectionRefs.current[t.value]) {
        sectionRefs.current[t.value] = { current: null };
      }
    });
  }, [tabs]);

  const updateIndicator = (value: string) => {
    const btn = tabButtonRefs.current[value];
    if (btn) setIndicatorStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
  };

  useEffect(() => { updateIndicator(activeTab); }, [activeTab]);
  useEffect(() => {
    const onResize = () => updateIndicator(activeTab);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeTab]);

  useEffect(() => {
    const onScroll = () => {
      if (!sentinelRef.current) return;
      setIsSticky(sentinelRef.current.getBoundingClientRect().top <= 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = Object.entries(sectionRefs.current).map(([key, ref]) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrollingRef.current) setActiveTab(key);
        },
        { threshold: 0.3 }
      );
      if (ref.current) obs.observe(ref.current);
      return obs;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [tabs]);

  const scrollToSection = (value: string) => {
    setActiveTab(value);
    isScrollingRef.current = true;
    sectionRefs.current[value]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => { isScrollingRef.current = false; }, 800);
  };

  const setSectionRef = (value: string) => (el: HTMLDivElement | null) => {
    if (sectionRefs.current[value]) sectionRefs.current[value].current = el;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile action bar */}
      <div className="flex border md:hidden border-gray-200 rounded-lg bg-white overflow-hidden divide-x divide-gray-200">
        <ActionButtonRow />
      </div>

      {/* Sticky nav */}
      <div ref={sentinelRef}>
        <div
          className={cn(
            "bg-white border-b border-gray-200 z-20 w-full transition-all overflow-x-scroll",
            isSticky ? "fixed top-0 left-0" : "relative"
          )}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  ref={(el) => { tabButtonRefs.current[tab.value] = el; }}
                  onClick={() => scrollToSection(tab.value)}
                  className={cn(
                    "px-4 py-3.5 text-base font-medium whitespace-nowrap transition-colors relative z-10",
                    activeTab === tab.value
                      ? "text-blue-900 font-semibold"
                      : "text-gray-500 hover:text-blue-900"
                  )}
                >
                  {tab.label}
                </button>
              ))}
              <span
                className="absolute bottom-0 h-0.5 bg-blue-900 rounded-full transition-all duration-300 ease-in-out"
                style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Page body — fully dynamic */}
      <div className="max-w-5xl mx-auto px-6 py-7 flex flex-col gap-16">
        {tabs.map((tab) => (
          <div key={tab.value} ref={setSectionRef(tab.value)}>
            <SectionContent tab={tab} props={props} />
          </div>
        ))}
      </div>
    </div>
  );
}