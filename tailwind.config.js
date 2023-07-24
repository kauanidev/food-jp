/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#DA2535",
        dark: {
          10: "#292929",
          20: "#616161",
          30: "#F3F3F3",
          40: "#FBFBFB",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      },
      container: {
        padding: "1rem",
        screens: {
          xl: "1228px",
          "2xl": "1228px",
        },
      },
    },
  },
  plugins: [],
};
