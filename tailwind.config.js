/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-yellow': '#FAFF00', // TU COLOR FAVORITO (Amarillo chillón)
        'neon-black': '#050505',  // Negro profundo
        'neon-purple': '#B026FF', // Morado neón para contraste secundario
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'sans': ['Verdana', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px #FAFF00, 0 0 20px #FAFF00', // Brillo amarillo
        'neon-purple': '0 0 10px #B026FF, 0 0 20px #B026FF', // Brillo morado
      }
    },
  },
  plugins: [],
}