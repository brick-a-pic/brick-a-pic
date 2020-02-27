// https://medium.com/@Dragonza/four-ways-to-chunk-an-array-e19c889eac4
function chunk(array, size) {
  const chunkedArr = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
}

export default class LegoData {
  /**
   * @param {ImageData} param0
   */
  constructor({ height, width, data }) {
    this.height = height;
    this.width = width;
    this.data = chunk(chunk(data, 4), width);
  }
}
