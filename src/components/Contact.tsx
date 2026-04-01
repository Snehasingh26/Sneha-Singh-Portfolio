"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const GithubIcon = ({ className }: {className?: string}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className }: {className?: string}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section className="relative z-20 py-32 px-6 md:px-12 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-panel w-full"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
          Let's Connect
        </h2>
        <p className="text-xl md:text-2xl text-white/70 font-light mb-12">
          Open to internships and opportunities
        </p>
        
        <a 
          href="mailto:snehasingh26004@gmail.com" 
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg tracking-wide shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] mb-16"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-8 border-t border-white/10 pt-12">
          <a
            href="mailto:snehasingh26004@gmail.com"
            className="group flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <div className="bg-white/5 p-4 rounded-full group-hover:bg-white/10 transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs font-light tracking-widest uppercase">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sneha-singh-88256924b"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <div className="bg-white/5 p-4 rounded-full group-hover:bg-white/10 transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </div>
            <span className="text-xs font-light tracking-widest uppercase">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Snehasingh26"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <div className="bg-white/5 p-4 rounded-full group-hover:bg-white/10 transition-colors">
              <GithubIcon className="w-6 h-6" />
            </div>
            <span className="text-xs font-light tracking-widest uppercase">GitHub</span>
          </a>
        </div>
      </motion.div>
      
      <p className="mt-20 text-white/30 text-sm font-light">
        © {new Date().getFullYear()} Sneha Singh. Designed with Next.js & Framer Motion.
      </p>
    </section>
  );
}
