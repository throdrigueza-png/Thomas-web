import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import projects from "../../data/projects.json";

const Projects = () => {
  const defaultOptions = {
    reverse:        false,
    max:            25,
    perspective:    1000,
    scale:          1.05,
    speed:          1000,
    transition:     true,
    axis:           null,
    reset:          true,
    easing:         "cubic-bezier(.03,.98,.52,.99)",
  }

  return (
    <section id="projects" className="py-20 px-4 relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-thomas-purple to-hacker-green"
      >
        PROJECTS_DATABASE
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Tilt key={index} options={defaultOptions} className="h-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full bg-gray-900 bg-opacity-40 backdrop-blur-md border border-gray-700 hover:border-thomas-purple p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(128,0,128,0.4)] transition-all group"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-hacker-green font-mono text-xs border border-hacker-green px-2 py-1 rounded">
                  {project.category}
                </span>
                <span className="text-gray-500 text-xs">ID: 0{project.id}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-thomas-purple transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 h-20 overflow-hidden">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center py-2 border border-thomas-purple text-thomas-purple hover:bg-thomas-purple hover:text-white transition-all rounded font-mono font-bold"
              >
                ACCESS SYSTEM &gt;&gt;
              </a>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;