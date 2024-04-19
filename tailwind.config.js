/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js", "./src/*.{html,js,css}"],

  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  mode: "jit",

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      {
        customLight: {
          primary: "#1ABA1A",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "base-200": "#F5F5F5",
          "base-300": "#ffffff",
        },
      },
    ],
  },
};
