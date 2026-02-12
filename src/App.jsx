import React from 'react';
import { motion } from "framer-motion";
import MatrixBackground from './components/effects/MatrixBackground';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    // CONTENEDOR PRINCIPAL
    <div className="relative min-h-screen text-white overflow-x-hidden selection:bg-[#FAFF00] selection:text-black font-mono">
      
      {/* --- ESTILOS DEL BOTÓN LINKEDIN (Inyectados aquí para que funcione YA) --- */}
      <style>{`
        .cyber-button {
          --primary: #FAFF00;
          --shadow-primary: #faff00aa;
          font-family: 'Courier New', monospace;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--primary);
          background: rgba(0,0,0,0.8);
          border: 1px solid var(--primary);
          padding: 15px 30px;
          font-size: 14px;
          font-weight: bold;
          position: relative;
          display: inline-block;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(250, 255, 0, 0.1);
          overflow: hidden;
          z-index: 50;
        }

        .cyber-button:hover {
          background: var(--primary);
          color: #000;
          box-shadow: 0 0 40px var(--shadow-primary);
          transform: scale(1.05) translateY(-2px);
          border-color: #fff;
        }

        .cyber-button::before { content: '[ '; margin-right: 5px; opacity: 0.5; transition: opacity 0.3s; }
        .cyber-button::after { content: ' ]'; margin-left: 5px; opacity: 0.5; transition: opacity 0.3s; }
        
        .cyber-button:hover::before, .cyber-button:hover::after { opacity: 1; font-weight: 900; }

        .cyber-tag {
          position: absolute;
          right: 4px;
          bottom: 2px;
          font-size: 8px;
          color: var(--primary);
          opacity: 0.6;
        }
        
        .cyber-button:hover .cyber-tag { color: #000; font-weight: bold; }
      `}</style>

      {/* 1. FONDO MATRIX */}
      <MatrixBackground />

      {/* 2. CONTENIDO */}
      <div className="relative z-10 container mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center pt-10">
          
          {/* FOTO DE PERFIL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-10 group"
          >
            {/* Marco neón rotativo */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FAFF00] to-transparent opacity-20 group-hover:opacity-100 blur transition duration-500 animate-spin-slow"></div>
            
            <img 
              src="/img.jpg" 
              alt="Thomas" 
              className="relative z-10 w-64 h-64 object-cover rounded-full border-2 border-white/20 grayscale group-hover:grayscale-0 transition-all duration-500 shadow-[0_0_50px_rgba(250,255,0,0.15)]"
            />
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-white drop-shadow-[4px_4px_0_rgba(50,50,50,1)]">
            THOMAS<span className="text-[#FAFF00] animate-pulse">.DEV</span>
          </h1>

          <div className="bg-[#FAFF00] text-black px-6 py-2 mb-12 transform -skew-x-12 inline-block shadow-[0_0_20px_rgba(250,255,0,0.4)]">
            <p className="font-mono font-bold tracking-[0.2em] text-sm md:text-lg skew-x-12 uppercase">
              &lt; Estadístico & Full Stack /&gt;
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* BOTÓN SISTEMA */}
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#FAFF00", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-[#FAFF00] text-[#FAFF00] px-10 py-4 font-black tracking-widest uppercase transition-colors duration-300 cursor-pointer bg-black/50 backdrop-blur-md"
            >
              INITIALIZE SYSTEM_
            </motion.button>

            {/* BOTÓN LINKEDIN (EL NUEVO ÉPICO) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href="https://www.linkedin.com/in/thomas-fernando-rodriguez-anzola-882b8b214/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button"
              >
                _CONNECT :: LINKEDIN_
                <span className="cyber-tag">R25</span>
              </a>
            </motion.div>
          </div>

        </section>

        {/* PROYECTOS */}
        <section id="projects" className="py-24">
          <Projects />
        </section>

        {/* CONTACTO */}
        <Contact />

        {/* FOOTER */}
        <footer className="py-12 mt-20 border-t border-white/10 text-center bg-black/80 backdrop-blur-md relative overflow-hidden">
            {/* Pequeña decoración de pie de página */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#FAFF00] to-transparent"></div>
            
            <p className="text-white/60 font-mono text-xs tracking-[0.2em] mb-2 uppercase">
                System Architecture by Thomas Rodriguez
            </p>
            <p style={{ color: '#FAFF00' }} className="font-bold text-xs tracking-widest mt-2 animate-pulse">
                © 2026 STATUS: ONLINE
            </p>
        </footer>

      </div>
    </div>
  );
}

export default App;
