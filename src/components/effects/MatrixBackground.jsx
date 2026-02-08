import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    let columns = [];
    let drops = [];
    
    // Configuración
    const fontSize = 16;
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const nums = '0123456789';
    const extra = 'DATA-CODE-THOMAS-DEV-⚡'; 
    const alphabet = katakana + nums + extra;

    // Función maestra de inicialización/re-cálculo
    const initMatrix = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      const newColumnsCount = Math.floor(width / fontSize);
      
      // Crear nuevas gotas, manteniendo las existentes si es posible para que no "parpadee" todo
      const newDrops = [];
      for (let i = 0; i < newColumnsCount; i++) {
        // Si ya existía una gota ahí, la mantenemos, si no, empieza arriba
        newDrops[i] = drops[i] || 1; 
      }
      drops = newDrops;
    };

    // Inicializar
    initMatrix();

    // DIBUJAR
    const draw = () => {
      // Fondo semi-transparente para rastro
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#FAFF00'; // TU AMARILLO NEÓN
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

    // Event Listener mejorado para Resize
    window.addEventListener('resize', initMatrix);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', initMatrix);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: '#000000' }}
    />
  );
};

export default MatrixBackground;