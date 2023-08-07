/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          primary : '#b7e43a',
          primaryGreen200 : "#95A058",
          secondaryBlack : "#222222",
          secondaryGray100 : "#CECECE",
          secondaryGray200 : "#3C3C3C"

      },
    },
  },
  plugins: [],
}

