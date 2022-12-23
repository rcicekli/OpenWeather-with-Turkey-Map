/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'sunset': "url('./assets/bgimage.jpg')"
      },
      space: {
        '100px': '150px',
      },
      colors: {
        'mahmut':'#b0a0af',
      }
    },
  },
  plugins: [],
}
