/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: "1rem"
    },
    fontSize:{
      "navsize":"3.2rem",
      "h2":"6.4rem",
      "h3":"9.6rem",
      "h4":"4.8rem",

    },
    extend: {
      colors:{
        "main": "#E2711D",
        "background": "#CC5803",
        "yellow": "#DFDD37"
      },
      fontFamily:{
        "roboto":["Roboto Mono", "monospace"]
      },
      spacing:{
        "section":"10rem"
      },
      maxWidth:{
        "aboutimg": "36rem"
      },
      maxHeight:{
        "aboutimg": "40rem"
      },
      keyframes:{
        scroll: {
          "0%": {transform: "translate(0%)"},
          "100%": {transform: "translate(-14%)"},
        }
      },
      animation: {
        scroll: "scroll 1s ease-out infinite"
      }
    },
  },
  plugins: [],
}
