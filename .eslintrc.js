module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'prettier'
  ],
  plugins: ['prettier'],
  env: {
    node: true,
    'commonjs': true,
    'es6': true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  }
}