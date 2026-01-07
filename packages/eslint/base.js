const js = require('@eslint/js')
const css = require('@eslint/css')
const ts = require('typescript-eslint')

/**
 * @type {import('eslint').ESLint.Options[]}
 * */
module.exports = [
  js.configs.recommended,
  ts.configs.recommended,
  {
    files: ['**/*.css'],
    plugins: { css }
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      'no-undef': 0,
      '@typescript-eslint/no-require-imports': 0
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
