<template>
  <v-card max-width="20em">
    <v-card-title>Options</v-card-title>
    <v-card-text>
      <OpenImage @change="onImageOpen"
        @delete="ImageDelete"
        :ImageCheck = "ImageCheck"/>
      <ImageProcessor :imageUrl = "imageUrl" @imageSampled="onImageSampled"/>
      <v-layout row wrap>
          <v-flex xs3 style="margin: 24px;">
              <v-text-field
              label="Width"
              id="widthSetting"
              placeholder="32"
              type="number"
              value=32
              @change="onDimChange"
              min=0
              max=5000
              oninput="if(Number(this.value) > Number(this.max)) this.value = this.max;
                       if(Number(this.value) < Number(this.min)) this.value = this.min;"
            ></v-text-field>
            </v-flex>
            <v-flex xs3 style="margin: 24px;">
            <v-text-field
              label="Height"
              id="heightSetting"
              placeholder="32"
              value=32
              type="number"
              min=0
              max=5000
              @change="onDimChange"
              oninput="if(Number(this.value) > Number(this.max)) this.value = this.max;
                       if(Number(this.value) < Number(this.min)) this.value = this.min;"
            ></v-text-field>
          </v-flex>
        </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import OpenImage from './OpenImage.vue';
import ImageProcessor from './ImageProcessor.vue';

export default {
  name: 'Settings',
  components: {
    OpenImage,
    ImageProcessor,
  },
  data: () => ({
    ImageCheck: 0,
    imageDelete: 0,
    imageUrl: '',
  }),
  methods: {
    onImageOpen(data) {
      this.imageUrl = data;
    },
    onImageSampled(imageData) {
      this.imageData = imageData;
      this.$emit('imageLoaded', imageData)
    },
    onDimChange() {
      // console.log(document.getElementById('imageInput').value);
      this.ImageCheck = this.ImageCheck + 1;
      // this.ImageDelete();
    },
    ImageDelete() {
      // this.$emit('imageLoaded', );
    },
  },
};

</script>

<style>

</style>
