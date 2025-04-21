/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '7.5xl': '5.5rem', // between 7xl (4.5rem) and 8xl (6rem)
      },
    },
  },
  plugins: [],
}