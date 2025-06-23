/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#802392", // Violeta oscuro (main)
        secondary: "#b084d6", // Violeta claro (hover, secundarios)
        dark: "#2d1b3d", // Violeta mas oscuro para cards
        blackText: "#1A1A1D", // Gris carbón oscuro (sin uso)
        neutral: "#E3E8EF", // Blanco (texto para coles clarosS)
        blueish: "#C9D7E3", // Azul pastel sutil (secciones, fondos)
        accent: "#ffd700", // Dorado suave (detalles llamativos)
      },

      fontFamily: {
        unbounded: ["var(--font-unbounded)", "cursive"], //titulos principales
        oswald: ["var(--font-oswald)", "sans-serif"], // sub titulos
        "roboto-condensed": ["var(--font-roboto-condensed)", "sans-serif"], //parrafos
      },

      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-3px)" },
          "40%": { transform: "translateX(3px)" },
          "60%": { transform: "translateX(-3px)" },
          "80%": { transform: "translateX(3px)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

//
