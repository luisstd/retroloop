/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          light: 'rgba(245, 245, 245, 1)',
          dark: 'rgba(18,18,18,1)',
        },
        hover: {
          light: 'rgba(209, 213, 219,0.4)',
          dark: 'rgba(229,229,229,1)',
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  },
}
