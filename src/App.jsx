import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

// --- COMPONENTE DE FONDO (Integrado correctamente) ---
const MatrixBackground = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "#000" },
    fpsLimit: 120,
    particles: {
      color: { value: "#FAFF00" },
      move: { enable: true, direction: "bottom", speed: 5, straight: true },
      number: { value: 100, density: { enable: true, area: 800 } },
      opacity: { value: 0.5 },
      shape: {
        type: "char",
        character: { value: ["0", "1", "ア", "イ", "ウ", "⚡", "♥"], font: "monospace" }
      },
      size: { value: { min: 10, max: 20 } },
    }
  };
  return init ? <Particles id="tsparticles" options={options} /> : null;
};

// --- COMPONENTE PRINCIPAL ---
function App() {
  const techStack = [
    "Python (Data Science) 🐍", "React ⚛️", "SQL & Databases 🗄️", 
    "Azure Cloud ☁️", "Java / C# / PHP 💻", "AI & Prompting 🤖"
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-neon-yellow selection:text-black font-sans">
      <MatrixBackground />
      
      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center min-h-screen text-center p-6">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="w-48 h-48 md:w-64 md:h-64 mb-10 rounded-full border-2 border-neon-yellow shadow-[0_0_50px_rgba(250,255,0,0.4)] overflow-hidden"
          >
            <img src="/img.jpg" alt="Thomas" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </motion.div>

          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-6xl md:text-8xl font-black mb-4">
            Thomas<span className="text-neon-yellow">.Dev</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="bg-neon-yellow text-black px-8 py-2 rounded-full font-bold text-lg md:text-xl shadow-[0_0_20px_#FAFF00] mb-8">
            ⚡ Estadístico & Software Architect ⚡
          </motion.div>

          {/* TECH SELL - Mostrando todo tu dominio técnico */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mb-12">
            {techStack.map((tech, i) => (
              <span key={i} className="px-4 py-1 border border-neon-yellow/50 rounded-lg text-sm font-mono text-neon-yellow bg-black/40">
                {tech}
              </span>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.1, boxShadow: "0 0 40px #FAFF00" }}
            className="px-12 py-4 bg-neon-yellow text-black font-black rounded-full tracking-widest animate-pulse"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            INITIALIZE SYSTEM_ 💛
          </motion.button>
        </section>

        <section id="projects"><Projects /></section>
        <Contact />
      </div>
    </div>
  );
}

export default App; // UN SOLO EXPORT DEFAULT PARA EVITAR EL ERROR DE AZURE
