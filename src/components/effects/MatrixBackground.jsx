import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 1. Configurar tamaño completo
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 2. Caracteres: Katakana + Números + Tu Nombre
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const nums = '0123456789';
    const extra = 'DATA-CODE-THOMAS-DEV-⚡'; 
    const alphabet = katakana + nums + extra;

    // 3. Configuración de columnas
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array para las caídas (una por columna)
    const drops = new Array(columns).fill(1);

    // 4. Función de dibujo (El Loop)
    const draw = () => {
      // Pintar fondo negro semitransparente para dejar rastro (efecto estela)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Configurar texto
      ctx.fillStyle = '#FAFF00'; // TU AMARILLO NEÓN
      ctx.font = 'bold ' + fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        // Elegir caracter aleatorio
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        // Dibujar caracter
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reiniciar caída aleatoriamente si se sale de la pantalla
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Mover coordenada Y
        drops[i]++;
      }
    };

    // 5. Iniciar animación a 30fps aprox
    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: '#000000' }} // Fondo base negro por seguridad
    />
  );
};

export default MatrixBackground;