import React from 'react';
import { motion } from "framer-motion";
import MatrixBackground from './components/effects/MatrixBackground'; 
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

// 🔥 FIX DE VITE: Asegúrate de que este nombre sea EXACTAMENTE el de tu imagen en la carpeta src/
import animeBg from './anime-thomas.jpg'; 

function App() {
  return (
    <div className="relative min-h-screen text-slate-900 overflow-x-hidden selection:bg-[#00bfff] selection:text-white font-sans">
      
      {/* --- ESTILOS INYECTADOS DE BOTONES --- */}
      <style>{`
        .anime-btn {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          color: #0f172a; /* Letra oscura para contrastar con el botón claro */
          padding: 12px 28px;
          border-radius: 50px;
          font-weight: 800;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .anime-btn:hover { 
          background: white; 
          color: #0082b3; 
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 191, 255, 0.3);
          border-color: white;
        }
        .profile-img {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
        }
      `}</style>

      {/* --- EL FONDO 100% VISIBLE --- */}
      {/* Cero capas negras. Tu imagen brilla. */}
      <div 
        className="fixed top-0 left-0 w-full h-full -z-30 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${animeBg})` }}
      />

      {/* --- LA LLUVIA MATRIX (Opcional, muy sutil para no ensuciar el fondo) --- */}
      <div className="opacity-20 pointer-events-none mix-blend-overlay">
        <MatrixBackground />
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 container mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center pt-10">
          
          {/* CRISTAL BLANCO (Milky Glass - Match con tus otros componentes) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/40 backdrop-blur-xl border border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-10 md:p-16 flex flex-col items-center max-w-4xl w-full rounded-3xl"
          >
            {/* Texto decorativo */}
            <div className="mb-6 font-mono text-blue-900 font-bold text-xs md:text-sm tracking-[0.2em] border-b border-white/50 pb-2">
              ✧ SYSTEM_ONLINE : WELCOME_USER ✧
            </div>

            {/* FOTO DE PERFIL */}
            <motion.div whileHover={{ scale: 1.05 }} className="relative mb-8 group">
              <img 
                src="/img.jpg" /* IMPORTANTE: Asegúrate de tener tu foto en la carpeta public/ */
                alt="Thomas" 
                className="profile-img relative z-10 w-48 h-48 md:w-52 md:h-52 object-cover rounded-full border-4 border-white transition-all duration-300"
              />
            </motion.div>

            {/* TÍTULO */}
            <h1 className="font-sao text-5xl md:text-7xl font-bold tracking-widest mb-2 text-slate-900 drop-shadow-sm">
              THOMAS<span className="text-[#0082b3]">.DEV</span>
            </h1>

            {/* SUBTÍTULO ACTUALIZADO CON TU CV */}
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-700 mb-10 drop-shadow-sm">
              Estadística UNAL & Software Developer @ Davivienda
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
