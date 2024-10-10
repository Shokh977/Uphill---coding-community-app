/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update this path to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        'dark': "#1a1a2e",
        "light" : 'linear-gradient(90deg, #d8b4fe, #fbcfe8)'
      },
      perspective: {
        'none': 'none',
        '500': '500px',
        '1000': '1000px',
      },
    },
  },
  darkMode: 'class',
  plugins: [require("@xpd/tailwind-3dtransforms")], 
};
