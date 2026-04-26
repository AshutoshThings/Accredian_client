"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of corporate training programs are offered?",
    answer: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech."
  },
  {
    question: "What domain specializations are available?",
    answer: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI."
  },
  {
    question: "How is the learning experience delivered?",
    answer: "We offer flexible program delivery tailored to your needs, including live online sessions, in-person workshops, and hybrid learning models driven by expert practitioners."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white/50 border-t border-stone-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-stone-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-stone-200 last:border-0 transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 bg-transparent text-left group"
              >
                <span className="font-serif text-xl text-stone-800 group-hover:text-stone-600 transition-colors">{faq.question}</span>
                <span className="ml-4 flex-shrink-0 text-stone-400 p-2 rounded-full border border-stone-200 group-hover:bg-stone-50 transition-colors">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-48 opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-stone-500 font-light leading-relaxed pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}