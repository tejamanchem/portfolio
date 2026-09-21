/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#050608',
          card: '#0b0d13',
          surface: '#11141c',
          elevated: '#171b26'
        },
        border: {
          subtle: '#1d2331',
          glow: 'rgba(249, 115, 22, 0.25)'
        },
        accent: {
          orange: '#f97316',
          amber: '#f59e0b',
          glow: '#ff8a00'
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
