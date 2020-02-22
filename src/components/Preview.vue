<template>
  <div class="background-wrapper">
    <ImageProcessor @imageSampled='onImageSampled' :imageUrl='imageUrl'></ImageProcessor>
    <svg class="preview-svg" viewBox="0 0 200 100">
      <!-- <rect x="0" y="0" width="200" height="100" stroke="gray" fill="none" />
      <rect x="10" y="10" width="50" height="50" fill="black" /> -->
    </svg>
  </div>
</template>

<script>
import ImageProcessor from './ImageProcessor.vue';

export default {
  name: 'Preview',
  props: ['imageUrl', 'imageData'],
  components: {
    ImageProcessor,
  },
  methods: {
    onImageSampled(imageData) {
      const red = [];
      const green = [];
      const blue = [];
      for (let pixel = 0; pixel < imageData.data.length; pixel += 4) {
        red.push(imageData.data[pixel]);
        green.push(imageData.data[pixel + 1]);
        blue.push(imageData.data[pixel + 2]);
      }
      const pixelHeight = 1;
      const pixelWidth = 1;
      const baseX = 60;
      const baseY = 30;
      let tempSquare;
      let colorAttribute;
      let pixelPosition;
      const svgUri = 'http://www.w3.org/2000/svg';
      const svgElement = document.getElementsByClassName('preview-svg')[0];
      for (let yPosition = 0; yPosition < imageData.height; yPosition += 1) {
        for (let xPosition = 0; xPosition < imageData.width; xPosition += 1) {
          pixelPosition = (yPosition * imageData.width) + xPosition;
          tempSquare = document.createElementNS(svgUri, 'rect');
          colorAttribute = `fill: rgb(${red[pixelPosition]},${green[pixelPosition]},${blue[pixelPosition]});`;
          tempSquare.setAttributeNS(null, 'style', colorAttribute);
          tempSquare.setAttributeNS(null, 'height', pixelHeight);
          tempSquare.setAttributeNS(null, 'width', pixelWidth);
          tempSquare.setAttributeNS(null, 'x', String(baseX + xPosition * pixelWidth));
          tempSquare.setAttributeNS(null, 'y', String(baseY + yPosition * pixelHeight));
          svgElement.appendChild(tempSquare);
        }
      }
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
