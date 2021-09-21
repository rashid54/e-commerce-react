module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        night: {
          dark: {
            "100": "#142850",
            "200": "#27496D",
            "300": "#001E6C",
            "400": "#035397",
            "500": "#151965",
            "600": "#32407B",
          },
          light: {
            "100": "#0C7B93",
            "200": "#00A8CC",
            "300": "#5089C6",
            "400": "#4A69BB",
            "500": "#617BE3",
            "600": "#46B5D1",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
