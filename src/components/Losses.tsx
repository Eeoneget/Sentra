type Slice = {
    label: string;
    value: number;
    color: string;
};

const slices: Slice[] = [
    { label: "External Theft", value: 37, color: "#22d3ee" },
    { label: "Internal Theft", value: 28.5, color: "#0ea5e9" },
    { label: "Process/Control Failure", value: 25.7, color: "#2563eb" },
    { label: "Unknown Loss", value: 7.7, color: "#1e3a8a" },
    { label: "Other Sources", value: 1.2, color: "#0f172a" },
];

const formatSlices = (data: Slice[]) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let current = 0;

    return data
        .map((item) => {
            const start = (current / total) * 100;
            const end = ((current + item.value) / total) * 100;
            current += item.value;
            return `${item.color} ${start}% ${end}%`;
        })
        .join(", ");
};

const donutStyle = {
    backgroundImage: `conic-gradient(${formatSlices(slices)})`,
};

export const Losses = () => {
    return (
        <section
            id="losses"
            className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-900 to-blue-900 py-20 text-white"
        >
            <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_25%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(124,58,237,0.18),transparent_35%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.12),transparent_30%)]"></div>
            </div>

            <div className="container relative mx-auto grid items-center gap-12 px-6 lg:grid-cols-2">
                <div className="space-y-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        The cost of theft
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Massive retail losses
                    </h2>
                    <p className="text-lg text-slate-200">
                        According to the National Retail Federation: Stores lost
                        $112.1 billion to retail theft in 2022; projections
                        indicate shoplifting could cost retailers over $140
                        billion in 2025.
                    </p>

                    <div className="grid gap-3 rounded-2xl bg-white/5 p-6 backdrop-blur">
                        {slices.map((slice) => (
                            <div
                                key={slice.label}
                                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 px-4 py-3"
                            >
                                <span
                                    className="h-3 w-3 rounded-full"
                                    style={{ backgroundColor: slice.color }}
                                ></span>
                                <div className="flex-1">
                                    <p className="font-semibold">
                                        {slice.label}
                                    </p>
                                </div>
                                <span className="text-slate-200 font-semibold">
                                    {slice.value}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-10 rounded-full bg-primary/30 blur-3xl"></div>
                    <div className="relative mx-auto aspect-square w-full max-w-md rounded-full border border-white/10 bg-slate-950/40 p-6 shadow-2xl backdrop-blur">
                        <div
                            className="relative h-full w-full rounded-full border border-white/10"
                            style={donutStyle}
                        >
                            <div className="absolute inset-6 flex items-center justify-center rounded-full bg-slate-950/90 text-center border border-white/10 shadow-inner">
                                <div className="space-y-1 px-6">
                                    <p className="text-xs uppercase tracking-wide text-slate-400">
                                        Retail losses 2022
                                    </p>
                                    <p className="text-3xl font-bold">
                                        $112.1B
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        Projected $140B in 2025
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
