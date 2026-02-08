import React from 'react';
import { motion } from "framer-motion";
import MatrixBackground from './components/effects/MatrixBackground';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import profileData from './data/profile.json';

function App() {
  
  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Fondo negro base
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans selection:bg-neon-yellow selection:text-black">
      
      {/* 1. PARTICULAS (Fondo animado) */}
      <MatrixBackground />

      {/* 2. CONTENIDO (Por encima de las partículas) */}
      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
          
          {/* AVATAR: Usando tu archivo 'img.jpg' de la carpeta public */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-64 h-64 mb-8 rounded-full border-4 border-neon-yellow shadow-[0_0_30px_#FAFF00] overflow-hidden bg-black relative group"
          >
               <img 
                 src="/img.jpg" 
                 alt="Thomas Anime Avatar" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
               />
          </motion.div>

          {/* Nombre */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter"
          >
            <span className="text-white">Thomas</span> 
            <span className="text-neon-yellow drop-shadow-[0_0_15px_rgba(250,255,0,0.8)]">.Dev</span>
          </motion.h1>
          
          {/* Rol */}
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl font-bold text-black bg-neon-yellow px-6 py-2 rounded-full shadow-[0_0_20px_#FAFF00] mb-8"
          >
            ⚡ {profileData.personal.role} ⚡
          </motion.h2>

          {/* Skills Cute & Pro */}
          <div className="flex gap-3 flex-wrap justify-center mb-12">
             {['Python 🐍', 'React ⚛️', 'SQL 🗄️', 'Data 📊'].map((skill, i) => (
               <motion.span 
                 key={i} 
                 whileHover={{ scale: 1.1, rotate: 5 }}
                 className="px-4 py-2 border border-neon-yellow rounded-xl text-sm text-neon-yellow font-bold bg-black/50 hover:bg-neon-yellow hover:text-black transition-all cursor-pointer shadow-[0_0_5px_#FAFF00]"
               >
                 {skill}
               </motion.span>
             ))}
          </div>

          {/* Botón Principal */}
          <motion.button 
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px #FAFF00" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-neon-yellow text-black font-extrabold text-lg rounded-full shadow-[0_0_20px_#FAFF00] animate-pulse"
          >
            INITIALIZE SYSTEM_ 💛
          </motion.button>

        </div>

        {/* OTRAS SECCIONES */}
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
