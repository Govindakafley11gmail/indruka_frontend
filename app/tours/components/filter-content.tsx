/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { SPECIALITIES, DURATIONS, DESTINATIONS, MODES, fmt } from "../data";

interface FilterContentProps {
  budget: number[];
  setBudget: (v: number[]) => void;
  checkedSpec: Set<string>;
  checkedDur: Set<string>;
  checkedDest: Set<string>;
  checkedMode: Set<string>;
  toggle: (setter: any, key: string) => void;
  setCheckedSpec: any;
  setCheckedDur: any;
  setCheckedDest: any;
  setCheckedMode: any;
}

export function  FilterContent({ budget, setBudget, checkedSpec, checkedDur, checkedDest, checkedMode, toggle, setCheckedSpec, setCheckedDur, setCheckedDest, setCheckedMode }: FilterContentProps) {
  return (
    <>
      <div className="p-4 px-5 border-b border-blue-50">
        <p className="text-[11px] uppercase tracking-[2px] text-slate-500 font-bold mb-3.5">💰 Budget per person</p>
        <Slider value={budget} onValueChange={setBudget} min={5000} max={500000} step={1000} className="mb-2" />
        <div className="flex justify-between text-xs">
          <span className="text-slate-400">₹5,000</span>
          <span className="text-[#1A5BB8] font-bold">{fmt(budget[0])}</span>
          <span className="text-slate-400">₹5,00,000+</span>
        </div>
      </div>
      {/* Travel Mode, Speciality, Duration, Destinations — same pattern */}
      {[
        { label: "✈️ Travel Mode", items: MODES, checked: checkedMode, setter: setCheckedMode },
        { label: "⭐ Speciality", items: SPECIALITIES, checked: checkedSpec, setter: setCheckedSpec },
        { label: "📅 Duration", items: DURATIONS, checked: checkedDur, setter: setCheckedDur },
        // { label: "📍 Destinations", items: DESTINATIONS, checked: checkedDest, setter: setCheckedDest },
      ].map(({ label, items, checked, setter }) => (
        <div key={label} className="p-4 px-5 border-b border-blue-50 last:border-0">
          <p className="text-[11px] uppercase tracking-[2px] text-slate-500 font-bold mb-3">{label}</p>
          {items.map((item) => (
            <label key={item} className="flex items-center gap-2.5 py-[5px] cursor-pointer">
              <Checkbox checked={checked.has(item)} onCheckedChange={() => toggle(setter, item)} />
              <span className={`text-[13.5px] ${checked.has(item) ? "text-blue-700 font-semibold" : "text-slate-600"}`}>
                {item}
              </span>
            </label>
          ))}
        </div>
      ))}
    </>
  );
}