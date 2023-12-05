const hexToRgb = (hex: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!;
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};

export default hexToRgb;
