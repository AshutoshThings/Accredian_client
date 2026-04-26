export default function Stats() {
  const stats = [
    { value: "10K+", label: "Professionals Trained" },
    { value: "200+", label: "Sessions Delivered" },
    { value: "5K+", label: "Active Learners" },
  ];

  return (
    <section id="stats" className="py-16 border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-stone-400 font-semibold mb-12">
          Enterprises Build With Accredian
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-serif text-stone-900 mb-2">{stat.value}</div>
              <p className="text-sm text-stone-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}