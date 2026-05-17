/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
// PhoneInput.tsx
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { CountryCodePicker } from "./CountryCodePicker";
import { useCallingCodes, type Country } from "./hooks/useCallingCodes";

interface Props {
  value: string;
  onChange: (value: string) => void;
  className:string
}

export function PhoneInput({ value, onChange,className }: Props) {
  const { countries, detectCountry } = useCallingCodes();
  const [selected, setSelected] = useState<Country | null>(null);

  // ── Set India as default once countries are loaded ──
  useEffect(() => {
    if (countries.length === 0) return;
    const india = countries.find((c:any) => c.name === "India");
    if (india && !selected) {
      setSelected(india);
      onChange(`${india.callingCode} `);
    }
  }, [countries]);

  // Auto-detect country as user types
  useEffect(() => {
    if (!value) return;
    const detected = detectCountry(value);
    if (detected) setSelected(detected);
  }, [value, countries]);

  function handleSelect(country: Country) {
    setSelected(country);
    const local = value.replace(/^\+\d+\s?/, "").trim();
    onChange(`${country.callingCode} ${local}`);
  }

  return (
    <div className="flex gap-2">
      <CountryCodePicker
        countries={countries}
        selected={selected}
        onSelect={handleSelect}
        buttonStyle="flex shrink-0 items-center gap-1.5 border-slate-200 px-2.5 text-sm font-normal text-slate-700 hover:bg-slate-50"
      />
      <Input
        id="phone"
        type="tel"
        placeholder={selected ? `${selected.callingCode} 98765 43210` : "+91 98765 43210"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
      />
    </div>
  );
}