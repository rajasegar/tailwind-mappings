'use strict';

const TAILWIND_CLASSES = require('./constants');
const { getSpacingUtils, getBorderRadiusUtils } = require('./spacing-utils');

const getBorderUtils = require('./border-utils');
const getColorUtils = require('./color-utils');

const spacingProps = [
  'margin',
  'margin-left',
  'margin-right',
  'margin-top',
  'margin-bottom',
  'padding',
  'padding-bottom',
  'padding-top',
  'padding-left',
  'padding-right',
];

const colorProps = ['color', 'background-color', 'border'];

function getTailwindUtils(decl) {
  const prop = TAILWIND_CLASSES[decl.prop];
  if (
    spacingProps.includes(decl.prop) &&
    !decl.value.includes('var') &&
    !decl.value.includes('calc')
  ) {
    return getSpacingUtils(decl, decl.prop);
  } else if (decl.prop === 'border') {
    return getBorderUtils(decl);
  } else if (decl.prop === 'border-radius') {
    return getBorderRadiusUtils(decl);
  } else if (colorProps.includes(decl.prop)) {
    if (decl.value !== 'inherit' && !decl.value.includes('var')) {
      return getColorUtils(decl);
    } else return '';
  } else {
    // remove !important from values
    let val = decl.value.replace(' !important', '');
    //console.log(val);

    return prop ? prop[val] || '' : '';
  }
}

module.exports = getTailwindUtils;
