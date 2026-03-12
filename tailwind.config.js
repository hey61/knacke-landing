/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        knakke: {
          lime: '#a8c800',
          limeLight: '#c4e020',
          limeDark: '#8aaa00',
          dark: '#1a1a1a',
          darker: '#0f0f0f',
          card: '#222222',
          cardHover: '#2a2a2a',
          muted: '#888888',
          border: 'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        heading: ['"Outfit"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
