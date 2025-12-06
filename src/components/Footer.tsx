import { Mail, Phone } from "lucide-react";

const CONTACT_EMAIL =
    import.meta.env.VITE_CONTACT_EMAIL || "esengalidanial@gmail.com";
const CONTACT_PHONE = "+7(700) 500 10-83";
const CONTACT_PHONE_LINK = "tel:+77005001083";

export const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">
                                Get in Touch
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">
                                            Email:
                                        </p>
                                        <a
                                            href={`mailto:${CONTACT_EMAIL}`}
                                            className="font-medium hover:text-primary transition-colors"
                                        >
                                            {CONTACT_EMAIL}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">
                                            Phone:
                                        </p>
                                        <a
                                            href={CONTACT_PHONE_LINK}
                                            className="font-medium hover:text-primary transition-colors"
                                        >
                                            {CONTACT_PHONE}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-xl border border-slate-100">
                        <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            Reach out
                        </div>
                        <h4 className="text-2xl font-bold mb-3">
                            Talk with our team
                        </h4>
                        <p className="text-slate-600 mb-6">
                            Contact us in a convenient way: write to the post or
                            call, and we will answer within 1 working day.
                        </p>
                        <div className="flex flex-col gap-3">
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-white font-semibold hover:bg-primary/90 transition-colors"
                            >
                                <Mail size={18} />
                                Email us
                            </a>
                            <a
                                href={CONTACT_PHONE_LINK}
                                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-slate-900 font-semibold hover:border-primary hover:text-primary transition-colors"
                            >
                                <Phone size={18} />
                                Call now
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white">
                        <img
                            src="/logo-new.png"
                            alt="Sentra"
                            className="h-6 object-contain"
                        />
                    </div>
                    <div className="text-sm text-slate-400">
                        (c) 2025 Sentra. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};
