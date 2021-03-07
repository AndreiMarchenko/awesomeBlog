<template>
  <section class="profile-slider_mobile">
    <div class="container">
      <div class="profile-slider__wrapper_mobile">
        <div @click="moveLeft" class="profile-slider__button-left_mobile">
          <a href="#">
            <svg width="23" height="44" viewBox="0 0 23 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.2132 42.9203L1 21.7071M1.00001 22.2132L22.2132 1.00001" stroke="#308CBF"/>
            </svg>
          </a>
        </div>

        <div class="profile-slider__content_visible_mobile">
          <div class="profile-slider__content_mobile">
            <div v-for="item in sliderItems" class="profile-slider__content-item_mobile">
              <a href="#"><img class="profile-slider__content-item-img_mobile" :src="item.pictureSrc" alt=""></a>
            </div>
          </div>
        </div>

        <div @click="moveRight" class="profile-slider__button-right_mobile">
          <a href="#">
            <svg width="23" height="44" viewBox="0 0 23 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.999992 1L22.2132 22.2132M22.2132 21.7071L0.999985 42.9203" stroke="#308CBF"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const SLIDER_CONTENT_SELECTOR = ".profile-slider__content_mobile";
const SLIDER_CONTENT_ITEMS_SELECTOR = ".profile-slider__content-item_mobile";
const SLIDER_IMG_SELECTOR = ".profile-slider__content-item-img_mobile";
const SLIDER_CONTENT_VISIBLE_SELECTOR = ".profile-slider__content_visible_mobile";

let sliderContent;
let sliderContentItems;
let sliderImg;
let sliderContentVisible;

let contentItemsNumber;
let sliderImgWidth;
let sliderMargin;
let sliderContentVisibleMaxWidth;
let sliderItemsVisibleNumber;

export default {
  mounted() {
    sliderContent = document.querySelector(SLIDER_CONTENT_SELECTOR);
    sliderContentItems = document.querySelectorAll(SLIDER_CONTENT_ITEMS_SELECTOR);
    sliderImg = document.querySelector(SLIDER_IMG_SELECTOR);
    sliderContentVisible = document.querySelector(SLIDER_CONTENT_VISIBLE_SELECTOR);

    contentItemsNumber = sliderContentItems.length;
    sliderImgWidth = parseInt(window.getComputedStyle(sliderImg).width);
    sliderMargin = parseInt(window.getComputedStyle(sliderContentItems[0]).marginRight);
    sliderContentVisibleMaxWidth = parseInt(window.getComputedStyle(sliderContentVisible).maxWidth);
    sliderItemsVisibleNumber = Math.round(sliderContentVisibleMaxWidth / sliderImgWidth);
  },
  props: {
    sliderItems: Array
  },
  methods: {
    moveLeft() {
      let sliderContentStyles  = window.getComputedStyle(sliderContent);
      let sliderContentMarginLeft = parseInt(sliderContentStyles.marginLeft);
      if (sliderContentMarginLeft !== 0) {
        sliderContent.style.marginLeft =  (sliderContentMarginLeft + sliderImgWidth + sliderMargin) + "px";
      }
    },
    moveRight() {
      let sliderContentStyles  = window.getComputedStyle(sliderContent);
      let sliderContentMarginLeft = parseInt(sliderContentStyles.marginLeft);
      if (sliderContentMarginLeft !== -(contentItemsNumber - sliderItemsVisibleNumber)*(sliderImgWidth + sliderMargin)) {
        sliderContent.style.marginLeft =  (sliderContentMarginLeft - sliderImgWidth - sliderMargin) + "px";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../common";
.profile-slider_mobile {
  display: none;
}
@media (max-width: 950px) {
  .profile-slider_mobile {
    display: block;
  }
  .profile-slider__wrapper_mobile {
    display: flex;
    justify-content: center;
    padding-top: 25px;
  }
  .profile-slider__content_visible_mobile {
    max-width: 441px;
    overflow: hidden;
  }
  .profile-slider__content_mobile {
    display: flex;
  }
  .profile-slider__content-item_mobile {
    width: 441px;
    height: 300px;
  }
  .profile-slider__content-item-img_mobile {
    width: 441px;
    height: 300px;
  }
  .profile-slider__button-right_mobile {
    border-radius: 0;
    border: none;
    margin-top: 120px;
    margin-left: 50px;
  }
  .profile-slider__button-left_mobile {
    border-radius: 0;
    border: none;
    margin-top: 120px;
    margin-right: 50px;
  }
}
@media (max-width: 768px) {
  .profile-slider__wrapper_mobile {
    padding-bottom: 20px;
  }
}
@media (max-width: 730px) {
  .profile-slider__button-left_mobile {
    margin-left: 5px;
  }
  .profile-slider__button-right_mobile {
    margin-right: 5px;
  }
}
@media (max-width: 600px) {
  .profile-slider__content_visible_mobile {
    max-width: 350px;
    overflow: hidden;
  }
  .profile-slider__content_mobile {
    display: flex;
  }
  .profile-slider__content-item_mobile {
    width: 350px;
    height: 239px;
  }
  .profile-slider__content-item-img_mobile {
    width: 350px;
    height: 239px;
  }
  .profile-slider__button-right_mobile {
    margin-top: 90px;
  }
  .profile-slider__button-left_mobile {
    margin-top: 90px;
  }
}
@media (max-width: 510px) {
  .profile-slider__content_visible_mobile {
    max-width: 270px;
    overflow: hidden;
  }
  .profile-slider__content_mobile {
    display: flex;
  }
  .profile-slider__content-item_mobile {
    width: 270px;
    height: 183px;
  }
  .profile-slider__content-item-img_mobile {
    width: 270px;
    height: 183px;
  }
  .profile-slider__button-left_mobile {
    margin-top: 65px;
    margin-left: 10px;
    margin-right: 20px;
  }
  .profile-slider__button-right_mobile {
    margin-top: 65px;
    margin-right: 10px;
    margin-left: 20px;
  }
}
@media (max-width: 440px) {
  .profile-slider__content_visible_mobile {
    max-width: 270px;
    overflow: hidden;
  }
  .profile-slider__content_mobile {
    display: flex;
  }
  .profile-slider__content-item_mobile {
    width: 270px;
    height: 183px;
  }
  .profile-slider__content-item-img_mobile {
    width: 270px;
    height: 183px;
  }
}
@media (max-width: 425px) {
  .profile-slider__button-left_mobile {
    margin-top: 65px;
    margin-left: 5px;
    margin-right: 10px;
  }
  .profile-slider__button-right_mobile {
    margin-top: 65px;
    margin-right: 5px;
    margin-left: 10px;
  }
}
@media (max-width: 375px) {
  .profile-slider__button-left_mobile {
    margin-top: 65px;
    margin-left: 0px;
    margin-right: 2px;
  }
  .profile-slider__button-right_mobile {
    margin-top: 65px;
    margin-right: 0px;
    margin-left: 2px;
  }
}
</style>