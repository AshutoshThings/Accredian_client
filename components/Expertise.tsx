import { Cpu, Lightbulb, TrendingUp, BarChart, Settings, ShieldCheck } from "lucide-react";

const expertiseData = [
  { id: 1, title: "Gen-AI Mastery", icon: <Cpu className="w-6 h-6 text-stone-700" /> },
  { id: 2, title: "Product Innovation", icon: <Lightbulb className="w-6 h-6 text-stone-700" /> },
  { id: 3, title: "Leadership Elevation", icon: <TrendingUp className="w-6 h-6 text-stone-700" /> },
  { id: 4, title: "Tech & Data Insights", icon: <BarChart className="w-6 h-6 text-stone-700" /> },
  { id: 5, title: "Operations Excellence", icon: <Settings className="w-6 h-6 text-stone-700" /> },
  { id: 6, title: "Fintech Lab", icon: <ShieldCheck className="w-6 h-6 text-stone-700" /> },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-stone-900 mb-4">Our Domain Expertise</h2>
          <p className="text-stone-500 max-w-2xl mx-auto font-light text-lg">
            Specialized programs designed to fuel innovation across every sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white p-8 rounded-[2rem] border border-stone-200/60 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium text-stone-900">{item.title}</h3>
              <div className="mt-4 text-stone-400 text-sm flex items-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Explore Program <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}