"use client";

export default function ScrollToItinerary({ children }: { children: React.ReactNode }) {
  return (
    <button
      onClick={() =>
        document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    >
      {children}
    </button>
  );
}