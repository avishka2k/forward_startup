/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#FFF",
      black: "#000",
      text_dark: "#391400",
      yellow: "#F6D021",
      gray: "rgba(255, 255, 255, 0.64)",
      blue: "#28293E",
      pink: "#EF6D58",
      light_pink: "#FDF0E9",
      line_color: "#F3D1BF",
      light_dark: "rgba(57, 20, 0, 0.64)",
    },
    fontFamily: {
      epilogue_family: ["Epilogue", "sans-serif"],
    },
  },
  plugins: [],
};
