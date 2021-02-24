"use strict"

{
    const leftButtonSelector = ".profile-slider__button-left_mobile";
    const rightButtonSelector = ".profile-slider__button-right_mobile";
    const sliderContentSelector = ".profile-slider__content_mobile";
    const sliderContentItemsSelector = ".profile-slider__content-item_mobile";
    const sliderImgSelector = ".profile-slider__content-item-img_mobile";
    const sliderContentVisibleSelector = ".profile-slider__content_visible_mobile";

    const leftButton = document.querySelector(leftButtonSelector);
    const rightButton = document.querySelector(rightButtonSelector);
    const sliderContent = document.querySelector(sliderContentSelector);
    const sliderContentItems = document.querySelectorAll(sliderContentItemsSelector);
    const sliderImg = document.querySelector(sliderImgSelector);
    const sliderContentVisible = document.querySelector(sliderContentVisibleSelector);

    const contentItemsNumber = sliderContentItems.length;
    const sliderImgWidth = parseInt(window.getComputedStyle(sliderImg).width);
    const sliderMargin = parseInt(window.getComputedStyle(sliderContentItems[0]).marginRight);
    const sliderContentVisibleMaxWidth = parseInt(window.getComputedStyle(sliderContentVisible).maxWidth);
    const sliderItemsVisibleNumber = Math.round(sliderContentVisibleMaxWidth / sliderImgWidth);

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
        if (sliderContentMarginLeft !== -(contentItemsNumber - sliderItemsVisibleNumber)*(sliderImgWidth + sliderMargin)) {
            sliderContent.style.marginLeft =  (sliderContentMarginLeft - sliderImgWidth - sliderMargin) + "px";
        }
    });
}