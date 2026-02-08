import React from 'react';
import projectsData from '../../data/projects.json';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projectsData.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className={`glass-card group relative p-8 flex flex-col justify-between overflow-hidden ${
            project.featured ? 'md:col-span-2 border-l-4 border-l-neon-yellow shadow-[0_0_30px_rgba(250,255,0,0.1)]' : ''
          }`}
        >
          {/* Efecto de escáner interno al pasar el mouse */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-yellow/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[1.5s] pointer-events-none"></div>

          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="text-neon-yellow font-mono text-sm tracking-[0.3em] font-bold">
                [{project.id}]
              </span>
              {project.featured && (
                <span className="bg-neon-yellow text-black text-[10px] px-3 py-1 font-black uppercase tracking-tighter animate-pulse">
                  Flagship Project // Mission Critical
                </span>
              )}
            </div>

            <h3 className={`font-black mb-4 tracking-tighter leading-none group-hover:text-neon-yellow transition-colors ${
              project.featured ? 'text-5xl md:text-7xl' : 'text-3xl'
            }`}>
              {project.title}
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed font-medium text-lg max-w-4xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[11px] font-mono font-bold text-white/50 border border-white/10 px-3 py-1 uppercase tracking-widest bg-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-neon-yellow font-black tracking-[0.2em] text-sm group/link hover:gap-4 transition-all"
          >
            EXECUTE_PROJECT <span className="ml-2 group-hover:scale-150 transition-transform">{"//"}</span>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
