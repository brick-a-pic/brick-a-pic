<template>
  <div class="background-wrapper" id="background">
    <div class="draggable" ref="panzoom">
      <svg
        shape-rendering="crispEdges"
        v-if="imageData"
        class="preview-svg"
        :viewBox="`-1 -1 ${imageData.width + 1} ${imageData.height + 1}`"
      >
        <g>
          <g v-for="(row, y) in imageData.data" :key="y">
            <rect
              class="pixel"
              v-for="block in row"
              :key="block.x"
              :width="block.width"
              height="1"
              :x="block.x"
              :y="y"
              :fill="getColor(block.color)"
            />
            <circle
              v-for="block in row"
              :key="block.x"
              :cx="block.x + 0.5"
              :cy="y + 0.5"
              :r="0.35"
              :fill="circleColor(block.color)"
              stroke="grey"
              stroke-width="0.02"
            />
            <text
              :x="-0.2"
              :y="y + 0.5"
              class="small"
              text-anchor="end"
              dominant-baseline="central"
            >
              {{y + 1}}
            </text>
          </g>

          <text
            v-for="x in imageData.width"
            :key="`row${x}`"
            :x="x - 0.5"
            :y="-0.2"
            class="small"
            text-anchor="middle"
          >
            {{x}}
          </text>
        </g>
        <defs>
            <pattern id="smallGrid" width="1" height="1" patternUnits="userSpaceOnUse">
              <path d="M 1 0 L 0 0 0 1" fill="none" stroke="black" stroke-width="0.2"/>
            </pattern>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="url(#smallGrid)"/>
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" stroke-width="0.4"/>
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
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

  data: () => ({
    panzoomInstance: null,
  }),

  methods: {
    /**
     * Converts a color represented as an array to a CSS-friendly string
     * @param {number[]} param0 The color as an `[r, g, b, a]` array (`a` is optional)
     * @returns {string} The color as a `rgba(r, g, b, a)` string
     */
    getColor([r, g, b, a]) {
      return `rgba(${r}, ${g}, ${b}, ${(a || 256) / 256})`;
    },
    circleColor([r, g, b, a]) {
      return `rgba(${r + 40}, ${g + 40}, ${b + 40}, ${(a || 256) / 256})`;
    },
  },

  mounted() {
    this.panzoomInstance = panzoom(this.$refs.panzoom, {
      bounds: true,
    });
  },
  beforeDestroy() {
    if (this.panzoomInstance) {
      this.panzoomInstance.dispose();
    }
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
  background-color: #eee;
  overflow: hidden;
}

.preview-svg {
  width: 100%;
  height: 100%;
}

.draggable {
  height: 100%;
  width: 100%;
  touch-action: none;
}

.pixel {
  stroke: black;
  stroke-width: 0.01px;
}

.small {
  font-size: 0.5px;
}
</style>
