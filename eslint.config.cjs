const pluginVue = require('eslint-plugin-vue')
const pluginPrettier = require('eslint-plugin-prettier')
const vueParser = require('vue-eslint-parser')

module.exports = [
  {
    ignores: ['dist/**']
  },
  {
    files: ['**/*.vue', '**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: vueParser,
      parserOptions: {
        parser: require('espree'),
        ecmaFeatures: {
          legacyDecorators: true
        }
      }
    },
    plugins: {
      vue: pluginVue,
      prettier: pluginPrettier
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-unused-vars': 'off',
      'prettier/prettier': 'error'
    }
  }
]
