import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Brain, Bell, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Real-Time Detection",
    description: "Identify threats and suspicious activity instantly with live monitoring and advanced visual recognition.",
    icon: Eye,
    color: "bg-blue-500"
  },
  {
    title: "Behavioral Analytics",
    description: "Recognize patterns and anomalies in customer behavior to predict and prevent potential theft before it occurs.",
    icon: Brain,
    color: "bg-purple-500"
  },
  {
    title: "Smart Alerts",
    description: "Receive instant, actionable notifications directly to your devices or security team when a threat is detected.",
    icon: Bell,
    color: "bg-rose-500"
  },
  {
    title: "Inventory Protection",
    description: "Safeguard high-value assets and reduce shrinkage with integrated inventory tracking and loss prevention tools.",
    icon: Shield,
    color: "bg-emerald-500"
  }
];

export const Solutions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure scroll triggers are recalculated
      ScrollTrigger.refresh();

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        // Stacking Animation Logic
        // We want even the last card to fold/stack when the Next section arrives.
        const nextCard = cardsRef.current[index + 1] || document.querySelector('#about');

        if(nextCard) {
            gsap.to(card.querySelector('.content-wrapper'), {
                scale: 1 - (0.05 * (solutions.length - index)), // Progressive scaling
                y: -10, // Slight upward shift for depth
                transformOrigin: "center top",
                ease: "none",
                scrollTrigger: {
                    trigger: nextCard,
                    start: "top bottom",     // When top of next card (or section) hits bottom of viewport
                    end: "top 20%",          // When top of next card (or section) hits the sticky area
                    scrub: true,
                }
            });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="solutions" className="py-20 bg-slate-50" ref={containerRef}>
      <div className="container mx-auto px-6 mb-20 text-center">
        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Our Solutions</h2>
        <h3 className="text-4xl font-bold text-slate-900">Comprehensive Protection</h3>
      </div>

      <div className="container mx-auto px-6 pb-40">
        {solutions.map((solution, index) => (
          <div 
            key={index}
            ref={el => { cardsRef.current[index] = el }}
            className="solution-card sticky top-[15%] mb-[20vh] w-full max-w-5xl mx-auto last:mb-0"
            style={{ 
                zIndex: index + 1 
            }}
          >
            <div className="content-wrapper bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-12 h-[400px] flex flex-col justify-center items-center text-center will-change-transform">
                <div className={`w-20 h-20 ${solution.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-8 text-${solution.color.split('-')[1]}-600`}>
                  <solution.icon size={40} className={`text-${solution.color.split('-')[1]}-600`} />
                </div>
                <h4 className="text-4xl font-bold text-slate-900 mb-6">{solution.title}</h4>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">{solution.description}</p>
               
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
