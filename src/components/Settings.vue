<template>
  <v-card max-width="30em" max-height="100%" style="overflow: auto;">
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
            <v-slider
              :max="100"
              :min="1"
              :value="imageWidth"
              @change="onWidthChange"
              @input="onWidthChange"
            >
              <template v-slot:append>
                <v-text-field
                  label="Width"
                  id="widthSetting"
                  type="number"
                  :value="imageWidth"
                  :rules="[rules.positive]"
                  @change="onWidthChange"
                  suffix="blocks"
                  min=1
                  max=100
                  style="width: 90px"
                ></v-text-field>
              </template>
            </v-slider>
            <v-slider
              :max="100"
              :min="1"
              :value="imageHeight"
              @change="onHeightChange"
              @input="onHeightChange"
            >
              <template v-slot:append>
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
                  style="width: 90px"
                ></v-text-field>
              </template>
            </v-slider>
            <v-switch
              v-model="preserveRatio"
              label="Preserve aspect ratio"
            ></v-switch>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
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
    imageHeight: 32,
    imageWidth: 32,
    minEdgeLength: 32,
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
