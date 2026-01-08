/**
 * @type {import('tailwindcss').Config}
 * */
module.exports = {
  content: ['../../apps/mobile/src/**/*.tsx'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {}
  },
  plugins: []
}
