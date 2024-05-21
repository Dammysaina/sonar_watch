/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#E3E3E3',
        searchIcon: '#F6F6F6'
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

