import { useRef } from "react";
import { FilterContent } from "./filter-content";

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  filteredCount: number;
  isMdScreen: boolean;
  drawerPos: { x: number; y: number };
  isDragging: boolean;
  drawerRef: React.RefObject<HTMLDivElement>;
  onDragStart: (e: React.MouseEvent) => void;
  onClearAll: () => void;
  filterContentProps: React.ComponentProps<typeof FilterContent>;
}

export function FilterDrawer({ open, onClose, filteredCount, isMdScreen, drawerPos, isDragging, drawerRef, onDragStart, onClearAll, filterContentProps }: FilterDrawerProps) {
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 z-[998] bg-black/45 backdrop-blur-sm md:hidden" onClick={onClose} />
      <div
        ref={drawerRef}
        style={isMdScreen ? { transform: `translate(${drawerPos.x}px, ${drawerPos.y}px)`, userSelect: isDragging ? "none" : "auto" } : {}}
        className="fixed z-[999] bg-white flex flex-col overflow-hidden left-[18%] right-0 top-0 bottom-0 h-full overflow-y-auto shadow-[-8px_0_32px_rgba(0,0,0,0.18)] animate-[slideInRight_0.25s_ease] md:inset-auto md:top-20 md:right-6 md:w-[300px] md:h-auto md:max-h-[80vh] md:overflow-y-auto md:rounded-2xl md:border md:border-blue-100 md:shadow-[0_8px_40px_rgba(29,78,216,0.18)] md:animate-none"
      >
        <div onMouseDown={onDragStart} className={`relative flex bg-gradient-to-br from-[#0f2d5a] to-[#1d5299] p-4 px-5 items-center justify-between sticky top-0 z-10 md:rounded-t-2xl md:cursor-grab ${isDragging ? "md:cursor-grabbing" : ""}`}>
          <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[6px] w-8 h-[3px] rounded-full bg-white/30" />
          <span className="text-white text-sm font-bold tracking-[1px]">🔍 Filter Tours</span>
          <div className="flex gap-3 items-center">
            <button onClick={onClearAll} className="bg-transparent border-none text-blue-300 text-xs font-semibold cursor-pointer">Clear all</button>
            <button onClick={onClose} className="bg-white/15 border-none text-white w-7 h-7 rounded-full cursor-pointer text-base flex items-center justify-center">×</button>
          </div>
        </div>
        <FilterContent {...filterContentProps} />
        <div className="p-4 px-5 sticky bottom-0 bg-white border-t border-blue-50 md:rounded-b-2xl">
          <button onClick={onClose} className="w-full bg-gradient-to-br from-[#1A5BB8] to-[#2477D9] text-white border-none rounded-[10px] py-3 text-sm font-bold cursor-pointer">
            Show {filteredCount} Tours
          </button>
        </div>
      </div>
    </>
  );
}