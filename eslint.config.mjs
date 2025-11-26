// eslint.config.js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  // Next.js recommended rules
  ...nextVitals,

  // Add prettier compatibility
  {
    rules: {
      "prettier/prettier": "off", // Prettier handles formatting
    },
  },

  // Re-enable ignored folders (optional)
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
