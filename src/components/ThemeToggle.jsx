import React from 'react';
import { motion as Motion } from 'framer-motion';

const ThemeToggle = ({ mode, onToggle }) => {
  const isGaming = mode === 'gaming';

  return (
    <Motion.button
      onClick={onToggle}
      title={isGaming ? 'Cambiar a Enterprise Mode' : 'Cambiar a Gaming Mode'}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      className="fixed top-5 right-5 z-[9999] flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm tracking-widest select-none"
      style={{
        background: isGaming
          ? 'rgba(250, 255, 0, 0.12)'
          : 'rgba(0, 191, 255, 0.12)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: isGaming
          ? '1.5px solid rgba(250, 255, 0, 0.5)'
          : '1.5px solid rgba(0, 191, 255, 0.5)',
        color: isGaming ? '#FAFF00' : '#00bfff',
        boxShadow: isGaming
          ? '0 0 18px rgba(250,255,0,0.25), inset 0 0 8px rgba(250,255,0,0.08)'
          : '0 0 18px rgba(0,191,255,0.25), inset 0 0 8px rgba(0,191,255,0.08)',
      }}
    >
      <Motion.span
        key={mode}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.2 }}
        className="text-lg"
      >
        {isGaming ? '🎮' : '🚀'}
      </Motion.span>
      <span className="hidden md:inline">
        {isGaming ? 'GAMING MODE' : 'ENTERPRISE MODE'}
      </span>
      <span className="text-xs opacity-60">↔</span>
    </Motion.button>
  );
};

export default ThemeToggle;
