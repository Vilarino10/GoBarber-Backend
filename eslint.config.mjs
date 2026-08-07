// @ts-check

import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist/**', 'node_modules/**', '.yarn/**']),

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],

    extends: [js.configs.recommended, tseslint.configs.recommended],

    languageOptions: {
      globals: globals.node,
    },
  },

  eslintConfigPrettier,
]);
