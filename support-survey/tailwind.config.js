/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','styles.css'],
  theme: {
    extend: {
        fontFamily: {
            'nunito': ['Nunito', 'sans-serif'],
            'rubik': ['Rubik', 'sans-serif'],
            'poppins': ['Poppins', 'sans-serif'],
        },
    },
  },
  plugins: [],
}