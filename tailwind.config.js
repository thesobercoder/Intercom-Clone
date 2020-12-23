const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const truncate = require("tailwindcss-truncate-multiline");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false,
  theme: {
    truncate: {
      lines: {
        2: "2",
        3: "3",
        5: "5",
        8: "8",
      },
    },
    extend: {
      colors: {
        blueGray: colors.blueGray,
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [truncate()],
};
