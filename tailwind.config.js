/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Blueclaro: "#007BFF",
        Verde: "#28A745",
        Naranja: "#FF5733",
        Blue: "#007BFF",
        WitherDark: "#FFFFFF",
        GrayClaroDark: "#B0B0B0",
        AmarilloClaroDark: "#FFD700",
      },
      textColor: {
        textSubTitleLight: "#000000",
        textTitleLight: "#333333",
        textRegularLight: "#003366",
      },
      fontFamily: {
        primaryRegular: ["Regular", "sans-serif"],
        primaryMedium: ["Medium", "sans-serif"],
        primarybold: ["Bold", "sans-serif"],
        titleSemiBold: ["PixelifySans-Semibold"],
        Filano: ["filano"],
      },
    },
  },
  plugins: [],
};
