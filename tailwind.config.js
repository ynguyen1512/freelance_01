/** @type {import('tailwindcss').Config} */
import colors from './src/themes/colors.config';

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], // Add this line
      },
    },
  },
  plugins: [],
}

