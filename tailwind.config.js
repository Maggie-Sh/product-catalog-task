/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#032541",
      },
      gridTemplateColumns: {
        "products-grid": "repeat(auto-fill, minmax(180px, 1fr))",
      },
      boxShadow: {
        custom: "0 2px 8px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
