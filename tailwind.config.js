/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path as per your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Mont", "sans-serif"], // Define your custom font
      },
    },
  },
  plugins: [],
};
