/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7f1",
          100: "#ffe7d6",
          200: "#ffd0ad",
          300: "#ffb27a",
          400: "#ff9a52",
          500: "#ffbc8f",
          600: "#e89a6c",
          700: "#c9794c",
          800: "#a25f3b",
          900: "#7a4730"
        }
      }
    }
  },
  plugins: []
};
