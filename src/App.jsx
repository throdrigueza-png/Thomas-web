import React from 'react';
import { motion } from "framer-motion";
import MatrixBackground from './components/effects/MatrixBackground';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

// IMPORTA TU IMAGEN
import animeBg from './anime-thomas.jpg'; 

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden selection:bg-[#87CEEB] selection:text-black">
      
      {/* --- ESTILOS INYECTADOS DE LOS BOTONES --- */}
      <style>{`
        .cyber-button {
          --primary: #87CEEB; /* Cambiado a azul SAO para que combine con el cielo */
          --shadow-primary: rgba(135, 206, 235, 0.6);
          font-family: 'Space Mono', monospace;
          text-transform: uppercase;
          text-decoration: none;
          color: #fff;
          background: rgba(0,0,0,0.5);
          border: 1px solid var(--primary);
          padding: 12px 24px;
          font-size: 14px;
          position: relative;
          display: inline-block;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          border-radius: 4px;
          overflow: hidden;
          z-index: 50;
        }
        .cyber-button:hover { background: var(--primary); color: #000; box-shadow: 0 0 20px var(--shadow-primary); transform: translateY(-2px); border-color: #fff; font-weight: bold;}
        .cyber-button::before { content: '< '; margin-right: 5px; opacity: 0.7; }
        .cyber-button::after { content: ' />'; margin-left: 5px; opacity: 0.7; }
        
        /* Brillo sutil para la imagen de perfil */
        .profile-glow {
            box-shadow: 0 0 30px rgba(135, 206, 235, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.5);
        }
      `}</style>

      {/* --- EL FONDO (Tu imagen a full color, sin oscurecer a lo bruto) --- */}
      <div 
        className="fixed top-0 left-0 w-full h-full -z-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${animeBg})` }}
      />
      {/* Un oscurecedor MEGA sutil solo para que no deslumbre, casi invisible */}
      <div className="fixed top-0 left-0 w-full h-full -z-20 bg-black/10" />

      {/* --- LA LLUVIA MATRIX --- */}
      <MatrixBackground />

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 container mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center pt-10">
          
          {/* EL CONTENEDOR DE CRISTAL (Aquí ocurre la magia) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-container p-8 md:p-14 flex flex-col items-center max-w-4xl w-full"
          >
            {/* Texto de sistema (Hacker/Zenless) */}
            <div className="mb-6 font-terminal text-[#87CEEB] text-xs md:text-sm tracking-[0.3em] uppercase opacity-90 border-b border-[#87CEEB]/30 pb-2">
              &gt; LINK_START :: USER_THOMAS_AUTHENTICATED
            </div>

            {/* FOTO DE PERFIL */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative mb-6 group"
            >
              <img 
                src="/img.jpg" 
                alt="Thomas" 
                className="profile-glow relative z-10 w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-white/20 transition-all duration-300"
              />
            </motion.div>

            {/* TÍTULO PRINCIPAL (Fuente SAO) */}
            <h1 className="font-sao text-5xl md:text-7xl font-bold tracking-wider mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              THOMAS<span className="text-[#87CEEB]">.DEV</span>
            </h1>

            {/* ETIQUETA / ROL */}
            <div className="bg-black/40 border-l-4 border-[#87CEEB] px-6 py-2 mb-10 backdrop-blur-sm">
              <p className="font-terminal text-[#87CEEB] tracking-[0.1em] text-sm md:text-base uppercase">
                Estadístico // Full Stack Engineer
              </p>
            </div>

            {/* BOTONES */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="cyber-button"
              >
                SYSTEM_PROJECTS
              </motion.button>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <a href="https://www.linkedin.com/in/thomas-fernando-rodriguez-anzola-882b8b214/" target="_blank" rel="noopener noreferrer" className="cyber-button">
                  CONNECT_LINKEDIN
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* PROYECTOS */}
        <section id="projects" className="py-24">
          <Projects />
        </section>

        {/* CONTACTO */}
        <Contact />

        {/* FOOTER */}
        <footer className="py-8 mt-20 text-center glass-container rounded-t-3xl rounded-b-none border-b-0 relative overflow-hidden">
            <p className="font-terminal text-white/70 text-xs tracking-[0.2em] mb-2 uppercase">
                System Architecture by Thomas Rodriguez
            </p>
            <p className="font-sao text-[#87CEEB] font-bold text-sm tracking-widest mt-2 animate-pulse">
                © 2026 ALICIZATION SIMULATION: ONLINE
            </p>
        </footer>

      </div>
    </div>
  );
}

export default App;
