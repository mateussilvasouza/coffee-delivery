import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "max-len": [
        "error",
        {
          code: 80,
          tabWidth: 2,
          ignoreUrls: true,
        },
      ],
      "prettier/prettier": [
        "error",
        {
          printWidth: 80, // Certifique-se de que este valor corresponda ao de max-len
        },
      ],
      "linebreak-style": ["error", "unix"],
      indent: ["error", 2],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  }
);
