<template>
  <div class="background-wrapper" id="background">
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
      </svg>
    </div>
  </div>
</template>

<script>
import panzoom from 'panzoom';

export default {
  name: 'Preview',
  props: ['imageData'],
  components: {},

  methods: {
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