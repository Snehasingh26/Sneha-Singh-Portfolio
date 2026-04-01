"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  // By placing this overlay absolutely over the 400vh container, we can track scroll within it
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Opacity transforms for each section
  // Section 1: 0% -> 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: 25% -> 45%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.35], [50, 0]);

  // Section 3: 50% -> 70%
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.65], [50, 0]);

  // Section 4: 75% -> 100%
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.75, 0.85], [50, 0]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full z-10 pointer-events-none" style={{ height: "400vh" }}>
      <div className="fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center p-8 text-center text-white">

        {/* Section 1 */}
        <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute flex flex-col items-center justify-center w-full max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 gradient-text drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Sneha Singh
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-white/80">
            B.Tech CSE Student | <strong className="font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">A tech enthusiast with a learning mindset</strong>
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute flex flex-col items-center justify-center w-full max-w-3xl px-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
            "I enjoy exploring technology and building solutions that solve real-world problems."
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute flex flex-col items-center justify-center w-full max-w-3xl px-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg text-white/90">
            "I am continuously learning and growing across development and data analytics."
          </h2>
        </motion.div>

        {/* Section 4 */}
        <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute flex flex-col items-center justify-center w-full px-4 pt-32">
          <p className="text-xl md:text-3xl tracking-widest uppercase font-light text-white/60 mb-6">
            Explore My Work
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white/80"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
