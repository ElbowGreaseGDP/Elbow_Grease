export default function ResearchItem({ title, description, link }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <h4 className="text-xl font-bold mb-2 text-brand-primary">{title}</h4>
            <p className="text-gray-600 mb-4">{description}</p>
            {link && (
                <a href={link} className="text-brand-secondary font-medium hover:underline">
                    Read more
                </a>
            )}
        </div>
    );
}
