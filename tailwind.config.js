/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'jacques-francois-shadow': ['Jacques Francois Shadow', 'cursive'],
        'inter': ['Inter', 'sans'],
      },
    },
  },
}