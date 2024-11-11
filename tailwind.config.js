/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-gray': '#E4E4FF',
      },
    },
    screens: {
      "2xl": { max: "1440px" },
      // => @media (max-width: 1440px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "425px" },
      // => @media (max-width: 425px) { ... }
    },
  },
  plugins: [],
}

