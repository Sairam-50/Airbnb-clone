/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
          "550":"550px",
      },
      height:{
        "70":"70px",
      },
      dropShadow:{
        "drop-shadow-custom":" drop-shadow(0px 2.983px 7.456px rgba(0, 0, 0, 0.10))",
      },
      fill:{
        "fill-custom":"#FFFFFF",
      },
      fontFamily:{
        "Poppins":"Poppins",
      },
      backgroundColor:{
        "bg-custom":"#FFFFFF",
      },
    },
  },
  plugins: [],
}

