<template>
  <div>
      <div class="subtitle-1">Pick which LEGO colors you would like to use</div>
      <div id="colorDiv">
        <v-container>
          <v-btn-toggle
            v-model="toggle_exclusive"
            multiple
            mandatory
            @change="changeColor"
          >
            <v-row
              no-gutters
              justify="start"
            >
              <v-col
                v-for="(col, colorIndex) in colorOptions"
                :key="colorIndex"
                cols="auto"
              >
                <v-btn
                  depressed
                  fab
                  small
                  tile
                  :color=col
                >
                  <v-icon>
                    {{ toggle_exclusive.includes(colorIndex) ? 'mdi-check' : '' }}
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-btn-toggle>
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
      toggle_exclusive: [0, 1, 2, 3],
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

</style>
