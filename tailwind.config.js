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
        bg: '#050B1F',
        bg2: '#080F27',
        bg3: '#0C1535',
        cyan: '#00D4FF',
        violet: '#7B2FFF',
        white: '#E8F4F8',
        muted: '#6B87A8',
      },
      fontFamily: {
        head: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
