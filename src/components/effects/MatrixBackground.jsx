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
    fullScreen: { enable: false }, // Lo controlamos con CSS manual
    background: {
      color: "transparent", // Transparente para ver el negro de atrás
    },
    fpsLimit: 120,
    particles: {
      color: { value: "#FAFF00" }, // AMARILLO NEÓN
      move: {
        enable: true,
        direction: "bottom",
        speed: 3,
        straight: true,
      },
      number: {
        value: 100,
        density: { enable: true, area: 800 },
      },
      opacity: {
        value: { min: 0.1, max: 0.8 }, // Buen contraste
        animation: {
          enable: true,
          speed: 0.5,
          sync: false
        }
      },
      shape: {
        type: "char",
        character: {
          // AQUÍ ESTÁN TUS CARACTERES JAPONESES
          value: [
            "ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ",
            "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト",
            "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ",
            "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ",
            "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン",
            "0", "1", "⚡", "DATA" 
          ],
          font: "Verdana", // Fuente segura que lee japonés
          weight: "bold"
        }
      },
      size: { value: { min: 14, max: 22 } },
    }
  };

  if (!init) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
        <Particles 
            id="tsparticles" 
            options={options} 
            className="w-full h-full"
        />
    </div>
  );
};

export default MatrixBackground;