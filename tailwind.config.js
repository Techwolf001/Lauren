/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
    theme: {
      screens: {
        sm: { min: "100px" },
        tab: { min: "481px"},
        mcom: { min: "769px" },
        com: { min: "1200px" },
        tv: { min: "1513px" },
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
  
      
        Syne: "fonts/Syne/Syne-VariableFont_wght.ttf",
      },
    extend: {},
  },
  plugins: [],
}