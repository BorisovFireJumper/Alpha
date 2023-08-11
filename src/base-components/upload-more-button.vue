<script setup>

const emit = defineEmits(['click'])
</script>

<template>
  <button @click="$emit('click')" class="upload-more">
    Загрузить еще
  </button>
</template>

<style scoped lang="scss">
@import 'src/assets/styles/variables';

.upload-more {
  margin: 72px 0;
  align-self: center;

  cursor: pointer;

  height: 56px;
  width: 203px;
  background: none;

  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: $button_upload_more_color;
  text-align: center;


  border: 1px solid $button_upload_more_color;
  border-radius: 8px;
}
</style>