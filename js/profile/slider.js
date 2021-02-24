"use strict"

{
    const leftButtonSelector = ".profile-slider__button-left";
    const rightButtonSelector = ".profile-slider__button-right";
    const sliderContentSelector = ".profile-slider__content";
    const sliderContentPairSelector = ".profile-slider__content-pair";
    const sliderImgSelector = ".profile-slider__content-item-img";
    const sliderContentVisibleSelector = ".profile-slider__content_visible";

    const leftButton = document.querySelector(leftButtonSelector);
    const rightButton = document.querySelector(rightButtonSelector);
    const sliderContent = document.querySelector(sliderContentSelector);
    const sliderContentPairs = document.querySelectorAll(sliderContentPairSelector);
    const sliderImg = document.querySelector(sliderImgSelector);
    const sliderContentVisible = document.querySelector(sliderContentVisibleSelector);

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

