import { defineConfig } from 'eslint/config';

export default defineConfig({
  files: ['**/*.{ts,tsx,js,jsx}'],
  plugins: { prettier: {}, '@typescript-eslint': {} },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'prettier/prettier': ['error', { semi: false }]
  }
});
