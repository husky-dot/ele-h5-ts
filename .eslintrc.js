module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    window: true,
    module: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    'vue/no-multiple-template-root': 'off',
  },
}
