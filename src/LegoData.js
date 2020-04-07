// https://medium.com/@Dragonza/four-ways-to-chunk-an-array-e19c889eac4
/**
 * Divide `array` into chunks of size `size`
 * @param {any[]} array The array to chunk
 * @param {number} size The size of each chunk
 * @returns {any[][]}
 */
function chunk(array, size) {
  const chunkedArr = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
}

/**
 * @class
 */
export default class LegoData {
  /**
   * @param {ImageData} param0
   */
  constructor({ height, width, data }) {
    this.height = height;
    this.width = width;
    const chunkedColors = chunk(chunk(data, 4), width);
    this.data = chunkedColors.map(row => (
      row.map((color, x) => ({
        color,
        x,
        width: 1,
      }))
    ));
  }
}
