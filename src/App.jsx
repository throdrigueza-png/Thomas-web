import React from 'react';
import { motion } from "framer-motion";
import MatrixBackground from './components/effects/MatrixBackground';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  const techstack = [
    "Estadística UNAL", "Arquitectura SENA", "Azure Cloud", 
    "Python DS", "React 19", "Node.js", "Java/C#", "SQL Server"
  ];

  return (
    <div className="bg-transparent min-h-screen text-white">
      {/* Las partículas viven aquí, en el fondo absoluto */}
      <MatrixBackground />

      <main className="relative z-10 container mx-auto px-4">
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-neon-yellow blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src="/img.jpg" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-neon-yellow object-cover shadow-[0_0_50px_rgba(250,255,0,0.3)] relative z-10"
              alt="Thomas"
            />
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-7xl md:text-9xl font-black tracking-tighter mb-4"
          >
            THOMAS<span className="text-neon-yellow">.DEV</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-neon-yellow font-mono tracking-[0.5em] text-sm md:text-lg mb-10"
          >
            HYBRID DATA SCIENTIST & SOFTWARE ARCHITECT
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mb-12">
            {techstack.map((s, i) => (
              <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-widest text-gray-300">
                {s}
              </span>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #FAFF00" }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="bg-neon-yellow text-black px-12 py-4 font-black tracking-widest uppercase skew-x-[-10deg]"
          >
            Access Files_
          </motion.button>
        </section>

        {/* SECCIÓN DE PROYECTOS */}
        <section id="projects" className="py-24">
          <h2 className="text-4xl font-black mb-16 inline-block border-b-4 border-neon-yellow">
            SELECTED_WORKS
          </h2>
          <Projects />
        </section>

        <Contact />
      </main>

      <footer className="py-10 text-center text-gray-600 font-mono text-xs uppercase tracking-widest">
        Built by Thomas // 2026 // System Status: Optimal
      </footer>
    </div>
  );
}

export default App;
