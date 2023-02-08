/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'teal': '#6ab8a7',
      'teal-100': '#d5f1f0',
      'gray':'#545962',
      'dark': '#221c2c',
      'snow': '#fff9fb',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
