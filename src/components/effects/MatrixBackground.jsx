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
    // CLAVE: zIndex -1 pone esto en el "sótano" de la web
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      color: "#000000", // El fondo negro SÓLIDO
    },
    fpsLimit: 120,
    particles: {
      color: { value: "#FAFF00" }, // Amarillo Neón
      move: {
        enable: true,
        direction: "bottom", // Caen hacia abajo como Matrix
        speed: 3,
        straight: true,
      },
      number: {
        value: 100, // Cantidad perfecta para no saturar
        density: { enable: true, area: 800 },
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 0.5,
          sync: false
        }
      },
      shape: {
        type: "char", // Caracteres estilo código
        character: {
          value: ["0", "1", "ア", "イ", "ウ", "DATA", "CODE", "⚡"],
          font: "monospace",
          weight: "bold"
        }
      },
      size: { value: { min: 12, max: 20 } },
    }
  };

  return init ? <Particles id="tsparticles" options={options} /> : null;
};

export default MatrixBackground;