module.exports = {
  extends: 'airbnb',

  env: {
    'browser': true,
    'jest': true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    'arrow-body-style': ['error', 'always'],
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': ['error', 'never'],
    'import/no-unresolved': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'no-alert': 0,
    'no-console': 0,
    'no-underscore-dangle': ['error', { 'allowAfterThis': true }],
    'object-curly-spacing': 'warn',
    'one-var': ["error", { "initialized": "never", "uninitialized": "always" }],
    'one-var-declaration-per-line': ["error", "initializations"],
    'prefer-destructuring': 'off',
    'react/destructuring-assignment': 'never'
  },
};
