const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/pages/**/*.js',
    './src/pages/**/*.jsx',
    './src/pages/**/*.tsx',
    './src/components/**/*.js',
    './src/components/**/*.jsx',
    './src/components/**/*.tsx'
  ],
  darkMode: 'media',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        cararra: {
          50: '#fefefe',
          100: '#fefdfd',
          200: '#fcfbfa',
          300: '#f9f9f6',
          400: '#f5f4f0',
          500: '#F1EFE9',
          600: '#d9d7d2',
          700: '#b5b3af',
          800: '#918f8c',
          900: '#767572'
        },
        'nile-blue': {
          50: '#f4f5f6',
          100: '#eaebee',
          200: '#cacdd4',
          300: '#aaafb9',
          400: '#6a7485',
          500: '#2a3851',
          600: '#263249',
          700: '#202a3d',
          800: '#192231',
          900: '#151b28'
        }
      },
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
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
