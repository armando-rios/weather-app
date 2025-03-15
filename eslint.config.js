import globals from 'globals';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

// eslint for frontend development
export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  prettierConfig,
  {
    files: ['**/*.js'],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
  {
    ignores: ['dist/', 'node_modules/', 'build/'],
  },
];
