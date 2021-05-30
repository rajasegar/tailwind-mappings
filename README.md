# tailwind-mappings

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
