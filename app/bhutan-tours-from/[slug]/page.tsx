import { notFound } from "next/navigation";
import Link from "next/link";
import { countriesData } from "@/app/tours/countries/Countriesdata";
import { Header } from "@/custom-components/navbar/components";
import Navbar from "@/custom-components/navbar/navbar";
import Footer from "@/custom-components/footer/footer";

export function generateStaticParams() {
    return countriesData.map((c) => ({ slug: c.slug }));
}

export default async function CountryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const country = countriesData.find((c) => c.slug === slug);
    if (!country) notFound();

    const isVisaFree = country.visaNote.toLowerCase().includes("do not require");

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <Navbar />

            <div className="bg-white border-b border-gray-100 px-6 py-3">
                <nav className="mx-auto max-w-4xl flex items-center gap-2 text-xs text-gray-400">
                    <Link href="/" className="hover:text-amber-500">Home</Link>
                    <span>/</span>
                    <Link href="/bhutan-tours-from" className="hover:text-amber-500">Bhutan tours from</Link>
                    <span>/</span>
                    <span className="text-gray-700">{country.name}</span>
                </nav>
            </div>

            {/* Hero */}
            <section className="bg-white px-6 py-16 text-center">
                <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    width={80}
                    height={53}
                    className="mx-auto mb-4 rounded shadow-sm"
                />
                <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900">
                    {country.heroHeading}
                </h1>
                <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-500">
                    {country.heroSubheading}
                </p>
                <div className="mt-8 flex justify-center gap-3 flex-wrap">
                    <a href="#tours" className="rounded-full bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 transition">
                        View Tours
                    </a>
                    <a href="/support" className="rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:border-gray-300 transition">
                        Free Custom Quote
                    </a>
                </div>
            </section>

            <div className="mx-auto max-w-4xl px-6 py-12 space-y-12">

                {/* Quick info */}
                <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                        { label: "Visa", value: isVisaFree ? "No visa required" : "e-Visa required" },
                        { label: "Currency", value: country.currency },
                        { label: "Flight route", value: country.flightNote.split("→")[1]?.split(".")[0]?.trim() ?? "via Paro" },
                        { label: "Entry", value: isVisaFree ? "Passport / Voter ID" : "Via licensed operator" },
                    ].map((item) => (
                        <div key={item.label} className="flex flex-col gap-1 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">{item.label}</span>
                            <span className="text-sm text-gray-700">{item.value}</span>
                        </div>
                    ))}
                </section>

                {/* Getting here */}
                <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <h2 className="mb-5 text-lg font-semibold text-gray-900">
                        Getting to Bhutan from {country.name}
                    </h2>
                    <div className="space-y-4">
                        <div className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                            <span className="shrink-0 text-amber-500">✈</span>
                            <p>{country.flightNote}</p>
                        </div>
                        <div className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                            <span className="shrink-0 text-amber-500">🗺</span>
                            <p>{country.entryNote}</p>
                        </div>
                        <div className={`flex gap-3 rounded-xl px-4 py-3 text-sm leading-relaxed ${isVisaFree ? "bg-green-50 text-green-800" : "bg-blue-50 text-blue-800"
                            }`}>
                            <span className="shrink-0">{isVisaFree ? "✅" : "🛂"}</span>
                            <p>{country.visaNote}</p>
                        </div>
                    </div>
                </section>

                {/* Popular tours */}
                <section id="tours">
                    <h2 className="mb-5 text-lg font-semibold text-gray-900">
                        Popular tours from {country.name}
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {country.popularTours.map((tour) => {
                            const [title, duration] = tour.split("–");
                            return (
                                <div key={tour} className="group flex items-center justify-between rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm hover:border-blue-300 transition">
                                    <div>
                                        <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600">{title?.trim()}</p>
                                        {duration && <p className="text-xs text-gray-400">{duration.trim()}</p>}
                                    </div>
                                    <span className="text-gray-300 group-hover:text-blue-500 transition">→</span>
                                </div>
                            );
                        })}
                    </div>
                    <p className="mt-3 text-center text-xs text-gray-400">
                        Prices in {country.currency} · Includes accommodation, meals, guide & transfers
                    </p>
                </section>

                {/* FAQs */}
                <section>
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">Frequently asked questions</h2>
                    <div className="rounded-2xl border border-gray-100 bg-white px-6 shadow-sm">
                        {country.faqs.map((faq) => (
                            <details key={faq.question} className="group border-b border-gray-100 py-4 last:border-0">
                                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                                    <span className="text-sm font-medium text-gray-800">{faq.question}</span>
                                    <span className="mt-0.5 shrink-0 text-lg leading-none text-gray-400 group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <p className="mt-3 text-sm leading-relaxed text-gray-500">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="rounded-2xl bg-blue-500 px-8 py-12 text-center">
                    <h2 className="mb-2 text-2xl font-bold text-white">Ready to plan your Bhutan trip?</h2>
                    <p className="mb-7 text-sm text-blue-100">
                        Get a free custom itinerary built around your travel dates and budget.
                    </p>
                    <a href="/support" className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 hover:shadow-md transition">
                        Get a Free Quote
                    </a>
                </section>
            </div>
            <Footer />
        </main>
    );
}