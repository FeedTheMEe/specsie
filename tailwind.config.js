const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false,
  theme: {
    screen: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        transparent: 'transparent',
        black: colors.black,
        gray: colors.gray,
        orange: colors.orange,
        white: colors.white,
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ["hover", "focus"],
      width: ["hover", "focus"]
    },
  },
  plugins: [],
}