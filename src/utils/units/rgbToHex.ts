const toHex = (c: number) => {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

const rgbToHex = (r: number, g: number, b: number) => {
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export default rgbToHex;
