import { Check } from "lucide-react";

const PricingCard = ({
    title,
    price,
    features,
    isPopular,
    buttonText,
}: {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
    buttonText?: string;
}) => (
    <div
        className={`relative flex flex-col p-8 rounded-2xl border ${
            isPopular
                ? "border-primary bg-primary text-white shadow-xl scale-105 z-10"
                : "border-slate-200 bg-white text-slate-900 shadow-sm"
        } transition-transform duration-300 hover:-translate-y-1`}
    >
        {isPopular && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold px-4 py-1 rounded-full shadow-md uppercase tracking-wide">
                Most Popular
            </span>
        )}
        <h3
            className={`text-xl font-bold mb-4 ${
                isPopular ? "text-white" : "text-slate-900"
            }`}
        >
            {title}
        </h3>
        <div className="mb-8">
            <span className="text-4xl font-bold">{price}</span>
            {price !== "Custom" && (
                <span
                    className={`text-sm ${
                        isPopular ? "text-purple-100" : "text-slate-500"
                    }`}
                >
                    /mo
                </span>
            )}
        </div>

        <ul className="space-y-4 mb-8 flex-1">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                    <div
                        className={`mt-1 rounded-full p-0.5 ${
                            isPopular
                                ? "bg-white text-primary"
                                : "bg-primary text-white"
                        }`}
                    >
                        <Check size={12} strokeWidth={4} />
                    </div>
                    <span
                        className={`text-sm ${
                            isPopular ? "text-purple-100" : "text-slate-600"
                        }`}
                    >
                        {feature}
                    </span>
                </li>
            ))}
        </ul>

        <a
            href="#contact"
            className={`w-full text-center py-3 rounded-xl font-bold transition-colors ${
                isPopular
                    ? "bg-white text-primary hover:bg-slate-50"
                    : "bg-primary text-white hover:bg-primary/90"
            }`}
        >
            {buttonText || "Get Started"}
        </a>
    </div>
);

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                        Pricing
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Choose the Perfect Plan
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    <PricingCard
                        title="Standart"
                        price="$49"
                        features={[
                            "Up to 10 cameras",
                            "Free remote installation",
                            "Acess to the Lexius App",
                            "Live Shoplifting Noti",
                        ]}
                    />
                    <PricingCard
                        title="Advanced"
                        price="$99"
                        isPopular
                        buttonText="Start Free Trial"
                        features={[
                            "Up to 20 cameras",
                            "Free remote Insallation",
                            "Access to the Lexius App",
                            "Live shoplifting Notifications",
                        ]}
                    />
                    <PricingCard
                        title="Enterprise"
                        price="Custom"
                        buttonText="Contact Sales"
                        features={[
                            "Unlimited amount of cameras",
                            "Live shoplifting notifications",
                            "Custom integrations",
                            "24/7 Support",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};
