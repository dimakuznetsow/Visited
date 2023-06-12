/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        customRounded1: "38% 62% 63% 37% / 41% 44% 56% 59%",
        customRounded2: "63% 37% 38% 62% / 41% 44% 56% 59%",
      },
      height: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
      screens: {
        xmd: "900px",
        xlg: "1100px",
        xxlg: "1190px",
        mxl: "1300px",
        lxl: "1400px",
      },
    },
  },
  plugins: [],
};
