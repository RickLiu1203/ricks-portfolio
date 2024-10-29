/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        'resume': '2px',
      },
      boxShadow: {
        'none': '0 0',
        'resume': '2px 2px 0 #000',
        'links': '3px 3px 0 #000',
        'section-head': '3px 3px 0 #4287f5',
      },
    },
  },
  plugins: [],
}

