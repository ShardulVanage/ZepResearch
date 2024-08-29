/** @type {import('tailwindcss').Config} */
const { scrollbarGutter, scrollbarWidth, scrollbarColor } = require('tailwind-scrollbar-utilities');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [  require('@tailwindcss/forms'),
              require('@tailwindcss/aspect-ratio'),
              require('@tailwindcss/typography'),
              scrollbarGutter(), // no options to configure
              scrollbarWidth(), // no options to configure
              scrollbarColor(),
  ],
}