"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Mail } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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
            href="https://drive.google.com/uc?export=download&id=1nsF-OLJCJMDucVDnx1LbaGc4yXPnGBP8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

          <a
            href="https://drive.google.com/file/d/1nsF-OLJCJMDucVDnx1LbaGc4yXPnGBP8/view?usp=drive_link"
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
            <LinkedinIcon className="w-8 h-8" />
          </a>
          <a href="https://github.com/Snehasingh26" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors hover:scale-110">
            <GithubIcon className="w-8 h-8" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
