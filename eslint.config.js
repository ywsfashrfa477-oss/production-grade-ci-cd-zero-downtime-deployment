const globals = require('globals');

module.exports = [
  {
    ignores: ['node_modules/**']
  },
  {
    files: ['server.js', 'tests/**/*.js'],
    languageOptions: {
      globals: globals.node
    },
    rules: {
      'no-unused-vars': 'error'
    }
  },
  {
    files: ['public/**/*.js'],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      'no-unused-vars': 'error'
    }
  }
];