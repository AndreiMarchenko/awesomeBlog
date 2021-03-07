<template>
  <section class="profile-slider">
    <div class="container">
      <div class="profile-slider__wrapper">
        <div
            @click="moveLeft"
            @mouseover="mouseoverStyle"
            @mouseout="mouseoutStyle"
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
            @mouseout="mouseoutStyle"
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
const SVG_SELECTOR = "svg";
const PAGE_REFERENCE_SELECTOR = "a";

const BTN_TRANSITION = "background-color .5s ease-out," +
    "border .4s ease-out," +
    "fill .1s ease-out";
const BTN_MOUSEDOWN_TRANSITION = "background-color .1s ease-out," +
    "fill .1s ease-out";
const COLOR_GREY = "grey";
const COLOR_WHITE = "#fff";
const COLOR_LIGHT_GREY = "#F5F5F5";
const COLOR_BLUE = "#308CBF";

let sliderLeftButton;
let sliderRightButton;
let sliderContent;
let sliderImg;
let sliderContentPairs;
let sliderContentVisible;
let pageReferences;

let sliderImgWidth;
let sliderMargin;
let contentPairNumber;
let sliderContentVisibleMaxWidth;
let sliderPairsVisibleNumber;


export default {
  props: {
    sliderItems: Array
  },
  mounted() {
    sliderLeftButton = document.querySelector(SLIDER_LEFT_BUTTON_SELECTOR);
    sliderRightButton = document.querySelector(SLIDER_RIGHT_BUTTON_SELECTOR);

    sliderContent = document.querySelector(SLIDER_CONTENT_SELECTOR);
    sliderImg = document.querySelector(SLIDER_IMG_SELECTOR);
    sliderContentPairs = document.querySelectorAll(SLIDER_CONTENT_PAIR_SELECTOR);
    sliderContentVisible = document.querySelector(SLIDER_CONTENT_VISIBLE_SELECTOR);

    sliderImgWidth = parseInt(window.getComputedStyle(sliderImg).width);
    sliderMargin = parseInt(window.getComputedStyle(sliderContentPairs[0]).marginRight);
    contentPairNumber = sliderContentPairs.length;
    sliderContentVisibleMaxWidth = parseInt(window.getComputedStyle(sliderContentVisible).maxWidth);
    sliderPairsVisibleNumber = Math.round(sliderContentVisibleMaxWidth / sliderImgWidth);
    pageReferences = document.querySelectorAll(PAGE_REFERENCE_SELECTOR);



    pageReferences.forEach((ref) => ref.ondragstart = () => false);
    sliderContent.style.width = contentPairNumber * (sliderImgWidth + sliderMargin) - sliderMargin + "px";

    document.addEventListener("mouseup", () => {
      this.isMouseDownBtn = false;
      this.changeStyle(sliderLeftButton, COLOR_LIGHT_GREY, COLOR_BLUE, COLOR_BLUE, BTN_TRANSITION);
      this.changeStyle(sliderRightButton, COLOR_LIGHT_GREY, COLOR_BLUE, COLOR_BLUE, BTN_TRANSITION);
    });
  },
  data() {
    return {
      isMouseDownBtn: false
    }
  },
  methods: {
    moveLeft() {
      // console.log(window.getComputedStyle(sliderContent));
      let sliderContentStyles  = window.getComputedStyle(sliderContent);
      let sliderContentMarginLeft = parseInt(sliderContentStyles.marginLeft);
      if (sliderContentMarginLeft !== 0) {
        sliderContent.style.marginLeft =  (sliderContentMarginLeft + sliderImgWidth + sliderMargin) + "px";
      }
    },
    moveRight() {
      // console.log(window.getComputedStyle(sliderContent));
      let sliderContentStyles  = window.getComputedStyle(sliderContent);
      let sliderContentMarginLeft = parseInt(sliderContentStyles.marginLeft);
      if (sliderContentMarginLeft !== -(contentPairNumber - sliderPairsVisibleNumber)*(sliderImgWidth + sliderMargin)) {
        sliderContent.style.marginLeft =  (sliderContentMarginLeft - sliderImgWidth - sliderMargin) + "px";
      }
    },
    changeStyle(btn, backgroundColor, fill, borderColor, transition) {
      btn.style.backgroundColor = backgroundColor;
      btn.querySelector(SVG_SELECTOR).style.fill = fill;
      btn.style.borderColor = borderColor;
      btn.style.transition = transition;
    },
    mouseoverStyle(e) {
      if (this.isMouseDownBtn === false) {
        let btn = e.currentTarget;
        this.changeStyle(btn, COLOR_BLUE, COLOR_WHITE, COLOR_GREY, BTN_TRANSITION);
      }
    },
    mouseoutStyle(e) {
      let btn = e.currentTarget;
      this.changeStyle(btn, COLOR_LIGHT_GREY, COLOR_BLUE, COLOR_BLUE, BTN_TRANSITION);
    },
    mousedownStyle(e) {
      this.isMouseDownBtn = true;
      let btn = e.currentTarget;
      this.changeStyle(btn, COLOR_LIGHT_GREY, COLOR_BLUE, COLOR_BLUE, BTN_MOUSEDOWN_TRANSITION);
    },
    mouseupStyle(e) {
      e.stopPropagation();
      this.isMouseDownBtn = false;
      let btn = e.currentTarget;
      this.changeStyle(btn, COLOR_BLUE, COLOR_WHITE, COLOR_GREY, BTN_TRANSITION);
    }
  },
  computed: {
    pairNumber() {
      return Math.ceil(this.sliderItems.length/2);
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../common";
@import "../variables";
.profile-slider {

  &__wrapper {
    padding-top: 50px;
    padding-bottom: 60px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__button-left {
    border-radius: 50%;
    display: inline-block;
    border: $mainColor 1px solid;
    width: 55px;
    height: 55px;
    margin-left: 90px;
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
    margin-right: 90px;
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
  }
  .profile-slider__button-right {
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