'use strict';

const TAILWIND_CLASSES = require('./constants');

const chroma = require('chroma-js');
const getColorUtils = require('./color-utils');

// Get the nearest matching Tailwind value
function getProximateKey(valueHash, value) {
  const values = Object.keys(valueHash);

  let distance = Math.abs(values[0] - value);
  let idx = 0;
  for (let c = 1; c < values.length; c++) {
    const cdistance = Math.abs(values[c] - value);
    if (cdistance < distance) {
      idx = c;
      distance = cdistance;
    }
  }
  return values[idx];
}

function getBorderUtils(decl) {
  if (decl.value === 'none') return '';
  if (decl.value === 'transparent') return '';
  const [width, style, color] = decl.value.split(' ');

  const borderWidth = TAILWIND_CLASSES['border-width'];
  const borderStyle = TAILWIND_CLASSES['border-style'];
  const borderColor = TAILWIND_CLASSES['border-color'];
  const borderOpacity = TAILWIND_CLASSES['border-opacity'];

  const _width = borderWidth[width] || 'border';
  const _style = borderStyle[style] || '';
  const _color = borderColor[color] || getColorUtils(decl);
  let result = _width + ' ' + _style + ' ' + _color;
  if (color.includes('rgba')) {
    const [, , , opacity] = chroma(color)._rgb;
    const proximateKey = getProximateKey(borderOpacity, opacity);
    const _opacity = borderOpacity[opacity] || borderOpacity[proximateKey];
    result += ' ' + _opacity;
  }
  return result;
}

module.exports = getBorderUtils;
