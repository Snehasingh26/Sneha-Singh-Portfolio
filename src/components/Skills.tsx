"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = {
  "Languages": ["C++", "SQL", "HTML", "CSS"],
  "Tools/Libraries": ["Power BI", "Tableau", "NumPy", "Excel"],
  "Platforms": ["IBM Cloud", "Google Cloud Platform"],
  "Concepts": ["Data Analysis", "Data Visualization", "AI Fundamentals"]
};

export default function Skills() {
  return (
    <section className="relative z-20 py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -30 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }} 
        className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center md:text-left"
      >
        Technical Arsenal
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel"
          >
            <h3 className="text-xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-4">{category}</h3>
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li key={i} className="flex items-center text-white/70 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 animate-pulse" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
