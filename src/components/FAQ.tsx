import { useState } from 'react';
import { ChevronDown, Lock, HelpCircle } from 'lucide-react';

const FaqItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
            <button 
                onClick={onClick}
                className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-slate-900 hover:text-primary transition-colors"
            >
                <span className="flex items-center gap-3">
                    {question.includes("secure") ? <Lock size={18} className="text-primary" /> : <HelpCircle size={18} className="text-slate-400" />}
                    {question}
                </span>
                <ChevronDown size={20} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
        q: "How accurate is the detection?",
        a: "Sentra utilizes advanced deep learning algorithms and computer vision to achieve over 99% detection accuracy in real-time scenarios, minimizing false positives and effectively identifying potential theft incidents."
    },
    {
        q: "What hardware do I need?",
        a: "Our system works with most modern IP cameras. If you have an existing CCTV setup, we can likely integrate directly. For new installations, we provide a list of recommended hardware partners."
    },
    {
        q: "How long does setup take?",
        a: "Remote integration can be completed in as little as 30 minutes per location. Full on-site hardware installation varies by store size but typically takes 1-2 days."
    },
    {
        q: "Is my data secure?",
        a: "Yes. All video feeds are processed locally on the edge or via encrypted streams. We use bank-grade encryption for all data storage and transmission, adhering to strict privacy compliance standards."
    },
    {
        q: "Do you offer 24/7 support?",
        a: "Absolutely. Our Enterprise and Professional plans include round-the-clock support from our dedicated technical team to ensure your system is always protecting your assets."
    },
    {
        q: "Can I try before buying?",
        a: "We offer a 14-day pilot program for qualified businesses. This allows you to test the detection capabilities in your own environment before committing to a subscription."
    }
  ];

  return (
    <section className="py-24 bg-white ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto " id='FAQ'>
            <div className="space-y-4">
                {faqs.slice(0, 3).map((faq, i) => (
                    <FaqItem 
                        key={i} 
                        question={faq.q} 
                        answer={faq.a} 
                        isOpen={openIndex === i}
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    />
                ))}
            </div>
            <div className="space-y-4">
                {faqs.slice(3, 6).map((faq, i) => (
                    <FaqItem 
                        key={i + 3} 
                        question={faq.q} 
                        answer={faq.a} 
                        isOpen={openIndex === i + 3}
                        onClick={() => setOpenIndex(openIndex === i + 3 ? null : i + 3)}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
