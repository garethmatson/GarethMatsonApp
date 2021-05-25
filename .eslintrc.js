module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:jest/recommended'],

  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    semi: ['off'],
    'no-console': ['off'],
    'react-native/no-inline-styles': ['off'],
  },
  env: {
    'jest/globals': true,
  },
};
