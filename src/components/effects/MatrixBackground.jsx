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
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000000" },
        fpsLimit: 60,
        particles: {
          color: { value: "#FAFF00" },
          move: {
            enable: true,
            direction: "bottom",
            speed: 4,
            straight: true,
          },
          number: { value: 90, density: { enable: true, area: 800 } },
          opacity: { value: 0.6 },
          shape: {
            type: "char",
            character: {
              value: ["0", "1", "ア", "イ", "ウ", "エ", "オ", "力", "キ", "ク"],
              font: "monospace",
              weight: "bold"
            }
          },
          size: { value: { min: 12, max: 20 } },
        }
      }}
    />
  );
};

export default MatrixBackground;
