import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 px-4 relative z-10 bg-gradient-to-t from-black via-transparent to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.h2 
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-4xl font-bold mb-8 text-white"
        >
          READY TO COLLABORATE?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Tarjeta CV */}
            <div className="p-8 bg-gray-900 bg-opacity-60 border border-hacker-green rounded-xl backdrop-blur">
                <h3 className="text-2xl font-mono text-hacker-green mb-4">ACCESS_DATA_FILE</h3>
                <p className="text-gray-400 mb-6">Descarga mi Hoja de Vida completa.</p>
                <a 
                    href="/cv.pdf" 
                    download="Thomas_Rodriguez_CV.pdf"
                    className="inline-block px-8 py-3 bg-hacker-green text-white font-bold rounded hover:shadow-[0_0_20px_#00FF00] transition-all"
                >
                    DOWNLOAD CV [PDF]
                </a>
            </div>

            {/* Tarjeta Encuesta */}
            <div className="p-8 bg-gray-900 bg-opacity-60 border border-thomas-purple rounded-xl backdrop-blur">
                <h3 className="text-2xl font-mono text-thomas-purple mb-4">USER_FEEDBACK</h3>
                <p className="text-gray-400 mb-6">Ayúdame a mejorar el sistema.</p>
                <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSekreJ-1dQo7sjM3RBuLTKr0y-EwpaixMi4ltG-S6MZ74Dc5A/viewform?usp=publish-editor" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-thomas-purple text-white font-bold rounded hover:shadow-[0_0_20px_#800080] transition-all"
                >
                    START SURVEY
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
