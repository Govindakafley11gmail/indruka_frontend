// components/privacy/PrivacyHero.tsx
import { Shield } from "lucide-react";
import { COMPANY_NAME, LAST_UPDATED } from "./privacyData";

export function PrivacyHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br bg-gray-100 text-black">
      {/* Decorative pattern */}
   

      
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-12 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-2 ring-blue-500/30">
          <Shield className="h-8 w-8 text-blue-500" />
        </div>
        <h1 className="text-3xl text-blue-500 font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg  text-blue-700 sm:text-xl">{COMPANY_NAME}</p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-blue-700 ring-1 ring-blue/20">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
          Last updated: {LAST_UPDATED}
        </div>
      </div>
    </section>
  );
}
