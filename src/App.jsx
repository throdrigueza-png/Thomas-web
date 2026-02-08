import React from 'react';
import { motion } from "framer-motion";
import MatrixBackground from './components/effects/MatrixBackground';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    // CAMBIO CLAVE: bg-transparent para ver las partículas detrás
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden selection:bg-neon-yellow selection:text-black">
      
      <MatrixBackground />
      
      {/* Overlay de ruido estático (Opcional, si te gusta el efecto TV vieja) */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://res.cloudinary.com/dyd911kmh/image/upload/v1640050215/noise_v96sq6.png')]"></div>

      {/* Contenedor principal con Z-Index positivo para estar SOBRE las partículas */}
      <div className="relative z-10 container mx-auto px-6">
        
        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-10 relative group"
          >
            <div className="absolute -inset-4 bg-neon-yellow opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500"></div>
            <img 
              src="/img.jpg" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-neon-yellow object-cover relative z-10 shadow-[0_0_40px_rgba(250,255,0,0.3)]" 
              alt="Profile"
            />
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 glitch" data-text="THOMAS.DEV">
            THOMAS<span className="text-neon-yellow">.DEV</span>
          </h1>

          <p className="text-neon-yellow font-mono text-sm md:text-xl tracking-[0.3em] uppercase mb-12 border border-neon-yellow/30 px-6 py-2 bg-black/50 backdrop-blur-sm">
            Estadístico & Desarrollador Full Stack
          </p>

          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#FAFF00", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-neon-yellow text-neon-yellow px-10 py-4 font-black tracking-widest uppercase text-sm transition-all"
          >
            INITIALIZE SYSTEM_
          </motion.button>
        </section>

        {/* PROYECTOS */}
        <section id="projects" className="py-32">
          <Projects />
        </section>

        {/* CONTACTO */}
        <Contact />

        {/* FOOTER - CAMBIO CLAVE: Texto visible */}
        <footer className="py-12 text-center border-t border-white/10 mt-20">
          <p className="text-white/60 font-mono text-xs uppercase tracking-[0.2em] mb-2">
            System Architecture by Thomas Rodriguez
          </p>
          <p className="text-neon-yellow font-bold text-sm">
            © 2026 ALL RIGHTS RESERVED
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;