<template>
  <v-app id="inspire">
    <Settings :showDrawer="showDrawer"></Settings>

    <v-app-bar
      app
      color="indigo"
      dark
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="showDrawer = !showDrawer" />
      <v-toolbar-title>Brick a Pic</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text href="/">About</v-btn>
      <v-btn text href="https://github.com/brick-a-pic/brick-a-pic" target="_blank">Source</v-btn>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >

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
    showDrawer: null,
  }),
};
</script>
