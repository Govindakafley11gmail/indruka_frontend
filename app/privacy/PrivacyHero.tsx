// components/privacy/PrivacyHero.tsx
import { Shield } from "lucide-react";
import { COMPANY_NAME, LAST_UPDATED } from "./privacyData";

export function PrivacyHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-2 ring-white/30">
          <Shield className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-blue-100 sm:text-xl">
          {COMPANY_NAME}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-blue-100 ring-1 ring-white/20">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
          Last updated: {LAST_UPDATED}
        </div>
      </div>
    </section>
  );
}
