export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        setTimeout: "readonly",
        FormData: "readonly",
        Math: "readonly",
        console: "readonly",
        URL: "readonly",
        atob: "readonly",
        Blob: "readonly",
        Uint8Array: "readonly",
        navigator: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
];
