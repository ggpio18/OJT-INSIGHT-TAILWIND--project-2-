/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        starBanner:"url(../dist/img/bg.png)",
        project1: "url(../dist/img/unnamed.png)",
        project2: "url(../dist/img/unnamed1.png)",
        project3: "url(../dist/img/unamed2.png)",
      },
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        header: "#2b2b2b",
        accent: "#d16352",
        footer: "#7c7c7c",
        dropdown: "#2b2b2b",
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      }
    },
  },
  plugins: [],
}
