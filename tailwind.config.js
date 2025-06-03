/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['Comfortaa', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/assets/image/bg.jpg')"
      }
    },
  },
  plugins: [],
}

