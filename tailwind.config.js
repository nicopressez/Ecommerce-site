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
    },
    fontSize: {
      hs: '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}
