const { defineConfig } = require('eslint/config')
const js = require('@eslint/js')
const css = require('@eslint/css')
const ts = require('typescript-eslint')
/**
 * @type {import('eslint').ESLint.Options[]}
 */
module.exports = [
  ts.configs.recommended,
  js.configs.recommended,
  { files: ['**/*.css'], plugins: [css] },
  {
    files: ['**/*.{js,mjs}'],
    rules: {
      '@typescript-eslint/no-require-imports': 0,
      'no-undef': 0
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports', prefer: 'type-imports' }
      ]
    }
  }
]
//
