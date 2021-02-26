const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  important: true,

  theme: {
    fontFamily: {
      jost: ["Jost", "sans-serif"],
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    colors: {
      green: "#4fff9e",
      blue: {
        500: "#524eee",
        501: "#2925C3",
        502: "#1B189D",
        600: "#26264e",
        700: "#1d1d42",
        800: "#141432",
        900: "#101028",
        1000: "#0e0e26",
      },
      red: { 500: "#ff4f4f", 501: "#D23737", 502: "#AA2929" },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,

      yellow: colors.amber,
    },
  },

  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
