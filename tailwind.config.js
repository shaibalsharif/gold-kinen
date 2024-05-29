/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'plain': '#F9FAFA',
        'light': '#D8E7EA',
        'dark': '#465D67',
        'brown': '#D3C0A0'
      },
      fontFamily: {
        'barlow': ['"Barlow Condensed"','Anton'],
        'caveat':["Caveat"]
      }
    },
  },
  plugins: [],
}