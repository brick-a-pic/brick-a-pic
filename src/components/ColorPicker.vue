<template>
  <div>
      <div class="subtitle-1">Pick which LEGO colors you would like to use</div>
      <div id="colorDiv">
        <v-container>
          <v-btn-toggle id="btn-group"
            v-model="toggle_exclusive"
            multiple
            @change="changeColor"
          >
            <v-row>
              <v-col
                v-for="(col, colorIndex) in colorOptions"
                :key="colorIndex"
                cols="2"
              >
                <v-btn :color=col :id=colorIndex>
                </v-btn>
              </v-col>
            </v-row>
            </v-btn-toggle>
            <v-col
              cols="12"
              class="text-center"
            >
          </v-col>
        </v-container>
      </div>
    </div>
</template>

<script>
import { LEGO_COLORS } from '@/colors';

const colorPalette = [];

for (let i = 0; i < LEGO_COLORS.length; i += 1) {
  const rgb = `rgb( ${LEGO_COLORS[i][0].toString()} , ${LEGO_COLORS[i][1].toString()} , ${LEGO_COLORS[i][2].toString()} )`;
  colorPalette.push(rgb);
}

export default {
  data() {
    return {
      colorOptions: colorPalette,
      toggle_exclusive: [],
    };
  },

  methods: {
    changeColor() {
      console.log('change');
      this.$emit('colorSelected', this.toggle_exclusive);
    },
  },
};
</script>

<style>
.v-btn {
  max-width: 1;
}
</style>
