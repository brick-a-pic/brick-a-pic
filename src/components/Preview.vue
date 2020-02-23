<template>
  <div class="background-wrapper" id="background">
    <ImageProcessor @imageSampled='onImageSampled' :imageUrl='imageUrl'></ImageProcessor>
    <svg class="preview-svg" viewBox="0 0 200 100">
      <g id="preview">
      </g>
    </svg>
  </div>
</template>

<script>
import ImageProcessor from './ImageProcessor.vue';
import panzoom from '../../node_modules/panzoom';

function drawToSvg(imageData, svg, x, y) {
  /* Takes an ImageData object and an SVG element, and draws the
     ImageData to the SVG element as a bunch of rects. */

  // First we split up ImageData.data (a flat uint_8 array) to separate arrays
  // of RGB color values
  const red = [];
  const green = [];
  const blue = [];
  for (let pixel = 0; pixel < imageData.data.length; pixel += 4) {
    red.push(imageData.data[pixel]);
    green.push(imageData.data[pixel + 1]);
    blue.push(imageData.data[pixel + 2]);
  }

  // how big each 'pixel' will be, in SVG-units
  const pixelHeight = 1;
  const pixelWidth = 1;
  const svgUri = 'http://www.w3.org/2000/svg'; // needed to create SVG elements
  let tempSquare;
  let colorAttribute;
  let pixelPosition;

  // then iterate through every pixelwise position in the image data we have
  for (let yPosition = 0; yPosition < imageData.height; yPosition += 1) {
    for (let xPosition = 0; xPosition < imageData.width; xPosition += 1) {
      // get the position of the pixel in the flattened array
      pixelPosition = (yPosition * imageData.width) + xPosition;

      // each square in the transformed image will be an independent SVG rect, so create the element
      tempSquare = document.createElementNS(svgUri, 'rect');
      // use the pixel data to figure out what color it should be
      colorAttribute = `fill: rgb(${red[pixelPosition]},${green[pixelPosition]},${blue[pixelPosition]});`;
      // then set attributes like size/position/color
      tempSquare.setAttributeNS(null, 'style', colorAttribute);
      tempSquare.setAttributeNS(null, 'height', pixelHeight);
      tempSquare.setAttributeNS(null, 'width', pixelWidth);
      tempSquare.setAttributeNS(null, 'x', String(x + xPosition * pixelWidth));
      tempSquare.setAttributeNS(null, 'y', String(y + yPosition * pixelHeight));
      // finally, attach it to the svg element in the DOM
      svg.appendChild(tempSquare);
    }
  }
}

export default {
  name: 'Preview',
  props: ['imageUrl', 'imageData'],
  components: {
    ImageProcessor,
  },
  methods: {
    onImageSampled(imageData) {
      const svgElement = document.querySelector('#preview');
      drawToSvg(imageData, svgElement, 80, 40);

      const draggableElement = document.querySelector('#preview');
      panzoom(draggableElement);
    },
  },
};
</script>

<style>


.background-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #eee
}

.preview-svg {
  width: 100%;
  height: 100%;
}
</style>
