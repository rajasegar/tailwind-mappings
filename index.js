'use strict';

const TAILWIND_CLASSES = require('./src/constants');
const {
  getSpacingUtils,
  getBorderRadiusUtils,
} = require('./src/spacing-utils');

const getBorderUtils = require('./src/border-utils');
const getColorUtils = require('./src/color-utils');

module.exports = {
  TAILWIND_CLASSES,
  getSpacingUtils,
  getBorderRadiusUtils,
  getBorderUtils,
  getColorUtils,
};
