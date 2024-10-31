/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      shade1: "#FFFFFF",
      shade2: "#646467",
      shade3: "#0D0D0D",
      transparent: "transparent",
      accent: "#AC89E7"
    },
  },
  plugins: [],
};
