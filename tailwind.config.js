const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./dist/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#334874",
      },
    },
  },
  plugins: [],
};
