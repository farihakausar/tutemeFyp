/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

      fontFamily: {
        customfontname: ['Segoe UI', 
                       'Helvetica Neue', 
                       'Arial',
                       'sans-serif',
                       /*...*/ defaultTheme.fontFamily.customfontname],
      
        marck: ['"Marck Script"', ...defaultTheme.fontFamily.sans],
        oswald: ['"Oswald"', ...defaultTheme.fontFamily.sans],
        satisfy: ['"Satisfy"', ...defaultTheme.fontFamily.sans],
        abc: ['Briem Hand','cursive'],
        dfe: ["Jersey 20", 'sans-serif'],
        hmm: ["Caveat", "cursive"],

       
      
      },
      colors: {
        customBlue: 'rgb(0, 36, 125)',
      },
    },
  },
  plugins: [],
}

// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 400 to 700

// .caveat-<uniquifier> {
//   font-family: "Caveat", cursive;
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;
// }
// .pacifico-regular {
//   font-family: "Pacifico", cursive;
//   font-weight: 400;
//   font-style: normal;
// }

// <uniquifier>: Use a unique and descriptive class name

// .jaro-<uniquifier> {
//   font-family: "Jaro", sans-serif;
//   font-optical-sizing: auto;
//   font-weight: 400;
//   font-style: normal;
// }