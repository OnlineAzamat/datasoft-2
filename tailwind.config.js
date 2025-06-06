/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,jsx}",
    "./sections/**/*.{html,js,jsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1a232e',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      }
    },
  },
  plugins: [],
};
