import { Suspense } from "react";
import SacredYatra from "./view-tours";

export default function ToursPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F0F4FA]" />}>
      <SacredYatra />
    </Suspense>
  );
}