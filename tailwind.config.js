/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    extend: {
      colors: {
        "primary": "#F5B301",
        "on-primary": "#FDFDFD",
        "secondary": "#2A2E34",
        "on-secondary": "#2C394B",
         
        "tertiary": "#F5A302", 
        "error": "#AF2222", 
        "background": "#1E2329",
        "surface": "#3B4046",
      },
      boxShadow: {
        right: "4px 4px 15px 0px rgba(18, 18, 18, 0.25)",
      },
      content: {
        'empty': '""',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        'slide-right': 'slide-right 1s ease-out forwards',
        'slide-left': 'slide-left 1s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out',
      },

    },
  },
  plugins: [],
}


