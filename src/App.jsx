import React from 'react';
import { motion } from "framer-motion";
import MatrixBackground from './components/effects/MatrixBackground';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    // Contenedor Maestro: Negro y relativo para contener las partículas
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-neon-yellow selection:text-black overflow-x-hidden">
      
      {/* 1. LAS PARTÍCULAS (Capa 0 - Fondo absoluto) */}
      <MatrixBackground />

      {/* 2. EL CONTENIDO (Capa 10 - Flotando encima) */}
      <div className="relative z-10 container mx-auto px-6">
        
        {/* HERO SECTION - CUADRADO Y GLITCH */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center pt-10">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative mb-10 group"
          >
            {/* Marco neón decorativo */}
            <div className="absolute top-3 left-3 w-full h-full border-2 border-neon-yellow z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* FOTO CUADRADA */}
            <img 
              src="/img.jpg" 
              alt="Thomas Profile" 
              className="relative z-10 w-64 h-64 object-cover border-2 border-white/80 grayscale group-hover:grayscale-0 transition-all duration-500 shadow-[0_0_30px_rgba(250,255,0,0.15)]"
            />
          </motion.div>

          <h1 className="glitch text-5xl md:text-8xl font-black tracking-tighter mb-6" data-text="THOMAS.DEV">
            THOMAS<span className="text-neon-yellow">.DEV</span>
          </h1>

          <div className="bg-neon-yellow text-black px-4 py-2 mb-12 transform -skew-x-12 inline-block border-r-4 border-black">
            <p className="font-mono font-bold tracking-[0.15em] text-xs md:text-lg skew-x-12 uppercase">
              &lt; Estadístico & Desarrollador Full Stack /&gt;
            </p>
          </div>

          <motion.button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px #FAFF00", color: "#000", backgroundColor: "#FAFF00" }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-neon-yellow text-neon-yellow px-10 py-4 font-black tracking-widest uppercase transition-colors duration-300"
          >
            INITIALIZE SYSTEM_
          </motion.button>
        </section>

        {/* PROYECTOS */}
        <section id="projects" className="py-24">
          <Projects />
        </section>

        {/* CONTACTO */}
        <Contact />

        {/* FOOTER */}
        <footer className="py-12 mt-20 border-t border-white/10 text-center bg-black/80 backdrop-blur-sm">
          <p className="text-white/60 font-mono text-xs tracking-[0.2em] mb-2 uppercase">
            System Architecture by Thomas Rodriguez
          </p>
          <p className="text-neon-yellow font-bold text-xs tracking-widest">
            © 2026 ALL RIGHTS RESERVED
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;