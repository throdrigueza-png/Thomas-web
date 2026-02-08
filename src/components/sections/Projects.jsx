import React from 'react';
import projectsData from '../../data/projects.json';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      {projectsData.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className={`
            group relative p-8 flex flex-col justify-between overflow-hidden rounded-xl transition-all duration-300
            /* AQUÍ ESTÁ LA MAGIA DEL DISEÑO: */
            bg-zinc-900/70 backdrop-blur-md border border-white/10 
            hover:border-neon-yellow/50 hover:shadow-[0_0_30px_rgba(250,255,0,0.15)]
            ${project.featured ? 'md:col-span-2 border-l-4 border-l-neon-yellow' : ''}
          `}
        >
          {/* Fondo gradiente sutil al hacer hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div>
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <span className="text-neon-yellow font-mono text-xs tracking-[0.2em] font-bold opacity-80">
                PROJECT_ID: {project.id}
              </span>
              {project.featured && (
                <span className="bg-neon-yellow/10 border border-neon-yellow text-neon-yellow text-[10px] px-3 py-1 font-black uppercase tracking-widest rounded">
                  ★ CLASSIFIED
                </span>
              )}
            </div>

            <h3 className={`font-black mb-3 tracking-tighter text-white group-hover:text-neon-yellow transition-colors duration-300 ${
              project.featured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'
            }`}>
              {project.title}
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base font-light">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] font-mono font-bold text-gray-300 bg-black/50 border border-white/10 px-3 py-1 rounded uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-2 text-neon-yellow font-bold tracking-widest text-xs uppercase border-b border-transparent hover:border-neon-yellow transition-all pb-1"
          >
            <span>Execute_Protocol</span>
            <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;