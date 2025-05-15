import { motion, AnimatePresence } from "framer-motion";

export default function ImageModal({ src, onClose }) {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.img
                    src={src}
                    alt="Expanded render"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    className="max-w-3xl max-h-[80vh] rounded-lg shadow-xl"
                />
            </motion.div>
        </AnimatePresence>
    );
}
