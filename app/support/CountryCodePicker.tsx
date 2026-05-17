"use client"
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Search } from "lucide-react";
import type { Country } from "./hooks/useCallingCodes";

interface Props {
  countries: Country[];
  selected: Country | null;
  onSelect: (country: Country) => void;
  buttonStyle:string
}

export function CountryCodePicker({ countries, selected, onSelect,buttonStyle }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
    else setSearch("");
  }, [open]);

  const filtered = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.callingCode.includes(search)
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={buttonStyle}
        >
          {selected ? (
            <>
              <img src={selected.flag} alt={selected.name} className="h-4 w-5 rounded-sm object-cover" />
              <span className="font-medium">{selected.callingCode}</span>
            </>
          ) : (
            <span className="text-slate-400">+?</span>
          )}
          <ChevronsUpDown className="ml-0.5 h-3.5 w-3.5 text-slate-400" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-72 p-0 shadow-xl" align="start">
        {/* Search */}
        <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2.5">
          <Search className="h-4 w-4 shrink-0 text-slate-400" />
          <input
            ref={searchRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search country or code…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>

        {/* List */}
        <ul className="max-h-60 overflow-y-auto py-1">
          {filtered.length === 0 ? (
            <li className="px-4 py-3 text-sm text-slate-400">No results</li>
          ) : (
            filtered.map((c) => (
              <li
                key={`${c.name}-${c.callingCode}`}
                onClick={() => { onSelect(c); setOpen(false); }}
                className={`flex cursor-pointer items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-blue-50 ${
                  selected?.name === c.name
                    ? "bg-blue-50 font-medium text-blue-700"
                    : "text-slate-700"
                }`}
              >
                <img src={c.flag} alt={c.name} className="h-4 w-5 shrink-0 rounded-sm object-cover" />
                <span className="flex-1 truncate">{c.name}</span>
                <span className="shrink-0 text-slate-400">{c.callingCode}</span>
              </li>
            ))
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
}