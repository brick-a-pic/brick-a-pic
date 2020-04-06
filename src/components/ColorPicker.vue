<template>
  <div>
    <div class="subtitle-1">Select Lego brick colors</div>
    <div>
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
              v-for="(col, colorIndex) in getColorOptions()"
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
import { STD_LEGO_COLORS } from '@/colors';

const colorPaletteStd = [];

for (let i = 0; i < STD_LEGO_COLORS.length; i += 1) {
  const rgb = `rgb( ${STD_LEGO_COLORS[i][0].toString()} , ${STD_LEGO_COLORS[i][1].toString()} , ${STD_LEGO_COLORS[i][2].toString()} )`;
  colorPaletteStd.push(rgb);
}

export default {
  name: 'ColorPicker',
  props: {
    value: Array,
  },

  methods: {
    getColorOptions() {
      return colorPaletteStd;
    },
  },
};
</script>

<style>

</style>
