# Celo tsconfig

## Installation

NPM
```
npm install --save-dev @celo/eslint-config
```

Yarn
```
yarn add --dev @celo/eslint-config
```

## Usage

In your eslint config (.eslintrc.js) add `@celo` to the `extends` field

```js
{
  extends: ['@celo']
}
```

If you're wanting to lint typescript you'll need to add the `tsconfigRootDir` to the `parserOptions`

The following works if the eslint and tsconfig.json are in the same directory
```js
{
  extends: ['@celo'],
  tsconfigRootDir: __dirname,
}
```
