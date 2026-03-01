import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import projectsData from '../data/projects.json';

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

/* ── Player avatar ── */
const Player = () => (
  <div
    className="fixed bottom-20 left-8 z-30 select-none pointer-events-none"
    title="Thomas.exe"
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
        {/* body */}
        <div
          className="absolute top-7 left-0 w-10 h-5 rounded-b-sm"
          style={{ background: '#1565C0' }}
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
  </div>
);

/* ── Floating score indicator ── */
const ScorePanel = () => (
  <div
    className="fixed top-20 left-6 z-30 pointer-events-none px-4 py-2 rounded-xl font-mono text-xs"
    style={{
      background: 'rgba(0,0,0,0.6)',
      border: `1px solid ${NEON_YELLOW}55`,
      color: NEON_YELLOW,
      boxShadow: `0 0 14px ${NEON_YELLOW}33`,
    }}
  >
    <div className="font-black tracking-widest">THOMAS · DEV</div>
    <div className="text-[10px] mt-0.5 opacity-70">SCROLL TO EXPLORE →</div>
    <div className="text-[10px] mt-0.5" style={{ color: NEON_PINK }}>
      ★ DAVIVIENDA + UNAL
    </div>
  </div>
);

/* ── Main GamingMode component ── */
const CARD_WIDTH_WITH_GAP = 280;  // px per card slot including gap
const PADDING_OFFSET = 400;       // extra leading/trailing padding in the track
const VIEWPORT_SAFE_MARGIN = 320; // approx visible viewport width offset

const GamingMode = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });

  /* map scroll 0→1 to horizontal translate 0 → -(totalWidth - viewport) */
  const totalCards = projectsData.length;
  const scrollWidth = totalCards * CARD_WIDTH_WITH_GAP + PADDING_OFFSET;

  const x = useTransform(scrollYProgress, [0, 1], [0, -(scrollWidth - VIEWPORT_SAFE_MARGIN)]);

  return (
    <div
      ref={scrollRef}
      className="relative w-full"
      /* tall enough so scroll covers the full side-scroller */
      style={{ height: `${Math.max(300, totalCards * 60)}vh` }}
    >
      {/* sticky viewport */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden" style={skyStyle}>

        {/* background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <StarField />
          <Cloud x="8%" y="12%" size={1.2} />
          <Cloud x="30%" y="6%" size={0.8} />
          <Cloud x="55%" y="15%" size={1.0} />
          <Cloud x="75%" y="8%" size={1.5} />
        </div>

        {/* score & player */}
        <ScorePanel />
        <Player />

        {/* horizontal scrolling track */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <Motion.div
            style={{ x }}
            className="flex items-end gap-14 pl-56 pr-32"
          >
            {/* START flag */}
            <div className="flex-shrink-0 flex flex-col items-center" style={{ marginBottom: 136 }}>
              <div
                className="font-black text-lg uppercase tracking-widest"
                style={{ color: NEON_GREEN, textShadow: `0 0 14px ${NEON_GREEN}` }}
              >
                ▶ START
              </div>
              <div className="w-0.5 h-16 mt-2" style={{ background: NEON_GREEN, boxShadow: `0 0 8px ${NEON_GREEN}` }} />
            </div>

            {/* project cards */}
            {projectsData.map((project, i) => (
              <LevelBox key={project.id} project={project} index={i} />
            ))}

            {/* END flag */}
            <div className="flex-shrink-0 flex flex-col items-center" style={{ marginBottom: 136 }}>
              <div
                className="font-black text-lg uppercase tracking-widest"
                style={{ color: NEON_PINK, textShadow: `0 0 14px ${NEON_PINK}` }}
              >
                🏁 END
              </div>
              <div className="w-0.5 h-16 mt-2" style={{ background: NEON_PINK, boxShadow: `0 0 8px ${NEON_PINK}` }} />
            </div>
          </Motion.div>
        </div>

        {/* ground strip */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={groundStyle}
        />

        {/* progress bar */}
        <Motion.div
          className="absolute bottom-16 left-0 h-1"
          style={{
            scaleX: scrollYProgress,
            transformOrigin: 'left',
            background: `linear-gradient(90deg, ${NEON_CYAN}, ${NEON_PINK})`,
            boxShadow: `0 0 8px ${NEON_CYAN}`,
          }}
        />

        {/* contact bar at bottom */}
        <div
          className="absolute bottom-0 right-0 flex items-center gap-4 px-6 py-2 text-[10px] font-black uppercase tracking-widest z-10"
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
    </div>
  );
};

export default GamingMode;
