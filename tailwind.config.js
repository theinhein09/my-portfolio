/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ["Playfair Display", "serif"],
        catamaran: ["Catamaran", "sans-serif"],
      },
    },
  },
  plugins: [],
};
