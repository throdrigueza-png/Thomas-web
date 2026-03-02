import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import projectsData from '../data/projects.json';
import animeThomas from '../anime-thomas.jpg';

/* ── Neon colour tokens ── */
const NEON_YELLOW = '#FAFF00';
const NEON_PINK   = '#FF2D78';
const NEON_CYAN   = '#00F5FF';
const NEON_GREEN  = '#39FF14';
const SKY_BLUE    = '#4FC3F7';

const CARD_COLORS = [NEON_CYAN, NEON_PINK, NEON_GREEN, NEON_YELLOW, SKY_BLUE, '#B026FF', '#FF6D00'];

/* ── Pixel‑art ground & decorative CSS ── */
const groundStyle = {
  background: `
    repeating-linear-gradient(
      90deg,
      #5D4037 0px 32px,
      #4E342E 32px 64px
    )
  `,
  boxShadow: 'inset 0 4px 0 #8D6E63',
};

const skyStyle = {
  background: 'linear-gradient(180deg, #1a0533 0%, #0d1b4b 40%, #071028 100%)',
};

/* ── Cloud decoration ── */
const Cloud = ({ x, y, size = 1 }) => (
  <div
    className="absolute pointer-events-none"
    style={{ left: x, top: y, transform: `scale(${size})`, transformOrigin: 'top left' }}
  >
    <div
      className="rounded-full"
      style={{
        width: 80, height: 28,
        background: 'rgba(176,38,255,0.25)',
        boxShadow: '0 0 18px rgba(176,38,255,0.4)',
        filter: 'blur(4px)',
      }}
    />
  </div>
);

/* ── Pre-computed star data (deterministic, avoids impure Math.random in render) ── */
const STAR_DATA = Array.from({ length: 40 }, (_, i) => ({
  size: (i * 7 + 3) % 10 > 6 ? 2.5 : 1.5,
  left: `${(i * 137.5) % 100}%`,
  top: `${(i * 53.1) % 65}%`,
  background: i % 5 === 0 ? NEON_YELLOW : 'white',
  opacity: 0.4 + (i % 4) * 0.15,
  boxShadow: i % 7 === 0 ? `0 0 6px ${NEON_CYAN}` : 'none',
}));

/* ── Star decoration ── */
const StarField = () => (
  <>
    {STAR_DATA.map((star, i) => (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          width: star.size,
          height: star.size,
          left: star.left,
          top: star.top,
          background: star.background,
          opacity: star.opacity,
          boxShadow: star.boxShadow,
        }}
      />
    ))}
  </>
);

