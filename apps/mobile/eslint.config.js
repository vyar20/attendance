// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')
const config = require('@repo/eslint/base')

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*']
  },
  ...config
])
