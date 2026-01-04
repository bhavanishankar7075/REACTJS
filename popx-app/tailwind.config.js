/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pop-purple': '#6C25FF',
        'pop-bg': '#F7F8F9',
        'pop-grey': '#CBCBCB',
        'pop-black': '#1D2226',
      },
    },
  },
  plugins: [],
}