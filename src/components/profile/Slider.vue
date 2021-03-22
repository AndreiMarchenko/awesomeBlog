<template>
  <section class="profile-slider">
    <div class="profile-slider__container container">
      <div class="profile-slider__wrapper">
        <div
            @click="moveLeft"
            @mouseover="mouseoverStyle"
            @mouseleave="mouseleaveStyle"
            @mousedown="mousedownStyle"
            @mouseup="mouseupStyle"
            class="profile-slider__button-left">
          <a class="profile-slider__button-left-ref" href="#">
            <svg class="profile-slider__button-left-svg" width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM33 7L1 7V9L33 9V7Z"/>
            </svg>
          </a>
        </div>

        <div class="profile-slider__content_visible">
          <div class="profile-slider__content">
            <div v-for="i in pairNumber" class="profile-slider__content-pair">
              <template v-for="j in 2">
                <div v-if="(i - 1)*2 + j <= sliderItems.length" class="profile-slider__content-item">
                  <a href="#"><img class="profile-slider__content-item-img" :src="sliderItems[(i - 1)*2 + j - 1].pictureSrc" alt=""></a>
                </div>
              </template>
            </div>
          </div>
        </div>

        <div
            @click="moveRight"
            @mouseover="mouseoverStyle"
            @mouseleave="mouseleaveStyle"
            @mousedown="mousedownStyle"
            @mouseup="mouseupStyle"
            class="profile-slider__button-right">
          <a class="profile-slider__button-right-ref" href="#">
            <svg class="profile-slider__button-right-svg" width="35" height="16" viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.69 9.27114C34.0872 8.88741 34.0982 8.25434 33.7144 7.85714L27.4612 1.38435C27.0775 0.987153 26.4444 0.976232 26.0472 1.35996C25.65 1.74369 25.6391 2.37676 26.0228 2.77397L31.5812 8.52755L25.8277 14.086C25.4305 14.4697 25.4195 15.1028 25.8033 15.5C26.187 15.8972 26.8201 15.9081 27.2173 15.5244L33.69 9.27114ZM0.982752 8.99985L32.978 9.55179L33.0125 7.55209L1.01725 7.00015L0.982752 8.99985Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const SLIDER_LEFT_BUTTON_SELECTOR = ".profile-slider__button-left";
const SLIDER_RIGHT_BUTTON_SELECTOR = ".profile-slider__button-right";
const SLIDER_CONTENT_SELECTOR = ".profile-slider__content";
const SLIDER_IMG_SELECTOR = ".profile-slider__content-item-img";
const SLIDER_CONTENT_PAIR_SELECTOR = ".profile-slider__content-pair";
const SLIDER_CONTENT_VISIBLE_SELECTOR = ".profile-slider__content_visible";
const PAGE_REFERENCE_SELECTOR = "a";

const MOUSEOVER_ACTIVE_CLASS = "profile-slider__button_mouseover_active";
const MOUSELEAVE_ACTIVE_CLASS = "profile-slider__button_mouseleave_active";
const MOUSEDOWN_ACTIVE_CLASS = "profile-slider__button_mousedown_active";


