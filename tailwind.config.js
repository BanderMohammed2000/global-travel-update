/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightGray: "rgb(197, 197, 197)",
        matteBlack: "rgb(0, 0, 0, 0.3)",
      },
      fontFamily: {
        // sans: ["Inter", "sans-serif"],
        sans: ["Merriweather", "sans-serif"],
      },
    },
  },
  plugins: [],
};
