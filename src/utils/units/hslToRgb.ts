const hue2rgb = (m1: number, m2: number, h: number) => {
  while (h < 0) {
    h += 1;
  }
  while (h > 1) {
    h -= 1;
  }
  if (h * 6 < 1) {
    return m1 + (m2 - m1) * h * 6;
  }
  if (h * 2 < 1) {
    return m2;
  }
  if (h * 3 < 2) {
    return m1 + (m2 - m1) * (2 / 3 - h) * 6;
  }
  return m1;
};

const hslToRgb = (h: number, s: number, l: number) => {
  if (l < 0) {
    l = 0;
  }
  if (s < 0) {
    s = 0;
  }
  if (l > 1) {
    l = 1;
  }
  if (s > 1) {
    s = 1;
  }
  while (h < 0) {
    h += 1;
  }
  while (h > 1) {
    h -= 1;
  }

  if (s === 0) {
    s = 1e-10;
  }

  let m2;

  if (l <= 0.5) {
    m2 = l * (s + 1);
  } else {
    m2 = l + s - l * s;
  }
  const m1 = l * 2 - m2;

  return {
    r: Math.round(hue2rgb(m1, m2, h + 1 / 3) * 255),
    g: Math.round(hue2rgb(m1, m2, h) * 255),
    b: Math.round(hue2rgb(m1, m2, h - 1 / 3) * 255),
  };
};

export default hslToRgb;
