"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Medical Bot",
    description: "AI chatbot for skin-related health concerns (acne, rashes, infections). Supports image input (Llama 3 Vision) and voice queries (Whisper + gTTS).",
    tech: ["Python", "Gradio", "Llama 3 Vision", "Whisper", "gTTS"],
  },
  {
    title: "Breast Cancer Analysis Dashboard",
    description: "Built interactive Power BI dashboard for cancer data visualization. Focused on simplifying complex health data for awareness and early detection.",
    tech: ["Power BI", "Data Analytics"],
  },
  {
    title: "Supermarket Sales Analysis Dashboard",
    description: "Created during Infosys internship. Analyzed revenue trends, customer behavior, and product performance.",
    tech: ["Power BI", "Excel", "Data Analysis"],
  }
];

export default function Projects() {
  return (
    <section className="relative z-20 py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -30 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }} 
        className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center md:text-left"
      >
        Featured Work
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card p-8 flex flex-col h-full group"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">{proj.title}</h3>
            <p className="text-white/70 flex-grow font-light mb-8 leading-relaxed">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {proj.tech.map((t, i) => (
                <span key={i} className="text-xs uppercase tracking-wider bg-white/10 border border-white/5 py-1.5 px-4 rounded-full text-white/90">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
