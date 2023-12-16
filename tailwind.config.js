
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    lineHeight: {
      '75': '75px',
    },
    extend: {
     
      typography: {
        'custom-gradient': {
       
          backgroundImage: 'linear-gradient(180deg, #D8B4FE -43.9%, rgba(216, 180, 254, 0.00) 172.76%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        
      },
      fontFamily: {
        'Satoshi': ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
