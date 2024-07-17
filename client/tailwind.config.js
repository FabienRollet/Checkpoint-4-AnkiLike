/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
colors:{
  "darkColor":'#1d232a'
}
    },
        mytheme: {
          
"primary": "#f0f8ff",
          
"secondary": "#ef4444",
          
"accent": "#84cc16",
          
"neutral": "#1d232a",
          
"base-100": "#000",
          
"info": "#2563eb",
          
"success": "#ffb782",
          
"warning": "#00ff00",
          
"error": "#ef4444",
          },
        },
  plugins: [
    require('daisyui'),
  ],
}