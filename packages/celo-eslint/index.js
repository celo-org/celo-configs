module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:workspaces/recommended',
  ],
  plugins: ['import', 'unused-imports', 'jsx-a11y', 'prettier', 'jest'],
  rules: {
    'prettier/prettier': 'warn',
    'semi': 'off',
    'import/no-anonymous-default-export': 'warn',
    'unused-imports/no-unused-imports': 'warn',

    // A11y
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',

    // Typescript
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  settings: { react: { version: 'detect' } },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.spec.json', './packages/**/tsconfig.json', './packages/**/tsconfig.spec.json'],
  },
}
