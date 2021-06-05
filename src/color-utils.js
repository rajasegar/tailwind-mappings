'use strick';

const chroma = require('chroma-js');
const colors = require('tailwindcss/colors');

// https://gist.github.com/ryancat/9972419b2a78f329ce3aebb7f1a09152

/**
 * Compare color difference in RGB
 * @param {Array} rgb1 First RGB color in array
 * @param {Array} rgb2 Second RGB color in array
 */
function deltaRgb(rgb1, rgb2) {
  const [r1, g1, b1] = rgb1,
    [r2, g2, b2] = rgb2,
    drp2 = Math.pow(r1 - r2, 2),
    dgp2 = Math.pow(g1 - g2, 2),
    dbp2 = Math.pow(b1 - b2, 2),
    t = (r1 + r2) / 2;

  return Math.sqrt(2 * drp2 + 4 * dgp2 + 3 * dbp2 + (t * (drp2 - dbp2)) / 256);
}

const defaultColors = [
  'pink',
  'purple',
  'indigo',
  'blue',
  'green',
  'yellow',
  'red',
  'coolGray',
];

function getColorUtils(decl, prop) {
  if (decl.value === 'currentColor' && prop === 'text') return 'text-current';
  if (decl.value === 'currentColor' && prop === 'bg') return 'bg-current';
  if (decl.value === 'transparent' && prop === 'text')
    return 'text-transparent';
  if (decl.value === 'transparent' && prop === 'bg') return 'bg-transparent';
  const twColors = Object.keys(colors)
    .filter((c) => defaultColors.includes(c))
    .map((c) => {
      const shades = colors[c];
      const palette = Object.keys(shades).map((s) => {
        const _c = c.replace('coolG', 'g');
        return {
          bg: `bg-${_c}-${s}`,
          text: `text-${_c}-${s}`,
          hex: shades[s],
        };
      });
      return palette;
    })
    .flat();

  const sorted = twColors
    .map((c) => {
      const diff = deltaRgb(chroma(decl.value).rgb(), chroma(c.hex).rgb());
      return { ...c, diff };
    })
    .sort((a, b) => a.diff - b.diff);

  return sorted[0][prop];
}

module.exports = getColorUtils;
