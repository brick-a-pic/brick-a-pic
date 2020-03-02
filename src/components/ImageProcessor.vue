<template>
  <div class="offscreen">
    <canvas id="processing-canvas"></canvas>
  </div>
</template>

<script>
import { colorMatch } from '@/colors';
import LegoData from '@/LegoData';

export default {
  name: 'ImageProcessor',
  props: ['imageUrl', 'imageWidth', 'imageHeight'],
  methods: {
    sampleImage() {
      // single method to reload image, so we can reload the image
      // every time the URL *or* the dimensions change.
      if (this.imageUrl === '') return; // only attempt to process image if a URL is set

      const ctx = document.getElementById('processing-canvas').getContext('2d');
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const img = new Image();
      const self = this;

      img.onload = function sampleImage() {
        const width = self.imageWidth;
        const height = self.imageHeight;
        ctx.drawImage(img, 0, 0, width, height);
        const pixelData = ctx.getImageData(0, 0, width, height);

        const legoData = new LegoData(pixelData);
        // Adjust each pixel to the closest LEGO color
        legoData.data = colorMatch(legoData.data);

        self.$emit('imageSampled', legoData);
      };
      img.src = this.imageUrl;
    },
  },
  watch: {
    imageUrl() {
      this.sampleImage();
    },
    imageWidth() {
      this.sampleImage();
    },
    imageHeight() {
      this.sampleImage();
    },
  },
};


</script>

<style>
.offscreen {
  overflow: hidden;
  width: 0;
  height: 0;
}

#processing-canvas {
  height: 100px;
  width: 100px;
}

</style>
