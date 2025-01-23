/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
      '100px': '100px',
      '150px': '150px',
      '200px': '200px',
      '400px': '400px',
      '600px': '600px',
    },},

  },
  plugins: [],
}

