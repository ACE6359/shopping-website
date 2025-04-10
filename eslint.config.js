import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import"; // Add this

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      js,
      import: pluginImport, // Add this
      react: pluginReact, // Explicitly add react plugin
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 2020,
      sourceType: "module",
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          mjs: "never",
          cjs: "never",
          jsx: "never",
        },
      ], // Allow omitting extensions for .js, .mjs, .cjs, .jsx
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);