module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: 'eslint:recommended',
  parser: 'vue-eslint-parser',
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-undef': 0,
    'no-unused-vars': 1
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  }
}
