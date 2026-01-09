/**
 * @type {import('tailwindcss').Config}
 * */
module.exports = {
  content: [
    '../../apps/mobile/src/**/*.tsx',
    '../../packages/ui/src/**/*.{ts,tsx}'
  ],
  darkMode: 'class',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        error: 'rgb(var(--error) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        notification: 'rgb(var(--notification) / <alpha-value>)',
        foreground: 'rgb(var(--text) / <alpha-value>)'
      }
    }
  },
  plugins: []
}
