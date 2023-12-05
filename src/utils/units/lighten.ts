// https://github.com/sass/node-sass/blob/4115e9de35a26a6c27604e22c9c1981bf19b0f5f/src/libsass/src/functions.cpp#L633-L653
import hexToRgb from './hexToRgb';
import rgbToHsl from './rgbToHsl';
import hslToRgb from './hslToRgb';
import rgbToHex from './rgbToHex';

const lighten = function (hex: string, percent: number) {
  const { r, g, b } = hexToRgb(hex);
  const { h, s, l } = rgbToHsl(r, g, b);

  const { r: R, g: G, b: B } = hslToRgb(h, s, l + percent / 100);

  return rgbToHex(R, G, B);
};

export default lighten;
