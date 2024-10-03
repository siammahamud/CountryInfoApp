// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
     keyframes:{
      leftspin: {
        '0%': { tranform:'translateY(0px)'},
        '20%': {transform: 'translateY(-30px)'},
        '40%': { transform: 'translateX(-65px) translateY(-30px)'},
        '60%': { transform: 'translateX(-65px) translateY(30px)'},
        '80%': {transform: 'translateY(30px)'},
        '100%': {transform: 'translateY(0px)'},
      },
      rightspin: {
        '0%': { tranform:'translateY(0px)'},
        '20%': {transform: 'translateY(30px)'},
        '40%': { transform: 'translateX(65px) translateY(30px)'},
        '60%': { transform: 'translateX(65px) translateY(-30px)'},
        '80%': {transform: 'translateY(-30px)'}, 
        '100%': {transform: 'translateY(0px)'},
      },


     },
    animation:{
      'leftspin': 'leftspin 1s linear infinite',
      'rightspin': 'rightspin 1s linear infinite',
    }


  },
},
  plugins: [
    flowbite.plugin(),
  ],
}