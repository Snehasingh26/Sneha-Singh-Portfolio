"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section className="relative z-20 pt-16 pb-24 px-6 md:px-12 max-w-6xl mx-auto flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-panel text-center max-w-4xl w-full"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 gradient-text">About Me</h2>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-12">
          B.Tech Computer Science Engineering student at Manav Rachna University with a strong interest in Data Analytics, Artificial Intelligence, and solving real-world problems through technology. I focus on building data-driven solutions and continuously improving my technical and analytical skills.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://drive.google.com/uc?export=download&id=1hNHae7z6DQVwHq9_tRKdSHUeYK8Aip7D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

          <a
            href="https://drive.google.com/file/d/1hNHae7z6DQVwHq9_tRKdSHUeYK8Aip7D/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white flex items-center gap-2 underline underline-offset-4 decoration-white/30 transition-colors"
          >
            View Resume <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8">
          <a href="mailto:snehasingh26004@gmail.com" className="text-white/60 hover:text-white transition-colors hover:scale-110">
            <Mail className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/sneha-singh-88256924b" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors hover:scale-110">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="https://github.com/Snehasingh26" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors hover:scale-110">
            <FaGithub className="w-8 h-8" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
