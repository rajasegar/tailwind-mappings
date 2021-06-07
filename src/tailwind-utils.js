'use strict';

const TAILWIND_CLASSES = require('./constants');
const getSpacingUtils = require('./spacing-utils');

const { getBorderUtils, getBorderColorUtils } = require('./border-utils');

const getBorderRadiusUtils = require('./border-radius-utils');
const getColorUtils = require('./color-utils');

function getTailwindUtils(decl) {
  const prop = TAILWIND_CLASSES[decl.prop];
  // remove !important from values
  const val = decl.value.replace(' !important', '');
  let output = '';
  switch (decl.prop) {
    case 'margin':
    case 'margin-left':
    case 'margin-right':
    case 'margin-top':
    case 'margin-bottom':
    case 'padding':
    case 'padding-left':
    case 'padding-right':
    case 'padding-top':
    case 'padding-bottom':
      output = getSpacingUtils(decl, decl.prop);
      break;

    case 'border':
      output = getBorderUtils(decl);
      break;

    case 'color':
    case 'background-color':
      if (decl.value !== 'inherit' && !decl.value.includes('var')) {
        output = getColorUtils(decl);
      }
      break;

    case 'border-radius':
      output = getBorderRadiusUtils(decl);
      break;

    case 'border-color':
      output = getBorderColorUtils(decl);
      break;

    default:
      if (prop) {
        output = prop[val] || '';
      } else {
        console.error('Unknown prop: ', decl.prop);
      }
  }

  return output;
}

module.exports = getTailwindUtils;
