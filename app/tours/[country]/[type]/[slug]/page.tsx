/* eslint-disable @next/next/no-html-link-for-pages */
// app/tours/[country]/[speciality]/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";

import type { Metadata } from "next";
import { BhutanItem, Indiaitem } from "@/custom-components/body/data/bhutan/data";

const allTours = [...BhutanItem, ...Indiaitem];

// ── helpers ──────────────────────────────────────────────────────
function getTour(country: string, slug: string) {
  return allTours.find(
    (t) => t.country.toLowerCase() === country && t.slug === slug
  );
}

// ── SEO metadata ─────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { country: string; speciality: string; slug: string };
}): Promise<Metadata> {
  const tour = getTour(params.country, params.slug);
  if (!tour) return {};

  return {
    title: `${tour.title} | YourBrand`,
    description: `Book ${tour.title} in ${tour.place}. ${tour.itinerary}. From $${tour.price}.`,
    alternates: {
      canonical: `https://yourdomain.com/tours/${params.country}/${params.speciality}/${params.slug}`,
    },
    openGraph: {
      title: tour.title,
      description: `Explore ${tour.place} with our curated ${tour.title} package.`,
      images: tour.images?.[0] ? [{ url: tour.images[0] }] : [],
    },
  };
}

// ── Static generation — pre-renders all tour pages at build time ──
export function generateStaticParams() {
  return allTours.map((tour) => ({
    country: tour.country.toLowerCase(),
    speciality: tour.type?.[0]?.toLowerCase().replace(/\s+/g, "-") ?? "general",
    slug: tour.slug,
  }));
}

// ── Page ──────────────────────────────────────────────────────────
export default function TourDetailPage({
  params,
}: {
  params: { country: string; speciality: string; slug: string };
}) {
  const tour = getTour(params.country, params.slug);
  if (!tour) notFound();

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6 flex gap-2 flex-wrap">
        <a href="/" className="hover:text-blue-500">Home</a> 
        <a href={`/tours/${params.country}`} className="hover:text-blue-500 capitalize">
          {params.country}
        </a> /
        <a href={`/tours/${params.country}/${params.speciality}`} className="hover:text-blue-500 capitalize">
          {params.speciality.replace(/-/g, " ")}
        </a> /
        <span className="text-gray-700">{tour.title}</span>
      </nav>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-1">{tour.title}</h1>
      <p className="text-gray-400 mb-6">{tour.place} · {tour.itinerary}</p>

      {/* Images */}
      {tour.images?.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mb-8 rounded-xl overflow-hidden">
          {tour.images.slice(0, 3).map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`${tour.title} photo ${i + 1}`}
              width={600}
              height={400}
              className="w-full aspect-video object-cover"
            />
          ))}
        </div>
      )}

      {/* Price */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-3xl font-bold text-blue-600">${tour.price}</span>
        {tour.oldPrice && (
          <span className="line-through text-gray-400">${tour.oldPrice}</span>
        )}
        {tour.discount && (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            {tour.discount}
          </span>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tour.tags?.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>

      {/* Inclusions */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {tour.inclusions?.map((inc, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-3 rounded-lg">
            {inc.icon}
            <span className="text-sm">{inc.label}</span>
          </div>
        ))}
      </div>
    </main>
  );
}