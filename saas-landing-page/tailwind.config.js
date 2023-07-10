/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','styles.css'],
  darkMode: 'class',
  theme: {
    extend: {
        fontFamily: {
            'dmsans': ['DM Sans', 'sans-serif'],
            'outfit': ['Outfit', 'sans-serif'],
        },
    },
  },
  plugins: [],
}