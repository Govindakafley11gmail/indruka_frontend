// components/terms/TermsSummaryBanner.tsx
import { CalendarX2, CreditCard, ShieldAlert, Globe } from "lucide-react";

const highlights = [
  {
    icon: CreditCard,
    title: "30% Deposit to Book",
    description: "Balance due 60 days before departure. Secure online payment available.",
  },
  {
    icon: CalendarX2,
    title: "Flexible Cancellation",
    description: "Full balance refund if cancelled 90+ days out. See schedule for details.",
  },
  {
    icon: Globe,
    title: "Bhutan SDF Included",
    description: "Sustainable Development Fee is included in our quoted tour prices.",
  },
  {
    icon: ShieldAlert,
    title: "Travel Insurance Required",
    description: "Comprehensive cover including medical evacuation is strongly recommended.",
  },
];

export function TermsSummaryBanner() {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">
        Key points
      </p>
      <h2 className="text-xl font-bold text-gray-900 mb-6 sm:text-2xl">
        Terms at a glance
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-blue-100"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
              <p className="text-gray-500 text-sm mt-0.5 leading-snug">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-gray-400 text-center">
        This is a simplified overview. Please read the full terms below for complete details.
      </p>
    </div>
  );
}
