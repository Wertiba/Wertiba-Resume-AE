const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  { ignores: ['node_modules/**', 'coverage/**', 'vue.global.js'] },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        ...globals.browser,
        ...globals.node,
        Vue: 'readonly',
        RESUME_DATA: 'readonly',
        MILESTONES: 'readonly',
        PARADIGMS: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  {
    // Тесты прогоняются через vitest, который требует ES-модулей.
    files: ['tests/**/*.js'],
    languageOptions: {
      sourceType: 'module',
    },
  },
];
