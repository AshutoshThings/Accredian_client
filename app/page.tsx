import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Expertise from "@/components/Expertise";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] font-sans selection:bg-orange-100 selection:text-stone-900 relative">
      
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Stats />
        <Expertise />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}