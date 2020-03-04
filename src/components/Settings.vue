<template>
  <v-card max-width="20em">
    <v-card-title>Options</v-card-title>
    <v-card-text>
      <OpenImage @change="onImageOpen"/>
      <ColorPicker @colorSelected="getColorSelected"/>
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
    getColorSelected(colorSelected) {
      console.log('update in settings');
      this.$emit('colorSelected', colorSelected);
    },
  },
};
</script>
<style>

</style>
