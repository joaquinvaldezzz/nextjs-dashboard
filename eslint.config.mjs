/**
 * THIS FILE WAS AUTO-GENERATED.
 *
 * PLEASE DO NOT EDIT IT MANUALLY.
 *
 * IF YOU'RE COPYING THIS INTO AN ESLINT CONFIG, REMOVE THIS COMMENT BLOCK.
 */

import path from "node:path";
import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import { configs, plugins, rules } from "eslint-config-airbnb-extended";
import { rules as prettierConfigRules } from "eslint-config-prettier";
import eslintPluginPerfectionist from "eslint-plugin-perfectionist";
import prettierPlugin from "eslint-plugin-prettier";

const gitignorePath = path.resolve(".", ".gitignore");

/** @type {import("eslint").Linter.Config[]} */
const jsConfig = [
  // ESLint Recommended Rules
  {
    name: "js/config",
    ...js.configs.recommended,
  },
  // Stylistic Plugin
  plugins.stylistic,
  // Import X Plugin
  plugins.importX,
  // Airbnb Base Recommended Config
  ...configs.base.recommended,
  // Strict Import Config
  rules.base.importsStrict,
  {
    rules: {
      // Disable Import X order rules to avoid conflicts with `@ianvs/prettier-plugin-sort-imports`
      "import-x/order": "off",
    },
  },
];

/** @type {import("eslint").Linter.Config[]} */
const nodeConfig = [
  // Node Plugin
  plugins.node,
  // Airbnb Node Recommended Config
  ...configs.node.recommended,
];

/** @type {import("eslint").Linter.Config[]} */
const nextConfig = [
  // React Plugin
  plugins.react,
  // React Hooks Plugin
  plugins.reactHooks,
  // React JSX A11y Plugin
  plugins.reactA11y,
  // Next Plugin
  plugins.next,
  // Airbnb Next Recommended Config
  ...configs.next.recommended,
  // Strict React Config
  rules.react.strict,
  {
    rules: {
      "react/jsx-sort-props": "off",
    },
  },
];

/** @type {import("eslint").Linter.Config[]} */
const typescriptConfig = [
  // TypeScript ESLint Plugin
  plugins.typescriptEslint,
  // Airbnb Base TypeScript Config
  ...configs.base.typescript,
  // Strict TypeScript Config
  rules.typescript.typescriptEslintStrict,
];

/** @type {import("eslint").Linter.Config[]} */
const perfectionistConfig = [
  {
    plugins: {
      perfectionist: eslintPluginPerfectionist,
    },
    rules: {
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
  },
];

/** @type {import("eslint").Linter.Config[]} */
const prettierConfig = [
  // Prettier Plugin
  {
    name: "prettier/plugin/config",
    plugins: {
      prettier: prettierPlugin,
    },
  },
  // Prettier Config
  {
    name: "prettier/config",
    rules: {
      ...prettierConfigRules,
      "prettier/prettier": "error",
    },
  },
];

/** @type {import("eslint").Linter.Config[]} */
export default [
  // Ignore .gitignore files/folder in eslint
  includeIgnoreFile(gitignorePath),
  // Javascript Config
  ...jsConfig,
  // Node Config
  ...nodeConfig,
  // Next.js Config
  ...nextConfig,
  // TypeScript Config
  ...typescriptConfig,
  // Perfectionist Config
  ...perfectionistConfig,
  // Prettier Config
  ...prettierConfig,
];
