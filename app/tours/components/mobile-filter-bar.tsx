interface MobileFilterBarProps {
  activeFilterCount: number;
  sortBy: string;
  onSortChange: (v: string) => void;
  onOpenDrawer: () => void;
}

export function MobileFilterBar({ activeFilterCount, sortBy, onSortChange, onOpenDrawer }: MobileFilterBarProps) {
  return (
    <div className="md:hidden z-40 p-4">
      <div className="flex items-center gap-3 px-3">
        <button onClick={onOpenDrawer} className="relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 px-4 py-3 text-white shadow-md active:scale-[0.98]">
          <div className="flex items-center justify-center gap-2">
            <span>⚙️</span>
            <span className="text-sm font-semibold">Filters</span>
            {activeFilterCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[11px] font-bold text-white">
                {activeFilterCount}
              </span>
            )}
          </div>
        </button>
        <div className="relative">
          <select value={sortBy} onChange={(e) => onSortChange(e.target.value)} className="appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-sm font-medium text-slate-700 outline-none">
            <option value="recommended">✨ Recommended</option>
            <option value="price-asc">💰 Price: Low → High</option>
            <option value="price-desc">💎 Price: High → Low</option>
            <option value="rating">⭐ Top Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
}