export default {
  props: {
    sliderItems: Array
  },
  mounted() {
    this.sliderLeftButton = document.querySelector(SLIDER_LEFT_BUTTON_SELECTOR);
    this.sliderRightButton = document.querySelector(SLIDER_RIGHT_BUTTON_SELECTOR);

    this.sliderContent = document.querySelector(SLIDER_CONTENT_SELECTOR);
    this.sliderImg = document.querySelector(SLIDER_IMG_SELECTOR);
    this.sliderContentPairs = document.querySelectorAll(SLIDER_CONTENT_PAIR_SELECTOR);
    this.sliderContentVisible = document.querySelector(SLIDER_CONTENT_VISIBLE_SELECTOR);

    this.sliderImgWidth = parseInt(window.getComputedStyle(this.sliderImg).width);
    this.sliderMargin = parseInt(window.getComputedStyle(this.sliderContentPairs[0]).marginRight);
    this.contentPairNumber = this.sliderContentPairs.length;
    this.sliderContentVisibleMaxWidth = parseInt(window.getComputedStyle(this.sliderContentVisible).maxWidth);
    this.sliderPairsVisibleNumber = Math.round(this.sliderContentVisibleMaxWidth / this.sliderImgWidth);
    this.pageReferences = document.querySelectorAll(PAGE_REFERENCE_SELECTOR);



    this.pageReferences.forEach((ref) => ref.ondragstart = () => false);
    this.sliderContent.style.width = this.contentPairNumber * (this.sliderImgWidth + this.sliderMargin) - this.sliderMargin + "px";

    document.addEventListener("mouseup", () => {
      this.sliderLeftButton.classList.remove(MOUSEDOWN_ACTIVE_CLASS);
      this.sliderRightButton.classList.remove(MOUSEDOWN_ACTIVE_CLASS);
    });
  },
  data() {
    return {
      sliderLeftButton: null,
      sliderRightButton: null,
      sliderContent: null,
      sliderImg: null,
      sliderContentPairs: null,
      sliderContentVisible: null,
      pageReferences: null,
      sliderImgWidth: null,
      sliderMargin: null,
      contentPairNumber: null,
      sliderContentVisibleMaxWidth: null,
      sliderPairsVisibleNumber: null,
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
      if (sliderContentMarginLeft !== -(this.contentPairNumber - this.sliderPairsVisibleNumber)*(this.sliderImgWidth + this.sliderMargin)) {
        this.sliderContent.style.marginLeft =  (sliderContentMarginLeft - this.sliderImgWidth - this.sliderMargin) + "px";
      }
    },
    mouseoverStyle(e) {
      if (! e.currentTarget.classList.contains(MOUSEDOWN_ACTIVE_CLASS)) {
        e.currentTarget.classList.add(MOUSEOVER_ACTIVE_CLASS);
        e.currentTarget.classList.remove(MOUSELEAVE_ACTIVE_CLASS);
      }
    },
    mouseleaveStyle(e) {
      e.currentTarget.classList.add(MOUSELEAVE_ACTIVE_CLASS);
      e.currentTarget.classList.remove(MOUSEOVER_ACTIVE_CLASS);
    },
    mousedownStyle(e) {
      e.currentTarget.classList.add(MOUSEDOWN_ACTIVE_CLASS);
    },
    mouseupStyle(e) {
      e.stopPropagation();
      e.currentTarget.classList.remove(MOUSEDOWN_ACTIVE_CLASS);
      e.currentTarget.classList.add(MOUSEOVER_ACTIVE_CLASS);
    }
  },
  computed: {
    pairNumber() {
      return Math.ceil(this.sliderItems.length/2);
    }
  }
}
</script>

<style lang="scss" scoped>

.profile-slider {
  display: flex;
  flex-grow: 1;

  &__button_mouseover_active {
    background-color: $mainColor;
    border-color: $bgColor;
    transition: background-color .5s ease-out,
    border .4s ease-out,
    fill .1s ease-out;
    svg {
      fill: $white;
    }
  }
  &__button_mouseleave_active {
    background-color: $bgColor;
    border-color: grey;
    transition: background-color .5s ease-out,
    border .4s ease-out,
    fill .1s ease-out;
    svg {
      fill: $mainColor;
    }
  }
  &__button_mousedown_active {
    background-color: $bgColor;
    border-color: grey;
    transition: background-color .1s ease-out,
    fill .1s ease-out;
    svg {
      fill: $mainColor;
    }
  }

  &__container {
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }
  &__wrapper {
    padding-top: 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__button-left {
    border-radius: 50%;
    display: inline-block;
    border: $mainColor 1px solid;
    width: 55px;
    height: 55px;
    margin-left: 80px;
    margin-top: 177px;
    margin-right: 40px;
  }
  &__button-left-ref {
    display: inline-block;
  }
  &__button-left-svg {
    display: block;
    margin: 18px 10px;
    fill : $mainColor;
  }
  &__button-right {
    border-radius: 50%;
    display: inline-block;
    border: $mainColor 1px solid;
    width: 55px;
    height: 55px;
    margin-right: 80px;
    margin-top: 177px;
    margin-left: 40px;
  }
  &__button-right-ref {
    display: inline-block;
  }
  &__button-right-svg {
    display: block;
    margin: 18px 10px;
    fill : $mainColor;
  }
  &__content {
    display: flex;
    max-height: 500px;
  }
  &__content-pair {
    display: flex;
    height: 410px;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 10px;
  }
  &__content_visible {
    max-height: 410px;
    max-width: 900px;
    overflow: hidden;
  }
  &__content-item-img {
    width: 294px;
    height: 200px;
    display: block;
  }
}
@media (max-width: 1250px) {
  .profile-slider__button-left {
    margin-left: 20px;
    margin-right: 20px;
  }
  .profile-slider__button-right {
    margin-left: 20px;
    margin-right: 20px;
  }
}
@media (max-width: 1100px) {
  .profile-slider__button-left {
    margin-left: 130px;
  }
  .profile-slider__button-right {
    margin-right: 130px;
  }
  .profile-slider__content_visible {
    max-width: 600px;
  }
}
@media (max-width: 1040px) {
  .profile-slider__button-left {
    margin-left: 90px;
  }
  .profile-slider__button-right {
    margin-right: 90px;
  }
}
@media (max-width: 950px) {
  .profile-slider {
    display: none;
  }
}
</style>