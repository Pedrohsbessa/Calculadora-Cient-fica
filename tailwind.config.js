/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      flexBasis: {
        '1/9': '11%',
        '1/10': '10%'
      },
      height: {
        'same': '100px',
      }
    },
  },
  plugins: [],
}