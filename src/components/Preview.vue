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
          <g v-for="(row, y) in imageData.data" :key="y">
            <rect
              v-for="(color, x) in row"
              :key="x"
              width="1"
              height="1"
              :x="x"
              :y="y"
              :fill="getColor(color)"
            />
          </g>
        </g>
        <defs>
            <pattern id="smallGrid" width="1" height="1" patternUnits="userSpaceOnUse">
              <path d="M 1 0 L 0 0 0 1" fill="none" stroke="gray" stroke-width="0.05"/>
            </pattern>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="url(#smallGrid)"/>
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.1"/>
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
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
    },
    getColor([r, g, b, a]) {
      return `rgba(${r}, ${g}, ${b}, ${(a || 256) / 256})`;
    },
  },

  mounted() {
    const draggableElement = document.querySelector('#draggable');
    panzoom(draggableElement);
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
