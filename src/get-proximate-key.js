'use strict';

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

module.exports = getProximateKey;
