/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "",
      },
      gridTemplateColumns: {
        "auto-fill-250": "repeat(auto-fill,minmax(250px,1fr))",
        "auto-fit-250": "repeat(auto-fit,minmax(250px,1fr))",
      },
      screens: {
        sm: "320px",
        // => @media (min-width: 320px) { ... }
        xs: "450px",
        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
