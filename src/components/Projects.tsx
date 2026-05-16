"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "End-to-End Business Analytics & KPI Intelligence System",
    description: "Achieved 25–30% faster and more accurate business reporting by developing an end-to-end KPI analytics system using Excel, Python (Pandas, NumPy), SQL (SQLite), and Power BI, resulting in automated sales, cost, and profit insights through interactive dashboards with 10+ KPIs, centralized data access, and improved real-time decision-making efficiency.",
    tech: ["Excel", "Python", "SQL", "Power BI"],
  },
  {
    title: "DermaGenie – AI-Powered Skin Health Chatbot",
    description: "Achieved faster and more accessible healthcare query resolution through DermaGenie, an AI-powered multimodal chatbot built using Python, Gradio, Llama 3 Vision, and Whisper, resulting in real-time skin health assessment via image and voice inputs and enhanced user experience and accessibility.",
    tech: ["Python", "Gradio", "Llama 3 Vision", "Whisper"],
  },
  {
    title: "Data-Driven Breast Cancer Analysis Dashboard",
    description: "Achieved improved decision-support insights by developing an interactive Breast Cancer Analysis dashboard using Power BI, resulting in clear visualization of diagnostic KPIs, tumor patterns, and patient risk trends, enabling faster data interpretation and better analytical understanding of healthcare datasets.",
    tech: ["Power BI", "Data Analytics"],
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
