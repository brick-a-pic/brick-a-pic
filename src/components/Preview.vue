<template>
  <div class="background-wrapper">
    <ImageProcessor @imageSampled='onImageSampled' :imageUrl='imageUrl'></ImageProcessor>
    <svg class="preview-svg" viewBox="0 0 200 100">
      <rect x="0" y="0" width="200" height="100" stroke="gray" fill="none" />
      <rect x="10" y="10" width="50" height="50" fill="black" />
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
      this.imageData = imageData;
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
