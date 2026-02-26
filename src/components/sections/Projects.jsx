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
            glass-panel /* Usamos la clase de cristal limpio del CSS */
            hover:shadow-[0_0_40px_rgba(0,191,255,0.3)] hover:border-[#00bfff]
            ${project.featured ? 'md:col-span-2' : ''}
          `}
        >
          {/* Destello interno al hacer hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
              <span className="text-[#e0f7fa] font-mono text-xs tracking-[0.2em] font-bold opacity-90">
                SYSTEM_ID: {project.id}
              </span>
              {project.featured && (
                <span className="bg-[#00bfff]/20 border border-[#00bfff] text-[#e0f7fa] text-[10px] px-3 py-1 font-black uppercase tracking-widest rounded-full backdrop-blur-md">
                  ★ MASTERPIECE
                </span>
              )}
            </div>

            <h3 className={`font-sao font-bold mb-3 tracking-wide text-white drop-shadow-md group-hover:text-[#00bfff] transition-colors duration-300 ${
              project.featured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'
            }`}>
              {project.title}
            </h3>

            <p className="text-gray-100 mb-8 leading-relaxed text-sm md:text-base font-medium drop-shadow-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[11px] font-bold text-white bg-white/10 border border-white/30 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="self-start relative z-10 inline-flex items-center gap-2 text-white bg-[#00bfff]/80 hover:bg-[#00bfff] px-6 py-2 rounded-full font-bold tracking-widest text-xs uppercase transition-all shadow-[0_4px_15px_rgba(0,191,255,0.4)]"
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
