<template>
  <div>
    <v-file-input
      label="Open image"
      id="imageInput"
      accept="image/*"
      prepend-icon="mdi-image"
      :clearable="false"
      :rules="rules"
      ref="chosenFile"
      @change="onChange"
    ></v-file-input>

    <div class="subtitle-1">Choose a sample</div>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="(sample, sampleIndex) in sampleImages"
          :key="sampleIndex"
          cols="4"
        >
          <v-card
            flat tile link
            @click="$emit('change', sample)"
          >
            <v-img
              :src="sample"
              aspect-ratio="1"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const sample1 = require('../assets/sample1.png');
const sample2 = require('../assets/sample1.png');
const sample3 = require('../assets/sample1.png');

export default {
  name: 'OpenImage',
  props: ['ImageCheck'],
  watch: {
    ImageCheck() {
      const imageUrl = URL.createObjectURL(this.fileUpload);
      console.log(this.fileUpload);
      console.log('This is a test');
      this.$emit('change', imageUrl);
      this.$emit('delete');
      // Need to wait until after load to do this
      // URL.revokeObjectURL(imageUrl);
    },
  },
  data() {
    return {
      chosenFile: null, // <- initialize the v-model prop
      data: null,
      rules: [
        value => !value || value.type.startsWith('image/') || 'Please select a valid image',
      ],
      sampleImages: [
        sample1,
        sample2,
        sample3,
      ],
      fileUpload: null,
    };
  },

  methods: {
    onChange(file) {
      if (!file) return;
      // TODO: return if validation fails
      // console.log(file);

      const imageUrl = URL.createObjectURL(file);
      this.fileUpload = file;
      this.$emit('change', imageUrl);
      // Need to wait until after load to do this
      // URL.revokeObjectURL(imageUrl);
    },
  },
};
</script>

<style>

</style>
