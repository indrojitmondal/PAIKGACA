/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         b1: '#036544',
         primary: '#036544',
         footer: '#2B3440'
      },
      backgroundImage: {
        profileBg: "url('/bg.jpg')",

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

