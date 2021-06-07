/* globals describe it */
const assert = require('assert');

const getSpacingUtils = require('../src/spacing-utils');

const { getBorderUtils } = require('../src/border-utils');
const getBorderRadiusUtils = require('../src/border-radius-utils');
const getColorUtils = require('../src/color-utils');
const getTailwindUtils = require('../src/tailwind-utils');

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

  it('should return empty value for var values', () => {
    const decl = { prop: 'padding', value: 'var(--my-padding)' };
    const output = getSpacingUtils(decl, 'padding');
    assert.equal(output, '');
  });

  it('should return empty value for calc values', () => {
    const decl = { prop: 'padding', value: 'calc(100vw - 50px)' };
    const output = getSpacingUtils(decl, 'padding');
    assert.equal(output, '');
  });
});

describe('Spacing Utils - Margin', () => {
  it('should return exact tailwind class', () => {
    const decl = { prop: 'margin', value: '0' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'm-0');
  });

  it('should return exact tailwind class for px', () => {
    const decl = { prop: 'margin', value: '0px' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'm-0');
  });

  it('should return nearest tailwind class', () => {
    const decl = { prop: 'margin', value: '0.275rem' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'm-1');
  });

  it('should return exact tailwind class for em', () => {
    const decl = { prop: 'margin', value: '0.275em' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'm-1');
  });

  it('should return nearest tailwind class for pixel values', () => {
    const decl = { prop: 'margin', value: '20px' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'm-5');
  });

  it('should return nearest tailwind class for pixel values for margin-left', () => {
    const decl = { prop: 'margin-left', value: '20px' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'ml-5');
  });

  it('should return nearest tailwind class for pixel values for margin-right', () => {
    const decl = { prop: 'margin-right', value: '33px' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'mr-8');
  });

  it('should return nearest tailwind class for pixel values for margin-top', () => {
    const decl = { prop: 'margin-top', value: '33px' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'mt-8');
  });

  it('should return nearest tailwind class for pixel values for margin-bottom', () => {
    const decl = { prop: 'margin-bottom', value: '33px' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'mb-8');
  });

  it('should return exact tailwind class shorthand version with top-bottom left-right values', () => {
    const decl = { prop: 'margin', value: '2rem 2rem' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'mx-8 my-8');
  });

  it('should return nearest tailwind class shorthand version with top-bottom left-right pixel values', () => {
    const decl = { prop: 'margin', value: '24px 12px' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'mx-3 my-6');
  });

  it('should return exact tailwind class shorthand version with top left-right bottom values', () => {
    const decl = { prop: 'margin', value: '2rem 3rem 2rem' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'mt-8 mx-12 mb-8');
  });

  it('should return nearest tailwind class shorthand version with top left-right bottom pixel values', () => {
    const decl = { prop: 'margin', value: '12px 24px 36px' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'mt-3 mx-6 mb-9');
  });

  it('should return exact tailwind class shorthand version with top right bottom left values', () => {
    const decl = { prop: 'margin', value: '1rem 2rem 3rem 4rem' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'mt-4 mr-8 mb-12 ml-16');
  });

  it('should return nearest tailwind class shorthand version with top right bottom left pixel values', () => {
    const decl = { prop: 'margin', value: '6px 12px 24px 36px' };
    const output = getSpacingUtils(decl);
    assert.equal(output, 'mt-1.5 mr-3 mb-6 ml-9');
  });

  it('should return empty value for var values', () => {
    const decl = { prop: 'margin', value: 'var(--my-padding)' };
    const output = getSpacingUtils(decl);
    assert.equal(output, '');
  });

  it('should return empty value for calc values', () => {
    const decl = { prop: 'margin', value: 'calc(100vw - 50px)' };
    const output = getSpacingUtils(decl);
    assert.equal(output, '');
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

  it('should return nearest border class for random border color', () => {
    const decl = { prop: 'border', value: '1px solid #123456' };
    const output = getBorderUtils(decl);
    assert.equal(output, 'border border-solid border-gray-800');
  });

  it('should return default border for unknown border width', () => {
    const decl = { prop: 'border', value: '11px solid #000' };
    const output = getBorderUtils(decl);
    assert.equal(output, 'border border-solid border-black');
  });

  it('should return empty string for unknown border style', () => {
    const decl = { prop: 'border', value: '11px liquid #000' };
    const output = getBorderUtils(decl);
    assert.equal(output, 'border  border-black');
  });

  it('should return nearest tailwind class for rgba', () => {
    const decl = { prop: 'border', value: '1px solid rgba(0, 0, 0, 0.125)' };
    const output = getBorderUtils(decl);
    assert.equal(
      output,
      'border border-solid border-gray-900 border-opacity-10'
    );
  });

  it('should return empty value for border none', () => {
    const decl = { prop: 'border', value: 'none' };
    const output = getBorderUtils(decl);
    assert.equal(output, '');
  });

  it('should return empty value for border transparent', () => {
    const decl = { prop: 'border', value: 'transparent' };
    const output = getBorderUtils(decl);
    assert.equal(output, '');
  });

  it('should return border-0  for border 0', () => {
    const decl = { prop: 'border', value: '0' };
    const output = getBorderUtils(decl);
    assert.equal(output, 'border-0');
  });
});

describe('Color utils', () => {
  it('should return nearest tailwind color class', () => {
    const decl = { prop: 'color', value: 'red' };
    const output = getColorUtils(decl);
    assert.equal(output, 'text-red-600');
  });

  it('should return nearest tailwind color class bs blue', () => {
    const decl = { prop: 'background-color', value: '#0d6efd' };
    const output = getColorUtils(decl);
    assert.equal(output, 'bg-blue-600');
  });

  it('should return nearest tailwind color for rgb values', () => {
    const decl = { prop: 'background-color', value: 'rgb(255, 0, 0)' };
    const output = getColorUtils(decl);
    assert.equal(output, 'bg-red-600');
  });

  it('should return nearest tailwind color for light color', () => {
    const decl = { prop: 'background-color', value: '#e7f1ff' };
    const output = getColorUtils(decl);
    assert.equal(output, 'bg-indigo-50');
  });

  it('should return text-current for color: currentColor', () => {
    const decl = { prop: 'color', value: 'currentColor' };
    const output = getColorUtils(decl);
    assert.equal(output, 'text-current');
  });

  it('should return bg-current for background-color: currentColor', () => {
    const decl = { prop: 'background-color', value: 'currentColor' };
    const output = getColorUtils(decl);
    assert.equal(output, 'bg-current');
  });

  it('should return text-transparent for color: transparent', () => {
    const decl = { prop: 'color', value: 'transparent' };
    const output = getColorUtils(decl);
    assert.equal(output, 'text-transparent');
  });

  it('should return bg-transparent for background-color: transparent', () => {
    const decl = { prop: 'background-color', value: 'transparent' };
    const output = getColorUtils(decl);
    assert.equal(output, 'bg-transparent');
  });
});

describe('Tailwind utils', () => {
  it('should return exact tailwind class', () => {
    const decl = { prop: 'padding', value: '0' };
    const output = getTailwindUtils(decl);
    assert.equal(output, 'p-0');
  });

  it('should return exact tailwind class', () => {
    const decl = { prop: 'margin', value: '0' };
    const output = getTailwindUtils(decl);
    assert.equal(output, 'm-0');
  });

  it('should return tailwind class for 0px', () => {
    const decl = { prop: 'border-radius', value: '0px' };
    const output = getTailwindUtils(decl);
    assert.equal(output, 'rounded-none');
  });

  it('should return tailwind class 1px solid white border', () => {
    const decl = { prop: 'border', value: '1px solid #fff' };
    const output = getTailwindUtils(decl);
    assert.equal(output, 'border border-solid border-white');
  });

  it('should return tailwind class 1px solid rgba(0,0,0,0.125) border', () => {
    const decl = { prop: 'border', value: '1px solid rgba(0, 0, 0, 0.125)' };
    const output = getTailwindUtils(decl);
    assert.equal(
      output,
      'border border-solid border-gray-900 border-opacity-10'
    );
  });

  it('should return nearest tailwind color class', () => {
    const decl = { prop: 'color', value: 'red' };
    const output = getTailwindUtils(decl);
    assert.equal(output, 'text-red-600');
  });

  it('should remove important value and return nearest tailwind color class', () => {
    const decl = { prop: 'color', value: 'red !important' };
    const output = getTailwindUtils(decl);
    assert.equal(output, 'text-red-600');
  });

  it('should remove !important and return tailwind class', () => {
    const decl = { prop: 'display', value: 'block !important' };
    const output = getTailwindUtils(decl);
    assert.equal(output, 'block');
  });

  it('should return empty value for unknown prop value', () => {
    const decl = { prop: 'display', value: 'led' };
    const output = getTailwindUtils(decl);
    assert.equal(output, '');
  });

  it('should return empty value for unknown props', () => {
    const decl = { prop: 'my-prop', value: 'my-value' };
    const output = getTailwindUtils(decl);
    assert.equal(output, '');
  });

  it('should return empty value for color: inherit', () => {
    const decl = { prop: 'color', value: 'inherit' };
    const output = getTailwindUtils(decl);
    assert.equal(output, '');
  });

  it('should return empty value for color: var(--my-color)', () => {
    const decl = { prop: 'color', value: 'var(--my-color)' };
    const output = getTailwindUtils(decl);
    assert.equal(output, '');
  });

  it('should return nearest value for border-color', () => {
    const decl = { prop: 'border-color', value: '#12344d' };
    const output = getTailwindUtils(decl);
    assert.equal(output, 'border-gray-800');
  });

  it('should return nearest value for border-color rgb', () => {
    const decl = { prop: 'border-color', value: 'rgb(255, 0, 0)' };
    const output = getTailwindUtils(decl);
    assert.equal(output, 'border-red-600');
  });

  it('should return nearest value for border-color rgba', () => {
    const decl = { prop: 'border-color', value: 'rgba(0, 0, 0, 0.125)' };
    const output = getTailwindUtils(decl);
    assert.equal(output, 'border-gray-900 border-opacity-10');
  });

  it('should return tailwind class for border-color currentColor', () => {
    const decl = { prop: 'border-color', value: 'currentColor' };
    const output = getTailwindUtils(decl);
    assert.equal(output, 'border-current');
  });

  it('should return tailwind class for border-color transparent', () => {
    const decl = { prop: 'border-color', value: 'transparent' };
    const output = getTailwindUtils(decl);
    assert.equal(output, 'border-transparent');
  });

  it('should return empty value for border-color inherit', () => {
    const decl = { prop: 'border-color', value: 'inherit' };
    const output = getTailwindUtils(decl);
    assert.equal(output, ' ');
  });

  it('should return empty value for border-color initial', () => {
    const decl = { prop: 'border-color', value: 'initial' };
    const output = getTailwindUtils(decl);
    assert.equal(output, ' ');
  });
});
