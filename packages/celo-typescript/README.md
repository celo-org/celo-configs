# Celo tsconfig

## Installation

NPM
```
npm install --save-dev @celo/tsconfig
```

Yarn
```
yarn add --dev @celo/tsconfig
```

## Usage

In your tsconfig add `@celo/tsconfig/tsconfig.json` to the extends field

```json
{
  "extends": ["@celo/tsconfig/tsconfig.json"]
}
```

You will need to add your own `"include"` and '`"outDir"`' fields

*Example*
```json
{
  "extends": ["@celo/tsconfig/tsconfig.json"],
  "include": ["src/**/*.ts"],
  "compilerOptions": {
    "outDir": "lib"
  }
}
```
