/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      viola: ["Viola", "sans-serif"],
      futura: ["FuturaTSNew", "sans-serif"],
      futurabold: ["FuturaTSNewBold", "sans-serif"],
      futuramedium: ["FuturaTSNewMedium", "sans-serif"],
    }
  },
  plugins: [],
}
