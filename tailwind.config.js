const colors = require('tailwindcss/colors')
const theme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '62p': '62px',
        '70p': '70px',
        '83p': '83px',
        '94p': '94px',
        '135p': '135px',
        '614p': '614px',
        '1920p': '1920px'
      },
      height: {
        '57p': '57px',
        '70p': '70px',
        '83p': '83px',
        '88p': '88px',
        '135p': '135px',
        '825p': '825px'
      },
      padding: {
        '15p': '15px',
        '20p': '20px',
        '24p': '24px',
        '26p': '26px',
        '30p': '30px',
        '35p': '35px',
        '42p': '42px',
        '52p': '52px',
        '62p': '62px',
        '63p': '63px',
        '94p': '94px',
        '107p': '107px',
        '145p': '145px'
      },
      margin: {
        '14p': '14px',
        '20p': '20px',
        '27p': '27px',
        '30p': '30px',
        '35p': '35px',
        '40p': '40px',
        '43p': '43px',
        '57p': '57px',
        '60p': '60px',
        '62p': '62px',
        '77p': '77px',
        '80p': '80px',
        '94p': '94px',
        '145p': '145px'
      }
    },
    colors: {
      ...colors,
      'primary': 'var(--color-primary)',
      'secondary': 'var(--color-secondary)',
      'accent': 'var(--color-accent)',
    },
    backgroundColor:{
      ...colors,
      'primary': 'var(--color-primary)',
      'secondary': 'var(--color-secondary)',
    },
    screens: {
      DEFAULT: {'max': '1000000px'},
      '2xl': {'max': '1919px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    fontSize: {
      ...theme.fontSize,
      '8p': '8px',
      '15p': '15px',
      '18p': '18px',
      '20p': '20px',
      '21p': '21px',
      '24p': '24px',
      '30p': '30px',
      '42p': '42px',
      '55p': '55px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
