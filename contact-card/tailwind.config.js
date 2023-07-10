/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
        backgroundImage: {
            'topGradient' : 'background: linear-gradient(135deg, rgba(53,158,215,1) 0%, rgba(94,154,250,1) 0%, rgba(137,103,219,1) 100%);'
        }
    },
  },
  plugins: [],
}

