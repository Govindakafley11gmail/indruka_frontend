const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "5,000+", label: "Happy Travelers" },
  { value: "50+", label: "Tour Packages" },
  { value: "20+", label: "Countries Represented" },
];

export default function StatsSection() {
  return (
    <section className="bg-blue-700 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}