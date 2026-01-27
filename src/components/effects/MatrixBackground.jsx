import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const MatrixBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    fullScreen: { enable: false }, // Importante: false para controlarlo nosotros
    background: {
      color: "transparent", // Transparente para que no tape nada
    },
    fpsLimit: 60,
    particles: {
      color: { value: ["#FAFF00", "#FFFFFF", "#B026FF"] }, // AMARILLO, BLANCO, MORADO
      move: {
        enable: true,
        direction: "bottom",
        speed: 3,
        straight: true,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 60, // Cantidad de partículas
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: "char",
        character: {
          value: ["ア", "イ", "ウ", "A", "B", "C", "⚡", "♥", "★", "1", "0"], 
          font: "Verdana",
          weight: "bold",
          fill: true,
        },
      },
      size: { value: { min: 14, max: 24 } },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles 
        id="tsparticles" 
        options={options} 
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" 
      />
    );
  }

  return <></>;
};

export default MatrixBackground;