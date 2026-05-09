"use client";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { tours } from "../data";

export function useTours() {
  const searchParams = useSearchParams();

  const initialCountry = useMemo(() => {
    const raw = searchParams.get("country");
    if (!raw) return new Set<string>();
    return new Set<string>(raw.split(",").map((c) => c.trim()));
  }, []);

  const initialPlace = useMemo(() => {
    const raw = searchParams.get("id");
    if (!raw) return new Set<string>();
    return new Set<string>(raw.split(",").map((d) => d.trim()));
  }, []);

  const initialDest = useMemo(() => {
    const raw = searchParams.get("dest");
    if (!raw) return new Set<string>();
    return new Set<string>(raw.split(",").map((d) => d.trim()));
  }, []);

  const [budget, setBudget] = useState([150000]);
  const [sortBy, setSortBy] = useState("recommended");
  const [search, setSearch] = useState("");
  const [checkedSpec, setCheckedSpec] = useState(new Set<string>());
  const [checkedDur, setCheckedDur] = useState(new Set<string>());
  const [checkedDest, setCheckedDest] = useState<Set<string>>(initialDest);
  const [checkedMode, setCheckedMode] = useState(new Set<string>());
  const [checkedCountry, setCheckedCountry] = useState<Set<string>>(initialCountry);
  const [checkedPlace, setCheckedPlace] = useState<Set<string>>(initialPlace);

  const toggleSet = (
    setter: React.Dispatch<React.SetStateAction<Set<string>>>,
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
    setCheckedCountry(new Set());
    setCheckedPlace(new Set());
    setBudget([150000]);
    setSearch("");
  };

  // ✅ useMemo gives a stable reference — only recomputes when filters actually change
  const filtered = useMemo(() => {
    return tours
      .filter((t) => t.price <= budget[0])
      .filter(
        (t) => !search || t.title.toLowerCase().includes(search.toLowerCase()),
      )
      .filter((t) => checkedMode.size === 0 || checkedMode.has(t.mode))
      .filter(
        (t) =>
          checkedCountry.size === 0 ||
          [...checkedCountry].some((c) =>
            t.country.toLowerCase().includes(c.toLowerCase()),
          ),
      )
      .filter(
        (t) =>
          checkedPlace.size === 0 ||
          [...checkedPlace].some((p) =>
            (t.place ?? "").toLowerCase().includes(p.toLowerCase()),
          ),
      )
      .filter(
        (t) =>
          checkedDest.size === 0 ||
          [...checkedDest].some((d) =>
            t.destinations?.some((dest: string) =>
              dest.toLowerCase().includes(d.toLowerCase()),
            ),
          ),
      )
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "country-az") return a.country.localeCompare(b.country);
        if (sortBy === "place-az") {
          const placeA = a.place ?? a.destinations?.[0] ?? "";
          const placeB = b.place ?? b.destinations?.[0] ?? "";
          return placeA.localeCompare(placeB);
        }
        if (sortBy === "place-za") {
          const placeA = a.place ?? a.destinations?.[0] ?? "";
          const placeB = b.place ?? b.destinations?.[0] ?? "";
          return placeB.localeCompare(placeA);
        }
        return 0;
      });
  }, [budget, search, checkedMode, checkedCountry, checkedPlace, checkedDest, checkedSpec, checkedDur, sortBy]);
  // ☝️ stable reference — new array only when these values change

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