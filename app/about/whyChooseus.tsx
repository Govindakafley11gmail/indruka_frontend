import {
  Shield,
  Users,
  MapPin,
  Headphones,
  Star,
  Globe,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Fully Licensed & Certified",
    description:
      "We are officially licensed by the Tourism Council of Bhutan and a proud member of the Association of Bhutanese Tour Operators (ABTO).",
  },
  {
    icon: Users,
    title: "Expert Local Guides",
    description:
      "Our certified guides bring deep knowledge of Bhutan's culture, history, and nature — providing genuine insights beyond the guidebook.",
  },
  {
    icon: MapPin,
    title: "Customized Itineraries",
    description:
      "From luxury resorts to authentic homestays, we tailor every trip to your interests, budget, and travel style.",
  },
  {
    icon: Headphones,
    title: "24/7 On-Ground Support",
    description:
      "Our team is reachable around the clock during your journey, ensuring peace of mind at every step of your adventure.",
  },
  {
    icon: Star,
    title: "Authentic Experiences",
    description:
      "We go beyond tourist spots — connecting you with local families, festivals, monasteries, and the real spirit of Bhutan.",
  },
  {
    icon: Globe,
    title: "Seamless Visa & Permits",
    description:
      "We handle all travel documentation, Sustainable Development Fee (SDF), visa processing, and permit arrangements on your behalf.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Book Bhutan Tour Difference
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We combine local expertise with genuine hospitality to deliver travel
            experiences that stay with you long after you return home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <Icon className="text-blue-600" size={22} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}