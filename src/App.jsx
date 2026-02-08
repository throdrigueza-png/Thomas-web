import React from 'react';
import { motion } from "framer-motion";
import MatrixBackground from './components/effects/MatrixBackground';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    // IMPORTANTE: bg-transparent permite ver el MatrixBackground que está detrás
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-neon-yellow selection:text-black overflow-x-hidden">
      
      {/* 1. LAS PARTÍCULAS (Renderizadas al fondo) */}
      <MatrixBackground />

      {/* 2. OVERLAY DE RUIDO (Efecto TV Vieja sutil) */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-0 bg-[url('https://res.cloudinary.com/dyd911kmh/image/upload/v1640050215/noise_v96sq6.png')]"></div>

      {/* 3. CONTENIDO PRINCIPAL (z-10 para flotar sobre todo) */}
      <div className="relative z-10 container mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center pt-10">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative mb-10 group"
          >
            {/* MARCO DE NEÓN DESPLAZADO (Estilo Glitch/Cyberpunk) */}
            <div className="absolute top-3 left-3 w-full h-full border-2 border-neon-yellow z-0 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -inset-2 bg-neon-yellow/20 blur-xl group-hover:bg-neon-yellow/30 transition-colors"></div>
            
            {/* FOTO CUADRADA (La que pediste) */}
            <img 
              src="/img.jpg" 
              alt="Thomas" 
              className="relative z-10 w-64 h-64 object-cover border-2 border-white/90 grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl"
            />
          </motion.div>

          {/* TÍTULO GLITCH */}
          <h1 className="glitch text-6xl md:text-9xl font-black tracking-tighter mb-6" data-text="THOMAS.DEV">
            THOMAS<span className="text-neon-yellow">.DEV</span>
          </h1>

          {/* SUBTÍTULO CON ESTILO TERMINAL */}
          <div className="bg-neon-yellow text-black px-6 py-2 mb-12 transform -skew-x-12 inline-block border-r-4 border-black">
            <p className="font-mono font-bold tracking-[0.2em] text-sm md:text-lg skew-x-12 uppercase">
              &lt; Estadístico & Desarrollador Full Stack /&gt;
            </p>
          </div>

          <motion.button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px #FAFF00" }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-neon-yellow text-neon-yellow px-12 py-4 font-black tracking-widest uppercase hover:bg-neon-yellow hover:text-black transition-all duration-300"
          >
            INITIALIZE SYSTEM_
          </motion.button>
        </section>

        {/* SECCIÓN PROYECTOS */}
        <section id="projects" className="py-32">
          <Projects />
        </section>

        {/* CONTACTO */}
        <Contact />

        {/* FOOTER (VISIBLE AHORA) */}
        <footer className="py-12 mt-20 border-t border-white/10 text-center relative z-20 bg-black/80 backdrop-blur-sm">
          <p className="text-white/70 font-mono text-xs md:text-sm tracking-[0.3em] mb-3 uppercase">
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