'use strict';

const TAILWIND_CLASSES = require('./constants');

function removeUnits(value) {
  return value.replace('rem', '').replace('em', '').replace('px', '');
}

function convertPxtoRem(value) {
  const a = value.replace('px', '');
  const b = a / 16;
  return b > 0 ? `${b}rem` : '0';
}

// Get the nearest matching Tailwind value
function getProximateKey(valueHash, value) {
  const values = Object.keys(valueHash).map((v) => removeUnits(v));

  const _value = value.includes('px')
    ? removeUnits(convertPxtoRem(value))
    : removeUnits(value);

  let distance = Math.abs(values[0] - _value);
  let idx = 0;
  for (let c = 1; c < values.length; c++) {
    const cdistance = Math.abs(values[c] - _value);
    if (cdistance < distance) {
      idx = c;
      distance = cdistance;
    }
  }
  return values[idx] > 0 ? `${values[idx]}rem` : '0';
}

const spacingProps = {
  margin: {
    top: 'margin-top',
    right: 'margin-right',
    bottom: 'margin-bottom',
    left: 'margin-left',
  },
  padding: {
    top: 'padding-top',
    right: 'padding-right',
    bottom: 'padding-bottom',
    left: 'padding-left',
  },
};

function getSpacingUtils(decl) {
  const propName = decl.prop;
  const values = decl.value.split(' ');
  let output = '';

  // padding: 0;
  // padding-left / padding-right / padding-top / padding-bottom
  if (values.length === 1) {
    const hash = TAILWIND_CLASSES[decl.prop];
    const proximateKey = getProximateKey(hash, values[0]);
    output = hash[values[0]] || hash[proximateKey] || '';
  }
  // padding: topBottom leftRight;
  if (values.length === 2) {
    const [topBottom, leftRight] = values;

    const leftProp = spacingProps[propName].left;
    const topProp = spacingProps[propName].top;

    const plHash = TAILWIND_CLASSES[leftProp];
    const ptHash = TAILWIND_CLASSES[topProp];

    const leftRightProximateKey = getProximateKey(plHash, leftRight);
    const topBottomProximateKey = getProximateKey(ptHash, topBottom);

    const px = plHash[leftRight] || plHash[leftRightProximateKey] || '';
    const py = ptHash[topBottom] || ptHash[topBottomProximateKey] || '';
    output = px.replace('l', 'x') + ' ' + py.replace('t', 'y');
  }

  // padding: top leftRight bottom;
  if (values.length === 3) {
    const [top, leftRight, bottom] = values;

    const leftProp = spacingProps[propName].left;
    const topProp = spacingProps[propName].top;
    const bottomProp = spacingProps[propName].bottom;

    const ptHash = TAILWIND_CLASSES[topProp];
    const plHash = TAILWIND_CLASSES[leftProp];
    const pbHash = TAILWIND_CLASSES[bottomProp];

    const topProximatekey = getProximateKey(ptHash, top);
    const leftProximatekey = getProximateKey(plHash, leftRight);
    const bottomProximatekey = getProximateKey(ptHash, bottom);

    const pt = ptHash[top] || ptHash[topProximatekey] || '';
    const px = plHash[leftRight] || plHash[leftProximatekey] || '';
    const pb = pbHash[bottom] || pbHash[bottomProximatekey] || '';
    output = pt + ' ' + px.replace('l', 'x') + ' ' + pb;
  }

  // padding: top right bottom left;
  if (values.length === 4) {
    const [top, right, bottom, left] = values;

    const leftProp = spacingProps[propName].left;
    const rightProp = spacingProps[propName].right;
    const topProp = spacingProps[propName].top;
    const bottomProp = spacingProps[propName].bottom;

    const ptHash = TAILWIND_CLASSES[topProp];
    const plHash = TAILWIND_CLASSES[leftProp];
    const prHash = TAILWIND_CLASSES[rightProp];
    const pbHash = TAILWIND_CLASSES[bottomProp];

    const topProximatekey = getProximateKey(ptHash, top);
    const leftProximatekey = getProximateKey(plHash, left);
    const rightProximatekey = getProximateKey(prHash, right);
    const bottomProximatekey = getProximateKey(ptHash, bottom);

    const pt = ptHash[top] || ptHash[topProximatekey] || '';
    const pl = plHash[left] || plHash[leftProximatekey] || '';
    const pr = prHash[right] || prHash[rightProximatekey] || '';
    const pb = pbHash[bottom] || pbHash[bottomProximatekey] || '';

    output = pt + ' ' + pr + ' ' + pb + ' ' + pl;
  }

  return output;
}

function getBorderRadiusUtils(decl) {
  const hash = TAILWIND_CLASSES['border-radius'];
  const proximateKey = getProximateKey(hash, decl.value);
  return hash[decl.value] || hash[proximateKey];
}

module.exports = {
  getSpacingUtils,
  getBorderRadiusUtils,
};
