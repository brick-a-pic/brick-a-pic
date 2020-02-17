<template>
  <v-file-input
    label="Open image"
    accept="image/*"
    prepend-icon="mdi-image"
    :clearable="false"
    :rules="rules"
    @change="onChange"
  ></v-file-input>
</template>

<script>
export default {
  name: 'OpenImage',

  data() {
    return {
      rules: [
        value => !value || value.type.startsWith('image/') || 'Please select a valid image',
      ],
    };
  },

  methods: {
    onChange(file) {
      if (!file) return;
      // TODO: return if validation fails

      const imageUrl = URL.createObjectURL(file);
      const image = new Image();
      image.src = imageUrl;

      // Need to wait until after load to do this
      // URL.revokeObjectURL(imageUrl);

      this.$emit('change', image);
    },
  },
};
</script>

<style>

</style>
