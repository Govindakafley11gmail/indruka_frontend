import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Licensed by the Tourism Council of Bhutan",
  "Member of the Association of Bhutanese Tour Operators (ABTO)",
  "3+ years of experience in Bhutan travel",
  "Dedicated local guides fluent in multiple languages",
  "Customized cultural, festival, trekking & honeymoon tours",
  "Transparent pricing — no hidden fees",
];

export default function WhoWeAre() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Images */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80"
                alt="Bhutan landscape"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 bg-blue-700 text-white rounded-2xl p-5 shadow-xl max-w-[200px]">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-blue-200 text-sm mt-1">Years Connecting Bhutan to the World</div>
            </div>
            {/* Small accent image */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl overflow-hidden shadow-lg border-4 border-white hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=200&q=80"
                alt="Tiger's Nest Monastery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
              Your Trusted Travel Partner, In Bhutan and Around the World
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Indurka is a newly established travel company with a universal vision. We
              welcome foreign travelers to discover the wonders of Bhutan — its ancient
              monasteries, breathtaking mountain landscapes, and rich living culture. At
              the same time, we help travelers from Bhutan explore the world, from the
              vibrant destinations of India and China to the iconic cities of Europe and
              beyond.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you are a traveler coming to experience Bhutan for the first time
              or a Bhutanese explorer heading out into the world, we are here for you.
              We work with trusted local partners, guides, and hospitality providers
              across every destination to ensure your journey is smooth, meaningful, and
              truly memorable — crafting each itinerary personally to suit your interests,
              pace, and budget.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}