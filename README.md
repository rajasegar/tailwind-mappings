# tailwind-mappings


![Build and Deploy](https://github.com/rajasegar/tailwind-mappings/workflows/Build%20and%20Deploy/badge.svg)
[![npm version](http://img.shields.io/npm/v/tailwind-mappings.svg?style=flat)](https://npmjs.org/package/tailwind-mappings "View this project on npm")
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/tailwind-mappings/badge.svg?branch=main)](https://coveralls.io/github/rajasegar/tailwind-mappings?branch=main)


CSS Property values to Tailwind utilities mapping data

## Install
```
npm install --save tailwind-mappings
```

## Usage
```js
const { TAILWIND_CLASSES } = require('tailwind-mappings');

const decl = {
  prop: 'display',
  value: 'block'
};

const tailwindClass = TAILWIND_CLASSES[decl.prop][decl.value];
// => 'block'

const decl2 = {
  prop: 'padding',
  value: '0px'
};

const tailwindClass = TAILWIND_CLASSES[decl2.prop][decl2.value];
// => 'p-0'
```
