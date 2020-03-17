<template>
  <div>
      <div class="subtitle-1">Select Lego brick colors</div>
      <div id="colorDiv">
        <v-container>
          <v-btn-toggle
            multiple
            mandatory
            :value="value"
            @change="$emit('input', $event)"
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
                    {{ value.includes(colorIndex) ? 'mdi-check' : '' }}
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
  name: 'ColorPicker',
  props: {
    value: Array,
  },

  data() {
    return {
      colorOptions: colorPalette,
    };
  },

  methods: {
  },
};
</script>

<style>

</style>
