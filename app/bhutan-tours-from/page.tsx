// app/bhutan-tours-from/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countriesData } from "../tours/countries/Countriesdata";

// ── Static generation ────────────────────────────────────────────
export function generateStaticParams() {
    return countriesData.map((c) => ({ slug: c.slug }));
}

// ── SEO metadata ─────────────────────────────────────────────────
export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const country = countriesData.find((c) => c.slug === params.slug);
    if (!country) return {};
    return {
        title: country.metaTitle,
        description: country.metaDescription,
        alternates: { canonical: country.canonicalUrl },
        openGraph: {
            title: country.heroHeading,
            description: country.heroSubheading,
        },
    };
}

// ── Sub-components ───────────────────────────────────────────────

function InfoCard({
    icon,
    label,
    value,
}: {
    icon: string;
    label: string;
    value: string;
}) {
    return (
        <div className="flex flex-col gap-1 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <span className="text-xl">{icon}</span>
            <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                {label}
            </span>
            <span className="text-sm text-gray-700">{value}</span>
        </div>
    );
}

function TourCard({ name }: { name: string }) {
    // Extract duration from tour name e.g. "Bhutan Cultural Tour – 7 Days"
    const parts = name.split("–");
    const title = parts[0]?.trim() ?? name;
    const duration = parts[1]?.trim();

    return (
        <div className="group flex items-center justify-between rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm transition hover:border-amber-300 hover:shadow-md">
            <div>
                <p className="text-sm font-medium text-gray-800">{title}</p>
                {duration && (
                    <p className="text-xs text-gray-400">{duration}</p>
                )}
            </div>
            <span className="text-amber-500 transition group-hover:translate-x-0.5">
                →
            </span>
        </div>
    );
}

function FaqItem({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) {
    return (
        <details className="group border-b border-gray-100 py-4 last:border-0">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="text-sm font-medium text-gray-800">{question}</span>
                <span className="mt-0.5 shrink-0 text-gray-400 transition group-open:rotate-45">
                    +
                </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">{answer}</p>
        </details>
    );
}

// ── Page ──────────────────────────────────────────────────────────
export default function CountryPage({
    params,
}: {
    params: { slug: string };
}) {
    const country = countriesData.find((c) => c.slug === params.slug);
    if (!country) notFound();

    const visaFree = country.visaNote.toLowerCase().includes("do not require");

    return (
        <main className="min-h-screen bg-gray-50">
            {/* ── Hero ── */}
            <section className="bg-white px-6 py-16 text-center">
                <pre>{JSON.stringify(country.flag)}</pre>
                <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900">
                    {country.heroHeading}
                </h1>
                <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-500">
                    {country.heroSubheading}
                </p>
                <div className="mt-6 flex justify-center gap-3">
                    <a
                        href="#tours"
                        className="rounded-full bg-amber-500 px-6 py-2.5 text-sm font-medium text-white shadow hover:bg-amber-600"
                    >
                        View Tours
                    </a>
                    <a
                        href="/support"
                        className="rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:border-gray-300"
                    >
                        Free Custom Quote
                    </a>
                </div>
            </section>

            <div className="mx-auto max-w-4xl px-6 py-12 space-y-14">
                {/* ── Quick-info cards ── */}
                <section>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        <InfoCard
                            icon="✈️"
                            label="Entry route"
                            value={country.entryNote.split(".")[0] + "."}
                        />
                        <InfoCard
                            icon="🛂"
                            label="Visa"
                            value={visaFree ? "No visa required" : "e-Visa required"}
                        />
                        <InfoCard
                            icon="💱"
                            label="Currency"
                            value={country.currency}
                        />
                        <InfoCard
                            icon="🕐"
                            label="Flight routing"
                            value={country.flightNote.split(".")[0] + "."}
                        />
                    </div>
                </section>

                {/* ── Entry & flights detail ── */}
                <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">
                        Getting to Bhutan from {country.name}
                    </h2>
                    <div className="space-y-3">
                        <div className="flex gap-3">
                            <span className="mt-0.5 shrink-0 text-amber-500">✈</span>
                            <p className="text-sm leading-relaxed text-gray-600">
                                {country.flightNote}
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="mt-0.5 shrink-0 text-amber-500">🗺</span>
                            <p className="text-sm leading-relaxed text-gray-600">
                                {country.entryNote}
                            </p>
                        </div>
                        <div
                            className={`flex gap-3 rounded-lg px-4 py-3 ${visaFree
                                    ? "bg-green-50 text-green-800"
                                    : "bg-amber-50 text-amber-800"
                                }`}
                        >
                            <span className="shrink-0">{visaFree ? "✅" : "🛂"}</span>
                            <p className="text-sm leading-relaxed">{country.visaNote}</p>
                        </div>
                    </div>
                </section>

                {/* ── Popular tours ── */}
                <section id="tours">
                    <h2 className="mb-5 text-lg font-semibold text-gray-900">
                        Popular Tours from {country.name}
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {country.popularTours.map((tour) => (
                            <TourCard key={tour} name={tour} />
                        ))}
                    </div>
                    <p className="mt-4 text-center text-xs text-gray-400">
                        All prices in {country.currency} · Inclusive of accommodation, meals, guide & transfers
                    </p>
                </section>

                {/* ── FAQs ── */}
                <section>
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">
                        Frequently asked questions
                    </h2>
                    <div className="rounded-2xl border border-gray-100 bg-white px-6 shadow-sm">
                        {country.faqs.map((faq) => (
                            <FaqItem
                                key={faq.question}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="rounded-2xl bg-amber-500 px-8 py-10 text-center text-white shadow">
                    <h2 className="mb-2 text-xl font-bold">
                        Ready to plan your Bhutan trip?
                    </h2>
                    <p className="mb-6 text-sm text-amber-100">
                        Get a free custom itinerary built around your travel dates, budget, and interests.
                    </p>
                    <a
                        href="/support"
                        className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-amber-600 shadow hover:shadow-md"
                    >
                        Get a Free Quote
                    </a>
                </section>
            </div>
        </main>
    );
}