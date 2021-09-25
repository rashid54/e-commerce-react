module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '102': '1.02',
      },
      spacing: {
        '110p': '110%',
      },
      colors: {
        "bright-yellow": "#ffff00",
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
            "100": "#46B5D1",
            "200": "#00A8CC",
            "300": "#5089C6",
            "400": "#4A69BB",
            "500": "#617BE3",
            "600": "#0C7B93",
          },
        },
        neon1: {
          dark:{
            "100": "#7C83FD",
            "200": "#96BAFF",
            "300": "#03506F",
          },
          light: {
            "100": "#00EAD3",
            "200": "#7DEDFF",
            "300": "#88FFF7",
            "400": "#89C9B8",
            "500": "#d9fffc",
            "600": "#7de5ff",
            "900": "#7fe3dd",
            "1000": "#d1f6ff",
            "2000": "#5ec2db",
            
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
