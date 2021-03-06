module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
  },
}
