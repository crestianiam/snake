import js from "@eslint/js";
import globals from "globals";
import importPlugin from "eslint-plugin-import";  // ✅ AGGIUNGI

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      import: importPlugin  // ✅ AGGIUNGI
    },

    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module"  // ✅ IMPORTANTE per moduli ES6
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "warn",
      "no-console": "off",
      "no-undef": "error",

      // ✅ AGGIUNGI regole per import/export
      "import/no-unresolved": "error",        // Import che non esistono
      "import/named": "error",                // Named import inesistenti  
      "import/default": "error",              // Default import problematici
      "import/no-unused-modules": "warn",     // Moduli non usati
      "import/extensions": ["error", "always", {  // Estensioni obbligatorie
        "js": "always"
      }],
      "no-warning-comments": [
        "warn",
        {
          "terms": ["todo", "fixme", "temp", "remind"],
          "location": "start"
        }
      ]
    },
    settings: {
      "import/resolver": {
        "node": {
          "extensions": [".js", ".mjs", ".cjs"]
        }
      }
    }
  }
];