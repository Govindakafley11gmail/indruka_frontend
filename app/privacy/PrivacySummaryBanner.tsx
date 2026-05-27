// components/privacy/PrivacySummaryBanner.tsx
// A quick-read summary banner shown above the full policy sections.

import { ShieldCheck, Lock, Eye, UserCheck } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Your data is safe",
    description: "We use industry-standard encryption and security measures.",
  },
  {
    icon: Eye,
    title: "Transparent usage",
    description: "We only use your data to provide and improve our services.",
  },
  {
    icon: Lock,
    title: "No selling data",
    description: "We never sell your personal information to third parties.",
  },
  {
    icon: UserCheck,
    title: "You're in control",
    description: "Request access, correction, or deletion of your data anytime.",
  },
];

export function PrivacySummaryBanner() {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">
        Quick summary
      </p>
      <h2 className="text-xl font-bold text-gray-900 mb-6 sm:text-2xl">
        Privacy at a glance
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
              <p className="text-gray-500 text-sm mt-0.5 leading-snug">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-gray-400 text-center">
        This is a simplified overview. Please read the full policy below for complete details.
      </p>
    </div>
  );
}
