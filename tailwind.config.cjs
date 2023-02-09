/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brown-dark": "#2a1c10",
        "brown-medium": "#423026",
        "brown-light": "#996655",
      },
    },
  },
  plugins: [],
};
