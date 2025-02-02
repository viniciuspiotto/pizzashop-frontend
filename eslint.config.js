import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
    },

    rules: {
      "react/prop-types": "off",
      ...reactHooks.configs.recommended.rules,
      "prettier/prettier": "error",
    },
  },
  eslintConfigPrettier,
];
