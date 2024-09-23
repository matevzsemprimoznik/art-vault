/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        tint: '#e67255',
        neutral: '#f4f5f7',
        'neutral-dark': '#000000',
      },
    },
  },
  plugins: [],
};
