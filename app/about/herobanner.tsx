
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative min-h-[480px] flex items-center overflow-hidden bg-blue-900">
      {/* Background overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-700/60 z-10" />

      {/* Background image via CSS */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80')`,
        }}
      />

      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 z-10 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-blue-200 text-sm mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-white font-medium">About Us</span>
        </nav>

        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
            🏔️ Licensed by Tourism Council of Bhutan
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Your Trusted Gateway to{" "}
            <span className="text-blue-300">the Last Shangri-La</span>
          </h1>

          <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            Book Bhutan Tour is a fully licensed Bhutanese travel company dedicated to
            crafting authentic, transformative journeys through the Kingdom of Bhutan —
            the world&apos;s happiest country.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/tours"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-full transition-colors"
            >
              Explore Tours
              <ChevronRight size={16} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3 rounded-full transition-colors backdrop-blur-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}