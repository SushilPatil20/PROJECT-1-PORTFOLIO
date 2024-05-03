/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.2)',
        '4xl': [
          '-18px -18px 0px rgba(255, 255, 255, 0.5)'
        ]
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

