const preset = require('nativewind/preset')

console.log(JSON.stringify(preset()))

/**
 * @type {import('tailwindcss').Config}
 * */
module.exports = {
  content: [
    '../../packages/ui/src/**/*.{ts,tsx}',
    '../../apps/mobile/src/**/*.{ts,tsx}'
  ],
  presets: [preset()],
  theme: {
    extend: {}
  },
  plugins: []
}
