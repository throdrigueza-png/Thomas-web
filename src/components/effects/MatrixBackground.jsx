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
    fullScreen: { enable: true, zIndex: -1 }, // Ahora sí ocupa todo el fondo real
    background: { color: "#000000" },
    fpsLimit: 120,
    particles: {
      color: { value: "#FAFF00" },
      move: {
        enable: true,
        direction: "bottom",
        speed: { min: 3, max: 8 }, // Velocidad variable para dinamismo
        straight: true,
      },
      number: {
        value: 80,
        density: { enable: true, area: 800 },
      },
      opacity: {
        value: { min: 0.1, max: 0.5 }, // Efecto de profundidad
      },
      shape: {
        type: "char",
        character: [
          { value: ["0", "1"], font: "monospace", weight: "400" },
          { value: ["ア", "イ", "ウ", "エ", "オ"], font: "monospace", weight: "400" }
        ],
      },
      size: { value: { min: 10, max: 20 } },
    }
  };

  return init ? <Particles id="tsparticles" options={options} /> : null;
};

export default MatrixBackground;
