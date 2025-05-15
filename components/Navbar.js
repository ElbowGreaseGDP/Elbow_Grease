// components/Navbar.js
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => scrollY.onChange(y => setScrolled(y > 50)), [scrollY]);

    const links = [
        { path: "/", label: "Home" },
        { path: "/team", label: "Team" },
        { path: "/research", label: "Research" },
        { path: "/simulator", label: "Simulator" },
        { path: "/#gallery", label: "Gallery" },
    ];

    return (
        <motion.nav
            initial={false}
            animate={{
                backgroundColor: scrolled
                    ? "rgba(223,216,204,0.8)"
                    : "rgba(127,132,219,0.4)"
            }}
            className="fixed top-0 w-full h-16 backdrop-blur-md border-b transition-colors z-50"
        >
            <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image src="/Elbow_Grease/logo.png" alt="Logo" width={120} height={48} />
                </Link>
                <div className="flex space-x-4 text-brand-primary font-medium">
                    {links.map(({ path, label }) => (
                        <Link
                            key={label}
                            href={path}
                            className={`
                                relative px-3 py-1 rounded-md transition-transform duration-200 ease-out
                                hover:scale-110 hover:text-pink-500
                                focus:scale-110 focus:text-pink-500 focus:outline-none
                                active:scale-95 active:text-pink-500
                            `}
                        >
                            {label}
                            <span className="
                                absolute left-0 right-0 bottom-0 h-0.5 bg-pink-500
                                scale-x-0 origin-left transition-transform duration-200 ease-out
                                hover:scale-x-100 focus:scale-x-100 active:scale-x-100
                            " />
                        </Link>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
