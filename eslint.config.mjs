import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // Allow 'any' type
      "@typescript-eslint/no-explicit-any": "off",

      // Allow unused variables (use with caution)
      "@typescript-eslint/no-unused-vars": "off",

      // Allow usage of console
      "no-console": "off",

      // Allow undefined variables (generally not recommended)
      "no-undef": "off",
    },
  },
];

export default eslintConfig;
