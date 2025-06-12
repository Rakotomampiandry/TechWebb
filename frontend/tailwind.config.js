/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "manga" : "#EAEEEF",
        "maintykely": "#201B21"
      },
      screens: {
        mobile: "375px",
        tablet: '768px',
        laptop: '1024px',
      }
    },
  },
  plugins: [],
}