const path = require('path')

module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': 0,
    'jsx-quotes': 0,
    indent: 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.2.0',
    },
  },
}
