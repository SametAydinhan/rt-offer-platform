module.exports = {
  root: true,
  extends: ['@packages/eslint-config'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};