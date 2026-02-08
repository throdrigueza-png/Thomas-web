import React from 'react';
import { motion } from "framer-motion";
import MatrixBackground from './components/effects/MatrixBackground';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    // FORZAMOS EL FONDO NEGRO AQUÍ MISMO con style={{backgroundColor: 'black'}}
    // para asegurar que si falla el CSS externo, al menos se vea negro.
    <div className="relative min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#000000' }}>
      
      {/* 1. LAS PARTÍCULAS (Capa 0) */}
      <MatrixBackground />

      {/* 2. EL CONTENIDO (Capa 10 - Por encima de las partículas) */}
      <div className="relative z-10 container mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center pt-10">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative mb-10 group"
          >
            {/* Marco neón */}
            <div className="absolute top-2 left-2 w-full h-full border-2 border-neon-yellow z-0 opacity-60"></div>
            
            {/* FOTO */}
            <img 
              src="/img.jpg" 
              alt="Thomas" 
              className="relative z-10 w-64 h-64 object-cover border-2 border-white/90 grayscale group-hover:grayscale-0 transition-all shadow-2xl"
            />
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-white" style={{ textShadow: "4px 4px 0px #333" }}>
            THOMAS<span style={{ color: '#FAFF00' }}>.DEV</span>
          </h1>

          <div className="bg-[#FAFF00] text-black px-6 py-2 mb-12 transform -skew-x-12 inline-block">
            <p className="font-mono font-bold tracking-[0.2em] text-sm md:text-lg skew-x-12 uppercase">
              &lt; Estadístico & Full Stack /&gt;
            </p>
          </div>

          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-[#FAFF00] text-[#FAFF00] px-12 py-4 font-black tracking-widest uppercase hover:bg-[#FAFF00] hover:text-black transition-all cursor-pointer"
          >
            INITIALIZE SYSTEM_
          </button>
        </section>

        {/* PROYECTOS */}
        <section id="projects" className="py-24">
          <Projects />
        </section>

        {/* CONTACTO */}
        <Contact />

        {/* FOOTER */}
        <footer className="py-12 mt-20 border-t border-white/10 text-center bg-black">
          <p className="text-white/60 font-mono text-xs tracking-[0.2em] mb-2 uppercase">
            System Architecture by Thomas Rodriguez
          </p>
          <p style={{ color: '#FAFF00' }} className="font-bold text-xs tracking-widest">
            © 2026 ALL RIGHTS RESERVED
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;