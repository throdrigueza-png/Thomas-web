import React from 'react';
import { motion } from "framer-motion";
import MatrixBackground from './components/effects/MatrixBackground';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import profileData from './data/profile.json';

function App() {
  const fullTechStack = [
    "Machine Learning", "Cloud Arch (Azure)", "React 19", 
    "Python Expert", "SQL Mastery", "Node.js", "Java/C#", "UI/UX Cyberpunk"
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
      <MatrixBackground />

      {/* OVERLAY DE GRANO PARA TEXTURA PRO */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative z-10">
        {/* HERO SECTION - SUBLIME EDITION */}
        <section className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gradient-to-b from-transparent to-black/80">
          
          <motion.div 
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative w-56 h-56 md:w-72 md:h-72 mb-8 group"
          >
            <div className="absolute inset-0 rounded-full bg-neon-yellow blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-full h-full rounded-full border-[3px] border-neon-yellow p-2 bg-black shadow-[0_0_30px_#FAFF00]">
              <img 
                src="/img.jpg" 
                alt="Thomas" 
                className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-7xl md:text-9xl font-black mb-4 tracking-tighter leading-none">
              THOMAS<span className="text-neon-yellow">.DEV</span>
            </h1>
            
            <p className="text-neon-yellow font-mono text-sm md:text-lg tracking-[0.4em] uppercase mb-10">
              Estadístico UNAL & Software Architect SENA
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {fullTechStack.map((tech, i) => (
                <motion.span 
                  key={i}
                  whileHover={{ y: -5, color: '#000', backgroundColor: '#FAFF00' }}
                  className="px-4 py-1 border border-neon-yellow/30 text-neon-yellow text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <motion.button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px #FAFF00" }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-5 bg-neon-yellow text-black font-black text-xl rounded-none skew-x-[-12deg] hover:skew-x-0 transition-all shadow-[10px_10px_0px_#fff]"
            >
              ACCESS PORTFOLIO_
            </motion.button>
          </motion.div>
        </section>

        {/* SECCIÓN DE PROYECTOS CON LÓGICA DE DESTACADO */}
        <section id="projects" className="py-20 px-6">
          <Projects />
        </section>

        <Contact />
      </div>

      {/* FOOTER PRO */}
      <footer className="py-10 text-center border-t border-white/5 bg-black/50 backdrop-blur-xl">
        <p className="text-white/30 font-mono text-[10px] tracking-[0.5em]">
          THOMAS PORTFOLIO © 2026 // SYSTEM_STATUS: ONLINE
        </p>
      </footer>
    </div>
  );
}

export default App;
