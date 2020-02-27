// If this becomes too long, put it in its own file.
export const LEGO_COLORS = [
  [242, 243, 242], // white
  [227, 0, 11], // red
  [215, 197, 153], // brick yellow
  [75, 151, 74], // bright green
  [40, 127, 70], // dark green
  [13, 105, 171], // bright blue
];

export const closestMatch = (rgb) => {
  let minDistance = Infinity;
  let index = 0;
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];

  for (let i = 0; i < LEGO_COLORS.length; i += 1) {
    const r1 = LEGO_COLORS[i][0];
    const g1 = LEGO_COLORS[i][1];
    const b1 = LEGO_COLORS[i][2];
    const d = ((r1 - r) ** 2) + ((g1 - g) ** 2) + ((b1 - b) ** 2);

    if (d < minDistance) {
      minDistance = d;
      index = i;
    }
  }
  return LEGO_COLORS[index];
};

export const colorMatch = data => data.map(row => row.map(closestMatch));
