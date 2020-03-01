<template>
  <v-card max-width="20em">
    <v-card-title>Options</v-card-title>
    <v-card-text>
      <OpenImage @change="onImageOpen"/>
      <ColorPicker @change="OnColorPick"/>
    </v-card-text>
  </v-card>
</template>

<script>
import OpenImage from './OpenImage.vue';
import ColorPicker from './ColorPicker.vue';

export default {
  name: 'Settings',
  components: {
    OpenImage,
    ColorPicker,
  },

  methods: {
    onImageOpen(imageUrl) {
      this.$emit('imageLoaded', imageUrl);
    },
  },
};
</script>

<style>

</style>
