import tailwind3D from "@xpd/tailwind-3dtransforms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': "#1a1a2e",
        "light": 'linear-gradient(90deg, #d8b4fe, #fbcfe8)',
      },
      perspective: {
        'none': 'none',
        '500': '500px',
        '1000': '1000px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [tailwind3D],
};
