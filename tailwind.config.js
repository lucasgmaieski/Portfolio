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
        primarydark: '#000',
        secondarydark: '#272727',
        themecolor: 'rgb(var(--theme-color), <alpha-value>)',
        primarylight: '#fafaf9',
        secondarylight: '#dadada'
      },
      dropShadow: {
        'mytheme': '0 1px 8px rgb(var(--theme-color), .8)'
      },
      boxShadow: {
        'mybutton': 'inset 0 0px 27px 5px rgb(var(--theme-color), <alpha-value>)',
      },
      animation: {
        'spin-slow': 'spin 1s ease-in-out infinite',
      }
    },
    
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

