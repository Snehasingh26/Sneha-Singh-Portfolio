"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  "NPTEL Certifications (Cloud Computing, Python, Entrepreneurship)",
  "Cisco Cybersecurity Essentials",
  "LinkedIn Learning Certifications",
  "Coding Ninjas – Introduction to C++",
  "French Language Level 1 Certification"
];

export default function Certifications() {
  return (
    <section className="relative z-20 py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -30 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }} 
        className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center md:text-left"
      >
        Licenses & Certifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass-card p-6 flex items-start gap-4"
          >
            <Award className="w-8 h-8 text-white/50 shrink-0" />
            <p className="text-white/80 font-light text-lg">
              {cert}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
