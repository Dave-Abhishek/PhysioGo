/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,php}"],
  prefix: "tw-",
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans" ,"sans-serif"]
      },
      colors: {
        Cyan: "#006e89",
        Cyan1: "#0085a1",
        azure: "#F0FFFF",
      },
    },

  },
  plugins: [],
}

