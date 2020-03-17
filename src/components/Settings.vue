<template>
  <v-card max-width="20em">
    <v-card-title>Options</v-card-title>
    <v-card-text>
      <OpenImage @change="onImageOpen"
        :imageCheck="imageCheck"/>
      <ImageProcessor
        :image-width="imageWidth"
        :image-height="imageHeight"
        :image-url="imageUrl"
        :colors="colors"
        @imageSampled="onImageSampled"/>
      <v-layout row wrap>
        <v-flex xs3 style="margin: 24px;">
            <v-text-field
            label="Width"
            id="widthSetting"
            type="number"
            v-model.number.lazy ="imageWidth"
            min=1
            max=100
          ></v-text-field>
          </v-flex>
          <v-flex xs3 style="margin: 24px;">
          <v-text-field
            label="Height"
            id="heightSetting"
            v-model.number.lazy ="imageHeight"
            type="number"
            min=1
            max=100
          ></v-text-field>
        </v-flex>
      </v-layout>
      <ColorPicker v-model="colors"/>
    </v-card-text>
  </v-card>
</template>

<script>
import OpenImage from './OpenImage.vue';
import ImageProcessor from './ImageProcessor.vue';
import ColorPicker from './ColorPicker.vue';

export default {
  name: 'Settings',
  components: {
    OpenImage,
    ImageProcessor,
    ColorPicker,
  },
  data: () => ({
    imageCheck: 0,
    imageUrl: '',
    imageHeight: 64,
    imageWidth: 64,
    minEdgeLength: 64,
    minWidth: 1,
    maxWidth: 100,
    minHeight: 1,
    maxHeight: 100,
    colors: [0, 1, 2, 3],
  }),
  methods: {
    onImageOpen(data) {
      // we briefly unpack the image here from its url to automatically
      // determine what the proportions of the transformed image should be
      const tmpImg = new Image();
      // const self = this;
      tmpImg.onload = () => {
        const aspectRatio = tmpImg.height / tmpImg.width;
        if (tmpImg.height > tmpImg.width) {
          this.imageWidth = this.minEdgeLength;
          this.imageHeight = Math.floor(this.minEdgeLength * aspectRatio);
        } else if (tmpImg.height < tmpImg.width) {
          this.imageHeight = this.minEdgeLength;
          this.imageWidth = Math.floor(this.minEdgeLength / aspectRatio);
        } else {
          this.imageWidth = this.minEdgeLength;
          this.imageHeight = this.minEdgeLength;
        }
        this.imageUrl = data;
      };
      tmpImg.src = data;
    },
    onImageSampled(imageData) {
      this.imageData = imageData;
      this.$emit('imageLoaded', imageData);
    },
  },
};

</script>

<style>

</style>
