import React, { useEffect, useRef } from 'react';

const MatrixBackground = ({ style }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    let drops = [];
    
    const fontSize = 16;
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const nums = '0123456789';
    const extra = 'SYS-LINK-SAO-DEV-⚡'; 
    const alphabet = katakana + nums + extra;

    const initMatrix = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      const newColumnsCount = Math.floor(width / fontSize);
      const newDrops = [];
      for (let i = 0; i < newColumnsCount; i++) {
        newDrops[i] = drops[i] || 1; 
      }
      drops = newDrops;
    };

    initMatrix();

    const draw = () => {
      // El fondo transparente para que deje estela
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      // --- DEGRADADO ÉPICO (Azul Cielo a Verde Prado) ---
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, 'rgba(135, 206, 235, 0.9)'); // Azul SAO arriba
      gradient.addColorStop(0.6, 'rgba(144, 238, 144, 0.9)'); // Transición a verde en el centro
      gradient.addColorStop(1, 'rgba(50, 205, 50, 0.9)'); // Verde pasto abajo

      ctx.fillStyle = gradient; 
      ctx.font = 'bold ' + fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);
    window.addEventListener('resize', initMatrix);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', initMatrix);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={style}
    />
  );
};

export default MatrixBackground;
