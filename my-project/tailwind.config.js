/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#F6F5F2",
        header2: "#E4E0D8",
        header3: "#cbcbcb",
        text: "#2e3035",
        hover: "#67696f",
        alertInfo: "#c9c2b4",
        alertWarning: "#BC7C7C",
        alertSuccess: "#CEE5D0",
        alertBlue: "#bcd2dd",
        darktheme1: "#2e3035",
        darktheme2: "#202225",
        alertYellow: "#FBFACD",
        alertGreen: "#737f63",
        bg: "#0a2137",
        lastbackground: "#fefefe",
        lastbackgroundHover: "#fcfbfa",
        lastmaincolor: "#f27919",
        lastmaincolorHover: "#f38630",
        lastmaincolorHover2: "#fef2e8",
        lastmaincolorHover3: "#f59e59",
        lastalert: "#db2d2e",
        lasttext: "#231f20",
        lastgrey: "#F3F3F3",
        lastgrey2: "#dbdbdb",
      },
      fontFamily: {
        lato: ["Lato", "serif"],
        gemunu: ["Gemunu Libre", "serif"],
      },
      width: {
        "30rem": "30rem",
        "38rem": "38rem",
      },
    },
  },
  plugins: [],
};