/* ── Project "level box" card ── */
const LevelBox = ({ project, index }) => {
  const color = CARD_COLORS[index % CARD_COLORS.length];
  const isTop = index % 2 === 0;

  return (
    <Motion.div
      initial={{ opacity: 0, y: isTop ? -30 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.06, rotate: [-0.5, 0.5, 0] }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className="relative flex-shrink-0 cursor-pointer"
      style={{
        marginTop: isTop ? 40 : 120,
        width: 220,
      }}
    >
      {/* mystery box lid */}
      <div
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-5 rounded-t-md"
        style={{ background: color, boxShadow: `0 0 12px ${color}` }}
      />

      {/* card body */}
      <div
        className="rounded-xl p-5 relative overflow-hidden"
        style={{
          background: 'rgba(8, 4, 28, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1.5px solid ${color}55`,
          boxShadow: `0 0 20px ${color}33`,
        }}
      >
        {/* neon glow corner */}
        <div
          className="absolute top-0 right-0 w-16 h-16 rounded-full opacity-20 pointer-events-none"
          style={{ background: color, filter: 'blur(20px)', transform: 'translate(30%,-30%)' }}
        />

        <div
          className="text-[10px] font-black uppercase tracking-widest mb-2 font-mono"
          style={{ color }}
        >
          LVL {String(index + 1).padStart(2, '0')}
        </div>

        <h3
          className="font-black text-sm leading-tight mb-2 text-white"
          style={{ textShadow: `0 0 10px ${color}88` }}
        >
          {project.title}
        </h3>

        <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
          {project.description.slice(0, 80)}…
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.slice(0, 3).map((t, i) => (
            <span
              key={i}
              className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full"
              style={{
                color,
                background: `${color}18`,
                border: `1px solid ${color}44`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-[10px] font-black uppercase tracking-widest transition-all inline-flex items-center gap-1"
          style={{ color }}
        >
          PLAY → <span className="text-xs">🎮</span>
        </a>
      </div>
    </Motion.div>
  );
};

/* ── Player avatar — busito rosa, clickable ── */
const Player = ({ onClick }) => (
  <div
    className="flex flex-col items-center cursor-pointer select-none"
    onClick={onClick}
    title="¡Tócame para el siguiente proyecto!"
  >
    <Motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Pixel body */}
      <div className="relative w-10 h-12">
        {/* head */}
        <div
          className="absolute top-0 left-1 w-8 h-7 rounded-t-xl"
          style={{ background: '#FFD54F', boxShadow: '0 0 8px #FAFF00aa' }}
        />
        {/* hair */}
        <div
          className="absolute -top-1.5 left-0.5 w-9 h-3 rounded-t-full"
          style={{ background: '#5D4037' }}
        />
        {/* body — busito rosa */}
        <div
          className="absolute top-7 left-0 w-10 h-5 rounded-b-sm"
          style={{ background: '#FF69B4', boxShadow: '0 0 10px #FF69B488' }}
        />
        {/* code icon badge */}
        <div
          className="absolute top-8 left-2.5 text-[8px] font-black"
          style={{ color: NEON_CYAN }}
        >
          {'</>'}
        </div>
        {/* legs */}
        <div className="absolute bottom-0 left-1 w-3 h-3 rounded-b-sm" style={{ background: '#5D4037' }} />
        <div className="absolute bottom-0 right-1 w-3 h-3 rounded-b-sm" style={{ background: '#5D4037' }} />
      </div>
    </Motion.div>
    {/* shadow */}
    <div
      className="mt-1 mx-auto w-8 h-2 rounded-full opacity-40"
      style={{ background: '#000', filter: 'blur(4px)' }}
    />
    <p
      className="text-center mt-1 font-black text-[9px] uppercase tracking-widest"
      style={{ color: NEON_YELLOW, textShadow: `0 0 8px ${NEON_YELLOW}` }}
    >
      THOMAS.EXE
    </p>
    <p
      className="text-center font-black text-[8px] uppercase tracking-widest animate-pulse"
      style={{ color: NEON_PINK }}
    >
      TAP →
    </p>
  </div>
);

/* ── Floating score indicator ── */
const ScorePanel = () => (
  <div
    className="absolute top-20 left-4 z-30 pointer-events-none px-4 py-2 rounded-xl font-mono text-xs"
    style={{
      background: 'rgba(0,0,0,0.6)',
      border: `1px solid ${NEON_YELLOW}55`,
      color: NEON_YELLOW,
      boxShadow: `0 0 14px ${NEON_YELLOW}33`,
    }}
  >
    <div className="font-black tracking-widest">THOMAS · DEV</div>
    <div className="text-[10px] mt-0.5 opacity-70">TAP AVATAR TO EXPLORE</div>
    <div className="text-[10px] mt-0.5" style={{ color: NEON_PINK }}>
      ★ DAVIVIENDA + UNAL
    </div>
  </div>
);

/* ── Carousel slide variants ── */
const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 420 : -420, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -420 : 420, opacity: 0 }),
};

/* ── Main GamingMode component — carousel layout ── */
const GamingMode = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <div
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={skyStyle}
    >
      {/* background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <StarField />
        <Cloud x="8%" y="10%" size={1.2} />
        <Cloud x="35%" y="5%" size={0.8} />
        <Cloud x="60%" y="12%" size={1.0} />
        <Cloud x="80%" y="6%" size={1.4} />
      </div>

      {/* score panel */}
      <ScorePanel />

      {/* ── anime-thomas.jpg banner ── */}
      <div className="relative z-10 flex justify-center pt-16 pb-1 sm:pt-20">
        <img
          src={animeThomas}
          alt="Thomas Anime Banner"
          className="h-28 sm:h-36 md:h-44 object-contain drop-shadow-[0_0_18px_rgba(250,255,0,0.55)]"
        />
      </div>

      {/* project counter */}
      <div
        className="relative z-10 text-center font-mono text-[11px] font-black tracking-widest mb-1"
        style={{ color: NEON_CYAN }}
      >
        LVL {String(currentIndex + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}
      </div>

      {/* ── carousel area ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-2">
        {/* prev arrow */}
        <button
          onClick={prevProject}
          aria-label="Proyecto anterior"
          className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full mr-4 flex-shrink-0 transition-all hover:scale-110"
          style={{
            background: 'rgba(0,0,0,0.5)',
            border: `1.5px solid ${NEON_PINK}66`,
            color: NEON_PINK,
            boxShadow: `0 0 12px ${NEON_PINK}44`,
            fontSize: 20,
            fontWeight: 900,
          }}
        >
          ‹
        </button>

        {/* card container */}
        <div className="relative w-full max-w-xs sm:max-w-sm overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <Motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 340, damping: 32 }}
            >
              <LevelBox project={projectsData[currentIndex]} index={currentIndex} />
            </Motion.div>
          </AnimatePresence>
        </div>

        {/* next arrow */}
        <button
          onClick={nextProject}
          aria-label="Siguiente proyecto"
          className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full ml-4 flex-shrink-0 transition-all hover:scale-110"
          style={{
            background: 'rgba(0,0,0,0.5)',
            border: `1.5px solid ${NEON_CYAN}66`,
            color: NEON_CYAN,
            boxShadow: `0 0 12px ${NEON_CYAN}44`,
            fontSize: 20,
            fontWeight: 900,
          }}
        >
          ›
        </button>
      </div>

      {/* ── interactive avatar (busito rosa) — bottom center ── */}
      <div className="relative z-10 flex justify-center pb-20 sm:pb-16">
        <Player onClick={nextProject} />
      </div>

      {/* ground strip */}
      <div className="absolute bottom-0 left-0 right-0 h-16" style={groundStyle} />

      {/* progress dots */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-1.5 z-10 pb-1">
        {projectsData.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
            className="rounded-full transition-all"
            style={{
              width: i === currentIndex ? 16 : 6,
              height: 6,
              background: i === currentIndex ? NEON_CYAN : 'rgba(255,255,255,0.3)',
              boxShadow: i === currentIndex ? `0 0 8px ${NEON_CYAN}` : 'none',
            }}
          />
        ))}
      </div>

      {/* contact bar */}
      <div
        className="absolute bottom-0 right-0 flex items-center gap-4 px-4 py-1 text-[10px] font-black uppercase tracking-widest z-10"
        style={{ color: NEON_YELLOW }}
      >
        <a
          href="https://www.linkedin.com/in/thomas-fernando-rodriguez-anzola-882b8b214/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          LinkedIn
        </a>
        <a href="/cv.pdf" download className="hover:opacity-70 transition-opacity">
          CV
        </a>
      </div>
    </div>
  );
};

export default GamingMode;
