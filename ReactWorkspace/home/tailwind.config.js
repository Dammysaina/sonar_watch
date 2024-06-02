/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      width : {
          '120': '24rem'
      },
      height: {
          '130': "25rem"
      },
      colors: {
        navText: "18191F",
        homeBg: "F5F7FA",
        homeBlue: "0051F9",
      },
      keyframes: {
        bounce:{
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation:{
        bounce: 'bounce 0.5s ease-in-out',
      },
      colors:{
        'custom-hover': '#FFD700',
      },
    },
  },
  plugins: [
    
  ],
}

