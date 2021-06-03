'use strict';

const TAILWIND_CLASSES = require('./constants');

function getBorderUtils(decl) {
  const [width, style, color] = decl.value.split(' ');

  const borderWidth = TAILWIND_CLASSES['border-width'];
  const borderStyle = TAILWIND_CLASSES['border-style'];
  const borderColor = TAILWIND_CLASSES['border-color'];

  const _width = borderWidth[width] || 'border';
  const _style = borderStyle[style] || '';
  const _color = borderColor[color] || 'border-black';
  return _width + ' ' + _style + ' ' + _color;
}

module.exports = getBorderUtils;
