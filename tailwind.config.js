const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.js',
    './pages/**/*.jsx',
    './pages/**/*.tsx',
    './components/**/*.js',
    './components/**/*.jsx',
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
