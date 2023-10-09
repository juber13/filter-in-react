export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'popins' : ['popins' , 'sans-serif']
      },
      colors : {
        'dark-gray-transparent' : 'rgba(0,0,0,0.4)',
        'header-color' : '#3E57DB'
      }
    },
   
  },
  plugins: [],
}