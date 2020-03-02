<template>
  <v-card max-width="20em">
    <v-card-title>Options</v-card-title>
    <v-card-text>
      <OpenImage @change="onImageOpen"
        @delete="ImageDelete"
        :imageCheck="imageCheck"/>
      <ImageProcessor
        :image-width="imageWidth"
        :image-height="imageHeight"
        :image-url="imageUrl"
        @imageSampled="onImageSampled"/>
      <v-layout row wrap>
          <v-flex xs3 style="margin: 24px;">
              <v-text-field
              label="Width"
              id="widthSetting"
              placeholder="64"
              type="number"
              v-model="imageWidth"
              @change="validateWidth"
              min=0
              max=5000
            ></v-text-field>
            </v-flex>
            <v-flex xs3 style="margin: 24px;">
            <v-text-field
              label="Height"
              id="heightSetting"
              placeholder="64"
              v-model="imageHeight"
              @change="validateHeight"
              type="number"
              min=0
              max=5000
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
    imageCheck: 0,
    imageDelete: 0,
    imageUrl: '',
    imageHeight: 64,
    imageWidth: 64,
    minEdgeLength: 64,
    minWidth: 1,
    maxWidth: 100,
    minHeight: 1,
    maxHeight: 100,
  }),
  methods: {
    onImageOpen(data) {
      // we briefly unpack the image here from its url to automatically
      // determine what the proportions of the transformed image should be
      const tmpImg = new Image();
      const self = this;
      tmpImg.onload = () => {
        const aspectRatio = tmpImg.height / tmpImg.width;
        if (tmpImg.height > tmpImg.width) {
          this.imageWidth = self.minEdgeLength;
          this.imageHeight = Math.floor(self.minEdgeLength * aspectRatio);
        } else if (tmpImg.height < tmpImg.width) {
          this.imageHeight = self.minEdgeLength;
          this.imageWidth = Math.floor(self.minEdgeLength * aspectRatio);
        } else {
          this.imageWidth = self.minEdgeLength;
          this.imageHeight = self.minEdgeLength;
        }
        self.imageUrl = data;
      };
      tmpImg.src = data;
    },
    onImageSampled(imageData) {
      this.imageData = imageData;
      this.$emit('imageLoaded', imageData);
    },
    validateWidth() {
      if (typeof this.imageWidth === 'string') {
        this.imageWidth = parseInt(this.imageWidth, 10);
      }
      if (this.imageWidth < this.minWidth || Number.isNaN(this.imageWidth) || typeof this.imageWidth === 'undefined') {
        this.imageWidth = this.minWidth;
      }
      if (this.imageWidth > this.maxWidth) {
        this.imageWidth = this.maxWidth;
      }
    },
    validateHeight() {
      if (typeof this.imageHeight === 'string') {
        this.imageHeight = parseInt(this.imageHeight, 10);
      }
      if (this.imageHeight < this.minHeight) {
        this.imageHeight = this.minHeight;
      }
      if (this.imageHeight > this.maxHeight) {
        this.imageHeight = this.maxHeight;
      }
    },
    ImageDelete() {
      // this.$emit('imageLoaded', );
    },
  },
};

</script>

<style>

</style>
