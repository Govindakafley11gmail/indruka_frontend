"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// ─── Partner Data ────────────────────────────────────────────────────────────
const partners = [
  {
    name: "Department of Tourism",
    logo: "/bhutan-believe.png",
  },
  {
    name: "Association of Bhutanese Tour Operators",
    logo: "/abto.png",
  },
  {
    name: "Royal Bhutan Airlines",
    logo: "/drukair.png",
  },
  {
    name: "Bhutan Airlines",
    logo: "/tbank.png",
  },
//   {
//     name: "CBI The Netherlands",
//     logo: "/images/partners/cbi-netherlands.png",
//   },
//   {
//     name: "Swiss Embassy Appreciation",
//     logo: "/images/partners/swiss-embassy.png",
//   },
] satisfies { name: string; logo: string }[];

// ─── Partner Logo ─────────────────────────────────────────────────────────────
function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="relative h-12 w-28 rounded bg-white p-2 shadow-md flex items-center justify-center">
      <Image
        src={logo}
        alt={name}
        fill
        sizes="112px"
        className="object-contain"
      />
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function MissionPartners() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [titleRef.current, textRef.current, logosRef.current].filter(
      Boolean
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-in")),
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .fade-up.animate-in        { opacity: 1; transform: translateY(0); }
        .fade-up-d1.animate-in     { transition-delay: 0.15s; }
        .fade-up-d2.animate-in     { transition-delay: 0.30s; }
        .fade-up-d3.animate-in     { transition-delay: 0.45s; }

        .partner-item {
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .partner-item:hover { opacity: 0.7; transform: translateY(-2px); }
      `}</style>

      <section className="bg-gray-100 py-20 px-4">

        {/* ── Mission copy ── */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#c8853a]">
            Our Purpose
          </p>
          <div className="w-8 h-0.5 bg-[#c8853a] rounded-full mx-auto mt-2.5 mb-8" />

          <h2
            ref={titleRef}
            className="fade-up fade-up-d1 text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Our Mission
          </h2>

          <p
            ref={textRef}
            className="fade-up fade-up-d2 text-base md:text-lg text-gray-500 leading-relaxed"
          >
            Our mission is to create meaningful travel experiences that connect
            visitors with Bhutan&apos;s culture, landscapes, and traditions while
            promoting responsible tourism that benefits local communities.
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="max-w-5xl mx-auto mt-16 border-t border-gray-200" />

        {/* ── Partner logos ── */}
        <div
          ref={logosRef}
          className="fade-up fade-up-d3 max-w-5xl mx-auto mt-12 px-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
            {partners.map(({ name, logo }) => (
              <div
                key={name}
                className="partner-item flex flex-col items-center gap-2"
              >
                <PartnerLogo name={name} logo={logo} />
                <span className="text-sm text-black text-center  leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}