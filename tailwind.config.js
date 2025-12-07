/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#6A1827',
        cream: '#F7F1E8',
        tan: '#D9C7A6',
        charcoal: '#2E2A28',
        gold: '#C9A86A',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        script: ['var(--font-script)', 'cursive'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'warm': '0 8px 30px rgba(106, 24, 39, 0.12)',
      },
    },
  },
  plugins: [],
}





