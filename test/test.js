/* globals describe it */
const assert = require('assert');

const {
  getSpacingUtils,
  getBorderRadiusUtils,
} = require('../src/spacing-utils');

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
