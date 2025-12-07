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
                        <div className="relative  overflow-hidden">
                            <div className="aspect-square relative overflow-hidden rounded-[28px]">
                                <img
                                    src="/logo-changed.jpg"
                                    alt="Masked intruder in a retail environment"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    loading="lazy"
                                />

                            </div>
                        </div>
                        <div className="absolute top-10 -right-10 w-72 h-72 bg-primary rounded-full blur-[100px] opacity-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
