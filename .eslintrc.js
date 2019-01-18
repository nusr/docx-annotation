module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: ['html'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 'off',
    // enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': ['error', 'never'],
    // require braces around arrow function bodies
    'arrow-body-style': 'error',
    // require parentheses around arrow function arguments
    'arrow-parens': ['error', 'as-needed']
  }
}
