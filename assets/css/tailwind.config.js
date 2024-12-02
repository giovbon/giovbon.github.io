/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.njk', 
    './src/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        nord0: '#2E3440',
        nord1: '#3B4252',
        nord2: '#434C5E',
        nord3: '#4C566A',
        nord4: '#D8DEE9',
        nord5: '#E5E9F0',
        nord6: '#ECEFF4',
        nord7: '#8FBCBB',
        nord8: '#88C0D0',
        nord9: '#81A1C1',
        nord10: '#5E81AC',
        nord11: '#BF616A',
        nord12: '#D08770',
        nord13: '#EBCB8B',
        nord14: '#A3BE8C',
        nord15: '#B48EAD'
      },
      width: {
        // Define um tamanho personalizado para largura
        '72': '18rem',  // 72 equivale a 18rem ou 288px
        '84': '21rem',  // 84 equivale a 21rem ou 336px
        '96': '24rem'   // 96 equivale a 24rem ou 384px
      },
      height: {
        // Define um tamanho personalizado para altura
        '72': '18rem',  // 72 equivale a 18rem ou 288px
        '84': '21rem',  // 84 equivale a 21rem ou 336px
        '96': '24rem'   // 96 equivale a 24rem ou 384px
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
