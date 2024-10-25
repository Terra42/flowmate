const { createThemes } = require('tw-colors');

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	fontFamily: {
  		sans: ["Montserrat", "sans-serif"]
  	},
  },
  plugins: [
    createThemes({
      default:{
        'primary': 'rgb(12,10,9)',
        'primary-95': 'rgb(12,10,9, 0.95)',
        'primary-60': 'rgb(12,10,9, 0.60)',
        'bg-semi': 'rgb(12,10,9, 0.7)',
        'secondary': 'rgb(250,250,249)',
        'accent': 'rgb(242,204,65)',
        'accent-semi': 'rgb(242,204,65, 0.85)',
      },
      coffee: { 
        'primary': 'rgb(51, 24, 6)',
        'primary-95': 'rgb(51, 24, 6, 0.95)',
        'primary-60': 'rgb(51, 24, 6, 0.60)',
        'bg-semi': 'rgb(79, 46, 23, 0.7)',
        'secondary': 'rgb(254, 252, 230)',
        'accent': 'rgb(203, 118, 30)',
       },
       lake: { 
        'primary': 'rgb(7, 20, 53)',
        'primary-95': 'rgb(7, 20, 53, 0.95)',
        'primary-60': 'rgb(7, 20, 53, 0.60)',
        'bg-semi': 'rgb(6,19,55, 0.7)',
        'secondary': 'rgb(239, 216, 237)',
        'accent': 'rgb(131,160,215)',
       },
       library: { 
        'primary': 'rgb(6, 1, 0)',
        'primary-95': 'rgb(6, 1, 0, 0.95)',
        'primary-60': 'rgb(6, 1, 0, 0.60)',
        'bg-semi': 'rgb(26, 30, 38, 0.7)',
        'secondary': 'rgb(249, 249, 230)',
        'accent': 'rgb(249, 219, 81)',
       },
       nature: { 
        'primary': 'rgb(21, 40, 32)',
        'primary-95': 'rgb(21, 40, 32, 0.95)',
        'primary-60': 'rgb(21, 40, 32, 0.60)',
        'bg-semi': 'rgb(26, 74, 76, 0.7)',
        'secondary': 'rgb(230,230,236)',
        'accent': 'rgb(145,232,250)',
       },
       city: { 
        'primary': 'rgb(56,40,96)',
        'primary-95': 'rgb(56,40,96, 0.95)',
        'primary-60': 'rgb(56,40,96, 0.60)',
        'bg-semi': 'rgb(52,49,129, 0.7)',
        'secondary': 'rgb(201,208,236)',
        'accent': 'rgb(195,147,201)',
       },
       japan: { 
        'primary': 'rgb(79,36,39)',
        'primary-95': 'rgb(79,36,39, 0.95)',
        'primary-60': 'rgb(79,36,39, 0.60)',
        'bg-semi': 'rgb(144,49,46, 0.7)',
        'secondary': 'rgb(254,250,233)',
        'accent': 'rgb(255,236,147)',
       },
       halloween: { 
        'primary': 'rgb(14,27,9)',
        'primary-95': 'rgb(14,27,9, 0.95)',
        'primary-60': 'rgb(14,27,9, 0.60)',
        'bg-semi': 'rgb(23,47,10, 0.7)',
        'secondary': 'rgb(250,250,236)',
        'accent': 'rgb(236,110,24)',
       },
    }),
      require("tailwindcss-animate")
],
}