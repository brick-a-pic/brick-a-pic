<template>
  <div class="offscreen">
    <canvas id="processing-canvas"></canvas>
  </div>
</template>

<script>

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

      // LEGO Color Matching

      const LEGOCOLORS = [
        [242, 243, 242], // white
        [227, 0, 11], // red
        [215, 197, 153], // brick yellow
        [75, 151, 74], // bright green
        [40, 127, 70], // dark green
        [13, 105, 171], // bright blue
      ];

      const closestMatch = function (rgb) {
        let minDistance = 195075;
        let index = 0;
        const r = rgb[0];
        const g = rgb[1];
        const b = rgb[2];
        for (let i = 0; i < LEGOCOLORS.length; i += 1) {
          const r1 = LEGOCOLORS[i][0];
          const g1 = LEGOCOLORS[i][1];
          const b1 = LEGOCOLORS[i][2];
          const d = ((r1 - r) ** 2) + ((g1 - g) ** 2) + ((b1 - b) ** 2);
          console.log(d);
          if (d < minDistance) {
            minDistance = d;
            index = i;
          }
        }
        return LEGOCOLORS[index];
      };

      const colorMatch = function (data) {
        // let newData = data;
        console.log(data);
        const legoColor = data;
        for (let i = 0; i < legoColor.data.length; i += 4) {
          const r = legoColor.data[i];
          const g = legoColor.data[i + 1];
          const b = legoColor.data[i + 2];
          const match = closestMatch([r, g, b]);
          const r1 = match[0];
          const g1 = match[1];
          const b1 = match[2];
          legoColor.data[i] = r1;
          legoColor.data[i + 1] = g1;
          legoColor.data[i + 2] = b1;
        }
        console.log(legoColor);
        return legoColor;
      };

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
