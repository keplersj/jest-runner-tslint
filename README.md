# jest-runner-tslint

## **Deprecated**

Due to the [deprecation of TSLint](https://github.com/palantir/tslint/issues/4534) this package is as well in the process of being deprecation. Before this happens officially, this package is following a similar path of maintenance before final deprecation.

In the meantime, if you are currently using this package, please take the time to transition your project to [ESLint](https://eslint.org/), [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint), and [jest-runner-eslint](https://github.com/jest-community/jest-runner-eslint).

For more information on the industry-wide transition from TSLint to ESLint, please see the following:

- [_TSLint in 2019_ on Medium](https://medium.com/palantir/tslint-in-2019-1a144c2317a9)
- [palantir/tslint#4534: "Roadmap: TSLint -> ESLint"](https://github.com/palantir/tslint/issues/4534)
- [typescript-eslint: "What about TSLint?"](https://github.com/typescript-eslint/typescript-eslint#what-about-tslint)

## Usage

### Install

Install `jest`_(it needs Jest 21+)_ and `jest-runner-tslint`

```bash
yarn add --dev jest jest-runner-tslint

# or with NPM

npm install --save-dev jest jest-runner-tslint

```

### Add it to your Jest config

In your `package.json`

```json
{
  "jest": {
    "runner": "jest-runner-tslint",
    "moduleFileExtensions": ["ts"],
    "testMatch": ["**/*.ts"]
  }
}
```

Or in `jest.config.js`

```js
module.exports = {
  runner: "jest-runner-tslint",
  moduleFileExtensions: ["ts"],
  testMatch: ["**/*.ts"]
};
```

### Run Jest

```bash
yarn jest
```

## Options

This project uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig), so you can provide config via:

- a `jest-runner-tslint` property in your `package.json`
- a `jest-runner-tslint.config.js` JS file
- a `.jest-runner-tslintrc` JSON file

In `package.json`

```json
{
  "jest-runner-tslint": {
    "cliOptions": {
      // Options here
    }
  }
}
```

or in `jest-runner-tslint.config.js`

```js
module.exports = {
  cliOptions: {
    // Options here
  }
};
```

### cliOptions

jest-runner-tslint maps a lot of ESLint CLI arguments to config options. For example `--fix` is `cliOptions.fix`

| option              | default     | example                                                                                     |
| ------------------- | ----------- | ------------------------------------------------------------------------------------------- |
| fix                 | `false`     | `"fix": true`                                                                               |
| formatter           | `"stylish"` | `"formatter": "tap"`                                                                        |
| formattersDirectory | `null`      | `"formattersDirectory": "node_modules/custom-tslint-formatters/formatters"`                 |
| rulesDirectory      | `null`      | `"rulesDirectory": "path/to/rules" or "rulesDirectory": ["path/to/rules", "path/to/other"]` |
