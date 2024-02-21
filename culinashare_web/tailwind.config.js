/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'dancing-script' : ["Dancing Script", 'cursive'],
        'poppins' : ["Poppins", 'sans-serif'],
        'culina-share' : ["Great Vibes", 'cursive']
      }
    },
  },
  plugins: [],
}

