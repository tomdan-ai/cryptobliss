/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sunset-gold': '#F4A300',
        'deep-charcoal': '#2B1D12',
        'shadowed-amber': '#DA962B',
        'cryptobliss-primary': '#F4A300',    // Adjust this to match logo color
        'cryptobliss-secondary': '#DA962B',  // Adjust this to match logo color
        'cryptobliss-dark': '#2B1D12',       // Adjust this to match logo color
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};