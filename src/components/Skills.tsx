"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaHtml5, FaCss3Alt, FaFileExcel, FaChartPie, FaRobot, FaChartBar } from "react-icons/fa";
import { SiCplusplus, SiNumpy, SiGooglecloud, SiGoogleanalytics } from "react-icons/si";

const skillIcons: Record<string, React.ReactNode> = {
  "C++": <SiCplusplus className="text-blue-500 text-2xl" />,
  "SQL": <FaDatabase className="text-blue-400 text-2xl" />,
  "HTML": <FaHtml5 className="text-orange-500 text-2xl" />,
  "CSS": <FaCss3Alt className="text-blue-500 text-2xl" />,
  "Power BI": <FaChartBar className="text-yellow-600 text-2xl" />,
  "Tableau": <FaChartPie className="text-indigo-500 text-2xl" />,
  "NumPy": <SiNumpy className="text-blue-400 text-2xl" />,
  "Excel": <FaFileExcel className="text-green-500 text-2xl" />,
  "IBM Cloud": <FaDatabase className="text-blue-600 text-2xl" />,
  "Google Cloud Platform": <SiGooglecloud className="text-orange-400 text-2xl" />,
  "Data Analysis": <SiGoogleanalytics className="text-yellow-500 text-2xl" />,
  "Data Visualization": <FaChartPie className="text-purple-400 text-2xl" />,
  "AI Fundamentals": <FaRobot className="text-indigo-400 text-2xl" />
};

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white/90 drop-shadow-sm border-l-4 border-blue-500 pl-4">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {items.map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all cursor-default"
                >
                  <div className="mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    {skillIcons[item] || <div className="w-6 h-6 rounded-full bg-blue-400/50" />}
                  </div>
                  <span className="text-white/80 font-medium text-sm text-center">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
