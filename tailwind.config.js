/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Gotham SSm A, sans-serif'],
      lato: ['Lato, sans-serif'],
      razha: ['Rozha One, serif']
      
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}