/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,jsx}', './src/*.{tsx,jsx}'],
  theme: {
    extend: {
      keyframes: {
        flash: {
          '0%': {
            backgroundColor: '#FFF2',
            boxShadow: '16px 0 #FFF2, -16px 0 #FFF',
          },
          '50%': {
            backgroundColor: '#FFF',
            boxShadow: '16px 0 #FFF2, -16px 0 #FFF2',
          },
          '100%': {
            backgroundColor: '#FFF2',
            boxShadow: '16px 0 #FFF, -16px 0 #FFF2',
          },
        },
      },
    },
  },
  plugins: [],
}
