/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill-250": "repeat(auto-fill,minmax(250px,1fr))",
        "auto-fit-250": "repeat(auto-fit,minmax(250px,1fr))",
        "auto-fit-150": "repeat(auto-fit,minmax(350px,1fr))",
      },
      colors : {
        "my-bg" : "rgba(0, 0, 0, 0.71)"
      },
      screens: {
        sm: "320px",
        // => @media (min-width: 320px) { ... }
        xs: "450px",
        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1070px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }  
        "1xl": "1300px",
        // => @media (min-width: 1536px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
