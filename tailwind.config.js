/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sunset-gold': '#F4A300',
        'deep-charcoal': '#2B1D12',
        'shadowed-amber': '#DA962B',
      },
    },
  },
  plugins: [],
};
