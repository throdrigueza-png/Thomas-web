import React, { useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import EnterpriseMode from './components/EnterpriseMode';
import GamingMode from './components/GamingMode';
import ThemeToggle from './components/ThemeToggle';
import SocialFloat from './components/SocialFloat';

function App() {
  const [mode, setMode] = useState('enterprise');

  const toggleMode = () =>
    setMode((prev) => (prev === 'enterprise' ? 'gaming' : 'enterprise'));

  return (
    <div className="relative overflow-x-hidden">
      {/* Floating mode toggle */}
      <ThemeToggle mode={mode} onToggle={toggleMode} />

      {/* Floating social media buttons */}
      <SocialFloat mode={mode} />

      {/* Mode switch with smooth transition */}
      <AnimatePresence mode="wait">
        {mode === 'enterprise' ? (
          <Motion.div
            key="enterprise"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <EnterpriseMode />
          </Motion.div>
        ) : (
          <Motion.div
            key="gaming"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <GamingMode />
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
