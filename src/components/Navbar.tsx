export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src="/logo-new.png"
                        alt="Sentra"
                        className="h-8 object-contain"
                    />
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#solutions"
                        className="text-slate-600 hover:text-primary transition-colors"
                    >
                        Solutions
                    </a>
                    <a
                        href="#features"
                        className="text-slate-600 hover:text-primary transition-colors"
                    >
                        Features
                    </a>
                    <a
                        href="#losses"
                        className="text-slate-600 hover:text-primary transition-colors"
                    >
                        Losses
                    </a>
                    
                    <a
                        href="#FAQ"
                        className="text-slate-600 hover:text-primary transition-colors"
                    >
                        FAQ
                    </a>
                    
                    <a
                        href="#pricing"
                        className="text-slate-600 hover:text-primary transition-colors"
                    >
                        Pricing
                    </a>
                    <a
                        href="#about"
                        className="text-slate-600 hover:text-primary transition-colors"
                    >
                        About
                    </a>
                </div>

                <a
                    href="#contact"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                    Get a Demo
                </a>
            </div>
        </nav>
    );
};
