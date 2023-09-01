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
        themecolor: 'rgb(var(--theme-color), <alpha-value>)',
        primarylight: '#fafafa',
        secondarylight: '#dadada'
      },
      dropShadow: {
        'mytheme': '0 1px 8px rgb(var(--theme-color), .8)'
      }
    },
    
  },
  plugins: [],
}

