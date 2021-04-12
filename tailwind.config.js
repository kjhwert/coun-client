module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      'basic' : ['Spoqa Han Sans, Sans-serif'],
    },
    extend: {
      colors: {
        main : {
          100 : '#eeeeee',
          200 : '#d1d1d1',
          300 : '#646464',
          400 : '#333333',
          500 : '#262626'
        },
      },
      width: {
        web: '1200px'
      },
      height: {
        web: '800px',
        mobile: '600px',
        310: '310px'
      },
      fontSize: {
        '10':'10px',
        '12':'12px',
        '14':'14px',
        '16':'16px',
        '18':'18px'
      }
    },
  },
  variants: {
  },
  plugins: [],
}
