const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  important: true,
  theme: {
    colors: {
      green: "#4fff9e",
      blue: {
        500: "#524eee",
        550: "#2925C3",
        570: "#1B189D",
        600: "#26264e",
        700: "#1d1d42",
        800: "#141432",
        900: "#101028",
        1000: "#0e0e26",
      },
      red: "#ff4f4f",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,

      yellow: colors.amber,
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
