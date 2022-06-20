module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['!.*', 'dist', 'node_modules'],
  globals: {
    React: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    'react-hooks/exhaustive-deps': 'error',
    'no-var': 'error',
    'brace-style': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'space-before-blocks': 'error',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.tsx',
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*.spec.tsx',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
