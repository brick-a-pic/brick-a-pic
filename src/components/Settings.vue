<template>
  <v-navigation-drawer
    :value="showDrawer"
    app
    clipped
  >
    <v-btn color="primary">Open image</v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Settings',
  props: {
    showDrawer: Boolean,
  },
};
</script>

<style>

</style>
