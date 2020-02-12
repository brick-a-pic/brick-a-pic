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
      <div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;
      background-color: #ccc"></div>
      <v-container
        class="fill-height"
        fluid
      >
        <Settings v-if="showDrawer"></Settings>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Settings from './components/Settings.vue';

export default {
  components: {
    Settings,
  },
  data: () => ({
    showDrawer: true,
  }),
};
</script>
