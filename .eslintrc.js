module.exports = {
  extends: 'airbnb',

  env: {
    'browser': true,
    'jest': true
  },
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    'arrow-body-style': ['error', 'always'],
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': ['error', 'never'],
    'import/no-unresolved': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'no-console': 0,
    'no-alert': 0,
    'one-var': ["error", { "initialized": "never", "uninitialized": "always" }],
    'one-var-declaration-per-line': ["error", "initializations"],
    'react/destructuring-assignment': 'never'
  },
};
