/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBackground: "#1C1924",
        lightBackground: "#332E42",
        myOrange: "#F1C847",
        borderColor: "#ffffff33",
        svgFill: "#C9C5D8",
        hoverFill: "#F1C84B",
        lightorange: "#2f281f",
        semiLightBg: "#22282c",
        lightTextColor: "#9283bb",
      },
    },
  },
  plugins: [],
};
