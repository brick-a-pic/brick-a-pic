<template>
  <div class="background-wrapper">
    <svg class="preview-svg" viewBox="0 0 200 100">
      <rect x="0" y="0" width="200" height="100" stroke="gray" fill="none" />
      <rect x="10" y="10" width="50" height="50" fill="black" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  props: ['imageData'],
  watch: {
    imageData(newData, oldData) {
      console.info('old: ', oldData);
      console.info('new: ', newData);
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
