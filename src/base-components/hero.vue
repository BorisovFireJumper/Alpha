<script setup>

</script>

<template>
  <div class="hero">
    <h2 class="hero-title">Новости</h2>
  </div>
</template>

<style scoped lang="scss">
  .hero {
    display: flex;
    width: 100%;
    height: 320px;

    align-items: flex-end;

    background-image: url("src/assets/img/hero-background.jpg");
    background-size: cover;
    background-clip: content-box;

    &-title {
      margin-left:100px;
      margin-bottom: 40px;


      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      text-align: left;
    }
  }
</style>