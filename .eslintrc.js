module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: ['airbnb-typescript', 'eslint:recommended', 'plugin:react-hooks/recommended', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  globals: {},
};
