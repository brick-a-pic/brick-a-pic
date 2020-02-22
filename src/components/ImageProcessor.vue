<template>
  <div class="offscreen">
    <canvas id="processing-canvas"></canvas>
  </div>
</template>

<script>

function getImageData(imageUrl, width, height, canvasId) {
  let pixelData = [];
  const ctx = document.getElementById(canvasId).getContext('2d');
  ctx.drawImage(imageUrl, 0, 0, width, height);
  pixelData = ctx.getImageData(0, 0, width, height);
  // TODO: adjust each pixel to the closest LEGO color
  return pixelData;
}

export default {
  name: 'ImageProcessor',
  props: ['imageUrl'],
  watch: {
    imageUrl(url) {
      const pixelData = getImageData(url, 32, 32, 'processing-canvas');
      this.$emit('imageSampled', pixelData);
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
