import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const MatrixBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = {
    // DESACTIVADO FULLSCREEN AUTOMÁTICO PARA CONTROL MANUAL (EVITA ERRORES DE CAPAS)
    fullScreen: { enable: false },
    background: {
      color: "transparent", // Dejamos que el CSS global ponga el negro
    },
    fpsLimit: 120,
    detectRetina: true,
    particles: {
      color: { value: "#FAFF00" }, // Amarillo Neón puro
      move: {
        enable: true,
        direction: "bottom", // Caen hacia abajo
        speed: 3.5, // Velocidad perfecta para leer pero dinámica
        straight: true, // Caída recta tipo Matrix
        outModes: {
          default: "out", // Reaparecen arriba al salir
        }
      },
      number: {
        value: 90, // Cantidad densa pero sin saturar
        density: { enable: true, area: 800 },
      },
      opacity: {
        value: { min: 0.1, max: 0.6 }, // Variación de brillo para profundidad
        animation: {
          enable: true,
          speed: 1, // Parpadeo sutil
          sync: false
        }
      },
      shape: {
        type: "char", // IMPORTANTE: Tipo caracter
        character: {
          // AQUÍ ESTÁN LOS KATAKANAS QUE PEDISTE + CÓDIGO
          value: [
            "ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", 
            "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", 
            "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ",
            "0", "1", "⚡", "DATA", "CODE"
          ],
          font: "Verdana", // Fuente segura que renderiza bien los símbolos
          weight: "bold"
        }
      },
      size: { value: { min: 12, max: 22 } }, // Tamaños variados para efecto 3D
    }
  };

  if (!init) return null;

  return (
    <Particles 
      id="tsparticles" 
      options={options} 
      // ESTA CLASE ES LA CLAVE PARA QUE SE VEA AL FONDO:
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default MatrixBackground;