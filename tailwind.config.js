/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        'light_': 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
        'dark_': 'rgba(240, 240, 240, 0.1) 0px 4px 16px, rgba(240, 240, 240, 0.05) 0px 8px 32px'
      },
      colors: {
        'plain': '#F9FAFA',
        'light': '#D8E7EA',
        'dark': '#465D67',
        'brown': '#D3C0A0'
      },
      fontFamily: {
        'barlow': ['"Barlow Condensed"', 'Anton'],
        'caveat': ["Caveat"]
      }
    },
  },
  plugins: [],
}