// ... (imports anteriores)

const techStack = [
  { name: 'Python (DS/AI)', color: '#3776AB' },
  { name: 'React 19', color: '#61DAFB' },
  { name: 'Azure Cloud', color: '#0078D4' },
  { name: 'SQL / NoSQL', color: '#4479A1' },
  { name: 'C# / Java', color: '#512BD4' },
  { name: 'Full Stack JS', color: '#F7DF1E' }
];

function App() {
  // ... (scrollToProjects logic)

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-neon-yellow selection:text-black">
      <MatrixBackground />
      
      <div className="relative z-10">
        <section className="flex flex-col items-center justify-center min-h-screen text-center p-6">
          {/* Avatar con aura pulsante */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-48 h-48 md:w-64 md:h-64 mb-10"
          >
            <div className="absolute inset-0 rounded-full bg-neon-yellow opacity-20 blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-2 border-neon-yellow overflow-hidden shadow-[0_0_50px_rgba(250,255,0,0.3)]">
              <img src="/img.jpg" alt="Thomas" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-7xl md:text-9xl font-black mb-2 tracking-tighter">
              THOMAS<span className="text-neon-yellow italic">.DEV</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl uppercase tracking-[0.3em] mb-8">
              Estadístico & Software Architect
            </p>
          </motion.div>

          {/* Vendiéndote más: Grid de Tecnologías */}
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mb-12">
            {techStack.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="px-4 py-1 border border-white/20 rounded-full text-xs font-mono hover:border-neon-yellow transition-colors"
              >
                {tech.name}
              </motion.span>
            ))}
          </div>

          <motion.button 
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, letterSpacing: "4px" }}
            className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neon-yellow transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
          >
            Initialize System_
          </motion.button>
        </section>

        <Projects />
        <Contact />
      </div>
    </div>
  );
}
