const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.jsx?',
    './components/**/*.jsx?',
    './pages/**/*.tsx',
    './components/**/*.tsx'
  ],
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
