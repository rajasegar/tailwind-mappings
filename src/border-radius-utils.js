'use strict';

const TAILWIND_CLASSES = require('./constants');

const getProximateKey = require('./get-proximate-key');

function getBorderRadiusUtils(decl) {
  const hash = TAILWIND_CLASSES['border-radius'];
  const proximateKey = getProximateKey(hash, decl.value);
  return hash[decl.value] || hash[proximateKey];
}

module.exports = getBorderRadiusUtils;
