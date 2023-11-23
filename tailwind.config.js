/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'DARKBLUE05': '#6148FF',
        'DARKBLUE04': '#6148FF.35',
        'DARKBLUE03': '#489CFF',
        'DARKBLUE02': '#D0B7E6',
        'DARKBLUE01': '#E2D4F0',

        'LIMEGREEN05': '#AA9B87',
        'LIMEGREEN04': '#D4C2A8',
        'LIMEGREEN03': '#FFE9CA',
        'LIMEGREEN02': '#FFF0DC',
        'LIMEGREEN01': '#FFF8ED',

        'LIGHTBLUE05': '#EBF3FC',

        'WARNING': '#FF0000',
        'ATTENTION': '#F9CC00',
        'SUCCESS': '#73CA5C'
      },
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}