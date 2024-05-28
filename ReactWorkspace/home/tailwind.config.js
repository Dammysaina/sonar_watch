/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navText: "18191F",
        homeBg: "F5F7FA",
        homeBlue: "0051F9",
        cursorBlue: '#0051F9'
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.cursor-color::after': {
          content: '|',
          color: '#0051F9',
          animation: 'blink 1s infinite',
        },
      }, ['responsive', 'hover']);
    },
  ],
}

