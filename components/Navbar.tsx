"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-6xl bg-white/70 backdrop-blur-md border border-stone-200/50 rounded-full px-6 py-3 shadow-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight text-stone-900">accredian</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wider font-medium">
            <a href="#stats" className="text-stone-600 hover:text-stone-900 transition-colors">Stats</a>
            <a href="#expertise" className="text-stone-600 hover:text-stone-900 transition-colors">Expertise</a>
            <a href="#faq" className="text-stone-600 hover:text-stone-900 transition-colors">FAQs</a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="bg-stone-900 text-[#FDFBF7] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-md shadow-stone-900/10">
              Experience Accredian
            </button>
            <button className="bg-white text-stone-900 border border-stone-200 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-stone-50 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-stone-200/50 pb-2 flex flex-col space-y-4">
            <a href="#stats" className="text-stone-600 text-sm uppercase tracking-wider text-center block">Stats</a>
            <a href="#expertise" className="text-stone-600 text-sm uppercase tracking-wider text-center block">Expertise</a>
            <a href="#faq" className="text-stone-600 text-sm uppercase tracking-wider text-center block">FAQs</a>
            <div className="flex flex-col gap-2 pt-2">
              <button className="w-full bg-stone-900 text-[#FDFBF7] px-6 py-3 rounded-full text-sm font-medium">
                Experience Accredian
              </button>
              <button className="w-full bg-white text-stone-900 border border-stone-200 px-6 py-3 rounded-full text-sm font-medium">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}