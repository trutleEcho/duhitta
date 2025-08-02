"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import WhatsappIcon from "@/assets/icons/whatsapp-icon";

const floatIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 10,
        },
    },
};

const textContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
        },
    },
};

export default function ComingSoon() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" }); // fire once, slight offset
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <section
            id="coming-soon"
            ref={ref}
            className="relative w-full h-screen flex items-center justify-center overflow-hidden px-4"
        >
            <motion.div
                className="z-10 flex flex-col items-center text-center"
                variants={textContainer}
                initial="hidden"
                animate={controls}
            >
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold text-black/80 tracking-tight"
                    variants={floatIn}
                >
                    COMING SOON
                </motion.h1>

                <motion.p
                    className="mt-4 text-base md:text-xl text-black/60 max-w-md"
                    variants={floatIn}
                >
                    Stay tuned for something beautiful. We’re almost ready to launch!
                </motion.p>

                <motion.a
                    href="https://wa.me/919011594612" // change this to your number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-green-600/80 text-white font-medium shadow-lg hover:bg-green-700/50 transition-colors"
                    variants={floatIn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <WhatsappIcon/>Chat with us on WhatsApp
                </motion.a>
            </motion.div>
        </section>
    );
}
