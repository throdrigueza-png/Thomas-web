import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Título Principal (Se queda blanco con sombra para resaltar sobre el fondo de la imagen) */}
        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-sao font-bold mb-12 text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
        >
          ¿INICIAMOS LA CONEXIÓN?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
            {/* --- TARJETA CV (MILKY GLASS) --- */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative p-8 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 bg-white/40 backdrop-blur-xl border border-white/70 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,191,255,0.25)] hover:bg-white/50 hover:border-white"
            >
                <h3 className="text-2xl font-sao font-bold text-slate-900 mb-2 group-hover:text-[#0082b3] transition-colors duration-300">
                    PERFIL DE USUARIO
                </h3>
                <p className="text-slate-800 mb-8 font-bold">
                    Descarga mi Hoja de Vida completa [PDF].
                </p>
                <a 
                    href="/cv.pdf" 
                    download="Thomas_Rodriguez_CV.pdf"
                    className="relative z-10 inline-block px-8 py-3 bg-gradient-to-r from-[#00bfff] to-[#007acc] hover:from-[#00a3e0] hover:to-[#005c99] text-white font-bold rounded-full shadow-[0_4px_15px_rgba(0,191,255,0.4)] hover:shadow-[0_6px_20px_rgba(0,191,255,0.6)] transition-all uppercase tracking-widest text-xs"
                >
                    DOWNLOAD_CV
                </a>
            </motion.div>

            {/* --- TARJETA ENCUESTA (MILKY GLASS) --- */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative p-8 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 bg-white/40 backdrop-blur-xl border border-white/70 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(255,182,193,0.4)] hover:bg-white/50 hover:border-white"
            >
                <h3 className="text-2xl font-sao font-bold text-slate-900 mb-2 group-hover:text-[#d6336c] transition-colors duration-300">
                    FEEDBACK DEL SISTEMA
                </h3>
                <p className="text-slate-800 mb-8 font-bold">
                    Ayúdame a mejorar la interfaz.
                </p>
                <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSekreJ-1dQo7sjM3RBuLTKr0y-EwpaixMi4ltG-S6MZ74Dc5A/viewform?usp=publish-editor" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-block px-8 py-3 bg-gradient-to-r from-[#ff87a0] to-[#d6336c] hover:from-[#ff9eb2] hover:to-[#c2255c] text-white font-bold rounded-full shadow-[0_4px_15px_rgba(255,135,160,0.4)] hover:shadow-[0_6px_20px_rgba(255,135,160,0.6)] transition-all uppercase tracking-widest text-xs"
                >
                    START_SURVEY
                </a>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
