<template>
  <div class="background-wrapper" id="background">
    <ImageProcessor @imageSampled='onImageSampled' :imageUrl='imageUrl'></ImageProcessor>
    <div id="draggable">
      <svg
        v-if="imageData"
        class="preview-svg"
        :viewBox="`0 0 ${imageData.width} ${imageData.height}`"
      >
        <g>
          <g v-for="y in imageData.height" :key="y">
            <rect
              v-for="x in imageData.width"
              :key="x"
              width="1"
              height="1"
              :x="x-1"
              :y="y-1"
              :fill="getColor(x-1, y-1)"
            />
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import panzoom from 'panzoom';
import ImageProcessor from './ImageProcessor.vue';


export default {
  name: 'Preview',
  props: ['imageUrl'],
  components: {
    ImageProcessor,
  },

  data: () => ({
    imageData: null,
  }),

  methods: {
    onImageSampled(imageData) {
      this.imageData = imageData;
      const draggableElement = document.querySelector('#draggable');
      panzoom(draggableElement);
    },
    getColor(x, y) {
      const index = 4 * (y * this.imageData.width + x);
      const [r, g, b, a] = this.imageData.data.slice(index, index + 4);
      return `rgba(${r}, ${g}, ${b}, ${a / 256})`;
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

#draggable {
  touch-action: none;
}

</style>
