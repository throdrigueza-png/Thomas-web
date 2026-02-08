import React from 'react';
import projectsData from '../../data/projects.json';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projectsData.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ y: -10 }}
          className={`glass-card p-8 flex flex-col justify-between ${project.featured ? 'md:col-span-2 border-l-4 border-l-neon-yellow' : ''}`}
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-neon-yellow font-mono text-xs tracking-widest">{project.id}</span>
              {project.featured && <span className="bg-neon-yellow text-black text-[10px] px-2 py-0.5 font-black uppercase">Most Complex Backend</span>}
            </div>
            <h3 className={`font-black mb-4 ${project.featured ? 'text-4xl md:text-6xl' : 'text-2xl'}`}>
              {project.title}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-3xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] font-mono text-white/40 border border-white/10 px-2 py-1 uppercase">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a 
            href={project.link} 
            target="_blank" 
            className="inline-block text-neon-yellow font-bold tracking-widest text-sm hover:underline"
          >
            EXECUTE_PROJECT >
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
