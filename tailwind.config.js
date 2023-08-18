/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarydark: '#171717',
        secondarydark: '#272727',
        themecolor: colors.yellow,
        primarylight: '#fafafa',
        secondarylight: '#dadada'
      }
    },
    
  },
  plugins: [],
}

