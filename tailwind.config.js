/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#E2E8F0",
      },
      borderRadius: {
        'custom': '20px',
      },
    },
  },
  plugins: [],
};
