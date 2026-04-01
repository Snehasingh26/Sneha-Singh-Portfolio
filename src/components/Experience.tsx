"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Infosys Springboard",
    role: "Data Visualization Intern",
    duration: "Nov 2024 – Dec 2024",
    points: [
      "Developed interactive sales dashboard using Power BI and Excel",
      "Cleaned and transformed raw data for analysis",
      "Identified revenue patterns and business insights",
    ]
  },
  {
    company: "Cisco Networking Academy",
    role: "Cybersecurity Intern",
    duration: "May 2024 – July 2024",
    points: [
      "Designed secure campus network using Cisco Packet Tracer",
      "Learned network security fundamentals and defense mechanisms",
    ]
  }
];

export default function Experience() {
  return (
    <section className="relative z-20 py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -30 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }} 
        className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center md:text-left"
      >
        Experience
      </motion.h2>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#020617] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-blue-500/20 group-hover:border-blue-400">
              <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-8 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col mb-4">
                <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase mb-2">{exp.duration}</span>
                <h3 className="font-bold text-2xl text-white">{exp.company}</h3>
                <h4 className="text-white/60 font-medium">{exp.role}</h4>
              </div>
              <ul className="text-white/70 space-y-3 font-light text-sm md:text-base leading-relaxed">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-400 mt-1">▹</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
}
