/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '440px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        mint: '#7CC6A1',
        salmon: '#FFA07A',
        mintHover: '#9ee5b4',
        salmonHover: '#f8c9b2',
        navy: '#001f3f',
        granate: '#333333',
        white: '#ffffff',
        lightGray: '#cccccc',
        hambBg: 'rgba(128,128,128,0.6)'
      },
      minHeight: {
        'smallScreen': 'calc(100vh - 52px)',
        'medScreen': 'calc(100vh - 52px)',
        'lgScreen': 'calc(100vh - 52px)',
      },
      spacing: {
        '60px': '60px',
        '52px': '52px',
        '325px': '325px',
        '400px': '400px'
      },
      transitionProperty: {
        'transitionV2' : 'transition: transform 0.5s ease-in-out',
      }, gridTemplateColumns: {
        'xd': 'repeat(7, 1fr)',
      }
    },
  },
  plugins: [],
}

