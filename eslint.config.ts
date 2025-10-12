import path from "node:path";
import { FlatCompat } from "@eslint/eslintrc";
import jsEslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginPerfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintPluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";
import tsEslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: path.dirname(new URL(import.meta.url).pathname),
});

export default defineConfig(
  [globalIgnores([".next", "node_modules", "dist", "out"])],

  // Rules for all files
  {
    files: ["**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}"],
    extends: [
      jsEslint.configs.recommended,
      tsEslint.configs.recommended,
      eslintPluginPrettier,
      eslintConfigPrettier,
    ],
    rules: {
      "@typescript-eslint/no-magic-numbers": "off",
    },
  },

  {
    files: ["app/**"],
    extends: [
      ...compat.config({ extends: ["next", "next/core-web-vitals", "next/typescript"] }),
      eslintPluginReact.configs.flat.recommended,
    ],
    plugins: {
      perfectionist: eslintPluginPerfectionist,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/prefer-destructuring": "off",
      "react/react-in-jsx-scope": "off",
      "perfectionist/sort-jsx-props": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: true,
          ignorePattern: [],
          groups: [
            "className",
            "style",
            "id",
            "name",
            "data",
            "src",
            "for",
            "type",
            "placeholder",
            "href",
            "value",
            "title",
            "alt",
            "role",
            "aria",
            "tabIndex",
            "unknown",
            "callback",
            "shorthand",
            "multiline",
          ],
          customGroups: {
            className: "className",
            id: "id",
            name: "name",
            data: "^data-.+",
            src: "src",
            for: "for",
            type: "type",
            placeholder: "placeholder",
            href: "href",
            value: "value",
            title: "title",
            alt: "alt",
            role: "role",
            aria: "^aria-.+",
            tabIndex: "tabIndex",
            style: "style",
            callback: "^on.+",
          },
        },
      ],
    },
    settings: {
      react: { version: "detect" },
    },
  },
);
