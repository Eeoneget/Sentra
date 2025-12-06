import { Building2 } from "lucide-react";

export const About = () => {
    return (
        <section
            id="about"
            className="py-24 bg-slate-900 text-white overflow-hidden"
        >
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-accent uppercase tracking-wider mb-2">
                            About Us
                        </h2>

                        <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                            Sentra builds intelligent solutions for theft
                            prevention. We combine computer vision, analytics,
                            and modern design to deliver a simple, effective,
                            and accessible security system for businesses. Our
                            mission is to make protection smart, transparent,
                            and effortless for everyone.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Hero image */}
                        <div className="relative z-10 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl p-3 border border-slate-700 shadow-2xl overflow-hidden">
                            <div className="aspect-square relative overflow-hidden rounded-[28px]">
                                <img
                                    src="/logo-full.jpg"
                                    alt="Masked intruder in a retail environment"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-slate-900/40 to-primary/50"></div>
                                <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_35%)]"></div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Building2
                                        size={180}
                                        className="text-primary/20 animate-pulse duration-[3000ms]"
                                    />
                                </div>

                                {/* Decorative glowing lines */}
                                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-primary/30"></div>
                                <div className="absolute top-2/4 left-0 w-full h-[1px] bg-primary/30"></div>
                                <div className="absolute top-3/4 left-0 w-full h-[1px] bg-primary/30"></div>
                                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-primary/30"></div>
                                <div className="absolute top-0 left-2/4 w-[1px] h-full bg-primary/30"></div>
                                <div className="absolute top-0 left-3/4 w-[1px] h-full bg-primary/30"></div>
                            </div>
                        </div>
                        <div className="absolute top-10 -right-10 w-72 h-72 bg-primary rounded-full blur-[100px] opacity-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
