import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
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
    const extra = 'DATA-CODE-THOMAS-DEV-⚡'; 
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
      // El fondo negro es crucial porque con mix-blend-screen se vuelve transparente
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#FAFF00'; // Tu amarillo neón
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

    const interval = setInterval(draw, 33);
    window.addEventListener('resize', initMatrix);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', initMatrix);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // TRUCO MAESTRO: mix-blend-screen fusiona el canvas con la foto del prado
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none mix-blend-screen opacity-90"
    />
  );
};

export default MatrixBackground;
