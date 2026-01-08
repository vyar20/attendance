const path = require('path')
console.log(__dirname)

/**
 * @type {import('tailwindcss').Config}
 * */
module.exports = {
  content: [path.resolve(__dirname, '../../apps/mobile/src/**/*.tsx')],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {}
  },
  plugins: []
}
