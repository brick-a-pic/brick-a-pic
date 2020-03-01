<template>
  <div>
    <div class="subtitle-1">Pick which LEGO colors you would like to use
      <div class="my-2">
       <v-btn-toggle
          v-model="toggle_multiple"
          dense
          background-color="primary"
          dark
          multiple
        >
          <v-btn fab small>
          </v-btn>
          <v-btn fab small>
          </v-btn>
          <v-btn fab small>
          </v-btn>


        </v-btn-toggle>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
