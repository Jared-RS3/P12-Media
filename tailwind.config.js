/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // optional: use class "font-subspace" in JSX like className="font-subspace"
        subspace: ["Subspace", "sans-serif"],
      },
    },
  },
  plugins: [],
};
