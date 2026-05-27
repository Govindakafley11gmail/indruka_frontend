// components/privacy/PrivacyPage.tsx
// The main composed Privacy Policy page — drop this anywhere in your Next.js app.
// All child components are independently importable too.

import { PrivacyHero } from "./PrivacyHero";
import { PrivacyTableOfContents } from "./PrivacyTableOfContents";
import { PrivacySectionBlock } from "./PrivacySection";
import { PrivacyContactCard } from "./PrivacyContactCard";
import { PrivacySummaryBanner } from "./PrivacySummaryBanner";
import { COMPANY_NAME, LAST_UPDATED, privacySections } from "./privacyData";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <PrivacyHero />

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 xl:grid-cols-[300px_1fr]">

          {/* Left column: TOC (desktop) + Contact card */}
          <div className="space-y-6">
            <PrivacyTableOfContents />
            <PrivacyContactCard />
          </div>

          {/* Right column: content */}
          <div className="mt-8 space-y-6 lg:mt-0">
            {/* Quick summary */}
            <PrivacySummaryBanner />

            {/* Policy sections */}
            {privacySections.map((section, index) => (
              <PrivacySectionBlock
                key={section.id}
                section={section}
                index={index}
              />
            ))}

            {/* Footer note */}
            <div className="rounded-2xl border border-dashed border-blue-200 bg-white px-6 py-5 text-center text-sm text-gray-500">
              <p>
                This Privacy Policy was last updated on{" "}
                <span className="font-semibold text-gray-700">{LAST_UPDATED}</span>.
              </p>
              <p className="mt-1">
                &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
