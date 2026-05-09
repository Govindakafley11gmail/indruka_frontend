interface PaginationProps {
  activePage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({ activePage, totalPages, onChange }: PaginationProps) {
  return (
    <div className="flex justify-center gap-1.5 mt-8 pb-10">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-9 h-9 rounded-[9px] border font-semibold text-sm cursor-pointer transition-all duration-150 ${
            activePage === p ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-600"
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}