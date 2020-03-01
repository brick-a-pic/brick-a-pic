<template>
  <v-app>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="showDrawer = !showDrawer" />
      <v-toolbar-title>Brick a Pic</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text href="/">About</v-btn>
      <v-btn text href="https://github.com/brick-a-pic/brick-a-pic" target="_blank">Source</v-btn>
    </v-app-bar>

    <v-content>
      <Preview ></Preview>
      <v-container
        fluid
      >
        <Settings @imageLoaded="passImage" v-if="showDrawer"></Settings>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Preview from './components/Preview.vue';
import Settings from './components/Settings.vue';

export default {
  components: {
    Preview,
    Settings,
  },
  data: () => ({
    showDrawer: true,
    imageUrl: '',
  }),
  methods: {
    passImage(data) {
      this.imageUrl = data;
    },
  },
};
</script>
