"use strict"

{
    const leftButton = document.querySelector(".profile-slider__button-left");
    const rightButton = document.querySelector(".profile-slider__button-right");
    const sliderContent = document.querySelector(".profile-slider__content");

    const sliderContentPairs = document.querySelectorAll(".profile-slider__content-pair");
    const contentPairNumber = sliderContentPairs.length;

    const sliderImg = document.querySelector(".profile-slider__content-item-img");
    const sliderImgWidth = parseInt(window.getComputedStyle(sliderImg).width);

    const sliderMargin = parseInt(window.getComputedStyle(sliderContentPairs[0]).marginRight);

    const sliderContentVisible = document.querySelector(".profile-slider__content_visible");
    const sliderPairsVisibleNumber = Math.round(
        parseInt(window.getComputedStyle(sliderContentVisible).maxWidth) / sliderImgWidth
    );

    sliderContent.style.width = contentPairNumber * (sliderImgWidth + sliderMargin) - sliderMargin + "px";

    leftButton.addEventListener("click", () => {
        let sliderContentStyles  = window.getComputedStyle(sliderContent);
        let sliderContentMarginLeft = Number((sliderContentStyles.marginLeft).replace(/px/, ''));
        if (sliderContentMarginLeft !== 0) {
            sliderContent.style.marginLeft =  (sliderContentMarginLeft + sliderImgWidth + sliderMargin) + "px";
        }
    });
    rightButton.addEventListener("click", () => {
        let sliderContentStyles  = window.getComputedStyle(sliderContent);
        let sliderContentMarginLeft = Number((sliderContentStyles.marginLeft).replace(/px/, ''));
        if (sliderContentMarginLeft !== -(contentPairNumber - sliderPairsVisibleNumber)*(sliderImgWidth + sliderMargin)) {
            sliderContent.style.marginLeft =  (sliderContentMarginLeft - sliderImgWidth - sliderMargin) + "px";
        }
    });
}

