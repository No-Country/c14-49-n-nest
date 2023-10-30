/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'jacques-francois-shadow': ['"Jacques Francois Shadow"', 'cursive'],
        'inter': ['Inter', 'sans'],
      },
      colors: {
        primary: {
          100:"#606C38",
          200:"#283618",
          300:"#FEFAE0",
          400:"#DDA15E",
          500:"#BC6C25"
        }}
    },
  },
}