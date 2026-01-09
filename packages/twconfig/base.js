/**
 * @type {import('tailwindcss').Config}
 * */
module.exports = {
  content: ['../../apps/mobile/src/**/*.tsx'],
  darkMode: 'class',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        notification: 'rgb(var(--notification) / <alpha-value>)',
        foreground: 'rgb(var(--text) / <alpha-value>)'
      }
    }
  },
  plugins: []
}
