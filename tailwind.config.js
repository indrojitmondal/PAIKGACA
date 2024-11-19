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

