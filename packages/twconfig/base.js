const path = require('node:path')

/**
 * @type {import('tailwindcss').Config}
 * */
module.exports = {
  content: [
    path.resolve(__dirname, '../../packages/ui/src/**/*.{ts,tsx}'),
    path.resolve(__dirname, '../../apps/mobile/src/**/*.{ts,tsx}')
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {}
  },
  plugins: []
}
