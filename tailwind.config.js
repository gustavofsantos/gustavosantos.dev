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
  darkMode: 'media',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              'background-color': 'unset',
              'padding-top': '0',
              'padding-bottom': '0',
              'padding-right': '0',
              'padding-left': '0',
              'margin-top': '0',
              'margin-bottom': '0'
            }
          }
        }
      }
    },
    colors: {
      gray: colors.warmGray,
      ...colors
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
