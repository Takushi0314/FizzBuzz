module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
    // Allow named export
    'import/prefer-default-export': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'newline-before-return': 'error',
    'no-console': 'warn',
    'no-var': 'error',
    'space-before-function-paren': 'error',
    'space-in-parens': 'error',
    'object-curly-spacing': 'error',
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {'after': true, 'before': false}],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error'
  },
};
