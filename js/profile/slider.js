"use strict"

{
    const LEFT_BUTTON_SELECTOR = ".profile-slider__button-left";
    const RIGHT_BUTTON_SELECTOR = ".profile-slider__button-right";
    const SLIDER_CONTENT_SELECTOR = ".profile-slider__content";
    const SLIDER_CONTENT_PAIR_SELECTOR = ".profile-slider__content-pair";
    const SLIDER_IMG_SELECTOR = ".profile-slider__content-item-img";
    const SLIDER_CONTENT_VISIBLE_SELECTOR = ".profile-slider__content_visible";

    const leftButton = document.querySelector(LEFT_BUTTON_SELECTOR);
    const rightButton = document.querySelector(RIGHT_BUTTON_SELECTOR);
    const sliderContent = document.querySelector(SLIDER_CONTENT_SELECTOR);
    const sliderContentPairs = document.querySelectorAll(SLIDER_CONTENT_PAIR_SELECTOR);
    const sliderImg = document.querySelector(SLIDER_IMG_SELECTOR);
    const sliderContentVisible = document.querySelector(SLIDER_CONTENT_VISIBLE_SELECTOR);

    const contentPairNumber = sliderContentPairs.length;
    const sliderImgWidth = parseInt(window.getComputedStyle(sliderImg).width);
    const sliderMargin = parseInt(window.getComputedStyle(sliderContentPairs[0]).marginRight);
    const sliderContentVisibleMaxWidth = parseInt(window.getComputedStyle(sliderContentVisible).maxWidth);
    const sliderPairsVisibleNumber = Math.round(sliderContentVisibleMaxWidth / sliderImgWidth);

    sliderContent.style.width = contentPairNumber * (sliderImgWidth + sliderMargin) - sliderMargin + "px";

    leftButton.addEventListener("click", () => {
        let sliderContentStyles  = window.getComputedStyle(sliderContent);
        let sliderContentMarginLeft = parseInt(sliderContentStyles.marginLeft);
        if (sliderContentMarginLeft !== 0) {
            sliderContent.style.marginLeft =  (sliderContentMarginLeft + sliderImgWidth + sliderMargin) + "px";
        }
    });
    rightButton.addEventListener("click", () => {
        let sliderContentStyles  = window.getComputedStyle(sliderContent);
        let sliderContentMarginLeft = parseInt(sliderContentStyles.marginLeft);
        if (sliderContentMarginLeft !== -(contentPairNumber - sliderPairsVisibleNumber)*(sliderImgWidth + sliderMargin)) {
            sliderContent.style.marginLeft =  (sliderContentMarginLeft - sliderImgWidth - sliderMargin) + "px";
        }
    });
}

