import React from 'react';
import { motion } from "framer-motion";
import MatrixBackground from './components/effects/MatrixBackground';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

// IMPORTA TU IMAGEN AQUÍ (Debe estar en la misma carpeta que App.js)
import animeBg from './anime-thomas.jpg'; 

function App() {
  return (
    // CONTENEDOR PRINCIPAL
    <div className="relative min-h-screen text-white overflow-x-hidden selection:bg-[#FAFF00] selection:text-black font-mono">
      
      {/* --- ESTILOS DEL BOTÓN LINKEDIN --- */}
      <style>{`
        .cyber-button {
          --primary: #FAFF00;
          --shadow-primary: #faff00aa;
          font-family: 'Courier New', monospace;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--primary);
          background: rgba(0,0,0,0.6);
          border: 1px solid var(--primary);
          padding: 15px 30px;
          font-size: 14px;
          font-weight: bold;
          position: relative;
          display: inline-block;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          overflow: hidden;
          z-index: 50;
        }
        .cyber-button:hover { background: var(--primary); color: #000; box-shadow: 0 0 30px var(--shadow-primary); transform: scale(1.05) translateY(-2px); border-color: #fff; }
        .cyber-button::before { content: '[ '; margin-right: 5px; opacity: 0.5; transition: opacity 0.3s; }
        .cyber-button::after { content: ' ]'; margin-left: 5px; opacity: 0.5; transition: opacity 0.3s; }
        .cyber-button:hover::before, .cyber-button:hover::after { opacity: 1; font-weight: 900; }
        .cyber-tag { position: absolute; right: 4px; bottom: 2px; font-size: 8px; color: var(--primary); opacity: 0.6; }
        .cyber-button:hover .cyber-tag { color: #000; font-weight: bold; }
      `}</style>

      {/* --- CAPAS DE FONDO (EL PRADO + MATRIX) --- */}
      
      {/* Capa -30: Tu imagen del prado a pantalla completa y fija */}
      <div 
        className="fixed top-0 left-0 w-full h-full -z-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${animeBg})` }}
      />
      
      {/* Capa -20: Oscurecedor. Necesario para que las letras se lean sobre el prado brillante */}
      <div className="fixed top-0 left-0 w-full h-full -z-20 bg-black/60" />

      {/* Capa 0: Matrix Background */}
      <MatrixBackground />

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 container mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center pt-10">
          
          {/* Pequeño texto de "lore" */}
          <motion.div 
             initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
             className="mb-4 text-[#FAFF00] text-xs md:text-sm tracking-[0.3em] uppercase opacity-70"
          >
            &gt; SYSTEM_ENVIRONMENT: NATURE_SIMULATION_LOADED
          </motion.div>

          {/* FOTO DE PERFIL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="relative mb-8 group"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FAFF00] to-[#00ffcc] opacity-30 group-hover:opacity-100 blur transition duration-500 animate-spin-slow"></div>
            <img 
              src="/img.jpg" 
              alt="Thomas" 
              className="relative z-10 w-56 h-56 object-cover rounded-full border-2 border-white/30 grayscale group-hover:grayscale-0 transition-all duration-500 shadow-[0_0_40px_rgba(250,255,0,0.3)]"
            />
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            THOMAS<span className="text-[#FAFF00] animate-pulse">.DEV</span>
          </h1>

          {/* Etiqueta con efecto Glassmorphism */}
          <div className="glass-panel text-[#FAFF00] px-8 py-3 mb-10 transform -skew-x-12 inline-block">
            <p className="font-mono font-bold tracking-[0.2em] text-sm md:text-lg skew-x-12 uppercase">
              &lt; Estadístico & Full Stack /&gt;
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* BOTÓN SISTEMA (Glassmorphism) */}
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#FAFF00", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="glass-panel text-[#FAFF00] px-10 py-4 font-black tracking-widest uppercase transition-colors duration-300 cursor-pointer"
            >
              INITIALIZE SYSTEM_
            </motion.button>

            {/* BOTÓN LINKEDIN */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <a href="https://www.linkedin.com/in/thomas-fernando-rodriguez-anzola-882b8b214/" target="_blank" rel="noopener noreferrer" className="cyber-button">
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
        <footer className="py-12 mt-20 border-t border-[#FAFF00]/30 text-center glass-panel relative overflow-hidden rounded-t-3xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#FAFF00] to-transparent"></div>
            <p className="text-white/80 font-mono text-xs tracking-[0.2em] mb-2 uppercase">
                System Architecture by Thomas Rodriguez
            </p>
            <p style={{ color: '#FAFF00' }} className="font-bold text-xs tracking-widest mt-2 animate-pulse">
                © 2026 SIMULATION: ONLINE
            </p>
        </footer>

      </div>
    </div>
  );
}

export default App;
