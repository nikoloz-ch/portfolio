/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html",
    flowbite.content(),
  ],
  theme: {
    extend: {
      animation: {
        loaded: "loaded 1s ease-in-out forwards 1s",
        loading: "loading 1s ease-in-out forwards 1s",
        header: "header 2s ease-in-out forwards",
        footer: "footer 1s ease-in-out forwards",
        logo: "logo 0.5s ease-in-out forwards 2s",
        text1: "text1 0.5s ease-in-out forwards 2.5s",
        text2: "text2 0.5s ease-in-out forwards 3s",
        text3: "text3 0.5s ease-in-out forwards 3.5s",
        text4: "text3 0.5s ease-in-out forwards 4s",
        underline: "underline 0.5s ease-in-out forwards 2.8s",
        enter: "enter 1s ease-in-out forwards 1.5s",
        enter2: "enter 1.5s ease-in-out forwards 2s",
      },
      keyframes: {
        header: {
          "0%": {
            width: "5%",
          },
          "100%": {
            width: "100%",
          },
        },
        logo: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
        text1: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
        text2: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
        text3: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
        text4: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
        footer: {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        loading: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
        loaded: {
          "0%": {
            opacity: "100",
          },
          "100%": {
            opacity: "0",
          },
        },
        enter: {
          "0%": {
            opacity: "0",
            transform: "translateY(20%)",
          },
          "100%": {
            opacity: "100",
            transform: "translateY(0%)",
          },
        },
        enter2: {
          "0%": {
            opacity: "0",
            transform: "translateY(30%)",
          },
          "100%": {
            opacity: "100",
            transform: "translateY(0%)",
          },
        },
        underline: {
          "0%": {
            width: "0px",
          },
          "100%": {
            width: "28%",
          },
        },
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        canada: ["Radio Canada Big", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), flowbite.plugin()],
};
