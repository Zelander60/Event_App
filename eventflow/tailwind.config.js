/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#10b981",
        secondary: "#3b82f6",
        background: {
          light: "#f8fcf9",
          dark: "#0f1f1a",
        },
        surface: {
          light: "#ffffff",
          dark: "#1a2e28",
        },
        card: {
          light: "#ffffff",
          dark: "#1a2e28",
        }
      }
    },
  },
  plugins: [],
}
