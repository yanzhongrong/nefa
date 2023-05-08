module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '12': ['12px', '17px'],
        '14': ['14px', '20px'],
        '16': ['16px', '22px'],
        '18': ['18px', '25px'],
        '20': ['20px', '28px'],
        '22': ['22px', '29px'],
        '24': ['24px', '33px'],
        '28': ['28px', '39px'],
        '36': ['36px', '50px'],
        '42': ['36px', '59px'],
        '48': ['48px', '67px'],
        '80': ['48px', '106px'],
      },
      width: {
        '356': '356px',
        '700': '700px',
      },
      height: {
        '340': '340px',
        '1100': '1100px'
      },
      borderRadius: {
        '20': '20px'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
