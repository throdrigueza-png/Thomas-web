import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-4xl md:text-5xl font-sao font-bold mb-12 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        >
          ¿INICIAMOS LA CONEXIÓN?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Tarjeta CV */}
            <motion.div whileHover={{ y: -5 }} className="p-8 glass-panel flex flex-col items-center justify-center">
                <h3 className="text-2xl font-sao font-bold text-[#00bfff] mb-2 drop-shadow-sm">PERFIL DE USUARIO</h3>
                <p className="text-gray-100 mb-6 font-medium">Descarga mi Hoja de Vida completa [PDF].</p>
                <a 
                    href="/cv.pdf" 
                    download="Thomas_Rodriguez_CV.pdf"
                    className="inline-block px-8 py-3 bg-white text-blue-900 font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all hover:scale-105"
                >
                    DOWNLOAD_CV
                </a>
            </motion.div>

            {/* Tarjeta Encuesta */}
            <motion.div whileHover={{ y: -5 }} className="p-8 glass-panel flex flex-col items-center justify-center">
                <h3 className="text-2xl font-sao font-bold text-[#ffb6c1] mb-2 drop-shadow-sm">FEEDBACK DEL SISTEMA</h3>
                <p className="text-gray-100 mb-6 font-medium">Ayúdame a mejorar la interfaz.</p>
                <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSekreJ-1dQo7sjM3RBuLTKr0y-EwpaixMi4ltG-S6MZ74Dc5A/viewform?usp=publish-editor" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-[#ffb6c1] text-pink-900 font-bold rounded-full shadow-[0_0_20px_rgba(255,182,193,0.5)] hover:shadow-[0_0_30px_rgba(255,182,193,0.8)] transition-all hover:scale-105"
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
