/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
