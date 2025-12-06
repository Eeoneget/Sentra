import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Play, ShieldCheck, Clock, Store, X } from 'lucide-react';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 15; // Reduced multiplier from 20 to 15 for smoother feel
      const y = (clientY / window.innerHeight - 0.5) * 15;

      gsap.to(imageRef.current, {
        rotateY: x,
        rotateX: -y,
        ease: 'power2.out',
        duration: 1,
        transformPerspective: 1000,
        overwrite: "auto" // Ensure new tweens overwrite old ones
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            AI THEFT <span className="text-primary">PREVENTION</span>
            <br />
            <span className="text-2xl md:text-4xl font-medium text-slate-500 block mt-4">
              See Everything. Miss Nothing.
            </span>
          </h1>

          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40">
              Book Demo
            </button>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2"
            >
              <Play size={20} className="text-primary" />
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 text-primary mb-1">
                <ShieldCheck size={20} />
                <span className="font-bold text-2xl">99.9%</span>
              </div>
              <p className="text-sm text-slate-600">Detection Accuracy</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 text-primary mb-1">
                <Clock size={20} />
                <span className="font-bold text-2xl">0.2s</span>
              </div>
              <p className="text-sm text-slate-600">Response Time</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 text-primary mb-1">
                <Store size={20} />
                <span className="font-bold text-2xl">15k+</span>
              </div>
              <p className="text-sm text-slate-600">Stores Protected</p>
            </div>
          </div>
        </div>

        <div className="relative" ref={heroRef}>
          <div 
            ref={imageRef}
            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-slate-900 aspect-[4/3]"
          >
             {/* Hero visual with real image */}
             <div className="absolute inset-0">
                <img
                  src="/hero-store.png"
                  alt="Smart security monitoring a retail floor"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
             </div>
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="grid grid-cols-4 grid-rows-3 gap-4 p-8 w-full h-full opacity-50 transform -skew-x-12 scale-110">
                   {[...Array(12)].map((_, i) => (
                     <div key={i} className="bg-primary/20 rounded-lg border border-primary/30 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                   ))}
                </div>
             </div>
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Store size={120} className="text-white/10" />
             </div>
             {/* Scanning Effect */}
             <div className="absolute top-0 left-0 w-full h-2 bg-primary/50 shadow-[0_0_30px_rgba(124,58,237,0.5)] animate-[scan_3s_ease-in-out_infinite]"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
          <div 
            className="absolute inset-0" 
            onClick={() => setIsVideoOpen(false)}
            aria-label="Close modal"
          ></div>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src="/shoplifting.mp4" 
              title="Technology Abstract Background Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
