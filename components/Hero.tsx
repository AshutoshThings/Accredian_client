export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-orange-200/40 via-amber-100/40 to-blue-100/30 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex justify-center mb-8 opacity-60">
          <svg width="120" height="24" viewBox="0 0 120 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-400">
             <path d="M10 12C30 12 40 2 60 2C80 2 90 12 110 12" strokeLinecap="round"/>
             <path d="M10 18C30 18 40 8 60 8C80 8 90 18 110 18" strokeLinecap="round"/>
          </svg>
        </div>

        <p className="text-blue-600 font-medium text-sm mb-6 tracking-wide">
          India's Enterprise Learning Platform
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-stone-900 leading-tight mb-6">
          Expertise for all from <br className="hidden sm:block" /> India
        </h1>
        
        <p className="mt-6 text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto font-light">
          Built on proven frameworks. Powered by frontier-class experts. <br className="hidden sm:block" />
          Delivering population-scale impact for your enterprise.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto bg-[#1a1a1a] text-white px-8 py-3.5 rounded-full font-medium hover:bg-black transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            Experience Accredian
          </button>
          <button className="w-full sm:w-auto bg-white text-stone-900 border border-stone-200 px-8 py-3.5 rounded-full font-medium hover:bg-stone-50 transition-colors shadow-sm">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}