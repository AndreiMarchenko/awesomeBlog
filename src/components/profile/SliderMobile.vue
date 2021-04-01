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
              <router-link :to="{name: 'postView', params: {id: item.id}}"><img class="profile-slider__content-item-img_mobile" :src="item.pictureSrc" alt=""></router-link>
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


export default {
  mounted() {
    this.sliderContent = document.querySelector(SLIDER_CONTENT_SELECTOR);
    this.sliderContentItems = document.querySelectorAll(SLIDER_CONTENT_ITEMS_SELECTOR);
    this.sliderImg = document.querySelector(SLIDER_IMG_SELECTOR);
    this.sliderContentVisible = document.querySelector(SLIDER_CONTENT_VISIBLE_SELECTOR);

    this.contentItemsNumber = this.sliderContentItems.length;
    this.sliderImgWidth = parseInt(window.getComputedStyle(this.sliderImg).width);
    this.sliderMargin = parseInt(window.getComputedStyle(this.sliderContentItems[0]).marginRight);
    this.sliderContentVisibleMaxWidth = parseInt(window.getComputedStyle(this.sliderContentVisible).maxWidth);
    this.sliderItemsVisibleNumber = Math.round(this.sliderContentVisibleMaxWidth / this.sliderImgWidth);
  },
  data() {
    return {
      sliderContent: null,
      sliderContentItems: null,
      sliderImg: null,
      sliderContentVisible: null,
      contentItemsNumber: null,
      sliderImgWidth: null,
      sliderMargin: null,
      sliderContentVisibleMaxWidth: null,
      sliderItemsVisibleNumber: null
    }
  },
  props: {
    sliderItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    moveLeft() {
      let sliderContentStyles  = window.getComputedStyle(this.sliderContent);
      let sliderContentMarginLeft = parseInt(sliderContentStyles.marginLeft);
      if (sliderContentMarginLeft !== 0) {
        this.sliderContent.style.marginLeft =  (sliderContentMarginLeft + this.sliderImgWidth + this.sliderMargin) + "px";
      }
    },
    moveRight() {
      let sliderContentStyles  = window.getComputedStyle(this.sliderContent);
      let sliderContentMarginLeft = parseInt(sliderContentStyles.marginLeft);
      if (sliderContentMarginLeft !== -(this.contentItemsNumber - this.sliderItemsVisibleNumber)*(this.sliderImgWidth + this.sliderMargin)) {
        this.sliderContent.style.marginLeft =  (sliderContentMarginLeft - this.sliderImgWidth - this.sliderMargin) + "px";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
    padding-bottom: 20px;
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