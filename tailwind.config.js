/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdf9',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#176B68', // Deep medical teal (Primary)
          600: '#145c5a',
          700: '#0f4644',
          800: '#0b3534',
          900: '#082524',
          950: '#031413',
        },
        sage: {
          50: '#f4f8f5',
          100: '#e5f0e8',
          200: '#cce1d3',
          300: '#A8C8B5', // Soft sage green (Secondary)
          400: '#84ad94',
          500: '#649376',
          600: '#4e755d',
          700: '#3e5d4a',
          800: '#334c3d',
          900: '#2a3e33',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FAF9F6', // Warm ivory (Background)
          200: '#F5F3ED',
          300: '#EAE6DC',
          400: '#DBD5C5',
          500: '#C8BEA8',
        },
        blush: {
          50: '#fdf7f7',
          100: '#faeeef',
          200: '#f5ddde',
          300: '#E9BFC0', // Muted blush (Accent)
          400: '#d99fa1',
          500: '#c57b7e',
          600: '#b05e62',
        },
        charcoal: {
          50: '#f6f7f8',
          100: '#eceff1',
          200: '#cfd8dc',
          300: '#90a4ae',
          400: '#607d8b',
          500: '#455a64',
          600: '#37474f',
          700: '#263238', // Deep charcoal (Text)
          800: '#1c2428',
          900: '#12171a',
          950: '#0a0d0e',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(23, 107, 104, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 12px 32px -4px rgba(23, 107, 104, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'soft-xl': '0 20px 45px -8px rgba(23, 107, 104, 0.16), 0 8px 18px -4px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}

