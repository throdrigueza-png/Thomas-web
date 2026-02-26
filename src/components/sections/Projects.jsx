import React from 'react';
import projectsData from '../../data/projects.json';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 relative z-10">
      {projectsData.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`
            group relative p-8 flex flex-col justify-between overflow-hidden transition-all duration-300
            /* --- MAGIA MILKY GLASS (Cristal Blanco Pastel) --- */
            bg-white/40 backdrop-blur-xl border border-white/70 rounded-3xl
            shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,191,255,0.25)] hover:bg-white/50
            hover:border-white
            ${project.featured ? 'md:col-span-2' : ''}
          `}
        >
          {/* Destello sutil de luz al hacer hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6 border-b border-slate-300/50 pb-4">
              <span className="text-blue-900 font-mono text-xs tracking-[0.2em] font-extrabold opacity-80">
                SYSTEM_ID: {project.id}
              </span>
              {project.featured && (
                <span className="bg-blue-500/20 border border-blue-400 text-blue-900 text-[10px] px-3 py-1 font-black uppercase tracking-widest rounded-full backdrop-blur-md shadow-sm">
                  ★ MASTERPIECE
                </span>
              )}
            </div>

            {/* Título en color Pizarra/Azul Oscuro para contraste perfecto */}
            <h3 className={`font-sao font-bold mb-3 tracking-wide text-slate-900 group-hover:text-[#0082b3] transition-colors duration-300 ${
              project.featured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'
            }`}>
              {project.title}
            </h3>

            {/* Descripción clara y súper legible */}
            <p className="text-slate-800 mb-8 leading-relaxed text-sm md:text-base font-bold drop-shadow-sm">
              {project.description}
            </p>

            {/* Etiquetas de Tecnología blanquitas y limpias */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[11px] font-extrabold text-blue-900 bg-white/60 border border-white shadow-sm px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Botón de acción con degradado llamativo */}
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="self-start relative z-10 inline-flex items-center gap-2 text-white bg-gradient-to-r from-[#00bfff] to-[#007acc] hover:from-[#00a3e0] hover:to-[#005c99] px-7 py-3 rounded-full font-bold tracking-widest text-xs uppercase transition-all shadow-[0_4px_15px_rgba(0,191,255,0.4)] hover:shadow-[0_6px_20px_rgba(0,191,255,0.6)]"
          >
            <span>Ejecutar_Link</span>
            <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
