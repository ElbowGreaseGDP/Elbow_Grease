import ScrollSection from "../components/ScrollSection";

const items = [ /* same content, no changes required */];

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
