/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#E3E3E3',
        searchIcon: '#F6F6F6',
        textGray: '#898989',
        textGreen: '#00BB6F',
        textLightGreen: '#E0F7ED'
      },
      margin: {
        '120':'32rem'
      },
      padding: {
        '100':'30rem'
      }
    },
  },
  plugins: [],
}

