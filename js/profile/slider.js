"use strict"

{
    let leftButton = document.querySelector(".profile-slider__button-left");
    let rightButton = document.querySelector(".profile-slider__button-right");
    let sliderContent = document.querySelector(".profile-slider__content");

    let sliderContentPairs = document.querySelectorAll(".profile-slider__content-pair");
    let contentPairNumber = sliderContentPairs.length;

    let sliderImg = document.querySelector(".profile-slider__content-item-img");
    let sliderImgWidth = parseInt(window.getComputedStyle(sliderImg).width);

    let sliderMargin = parseInt(window.getComputedStyle(sliderContentPairs[0]).marginRight);

    let sliderContentVisible = document.querySelector(".profile-slider__content_visible");
    let sliderPairsVisibleNumber = Math.round(
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

