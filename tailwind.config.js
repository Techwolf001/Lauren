/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
    theme: {
      screens: {
        sm: { min: "100px", max: "480px" },
        tab: { min: "481px", max: "768px" },
        mcom: { min: "769px", max: "1200px" },
        com: { min: "1200px", max: "1512px" },
        tv: { min: "1513px", max: "2067px" },
        cin: { min: "2068px" },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
  
        "poppin-black": "fonts/Poppins/Poppins-Black.ttf",
        "poppin-bold": "fonts/Poppins/Poppins-Bold.ttf",
        "poppin-italic": "fonts/Poppins/Poppins-Italic.ttf",
        "poppin-light": "fonts/Poppins/Poppins-Light.ttf",
        "poppin-thin": "fonts/Poppins/Poppins-Thin.ttf",
        Syne: "fonts/Syne/static/Syne-Regular.ttf",
      },
    extend: {},
  },
  plugins: [],
}