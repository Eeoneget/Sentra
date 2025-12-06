
import { Camera, Monitor, ShieldAlert } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Three Simple Steps to Security</h3>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -z-10 transform -translate-y-1/2"></div>

            <div className="text-center group">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-primary/10 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg group-hover:border-primary transition-colors duration-300">
                    <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center absolute -top-2 -right-2 font-bold text-lg shadow-md">1</div>
                    <Camera size={40} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Install</h4>
                <p className="text-slate-600 px-4">Quick 30-minute setup with existing cameras or our smart hardware.</p>
            </div>

            <div className="text-center group">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-primary/10 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg group-hover:border-primary transition-colors duration-300">
                    <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center absolute -top-2 -right-2 font-bold text-lg shadow-md">2</div>
                    <Monitor size={40} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Monitor</h4>
                <p className="text-slate-600 px-4">AI analyzes behavior in real-time 24/7 to detect anomalies.</p>
            </div>

            <div className="text-center group">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-primary/10 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg group-hover:border-primary transition-colors duration-300">
                    <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center absolute -top-2 -right-2 font-bold text-lg shadow-md">3</div>
                    <ShieldAlert size={40} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Protect</h4>
                <p className="text-slate-600 px-4">Instant alerts prevent theft before it happens, saving revenue.</p>
            </div>
        </div>
      </div>
    </section>
  );
};
