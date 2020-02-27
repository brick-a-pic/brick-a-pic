<template>
  <div class="offscreen">
    <canvas id="processing-canvas"></canvas>
  </div>
</template>

<script>
import { colorMatch } from '../colors';

export default {
  name: 'ImageProcessor',
  props: ['imageUrl'],
  watch: {
    imageUrl(url) {
      // console.log(url);
      let pixelData = [];
      const ctx = document.getElementById('processing-canvas').getContext('2d');
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const img = new Image();
      const self = this;

      img.onload = function sampleImage() {
        const width = 32;
        const height = 32;
        ctx.drawImage(img, 0, 0, width, height);
        pixelData = ctx.getImageData(0, 0, width, height);
        // TODO: adjust each pixel to the closest LEGO color
        const newPixelData = colorMatch(pixelData);
        // console.log(newPixelData);
        self.$emit('imageSampled', newPixelData);
        // since we've already loaded the image, no need to keep the
        // object URL anymore
        URL.revokeObjectURL(url);
      };
      img.src = url;
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
