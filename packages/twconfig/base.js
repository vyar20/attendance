/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    '../../packages/ui/src/**/*.{ts,tsx}',
    '../../apps/m/src/**/*.{ts,tsx}'
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {}
  },
  plugins: []
}
