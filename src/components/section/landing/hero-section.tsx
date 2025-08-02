"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const textContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.3,
        },
    },
};

const floatIn: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 12,
        },
    },
};

export default function HeroSection() {
    return (
        <section className="relative w-full h-[90vh] md:h-screen overflow-hidden flex items-center justify-center px-4">
            {/* Main content */}
            <motion.div
                className="z-10 flex flex-col items-center text-center gap-6 md:gap-10 max-w-2xl"
                variants={textContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.p
                    className="mt-4 text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-black/80 leading-tight"
                    variants={floatIn}
                >
                    Where Modern Meets Tradition.
                </motion.p>

                <motion.p
                    className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-black/70 max-w-xl"
                    variants={floatIn}
                >
                    Where elegance meets modern grace. Crafted by women, for women who define their own legacy.
                </motion.p>

                <motion.button
                    className="mt-6 sm:mt-8 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base bg-black/80 text-white shadow-lg hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variants={floatIn}
                >
                    <a href="#coming-soon">Explore the Collection</a>
                </motion.button>
            </motion.div>
        </section>
    );
}
