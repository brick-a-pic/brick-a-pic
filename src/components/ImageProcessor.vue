<template>
  <div class="offscreen">
    <canvas id="processing-canvas"></canvas>
  </div>
</template>

<script>

export default {
  name: 'ImageProcessor',
  props: ['imageUrl', 'imageDelete'],
  data() {
    return {
      img: null,
      width: null,
      height: null,
    };
  },


  watch: {
    imageUrl(url) { 
      console.log(this.width)
      var canvas = document.getElementById('processing-canvas');
      let pixelData = [];
      const self = this;
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.fillStyle = "#FF9900";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      self.img = new Image();
      self.img.onload = function sampleImage() {
        self.width = self.SetWidth();
        self.height = self.SetHeight();
        ctx.drawImage(self.img, 0, 0, self.width, self.height);                                                    
        // self.canvas.width = self.canvas.width
        pixelData = ctx.getImageData(0, 0, self.width, self.height);

        // TODO: adjust each pixel to the closest LEGO color
        self.$emit('imageSampled', pixelData);
        // since we've already loaded the image, no need to keep the
        // object URL anymore
        URL.revokeObjectURL(url);
      };
      self.img.src = url;
    },
    imageDelete() {
      // const context = this.canvas.getContext('2d');
      // context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // this.clearCanvas(this.canvas)
      // print(this.img.src)
    },
  },
  methods: {
    SetWidth() {
      return document.getElementById('widthSetting').value;
    },
    SetHeight() {
      return document.getElementById('heightSetting').value;
    },

    clearCanvas(canvas) {
      const ctx = canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'copy';
      ctx.strokeStyle = 'transparent';
      ctx.beginPath();
      ctx.lineTo(0, 0);
      ctx.stroke();
      ctx.restore();
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
