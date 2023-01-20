/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   'sgray': "#393939",
    //   'sblack': "#2D2D2D",
    //   'syellow': "#F48224",
    // },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
