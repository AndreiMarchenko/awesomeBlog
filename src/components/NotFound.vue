<template>
  <div class="not-found__wrapper">
    <div class="not-found__text">
      Page not Found
    </div>
    <img class="not-found__picture" :src="'../images/notFoundPicture.png'" alt="">
  </div>
</template>


<style lang="scss" scoped>
.not-found__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.not-found__text {
  font-size: 74px;
  color: $mainColor;
}
.not-found__picture {
  margin-top: 100px;
  max-width: 300px;
  height: auto;
}

@media(max-width: 550px) {
  .not-found__text {
    font-size: 42px;
  }
}
</style>