/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      height: {
        '200': '3rem',
      },
      colors: {
        'new-color' : '#202020',
        'new-color-two' : '#393939',
        'new-color-tree': '#151515;'
      }
    },
  },
  plugins: [],
}
