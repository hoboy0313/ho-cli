module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  extends: ['airbnb-base', 'alloy', 'alloy/typescript'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 0,
    // 'import/no-unresolved': [2, {  }],
  },
};
