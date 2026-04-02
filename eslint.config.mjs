import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [".next/**", ".vercel/**", "node_modules/**"],
  },
  ...nextCoreWebVitals,
];

export default eslintConfig;
