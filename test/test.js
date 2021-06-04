/* globals describe it */
const assert = require('assert');

const {
  getSpacingUtils,
  getBorderRadiusUtils,
} = require('../src/spacing-utils');

const getBorderUtils = require('../src/border-utils');
const getColorUtils = require('../src/color-utils');

describe('Spacing Utils - Padding', () => {
  it('should return exact tailwind class', () => {
    const decl = { prop: 'padding', value: '0' };
    const output = getSpacingUtils(decl, 'padding');
    assert.equal(output, 'p-0');
  });

  it('should return exact tailwind class for px', () => {
    const decl = { prop: 'padding', value: '0px' };
    const output = getSpacingUtils(decl, 'padding');
    assert.equal(output, 'p-0');
  });

  it('should return nearest tailwind class', () => {
    const decl = { prop: 'padding', value: '0.275rem' };
    const output = getSpacingUtils(decl, 'padding');
    assert.equal(output, 'p-1');
  });

  it('should return exact tailwind class for em', () => {
    const decl = { prop: 'padding', value: '0.275em' };
    const output = getSpacingUtils(decl, 'padding');
    assert.equal(output, 'p-1');
  });

  it('should return nearest tailwind class for pixel values', () => {
    const decl = { prop: 'padding', value: '20px' };
    const output = getSpacingUtils(decl, 'padding');
    assert.equal(output, 'p-5');
  });

  it('should return nearest tailwind class for pixel values for padding-left', () => {
    const decl = { prop: 'padding-left', value: '20px' };
    const output = getSpacingUtils(decl, 'padding-left');
    assert.equal(output, 'pl-5');
  });

  it('should return nearest tailwind class for pixel values for padding-right', () => {
    const decl = { prop: 'padding-right', value: '33px' };
    const output = getSpacingUtils(decl, 'padding-right');
    assert.equal(output, 'pr-8');
  });

  it('should return nearest tailwind class for pixel values for padding-top', () => {
    const decl = { prop: 'padding-top', value: '33px' };
    const output = getSpacingUtils(decl, 'padding-top');
    assert.equal(output, 'pt-8');
  });

  it('should return nearest tailwind class for pixel values for padding-bottom', () => {
    const decl = { prop: 'padding-bottom', value: '33px' };
    const output = getSpacingUtils(decl, 'padding-bottom');
    assert.equal(output, 'pb-8');
  });

  it('should return exact tailwind class shorthand version with top-bottom left-right values', () => {
    const decl = { prop: 'padding', value: '2rem 2rem' };
    const output = getSpacingUtils(decl, 'padding');
    assert.equal(output, 'px-8 py-8');
  });

  it('should return nearest tailwind class shorthand version with top-bottom left-right pixel values', () => {
    const decl = { prop: 'padding', value: '24px 12px' };
    const output = getSpacingUtils(decl, 'padding');
    assert.equal(output, 'px-3 py-6');
  });

  it('should return exact tailwind class shorthand version with top left-right bottom values', () => {
    const decl = { prop: 'padding', value: '2rem 3rem 2rem' };
    const output = getSpacingUtils(decl, 'padding');
    assert.equal(output, 'pt-8 px-12 pb-8');
  });

  it('should return nearest tailwind class shorthand version with top left-right bottom pixel values', () => {
    const decl = { prop: 'padding', value: '12px 24px 36px' };
    const output = getSpacingUtils(decl, 'padding');
    assert.equal(output, 'pt-3 px-6 pb-9');
  });

  it('should return exact tailwind class shorthand version with top right bottom left values', () => {
    const decl = { prop: 'padding', value: '1rem 2rem 3rem 4rem' };
    const output = getSpacingUtils(decl, 'padding');
    assert.equal(output, 'pt-4 pr-8 pb-12 pl-16');
  });

  it('should return nearest tailwind class shorthand version with top right bottom left pixel values', () => {
    const decl = { prop: 'padding', value: '6px 12px 24px 36px' };
    const output = getSpacingUtils(decl, 'padding');
    assert.equal(output, 'pt-1.5 pr-3 pb-6 pl-9');
  });
});

describe('Border Radius utils', () => {
  it('should return tailwind class for 0px', () => {
    const decl = { prop: 'border-radius', value: '0px' };
    const output = getBorderRadiusUtils(decl);
    assert.equal(output, 'rounded-none');
  });

  it('should return tailwind class for em values', () => {
    const decl = { prop: 'border-radius', value: '.25em' };
    const output = getBorderRadiusUtils(decl);
    assert.equal(output, 'rounded');
  });

  it('should return tailwind class for px values', () => {
    const decl = { prop: 'border-radius', value: '16px' };
    const output = getBorderRadiusUtils(decl);
    assert.equal(output, 'rounded-2xl');
  });
});

describe('Border utils', () => {
  it('should return tailwind class 1px solid white border', () => {
    const decl = { prop: 'border', value: '1px solid #fff' };
    const output = getBorderUtils(decl);
    assert.equal(output, 'border border-solid border-white');
  });

  it('should return tailwind class 1px solid black border', () => {
    const decl = { prop: 'border', value: '1px solid #000' };
    const output = getBorderUtils(decl);
    assert.equal(output, 'border border-solid border-black');
  });

  it('should return tailwind class 1px dotted black border', () => {
    const decl = { prop: 'border', value: '1px dotted #000' };
    const output = getBorderUtils(decl);
    assert.equal(output, 'border border-dotted border-black');
  });

  it('should return black border for unknown border color', () => {
    const decl = { prop: 'border', value: '1px solid #123456' };
    const output = getBorderUtils(decl);
    assert.equal(output, 'border border-solid border-black');
  });

  it('should return default border for unknown border width', () => {
    const decl = { prop: 'border', value: '11px solid #000' };
    const output = getBorderUtils(decl);
    assert.equal(output, 'border border-solid border-black');
  });
});

describe('Color utils', () => {
  it('should return nearest tailwind color class', () => {
    const decl = { prop: 'color', value: 'red' };
    const output = getColorUtils(decl, 'text');
    assert.equal(output, 'text-red-600');
  });

  it('should return nearest tailwind color class bs blue', () => {
    const decl = { prop: 'color', value: '#0d6efd' };
    const output = getColorUtils(decl, 'bg');
    assert.equal(output, 'bg-blue-600');
  });

  it('should return nearest tailwind color for rgb values', () => {
    const decl = { prop: 'color', value: 'rgb(255,0,0)' };
    const output = getColorUtils(decl, 'bg');
    assert.equal(output, 'bg-red-600');
  });

  it('should return nearest tailwind color for light color', () => {
    const decl = { prop: 'color', value: '#e7f1ff' };
    const output = getColorUtils(decl, 'bg');
    assert.equal(output, 'bg-indigo-50');
  });
});
