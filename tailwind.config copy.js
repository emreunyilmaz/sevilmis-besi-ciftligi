/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
  safelist: [
    'bg-primary', 'bg-secondary', 'bg-accent', 'bg-neutral', 'bg-base-100', 
    'text-primary', 'text-secondary', 'text-accent', 'text-neutral', 'text-base-100'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'], // Varsayılan font olarak Poppins'i ayarla
      },
      colors: {
        primary: {
          DEFAULT: '#391000', // Ana renk
          light: '#4a1500',
          dark: '#2d0c00',
          hover: '#4f1600'
        },
        secondary: {
          DEFAULT: '#8B4513', // Tamamlayıcı kahverengi
          hover: '#723A0F'
        },
        accent: {
          DEFAULT: '#D4A976', // Açık kahve
          hover: '#C09365'
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#391000",
          "secondary": "#8B4513",
          "accent": "#D4A976",
          "neutral": "#2A323C",
          "base-100": "#F8F5F0",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
    darkTheme: "light", // Varsayılan olarak light mode kullan

  },
}

