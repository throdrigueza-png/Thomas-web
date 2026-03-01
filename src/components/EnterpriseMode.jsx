import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import projectsData from '../data/projects.json';
import profileData from '../data/profile.json';

/* ── Cosmos particles config ── */
const particlesOptions = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: { onHover: { enable: true, mode: 'grab' }, resize: true },
    modes: { grab: { distance: 140, links: { opacity: 0.4 } } },
  },
  particles: {
    color: { value: ['#a8c8ff', '#c4b5fd', '#ffffff'] },
    links: {
      color: '#4f8fcc',
      distance: 130,
      enable: true,
      opacity: 0.18,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: 'none',
      outModes: { default: 'bounce' },
    },
    number: { density: { enable: true, area: 900 }, value: 90 },
    opacity: { value: { min: 0.2, max: 0.8 } },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 2.5 } },
  },
  detectRetina: true,
};

/* ── Individual project card ── */
const ProjectCard = ({ project }) => (
  <Motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    className="group relative p-6 rounded-2xl overflow-hidden transition-all duration-300"
    style={{
      background: 'rgba(5, 10, 30, 0.55)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      border: '1px solid rgba(100,160,255,0.18)',
    }}
  >
    {/* glow border on hover */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        boxShadow: 'inset 0 0 0 1px rgba(0,191,255,0.55), 0 0 28px rgba(0,191,255,0.15)',
      }}
    />

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-500 opacity-70">
          /{String(project.id).padStart(2, '0')}
        </span>
        {project.featured && (
          <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border border-cyan-500/40 text-cyan-400">
            ★ FEATURED
          </span>
        )}
      </div>

      <h3
        className={`font-bold mb-2 text-slate-100 group-hover:text-cyan-300 transition-colors duration-300 ${
          project.featured ? 'text-2xl' : 'text-lg'
        }`}
      >
        {project.title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="text-[10px] font-bold text-cyan-400 bg-cyan-900/30 border border-cyan-800/50 px-2 py-0.5 rounded-full uppercase tracking-wide"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-200 transition-colors tracking-widest uppercase"
      >
        Ver proyecto <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
      </a>
    </div>
  </Motion.div>
);

/* ── Main EnterpriseMode component ── */
const EnterpriseMode = () => {
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const containerRef = useRef(null);
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden"
      style={{ background: '#020817' }}
    >
      {/* Particles background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          id="enterprise-particles"
          init={particlesInit}
          options={particlesOptions}
          className="w-full h-full"
        />
      </div>

      {/* Flashlight cursor effect */}
      <div
        className="fixed inset-0 z-10 pointer-events-none transition-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px,
            rgba(30,58,138,0.18) 0%,
            rgba(88,28,135,0.10) 35%,
            transparent 70%)`,
        }}
      />

      {/* Main layout */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-12 lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-16">

        {/* LEFT — Sticky bio */}
        <aside className="lg:sticky lg:top-12 lg:self-start lg:h-[calc(100vh-6rem)] flex flex-col justify-between pb-8">
          <div>
            {/* Avatar */}
            <Motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <img
                  src="/img.jpg"
                  alt="Thomas"
                  className="w-20 h-20 rounded-full object-cover border-2 border-cyan-500/40"
                  style={{ boxShadow: '0 0 28px rgba(0,191,255,0.3)' }}
                />
                <span
                  className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#020817]"
                  title="Disponible"
                />
              </div>
            </Motion.div>

            {/* Name & title */}
            <Motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-4xl font-extrabold text-slate-100 tracking-tight mb-1">
                Thomas<span className="text-cyan-400">.</span>
              </h1>
              <p className="text-cyan-400 font-bold text-sm tracking-widest uppercase mb-4">
                Software Developer & Estadístico
              </p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                {profileData.personal.bio}
              </p>
            </Motion.div>

            {/* Skills */}
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 space-y-3"
            >
              {profileData.skills.slice(0, 4).map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300 font-bold">{skill.name}</span>
                    <span className="text-cyan-500 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                    <Motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </Motion.div>
          </div>

          {/* Social & contact links */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="https://www.linkedin.com/in/thomas-fernando-rodriguez-anzola-882b8b214/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profileData.personal.email}`}
              className="text-slate-500 hover:text-cyan-400 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              Email
            </a>
            <a
              href="/cv.pdf"
              download
              className="text-slate-500 hover:text-cyan-400 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              CV
            </a>
          </Motion.div>
        </aside>

        {/* RIGHT — Scrollable projects */}
        <main className="pt-2 lg:pt-0">
          <Motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-500 mb-8 border-b border-slate-800 pb-4"
          >
            // Proyectos
          </Motion.h2>

          <div className="grid gap-5">
            {projectsData.map((project, i) => (
              <Motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * i }}
              >
                <ProjectCard project={project} />
              </Motion.div>
            ))}
          </div>

          {/* Contact cards */}
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {/* CV */}
            <Motion.div
              whileHover={{ y: -4 }}
              className="relative group p-6 rounded-2xl text-center transition-all duration-300"
              style={{
                background: 'rgba(5,10,30,0.55)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(100,160,255,0.18)',
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(0,191,255,0.55)' }}
              />
              <h3 className="text-slate-100 font-bold mb-2">Hoja de Vida</h3>
              <p className="text-slate-400 text-sm mb-4">Descarga mi CV completo en PDF.</p>
              <a
                href="/cv.pdf"
                download="Thomas_Rodriguez_CV.pdf"
                className="inline-block px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white transition-all"
                style={{
                  background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6)',
                  boxShadow: '0 0 18px rgba(14,165,233,0.35)',
                }}
              >
                DOWNLOAD_CV
              </a>
            </Motion.div>

            {/* Survey */}
            <Motion.div
              whileHover={{ y: -4 }}
              className="relative group p-6 rounded-2xl text-center transition-all duration-300"
              style={{
                background: 'rgba(5,10,30,0.55)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(100,160,255,0.18)',
              }}
            >
              <h3 className="text-slate-100 font-bold mb-2">Feedback</h3>
              <p className="text-slate-400 text-sm mb-4">Ayúdame a mejorar la interfaz.</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSekreJ-1dQo7sjM3RBuLTKr0y-EwpaixMi4ltG-S6MZ74Dc5A/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white transition-all"
                style={{
                  background: 'linear-gradient(90deg, #ec4899, #a855f7)',
                  boxShadow: '0 0 18px rgba(236,72,153,0.35)',
                }}
              >
                START_SURVEY
              </a>
            </Motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EnterpriseMode;
