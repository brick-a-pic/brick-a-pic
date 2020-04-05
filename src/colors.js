// If this becomes too long, put it in its own file.
export const LEGO_COLORS = [
  [242, 243, 242],
  [161, 165, 162],
  [249, 233, 153],
  [215, 197, 153],
  [194, 218, 184],
  [232, 186, 199],
  [203, 132, 66],
  [204, 142, 104],
  [196, 40, 27],
  [196, 112, 160],
  [13, 105, 171],
  [245, 205, 47],
  [98, 71, 50],
  [27, 42, 52],
  [109, 110, 108],
  [40, 127, 70],
  [161, 196, 139],
  [243, 207, 155],
  [75, 151, 74],
  [160, 95, 52],
  [193, 202, 222],
  [180, 210, 227],
  [238, 196, 182],
  [218, 134, 121],
  [110, 153, 201],
  [199, 193, 183],
  [107, 50, 123],
  [226, 155, 63],
  [218, 133, 64],
  [0, 143, 155],
  [104, 92, 67],
  [67, 84, 147],
  [104, 116, 172],
  [199, 210, 60],
  [85, 165, 175],
  [183, 215, 213],
  [164, 189, 70],
  [217, 228, 167],
  [231, 172, 88],
  [211, 111, 76],
  [146, 57, 120],
  [234, 184, 145],
  [220, 188, 129],
  [174, 122, 89],
  [156, 163, 168],
  [116, 134, 156],
  [135, 124, 144],
  [224, 152, 100],
  [149, 138, 115],
  [32, 58, 86],
  [39, 70, 44],
  [121, 136, 161],
  [149, 142, 163],
  [147, 135, 103],
  [87, 88, 87],
  [22, 29, 50],
  [171, 173, 172],
  [120, 144, 129],
  [149, 121, 118],
  [123, 46, 47],
  [117, 108, 98],
  [215, 169, 75],
  [130, 138, 93],
  [249, 214, 46],
  [232, 171, 45],
  [105, 64, 39],
  [207, 96, 36],
  [163, 162, 164],
  [70, 103, 164],
  [35, 71, 139],
  [142, 66, 133],
  [99, 95, 97],
  [229, 228, 222],
  [176, 142, 68],
  [112, 149, 120],
  [121, 181, 181],
  [159, 195, 233],
  [108, 129, 183],
  [143, 76, 42],
  [124, 92, 69],
  [150, 112, 159],
  [107, 98, 155],
  [167, 169, 206],
  [205, 98, 152],
  [228, 173, 200],
  [220, 144, 149],
  [240, 213, 160],
  [235, 184, 127],
  [253, 234, 140],
  [125, 187, 221],
  [52, 43, 117],
  [236, 236, 236],
  [205, 84, 75],
  [193, 223, 240],
  [123, 182, 232],
  [247, 241, 141],
  [217, 133, 108],
  [132, 182, 141],
  [248, 241, 132],
  [236, 232, 222],
  [191, 183, 177],
  [228, 173, 200],
  [165, 165, 203],
  [213, 115, 61],
  [216, 221, 86],
  [207, 226, 247],
  [255, 246, 123],
  [225, 164, 194],
  [151, 105, 91],
  [180, 132, 85],
  [137, 135, 136],
];

export const STD_LEGO_COLORS = [
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
];

// export const closestMatch = (rgb, colorOptions, checked, changed) => {
export const closestMatch = (rgb, colorOptions, checked) => {
  // console.log(colorOptions);
  // console.log(changed);
  // if (changed) {
  //   if (!checked) {
  //     for (let i = 0; i < colorOptions.length; i += 1) {
  //       const color = STD_LEGO_COLORS[i];

  //     }
  //   }
  // }
  const COLORS = checked
    ? colorOptions.map(colorIndex => STD_LEGO_COLORS[colorIndex])
    : colorOptions.map(colorIndex => LEGO_COLORS[colorIndex]);

  let minDistance = Infinity;
  let index = 0;
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];

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

/*
export const colorMatch = (data, colorOptions, checked, changed) => data.map(
  row => row.map(pixel => closestMatch(pixel, colorOptions, checked, changed)),
);
*/

export const colorMatch = (data, colorOptions, checked) => data.map(
  row => row.map(pixel => closestMatch(pixel, colorOptions, checked)),
);
