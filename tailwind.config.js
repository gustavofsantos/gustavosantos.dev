const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  // darkMode: 'media',
  theme: {
    extend: {},
    colors: {
      gray: colors.warmGray,
      ...colors
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
