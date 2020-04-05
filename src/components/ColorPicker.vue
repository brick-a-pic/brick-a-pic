<template>
  <div>
    <div class="subtitle-1">Select Lego brick colors</div>
    <v-container>
      <input
        type="checkbox"
        id="checkbox"
        v-model="checked"
        @change="changeColorOption()"
      >
      <label for="checkbox"> Standard Color</label>
    </v-container>
    <div>
      <v-container>
        <v-btn-toggle
          multiple
          mandatory
          :value="value"
          @change="inputChange($event)"
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
import { STD_LEGO_COLORS, LEGO_COLORS } from '@/colors';

const colorPaletteStd = [];

for (let i = 0; i < STD_LEGO_COLORS.length; i += 1) {
  const rgb = `rgb( ${STD_LEGO_COLORS[i][0].toString()} , ${STD_LEGO_COLORS[i][1].toString()} , ${STD_LEGO_COLORS[i][2].toString()} )`;
  colorPaletteStd.push(rgb);
}

const colorPaletteComp = [];

for (let i = 0; i < LEGO_COLORS.length; i += 1) {
  const rgb = `rgb( ${LEGO_COLORS[i][0].toString()} , ${LEGO_COLORS[i][1].toString()} , ${LEGO_COLORS[i][2].toString()} )`;
  colorPaletteComp.push(rgb);
}

export default {
  name: 'ColorPicker',
  props: {
    value: Array,
  },

  data() {
    return {
      checked: true,
    };
  },

  methods: {
    inputChange(event) {
      this.$emit('input', event);
      this.$emit('checked', this.checked);
    },
    changeColorOption() {
      this.$emit('checked', this.checked);
    },
    switchColor() {
      console.log(this.checked);
      // convert value from std to complete
      if (!this.checked) {
        const color = [];
        for (let i = 0; i < colorPaletteComp.length; i += 1) {
          for (let j = 0; j < this.value.length; j += 1) {
            if (colorPaletteComp[i] === colorPaletteStd[this.value[j]]) {
              color.push(i);
            }
          }
        }
        this.value = color;
      }
    },
    getColorOptions() {
      return this.checked ? colorPaletteStd : colorPaletteComp;
    },
  },
};
</script>

<style>

</style>
