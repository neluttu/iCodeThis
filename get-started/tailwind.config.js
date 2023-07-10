/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","styles.css"],
  theme: {
    extend: {
        boxShadow: {
            'neumorphism': '-4px -4px 10px rgb(255, 255, 255), 4px 4px 10px rgba(0, 0, 0, 0.22)',
        }
    },
  },
  plugins: [],
}

