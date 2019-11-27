module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': 0,
    'jsx-quotes': 0,
    indent: 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'one-var': 0,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4',
    },
  },
}
