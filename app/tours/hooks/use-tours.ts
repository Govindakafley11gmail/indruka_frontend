/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { indiaTours, SPECIALITY_TO_TYPES } from "../data";
import { bhutanTours } from "../bhutan";



export function useTours() {
  const searchParams = useSearchParams();

  function getDurationBucket(tour: {
    durationDays?: number;
    durationTag?: string;
  }): string {
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

  // URL params
  const rawId = searchParams.get("id") ?? "";
  const rawCountry = searchParams.get("country") ?? "";
  const rawDest = searchParams.get("dest") ?? "";
  const rawSpec = searchParams.get("spec") ?? "";

  // states
  const [budget, setBudget] = useState([150000]);
  const [sortBy, setSortBy] = useState("recommended");
  const [search, setSearch] = useState("");

  const [checkedSpec, setCheckedSpec] = useState<Set<string>>(new Set());
  const [checkedDur, setCheckedDur] = useState(new Set<string>());
  const [checkedDest, setCheckedDest] = useState<Set<string>>(new Set());
  const [checkedMode, setCheckedMode] = useState(new Set<string>());
  const [checkedCountry, setCheckedCountry] = useState<Set<string>>(new Set());
  const [checkedPlace, setCheckedPlace] = useState<Set<string>>(new Set());

  // sync URL filters
  useEffect(() => {
    setCheckedPlace(
      rawId ? new Set(rawId.split(",").map((d) => d.trim())) : new Set()
    );
  }, [rawId]);

  useEffect(() => {
    setCheckedCountry(
      rawCountry
        ? new Set(rawCountry.split(",").map((c) => c.trim()))
        : new Set()
    );
  }, [rawCountry]);

  useEffect(() => {
    setCheckedDest(
      rawDest ? new Set(rawDest.split(",").map((d) => d.trim())) : new Set()
    );
  }, [rawDest]);

  useEffect(() => {
    setCheckedSpec(
      rawSpec ? new Set(rawSpec.split(",").map((s) => s.trim())) : new Set()
    );
  }, [rawSpec]);

  // -----------------------------
  // ✅ TOURS SOURCE (BHUTAN + INDIA FIX)
  // -----------------------------
  const tours = useMemo(() => {
    // If country filter exists → load only that dataset
    const country = rawCountry.toLowerCase();

    if (country.includes("bhutan")) return bhutanTours;
    if (country.includes("india")) return indiaTours;

    // otherwise merge both
    return [...bhutanTours, ...indiaTours];
  }, [rawCountry]);

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
    setCheckedCountry(new Set());
    setCheckedPlace(new Set());
    setBudget([150000]);
    setSearch("");
  };

  const filtered = useMemo(() => {
    return tours
      .filter((t) => t.price <= budget[0])
      .filter(
        (t) =>
          !search ||
          t.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((t) => checkedMode.size === 0 || checkedMode.has(t.mode))
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
        (t) =>
          checkedDur.size === 0 ||
          checkedDur.has(getDurationBucket(t))
      )
      .filter(
        (t) =>
          checkedCountry.size === 0 ||
          [...checkedCountry].some((c) =>
            t.country.toLowerCase().includes(c.toLowerCase())
          )
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
        if (sortBy === "country-az")
          return a.country.localeCompare(b.country);

        const getPlace = (x: any) =>
          x.place ?? x.destinations?.[0] ?? "";

        if (sortBy === "place-az")
          return getPlace(a).localeCompare(getPlace(b));

        if (sortBy === "place-za")
          return getPlace(b).localeCompare(getPlace(a));

        return 0;
      });
  }, [
    tours,
    budget,
    search,
    checkedMode,
    checkedCountry,
    checkedPlace,
    checkedDest,
    checkedSpec,
    checkedDur,
    sortBy,
  ]);

  const activeFilterCount =
    checkedMode.size +
    checkedSpec.size +
    checkedDur.size +
    checkedDest.size +
    checkedPlace.size +
    checkedCountry.size;

  return {
    filtered,
    budget,
    setBudget,
    sortBy,
    setSortBy,
    search,
    setSearch,
    checkedSpec,
    checkedDur,
    checkedDest,
    checkedMode,
    checkedCountry,
    checkedPlace,
    toggleSet,
    setCheckedMode,
    setCheckedSpec,
    setCheckedDur,
    setCheckedDest,
    setCheckedCountry,
    setCheckedPlace,
    clearAll,
    activeFilterCount,
  };
}