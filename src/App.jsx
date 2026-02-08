import React from 'react';
import { motion } from "framer-motion";
import MatrixBackground from './components/effects/MatrixBackground';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <MatrixBackground />
      
      {/* Overlay de ruido estático */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-[60] bg-[url('https://res.cloudinary.com/dyd911kmh/image/upload/v1640050215/noise_v96sq6.png')]"></div>

      <div className="relative z-10 container mx-auto px-6">
        <section className="h-screen flex flex-col items-center justify-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 relative group"
          >
            <div className="absolute -inset-4 bg-neon-yellow opacity-10 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <img src="/img.jpg" className="w-56 h-56 md:w-72 md:h-72 rounded-none border-t-4 border-l-4 border-neon-yellow object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-500" />
            <div className="absolute bottom-[-10px] right-[-10px] w-20 h-20 border-b-4 border-r-4 border-neon-yellow z-20"></div>
          </motion.div>

          <h1 className="glitch text-7xl md:text-[10rem] font-black tracking-tighter leading-none mb-6" data-text="THOMAS.DEV">
            THOMAS<span className="text-neon-yellow">.DEV</span>
          </h1>

          <div className="flex flex-col items-center gap-6">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-neon-yellow text-black px-6 py-1 font-mono font-bold text-sm md:text-xl uppercase tracking-[0.3em]"
            >
              System Architect // Data Scientist
            </motion.p>
            
            <p className="text-white/40 font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase">
              UNAL Statistics _ SENA Software Analysis
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="mt-16 border-2 border-neon-yellow text-neon-yellow px-10 py-4 font-black tracking-widest uppercase text-sm hover:shadow-[0_0_50px_rgba(250,255,0,0.4)] transition-all"
          >
            Initialize_Sequence_
          </motion.button>
        </section>

        <section id="projects" className="py-32">
          <Projects />
        </section>

        <Contact />
      </div>
    </div>
  );
}

export default App;
