module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
      "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
      "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
      "eslint:recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended"
    ],
    "env": {
      "browser": true // fixes error 'document' is not defined  no-undef. (in index.tsx)
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
      "prettier/prettier": ["error", { "singleQuote": true }]
    },
    settings: {
      react: {
        pragma: "React",
        version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
      }
    }
    // parserOptions: {
    //   ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    //   sourceType: "module", // Allows for the use of imports
    //   ecmaFeatures: {
    //     jsx: true // Allows for the parsing of JSX
    //   }
    // },
  };
