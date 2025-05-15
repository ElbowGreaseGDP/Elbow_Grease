import ScrollSection from "../components/ScrollSection";

const items = [
    {
        title: "Background & Standards",
        description:
            "Total Elbow Arthroplasty currently falls outside existing ISO wear-testing standards (which cover hip, knee, spine), despite ASTM F2887-17 mandating wear tests for polymeric components—underscoring the need for a custom TEA simulator.",
        link: "#background",
    },
    {
        title: "Commercial Simulator Survey",
        description:
            "We reviewed market-leading rigs (ProSim, MTS Bionix®, EndoLab, AMTI Force 5) to inform our design: modular multi-rig architectures, adaptive hydraulic control, multi-axis load cells, and fluid encapsulation mechanisms.",
        link: "#commercial",
    },
    {
        title: "Academic Adaptations",
        description:
            "Researchers have adapted 6-DOF VIVO simulators for TEA, applying flexion-extension (20–120°) and varus-valgus loading protocols up to 1,250 N and 12 Nm, revealing bushing wear modes under distinct joint reaction force profiles.",
        link: "#academic",
    },
    {
        title: "Simulation Protocol",
        description:
            "Our prototype targets ~1,400 cycles/day at 1 Hz (incorporating FE and PS motions) to simulate 10–20 years of elbow use in just 2–4 months—matching industry benchmarks and avoiding non-physiological overheating.",
        link: "#protocol",
    },
    {
        title: "Design Specifications",
        description:
            "Derived from our PDS: FE 0–140°, PS ±90°, VV ±3.5°; axial loads up to 2,094 N; synovial-fluid at 37 ± 1 °C flowing ≈100 µL/min; cycle frequency 1 Hz; and high maintainability, safety and reliability targets.",
        link: "#specifications",
    },
    {
        title: "Future Work",
        description:
            "Next steps include full dynamic FEA of machine components, bench and human-factor validation, inline wear-particle sensing, life-cycle analysis, and a modular multi-rig upgrade for higher throughput.",
        link: "#future",
    },
];

export default function Research() {
    return (
        <main className="pt-20 px-4 max-w-6xl mx-auto">
            <h2 className="text-4xl font-tech font-bold text-center text-brand-primary mb-12">
                Research Highlights
            </h2>

            <div className="grid gap-8 sm:grid-cols-2">
                {items.map(({ title, description, link }, idx) => (
                    <ScrollSection key={idx} id={link.slice(1)}>
                        <div className="relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <span className="absolute -top-4 -right-4 w-10 h-10 bg-brand-primary rounded-full"></span>
                            <h3 className="text-2xl font-tech font-semibold mb-3">{title}</h3>
                            <p className="font-sans text-gray-700 leading-relaxed">{description}</p>
                        </div>
                    </ScrollSection>
                ))}
            </div>
        </main>
    );
}
