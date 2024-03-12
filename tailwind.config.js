/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#ecbb6c',
        background: '#272932',
      },
      fontFamily: {
        arizonia: ['Arizonia', 'cursive'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        'abril-fatface': ['Abril Fatface', 'cursive'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
