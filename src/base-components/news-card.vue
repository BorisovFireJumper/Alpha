<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  item: Object
})


</script>

<template>
  <div class="card">
    <img
        class="card-img"
        v-if="props.item.image"
        :src="props.item.image"
        alt="news image"
    />
    <div :class="[!props.item.image ? 'card-container-full' : '', 'card-container-half']">
      <div class="card-date">
        <span class="card-date-day">23</span>
        <div class="card-date-month-year-container">
          <span class="card-month">Февраль</span>
          <span class="card-year">2022</span>
        </div>
      </div>
      <h5 class="card-title">{{ props.item.name }}</h5>
      <p class="card-text">{{ props.item.previewText }}
        <div class="helper" />
      </p>
      <div class="card-tag">
        <a :href="props.item.link">{{props.item.type.value}}</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/styles/variables";

  .card {
    width: 100%;
    height: 100%;


    border: 1px solid $border_blue;
    border-radius: 16px;

    &-img {
      width: 100%;
      max-height: 250px;

      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }

   &-container-half {
     display: flex;
     height: calc(100% - 250px);
     width: 100%;
     border-bottom-left-radius: inherit;
     border-bottom-right-radius: inherit;

     flex-direction: column;
     padding: 0 32px 32px 32px;
   }

    &-container-full {
      padding: 32px;
      height: 100%;
    }


    &-img {
      width: 100%;
      height: 50%;
      background-size: cover;
    }

    &-date {
      display: flex;
      margin: 32px 0 0 16px;

      color: $gray;
      font-weight: 700;
      font-size: 15px;
      line-height: 16.5px;

      width: 120px;
      height: 36px;
      gap: 4px;

      &-day {
        line-height: 100%;
        font-size: 36px;
        font-weight: 400;
      }


      &-month-year-container {
        display: flex;
        flex-direction: column;
        width: 62px;
        height: 100%;
      }

      &-month, &-year {
        font-size: 15px;
        font-weight: 700;
        line-height: 16.5px;
        line-break: normal;
      }
    }

    &-title {
      color: $blue;
      font-size: 22px;
      font-weight: 400;
      line-height: 26.4px;

      width: 100%;

      margin-bottom: 16px;
    }

    &-text {
      position: relative;
      height: 472px;


      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      color: $black;
      font-size: 20px;
      font-weight: 400;
      line-height: 26px;


      margin-bottom:40px;
    }



    &-tag {
      margin-top: auto;


      height: 28px;
      width: fit-content;
      background-color: $wight;

      padding: 4px 16px;
      border-radius: 360px;


      a {
        color: $dip_blue;
        text-decoration: none;
      }
    }
  }


  .helper {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 10px;
    background-color: $base_wight;
  }
</style>