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
        'same': '90px',
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '&>*');
      addVariant('child-active', '& > :active');
    },

  ]
}
