import React from 'react';
import { motion } from "framer-motion";
import MatrixBackground from './components/effects/MatrixBackground';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

// ASEGÚRATE DE QUE LA RUTA A TU IMAGEN SEA CORRECTA
import animeBg from './anime.jpg'; 

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden selection:bg-[#00bfff] selection:text-white">
      
      {/* --- ESTILOS INYECTADOS BOTONES HERO --- */}
      <style>{`
        .anime-btn {
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.5);
          color: white;
          padding: 12px 28px;
          border-radius: 50px; /* Botones redonditos y modernos */
          font-weight: 700;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .anime-btn:hover { 
          background: white; 
          color: #0f1928; 
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255,255,255,0.5);
        }
        .profile-img {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
        }
      `}</style>

      {/* --- EL FONDO 100% VISIBLE --- */}
      {/* Cero capas negras, la imagen brilla con todo su color */}
      <div 
        className="fixed top-0 left-0 w-full h-full -z-30 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${animeBg})` }}
      />

      {/* --- LA LLUVIA MATRIX (Si aún la tienes, te sugiero ponerla muy transparente o quitarla si ensucia mucho la imagen) --- */}
      <div className="opacity-30">
        <MatrixBackground />
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 container mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center pt-10">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-panel p-10 md:p-16 flex flex-col items-center max-w-4xl w-full"
          >
            {/* Texto decorativo */}
            <div className="mb-6 font-mono text-white/80 text-xs md:text-sm tracking-[0.2em] border-b border-white/30 pb-2">
              ✧ SYSTEM_ONLINE : WELCOME_USER ✧
            </div>

            {/* FOTO DE PERFIL */}
            <motion.div whileHover={{ scale: 1.05 }} className="relative mb-8 group">
              <img 
                src="/img.jpg" /* Reemplaza con tu foto real */
                alt="Thomas" 
                className="profile-img relative z-10 w-48 h-48 md:w-52 md:h-52 object-cover rounded-full border-4 border-white transition-all duration-300"
              />
            </motion.div>

            {/* TÍTULO */}
            <h1 className="font-sao text-5xl md:text-7xl font-bold tracking-widest mb-2 text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
              THOMAS<span className="text-[#00bfff]">.DEV</span>
            </h1>

            {/* SUBTÍTULO */}
            <h2 className="text-xl md:text-2xl font-bold text-white/90 mb-10 drop-shadow-md">
              Estadístico & Full Stack Engineer
            </h2>

            {/* BOTONES */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="anime-btn"
              >
                VER PROYECTOS
              </motion.button>

              <a href="https://www.linkedin.com/in/thomas-fernando-rodriguez-anzola-882b8b214/" target="_blank" rel="noopener noreferrer" className="anime-btn">
                LINKEDIN // CONECTAR
              </a>
            </div>
          </motion.div>
        </section>

        {/* PROYECTOS */}
        <section id="projects" className="py-24">
          <Projects />
        </section>

        {/* CONTACTO */}
        <Contact />

      </div>
    </div>
  );
}

export default App;
