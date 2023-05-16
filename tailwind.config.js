/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  variants: {
    space: ['responsive']
  },
  theme: {
    extend: {
      screens: {
        'xxs': '400px',
        'xs': '450px',
        'minism': '575px',
        'midmd': '896px',
      },
      colors: {
        'deep-red': '#470A11',
        'navy-blue': '#101F3E',
        'light-red': '#F0949F'
      },
      backgroundImage: {
        'hero-background': "url('../public/dallas-skyline.png')",
        'bball-bg': "url('../public/bball-bg.jpeg')",
        'contact-bg': "url('../public/contact-bg.jpeg')",
        'bball-hoop': "url('../public/bball-hoop-bg.jpeg')",
        'team_snapshot': "url(`${teamPhoto}`)"
      },
      boxShadow: {
        '4xl': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
      },
      spacing: {
        '1/2': '50%',
        "300px": "300px",
      }
    },
  },
  plugins: [],
}
