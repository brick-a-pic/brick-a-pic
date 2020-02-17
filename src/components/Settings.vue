<template>
  <v-card max-width="20em">
    <v-card-title>Options</v-card-title>
    <v-card-text>
      <OpenImage @change="onImageOpen"/>
    </v-card-text>
  </v-card>
</template>

<script>
import OpenImage from './OpenImage.vue';

export default {
  name: 'Settings',
  components: {
    OpenImage,
  },

  methods: {
    onImageOpen(imageUrl) {
      console.log(imageUrl);
      // TODO
    },
  },
};
</script>

<style>

</style>
