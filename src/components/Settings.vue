<template>
  <v-card max-width="20em" max-height="100%" style="overflow: auto;">
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
      <v-container fluid>
        <v-row>
          <v-col>
            <v-text-field
              label="Width"
              id="widthSetting"
              type="number"
              :value="imageWidth"
              @change="onWidthChange"
              :rules="[rules.positive]"
              suffix="blocks"
              min=1
              max=100
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Height"
              id="heightSetting"
              :value="imageHeight"
              @change="onHeightChange"
              :rules="[rules.positive]"
              suffix="blocks"
              type="number"
              min=1
              max=100
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
          <v-switch
            v-model="preserveRatio"
            label="Preserve aspect ratio"
          ></v-switch>
          </v-col>
        </v-row>
      </v-container>
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
    preserveRatio: true,
    rules: {
      positive: value => value > 0 || 'Must be positive',
    },
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
    ImageDelete() {
      // this.$emit('imageLoaded', );
    },
    onHeightChange(newHeight) {
      if (newHeight < 1) return; // TODO: tie this to the rules parameter

      if (this.preserveRatio) {
        this.imageWidth = Math.round(this.imageWidth * newHeight / this.imageHeight);
      }
      this.imageHeight = newHeight;
    },
    onWidthChange(newWidth) {
      if (newWidth < 1) return; // TODO: tie this to the rules parameter

      if (this.preserveRatio) {
        this.imageHeight = Math.round(this.imageHeight * newWidth / this.imageWidth);
      }
      this.imageWidth = newWidth;
    },
  },
};

</script>

<style>

</style>
