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

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        // IMPORTANTE: zIndex -1 para que quede al fondo, pero background transparente
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "transparent", // <--- CAMBIO CLAVE: TRANSPARENTE
        },
        fpsLimit: 60,
        particles: {
          color: { value: "#FAFF00" }, // Amarillo Neón
          move: {
            enable: true,
            direction: "bottom",
            speed: 3, // Velocidad ajustada para que se note el movimiento
            straight: true,
          },
          number: {
            value: 120, // AUMENTÉ LA CANTIDAD para que se noten más
            density: { enable: true, area: 800 },
          },
          opacity: {
            value: { min: 0.1, max: 0.8 }, // Más variación de opacidad
            animation: {
              enable: true,
              speed: 1,
              sync: false
            }
          },
          shape: {
            type: "char",
            character: {
              value: ["0", "1", "ア", "イ", "ウ", "エ", "オ", "⚡", "µ", "§"],
              font: "monospace",
              weight: "bold"
            }
          },
          size: { value: { min: 14, max: 24 } }, // Hice los caracteres un poco más grandes
        }
      }}
    />
  );
};

export default MatrixBackground;