module.exports = {
  mode: "jit",
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparant: 'transparant',
        white: '#FFFFFF',
        black: '#222222',
        orange: '#E86011',
        yellow: '#FFD600',
        blue: '#0F31AFE5',
        circle: '#5A6CAD',
        border: '#E6E6E7',
        grey: {
          dark: '#383C43',
          light: '#787F86',
          texture: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
        },
      },
      fontFamily: {
        'lato': ['"Lato"', 'sans-serif'],
        'source': ['Source Sans Pro', 'sans-serif'],
      },
      container: {
        center: true,
      },
      theme: {
        height: {
          sm: '8px',
          md: '16px',
          lg: '24px',
          'trait': '639px',
        }
      },
      screens: {
        'xsmall': '450px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      boxShadow: {
        sm: '0px 2px 24px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        '419': '26.188rem',
        '709': '44.313rem',
      },
      width: {
        '548': '34.25rem',

      },
      maxWidth: {
        '856': '53.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
