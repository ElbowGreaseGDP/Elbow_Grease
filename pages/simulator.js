import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ModelViewer from "../components/ModelViewer";

export default function Simulator() {
    const containerRef = useRef(null);
    const [autoRotate, setAutoRotate] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [canFullscreen, setCanFullscreen] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (el && (el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen)) {
            setCanFullscreen(true);
        }
    }, []);

    const toggleFullscreen = () => {
        const el = containerRef.current;
        if (!el) return;
        const exitFn = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
        const reqFn = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        if (document.fullscreenElement) exitFn.call(document);
        else reqFn.call(el);
    };

    return (
        <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center bg-gray-50 pt-8">
            <motion.h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
                Interactive Simulator
            </motion.h1>
            <div ref={containerRef} className="relative w-full max-w-5xl px-4">
                <ModelViewer
                    src="/Elbow_Grease/models/elbow_simulator_v2.glb"
                    poster="/Elbow_Grease/models/BB_and_freind.png"
                    autoRotate={autoRotate}
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                    <button onClick={() => setAutoRotate((prev) => !prev)} className="bg-brand-primary text-white px-3 py-1 rounded-md shadow">
                        {autoRotate ? "Pause Rotate" : "Rotate"}
                    </button>
                    {canFullscreen && (
                        <button onClick={toggleFullscreen} className="bg-brand-primary text-white px-3 py-1 rounded-md shadow">
                            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
