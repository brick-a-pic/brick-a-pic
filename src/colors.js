export const STD_LEGO_COLORS = [
  /* Common colors */
  [163, 162, 164], // medium stone grey
  [242, 243, 242], // white
  [99, 95, 97], // dark stone grey
  [27, 42, 52], // black
  [215, 197, 153], // brick yellow
  [105, 64, 39], // reddish brown
  [196, 40, 27], // bright red
  [245, 205, 47], // bright yellow
  [13, 105, 171], // bright blue
  [218, 133, 64], // bright orange
  [40, 127, 70], // dark green
  [123, 46, 47], // dark red
  [164, 189, 70], // bright yellowish green
  [232, 171, 45], // flame yellowish orange
  [196, 112, 160], // medium lavender
  [149, 138, 115], // sand yellow
  [113, 197, 232], // sand blue

  /* Uncommon Colors */
  [32, 58, 86], // earth blue
  [110, 153, 201], // medium blue
  [228, 173, 200], // light purple
  [52, 43, 117], // medium lilac
  [146, 57, 120], // bright reddish violet
  [205, 98, 152], // bright purple
  [120, 144, 129], // sand green
  [83, 95, 92], // aqua
  [160, 95, 52], // dark orange
  [39, 70, 44], // earth green
];

/**
 * Returns the closest color in `colorOptions` to the given `rgb` color
 * @param {number[]} rgb The `[r, g, b]` values of the color to be matched
 * @param {number[]} colorOptions The selected color indexes, corresponding to `STD_LEGO_COLORS`
 * @returns {number[]}
 */
export const closestMatch = (rgb, colorOptions) => {
  const COLORS = colorOptions.map(colorIndex => STD_LEGO_COLORS[colorIndex]);

  let minDistance = Infinity;
  let index = 0;
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];

  // find the closest match based on Euclidean distance between the given rgb value
  // and every color in STD_LEGO_COLORS
  for (let i = 0; i < COLORS.length; i += 1) {
    const r1 = COLORS[i][0];
    const g1 = COLORS[i][1];
    const b1 = COLORS[i][2];

    const d = ((r1 - r) ** 2) + ((g1 - g) ** 2) + ((b1 - b) ** 2);

    if (d < minDistance) {
      minDistance = d;
      index = i;
    }
  }
  return COLORS[index];
};

/**
 * Replaces each color in `data` with the closest color specified in `colorOptions`
 * @param {any[][]} data The `LegoData` pixel data
 * @param {number[]} colorOptions The selected color indexes, corresponding to `STD_LEGO_COLORS`
 * @returns {any[][]}
 */
export const colorMatch = (data, colorOptions) => data.map(row => (
  row.map(pixel => ({
    ...pixel,
    color: closestMatch(pixel.color, colorOptions),
  }))
));
