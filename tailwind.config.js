/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-require-imports,import/no-extraneous-dependencies
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['RobotoRegular', ...fontFamily.sans],
      },
      lineHeight: {
        normal: 1.5,
      },
      fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
        black: '900',
      },
      fontSize: {
        '4xl': '1.625rem', // 26px / 32px
        '3xl': '1.375rem', // 22px
        '2xl': '1.25rem', // 20px
        xl: '1.125rem', // 18px
        lg: '1rem', // 16px
        base: '0.875rem', // 14px
        sm: '0.75rem', // 12px
        xs: '0.625rem', // 10px
      },
      spacing: {
        40: '40px',
        25: '25px',
        20: '20px',
        15: '15px',
        10: '10px',
        5: '5px',
        4: '4px',
        3: '3px',
        2: '2px',
        1: '1px',
        0: '0px',
      },
      borderWidth: {
        DEFAULT: 0,
      },
      borderColor: {
        DEFAULT: 'currentColor',
      },
      borderStyle: {
        DEFAULT: 'solid',
      },
      boxShadow: {
        none: 'none',
        dark: '0 2px 10px 0 rgba(255, 255, 255, 0.3)',
        base: '0 2px 10px 0 rgba(0, 0, 0, 0.25)',
      },
      colors: {
        chart: {
          900: '#212121',
          800: '#9d9d9d',
          700: '#b1634e',
          600: '#e02020',
          500: '#eea47f',
          400: '#9c56b0',
          300: '#239ed8',
          200: '#9cc4d5',
          100: '#2cae66',
          50: '#fee715',
        },
        orange: {
          700: '#c44f00',
          600: '#fa6400',
          500: '#fe7801',
          400: '#ff8c52',
          300: '#eea47f',
          200: '#ff9f4b',
          100: '#ffd1a9',
          50: '#ffe9d5',
        },
        red: {
          900: '#b40000',
          800: '#e02020',
          700: '#ff0000',
          600: '#ff5454',
        },
        green: {
          900: '#037132',
          800: '#008f3d',
          700: '#1c944e',
          650: '#04a94c',
          600: '#2cae66',
          500: '#51b500',
          400: '#6dd400',
          300: '#95e400',
          200: '#bfd0c6',
          100: '#ddeee4',
          50: '#eefaf3',
        },
        blue: {
          850: '#1f2943',
          800: '#145c9c',
          750: '#2151af',
          700: '#2f80ed',
          600: '#49a2f2',
          500: '#6bd7ff',
          400: '#b5c6ce',
          300: '#c4e1ee',
          200: '#e4eef1',
          100: '#deeef7',
        },
        grey: {
          950: '#040209',
          900: '#110f15',
          850: '#1d1b22',
          800: '#212121',
          700: '#2e3031',
          650: '#2b2933',
          600: '#5b5e5e',
          550: '#818083',
          500: '#aaaaaa',
          400: '#c6c6c6',
          300: '#e3e3e3',
          200: '#f2f4f6',
          100: '#fbfafa',
        },
      },
    },
  },
  plugins: [],
};
