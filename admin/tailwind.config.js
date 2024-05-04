/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        base: "#f2f4f5",
        greeny: "#00c65e"
      },
      width: {
        base: "600px",
        norm: "300px",
      },
    },
  },
  plugins: [],
};
