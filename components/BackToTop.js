// components/BackToTop.js
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) return null;
    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-brand-primary hover:bg-brand-secondary text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-200"
            aria-label="Back to top"
        >
            <FaArrowUp size={24} />
        </button>
    );
}
