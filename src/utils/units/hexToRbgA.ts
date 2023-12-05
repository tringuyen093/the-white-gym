import hexToRgb from './hexToRgb';

const hexToRgbA = (hex: string, alpha: number): string => {
  const { r, g, b } = hexToRgb(hex);

  return `rgba(${r},${g},${b},${alpha})`;
};

export default hexToRgbA;
