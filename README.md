[![Build Status](https://travis-ci.org/keplersj/jest-runner-tslint.svg?branch=master)](https://travis-ci.org/keplersj/jest-runner-tslint)
[![npm version](https://badge.fury.io/js/jest-runner-tslint.svg)](https://badge.fury.io/js/jest-runner-tslint)
[![codecov](https://codecov.io/gh/keplersj/jest-runner-tslint/branch/master/graph/badge.svg)](https://codecov.io/gh/keplersj/jest-runner-tslint)

<div align="center">
  <h1>jest-runner-tslint</h1>
  <p>TSLint runner for Jest</p>
</div>

<div align="center">
  <!--<img src="https://user-images.githubusercontent.com/574806/30197438-9681385c-941c-11e7-80a8-2b11f15bd412.gif">-->
  <!-- TODO: Create GIF showing off runner -->
</div>


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
  runner: 'jest-runner-tslint',
  moduleFileExtensions: ["ts"],
  testMatch: ["**/*.ts"],
}
```

### Run Jest
```bash
yarn jest
```