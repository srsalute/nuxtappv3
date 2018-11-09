module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier',
    'graphql'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    semi: [
      2,
      'never'
    ],
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false
      }
    ],
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        projectName: 'app'
      }
    ]
  }
}
