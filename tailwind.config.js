import defaultTheme from 'tailwindcss/defaultTheme'
const colors =require('tailwindcss/colors')


module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
       'poppins': ['Poppins', 'sans-serif'],
       sans: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'teal': {
          DEFAULT: '#006b7f',
          '100': '#009eb5', 

      },
      'yellow': {
        DEFAULT: '#ffc104'
    },
    'pink': {
      DEFAULT: '#e30061',
      '100':'#ffe8f2',
  }
    },
    plugins: [],
  }
}
}