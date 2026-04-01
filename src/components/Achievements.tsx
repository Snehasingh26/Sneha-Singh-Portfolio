"use client";
import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  "Recognized with Dean’s List at Manav Rachna University for academic excellence",
  "1st Position – Hack Quest (MRU CyberSquad)",
  "Winner – Algo Rhymes Quiz (IEEE MRU)",
  "Participated in hackathons including SIH 2024 and Code4Cause 2.0"
];

export default function Achievements() {
  return (
    <section className="relative z-20 py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -30 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }} 
        className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center md:text-left"
      >
        Achievements
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achieve, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass-card p-6 flex items-start gap-4 hover:bg-white/10"
          >
            <div className="bg-blue-500/20 p-3 rounded-full shrink-0">
              <Trophy className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-white/80 font-light text-lg leading-relaxed pt-1">
              {achieve}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
