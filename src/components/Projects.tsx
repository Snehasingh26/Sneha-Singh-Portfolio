"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaDatabase, FaRobot, FaMicrophone, FaChartBar, FaFileExcel } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

const techIcons: Record<string, React.ReactNode> = {
  "Excel": <FaFileExcel className="text-green-500" />,
  "Python": <FaPython className="text-yellow-400" />,
  "SQL": <FaDatabase className="text-blue-400" />,
  "Power BI": <FaChartBar className="text-yellow-600" />,
  "Gradio": <FaRobot className="text-orange-400" />,
  "Llama 3 Vision": <FaRobot className="text-indigo-400" />,
  "Whisper": <FaMicrophone className="text-blue-500" />,
  "Data Analytics": <SiGoogleanalytics className="text-orange-500" />,
};

const projects = [
  {
    title: "End-to-End Business Analytics & KPI Intelligence System",
    description: "Achieved 25–30% faster and more accurate business reporting by developing an end-to-end KPI analytics system using Excel, Python (Pandas, NumPy), SQL (SQLite), and Power BI, resulting in automated sales, cost, and profit insights through interactive dashboards with 10+ KPIs, centralized data access, and improved real-time decision-making efficiency.",
    tech: ["Excel", "Python", "SQL", "Power BI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "DermaGenie – AI-Powered Skin Health Chatbot",
    description: "Achieved faster and more accessible healthcare query resolution through DermaGenie, an AI-powered multimodal chatbot built using Python, Gradio, Llama 3 Vision, and Whisper, resulting in real-time skin health assessment via image and voice inputs and enhanced user experience and accessibility.",
    tech: ["Python", "Gradio", "Llama 3 Vision", "Whisper"],
    image: "/dermagenie.png"
  },
  {
    title: "Data-Driven Breast Cancer Analysis Dashboard",
    description: "Achieved improved decision-support insights by developing an interactive Breast Cancer Analysis dashboard using Power BI, resulting in clear visualization of diagnostic KPIs, tumor patterns, and patient risk trends, enabling faster data interpretation and better analytical understanding of healthcare datasets.",
    tech: ["Power BI", "Data Analytics"],
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop"
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
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card flex flex-col h-full group overflow-hidden border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 rounded-2xl"
          >
            <div className="w-full h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors drop-shadow-md z-20 relative -mt-10">{proj.title}</h3>
              <p className="text-white/70 flex-grow font-light mb-8 leading-relaxed text-sm">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.map((t, i) => (
                  <span key={i} className="flex items-center gap-2 text-xs font-medium tracking-wider bg-white/5 hover:bg-white/15 border border-white/10 transition-colors py-2 px-4 rounded-full text-white/90">
                    {techIcons[t]} {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
