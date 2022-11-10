/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-500': '#18181b',
        'brand': '#16789c',
      },
    },
    plugins: [],
  }
}