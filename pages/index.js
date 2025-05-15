import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageModal from "../components/ImageModal";

const galleryImages = [
    "gallery/BB_and_freind.png",
    "gallery/Big_bertha_Label.png",
    "gallery/BB_Noback.png",
    // add more as needed
];

export default function Home() {
    const [selected, setSelected] = useState(null);

    return (
        <>
            {/* Hero */}
            <section
                className="relative h-[calc(100vh-4rem)] bg-cover bg-center font-tech"
                style={{ backgroundImage: "url('gallery/BB_Noback.png')" }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Wear Simulator for Elbow Arthroplasty
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-200 max-w-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Explore our cutting-edge prosthesis wear testing platform through interactive 3D
                        simulation and high-fidelity renderings.
                    </motion.p>
                    <Link
                        href="/simulator"
                        className="mt-8 inline-block bg-brand-primary hover:bg-brand-secondary text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
                    >
                        View Simulator
                    </Link>
                </div>
            </section>

            {/* Blended & Clickable Gallery */}
            <section
                id="gallery"
                className="relative -mt-24 pt-24 bg-white px-4"
            >
                <h2 className="text-4xl font-bold text-center text-brand-primary mb-10 font-tech">
                    Rendered Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {galleryImages.map((src) => (
                        <motion.div
                            key={src}
                            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                            onClick={() => setSelected(src)}
                        >
                            <img
                                src={src}
                                alt="Render"
                                className="w-full h-64 object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <ImageModal src={selected} onClose={() => setSelected(null)} />
                )}
            </AnimatePresence>
        </>
    );
}
