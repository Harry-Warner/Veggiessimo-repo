// tailwind.config.js
module.exports = {
  theme: {
    fontSize: {
      xxs: "0.5rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      xxl: "1.5rem",
      xxxl: "1.875rem",
      big: "2.25rem",
      vbig: "3rem",
      huge: "4rem",
      vhuge: "5rem",
    },
    colors: {
      green: "#D9e892",
      blue: "#5984c4",
      lightBlue: "#c7d0d8",
      lightPink: "#efe1e8",
      black: "#000000",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Fira Sans", "sans-serif"],
      script: "playlist-script",
    },
  },
  variants: {},
  plugins: [],
  purge: ["./pages/**/*.js", "./styled/**/*.js", "./components/**/*.js"],
};
