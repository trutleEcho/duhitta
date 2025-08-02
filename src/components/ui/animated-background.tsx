"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  children: ReactNode;
}

export default function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  return (
      <div className="relative w-full h-full overflow-y-scroll overflow-x-hidden">
        {/* Animated Gradient Background */}
        <motion.div
            className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_30%,#ffdee9_0%,#b5fffc_100%)] blur-2xl opacity-40 animate-gradientMove"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
        />

        {/* Foreground content */}
        <div className="relative z-10">{children}</div>
      </div>
  );
}
