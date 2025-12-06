import { useState, type ChangeEvent, type FormEvent } from "react";
import {
    AlertCircle,
    CheckCircle2,
    Loader2,
    Mail,
    Phone,
} from "lucide-react";

type FormFields = {
    name: string;
    company: string;
    email: string;
    message: string;
};

const initialFormState: FormFields = {
    name: "",
    company: "",
    email: "",
    message: "",
};

const CONTACT_EMAIL =
    import.meta.env.VITE_CONTACT_EMAIL || "contact@sentra.com";

export const Footer = () => {
    const [formData, setFormData] = useState<FormFields>(initialFormState);
    const [errors, setErrors] = useState<
        Partial<Record<keyof FormFields, string>>
    >({});
    const [status, setStatus] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");
    const [feedback, setFeedback] = useState("");

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        const field = name as keyof FormFields;

        setFormData((prev) => ({ ...prev, [field]: value }));
        if (status !== "idle") {
            setStatus("idle");
            setFeedback("");
        }
        setErrors((prev) => {
            if (!prev[field]) return prev;
            const next = { ...prev };
            delete next[field];
            return next;
        });
    };

    const validateForm = () => {
        const nextErrors: Partial<Record<keyof FormFields, string>> = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) nextErrors.name = "Name is required";
        if (!formData.email.trim()) {
            nextErrors.email = "Email is required";
        } else if (!emailPattern.test(formData.email)) {
            nextErrors.email = "Enter a valid email";
        }
        if (!formData.message.trim())
            nextErrors.message = "Message cannot be empty";

        return nextErrors;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validation = validateForm();
        setErrors(validation);

        if (Object.keys(validation).length) {
            setStatus("idle");
            return;
        }

        setStatus("submitting");
        setFeedback("");

        const subject = `Demo request from ${
            formData.name || "website visitor"
        }`;
        const body = `Имя: ${formData.name}\nКомпания: ${
            formData.company || "-"
        }\nEmail: ${formData.email}\n\nСообщение:\n${formData.message}`;
        const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        setStatus("success");
        setFeedback(
            "Мы подготовили письмо в вашем почтовом клиенте. Проверьте и нажмите «Отправить»."
        );
        setFormData(initialFormState);
    };

    const inputClasses = (hasError: boolean) =>
        `w-full px-4 py-2 rounded-lg border outline-none transition-all focus:ring-2 ${
            hasError
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-slate-200 focus:ring-primary focus:border-primary"
        }`;

    return (
        <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    {/* Contact Form Area */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">
                                Get in Touch
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 ">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">
                                            Email:
                                        </p>
                                        <p className="font-medium">
                                            esengalidanial@gmail.com
                                        </p>
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
                                        <p className="font-medium">
                                            +7 (700) 500-1083
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-2xl p-8 text-slate-900">
                        <div
                            className="mb-6 space-y-3"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {status === "success" && (
                                <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                                    <CheckCircle2 className="h-5 w-5 mt-0.5" />
                                    <div>
                                        <p className="font-semibold">
                                            Message sent
                                        </p>
                                        <p className="text-sm text-green-700">
                                            {feedback}
                                        </p>
                                    </div>
                                </div>
                            )}
                            {status === "error" && (
                                <div
                                    className="flex items-start gap-3 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-rose-800"
                                    role="alert"
                                >
                                    <AlertCircle className="h-5 w-5 mt-0.5" />
                                    <div>
                                        <p className="font-semibold">
                                            Something went wrong
                                        </p>
                                        <p className="text-sm text-rose-700">
                                            {feedback}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <form
                            className="space-y-4"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClasses(
                                            Boolean(errors.name)
                                        )}
                                        placeholder="John Doe"
                                        required
                                        aria-invalid={Boolean(errors.name)}
                                        aria-describedby={
                                            errors.name
                                                ? "contact-name-error"
                                                : undefined
                                        }
                                    />
                                    {errors.name && (
                                        <p
                                            id="contact-name-error"
                                            className="mt-1 text-sm text-red-500"
                                        >
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className={inputClasses(false)}
                                        placeholder="Company Inc."
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={inputClasses(
                                        Boolean(errors.email)
                                    )}
                                    placeholder="john@company.com"
                                    required
                                    aria-invalid={Boolean(errors.email)}
                                    aria-describedby={
                                        errors.email
                                            ? "contact-email-error"
                                            : undefined
                                    }
                                />
                                {errors.email && (
                                    <p
                                        id="contact-email-error"
                                        className="mt-1 text-sm text-red-500"
                                    >
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={inputClasses(
                                        Boolean(errors.message)
                                    )}
                                    placeholder="How can we help?"
                                    required
                                    aria-invalid={Boolean(errors.message)}
                                    aria-describedby={
                                        errors.message
                                            ? "contact-message-error"
                                            : undefined
                                    }
                                ></textarea>
                                {errors.message && (
                                    <p
                                        id="contact-message-error"
                                        className="mt-1 text-sm text-red-500"
                                    >
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <div className="text-sm text-slate-500">
                                We respond within 1 business day. You can also
                                reach us directly at contact@sentra.com.
                            </div>
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                {status === "submitting" ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Request Demo"
                                )}
                            </button>
                        </form>
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
                        Ｄ 2025 Sentra. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};
