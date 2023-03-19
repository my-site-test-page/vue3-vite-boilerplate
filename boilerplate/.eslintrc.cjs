module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/essential',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'off',
    'prefer-const': 2,
    'no-var': 2,
    'vue/no-multiple-template-root': 1,
    'no-unused-vars': 1,
  },
};
