<script setup>
import NewsCard from "./news-card.vue";
import UploadMoreButton from "./upload-more-button.vue";

import {computed, onMounted, ref} from "vue";
import {getNews} from "../api/api.js";

const list = ref([]);
const offset = ref(9);

onMounted(async () => {
  const response = await getNews(1);
  list.value = response.items;
})

const renderArrayList = computed(() => {
  return list.value.slice(0, offset.value);
});

const onClickHandler = () => {
  offset.value += 9;
};


</script>

<template>
  <div class="news-list">
    <div class="news-list-container">
      <NewsCard v-for="item in renderArrayList" :item="item"/>
    </div>
    <UploadMoreButton @click="onClickHandler" />
  </div>
</template>

<style scoped lang="scss">
@import 'src/assets/styles/variables';

 .news-list {
   display: flex;
   flex-direction: column;

   padding: 64px 100px 100px 72px;
   width: 100%;
   height: 100%;

   &-container {
     width: 100%;
     height: 100%;

     display: grid;
     grid-column-gap: 48px;
     grid-row-gap: 64px;


     grid-template-rows: repeat(3, 630px);
     grid-auto-rows: 630px;

     justify-content: center;

     grid-template-columns: repeat(3, minmax(230px, 536px));
     grid-auto-columns: 536px;


     @media (max-width: $laptop) {
       grid-template-columns: repeat(2, minmax(230px, 536px));
     }

     @media(max-width: $tablet) {
       grid-template-rows: repeat(3, 1fr);
       grid-template-columns: minmax(230px, 536px);
     }

   }
 }
</style>