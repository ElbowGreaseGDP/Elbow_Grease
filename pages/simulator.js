import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ModelViewer from "../components/ModelViewer";

export default function Simulator() {
    const containerRef = useRef(null);
    const [autoRotate, setAutoRotate] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [canFullscreen, setCanFullscreen] = useState(false);

    // detect fullscreen API support
    useEffect(() => {
        const el = containerRef.current;
        if (
            el &&
            (el.requestFullscreen ||
                el.webkitRequestFullscreen ||
                el.mozRequestFullScreen ||
                el.msRequestFullscreen)
        ) {
            setCanFullscreen(true);
        }
    }, []);

    // track fullscreen state
    useEffect(() => {
        const handler = () =>
            setIsFullscreen(
                Boolean(
                    document.fullscreenElement ||
                    document.webkitFullscreenElement ||
                    document.mozFullScreenElement ||
                    document.msFullscreenElement
                )
            );
        document.addEventListener("fullscreenchange", handler);
        document.addEventListener("webkitfullscreenchange", handler);
        document.addEventListener("mozfullscreenchange", handler);
        document.addEventListener("MSFullscreenChange", handler);
        return () => {
            document.removeEventListener("fullscreenchange", handler);
            document.removeEventListener("webkitfullscreenchange", handler);
            document.removeEventListener("mozfullscreenchange", handler);
            document.removeEventListener("MSFullscreenChange", handler);
        };
    }, []);

    const toggleFullscreen = () => {
        const el = containerRef.current;
        if (!el) return;

        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        ) {
            // exit
            const exitFn =
                document.exitFullscreen ||
                document.webkitExitFullscreen ||
                document.mozCancelFullScreen ||
                document.msExitFullscreen;
            exitFn.call(document).catch(console.error);
        } else {
            // enter
            const reqFn =
                el.requestFullscreen ||
                el.webkitRequestFullscreen ||
                el.mozRequestFullScreen ||
                el.msRequestFullscreen;
            reqFn.call(el).catch(console.error);
        }
    };

    return (
        <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center bg-gray-50 pt-8">
            <motion.h1
                className="text-4xl md:text-5xl font-bold text-brand-primary mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                Interactive Simulator
            </motion.h1>

            <div ref={containerRef} className="relative w-full max-w-5xl px-4">
                <ModelViewer
                    src="models/elbow_simulator_v2.glb"
                    poster="models/BB_and_freind.png"
                    autoRotate={autoRotate}
                />

                <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                        onClick={() => setAutoRotate((prev) => !prev)}
                        className="bg-brand-primary hover:bg-brand-secondary text-white px-3 py-1 rounded-md shadow"
                    >
                        {autoRotate ? "Pause Rotate" : "Rotate"}
                    </button>

                    {canFullscreen && (
                        <button
                            onClick={toggleFullscreen}
                            className="bg-brand-primary hover:bg-brand-secondary text-white px-3 py-1 rounded-md shadow"
                        >
                            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
